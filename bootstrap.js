const ROOT = 'https://wardxela.github.io/optimax-widget-cdn/';

const GOOGLE_API = 'https://fonts.googleapis.com';
const GOOGLE_STATIC = 'https://fonts.gstatic.com';
const CSS = [
  ROOT + 'static/css/main.0b912a9b.css',
  'https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700;800&family=Roboto:wght@400;700&display=swap',
];
const JS = ROOT + 'static/js/main.a2669643.js';

/**
 * Load script and append it to <head></head>
 * @param {string} src - script source
 */
function loadScript(src) {
  const script = document.createElement('script');
  script.src = src;
  script.defer = true;
  document.head.append(script);
}

/**
 * Load link and append it to <head></head>
 * @param {string} href - link source
 * @param {object} [options={}] - additional options
 */
function loadLink(href, options = {}) {
  const link = document.createElement('link');
  link.href = href;
  Object.assign(link, options);
  document.head.append(link);
}

loadLink(GOOGLE_API, { rel: 'preconnect' });
loadLink(GOOGLE_STATIC, { rel: 'preconnect', crossOrigin: 'anonymous' });
CSS.forEach(css => loadLink(css, { rel: 'stylesheet' }));
loadScript(JS);
