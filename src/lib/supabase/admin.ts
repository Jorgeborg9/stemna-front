import "server-only";
import { createClient, type WebSocketLikeConstructor } from "@supabase/supabase-js";
import WebSocket from "ws";

export function createLeadClient() {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SECRET_KEY;
  if (!url || !key) throw new Error("Missing server database configuration");
  return createClient(url, key, {
    auth: { persistSession: false, autoRefreshToken: false, detectSessionInUrl: false },
    // Node 20 needs a WebSocket constructor even though this client only inserts rows.
    realtime: { transport: WebSocket as unknown as WebSocketLikeConstructor },
  });
}
