// Prevent rapid retries even when a service response is lost after acceptance.
export function createSubmissionGuard({ now = Date.now, cooldown = 60000 } = {}) {
  const attempts = new Map();
  return fields => {
    const time = now();
    for (const [key, recorded] of attempts) {
      if (time - recorded >= cooldown) attempts.delete(key);
    }
    const key = JSON.stringify([
      fields.name?.trim(), fields.email?.trim().toLowerCase(), fields.message?.trim(),
    ]);
    if (attempts.has(key)) return false;
    attempts.set(key, time);
    return true;
  };
}
