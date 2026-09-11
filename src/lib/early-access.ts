export const professions = ["Logoped", "Audiopedagog", "Annet"] as const;
export const failureMessage = "Noe gikk galt. Prøv igjen.";
export const duplicateMessage = "Denne e-postadressen står allerede på interesselisten.";

export function validateLead(input: unknown) {
  if (!input || typeof input !== "object" || Array.isArray(input)) return null;
  const data = input as Record<string, unknown>;
  if (typeof data.name !== "string" || typeof data.email !== "string" || typeof data.profession !== "string") return null;
  const name = data.name.trim().replace(/\s+/g, " ");
  const email = data.email.trim().toLowerCase();
  const profession = data.profession.trim();
  if (!name || name.length > 120 || email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || !professions.some(value => value === profession)) return null;
  return { name, email, profession };
}
