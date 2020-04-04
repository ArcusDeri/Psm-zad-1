const staticBicycle = "bicycle-site-v1"
const assets = [
  "index.html",
  "app.js",
  "img/bike192.png",
  "img/bike256.png",
  "img/bike512.png",
  "img/bike144.png",
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticBicycle).then(cache => {
      cache.addAll(assets)
    })
  )
})

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request)
    })
  )
})