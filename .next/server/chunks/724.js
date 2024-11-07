"use strict";exports.id=724,exports.ids=[724],exports.modules={1313:(e,t,r)=>{r.d(t,{Ee:()=>y,NY:()=>x,fC:()=>M});var n=r(8964),o=r(732),u=r(5090),i=r(9537),a=r(2251),l=r(7247),s="Avatar",[c,f]=(0,o.b)(s),[d,m]=c(s),p=n.forwardRef((e,t)=>{let{__scopeAvatar:r,...o}=e,[u,i]=n.useState("idle");return(0,l.jsx)(d,{scope:r,imageLoadingStatus:u,onImageLoadingStatusChange:i,children:(0,l.jsx)(a.WV.span,{...o,ref:t})})});p.displayName=s;var v="AvatarImage",g=n.forwardRef((e,t)=>{let{__scopeAvatar:r,src:o,onLoadingStatusChange:s=()=>{},...c}=e,f=m(v,r),d=function(e,t){let[r,o]=n.useState("idle");return(0,i.b)(()=>{if(!e){o("error");return}let r=!0,n=new window.Image,u=e=>()=>{r&&o(e)};return o("loading"),n.onload=u("loaded"),n.onerror=u("error"),n.src=e,t&&(n.referrerPolicy=t),()=>{r=!1}},[e,t]),r}(o,c.referrerPolicy),p=(0,u.W)(e=>{s(e),f.onImageLoadingStatusChange(e)});return(0,i.b)(()=>{"idle"!==d&&p(d)},[d,p]),"loaded"===d?(0,l.jsx)(a.WV.img,{...c,ref:t,src:o}):null});g.displayName=v;var w="AvatarFallback",N=n.forwardRef((e,t)=>{let{__scopeAvatar:r,delayMs:o,...u}=e,i=m(w,r),[s,c]=n.useState(void 0===o);return n.useEffect(()=>{if(void 0!==o){let e=window.setTimeout(()=>c(!0),o);return()=>window.clearTimeout(e)}},[o]),s&&"loaded"!==i.imageLoadingStatus?(0,l.jsx)(a.WV.span,{...u,ref:t}):null});N.displayName=w;var M=p,y=g,x=N},1829:(e,t,r)=>{r.d(t,{B:()=>a});var n=r(8964),o=r(7247),u=r(3191),i=r(9008);function a(e){let t=e+"CollectionProvider",[r,a]=function(e,t=[]){let r=[],u=()=>{let t=r.map(e=>n.createContext(e));return function(r){let o=r?.[e]||t;return n.useMemo(()=>({[`__scope${e}`]:{...r,[e]:o}}),[r,o])}};return u.scopeName=e,[function(t,u){let i=n.createContext(u),a=r.length;function l(t){let{scope:r,children:u,...l}=t,s=r?.[e][a]||i,c=n.useMemo(()=>l,Object.values(l));return(0,o.jsx)(s.Provider,{value:c,children:u})}return r=[...r,u],l.displayName=t+"Provider",[l,function(r,o){let l=o?.[e][a]||i,s=n.useContext(l);if(s)return s;if(void 0!==u)return u;throw Error(`\`${r}\` must be used within \`${t}\``)}]},function(...e){let t=e[0];if(1===e.length)return t;let r=()=>{let r=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return function(e){let o=r.reduce((t,{useScope:r,scopeName:n})=>{let o=r(e)[`__scope${n}`];return{...t,...o}},{});return n.useMemo(()=>({[`__scope${t.scopeName}`]:o}),[o])}};return r.scopeName=t.scopeName,r}(u,...t)]}(t),[l,s]=r(t,{collectionRef:{current:null},itemMap:new Map}),c=e=>{let{scope:t,children:r}=e,u=n.useRef(null),i=n.useRef(new Map).current;return(0,o.jsx)(l,{scope:t,itemMap:i,collectionRef:u,children:r})};c.displayName=t;let f=e+"CollectionSlot",d=n.forwardRef((e,t)=>{let{scope:r,children:n}=e,a=s(f,r),l=(0,u.e)(t,a.collectionRef);return(0,o.jsx)(i.g7,{ref:l,children:n})});d.displayName=f;let m=e+"CollectionItemSlot",p="data-radix-collection-item",v=n.forwardRef((e,t)=>{let{scope:r,children:a,...l}=e,c=n.useRef(null),f=(0,u.e)(t,c),d=s(m,r);return n.useEffect(()=>(d.itemMap.set(c,{ref:c,...l}),()=>void d.itemMap.delete(c))),(0,o.jsx)(i.g7,{[p]:"",ref:f,children:a})});return v.displayName=m,[{Provider:c,Slot:d,ItemSlot:v},function(t){let r=s(e+"CollectionConsumer",t);return n.useCallback(()=>{let e=r.collectionRef.current;if(!e)return[];let t=Array.from(e.querySelectorAll(`[${p}]`));return Array.from(r.itemMap.values()).sort((e,r)=>t.indexOf(e.ref.current)-t.indexOf(r.ref.current))},[r.collectionRef,r.itemMap])},a]}},1310:(e,t,r)=>{r.d(t,{gm:()=>u});var n=r(8964);r(7247);var o=n.createContext(void 0);function u(e){let t=n.useContext(o);return e||t||"ltr"}},7015:(e,t,r)=>{r.d(t,{M:()=>l});var n,o=r(8964),u=r(9537),i=(n||(n=r.t(o,2)))["useId".toString()]||(()=>void 0),a=0;function l(e){let[t,r]=o.useState(i());return(0,u.b)(()=>{e||r(e=>e??String(a++))},[e]),e||(t?`radix-${t}`:"")}},7264:(e,t,r)=>{r.d(t,{z:()=>i});var n=r(8964),o=r(3191),u=r(9537),i=e=>{let{present:t,children:r}=e,i=function(e){var t,r;let[o,i]=n.useState(),l=n.useRef({}),s=n.useRef(e),c=n.useRef("none"),[f,d]=(t=e?"mounted":"unmounted",r={mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}},n.useReducer((e,t)=>r[e][t]??e,t));return n.useEffect(()=>{let e=a(l.current);c.current="mounted"===f?e:"none"},[f]),(0,u.b)(()=>{let t=l.current,r=s.current;if(r!==e){let n=c.current,o=a(t);e?d("MOUNT"):"none"===o||t?.display==="none"?d("UNMOUNT"):r&&n!==o?d("ANIMATION_OUT"):d("UNMOUNT"),s.current=e}},[e,d]),(0,u.b)(()=>{if(o){let e;let t=o.ownerDocument.defaultView??window,r=r=>{let n=a(l.current).includes(r.animationName);if(r.target===o&&n&&(d("ANIMATION_END"),!s.current)){let r=o.style.animationFillMode;o.style.animationFillMode="forwards",e=t.setTimeout(()=>{"forwards"===o.style.animationFillMode&&(o.style.animationFillMode=r)})}},n=e=>{e.target===o&&(c.current=a(l.current))};return o.addEventListener("animationstart",n),o.addEventListener("animationcancel",r),o.addEventListener("animationend",r),()=>{t.clearTimeout(e),o.removeEventListener("animationstart",n),o.removeEventListener("animationcancel",r),o.removeEventListener("animationend",r)}}d("ANIMATION_END")},[o,d]),{isPresent:["mounted","unmountSuspended"].includes(f),ref:n.useCallback(e=>{e&&(l.current=getComputedStyle(e)),i(e)},[])}}(t),l="function"==typeof r?r({present:i.isPresent}):n.Children.only(r),s=(0,o.e)(i.ref,function(e){let t=Object.getOwnPropertyDescriptor(e.props,"ref")?.get,r=t&&"isReactWarning"in t&&t.isReactWarning;return r?e.ref:(r=(t=Object.getOwnPropertyDescriptor(e,"ref")?.get)&&"isReactWarning"in t&&t.isReactWarning)?e.props.ref:e.props.ref||e.ref}(l));return"function"==typeof r||i.isPresent?n.cloneElement(l,{ref:s}):null};function a(e){return e?.animationName||"none"}i.displayName="Presence"},7403:(e,t,r)=>{r.d(t,{ck:()=>E,fC:()=>C,Pc:()=>y});var n=r(8964),o=r(319),u=r(1829),i=r(3191),a=r(7247),l=r(7015),s=r(2251),c=r(5090),f=r(8469),d=r(1310),m="rovingFocusGroup.onEntryFocus",p={bubbles:!1,cancelable:!0},v="RovingFocusGroup",[g,w,N]=(0,u.B)(v),[M,y]=function(e,t=[]){let r=[],o=()=>{let t=r.map(e=>n.createContext(e));return function(r){let o=r?.[e]||t;return n.useMemo(()=>({[`__scope${e}`]:{...r,[e]:o}}),[r,o])}};return o.scopeName=e,[function(t,o){let u=n.createContext(o),i=r.length;function l(t){let{scope:r,children:o,...l}=t,s=r?.[e][i]||u,c=n.useMemo(()=>l,Object.values(l));return(0,a.jsx)(s.Provider,{value:c,children:o})}return r=[...r,o],l.displayName=t+"Provider",[l,function(r,a){let l=a?.[e][i]||u,s=n.useContext(l);if(s)return s;if(void 0!==o)return o;throw Error(`\`${r}\` must be used within \`${t}\``)}]},function(...e){let t=e[0];if(1===e.length)return t;let r=()=>{let r=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return function(e){let o=r.reduce((t,{useScope:r,scopeName:n})=>{let o=r(e)[`__scope${n}`];return{...t,...o}},{});return n.useMemo(()=>({[`__scope${t.scopeName}`]:o}),[o])}};return r.scopeName=t.scopeName,r}(o,...t)]}(v,[N]),[x,R]=M(v),b=n.forwardRef((e,t)=>(0,a.jsx)(g.Provider,{scope:e.__scopeRovingFocusGroup,children:(0,a.jsx)(g.Slot,{scope:e.__scopeRovingFocusGroup,children:(0,a.jsx)(I,{...e,ref:t})})}));b.displayName=v;var I=n.forwardRef((e,t)=>{let{__scopeRovingFocusGroup:r,orientation:u,loop:l=!1,dir:v,currentTabStopId:g,defaultCurrentTabStopId:N,onCurrentTabStopIdChange:M,onEntryFocus:y,preventScrollOnEntryFocus:R=!1,...b}=e,I=n.useRef(null),A=(0,i.e)(t,I),S=(0,d.gm)(v),[h=null,C]=(0,f.T)({prop:g,defaultProp:N,onChange:M}),[E,O]=n.useState(!1),_=(0,c.W)(y),j=w(r),F=n.useRef(!1),[P,D]=n.useState(0);return n.useEffect(()=>{let e=I.current;if(e)return e.addEventListener(m,_),()=>e.removeEventListener(m,_)},[_]),(0,a.jsx)(x,{scope:r,orientation:u,dir:S,loop:l,currentTabStopId:h,onItemFocus:n.useCallback(e=>C(e),[C]),onItemShiftTab:n.useCallback(()=>O(!0),[]),onFocusableItemAdd:n.useCallback(()=>D(e=>e+1),[]),onFocusableItemRemove:n.useCallback(()=>D(e=>e-1),[]),children:(0,a.jsx)(s.WV.div,{tabIndex:E||0===P?-1:0,"data-orientation":u,...b,ref:A,style:{outline:"none",...e.style},onMouseDown:(0,o.M)(e.onMouseDown,()=>{F.current=!0}),onFocus:(0,o.M)(e.onFocus,e=>{let t=!F.current;if(e.target===e.currentTarget&&t&&!E){let t=new CustomEvent(m,p);if(e.currentTarget.dispatchEvent(t),!t.defaultPrevented){let e=j().filter(e=>e.focusable);T([e.find(e=>e.active),e.find(e=>e.id===h),...e].filter(Boolean).map(e=>e.ref.current),R)}}F.current=!1}),onBlur:(0,o.M)(e.onBlur,()=>O(!1))})})}),A="RovingFocusGroupItem",S=n.forwardRef((e,t)=>{let{__scopeRovingFocusGroup:r,focusable:u=!0,active:i=!1,tabStopId:c,...f}=e,d=(0,l.M)(),m=c||d,p=R(A,r),v=p.currentTabStopId===m,N=w(r),{onFocusableItemAdd:M,onFocusableItemRemove:y}=p;return n.useEffect(()=>{if(u)return M(),()=>y()},[u,M,y]),(0,a.jsx)(g.ItemSlot,{scope:r,id:m,focusable:u,active:i,children:(0,a.jsx)(s.WV.span,{tabIndex:v?0:-1,"data-orientation":p.orientation,...f,ref:t,onMouseDown:(0,o.M)(e.onMouseDown,e=>{u?p.onItemFocus(m):e.preventDefault()}),onFocus:(0,o.M)(e.onFocus,()=>p.onItemFocus(m)),onKeyDown:(0,o.M)(e.onKeyDown,e=>{if("Tab"===e.key&&e.shiftKey){p.onItemShiftTab();return}if(e.target!==e.currentTarget)return;let t=function(e,t,r){var n;let o=(n=e.key,"rtl"!==r?n:"ArrowLeft"===n?"ArrowRight":"ArrowRight"===n?"ArrowLeft":n);if(!("vertical"===t&&["ArrowLeft","ArrowRight"].includes(o))&&!("horizontal"===t&&["ArrowUp","ArrowDown"].includes(o)))return h[o]}(e,p.orientation,p.dir);if(void 0!==t){if(e.metaKey||e.ctrlKey||e.altKey||e.shiftKey)return;e.preventDefault();let r=N().filter(e=>e.focusable).map(e=>e.ref.current);if("last"===t)r.reverse();else if("prev"===t||"next"===t){"prev"===t&&r.reverse();let n=r.indexOf(e.currentTarget);r=p.loop?function(e,t){return e.map((r,n)=>e[(t+n)%e.length])}(r,n+1):r.slice(n+1)}setTimeout(()=>T(r))}})})})});S.displayName=A;var h={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function T(e,t=!1){let r=document.activeElement;for(let n of e)if(n===r||(n.focus({preventScroll:t}),document.activeElement!==r))return}var C=b,E=S}};