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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

importScripts(
<<<<<<< HEAD
  "/IEEE_2.0/precache-manifest.9d8ae89d197bda41d603fb4494c74b6e.js"
=======
  "/precache-manifest.ca636b9e98ff59db421e3e69b7dadde8.js"
>>>>>>> parent of e44ccd1 (Added Contact details in Modal, made a few changes in the events tab)
);

workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute("/IEEE_2.0/index.html", {
  
  blacklist: [/^\/_/,/\/[^/]+\.[^/]+$/],
});
