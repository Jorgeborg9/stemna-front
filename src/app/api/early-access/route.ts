import { createLeadClient } from "@/lib/supabase/admin";
import { duplicateMessage, failureMessage, validateLead } from "@/lib/early-access";

export const runtime = "nodejs";
const reply = (body: object, status = 200) => Response.json(body, {
  status, headers: { "Cache-Control": "no-store" },
});

export async function POST(request: Request) {
  if (!request.headers.get("content-type")?.toLowerCase().startsWith("application/json")) {
    return reply({ message: failureMessage }, 415);
  }
  if (request.headers.get("sec-fetch-site") === "cross-site") return reply({ message: failureMessage }, 403);
  try {
    // Bound the actual stream, including requests without a Content-Length header.
    const reader = request.body?.getReader();
    if (!reader) return reply({ message: failureMessage }, 400);
    const chunks: Uint8Array[] = [];
    let size = 0;
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      size += value.byteLength;
      if (size > 4096) {
        await reader.cancel();
        return reply({ message: failureMessage }, 413);
      }
      chunks.push(value);
    }
    let input: unknown;
    try { input = JSON.parse(Buffer.concat(chunks).toString("utf8")); }
    catch { return reply({ message: failureMessage }, 400); }
    if (!input || typeof input !== "object" || Array.isArray(input)) return reply({ message: failureMessage }, 400);
    const website = (input as Record<string, unknown>).website;
    if (typeof website === "string" && website.trim()) return reply({ status: "success" });
    if (website !== undefined && typeof website !== "string") return reply({ message: failureMessage }, 400);
    const lead = validateLead(input);
    if (!lead) return reply({ message: "Fyll inn navn, gyldig e-postadresse og yrke." }, 400);
    // Only these validated columns are written. No public RLS policy is needed.
    const { error } = await createLeadClient().from("early_access_leads").insert(lead);
    if (error?.code === "23505") return reply({ status: "duplicate", message: duplicateMessage });
    if (error) return reply({ message: failureMessage }, 500);
    return reply({ status: "success" }, 201);
  } catch {
    return reply({ message: failureMessage }, 500);
  }
}
