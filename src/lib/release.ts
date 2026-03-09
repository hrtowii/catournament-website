const RELEASE_AT_UTC_MS = Date.parse('2026-03-14T17:00:00Z');

export function isHomeReleased(nowMs = Date.now()): boolean {
  return import.meta.env.PUBLIC_RELEASE_HOME === 'true' || nowMs >= RELEASE_AT_UTC_MS;
}
