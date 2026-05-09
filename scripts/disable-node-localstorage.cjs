// Node.js 25+ exposes a global `localStorage` that is intentionally inert
// (its methods are not implemented unless `--localstorage-file=...` is given).
// Several libraries (notably `next-themes` and Next.js dev runtime code that
// gets bundled into the server-side rendering pipeline) feature-detect SSR
// via `typeof window === 'undefined'` and assume `localStorage` is therefore
// also undefined. On Node 25 that assumption breaks and `localStorage.getItem`
// throws "is not a function" during SSR.
//
// Removing the global before Next.js loads restores the expected behavior.
try {
  if (typeof globalThis.localStorage !== 'undefined') {
    Object.defineProperty(globalThis, 'localStorage', {
      value: undefined,
      configurable: true,
      writable: true,
    });
  }
} catch {
  // Best-effort; ignore.
}
