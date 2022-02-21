'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "03ab97a13e6746e943916c27449d25a2",
".git/config": "a3f08b81fe64be8b360311c9e50a8462",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "6c1217ebcaff7808ee276eb25844766e",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "2ebd8f588a22a0818ac55ea6cd812bc2",
".git/logs/refs/heads/main": "5090528da5b1aec1f9db3602eca8b67e",
".git/logs/refs/remotes/origin/main": "27b24e2388d92d8184ed8a201bacf84c",
".git/objects/08/19264144d6a189aac54036e2a359fdb7696dbf": "92a1272697ebd8e8828980bccd9688af",
".git/objects/08/377a6fecb0208a355abe24928f91d537e81066": "468c810b4b7619ece705702cfdbb4eed",
".git/objects/0b/6df3b77d881fb0f1a2644cbe0813fe8c38e346": "c1022b4312fdb94f53f80a26fc066393",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/0e/d3da808cd88d926121c235c7a03eaea222987f": "08d0e7dd938d4c7aeaefca5250b0910f",
".git/objects/0f/42c58744033f70f5b2d649cc9d6f06b05176aa": "3b464f49bccbb0badc369005a6902e01",
".git/objects/11/93e95fdb1cb188c0114d930713b7a430766699": "dac5b08d651fd662b518e9be7395b6a4",
".git/objects/18/585383acaaf433b65ec174faf3765ad41e3b31": "9d45e30e47c7cf041a1d24ece0306e6e",
".git/objects/1b/49fa8cde33a573b8710dd81ff76120d79a5651": "52c3d328ac0490dc1ffb3423fc113fa5",
".git/objects/1c/785a449b7f4d41a5a36edae9f0058cd4f3e4ba": "9a9f4c272ede5b92216513952b0abcd5",
".git/objects/1c/aab01e8397dbc3cbb061dc478c0a906348b71d": "9f401c4afaa6793be7ea6323e8af8b00",
".git/objects/1e/6c05cbff801c9a0ac4e30d3964e22147df07f8": "7757c3251691f08cb6c7f87e6fdac5ee",
".git/objects/1e/a5edd7767b7580ff301dd1928cb3f03faf580c": "f96823a238cc2ca064f842b124af7091",
".git/objects/1f/636b757c14760a591827f6275ff9c2898bae54": "884dbee80013d53f0466268ee24c81f6",
".git/objects/1f/93be47b6358284f6e63f30e2570428eb08ccaa": "fd87d0f289a8d157ae99cb87add65a2d",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/21/6abd1e607095a3c093aa33bf57d417a8966a00": "f020cbdf1b2ecec958275b2ef8231a9e",
".git/objects/21/a65219e26360f2ca38c744b94baa7713f87691": "6649721b8d5321adbacd7dc0c89b9c39",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/2b/8632f39882d338e01060e707e64597cf18c986": "7cb91e637b984d96f48d3006d4ae871d",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/2e/01d7b994538d238dec90280ebf112e95f74a84": "2f2d31ad34b088c891900a10457ff6b5",
".git/objects/30/f5f64971c8e8c7a8eb97ff5e42c3d6811aca8a": "648fccdb5d3a8bbfc2bc410e13aaf9a4",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/37/099c87e2e6edb23dbbbe3b34f0cbafe6091f6f": "65e1631a1a4ccefdc6225859c8450522",
".git/objects/3a/ca1d4d93efadad1a3a5b8ec57c059669188ba1": "cad644f15c42d4562866e97e3b2d55c8",
".git/objects/3d/134cac7cf5b585d16cff1246f2f659916f77d1": "6510b6a040f33363d132b8ddd459edaf",
".git/objects/4a/38f29c3acb8613a5f9f22913f9cd3db8831f29": "e49cdd5f13b9efa3ac5f19d4ac8de8e9",
".git/objects/4a/d96735e37511103c896085f059f292936e5cb9": "dce1a7fee6e7d42659dce2068c00f649",
".git/objects/4e/01f44f040b2051c8ce3011d4a855b9c8da689f": "5c1bbd14f7e1c84e2384a12af65d1919",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/50/b2bebadf58cef0000e21216b2584003d08fb93": "8351f1cfcbd0964980e919926da3f8cf",
".git/objects/53/56f22d224e53084b74266e33d6288ca3385cee": "b6edee740d6d246954f75f7de1e818d2",
".git/objects/56/e516657471c87b50d45eef515925ab6719fe85": "f49c4d6242a92430a84dcae71149167b",
".git/objects/62/129e0c163887b543f90419ff3d3be867c11ccd": "52f934952b07ccaf1ae4b7a67b00e98d",
".git/objects/65/6fe1c999fdd9f1b04a68e29d50abe197a239d5": "4f84da3b445128e1115bdf709574f368",
".git/objects/68/c85e594543d5b606d78bab362536c1586ac8b5": "64ff4311705bb3cd603e46b99eb329eb",
".git/objects/76/4e853f01447f0a49635a9b5d4cf655adef9860": "c62585791a639c0da58cd9ac98490c67",
".git/objects/76/84b92e25d46131597ee9e7234d062d08e9eba8": "e9bf03c46b385fcebf9393387e75c28a",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/82/726a65546e5f7b58b5dfe4fa8f641679768442": "c7cb43116911123623109dfabc3d5545",
".git/objects/83/4fafa520091edd8cc9df4c6c2297e9e1e6747d": "1b0524e0ff67d6b3821674894765eea8",
".git/objects/84/fa84a2cc594ab247d5607d6afb247c14362f0f": "f47005dae70eafe645e1e1e1a78e944a",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/ef590c44daeb80bf4dcfd20f9ff6a76fe0c016": "b54a802e2eb00387861661705b311dfd",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/bab6f2c8ca290872d5f627d5c9329ac40d7585": "2afb2731b9fe6afca6b5704fc72cc6bb",
".git/objects/93/099b0d2b3818990b4573d5e91e77648a4e8e2b": "216a941ea28803bde3eed3b73b237928",
".git/objects/93/c5c2b43408097cd0731725f64b830326e4aba4": "be1bc3e11d0c0b656515e7f4197a90d5",
".git/objects/93/eb6acffe5839c8669a695af22137e8017e727e": "f29b203493d74349b44db0b4391cb52f",
".git/objects/95/8d3f716364cbba65da7a56bd580468c968f560": "02588abe92b1afb417468952b3e2d6a8",
".git/objects/a1/03c1bb0095a43933a72434db25e35101e2afb5": "2d50af3c2d9b5bd23cf8e5e608bbc35b",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a1/d3197652e696fdbda01f848089e7dca93f24cd": "00a1a6a2dff687eb9973c4bd5fa534a2",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/a8/d7bbcdfb37a3cb41163c099f405afff68bea89": "e76e2096141aed11bd77225033e1bbe5",
".git/objects/ac/dac477d5d347ac437b33e7ec78d9a70ce0d469": "415f22071ebe2dabadd521d709f040b1",
".git/objects/ad/47210ded7c228bb9992b1b120c7b6b24e32dc0": "6413d4beba25f54aaa869baa36da8582",
".git/objects/ad/581a5b96a580a52070777df55b17c218770fad": "c8bee149b2901785a4d85a59df623429",
".git/objects/ae/a46397b340a06da3699ad91e8aeaf90ea22f8d": "e21eceae78ae3c78c24b7070d1e054a9",
".git/objects/b5/354362ea0127d9f5a543534a162e2a348f2bfc": "29b7789dbe6369abcfc98216bf381979",
".git/objects/b6/86d2d6b79946bd36083bc1439ccb091afe45d3": "fd6f7c34efec1d0cfbb411f434bcf9e5",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/2044897cb4ca7276c62cdd31b4642639861d7b": "7632aefdc3d9f020d7b2725c48622a3c",
".git/objects/ba/b6ea32cb2f2ae2d2926b7922c9726a9b971c77": "a4a4f4f56983c4f2facc8485a71aa67e",
".git/objects/ba/f08f20f09dbb395e1bb359c011f6bb8a096e5d": "433ef74d10936e3a241a17535a12766b",
".git/objects/be/561fc4ba7f9f6433bb56ff8ccf7f7330a856df": "21d26e4c751c1bd20e433e75e39a9bca",
".git/objects/c4/a0486cca2f537dfb3f2e78b889297a7680f7ae": "6f94b4f4b7f1c674397b1299659ec3b2",
".git/objects/c4/a5b3f0aa130624c2bbf6f90e3b3084be3fbb76": "d2b8fda003bb92f0e8a4c05dd81b3ee6",
".git/objects/c5/ac2cd3fbac657e64e17fd33869c9b7f5821e6d": "b32b559ca8fc542ee57ccf597fa7216c",
".git/objects/c8/7bd95194befeb5ec5b2acdc6ec2df40404c5f9": "599f23a64f95d7cc7ca90846656f1065",
".git/objects/c9/0510437ee883c9c7a0d9e632f1899df653f447": "f32c3c2dfc74d10e70f5e03770de0ffb",
".git/objects/cc/c6cd82d1a68d820502ff60f57095192ba937a7": "e96f96a6941aeae74366875f450c7680",
".git/objects/d0/7c32ea9c9759125ba190b4a3aea4b2cadafca7": "233782ae4e00d32524a24deed32745b9",
".git/objects/d5/569cc36db57a19a6c895afffacf6a52653e34a": "d18c1b6ccbf66b882842f5699775b625",
".git/objects/d5/ed8c534f075539fb00abe6368b379a4a5bb27e": "abb4a5a982641e87808f8e7fe75520f3",
".git/objects/d8/6864920281222f13723ee9334704fa8f444c23": "c0bc44ec94d523e32dcb308e8a98cb31",
".git/objects/d9/e5b75a2a43467fde17d7a8ef8de291e15037db": "6be53523871910e361b2a736297b53b0",
".git/objects/db/253293fc6e1e45ced304ad50d42937d91c8cf2": "59302bdb43c3ddd7b1ba0501f764311b",
".git/objects/dd/793fdbcfcb487469611c785db3a2e95e5f420e": "9723d1d0169ceebb682c8c83db402d55",
".git/objects/de/6559fe1335dd4e8df0f33b06fe9652cae39d02": "76f6138c6d40d56ec91381f8c470d2d8",
".git/objects/df/89197a16adbac41f857ef48f31e52edbc498f7": "7682803d7afa2434a48976957b955cfb",
".git/objects/e1/1e737d9519e9346ba3f9cbc55856e84335b7d6": "ad23e9566b73e6782179b301fbac3326",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
".git/objects/e8/003956198bedd9f976d5f44784ff184f028609": "311ec0c79e5033cae4678a03ffc4d950",
".git/objects/e8/090a887a511bbbcdb044baf76e12145b514989": "9fdc12e5827f1fbbc1702f55e71edf07",
".git/objects/e9/10be8a1430d2624602bcb5a082fe7500568466": "012131603eee89d910ae454076aec19e",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/f1/58339c49f252144b0e665ab8aed9b52b99dca3": "fba69544fe09d78646ccfa6606e51ef6",
".git/objects/f1/753873fdb430c30968a344cf24530babb61e03": "9b313ce179486930eb82fc008b813d4c",
".git/objects/f2/f91552efdc92a031db77e4e8d2c2593931fa47": "85b57cb1804dda54a3400ef1410459b6",
".git/objects/f3/174923fc0586d2c52633338ba660606a980546": "076d9e72cd0556e71cd5615e8535947b",
".git/objects/f3/cce76986b19ebb90213a1a102cb749807ec213": "cd9b6fb9f96701dad265c0504dcd3df8",
".git/objects/f6/24f1a6ca277d12c2209078929e4878e9fffb30": "60f7729171d4493fa3b76185a0b72c2a",
".git/objects/f7/18c0bcf53e147b0ba59259353fcfbc2e4558e5": "80ae9fdc66833f8efd0b304e7629b3d5",
".git/objects/fb/a07f520ddc00fad2186ff03d0f91b45b85c7f7": "8e5221b3350221d4c9bdfe99cb5ea92c",
".git/objects/fb/dcc7731cd109ec5e9ad819dfac5e50925fdef1": "b8ce98ec65dcd147260107f147b24778",
".git/refs/heads/main": "ec155193c513a824d19cc7a4166b086e",
".git/refs/remotes/origin/main": "ec155193c513a824d19cc7a4166b086e",
"assets/AssetManifest.json": "3808188afef96bf5fd0c0bed303b03b9",
"assets/assets/images/blur.jpg": "3c71f298a42656f71e76e6ee252c197f",
"assets/assets/images/blur2.jpg": "f29354cdca66393f48cb51d5f54d7eae",
"assets/assets/images/favicon-32x32.png": "d091dd3b8250b2eacbf75ff545cd8d42",
"assets/assets/images/favicon.png": "3e389825eab231e31f10002ff67bb3d9",
"assets/assets/resume.pdf": "c5771b571923608f721c7b5939cbcb09",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "cc4ead1be079c749df255afbb0e9fe2e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "3241d1d9c15448a4da96df05f3292ffe",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "eaed33dc9678381a55cb5c13edaf241d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "ffed6899ceb84c60a1efa51c809a57e4",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "3e389825eab231e31f10002ff67bb3d9",
"icons/Icon-192.png": "e221526ddb2d81d192833d73d88caf45",
"icons/Icon-512.png": "054d3a3339d7ecc8848de3db40f27f3c",
"index.html": "41367931f9284bb89cd0c6c9fc39e31d",
"/": "41367931f9284bb89cd0c6c9fc39e31d",
"main.dart.js": "e941d7b2ac2497f102fc0b454d583389",
"manifest.json": "3d8a924a989354022d63a864c724a6e2",
"version.json": "2e5718ddc601847d341ce2c7a7f54a49"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
