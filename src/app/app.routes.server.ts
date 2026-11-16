import { RenderMode, ServerRoute } from '@angular/ssr';

/**
 * All pages are prerendered to static HTML at build time so search engines
 * and link previews get real content. Unknown URLs fall back to the
 * client-rendered shell (index.csr.html) via .htaccess.
 */
export const serverRoutes: ServerRoute[] = [
  { path: '**', renderMode: RenderMode.Prerender },
];
