export const CONTACT_ACCESS_KEY = "5d5ca8ba-7de6-4e99-b5f5-daf299f7616e";
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
