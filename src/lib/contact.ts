export const CONTACT_ACCESS_KEY = "b858e62d-4977-4c34-80b2-3955129ea0e5";
export const CONTACT_ENDPOINT = "https://api.web3forms.com/submit";

type ContactRequest = (url: string, options: RequestInit) => Promise<Response>;

export async function submitContact(
  formData: FormData,
  request: ContactRequest = fetch,
) {
  const response = await request(CONTACT_ENDPOINT, {
    method: "POST",
    body: formData,
    headers: { Accept: "application/json" },
    signal: AbortSignal.timeout(20_000),
  });
  const result: unknown = await response.json();
  if (
    !response.ok ||
    typeof result !== "object" ||
    result === null ||
    !("success" in result) ||
    result.success !== true
  ) {
    throw new Error("Contact submission was not confirmed.");
  }
}
