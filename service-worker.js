if(!self.define){let e,i={};const s=(s,o)=>(s=new URL(s+".js",o).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(o,c)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let a={};const n=e=>s(e,r),d={module:{uri:r},exports:a,require:n};i[r]=Promise.all(o.map((e=>d[e]||n(e)))).then((e=>(c(...e),a)))}}define(["./workbox-db5fc017"],(function(e){"use strict";e.setCacheNameDetails({prefix:"tame-pos"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/pos/audio/access.mp3",revision:"627c0e8b5b8ef0417ace4d759284a51d"},{url:"/pos/audio/alert_alarm.mp3",revision:"18a6b41fa8ae57c3c640aa43717af945"},{url:"/pos/audio/beep.mp3",revision:"aab3f7ea62c83e31318d25e661823773"},{url:"/pos/audio/bip.mp3",revision:"fb7777d4d10cd491591d333e0c2b410f"},{url:"/pos/audio/click.mp3",revision:"317efbdb07ac7bdedc0200073fc8d568"},{url:"/pos/audio/kitchen_bell.mp3",revision:"f523959d0e515e39f8959f2658541530"},{url:"/pos/audio/order.mp3",revision:"7cd7af041715317a629bb8cd9ed5b614"},{url:"/pos/css/bootstrap.min.css",revision:"eca6902ac20dc3ab0c722e7aef44029e"},{url:"/pos/css/custom.css",revision:"2296458685f1eb8a5a8275c97955eed8"},{url:"/pos/css/font/nifty-demo-icons.woff2",revision:"84c22efad66205b7a354a2ba6a8baede"},{url:"/pos/css/front-office.32d96529.css",revision:null},{url:"/pos/css/front-office.css",revision:"550ad144ca23d5890238ce3edf3dd553"},{url:"/pos/css/index.b713b867.css",revision:null},{url:"/pos/css/mainChuck.96f5a446.css",revision:null},{url:"/pos/css/nifty.min.css",revision:"36cd76bca97a56c4a94c3c32eb77dc54"},{url:"/pos/css/print.css",revision:"f8dbe353ab1a3dd747977e68822a18dc"},{url:"/pos/css/thermal-print.css",revision:"4362b725c042302ecedf86fc6b3c02f5"},{url:"/pos/fonts/alarm.ttf",revision:"2803116d50a5be32e5435aba7d4bb941"},{url:"/pos/front-office.html",revision:"d5ac2382397f32c25971c08a71383f1a"},{url:"/pos/img/1046747.png",revision:"77f07c8002d89e9d6f56f9d6df7a9199"},{url:"/pos/img/2276931.png",revision:"00957f2d5d5736c8fe1afcd2c742c756"},{url:"/pos/img/2515183.png",revision:"d1678bcc876fc1441c2a37a9dc496525"},{url:"/pos/img/2830305.png",revision:"796483ae19e58f77dafca3e5d4f3e06e"},{url:"/pos/img/2848722.png",revision:"24ccf134bd3d4ed80c218bf7da259ae7"},{url:"/pos/img/2848725.png",revision:"94e74d7bdb00dc7ba7c3f2b4daec8145"},{url:"/pos/img/3183463.png",revision:"2468c2dfc265fc3d0860fa079866aa27"},{url:"/pos/img/3437535.png",revision:"1e5dde243fa4d67a55de2827ee482bdb"},{url:"/pos/img/3500833.png",revision:"97c837a28e96b10e824a0673cda2b0a3"},{url:"/pos/img/3521744.png",revision:"4e1e756866098ab3cdc2da35519d5537"},{url:"/pos/img/3521843.png",revision:"3f8b4a3b8dc097387a543b338097d000"},{url:"/pos/img/839608.png",revision:"4f6a50ecf482cc544bc8661066e22ce6"},{url:"/pos/img/839860.png",revision:"efbc9ecffc366f46501225fdd0477c1d"},{url:"/pos/img/857718.png",revision:"c6dc940457e1a8e6fc55082fd10dd04c"},{url:"/pos/img/857755.png",revision:"caf13b91f8ac87de390d4d18144f7732"},{url:"/pos/img/906208.png",revision:"90ec8327eb7c43d355268284df1a88b7"},{url:"/pos/img/9269104.png",revision:"88e433e15868147e55876a16e87de1d4"},{url:"/pos/img/948118.png",revision:"e5d4a10349b5f95baf2d527d1f4eeff1"},{url:"/pos/img/avatar.png",revision:"33a32e039088074246dcbfb4d1de3f9a"},{url:"/pos/img/beer.png",revision:"f4f22de15273ef8dbce29b156f5b986e"},{url:"/pos/img/bg-01.jpg",revision:"a265910f3894b8dcb4b2af0f80b47b03"},{url:"/pos/img/bg-squares.png",revision:"591e389f7b2e9e51f6b63b1c5db60f3f"},{url:"/pos/img/bg.svg",revision:"49756b7c711696d95133fa95451f8e13"},{url:"/pos/img/hamburger.png",revision:"257a991961de7bab82aef2d108eaaa69"},{url:"/pos/img/loading_48px.5fe66b74.gif",revision:null},{url:"/pos/img/logo-min.png",revision:"519b4c55c0275901277576269cd60ef3"},{url:"/pos/img/logo.png",revision:"76824e6f9a76c37de26e25c604f61ea7"},{url:"/pos/img/original.png",revision:"1d2ca11e5255d9c176ea0daa7b92f2b5"},{url:"/pos/img/overlay_dark.png",revision:"b87626d87166b84709ca2937a496e7de"},{url:"/pos/img/placeholder-large.png",revision:"19e265c61ad933c23a3b8e35c179c1e9"},{url:"/pos/img/purchase-order.png",revision:"970ca4aabaae43661d1e8cc85cb51e5a"},{url:"/pos/img/restaurant.png",revision:"baf4a3a4ab91b573dd824279f133f794"},{url:"/pos/img/table_icon2.png",revision:"7393e9be890a43fd90866c84ddcb6f1e"},{url:"/pos/img/table_icon2_blue.png",revision:"a170c5b3405d3788c57572d45958ee2e"},{url:"/pos/img/upload-icon.png",revision:"c159c3a55ee802c2ce27e53733dc7bf1"},{url:"/pos/img/waiter.png",revision:"3b25f54de6e3d5582349d2bafb3d6c0b"},{url:"/pos/img/white-close.svg",revision:"82ca13bbd1beb2fa0475695ff1dc5245"},{url:"/pos/index.html",revision:"357a5776cf74dcf4b7dbccf4ca903367"},{url:"/pos/js/bootstrap.min.js",revision:"acaca39508a3847d1ac2c59dd03a3575"},{url:"/pos/js/chunk-common.183b43f2.js",revision:null},{url:"/pos/js/chunk-vendors.bfc3b9b4.js",revision:null},{url:"/pos/js/front-office.b7266023.js",revision:null},{url:"/pos/js/index.2db2c92a.js",revision:null},{url:"/pos/js/mainChuck.c7fcdbc2.js",revision:null},{url:"/pos/js/nifty.min.js",revision:"9b0b0c1b339c0518522af1ee76b8b19c"},{url:"/pos/manifest.json",revision:"042bd003f35bb32522af67bc107a0f3f"},{url:"/pos/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
