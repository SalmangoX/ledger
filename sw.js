// 月账本离线缓存。发布新版时只改这里的版本号（和 index.html 里的 APP_VERSION 保持一致）。
const VERSION = "ledger-0.23";
const FILES = ["./", "./index.html", "./manifest.webmanifest", "./icon-192.png", "./icon-512.png", "./apple-touch-icon.png"];

self.addEventListener("install", e => {
  // 安装时绕过浏览器缓存，保证存进来的是服务器上的最新文件
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(FILES.map(u => new Request(u, {cache: "reload"})))).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== VERSION).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener("fetch", e => {
  const req = e.request;
  const url = new URL(req.url);
  if (req.method !== "GET" || url.origin !== location.origin) return;
  if (url.pathname.endsWith("/sw.js") || req.cache === "no-store") return;   // 检查新版本的请求直接走网络
  if (req.mode === "navigate") {
    // 页面：有网时每次都向服务器确认最新版（不用浏览器自己的 10 分钟缓存），没网用离线缓存
    e.respondWith(fetch(req.url, {cache: "no-cache", credentials: "same-origin"}).then(res => {
      if (res.ok) { const copy = res.clone(); caches.open(VERSION).then(c => c.put("./index.html", copy)); }
      return res;
    }).catch(() => caches.match("./index.html").then(r => r || caches.match("./"))));
    return;
  }
  // 图标等：先用缓存，同时在后台向服务器确认更新
  e.respondWith(caches.match(req).then(hit => {
    const net = fetch(req.url, {cache: "no-cache", credentials: "same-origin"}).then(res => {
      if (res.ok) { const copy = res.clone(); caches.open(VERSION).then(c => c.put(req, copy)); }
      return res;
    }).catch(() => hit);
    return hit || net;
  }));
});
