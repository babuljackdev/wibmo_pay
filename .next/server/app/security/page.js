(()=>{var e={};e.id=127,e.ids=[127],e.modules={2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},6126:(e,s,r)=>{"use strict";r.r(s),r.d(s,{GlobalError:()=>n.a,__next_app__:()=>x,originalPathname:()=>u,pages:()=>c,routeModule:()=>m,tree:()=>o}),r(5563),r(4403),r(996);var t=r(170),a=r(5002),i=r(3876),n=r.n(i),l=r(6299),d={};for(let e in l)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(d[e]=()=>l[e]);r.d(s,d);let o=["",{children:["security",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,5563)),"/media/jack/hunter/Dev/web dev/code/wibmo_pay/app/security/page.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(r.bind(r,4403)),"/media/jack/hunter/Dev/web dev/code/wibmo_pay/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,996,23)),"next/dist/client/components/not-found-error"]}],c=["/media/jack/hunter/Dev/web dev/code/wibmo_pay/app/security/page.tsx"],u="/security/page",x={require:r,loadChunk:()=>Promise.resolve()},m=new t.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/security/page",pathname:"/security",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:o}})},4225:(e,s,r)=>{Promise.resolve().then(r.bind(r,2902)),Promise.resolve().then(r.bind(r,1600)),Promise.resolve().then(r.bind(r,4538)),Promise.resolve().then(r.bind(r,1539)),Promise.resolve().then(r.bind(r,9440))},4538:(e,s,r)=>{"use strict";r.d(s,{Label:()=>c});var t=r(7247),a=r(8964),i=r(2251),n=a.forwardRef((e,s)=>(0,t.jsx)(i.WV.label,{...e,ref:s,onMouseDown:s=>{s.target.closest("button, input, select, textarea")||(e.onMouseDown?.(s),!s.defaultPrevented&&s.detail>1&&s.preventDefault())}}));n.displayName="Label";var l=r(1608),d=r(5008);let o=(0,l.j)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),c=a.forwardRef(({className:e,...s},r)=>t.jsx(n,{ref:r,className:(0,d.cn)(o(),e),...s}));c.displayName=n.displayName},1539:(e,s,r)=>{"use strict";r.d(s,{Switch:()=>N});var t=r(7247),a=r(8964),i=r(319),n=r(3191),l=r(732),d=r(8469),o=r(5298),c=r(255),u=r(2251),x="Switch",[m,h]=(0,l.b)(x),[f,p]=m(x),b=a.forwardRef((e,s)=>{let{__scopeSwitch:r,name:l,checked:o,defaultChecked:c,required:x,disabled:m,value:h="on",onCheckedChange:p,form:b,...j}=e,[v,w]=a.useState(null),N=(0,n.e)(s,e=>w(e)),k=a.useRef(!1),S=!v||b||!!v.closest("form"),[P=!1,A]=(0,d.T)({prop:o,defaultProp:c,onChange:p});return(0,t.jsxs)(f,{scope:r,checked:P,disabled:m,children:[(0,t.jsx)(u.WV.button,{type:"button",role:"switch","aria-checked":P,"aria-required":x,"data-state":y(P),"data-disabled":m?"":void 0,disabled:m,value:h,...j,ref:N,onClick:(0,i.M)(e.onClick,e=>{A(e=>!e),S&&(k.current=e.isPropagationStopped(),k.current||e.stopPropagation())})}),S&&(0,t.jsx)(g,{control:v,bubbles:!k.current,name:l,value:h,checked:P,required:x,disabled:m,form:b,style:{transform:"translateX(-100%)"}})]})});b.displayName=x;var j="SwitchThumb",v=a.forwardRef((e,s)=>{let{__scopeSwitch:r,...a}=e,i=p(j,r);return(0,t.jsx)(u.WV.span,{"data-state":y(i.checked),"data-disabled":i.disabled?"":void 0,...a,ref:s})});v.displayName=j;var g=e=>{let{control:s,checked:r,bubbles:i=!0,...n}=e,l=a.useRef(null),d=(0,o.D)(r),u=(0,c.t)(s);return a.useEffect(()=>{let e=l.current,s=Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype,"checked").set;if(d!==r&&s){let t=new Event("click",{bubbles:i});s.call(e,r),e.dispatchEvent(t)}},[d,r,i]),(0,t.jsx)("input",{type:"checkbox","aria-hidden":!0,defaultChecked:r,...n,tabIndex:-1,ref:l,style:{...e.style,...u,position:"absolute",pointerEvents:"none",opacity:0,margin:0}})};function y(e){return e?"checked":"unchecked"}var w=r(5008);let N=a.forwardRef(({className:e,...s},r)=>t.jsx(b,{className:(0,w.cn)("peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",e),...s,ref:r,children:t.jsx(v,{className:(0,w.cn)("pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0")})}));N.displayName=b.displayName},5563:(e,s,r)=>{"use strict";r.r(s),r.d(s,{default:()=>N});var t=r(2051);r(6269);var a=r(1664),i=r(4794),n=r(9017),l=r(6449);let d=(0,l.Z)("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]),o=(0,l.Z)("Smartphone",[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]]);var c=r(9808),u=r(4158),x=r(353),m=r(8300),h=r(6669),f=r(6930),p=r(5347);let b=(0,p.createProxy)(String.raw`/media/jack/hunter/Dev/web dev/code/wibmo_pay/components/ui/label.tsx#Label`),j=(0,p.createProxy)(String.raw`/media/jack/hunter/Dev/web dev/code/wibmo_pay/components/ui/switch.tsx#Switch`);var v=r(8161),g=r(2621),y=r(5307);let w=[{id:"LOG001",event:"Login Attempt",status:"Success",ip:"192.168.1.1",date:"2024-03-05 14:30:00"},{id:"LOG002",event:"Password Change",status:"Success",ip:"192.168.1.1",date:"2024-03-04 10:15:00"},{id:"LOG003",event:"Failed Login",status:"Failed",ip:"203.0.113.0",date:"2024-03-03 08:45:00"},{id:"LOG004",event:"MFA Setup",status:"Success",ip:"192.168.1.1",date:"2024-03-02 16:20:00"},{id:"LOG005",event:"Account Lock",status:"Warning",ip:"203.0.113.0",date:"2024-03-01 22:10:00"}];function N(){return(0,t.jsxs)("div",{className:"flex h-screen bg-gray-100",children:[(0,t.jsxs)("aside",{className:"w-64 bg-white p-6 shadow-md",children:[(0,t.jsxs)("div",{className:"flex items-center mb-8",children:[t.jsx(a.Z,{className:"h-8 w-8 text-blue-600 mr-2"}),t.jsx("span",{className:"text-2xl font-bold",children:"Wibmo Pay"})]}),t.jsx(y.Z,{})]}),(0,t.jsxs)("main",{className:"flex-1 p-8 overflow-auto",children:[(0,t.jsxs)("header",{className:"flex justify-between items-center mb-8",children:[t.jsx("h1",{className:"text-3xl font-bold",children:"Security Settings"}),(0,t.jsxs)("div",{className:"flex items-center space-x-4",children:[t.jsx(f.I,{type:"search",placeholder:"Search...",className:"w-64"}),t.jsx(m.z,{size:"icon",variant:"ghost",children:t.jsx(i.Z,{className:"h-5 w-5"})}),(0,t.jsxs)(u.qE,{children:[t.jsx(u.F$,{src:"/placeholder-user.jpg",alt:"User"}),t.jsx(u.Q5,{children:"AD"})]})]})]}),(0,t.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6 mb-6",children:[(0,t.jsxs)(h.Zb,{children:[(0,t.jsxs)(h.Ol,{className:"flex flex-row items-center justify-between space-y-0 pb-2",children:[t.jsx(h.ll,{className:"text-sm font-medium",children:"Security Score"}),t.jsx(n.Z,{className:"h-4 w-4 text-muted-foreground"})]}),(0,t.jsxs)(h.aY,{children:[t.jsx("div",{className:"text-2xl font-bold",children:"85/100"}),t.jsx("p",{className:"text-xs text-muted-foreground",children:"Your account is well-protected"})]})]}),(0,t.jsxs)(h.Zb,{children:[(0,t.jsxs)(h.Ol,{className:"flex flex-row items-center justify-between space-y-0 pb-2",children:[t.jsx(h.ll,{className:"text-sm font-medium",children:"Last Login"}),t.jsx(d,{className:"h-4 w-4 text-muted-foreground"})]}),(0,t.jsxs)(h.aY,{children:[t.jsx("div",{className:"text-2xl font-bold",children:"2 hours ago"}),t.jsx("p",{className:"text-xs text-muted-foreground",children:"From 192.168.1.1"})]})]}),(0,t.jsxs)(h.Zb,{children:[(0,t.jsxs)(h.Ol,{className:"flex flex-row items-center justify-between space-y-0 pb-2",children:[t.jsx(h.ll,{className:"text-sm font-medium",children:"Active Sessions"}),t.jsx(o,{className:"h-4 w-4 text-muted-foreground"})]}),(0,t.jsxs)(h.aY,{children:[t.jsx("div",{className:"text-2xl font-bold",children:"2"}),t.jsx("p",{className:"text-xs text-muted-foreground",children:"Devices currently logged in"})]})]})]}),(0,t.jsxs)(h.Zb,{className:"mb-6",children:[(0,t.jsxs)(h.Ol,{children:[t.jsx(h.ll,{children:"Security Settings"}),t.jsx(h.SZ,{children:"Manage your account security preferences"})]}),t.jsx(h.aY,{children:(0,t.jsxs)(v.mQ,{defaultValue:"mfa",className:"w-full",children:[(0,t.jsxs)(v.dr,{className:"grid w-full grid-cols-2",children:[t.jsx(v.SP,{value:"mfa",children:"Multi-Factor Authentication"}),t.jsx(v.SP,{value:"password",children:"Password Settings"})]}),t.jsx(v.nU,{value:"mfa",children:(0,t.jsxs)("div",{className:"space-y-4",children:[(0,t.jsxs)("div",{className:"flex items-center justify-between",children:[(0,t.jsxs)("div",{children:[t.jsx(b,{htmlFor:"mfa-toggle",children:"Enable MFA"}),t.jsx("p",{className:"text-sm text-muted-foreground",children:"Secure your account with multi-factor authentication"})]}),t.jsx(j,{id:"mfa-toggle"})]}),(0,t.jsxs)("div",{children:[t.jsx(b,{children:"MFA Methods"}),(0,t.jsxs)("div",{className:"mt-2 space-y-2",children:[(0,t.jsxs)("div",{className:"flex items-center space-x-2",children:[t.jsx("input",{type:"checkbox",id:"sms-mfa",className:"rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"}),t.jsx(b,{htmlFor:"sms-mfa",children:"SMS"})]}),(0,t.jsxs)("div",{className:"flex items-center space-x-2",children:[t.jsx("input",{type:"checkbox",id:"email-mfa",className:"rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"}),t.jsx(b,{htmlFor:"email-mfa",children:"Email"})]}),(0,t.jsxs)("div",{className:"flex items-center space-x-2",children:[t.jsx("input",{type:"checkbox",id:"authenticator-mfa",className:"rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"}),t.jsx(b,{htmlFor:"authenticator-mfa",children:"Authenticator App"})]})]})]})]})}),t.jsx(v.nU,{value:"password",children:(0,t.jsxs)("div",{className:"space-y-4",children:[(0,t.jsxs)("div",{children:[t.jsx(b,{htmlFor:"current-password",children:"Current Password"}),t.jsx(f.I,{type:"password",id:"current-password"})]}),(0,t.jsxs)("div",{children:[t.jsx(b,{htmlFor:"new-password",children:"New Password"}),t.jsx(f.I,{type:"password",id:"new-password"})]}),(0,t.jsxs)("div",{children:[t.jsx(b,{htmlFor:"confirm-password",children:"Confirm New Password"}),t.jsx(f.I,{type:"password",id:"confirm-password"})]}),t.jsx(m.z,{children:"Change Password"})]})})]})})]}),(0,t.jsxs)(h.Zb,{children:[(0,t.jsxs)(h.Ol,{children:[t.jsx(h.ll,{children:"Security Logs"}),t.jsx(h.SZ,{children:"Recent security events on your account"})]}),t.jsx(h.aY,{children:(0,t.jsxs)(g.iA,{children:[t.jsx(g.xD,{children:(0,t.jsxs)(g.SC,{children:[t.jsx(g.ss,{className:"w-[100px]",children:"Log ID"}),t.jsx(g.ss,{children:"Event"}),t.jsx(g.ss,{children:"Status"}),t.jsx(g.ss,{children:"IP Address"}),t.jsx(g.ss,{className:"text-right",children:"Date & Time"})]})}),t.jsx(g.RM,{children:w.map(e=>(0,t.jsxs)(g.SC,{children:[t.jsx(g.pj,{className:"font-medium",children:e.id}),t.jsx(g.pj,{children:e.event}),t.jsx(g.pj,{children:t.jsx(x.C,{variant:"Success"===e.status?"success":"Failed"===e.status?"destructive":"warning",children:e.status})}),t.jsx(g.pj,{children:e.ip}),t.jsx(g.pj,{className:"text-right",children:e.date})]},e.id))})]})}),(0,t.jsxs)(h.eW,{className:"flex justify-between",children:[t.jsx(m.z,{variant:"ghost",children:"Download Full Log"}),(0,t.jsxs)(m.z,{variant:"outline",children:["View All Logs",t.jsx(c.Z,{className:"ml-2 h-4 w-4"})]})]})]})]})]})}},353:(e,s,r)=>{"use strict";r.d(s,{C:()=>l});var t=r(2051);r(6269);var a=r(5994),i=r(7170);let n=(0,a.j)("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",{variants:{variant:{default:"border-transparent bg-primary text-primary-foreground hover:bg-primary/80",success:"border-transparent bg-primary text-primary-foreground hover:bg-primary/80",secondary:"border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",warning:"border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",destructive:"border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",outline:"text-foreground"}},defaultVariants:{variant:"default"}});function l({className:e,variant:s,...r}){return t.jsx("div",{className:(0,i.cn)(n({variant:s}),e),...r})}},2621:(e,s,r)=>{"use strict";r.d(s,{RM:()=>d,SC:()=>o,iA:()=>n,pj:()=>u,ss:()=>c,xD:()=>l});var t=r(2051),a=r(6269),i=r(7170);let n=a.forwardRef(({className:e,...s},r)=>t.jsx("div",{className:"relative w-full overflow-auto",children:t.jsx("table",{ref:r,className:(0,i.cn)("w-full caption-bottom text-sm",e),...s})}));n.displayName="Table";let l=a.forwardRef(({className:e,...s},r)=>t.jsx("thead",{ref:r,className:(0,i.cn)("[&_tr]:border-b",e),...s}));l.displayName="TableHeader";let d=a.forwardRef(({className:e,...s},r)=>t.jsx("tbody",{ref:r,className:(0,i.cn)("[&_tr:last-child]:border-0",e),...s}));d.displayName="TableBody",a.forwardRef(({className:e,...s},r)=>t.jsx("tfoot",{ref:r,className:(0,i.cn)("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",e),...s})).displayName="TableFooter";let o=a.forwardRef(({className:e,...s},r)=>t.jsx("tr",{ref:r,className:(0,i.cn)("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",e),...s}));o.displayName="TableRow";let c=a.forwardRef(({className:e,...s},r)=>t.jsx("th",{ref:r,className:(0,i.cn)("h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",e),...s}));c.displayName="TableHead";let u=a.forwardRef(({className:e,...s},r)=>t.jsx("td",{ref:r,className:(0,i.cn)("p-4 align-middle [&:has([role=checkbox])]:pr-0",e),...s}));u.displayName="TableCell",a.forwardRef(({className:e,...s},r)=>t.jsx("caption",{ref:r,className:(0,i.cn)("mt-4 text-sm text-muted-foreground",e),...s})).displayName="TableCaption"},9808:(e,s,r)=>{"use strict";r.d(s,{Z:()=>t});let t=(0,r(6449).Z)("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]])},9017:(e,s,r)=>{"use strict";r.d(s,{Z:()=>t});let t=(0,r(6449).Z)("Shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]])},5298:(e,s,r)=>{"use strict";r.d(s,{D:()=>a});var t=r(8964);function a(e){let s=t.useRef({value:e,previous:e});return t.useMemo(()=>(s.current.value!==e&&(s.current.previous=s.current.value,s.current.value=e),s.current.previous),[e])}},255:(e,s,r)=>{"use strict";r.d(s,{t:()=>i});var t=r(8964),a=r(9537);function i(e){let[s,r]=t.useState(void 0);return(0,a.b)(()=>{if(e){r({width:e.offsetWidth,height:e.offsetHeight});let s=new ResizeObserver(s=>{let t,a;if(!Array.isArray(s)||!s.length)return;let i=s[0];if("borderBoxSize"in i){let e=i.borderBoxSize,s=Array.isArray(e)?e[0]:e;t=s.inlineSize,a=s.blockSize}else t=e.offsetWidth,a=e.offsetHeight;r({width:t,height:a})});return s.observe(e,{box:"border-box"}),()=>s.unobserve(e)}r(void 0)},[e]),s}},1608:(e,s,r)=>{"use strict";r.d(s,{j:()=>i});let t=e=>"boolean"==typeof e?"".concat(e):0===e?"0":e,a=function(){for(var e,s,r=0,t="";r<arguments.length;)(e=arguments[r++])&&(s=function e(s){var r,t,a="";if("string"==typeof s||"number"==typeof s)a+=s;else if("object"==typeof s){if(Array.isArray(s))for(r=0;r<s.length;r++)s[r]&&(t=e(s[r]))&&(a&&(a+=" "),a+=t);else for(r in s)s[r]&&(a&&(a+=" "),a+=r)}return a}(e))&&(t&&(t+=" "),t+=s);return t},i=(e,s)=>r=>{var i;if((null==s?void 0:s.variants)==null)return a(e,null==r?void 0:r.class,null==r?void 0:r.className);let{variants:n,defaultVariants:l}=s,d=Object.keys(n).map(e=>{let s=null==r?void 0:r[e],a=null==l?void 0:l[e];if(null===s)return null;let i=t(s)||t(a);return n[e][i]}),o=r&&Object.entries(r).reduce((e,s)=>{let[r,t]=s;return void 0===t||(e[r]=t),e},{});return a(e,d,null==s?void 0:null===(i=s.compoundVariants)||void 0===i?void 0:i.reduce((e,s)=>{let{class:r,className:t,...a}=s;return Object.entries(a).every(e=>{let[s,r]=e;return Array.isArray(r)?r.includes({...l,...o}[s]):({...l,...o})[s]===r})?[...e,r,t]:e},[]),null==r?void 0:r.class,null==r?void 0:r.className)}}};var s=require("../../webpack-runtime.js");s.C(e);var r=e=>s(s.s=e),t=s.X(0,[423,630,724,958,324],()=>r(6126));module.exports=t})();