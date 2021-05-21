// proper initialization
if ('function' === typeof importScripts) {
    importScripts('vendor/cache-polyfill.js');

    const version = "0.7";
    const cacheName = `opensourcediversity-${version}`;

    self.addEventListener('install', function(e) {
        e.waitUntil(
            caches.open(cacheName).then(function(cache) {
                return cache.addAll([
                    '/',
                    '/index.html',
                    '/css/custom.css',
                    '/css/Nunito-Bold.ttf',
                    '/css/Nunito-Regular.ttf',
                    '/css/OFL.txt',
                    '/scripts/meetupAPI.js',
                    '/vendor/bootstrap.min.css',
                    '/vendor/bootstrap.min.js',
                    '/vendor/jquery-3.3.1.min.js',
                    '/vendor/popper.min.js',
                    '/img/highlight-white-small-left.svg',
                    '/img/highlight-white-small-right.svg',
                    '/img/highlight.svg',
                    '/img/opensourcediversity-icon-margin.svg',
                    '/img/opensourcediversity-icon-white.svg',
                    '/img/discourse.svg',
                    '/img/twitter.svg',
                    '/img/github.svg',
                    '/img/irc.svg',
                    '/img/opencollective.svg',
                    '/img/projects/a11yproject.svg',
                    '/img/projects/accessibilitycloud.png',
                    '/img/projects/chaoss.jpg',
                    '/img/projects/chayn.png',
                    '/img/projects/commonvoice.png',
                    '/img/projects/contributorcovenant.png',
                    '/img/projects/diversifyfoss.png',
                    '/img/projects/diversitytickets.svg',
                    '/img/projects/doubleunion.png',
                    '/img/projects/fossjobs.svg',
                    '/img/projects/fundclub.jpg',
                    '/img/projects/girlscriptsummerofcode.jpg',
                    '/img/projects/globaldiversitycfpday.jpg',
                    '/img/projects/hacktober.jpg',
                    '/img/projects/heartofcode.jpg',
                    '/img/projects/lereset.jpg',
                    '/img/projects/open-demographics.png',
                    '/img/projects/openheroines.jpg',
                    '/img/projects/openlabs.jpg',
                    '/img/projects/opensourcedesign.svg',
                    '/img/projects/outreachy.png',
                    '/img/projects/outspokenwomen.jpg',
                    '/img/projects/prototypefund.jpg',
                    '/img/projects/railsgirls.png',
                    '/img/projects/signdict.svg',
                    '/img/projects/speakerinnen.jpg',
                    '/img/projects/supernovaproject.svg',
                    '/img/projects/upforgrabs.png',
                    '/img/projects/wheelmap.jpg',
                    '/img/projects/wikipedia-womeninred.png',
                    '/img/projects/womenhackfornonprofits.jpg',
                    '/img/projects/womeninopensource.png',
                    '/img/projects/writespeakcode.jpg',
                    '/img/projects/yourfirstpr.png'
                ]);
            })
        );
    });

    self.addEventListener('fetch', event => {
        event.respondWith(
            caches.open(cacheName)
            .then(cache => cache.match(event.request, { ignoreSearch: true }))
            .then(response => {
                return response || fetch(event.request);
            })
        );
    });
}