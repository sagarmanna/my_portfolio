export async function sendContactMessage(fields, { signal, fetcher = fetch } = {}) {
  const response = await fetcher("https://formsubmit.co/ajax/sagarmanna954@gmail.com", {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify(fields),
    signal,
  });
  if (!response.ok) throw new Error("Message service unavailable");
  const result = await response.json();
  if (result?.success !== true && result?.success !== "true") {
    throw new Error("Message service did not confirm submission");
  }
}
