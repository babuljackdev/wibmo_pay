(()=>{var e={};e.id=626,e.ids=[626],e.modules={2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},5044:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>i.a,__next_app__:()=>m,originalPathname:()=>u,pages:()=>c,routeModule:()=>f,tree:()=>d}),r(2454),r(4403),r(996);var n=r(170),s=r(5002),a=r(3876),i=r.n(a),l=r(6299),o={};for(let e in l)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>l[e]);r.d(t,o);let d=["",{children:["login",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,2454)),"/media/jack/hunter/Dev/web dev/code/wibmo_pay/app/login/page.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(r.bind(r,4403)),"/media/jack/hunter/Dev/web dev/code/wibmo_pay/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,996,23)),"next/dist/client/components/not-found-error"]}],c=["/media/jack/hunter/Dev/web dev/code/wibmo_pay/app/login/page.tsx"],u="/login/page",m={require:r,loadChunk:()=>Promise.resolve()},f=new n.AppPageRouteModule({definition:{kind:s.x.APP_PAGE,page:"/login/page",pathname:"/login",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},5149:(e,t,r)=>{Promise.resolve().then(r.bind(r,3327))},8737:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,3642,23)),Promise.resolve().then(r.t.bind(r,7586,23)),Promise.resolve().then(r.t.bind(r,7838,23)),Promise.resolve().then(r.t.bind(r,8057,23)),Promise.resolve().then(r.t.bind(r,7741,23)),Promise.resolve().then(r.t.bind(r,3118,23))},5350:()=>{},3327:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>Z});var n=r(7247),s=r(8964),a=r.n(s),i=r(8918),l=r(6323);let o=(0,l.Z)("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]),d=(0,l.Z)("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]),c=(0,l.Z)("EyeOff",[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]),u=(0,l.Z)("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);var m=r(9906),f=r(8053),p=r(7757),x=r(3191),v=r(732),h=r(319),b=r(8469),y=r(5298),g=r(255),N=r(7264),w=r(2251),j="Checkbox",[k,P]=(0,v.b)(j),[E,R]=k(j),M=s.forwardRef((e,t)=>{let{__scopeCheckbox:r,name:a,checked:i,defaultChecked:l,required:o,disabled:d,value:c="on",onCheckedChange:u,form:m,...f}=e,[p,v]=s.useState(null),y=(0,x.e)(t,e=>v(e)),g=s.useRef(!1),N=!p||m||!!p.closest("form"),[j=!1,k]=(0,b.T)({prop:i,defaultProp:l,onChange:u}),P=s.useRef(j);return s.useEffect(()=>{let e=p?.form;if(e){let t=()=>k(P.current);return e.addEventListener("reset",t),()=>e.removeEventListener("reset",t)}},[p,k]),(0,n.jsxs)(E,{scope:r,state:j,disabled:d,children:[(0,n.jsx)(w.WV.button,{type:"button",role:"checkbox","aria-checked":_(j)?"mixed":j,"aria-required":o,"data-state":D(j),"data-disabled":d?"":void 0,disabled:d,value:c,...f,ref:y,onKeyDown:(0,h.M)(e.onKeyDown,e=>{"Enter"===e.key&&e.preventDefault()}),onClick:(0,h.M)(e.onClick,e=>{k(e=>!!_(e)||!e),N&&(g.current=e.isPropagationStopped(),g.current||e.stopPropagation())})}),N&&(0,n.jsx)(A,{control:p,bubbles:!g.current,name:a,value:c,checked:j,required:o,disabled:d,form:m,style:{transform:"translateX(-100%)"},defaultChecked:!_(l)&&l})]})});M.displayName=j;var O="CheckboxIndicator",C=s.forwardRef((e,t)=>{let{__scopeCheckbox:r,forceMount:s,...a}=e,i=R(O,r);return(0,n.jsx)(N.z,{present:s||_(i.state)||!0===i.state,children:(0,n.jsx)(w.WV.span,{"data-state":D(i.state),"data-disabled":i.disabled?"":void 0,...a,ref:t,style:{pointerEvents:"none",...e.style}})})});C.displayName=O;var A=e=>{let{control:t,checked:r,bubbles:a=!0,defaultChecked:i,...l}=e,o=s.useRef(null),d=(0,y.D)(r),c=(0,g.t)(t);s.useEffect(()=>{let e=o.current,t=Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype,"checked").set;if(d!==r&&t){let n=new Event("click",{bubbles:a});e.indeterminate=_(r),t.call(e,!_(r)&&r),e.dispatchEvent(n)}},[d,r,a]);let u=s.useRef(!_(r)&&r);return(0,n.jsx)("input",{type:"checkbox","aria-hidden":!0,defaultChecked:i??u.current,...l,tabIndex:-1,ref:o,style:{...e.style,...c,position:"absolute",pointerEvents:"none",opacity:0,margin:0}})};function _(e){return"indeterminate"===e}function D(e){return _(e)?"indeterminate":e?"checked":"unchecked"}var L=r(8799),T=r(5008);let z=s.forwardRef(({className:e,...t},r)=>n.jsx(M,{ref:r,className:(0,T.cn)("peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",e),...t,children:n.jsx(C,{className:(0,T.cn)("flex items-center justify-center text-current"),children:n.jsx(L.Z,{className:"h-4 w-4"})})}));z.displayName=M.displayName;var I=r(6991),S=r(4538),W=r(5289);function Z(){let e=(0,W.useRouter)(),[t,r]=a().useState(!1);return(0,n.jsxs)("div",{className:"min-h-screen bg-gray-100 flex flex-col justify-center items-center p-4",children:[(0,n.jsxs)("div",{className:"mb-8 flex items-center",children:[n.jsx(i.Z,{className:"h-10 w-10 text-blue-600 mr-2"}),n.jsx("span",{className:"text-3xl font-bold",children:"Wibmo Pay"})]}),(0,n.jsxs)(p.Zb,{className:"w-full max-w-md",children:[(0,n.jsxs)(p.Ol,{children:[n.jsx(p.ll,{className:"text-2xl text-center",children:"Welcome Back"}),n.jsx(p.SZ,{className:"text-center",children:"Log in to your account to access your wallet and transactions"})]}),(0,n.jsxs)(p.aY,{className:"space-y-4",children:[(0,n.jsxs)("div",{className:"space-y-2",children:[n.jsx(S.Label,{htmlFor:"email",children:"Email"}),(0,n.jsxs)("div",{className:"relative",children:[n.jsx(o,{className:"absolute left-3 top-3 h-5 w-5 text-gray-400"}),n.jsx(I.I,{id:"email",type:"email",placeholder:"Enter your email",className:"pl-10"})]})]}),(0,n.jsxs)("div",{className:"space-y-2",children:[n.jsx(S.Label,{htmlFor:"password",children:"Password"}),(0,n.jsxs)("div",{className:"relative",children:[n.jsx(d,{className:"absolute left-3 top-3 h-5 w-5 text-gray-400"}),n.jsx(I.I,{id:"password",type:t?"text":"password",placeholder:"Enter your password",className:"pl-10 pr-10"}),n.jsx("button",{type:"button",onClick:()=>r(!t),className:"absolute right-3 top-3 text-gray-400",children:t?n.jsx(c,{className:"h-5 w-5"}):n.jsx(u,{className:"h-5 w-5"})})]})]}),(0,n.jsxs)("div",{className:"flex items-center justify-between",children:[(0,n.jsxs)("div",{className:"flex items-center space-x-2",children:[n.jsx(z,{id:"remember"}),n.jsx(S.Label,{htmlFor:"remember",children:"Remember me"})]}),n.jsx(m.default,{href:"/forgot-password",className:"text-sm text-blue-600 hover:underline",children:"Forgot password?"})]}),n.jsx(f.z,{onClick:()=>e.push("/dashboard"),className:"w-full",children:"Log In"})]}),(0,n.jsxs)(p.eW,{className:"flex flex-col space-y-4",children:[(0,n.jsxs)("div",{className:"relative w-full",children:[n.jsx("div",{className:"absolute inset-0 flex items-center",children:n.jsx("span",{className:"w-full border-t border-gray-300"})}),n.jsx("div",{className:"relative flex justify-center text-sm",children:n.jsx("span",{className:"bg-white px-2 text-gray-500",children:"Or continue with"})})]}),(0,n.jsxs)("div",{className:"grid grid-cols-2 gap-4",children:[n.jsx(f.z,{variant:"outline",children:"Google"}),n.jsx(f.z,{variant:"outline",children:"Apple"})]}),(0,n.jsxs)("p",{className:"text-center text-sm text-gray-600",children:["Don't have an account?"," ",n.jsx(m.default,{href:"/signup",className:"text-blue-600 hover:underline",children:"Sign up"})]})]})]})]})}},8053:(e,t,r)=>{"use strict";r.d(t,{z:()=>d});var n=r(7247),s=r(8964),a=r(9008),i=r(1608),l=r(5008);let o=(0,i.j)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),d=s.forwardRef(({className:e,variant:t,size:r,asChild:s=!1,...i},d)=>{let c=s?a.g7:"button";return n.jsx(c,{className:(0,l.cn)(o({variant:t,size:r,className:e})),ref:d,...i})});d.displayName="Button"},7757:(e,t,r)=>{"use strict";r.d(t,{Ol:()=>l,SZ:()=>d,Zb:()=>i,aY:()=>c,eW:()=>u,ll:()=>o});var n=r(7247),s=r(8964),a=r(5008);let i=s.forwardRef(({className:e,...t},r)=>n.jsx("div",{ref:r,className:(0,a.cn)("rounded-lg border bg-card text-card-foreground shadow-sm",e),...t}));i.displayName="Card";let l=s.forwardRef(({className:e,...t},r)=>n.jsx("div",{ref:r,className:(0,a.cn)("flex flex-col space-y-1.5 p-6",e),...t}));l.displayName="CardHeader";let o=s.forwardRef(({className:e,...t},r)=>n.jsx("div",{ref:r,className:(0,a.cn)("text-2xl font-semibold leading-none tracking-tight",e),...t}));o.displayName="CardTitle";let d=s.forwardRef(({className:e,...t},r)=>n.jsx("div",{ref:r,className:(0,a.cn)("text-sm text-muted-foreground",e),...t}));d.displayName="CardDescription";let c=s.forwardRef(({className:e,...t},r)=>n.jsx("div",{ref:r,className:(0,a.cn)("p-6 pt-0",e),...t}));c.displayName="CardContent";let u=s.forwardRef(({className:e,...t},r)=>n.jsx("div",{ref:r,className:(0,a.cn)("flex items-center p-6 pt-0",e),...t}));u.displayName="CardFooter"},6991:(e,t,r)=>{"use strict";r.d(t,{I:()=>i});var n=r(7247),s=r(8964),a=r(5008);let i=s.forwardRef(({className:e,type:t,...r},s)=>n.jsx("input",{type:t,className:(0,a.cn)("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",e),ref:s,...r}));i.displayName="Input"},4538:(e,t,r)=>{"use strict";r.d(t,{Label:()=>c});var n=r(7247),s=r(8964),a=r(2251),i=s.forwardRef((e,t)=>(0,n.jsx)(a.WV.label,{...e,ref:t,onMouseDown:t=>{t.target.closest("button, input, select, textarea")||(e.onMouseDown?.(t),!t.defaultPrevented&&t.detail>1&&t.preventDefault())}}));i.displayName="Label";var l=r(1608),o=r(5008);let d=(0,l.j)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),c=s.forwardRef(({className:e,...t},r)=>n.jsx(i,{ref:r,className:(0,o.cn)(d(),e),...t}));c.displayName=i.displayName},5008:(e,t,r)=>{"use strict";r.d(t,{cn:()=>a});var n=r(1929),s=r(5770);function a(...e){return(0,s.m6)((0,n.W)(e))}},6323:(e,t,r)=>{"use strict";r.d(t,{Z:()=>o});var n=r(8964);let s=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),a=(...e)=>e.filter((e,t,r)=>!!e&&""!==e.trim()&&r.indexOf(e)===t).join(" ").trim();var i={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let l=(0,n.forwardRef)(({color:e="currentColor",size:t=24,strokeWidth:r=2,absoluteStrokeWidth:s,className:l="",children:o,iconNode:d,...c},u)=>(0,n.createElement)("svg",{ref:u,...i,width:t,height:t,stroke:e,strokeWidth:s?24*Number(r)/Number(t):r,className:a("lucide",l),...c},[...d.map(([e,t])=>(0,n.createElement)(e,t)),...Array.isArray(o)?o:[o]])),o=(e,t)=>{let r=(0,n.forwardRef)(({className:r,...i},o)=>(0,n.createElement)(l,{ref:o,iconNode:t,className:a(`lucide-${s(e)}`,r),...i}));return r.displayName=`${e}`,r}},8799:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});let n=(0,r(6323).Z)("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]])},8918:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});let n=(0,r(6323).Z)("CreditCard",[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]])},4403:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>d,metadata:()=>o});var n=r(2051),s=r(1605),a=r.n(s),i=r(6326),l=r.n(i);r(7272);let o={title:"Create Next App",description:"Generated by create next app"};function d({children:e}){return n.jsx("html",{lang:"en",children:n.jsx("body",{className:`${a().variable} ${l().variable} antialiased`,children:e})})}},2454:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>n});let n=(0,r(5347).createProxy)(String.raw`/media/jack/hunter/Dev/web dev/code/wibmo_pay/app/login/page.tsx#default`)},7272:()=>{},7264:(e,t,r)=>{"use strict";r.d(t,{z:()=>i});var n=r(8964),s=r(3191),a=r(9537),i=e=>{let{present:t,children:r}=e,i=function(e){var t,r;let[s,i]=n.useState(),o=n.useRef({}),d=n.useRef(e),c=n.useRef("none"),[u,m]=(t=e?"mounted":"unmounted",r={mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}},n.useReducer((e,t)=>r[e][t]??e,t));return n.useEffect(()=>{let e=l(o.current);c.current="mounted"===u?e:"none"},[u]),(0,a.b)(()=>{let t=o.current,r=d.current;if(r!==e){let n=c.current,s=l(t);e?m("MOUNT"):"none"===s||t?.display==="none"?m("UNMOUNT"):r&&n!==s?m("ANIMATION_OUT"):m("UNMOUNT"),d.current=e}},[e,m]),(0,a.b)(()=>{if(s){let e;let t=s.ownerDocument.defaultView??window,r=r=>{let n=l(o.current).includes(r.animationName);if(r.target===s&&n&&(m("ANIMATION_END"),!d.current)){let r=s.style.animationFillMode;s.style.animationFillMode="forwards",e=t.setTimeout(()=>{"forwards"===s.style.animationFillMode&&(s.style.animationFillMode=r)})}},n=e=>{e.target===s&&(c.current=l(o.current))};return s.addEventListener("animationstart",n),s.addEventListener("animationcancel",r),s.addEventListener("animationend",r),()=>{t.clearTimeout(e),s.removeEventListener("animationstart",n),s.removeEventListener("animationcancel",r),s.removeEventListener("animationend",r)}}m("ANIMATION_END")},[s,m]),{isPresent:["mounted","unmountSuspended"].includes(u),ref:n.useCallback(e=>{e&&(o.current=getComputedStyle(e)),i(e)},[])}}(t),o="function"==typeof r?r({present:i.isPresent}):n.Children.only(r),d=(0,s.e)(i.ref,function(e){let t=Object.getOwnPropertyDescriptor(e.props,"ref")?.get,r=t&&"isReactWarning"in t&&t.isReactWarning;return r?e.ref:(r=(t=Object.getOwnPropertyDescriptor(e,"ref")?.get)&&"isReactWarning"in t&&t.isReactWarning)?e.props.ref:e.props.ref||e.ref}(o));return"function"==typeof r||i.isPresent?n.cloneElement(o,{ref:d}):null};function l(e){return e?.animationName||"none"}i.displayName="Presence"},5298:(e,t,r)=>{"use strict";r.d(t,{D:()=>s});var n=r(8964);function s(e){let t=n.useRef({value:e,previous:e});return n.useMemo(()=>(t.current.value!==e&&(t.current.previous=t.current.value,t.current.value=e),t.current.previous),[e])}},255:(e,t,r)=>{"use strict";r.d(t,{t:()=>a});var n=r(8964),s=r(9537);function a(e){let[t,r]=n.useState(void 0);return(0,s.b)(()=>{if(e){r({width:e.offsetWidth,height:e.offsetHeight});let t=new ResizeObserver(t=>{let n,s;if(!Array.isArray(t)||!t.length)return;let a=t[0];if("borderBoxSize"in a){let e=a.borderBoxSize,t=Array.isArray(e)?e[0]:e;n=t.inlineSize,s=t.blockSize}else n=e.offsetWidth,s=e.offsetHeight;r({width:n,height:s})});return t.observe(e,{box:"border-box"}),()=>t.unobserve(e)}r(void 0)},[e]),t}},1608:(e,t,r)=>{"use strict";r.d(t,{j:()=>a});let n=e=>"boolean"==typeof e?"".concat(e):0===e?"0":e,s=function(){for(var e,t,r=0,n="";r<arguments.length;)(e=arguments[r++])&&(t=function e(t){var r,n,s="";if("string"==typeof t||"number"==typeof t)s+=t;else if("object"==typeof t){if(Array.isArray(t))for(r=0;r<t.length;r++)t[r]&&(n=e(t[r]))&&(s&&(s+=" "),s+=n);else for(r in t)t[r]&&(s&&(s+=" "),s+=r)}return s}(e))&&(n&&(n+=" "),n+=t);return n},a=(e,t)=>r=>{var a;if((null==t?void 0:t.variants)==null)return s(e,null==r?void 0:r.class,null==r?void 0:r.className);let{variants:i,defaultVariants:l}=t,o=Object.keys(i).map(e=>{let t=null==r?void 0:r[e],s=null==l?void 0:l[e];if(null===t)return null;let a=n(t)||n(s);return i[e][a]}),d=r&&Object.entries(r).reduce((e,t)=>{let[r,n]=t;return void 0===n||(e[r]=n),e},{});return s(e,o,null==t?void 0:null===(a=t.compoundVariants)||void 0===a?void 0:a.reduce((e,t)=>{let{class:r,className:n,...s}=t;return Object.entries(s).every(e=>{let[t,r]=e;return Array.isArray(r)?r.includes({...l,...d}[t]):({...l,...d})[t]===r})?[...e,r,n]:e},[]),null==r?void 0:r.class,null==r?void 0:r.className)}}};var t=require("../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),n=t.X(0,[423,630],()=>r(5044));module.exports=n})();