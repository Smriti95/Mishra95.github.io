self.__precacheManifest = [
  {
    "url": "/_next/static/chunks/commons.e304fba0b9256846e73d.js",
    "revision": "4c180e6e6240f9835c25"
  },
  {
    "url": "/_next/static/runtime/main-fd508ba2eaf92d54803d.js",
    "revision": "0ceef72b97a301802689"
  },
  {
    "url": "/_next/static/runtime/webpack-a79426b5e11f0ba5879d.js",
    "revision": "d284d55719907d9579fa"
  },
  {
    "url": "/_next/static\\mLjKaXJYvMyu8FI494QVP\\pages\\_app.js",
    "revision": "fa6640fe229832596afe"
  },
  {
    "url": "/_next/static\\mLjKaXJYvMyu8FI494QVP\\pages\\_error.js",
    "revision": "0868079a76dffcea46fd"
  },
  {
    "url": "/_next/static\\mLjKaXJYvMyu8FI494QVP\\pages\\index.js",
    "revision": "2127fa19d7e309e2e83a"
  }
];

/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

importScripts(
  
);

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "static/favicon.ico",
    "revision": "21b739d43fcb9bbb83d8541fe4fe88fa"
  },
  {
    "url": "static/manifest.json",
    "revision": "0ffcd9c70f2cc7b620a1d2701ca4eac9"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/^https?.*/, new workbox.strategies.NetworkFirst({ "cacheName":"offlineCache", plugins: [new workbox.expiration.Plugin({ maxEntries: 200, purgeOnQuotaError: false })] }), 'GET');
