(()=>{var e={};e.id=931,e.ids=[931],e.modules={2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},3484:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>a.a,__next_app__:()=>p,originalPathname:()=>c,pages:()=>l,routeModule:()=>f,tree:()=>s}),r(4144),r(4403),r(996);var n=r(170),o=r(5002),i=r(3876),a=r.n(i),u=r(6299),d={};for(let e in u)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(d[e]=()=>u[e]);r.d(t,d);let s=["",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,4144)),"/media/jack/hunter/Dev/web dev/code/wibmo_pay/app/page.tsx"]}]},{layout:[()=>Promise.resolve().then(r.bind(r,4403)),"/media/jack/hunter/Dev/web dev/code/wibmo_pay/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,996,23)),"next/dist/client/components/not-found-error"]}],l=["/media/jack/hunter/Dev/web dev/code/wibmo_pay/app/page.tsx"],c="/page",p={require:r,loadChunk:()=>Promise.resolve()},f=new n.AppPageRouteModule({definition:{kind:o.x.APP_PAGE,page:"/page",pathname:"/",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:s}})},8737:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,3642,23)),Promise.resolve().then(r.t.bind(r,7586,23)),Promise.resolve().then(r.t.bind(r,7838,23)),Promise.resolve().then(r.t.bind(r,8057,23)),Promise.resolve().then(r.t.bind(r,7741,23)),Promise.resolve().then(r.t.bind(r,3118,23))},5350:()=>{},5303:()=>{},4403:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>s,metadata:()=>d});var n=r(2051),o=r(1605),i=r.n(o),a=r(6326),u=r.n(a);r(7272);let d={title:"Create Next App",description:"Generated by create next app"};function s({children:e}){return n.jsx("html",{lang:"en",children:n.jsx("body",{className:`${i().variable} ${u().variable} antialiased`,children:e})})}},4144:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>i});var n=r(2051),o=r(1083);function i(){return(0,o.redirect)("/login"),n.jsx("h1",{children:"Hello world!"})}},1083:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{ReadonlyURLSearchParams:function(){return a},RedirectType:function(){return n.RedirectType},notFound:function(){return o.notFound},permanentRedirect:function(){return n.permanentRedirect},redirect:function(){return n.redirect}});let n=r(1192),o=r(6868);class i extends Error{constructor(){super("Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams")}}class a extends URLSearchParams{append(){throw new i}delete(){throw new i}set(){throw new i}sort(){throw new i}}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6868:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{isNotFoundError:function(){return o},notFound:function(){return n}});let r="NEXT_NOT_FOUND";function n(){let e=Error(r);throw e.digest=r,e}function o(e){return"object"==typeof e&&null!==e&&"digest"in e&&e.digest===r}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3701:(e,t)=>{"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"RedirectStatusCode",{enumerable:!0,get:function(){return r}}),function(e){e[e.SeeOther=303]="SeeOther",e[e.TemporaryRedirect=307]="TemporaryRedirect",e[e.PermanentRedirect=308]="PermanentRedirect"}(r||(r={})),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1192:(e,t,r)=>{"use strict";var n;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{RedirectType:function(){return n},getRedirectError:function(){return d},getRedirectStatusCodeFromError:function(){return m},getRedirectTypeFromError:function(){return f},getURLFromRedirectError:function(){return p},isRedirectError:function(){return c},permanentRedirect:function(){return l},redirect:function(){return s}});let o=r(4580),i=r(2934),a=r(3701),u="NEXT_REDIRECT";function d(e,t,r){void 0===r&&(r=a.RedirectStatusCode.TemporaryRedirect);let n=Error(u);n.digest=u+";"+t+";"+e+";"+r+";";let i=o.requestAsyncStorage.getStore();return i&&(n.mutableCookies=i.mutableCookies),n}function s(e,t){void 0===t&&(t="replace");let r=i.actionAsyncStorage.getStore();throw d(e,t,(null==r?void 0:r.isAction)?a.RedirectStatusCode.SeeOther:a.RedirectStatusCode.TemporaryRedirect)}function l(e,t){void 0===t&&(t="replace");let r=i.actionAsyncStorage.getStore();throw d(e,t,(null==r?void 0:r.isAction)?a.RedirectStatusCode.SeeOther:a.RedirectStatusCode.PermanentRedirect)}function c(e){if("object"!=typeof e||null===e||!("digest"in e)||"string"!=typeof e.digest)return!1;let[t,r,n,o]=e.digest.split(";",4),i=Number(o);return t===u&&("replace"===r||"push"===r)&&"string"==typeof n&&!isNaN(i)&&i in a.RedirectStatusCode}function p(e){return c(e)?e.digest.split(";",3)[2]:null}function f(e){if(!c(e))throw Error("Not a redirect error");return e.digest.split(";",2)[1]}function m(e){if(!c(e))throw Error("Not a redirect error");return Number(e.digest.split(";",4)[3])}(function(e){e.push="push",e.replace="replace"})(n||(n={})),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7272:()=>{}};var t=require("../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),n=t.X(0,[423],()=>r(3484));module.exports=n})();