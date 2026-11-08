export async function sendContactMessage(fields, { signal, fetcher = fetch } = {}) {
  const name = String(fields.name || "").trim();
  const email = String(fields.email || "").trim();
  const subjectName = name.replace(/[\r\n]+/g, " ").slice(0, 100);
  const payload = {
    Name: name,
    Email: email,
    Message: String(fields.message || "").trim(),
    _replyto: email,
    _subject: `Portfolio message from ${subjectName || "a visitor"}`,
    _template: "box",
  };
  const response = await fetcher("https://formsubmit.co/ajax/sagarmanna954@gmail.com", {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify(payload),
    signal,
  });
  if (!response.ok) throw new Error("Message service unavailable");
  const result = await response.json();
  if (result?.success !== true && result?.success !== "true") {
    throw new Error("Message service did not confirm submission");
  }
}
