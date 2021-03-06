export function weekAgo(): Date {
  const today = new Date();
  today.setUTCHours(today.getUTCHours() - 24 * 7);

  return today;
}

export function dateFromDatetime(date: Date): string {
  try {
    return date.toISOString().slice(0, 10);
  } catch {
    return new Date().toISOString().slice(0, 10);
  }
}
