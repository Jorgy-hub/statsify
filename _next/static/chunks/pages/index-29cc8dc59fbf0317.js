(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(3722)}])},3722:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return J}});var r=n(5893),i=n(9008),a=n.n(i),s=(n(5675),n(7294)),o=n(7160),c=n.n(o),l="https://jorgy-hub.github.io/statsify-out/",u=["user-read-private","user-top-read"],d=n(8947),h=n(7814),m=n(1417);function f(){return(0,r.jsx)("div",{className:"footer-basic",children:(0,r.jsxs)("footer",{children:[(0,r.jsxs)("div",{className:"social",children:[(0,r.jsx)("a",{href:"https://www.instagram.com/jorgygfx/",children:(0,r.jsx)("i",{children:(0,r.jsx)(h.G,{icon:"fab fa-instagram"})})}),(0,r.jsx)("a",{href:"https://github.com/jorgy-hub",children:(0,r.jsx)("i",{children:(0,r.jsx)(h.G,{icon:"fab fa-github"})})}),(0,r.jsx)("a",{href:"https://twitch.com/jorgygfx",children:(0,r.jsx)("i",{children:(0,r.jsx)(h.G,{icon:"fab fa-twitch"})})}),(0,r.jsx)("a",{href:"https://www.youtube.com/channel/UCA78-TRtRUnIZvJwctKvDcg",children:(0,r.jsx)("i",{children:(0,r.jsx)(h.G,{icon:"fab fa-youtube"})})})]}),(0,r.jsxs)("ul",{className:"list-inline",children:[(0,r.jsx)("li",{className:"list-inline-item",children:(0,r.jsx)("a",{href:l,children:"Home"})}),(0,r.jsx)("li",{className:"list-inline-item",children:(0,r.jsx)("a",{href:"https://discord.com/invite/animazing",children:"Animazing"})}),(0,r.jsx)("li",{className:"list-inline-item",children:(0,r.jsx)("a",{href:"https://discord.com/invite/comfy",children:"Comfy"})}),(0,r.jsx)("li",{className:"list-inline-item",children:(0,r.jsx)("a",{href:"https://github.com/jorgy-hub",children:"Credits"})})]}),(0,r.jsx)("p",{className:"copyright",children:"Jorgy-Hub \xa9 2022"})]})})}d.vI.add(m.Zzi,m.zhw,m.z0T,m.opf),d.vc.autoAddCss=!1;var p=n(4051),v=n.n(p),j=n(9669),x=n.n(j),g=n(1664),y=n.n(g);function w(e,t,n,r,i,a,s){try{var o=e[a](s),c=o.value}catch(l){return void n(l)}o.done?t(c):Promise.resolve(c).then(r,i)}function b(e){var t,n=e.token,i=e.range,a=e.limit,o=(0,s.useState)([]),c=o[0],l=o[1],u=(0,s.useCallback)((t=v().mark((function e(){return v().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",x().get("https://api.spotify.com/v1/me/top/artists?time_range="+i+"&limit="+a,{headers:{Authorization:"Bearer ".concat(n)}}).then((function(e){l(e.data.items)})));case 1:case"end":return e.stop()}}),e)})),function(){var e=this,n=arguments;return new Promise((function(r,i){var a=t.apply(e,n);function s(e){w(a,r,i,s,o,"next",e)}function o(e){w(a,r,i,s,o,"throw",e)}s(void 0)}))}),[n,i,a]);return(0,s.useEffect)((function(){u()}),[u]),(0,r.jsxs)("div",{className:"spotify-artists",children:[(0,r.jsx)("div",{className:"artists-title",children:"Top Artists"}),(0,r.jsx)("div",{className:"artists-description",children:"The Artists you most listen in spotify!"}),c.map((function(e,t){var n,i;return(0,r.jsxs)("div",{className:"artist",id:"artist-".concat(t),onClick:function(){var t;return window.location=null===(t=e.external_urls)||void 0===t?void 0:t.spotify},children:[(0,r.jsx)("div",{className:"artist-index",children:t+1}),(0,r.jsx)("div",{className:"artist-image",style:{backgroundImage:"url(".concat(e.images[0].url,")")}}),(0,r.jsx)("div",{className:"artist-name",children:(0,r.jsx)(y(),{href:e.external_urls.spotify,children:e.name})}),(0,r.jsxs)("div",{className:"artist-followers",children:[(i=null===(n=e.followers)||void 0===n?void 0:n.total,i.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")||0),(0,r.jsx)("br",{}),"Followers"]})]},t)}))]})}var N=n(9398);function k(e,t,n,r,i,a,s){try{var o=e[a](s),c=o.value}catch(l){return void n(l)}o.done?t(c):Promise.resolve(c).then(r,i)}function S(e){var t,n=e.token,i=e.range,a=e.limit,o=(0,s.useState)([]),c=o[0],l=o[1],u=function(e){var t=Math.floor(e/6e4),n=(e%6e4/1e3).toFixed(0);return t+":"+(n<10?"0":"")+n},d=(0,s.useCallback)((t=v().mark((function e(){return v().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",x().get("https://api.spotify.com/v1/me/top/tracks?time_range="+i+"&limit="+a,{headers:{Authorization:"Bearer ".concat(n)}}).then((function(e){console.log(e.data),l(e.data.items)})));case 1:case"end":return e.stop()}}),e)})),function(){var e=this,n=arguments;return new Promise((function(r,i){var a=t.apply(e,n);function s(e){k(a,r,i,s,o,"next",e)}function o(e){k(a,r,i,s,o,"throw",e)}s(void 0)}))}),[n,i,a]);return(0,s.useEffect)((function(){d()}),[d]),(0,r.jsxs)("div",{className:"spotify-tracks",children:[(0,r.jsx)("div",{className:"tracks-title",children:"Top Tracks"}),(0,r.jsx)("div",{className:"tracks-description",children:"The Tracks you most listen in spotify!"}),c.map((function(e,t){return(0,r.jsxs)("div",{className:"track",id:"track-".concat(t),onClick:function(){var t;return window.location=null===(t=e.external_urls)||void 0===t?void 0:t.spotify},children:[(0,r.jsx)("div",{className:"track-index",children:t+1}),(0,r.jsx)("div",{className:"track-image",style:{backgroundImage:"url(".concat(e.album.images[0].url,")")}}),(0,r.jsx)("div",{className:"track-name",children:(0,r.jsx)(y(),{href:e.external_urls.spotify,children:e.name})}),(0,r.jsxs)("div",{className:"track-duration",children:[u(e.duration_ms||0),(0,r.jsx)(h.G,{icon:"fas fa-clock"})]})]},t)}))]})}d.vI.add(N.m6i,N.qAL,N.SZw),d.vc.autoAddCss=!1;var _=Math.floor(7*Math.random())+1;function A(){var e=(0,s.useState)(!1),t=e[0],n=e[1],i=(0,s.useState)(null),a=i[0],o=i[1];return s.useEffect((function(){o(_)}),[]),s.useEffect((function(){window.setTimeout((function(){t||(document.getElementById("loader").innerHTML="",n(!0))}),2e3)}),[t]),(0,r.jsx)("div",{id:"loader",children:(0,r.jsx)("div",{className:"loader",id:"loader",children:(0,r.jsxs)("div",{className:"loader-inner",children:[(0,r.jsx)("div",{className:"loader-line-wrap",children:(0,r.jsx)("div",{className:"loader-line-".concat(a)})}),(0,r.jsx)("div",{className:"loader-line-wrap",children:(0,r.jsx)("div",{className:"loader-line-".concat(a)})}),(0,r.jsx)("div",{className:"loader-line-wrap",children:(0,r.jsx)("div",{className:"loader-line-".concat(a)})}),(0,r.jsx)("div",{className:"loader-line-wrap",children:(0,r.jsx)("div",{className:"loader-line-".concat(a)})}),(0,r.jsx)("div",{className:"loader-line-wrap",children:(0,r.jsx)("div",{className:"loader-line-".concat(a)})})]})})})}function C(e,t,n,r,i,a,s){try{var o=e[a](s),c=o.value}catch(l){return void n(l)}o.done?t(c):Promise.resolve(c).then(r,i)}function I(e){var t,n,i=e.token,a=(0,s.useState)({}),o=a[0],c=a[1],l=(0,s.useState)("https://i.pinimg.com/originals/a3/e6/50/a3e650a67d4422433d94eb032492bbc7.png"),u=l[0],d=l[1],h=(0,s.useState)(!1),m=h[0],f=h[1],p=(0,s.useCallback)((n=v().mark((function e(){return v().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",x().get("https://api.spotify.com/v1/me",{headers:{Authorization:"Bearer ".concat(i)}}).then((function(e){c(e.data),d(e.data.images[0].url),f(!0)})));case 1:case"end":return e.stop()}}),e)})),function(){var e=this,t=arguments;return new Promise((function(r,i){var a=n.apply(e,t);function s(e){C(a,r,i,s,o,"next",e)}function o(e){C(a,r,i,s,o,"throw",e)}s(void 0)}))}),[i]);return(0,s.useEffect)((function(){p()}),[p]),(0,r.jsxs)(r.Fragment,{children:[!m&&(0,r.jsx)("style",{children:"\n          @media (max-width: 1302px) {\n            .spotify-genres {\n              width: 100% !important;\n            }\n          }\n          .spotify-genres {\n            width: 92%;\n          }        \n        "}),m&&(0,r.jsxs)("div",{className:"spotify-profile",children:[(0,r.jsx)("div",{className:"spotify-image",style:{backgroundImage:"url(".concat(u,")")}}),(0,r.jsx)("div",{className:"spotify-country",style:{backgroundImage:"url(https://hatscripts.github.io/circle-flags/flags/".concat(o.country.toLowerCase(),".svg)")}}),(0,r.jsx)("div",{className:"spotify-name",children:o.display_name}),(0,r.jsxs)("div",{className:"spotify-followers",children:[null===(t=o.followers)||void 0===t?void 0:t.total," Followers"]})]})]})}function T(e){var t={};return e.forEach((function(e){t[e]=(t[e]||0)+1})),t}var E=n(5376),O=n(3328);function P(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function M(e,t,n,r,i,a,s){try{var o=e[a](s),c=o.value}catch(l){return void n(l)}o.done?t(c):Promise.resolve(c).then(r,i)}function H(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function z(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){H(e,t,n[t])}))}return e}function G(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,a=[],s=!0,o=!1;try{for(n=n.call(e);!(s=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);s=!0);}catch(c){o=!0,i=c}finally{try{s||null==n.return||n.return()}finally{if(o)throw i}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return P(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return P(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function L(e){var t,n=e.token,i=e.range,a=e.limit,o=(0,s.useState)({}),c=o[0],u=o[1],d=(0,s.useState)(!1),h=d[0],m=d[1],f=(0,s.useCallback)((t=v().mark((function e(){return v().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",x().get("https://api.spotify.com/v1/me/top/artists?time_range="+i+"&limit="+a,{headers:{Authorization:"Bearer ".concat(n)}}).then((function(e){var t,n=[];null===(t=e.data.items)||void 0===t||t.map((function(e){var t;null===(t=e.genres)||void 0===t||t.map((function(e){return n.push(e)}))}));var r=T(n),i=Object.entries(r).sort((function(e,t){var n=G(e,2)[1];return G(t,2)[1]-n})).reduce((function(e,t){var n=G(t,2);return z({},e,H({},n[0],n[1]))}),{}),a={labels:Object.keys(i).map((function(e){return e.split(" ").map((function(e){return e.charAt(0).toUpperCase()+e.slice(1)})).join(" ")})),datasets:[{label:"Top Genres",data:Object.values(i),backgroundColor:Object.values(i).map((function(e){return"rgba("+256*Math.random()+", "+256*Math.random()+","+256*Math.random()+", 0.8)"})),borderWidth:0}]};u(a),m(!0)})).catch((function(e){window.location=l})));case 1:case"end":return e.stop()}}),e)})),function(){var e=this,n=arguments;return new Promise((function(r,i){var a=t.apply(e,n);function s(e){M(a,r,i,s,o,"next",e)}function o(e){M(a,r,i,s,o,"throw",e)}s(void 0)}))}),[n,i,a]);return(0,s.useEffect)((function(){f()}),[f]),(0,r.jsxs)("div",{className:"spotify-genres",children:[(0,r.jsxs)("div",{className:"genres-info",children:[(0,r.jsx)("div",{className:"genres-title",children:"Top Genres"}),(0,r.jsx)("div",{className:"genres-description",children:"The Genres you most listen in spotify!"}),(0,r.jsx)("div",{className:"genres-container",children:h&&c.labels.map((function(e,t){return(0,r.jsx)("div",{style:{backgroundColor:c.datasets[0].backgroundColor[t]},onClick:function(){return window.location="https://open.spotify.com/search/"+e},children:e},t)}))})]}),(0,r.jsx)("div",{className:"genres",children:h&&(0,r.jsx)(E.$I,{data:c,width:250,height:250,options:{maintainAspectRatio:!1}})})]})}function F(){return(0,r.jsxs)("div",{className:"credits",children:[(0,r.jsx)("div",{className:"credits-title",children:"About the project"}),(0,r.jsxs)("div",{className:"credits-description",children:["Statsify is an ad-free and open source website made with Next.js",(0,r.jsx)("br",{}),"I originally created this website for my girlfriend since she uses Spotify a lot and loves the music.",(0,r.jsx)("br",{}),"The only developer of this project is me Jorgy or Uraraka-Chan in GitHub, if you enjoy please share it!"]}),(0,r.jsxs)("div",{className:"credits-profiles",children:[(0,r.jsx)("div",{className:"profile",style:{backgroundImage:"url(https://avatars.githubusercontent.com/u/71365133?v=4)"},onClick:function(){return window.location="https://www.instagram.com/jorgy.ts/"}}),(0,r.jsx)("div",{className:"profile",style:{backgroundImage:"url(https://i.imgur.com/iuyMV3P.jpg)"},onClick:function(){return window.location="https://www.instagram.com/earlysunsets._/"}})]})]})}function B(){return(0,r.jsxs)("section",{id:"home","data-parallax":"scroll","data-image-src":"images/hero-bg.jpg","data-natural-width":3e3,"data-natural-height":1800,children:[(0,r.jsx)("div",{className:"overlay"}),(0,r.jsx)("div",{className:"home-content",children:(0,r.jsxs)("div",{className:"row contents",children:[(0,r.jsxs)("div",{className:"home-content-left",children:[(0,r.jsx)("h3",{"data-aos":"fade-up",children:"Welcome to Statsify"}),(0,r.jsxs)("h1",{"data-aos":"fade-up",children:["Check your Monthly ",(0,r.jsx)("br",{}),"Spotify Stats for free ",(0,r.jsx)("br",{})]}),(0,r.jsx)("div",{className:"buttons","data-aos":"fade-up",children:(0,r.jsx)("a",{href:"".concat("https://accounts.spotify.com/authorize","?client_id=").concat("48889495d12e4d27bd788c7f16b9a928","&redirect_uri=").concat(l,"&scope=").concat(u.join("%20"),"&response_type=token&show_dialog=true"),className:"smoothscroll button stroke",children:"Login to Spotify"})})]}),(0,r.jsx)("div",{className:"home-image-right",children:(0,r.jsx)("img",{src:"./Phone.png",alt:"Phone","data-aos":"fade-up"})})]})}),(0,r.jsx)("div",{className:"home-scrolldown",children:(0,r.jsxs)("a",{className:"scroll-icon smoothscroll",children:[(0,r.jsx)("span",{children:"Scroll Down"}),(0,r.jsx)("i",{className:"icon-arrow-right","aria-hidden":"true"})]})})]})}function R(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function U(e){return function(e){if(Array.isArray(e))return R(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"===typeof e)return R(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return R(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function J(){var e=(0,s.useState)(null),t=e[0],n=e[1],i=(0,s.useState)("short_term"),o=i[0],l=i[1],u=(0,s.useState)("10"),d=u[0],m=u[1];return(0,s.useEffect)((function(){var e=window.location.hash.substring(1).split(/[&]/).reduce((function(e,t){if(t){var n=t.split(/[=]/);e[n[0]]=decodeURIComponent(n[1])}return e}),{}).access_token;n(e);var t=function(){document.documentElement.dataset.scroll=window.scrollY};document.addEventListener("scroll",function(e){var t;return function(){for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];t&&cancelAnimationFrame(t),t=requestAnimationFrame((function(){e.apply(void 0,U(r))}))}}(t),{passive:!0}),t()}),[t,o]),(0,r.jsxs)("div",{className:c().container,children:[(0,r.jsxs)(a(),{children:[(0,r.jsx)("title",{children:"Statsify"}),(0,r.jsx)("meta",{name:"description",content:"Check your Spotify Stats for free without Ads! Follow @jorgy.ts on Instagram for more content"}),(0,r.jsx)("meta",{property:"og:image",content:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Spotify_App_Logo.svg/2048px-Spotify_App_Logo.svg.png"}),(0,r.jsx)("meta",{name:"author",content:"Jorgy-Hub"}),(0,r.jsx)("meta",{name:"theme-color",content:"#33d486"}),(0,r.jsx)("meta",{name:"copyright",content:"Jorgy-Hub@2022"}),(0,r.jsx)("link",{rel:"icon",href:"./icon.png"})]}),(0,r.jsxs)("div",{className:"navbar",children:[(0,r.jsx)("img",{className:"logo",src:"./Spotify.png",alt:"Phone","data-aos":"fade-up"}),(0,r.jsxs)("div",{className:"title",children:[(0,r.jsx)(h.G,{icon:"fas fa-moon"}),"Statsify"]})]}),(0,r.jsx)(A,{}),(0,r.jsxs)("main",{className:c().main,children:[!t&&(0,r.jsx)(B,{}),(0,r.jsx)("div",{className:c()["spotify-container"],children:t&&(0,r.jsxs)("div",{className:"wrapper",children:[(0,r.jsx)(I,{token:t}),(0,r.jsx)(L,{token:t,range:o,limit:d}),(0,r.jsx)(b,{token:t,range:o,limit:d}),(0,r.jsx)(S,{token:t,range:o,limit:d}),(0,r.jsxs)("div",{className:"config",children:[(0,r.jsx)("div",{className:"config-title",children:"Settings"}),(0,r.jsx)("div",{className:"config-description",children:"Here you can configure the amount of info you want to display or the time range!"}),(0,r.jsxs)("div",{className:"config-options",children:[(0,r.jsxs)("div",{className:"config-option",children:[(0,r.jsx)("div",{className:"option-title",children:"Time Range"}),(0,r.jsx)("div",{className:"option-description",children:"Here you can configure the Time Range you want the result to have, either 1 Month, 6 Months or 1 Year."}),(0,r.jsxs)("select",{onChange:function(e){return l(e.target.value)},children:[(0,r.jsx)("option",{value:"short_term",children:"1 Month"}),(0,r.jsx)("option",{value:"medium_term",children:"6 Months"}),(0,r.jsx)("option",{value:"long_term",children:"1 Year"})]})]}),(0,r.jsxs)("div",{className:"config-option",children:[(0,r.jsx)("div",{className:"option-title",children:"Results Amount"}),(0,r.jsx)("div",{className:"option-description",children:"Here you can configure the Amount of results you want to display between 10 to 50."}),(0,r.jsxs)("select",{onChange:function(e){return m(e.target.value)},children:[(0,r.jsx)("option",{value:"10",children:"10"}),(0,r.jsx)("option",{value:"20",children:"20"}),(0,r.jsx)("option",{value:"30",children:"30"}),(0,r.jsx)("option",{value:"40",children:"40"}),(0,r.jsx)("option",{value:"50",children:"50"})]})]})]})]}),(0,r.jsx)(F,{})]})})]}),(0,r.jsx)(f,{})]})}O.kL.register(O.qi,O.u),d.vI.add(N.DBF),d.vc.autoAddCss=!1},7160:function(e){e.exports={container:"Home_container__bCOhY",main:"Home_main__nLjiQ"}}},function(e){e.O(0,[570,523,112,392,774,888,179],(function(){return t=5557,e(e.s=t);var t}));var t=e.O();_N_E=t}]);