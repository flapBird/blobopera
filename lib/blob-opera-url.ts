const RECORDING_HASH = /^#\/r\/[A-Za-z0-9_-]+$/;

/**
 * Only allow recording URLs that can safely be embedded in this site's
 * playback page. General web URLs and non-recording Blob Opera URLs are
 * intentionally rejected.
 */
export function getSafeBlobOperaRecordingUrl(
  value: string | null | undefined,
): string | null {
  if (!value) return null;

  try {
    const url = new URL(value);
    const isAllowedOrigin =
      url.protocol === "https:" &&
      url.hostname === "gacembed.withgoogle.com" &&
      url.pathname.replace(/\/+$/, "") === "/blob-opera";

    if (!isAllowedOrigin || !RECORDING_HASH.test(url.hash)) return null;
    return url.toString();
  } catch {
    return null;
  }
}
