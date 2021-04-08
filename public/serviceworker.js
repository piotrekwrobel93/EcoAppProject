const CACHE_NAME = 'version-1'
const urlsToCache = ['index.html','offline.html']
// INSTALL SERVICE WORKER
const self = this

self.addEventListener( 'install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then( cache => {
                return cache.addAll(urlsToCache)
            })
    )
})

// LISTEN FOR REQUEST
self.addEventListener( 'fetch', (event) => {

    event.respondWith(
        caches.match(event.request)
            .then( () => {
                return fetch(event.request)
                        .catch( () => caches.match('offline.html'))
            })
    )
})

// ACTIVATION
self.addEventListener( 'activation', (event) => {

    const cacheList = []
    cacheList.push(CACHE_NAME)

    event.waitUntil(
        caches.keys()
            .then( cacheNames => Promise.all(
                cacheNames.map( name => {
                    if (!cacheList.includes(name)) {
                        return cache.delete(cacheName)
                    }
                })
            ))
    )
})