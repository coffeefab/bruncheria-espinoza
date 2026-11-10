var Zy=Object.defineProperty;var ev=(t,e,n)=>e in t?Zy(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var Yd=(t,e,n)=>(ev(t,typeof e!="symbol"?e+"":e,n),n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function tv(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Sp={exports:{}},ya={},Cp={exports:{}},B={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ks=Symbol.for("react.element"),nv=Symbol.for("react.portal"),rv=Symbol.for("react.fragment"),iv=Symbol.for("react.strict_mode"),sv=Symbol.for("react.profiler"),ov=Symbol.for("react.provider"),av=Symbol.for("react.context"),lv=Symbol.for("react.forward_ref"),cv=Symbol.for("react.suspense"),uv=Symbol.for("react.memo"),dv=Symbol.for("react.lazy"),Xd=Symbol.iterator;function hv(t){return t===null||typeof t!="object"?null:(t=Xd&&t[Xd]||t["@@iterator"],typeof t=="function"?t:null)}var kp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ip=Object.assign,Tp={};function ri(t,e,n){this.props=t,this.context=e,this.refs=Tp,this.updater=n||kp}ri.prototype.isReactComponent={};ri.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ri.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Np(){}Np.prototype=ri.prototype;function au(t,e,n){this.props=t,this.context=e,this.refs=Tp,this.updater=n||kp}var lu=au.prototype=new Np;lu.constructor=au;Ip(lu,ri.prototype);lu.isPureReactComponent=!0;var Jd=Array.isArray,xp=Object.prototype.hasOwnProperty,cu={current:null},Rp={key:!0,ref:!0,__self:!0,__source:!0};function Pp(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)xp.call(e,r)&&!Rp.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:ks,type:t,key:s,ref:o,props:i,_owner:cu.current}}function fv(t,e){return{$$typeof:ks,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function uu(t){return typeof t=="object"&&t!==null&&t.$$typeof===ks}function pv(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Zd=/\/+/g;function rl(t,e){return typeof t=="object"&&t!==null&&t.key!=null?pv(""+t.key):e.toString(36)}function ao(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case ks:case nv:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+rl(o,0):r,Jd(i)?(n="",t!=null&&(n=t.replace(Zd,"$&/")+"/"),ao(i,e,n,"",function(c){return c})):i!=null&&(uu(i)&&(i=fv(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Zd,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Jd(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+rl(s,a);o+=ao(s,e,n,l,i)}else if(l=hv(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+rl(s,a++),o+=ao(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ws(t,e,n){if(t==null)return t;var r=[],i=0;return ao(t,r,"","",function(s){return e.call(n,s,i++)}),r}function mv(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var je={current:null},lo={transition:null},gv={ReactCurrentDispatcher:je,ReactCurrentBatchConfig:lo,ReactCurrentOwner:cu};function Ap(){throw Error("act(...) is not supported in production builds of React.")}B.Children={map:Ws,forEach:function(t,e,n){Ws(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ws(t,function(){e++}),e},toArray:function(t){return Ws(t,function(e){return e})||[]},only:function(t){if(!uu(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};B.Component=ri;B.Fragment=rv;B.Profiler=sv;B.PureComponent=au;B.StrictMode=iv;B.Suspense=cv;B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=gv;B.act=Ap;B.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Ip({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=cu.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)xp.call(e,l)&&!Rp.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:ks,type:t.type,key:i,ref:s,props:r,_owner:o}};B.createContext=function(t){return t={$$typeof:av,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:ov,_context:t},t.Consumer=t};B.createElement=Pp;B.createFactory=function(t){var e=Pp.bind(null,t);return e.type=t,e};B.createRef=function(){return{current:null}};B.forwardRef=function(t){return{$$typeof:lv,render:t}};B.isValidElement=uu;B.lazy=function(t){return{$$typeof:dv,_payload:{_status:-1,_result:t},_init:mv}};B.memo=function(t,e){return{$$typeof:uv,type:t,compare:e===void 0?null:e}};B.startTransition=function(t){var e=lo.transition;lo.transition={};try{t()}finally{lo.transition=e}};B.unstable_act=Ap;B.useCallback=function(t,e){return je.current.useCallback(t,e)};B.useContext=function(t){return je.current.useContext(t)};B.useDebugValue=function(){};B.useDeferredValue=function(t){return je.current.useDeferredValue(t)};B.useEffect=function(t,e){return je.current.useEffect(t,e)};B.useId=function(){return je.current.useId()};B.useImperativeHandle=function(t,e,n){return je.current.useImperativeHandle(t,e,n)};B.useInsertionEffect=function(t,e){return je.current.useInsertionEffect(t,e)};B.useLayoutEffect=function(t,e){return je.current.useLayoutEffect(t,e)};B.useMemo=function(t,e){return je.current.useMemo(t,e)};B.useReducer=function(t,e,n){return je.current.useReducer(t,e,n)};B.useRef=function(t){return je.current.useRef(t)};B.useState=function(t){return je.current.useState(t)};B.useSyncExternalStore=function(t,e,n){return je.current.useSyncExternalStore(t,e,n)};B.useTransition=function(){return je.current.useTransition()};B.version="18.3.1";Cp.exports=B;var O=Cp.exports;const Op=tv(O);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _v=O,yv=Symbol.for("react.element"),vv=Symbol.for("react.fragment"),wv=Object.prototype.hasOwnProperty,Ev=_v.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Sv={key:!0,ref:!0,__self:!0,__source:!0};function Dp(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)wv.call(e,r)&&!Sv.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:yv,type:t,key:s,ref:o,props:i,_owner:Ev.current}}ya.Fragment=vv;ya.jsx=Dp;ya.jsxs=Dp;Sp.exports=ya;var h=Sp.exports,Vl={},Lp={exports:{}},Xe={},bp={exports:{}},Mp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(x,F){var j=x.length;x.push(F);e:for(;0<j;){var q=j-1>>>1,ne=x[q];if(0<i(ne,F))x[q]=F,x[j]=ne,j=q;else break e}}function n(x){return x.length===0?null:x[0]}function r(x){if(x.length===0)return null;var F=x[0],j=x.pop();if(j!==F){x[0]=j;e:for(var q=0,ne=x.length,fr=ne>>>1;q<fr;){var Qt=2*(q+1)-1,qt=x[Qt],T=Qt+1,$=x[T];if(0>i(qt,j))T<ne&&0>i($,qt)?(x[q]=$,x[T]=j,q=T):(x[q]=qt,x[Qt]=j,q=Qt);else if(T<ne&&0>i($,j))x[q]=$,x[T]=j,q=T;else break e}}return F}function i(x,F){var j=x.sortIndex-F.sortIndex;return j!==0?j:x.id-F.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],u=1,d=null,f=3,_=!1,y=!1,v=!1,S=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(x){for(var F=n(c);F!==null;){if(F.callback===null)r(c);else if(F.startTime<=x)r(c),F.sortIndex=F.expirationTime,e(l,F);else break;F=n(c)}}function w(x){if(v=!1,g(x),!y)if(n(l)!==null)y=!0,mi(I);else{var F=n(c);F!==null&&hr(w,F.startTime-x)}}function I(x,F){y=!1,v&&(v=!1,m(k),k=-1),_=!0;var j=f;try{for(g(F),d=n(l);d!==null&&(!(d.expirationTime>F)||x&&!A());){var q=d.callback;if(typeof q=="function"){d.callback=null,f=d.priorityLevel;var ne=q(d.expirationTime<=F);F=t.unstable_now(),typeof ne=="function"?d.callback=ne:d===n(l)&&r(l),g(F)}else r(l);d=n(l)}if(d!==null)var fr=!0;else{var Qt=n(c);Qt!==null&&hr(w,Qt.startTime-F),fr=!1}return fr}finally{d=null,f=j,_=!1}}var N=!1,P=null,k=-1,b=5,D=-1;function A(){return!(t.unstable_now()-D<b)}function Z(){if(P!==null){var x=t.unstable_now();D=x;var F=!0;try{F=P(!0,x)}finally{F?ge():(N=!1,P=null)}}else N=!1}var ge;if(typeof p=="function")ge=function(){p(Z)};else if(typeof MessageChannel<"u"){var Pt=new MessageChannel,Ln=Pt.port2;Pt.port1.onmessage=Z,ge=function(){Ln.postMessage(null)}}else ge=function(){S(Z,0)};function mi(x){P=x,N||(N=!0,ge())}function hr(x,F){k=S(function(){x(t.unstable_now())},F)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(x){x.callback=null},t.unstable_continueExecution=function(){y||_||(y=!0,mi(I))},t.unstable_forceFrameRate=function(x){0>x||125<x?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<x?Math.floor(1e3/x):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(x){switch(f){case 1:case 2:case 3:var F=3;break;default:F=f}var j=f;f=F;try{return x()}finally{f=j}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(x,F){switch(x){case 1:case 2:case 3:case 4:case 5:break;default:x=3}var j=f;f=x;try{return F()}finally{f=j}},t.unstable_scheduleCallback=function(x,F,j){var q=t.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?q+j:q):j=q,x){case 1:var ne=-1;break;case 2:ne=250;break;case 5:ne=1073741823;break;case 4:ne=1e4;break;default:ne=5e3}return ne=j+ne,x={id:u++,callback:F,priorityLevel:x,startTime:j,expirationTime:ne,sortIndex:-1},j>q?(x.sortIndex=j,e(c,x),n(l)===null&&x===n(c)&&(v?(m(k),k=-1):v=!0,hr(w,j-q))):(x.sortIndex=ne,e(l,x),y||_||(y=!0,mi(I))),x},t.unstable_shouldYield=A,t.unstable_wrapCallback=function(x){var F=f;return function(){var j=f;f=F;try{return x.apply(this,arguments)}finally{f=j}}}})(Mp);bp.exports=Mp;var Cv=bp.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kv=O,qe=Cv;function E(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Fp=new Set,qi={};function or(t,e){Br(t,e),Br(t+"Capture",e)}function Br(t,e){for(qi[t]=e,t=0;t<e.length;t++)Fp.add(e[t])}var zt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Hl=Object.prototype.hasOwnProperty,Iv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,eh={},th={};function Tv(t){return Hl.call(th,t)?!0:Hl.call(eh,t)?!1:Iv.test(t)?th[t]=!0:(eh[t]=!0,!1)}function Nv(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function xv(t,e,n,r){if(e===null||typeof e>"u"||Nv(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Ue(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Te={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Te[t]=new Ue(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Te[e]=new Ue(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Te[t]=new Ue(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Te[t]=new Ue(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Te[t]=new Ue(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Te[t]=new Ue(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Te[t]=new Ue(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Te[t]=new Ue(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Te[t]=new Ue(t,5,!1,t.toLowerCase(),null,!1,!1)});var du=/[\-:]([a-z])/g;function hu(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(du,hu);Te[e]=new Ue(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(du,hu);Te[e]=new Ue(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(du,hu);Te[e]=new Ue(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Te[t]=new Ue(t,1,!1,t.toLowerCase(),null,!1,!1)});Te.xlinkHref=new Ue("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Te[t]=new Ue(t,1,!1,t.toLowerCase(),null,!0,!0)});function fu(t,e,n,r){var i=Te.hasOwnProperty(e)?Te[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(xv(e,n,i,r)&&(n=null),r||i===null?Tv(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Gt=kv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Bs=Symbol.for("react.element"),gr=Symbol.for("react.portal"),_r=Symbol.for("react.fragment"),pu=Symbol.for("react.strict_mode"),Kl=Symbol.for("react.profiler"),jp=Symbol.for("react.provider"),Up=Symbol.for("react.context"),mu=Symbol.for("react.forward_ref"),Gl=Symbol.for("react.suspense"),Ql=Symbol.for("react.suspense_list"),gu=Symbol.for("react.memo"),Jt=Symbol.for("react.lazy"),zp=Symbol.for("react.offscreen"),nh=Symbol.iterator;function gi(t){return t===null||typeof t!="object"?null:(t=nh&&t[nh]||t["@@iterator"],typeof t=="function"?t:null)}var ae=Object.assign,il;function Ri(t){if(il===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);il=e&&e[1]||""}return`
`+il+t}var sl=!1;function ol(t,e){if(!t||sl)return"";sl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{sl=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ri(t):""}function Rv(t){switch(t.tag){case 5:return Ri(t.type);case 16:return Ri("Lazy");case 13:return Ri("Suspense");case 19:return Ri("SuspenseList");case 0:case 2:case 15:return t=ol(t.type,!1),t;case 11:return t=ol(t.type.render,!1),t;case 1:return t=ol(t.type,!0),t;default:return""}}function ql(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case _r:return"Fragment";case gr:return"Portal";case Kl:return"Profiler";case pu:return"StrictMode";case Gl:return"Suspense";case Ql:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Up:return(t.displayName||"Context")+".Consumer";case jp:return(t._context.displayName||"Context")+".Provider";case mu:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case gu:return e=t.displayName||null,e!==null?e:ql(t.type)||"Memo";case Jt:e=t._payload,t=t._init;try{return ql(t(e))}catch{}}return null}function Pv(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ql(e);case 8:return e===pu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function kn(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Wp(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Av(t){var e=Wp(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function $s(t){t._valueTracker||(t._valueTracker=Av(t))}function Bp(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Wp(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function ko(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Yl(t,e){var n=e.checked;return ae({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function rh(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=kn(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function $p(t,e){e=e.checked,e!=null&&fu(t,"checked",e,!1)}function Xl(t,e){$p(t,e);var n=kn(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Jl(t,e.type,n):e.hasOwnProperty("defaultValue")&&Jl(t,e.type,kn(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function ih(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Jl(t,e,n){(e!=="number"||ko(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Pi=Array.isArray;function Pr(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+kn(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Zl(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(E(91));return ae({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function sh(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(E(92));if(Pi(n)){if(1<n.length)throw Error(E(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:kn(n)}}function Vp(t,e){var n=kn(e.value),r=kn(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function oh(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Hp(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ec(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Hp(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Vs,Kp=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Vs=Vs||document.createElement("div"),Vs.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Vs.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Yi(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var bi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ov=["Webkit","ms","Moz","O"];Object.keys(bi).forEach(function(t){Ov.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),bi[e]=bi[t]})});function Gp(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||bi.hasOwnProperty(t)&&bi[t]?(""+e).trim():e+"px"}function Qp(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Gp(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var Dv=ae({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function tc(t,e){if(e){if(Dv[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(E(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(E(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(E(61))}if(e.style!=null&&typeof e.style!="object")throw Error(E(62))}}function nc(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var rc=null;function _u(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ic=null,Ar=null,Or=null;function ah(t){if(t=Ns(t)){if(typeof ic!="function")throw Error(E(280));var e=t.stateNode;e&&(e=Ca(e),ic(t.stateNode,t.type,e))}}function qp(t){Ar?Or?Or.push(t):Or=[t]:Ar=t}function Yp(){if(Ar){var t=Ar,e=Or;if(Or=Ar=null,ah(t),e)for(t=0;t<e.length;t++)ah(e[t])}}function Xp(t,e){return t(e)}function Jp(){}var al=!1;function Zp(t,e,n){if(al)return t(e,n);al=!0;try{return Xp(t,e,n)}finally{al=!1,(Ar!==null||Or!==null)&&(Jp(),Yp())}}function Xi(t,e){var n=t.stateNode;if(n===null)return null;var r=Ca(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(E(231,e,typeof n));return n}var sc=!1;if(zt)try{var _i={};Object.defineProperty(_i,"passive",{get:function(){sc=!0}}),window.addEventListener("test",_i,_i),window.removeEventListener("test",_i,_i)}catch{sc=!1}function Lv(t,e,n,r,i,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(u){this.onError(u)}}var Mi=!1,Io=null,To=!1,oc=null,bv={onError:function(t){Mi=!0,Io=t}};function Mv(t,e,n,r,i,s,o,a,l){Mi=!1,Io=null,Lv.apply(bv,arguments)}function Fv(t,e,n,r,i,s,o,a,l){if(Mv.apply(this,arguments),Mi){if(Mi){var c=Io;Mi=!1,Io=null}else throw Error(E(198));To||(To=!0,oc=c)}}function ar(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function em(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function lh(t){if(ar(t)!==t)throw Error(E(188))}function jv(t){var e=t.alternate;if(!e){if(e=ar(t),e===null)throw Error(E(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return lh(i),t;if(s===r)return lh(i),e;s=s.sibling}throw Error(E(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(E(189))}}if(n.alternate!==r)throw Error(E(190))}if(n.tag!==3)throw Error(E(188));return n.stateNode.current===n?t:e}function tm(t){return t=jv(t),t!==null?nm(t):null}function nm(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=nm(t);if(e!==null)return e;t=t.sibling}return null}var rm=qe.unstable_scheduleCallback,ch=qe.unstable_cancelCallback,Uv=qe.unstable_shouldYield,zv=qe.unstable_requestPaint,ue=qe.unstable_now,Wv=qe.unstable_getCurrentPriorityLevel,yu=qe.unstable_ImmediatePriority,im=qe.unstable_UserBlockingPriority,No=qe.unstable_NormalPriority,Bv=qe.unstable_LowPriority,sm=qe.unstable_IdlePriority,va=null,Tt=null;function $v(t){if(Tt&&typeof Tt.onCommitFiberRoot=="function")try{Tt.onCommitFiberRoot(va,t,void 0,(t.current.flags&128)===128)}catch{}}var gt=Math.clz32?Math.clz32:Kv,Vv=Math.log,Hv=Math.LN2;function Kv(t){return t>>>=0,t===0?32:31-(Vv(t)/Hv|0)|0}var Hs=64,Ks=4194304;function Ai(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function xo(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Ai(a):(s&=o,s!==0&&(r=Ai(s)))}else o=n&~i,o!==0?r=Ai(o):s!==0&&(r=Ai(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-gt(e),i=1<<n,r|=t[n],e&=~i;return r}function Gv(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Qv(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-gt(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=Gv(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function ac(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function om(){var t=Hs;return Hs<<=1,!(Hs&4194240)&&(Hs=64),t}function ll(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Is(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-gt(e),t[e]=n}function qv(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-gt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function vu(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-gt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var K=0;function am(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var lm,wu,cm,um,dm,lc=!1,Gs=[],un=null,dn=null,hn=null,Ji=new Map,Zi=new Map,en=[],Yv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function uh(t,e){switch(t){case"focusin":case"focusout":un=null;break;case"dragenter":case"dragleave":dn=null;break;case"mouseover":case"mouseout":hn=null;break;case"pointerover":case"pointerout":Ji.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Zi.delete(e.pointerId)}}function yi(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Ns(e),e!==null&&wu(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function Xv(t,e,n,r,i){switch(e){case"focusin":return un=yi(un,t,e,n,r,i),!0;case"dragenter":return dn=yi(dn,t,e,n,r,i),!0;case"mouseover":return hn=yi(hn,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Ji.set(s,yi(Ji.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Zi.set(s,yi(Zi.get(s)||null,t,e,n,r,i)),!0}return!1}function hm(t){var e=zn(t.target);if(e!==null){var n=ar(e);if(n!==null){if(e=n.tag,e===13){if(e=em(n),e!==null){t.blockedOn=e,dm(t.priority,function(){cm(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function co(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=cc(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);rc=r,n.target.dispatchEvent(r),rc=null}else return e=Ns(n),e!==null&&wu(e),t.blockedOn=n,!1;e.shift()}return!0}function dh(t,e,n){co(t)&&n.delete(e)}function Jv(){lc=!1,un!==null&&co(un)&&(un=null),dn!==null&&co(dn)&&(dn=null),hn!==null&&co(hn)&&(hn=null),Ji.forEach(dh),Zi.forEach(dh)}function vi(t,e){t.blockedOn===e&&(t.blockedOn=null,lc||(lc=!0,qe.unstable_scheduleCallback(qe.unstable_NormalPriority,Jv)))}function es(t){function e(i){return vi(i,t)}if(0<Gs.length){vi(Gs[0],t);for(var n=1;n<Gs.length;n++){var r=Gs[n];r.blockedOn===t&&(r.blockedOn=null)}}for(un!==null&&vi(un,t),dn!==null&&vi(dn,t),hn!==null&&vi(hn,t),Ji.forEach(e),Zi.forEach(e),n=0;n<en.length;n++)r=en[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<en.length&&(n=en[0],n.blockedOn===null);)hm(n),n.blockedOn===null&&en.shift()}var Dr=Gt.ReactCurrentBatchConfig,Ro=!0;function Zv(t,e,n,r){var i=K,s=Dr.transition;Dr.transition=null;try{K=1,Eu(t,e,n,r)}finally{K=i,Dr.transition=s}}function ew(t,e,n,r){var i=K,s=Dr.transition;Dr.transition=null;try{K=4,Eu(t,e,n,r)}finally{K=i,Dr.transition=s}}function Eu(t,e,n,r){if(Ro){var i=cc(t,e,n,r);if(i===null)yl(t,e,r,Po,n),uh(t,r);else if(Xv(i,t,e,n,r))r.stopPropagation();else if(uh(t,r),e&4&&-1<Yv.indexOf(t)){for(;i!==null;){var s=Ns(i);if(s!==null&&lm(s),s=cc(t,e,n,r),s===null&&yl(t,e,r,Po,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else yl(t,e,r,null,n)}}var Po=null;function cc(t,e,n,r){if(Po=null,t=_u(r),t=zn(t),t!==null)if(e=ar(t),e===null)t=null;else if(n=e.tag,n===13){if(t=em(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Po=t,null}function fm(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Wv()){case yu:return 1;case im:return 4;case No:case Bv:return 16;case sm:return 536870912;default:return 16}default:return 16}}var an=null,Su=null,uo=null;function pm(){if(uo)return uo;var t,e=Su,n=e.length,r,i="value"in an?an.value:an.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return uo=i.slice(t,1<r?1-r:void 0)}function ho(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Qs(){return!0}function hh(){return!1}function Je(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Qs:hh,this.isPropagationStopped=hh,this}return ae(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Qs)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Qs)},persist:function(){},isPersistent:Qs}),e}var ii={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Cu=Je(ii),Ts=ae({},ii,{view:0,detail:0}),tw=Je(Ts),cl,ul,wi,wa=ae({},Ts,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ku,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==wi&&(wi&&t.type==="mousemove"?(cl=t.screenX-wi.screenX,ul=t.screenY-wi.screenY):ul=cl=0,wi=t),cl)},movementY:function(t){return"movementY"in t?t.movementY:ul}}),fh=Je(wa),nw=ae({},wa,{dataTransfer:0}),rw=Je(nw),iw=ae({},Ts,{relatedTarget:0}),dl=Je(iw),sw=ae({},ii,{animationName:0,elapsedTime:0,pseudoElement:0}),ow=Je(sw),aw=ae({},ii,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),lw=Je(aw),cw=ae({},ii,{data:0}),ph=Je(cw),uw={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},dw={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},hw={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function fw(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=hw[t])?!!e[t]:!1}function ku(){return fw}var pw=ae({},Ts,{key:function(t){if(t.key){var e=uw[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=ho(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?dw[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ku,charCode:function(t){return t.type==="keypress"?ho(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ho(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),mw=Je(pw),gw=ae({},wa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),mh=Je(gw),_w=ae({},Ts,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ku}),yw=Je(_w),vw=ae({},ii,{propertyName:0,elapsedTime:0,pseudoElement:0}),ww=Je(vw),Ew=ae({},wa,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Sw=Je(Ew),Cw=[9,13,27,32],Iu=zt&&"CompositionEvent"in window,Fi=null;zt&&"documentMode"in document&&(Fi=document.documentMode);var kw=zt&&"TextEvent"in window&&!Fi,mm=zt&&(!Iu||Fi&&8<Fi&&11>=Fi),gh=String.fromCharCode(32),_h=!1;function gm(t,e){switch(t){case"keyup":return Cw.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function _m(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var yr=!1;function Iw(t,e){switch(t){case"compositionend":return _m(e);case"keypress":return e.which!==32?null:(_h=!0,gh);case"textInput":return t=e.data,t===gh&&_h?null:t;default:return null}}function Tw(t,e){if(yr)return t==="compositionend"||!Iu&&gm(t,e)?(t=pm(),uo=Su=an=null,yr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return mm&&e.locale!=="ko"?null:e.data;default:return null}}var Nw={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function yh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Nw[t.type]:e==="textarea"}function ym(t,e,n,r){qp(r),e=Ao(e,"onChange"),0<e.length&&(n=new Cu("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var ji=null,ts=null;function xw(t){Rm(t,0)}function Ea(t){var e=Er(t);if(Bp(e))return t}function Rw(t,e){if(t==="change")return e}var vm=!1;if(zt){var hl;if(zt){var fl="oninput"in document;if(!fl){var vh=document.createElement("div");vh.setAttribute("oninput","return;"),fl=typeof vh.oninput=="function"}hl=fl}else hl=!1;vm=hl&&(!document.documentMode||9<document.documentMode)}function wh(){ji&&(ji.detachEvent("onpropertychange",wm),ts=ji=null)}function wm(t){if(t.propertyName==="value"&&Ea(ts)){var e=[];ym(e,ts,t,_u(t)),Zp(xw,e)}}function Pw(t,e,n){t==="focusin"?(wh(),ji=e,ts=n,ji.attachEvent("onpropertychange",wm)):t==="focusout"&&wh()}function Aw(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ea(ts)}function Ow(t,e){if(t==="click")return Ea(e)}function Dw(t,e){if(t==="input"||t==="change")return Ea(e)}function Lw(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var vt=typeof Object.is=="function"?Object.is:Lw;function ns(t,e){if(vt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Hl.call(e,i)||!vt(t[i],e[i]))return!1}return!0}function Eh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Sh(t,e){var n=Eh(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Eh(n)}}function Em(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Em(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Sm(){for(var t=window,e=ko();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=ko(t.document)}return e}function Tu(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function bw(t){var e=Sm(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Em(n.ownerDocument.documentElement,n)){if(r!==null&&Tu(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Sh(n,s);var o=Sh(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Mw=zt&&"documentMode"in document&&11>=document.documentMode,vr=null,uc=null,Ui=null,dc=!1;function Ch(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;dc||vr==null||vr!==ko(r)||(r=vr,"selectionStart"in r&&Tu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ui&&ns(Ui,r)||(Ui=r,r=Ao(uc,"onSelect"),0<r.length&&(e=new Cu("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=vr)))}function qs(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var wr={animationend:qs("Animation","AnimationEnd"),animationiteration:qs("Animation","AnimationIteration"),animationstart:qs("Animation","AnimationStart"),transitionend:qs("Transition","TransitionEnd")},pl={},Cm={};zt&&(Cm=document.createElement("div").style,"AnimationEvent"in window||(delete wr.animationend.animation,delete wr.animationiteration.animation,delete wr.animationstart.animation),"TransitionEvent"in window||delete wr.transitionend.transition);function Sa(t){if(pl[t])return pl[t];if(!wr[t])return t;var e=wr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Cm)return pl[t]=e[n];return t}var km=Sa("animationend"),Im=Sa("animationiteration"),Tm=Sa("animationstart"),Nm=Sa("transitionend"),xm=new Map,kh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Rn(t,e){xm.set(t,e),or(e,[t])}for(var ml=0;ml<kh.length;ml++){var gl=kh[ml],Fw=gl.toLowerCase(),jw=gl[0].toUpperCase()+gl.slice(1);Rn(Fw,"on"+jw)}Rn(km,"onAnimationEnd");Rn(Im,"onAnimationIteration");Rn(Tm,"onAnimationStart");Rn("dblclick","onDoubleClick");Rn("focusin","onFocus");Rn("focusout","onBlur");Rn(Nm,"onTransitionEnd");Br("onMouseEnter",["mouseout","mouseover"]);Br("onMouseLeave",["mouseout","mouseover"]);Br("onPointerEnter",["pointerout","pointerover"]);Br("onPointerLeave",["pointerout","pointerover"]);or("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));or("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));or("onBeforeInput",["compositionend","keypress","textInput","paste"]);or("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));or("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));or("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Oi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Uw=new Set("cancel close invalid load scroll toggle".split(" ").concat(Oi));function Ih(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,Fv(r,e,void 0,t),t.currentTarget=null}function Rm(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;Ih(i,a,c),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;Ih(i,a,c),s=l}}}if(To)throw t=oc,To=!1,oc=null,t}function ee(t,e){var n=e[gc];n===void 0&&(n=e[gc]=new Set);var r=t+"__bubble";n.has(r)||(Pm(e,t,2,!1),n.add(r))}function _l(t,e,n){var r=0;e&&(r|=4),Pm(n,t,r,e)}var Ys="_reactListening"+Math.random().toString(36).slice(2);function rs(t){if(!t[Ys]){t[Ys]=!0,Fp.forEach(function(n){n!=="selectionchange"&&(Uw.has(n)||_l(n,!1,t),_l(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ys]||(e[Ys]=!0,_l("selectionchange",!1,e))}}function Pm(t,e,n,r){switch(fm(e)){case 1:var i=Zv;break;case 4:i=ew;break;default:i=Eu}n=i.bind(null,e,n,t),i=void 0,!sc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function yl(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=zn(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}Zp(function(){var c=s,u=_u(n),d=[];e:{var f=xm.get(t);if(f!==void 0){var _=Cu,y=t;switch(t){case"keypress":if(ho(n)===0)break e;case"keydown":case"keyup":_=mw;break;case"focusin":y="focus",_=dl;break;case"focusout":y="blur",_=dl;break;case"beforeblur":case"afterblur":_=dl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":_=fh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":_=rw;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":_=yw;break;case km:case Im:case Tm:_=ow;break;case Nm:_=ww;break;case"scroll":_=tw;break;case"wheel":_=Sw;break;case"copy":case"cut":case"paste":_=lw;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":_=mh}var v=(e&4)!==0,S=!v&&t==="scroll",m=v?f!==null?f+"Capture":null:f;v=[];for(var p=c,g;p!==null;){g=p;var w=g.stateNode;if(g.tag===5&&w!==null&&(g=w,m!==null&&(w=Xi(p,m),w!=null&&v.push(is(p,w,g)))),S)break;p=p.return}0<v.length&&(f=new _(f,y,null,n,u),d.push({event:f,listeners:v}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",_=t==="mouseout"||t==="pointerout",f&&n!==rc&&(y=n.relatedTarget||n.fromElement)&&(zn(y)||y[Wt]))break e;if((_||f)&&(f=u.window===u?u:(f=u.ownerDocument)?f.defaultView||f.parentWindow:window,_?(y=n.relatedTarget||n.toElement,_=c,y=y?zn(y):null,y!==null&&(S=ar(y),y!==S||y.tag!==5&&y.tag!==6)&&(y=null)):(_=null,y=c),_!==y)){if(v=fh,w="onMouseLeave",m="onMouseEnter",p="mouse",(t==="pointerout"||t==="pointerover")&&(v=mh,w="onPointerLeave",m="onPointerEnter",p="pointer"),S=_==null?f:Er(_),g=y==null?f:Er(y),f=new v(w,p+"leave",_,n,u),f.target=S,f.relatedTarget=g,w=null,zn(u)===c&&(v=new v(m,p+"enter",y,n,u),v.target=g,v.relatedTarget=S,w=v),S=w,_&&y)t:{for(v=_,m=y,p=0,g=v;g;g=pr(g))p++;for(g=0,w=m;w;w=pr(w))g++;for(;0<p-g;)v=pr(v),p--;for(;0<g-p;)m=pr(m),g--;for(;p--;){if(v===m||m!==null&&v===m.alternate)break t;v=pr(v),m=pr(m)}v=null}else v=null;_!==null&&Th(d,f,_,v,!1),y!==null&&S!==null&&Th(d,S,y,v,!0)}}e:{if(f=c?Er(c):window,_=f.nodeName&&f.nodeName.toLowerCase(),_==="select"||_==="input"&&f.type==="file")var I=Rw;else if(yh(f))if(vm)I=Dw;else{I=Aw;var N=Pw}else(_=f.nodeName)&&_.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(I=Ow);if(I&&(I=I(t,c))){ym(d,I,n,u);break e}N&&N(t,f,c),t==="focusout"&&(N=f._wrapperState)&&N.controlled&&f.type==="number"&&Jl(f,"number",f.value)}switch(N=c?Er(c):window,t){case"focusin":(yh(N)||N.contentEditable==="true")&&(vr=N,uc=c,Ui=null);break;case"focusout":Ui=uc=vr=null;break;case"mousedown":dc=!0;break;case"contextmenu":case"mouseup":case"dragend":dc=!1,Ch(d,n,u);break;case"selectionchange":if(Mw)break;case"keydown":case"keyup":Ch(d,n,u)}var P;if(Iu)e:{switch(t){case"compositionstart":var k="onCompositionStart";break e;case"compositionend":k="onCompositionEnd";break e;case"compositionupdate":k="onCompositionUpdate";break e}k=void 0}else yr?gm(t,n)&&(k="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(k="onCompositionStart");k&&(mm&&n.locale!=="ko"&&(yr||k!=="onCompositionStart"?k==="onCompositionEnd"&&yr&&(P=pm()):(an=u,Su="value"in an?an.value:an.textContent,yr=!0)),N=Ao(c,k),0<N.length&&(k=new ph(k,t,null,n,u),d.push({event:k,listeners:N}),P?k.data=P:(P=_m(n),P!==null&&(k.data=P)))),(P=kw?Iw(t,n):Tw(t,n))&&(c=Ao(c,"onBeforeInput"),0<c.length&&(u=new ph("onBeforeInput","beforeinput",null,n,u),d.push({event:u,listeners:c}),u.data=P))}Rm(d,e)})}function is(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Ao(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Xi(t,n),s!=null&&r.unshift(is(t,s,i)),s=Xi(t,e),s!=null&&r.push(is(t,s,i))),t=t.return}return r}function pr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Th(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&c!==null&&(a=c,i?(l=Xi(n,s),l!=null&&o.unshift(is(n,l,a))):i||(l=Xi(n,s),l!=null&&o.push(is(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var zw=/\r\n?/g,Ww=/\u0000|\uFFFD/g;function Nh(t){return(typeof t=="string"?t:""+t).replace(zw,`
`).replace(Ww,"")}function Xs(t,e,n){if(e=Nh(e),Nh(t)!==e&&n)throw Error(E(425))}function Oo(){}var hc=null,fc=null;function pc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var mc=typeof setTimeout=="function"?setTimeout:void 0,Bw=typeof clearTimeout=="function"?clearTimeout:void 0,xh=typeof Promise=="function"?Promise:void 0,$w=typeof queueMicrotask=="function"?queueMicrotask:typeof xh<"u"?function(t){return xh.resolve(null).then(t).catch(Vw)}:mc;function Vw(t){setTimeout(function(){throw t})}function vl(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),es(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);es(e)}function fn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Rh(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var si=Math.random().toString(36).slice(2),It="__reactFiber$"+si,ss="__reactProps$"+si,Wt="__reactContainer$"+si,gc="__reactEvents$"+si,Hw="__reactListeners$"+si,Kw="__reactHandles$"+si;function zn(t){var e=t[It];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Wt]||n[It]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Rh(t);t!==null;){if(n=t[It])return n;t=Rh(t)}return e}t=n,n=t.parentNode}return null}function Ns(t){return t=t[It]||t[Wt],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Er(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(E(33))}function Ca(t){return t[ss]||null}var _c=[],Sr=-1;function Pn(t){return{current:t}}function te(t){0>Sr||(t.current=_c[Sr],_c[Sr]=null,Sr--)}function J(t,e){Sr++,_c[Sr]=t.current,t.current=e}var In={},Oe=Pn(In),$e=Pn(!1),Gn=In;function $r(t,e){var n=t.type.contextTypes;if(!n)return In;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Ve(t){return t=t.childContextTypes,t!=null}function Do(){te($e),te(Oe)}function Ph(t,e,n){if(Oe.current!==In)throw Error(E(168));J(Oe,e),J($e,n)}function Am(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(E(108,Pv(t)||"Unknown",i));return ae({},n,r)}function Lo(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||In,Gn=Oe.current,J(Oe,t),J($e,$e.current),!0}function Ah(t,e,n){var r=t.stateNode;if(!r)throw Error(E(169));n?(t=Am(t,e,Gn),r.__reactInternalMemoizedMergedChildContext=t,te($e),te(Oe),J(Oe,t)):te($e),J($e,n)}var Ot=null,ka=!1,wl=!1;function Om(t){Ot===null?Ot=[t]:Ot.push(t)}function Gw(t){ka=!0,Om(t)}function An(){if(!wl&&Ot!==null){wl=!0;var t=0,e=K;try{var n=Ot;for(K=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Ot=null,ka=!1}catch(i){throw Ot!==null&&(Ot=Ot.slice(t+1)),rm(yu,An),i}finally{K=e,wl=!1}}return null}var Cr=[],kr=0,bo=null,Mo=0,Ze=[],et=0,Qn=null,Dt=1,Lt="";function Mn(t,e){Cr[kr++]=Mo,Cr[kr++]=bo,bo=t,Mo=e}function Dm(t,e,n){Ze[et++]=Dt,Ze[et++]=Lt,Ze[et++]=Qn,Qn=t;var r=Dt;t=Lt;var i=32-gt(r)-1;r&=~(1<<i),n+=1;var s=32-gt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Dt=1<<32-gt(e)+i|n<<i|r,Lt=s+t}else Dt=1<<s|n<<i|r,Lt=t}function Nu(t){t.return!==null&&(Mn(t,1),Dm(t,1,0))}function xu(t){for(;t===bo;)bo=Cr[--kr],Cr[kr]=null,Mo=Cr[--kr],Cr[kr]=null;for(;t===Qn;)Qn=Ze[--et],Ze[et]=null,Lt=Ze[--et],Ze[et]=null,Dt=Ze[--et],Ze[et]=null}var Qe=null,Ge=null,re=!1,dt=null;function Lm(t,e){var n=tt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Oh(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Qe=t,Ge=fn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Qe=t,Ge=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Qn!==null?{id:Dt,overflow:Lt}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=tt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Qe=t,Ge=null,!0):!1;default:return!1}}function yc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function vc(t){if(re){var e=Ge;if(e){var n=e;if(!Oh(t,e)){if(yc(t))throw Error(E(418));e=fn(n.nextSibling);var r=Qe;e&&Oh(t,e)?Lm(r,n):(t.flags=t.flags&-4097|2,re=!1,Qe=t)}}else{if(yc(t))throw Error(E(418));t.flags=t.flags&-4097|2,re=!1,Qe=t}}}function Dh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Qe=t}function Js(t){if(t!==Qe)return!1;if(!re)return Dh(t),re=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!pc(t.type,t.memoizedProps)),e&&(e=Ge)){if(yc(t))throw bm(),Error(E(418));for(;e;)Lm(t,e),e=fn(e.nextSibling)}if(Dh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(E(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Ge=fn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Ge=null}}else Ge=Qe?fn(t.stateNode.nextSibling):null;return!0}function bm(){for(var t=Ge;t;)t=fn(t.nextSibling)}function Vr(){Ge=Qe=null,re=!1}function Ru(t){dt===null?dt=[t]:dt.push(t)}var Qw=Gt.ReactCurrentBatchConfig;function Ei(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(E(309));var r=n.stateNode}if(!r)throw Error(E(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(E(284));if(!n._owner)throw Error(E(290,t))}return t}function Zs(t,e){throw t=Object.prototype.toString.call(e),Error(E(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Lh(t){var e=t._init;return e(t._payload)}function Mm(t){function e(m,p){if(t){var g=m.deletions;g===null?(m.deletions=[p],m.flags|=16):g.push(p)}}function n(m,p){if(!t)return null;for(;p!==null;)e(m,p),p=p.sibling;return null}function r(m,p){for(m=new Map;p!==null;)p.key!==null?m.set(p.key,p):m.set(p.index,p),p=p.sibling;return m}function i(m,p){return m=_n(m,p),m.index=0,m.sibling=null,m}function s(m,p,g){return m.index=g,t?(g=m.alternate,g!==null?(g=g.index,g<p?(m.flags|=2,p):g):(m.flags|=2,p)):(m.flags|=1048576,p)}function o(m){return t&&m.alternate===null&&(m.flags|=2),m}function a(m,p,g,w){return p===null||p.tag!==6?(p=Nl(g,m.mode,w),p.return=m,p):(p=i(p,g),p.return=m,p)}function l(m,p,g,w){var I=g.type;return I===_r?u(m,p,g.props.children,w,g.key):p!==null&&(p.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===Jt&&Lh(I)===p.type)?(w=i(p,g.props),w.ref=Ei(m,p,g),w.return=m,w):(w=vo(g.type,g.key,g.props,null,m.mode,w),w.ref=Ei(m,p,g),w.return=m,w)}function c(m,p,g,w){return p===null||p.tag!==4||p.stateNode.containerInfo!==g.containerInfo||p.stateNode.implementation!==g.implementation?(p=xl(g,m.mode,w),p.return=m,p):(p=i(p,g.children||[]),p.return=m,p)}function u(m,p,g,w,I){return p===null||p.tag!==7?(p=Hn(g,m.mode,w,I),p.return=m,p):(p=i(p,g),p.return=m,p)}function d(m,p,g){if(typeof p=="string"&&p!==""||typeof p=="number")return p=Nl(""+p,m.mode,g),p.return=m,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Bs:return g=vo(p.type,p.key,p.props,null,m.mode,g),g.ref=Ei(m,null,p),g.return=m,g;case gr:return p=xl(p,m.mode,g),p.return=m,p;case Jt:var w=p._init;return d(m,w(p._payload),g)}if(Pi(p)||gi(p))return p=Hn(p,m.mode,g,null),p.return=m,p;Zs(m,p)}return null}function f(m,p,g,w){var I=p!==null?p.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return I!==null?null:a(m,p,""+g,w);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Bs:return g.key===I?l(m,p,g,w):null;case gr:return g.key===I?c(m,p,g,w):null;case Jt:return I=g._init,f(m,p,I(g._payload),w)}if(Pi(g)||gi(g))return I!==null?null:u(m,p,g,w,null);Zs(m,g)}return null}function _(m,p,g,w,I){if(typeof w=="string"&&w!==""||typeof w=="number")return m=m.get(g)||null,a(p,m,""+w,I);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Bs:return m=m.get(w.key===null?g:w.key)||null,l(p,m,w,I);case gr:return m=m.get(w.key===null?g:w.key)||null,c(p,m,w,I);case Jt:var N=w._init;return _(m,p,g,N(w._payload),I)}if(Pi(w)||gi(w))return m=m.get(g)||null,u(p,m,w,I,null);Zs(p,w)}return null}function y(m,p,g,w){for(var I=null,N=null,P=p,k=p=0,b=null;P!==null&&k<g.length;k++){P.index>k?(b=P,P=null):b=P.sibling;var D=f(m,P,g[k],w);if(D===null){P===null&&(P=b);break}t&&P&&D.alternate===null&&e(m,P),p=s(D,p,k),N===null?I=D:N.sibling=D,N=D,P=b}if(k===g.length)return n(m,P),re&&Mn(m,k),I;if(P===null){for(;k<g.length;k++)P=d(m,g[k],w),P!==null&&(p=s(P,p,k),N===null?I=P:N.sibling=P,N=P);return re&&Mn(m,k),I}for(P=r(m,P);k<g.length;k++)b=_(P,m,k,g[k],w),b!==null&&(t&&b.alternate!==null&&P.delete(b.key===null?k:b.key),p=s(b,p,k),N===null?I=b:N.sibling=b,N=b);return t&&P.forEach(function(A){return e(m,A)}),re&&Mn(m,k),I}function v(m,p,g,w){var I=gi(g);if(typeof I!="function")throw Error(E(150));if(g=I.call(g),g==null)throw Error(E(151));for(var N=I=null,P=p,k=p=0,b=null,D=g.next();P!==null&&!D.done;k++,D=g.next()){P.index>k?(b=P,P=null):b=P.sibling;var A=f(m,P,D.value,w);if(A===null){P===null&&(P=b);break}t&&P&&A.alternate===null&&e(m,P),p=s(A,p,k),N===null?I=A:N.sibling=A,N=A,P=b}if(D.done)return n(m,P),re&&Mn(m,k),I;if(P===null){for(;!D.done;k++,D=g.next())D=d(m,D.value,w),D!==null&&(p=s(D,p,k),N===null?I=D:N.sibling=D,N=D);return re&&Mn(m,k),I}for(P=r(m,P);!D.done;k++,D=g.next())D=_(P,m,k,D.value,w),D!==null&&(t&&D.alternate!==null&&P.delete(D.key===null?k:D.key),p=s(D,p,k),N===null?I=D:N.sibling=D,N=D);return t&&P.forEach(function(Z){return e(m,Z)}),re&&Mn(m,k),I}function S(m,p,g,w){if(typeof g=="object"&&g!==null&&g.type===_r&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Bs:e:{for(var I=g.key,N=p;N!==null;){if(N.key===I){if(I=g.type,I===_r){if(N.tag===7){n(m,N.sibling),p=i(N,g.props.children),p.return=m,m=p;break e}}else if(N.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===Jt&&Lh(I)===N.type){n(m,N.sibling),p=i(N,g.props),p.ref=Ei(m,N,g),p.return=m,m=p;break e}n(m,N);break}else e(m,N);N=N.sibling}g.type===_r?(p=Hn(g.props.children,m.mode,w,g.key),p.return=m,m=p):(w=vo(g.type,g.key,g.props,null,m.mode,w),w.ref=Ei(m,p,g),w.return=m,m=w)}return o(m);case gr:e:{for(N=g.key;p!==null;){if(p.key===N)if(p.tag===4&&p.stateNode.containerInfo===g.containerInfo&&p.stateNode.implementation===g.implementation){n(m,p.sibling),p=i(p,g.children||[]),p.return=m,m=p;break e}else{n(m,p);break}else e(m,p);p=p.sibling}p=xl(g,m.mode,w),p.return=m,m=p}return o(m);case Jt:return N=g._init,S(m,p,N(g._payload),w)}if(Pi(g))return y(m,p,g,w);if(gi(g))return v(m,p,g,w);Zs(m,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,p!==null&&p.tag===6?(n(m,p.sibling),p=i(p,g),p.return=m,m=p):(n(m,p),p=Nl(g,m.mode,w),p.return=m,m=p),o(m)):n(m,p)}return S}var Hr=Mm(!0),Fm=Mm(!1),Fo=Pn(null),jo=null,Ir=null,Pu=null;function Au(){Pu=Ir=jo=null}function Ou(t){var e=Fo.current;te(Fo),t._currentValue=e}function wc(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Lr(t,e){jo=t,Pu=Ir=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(We=!0),t.firstContext=null)}function ot(t){var e=t._currentValue;if(Pu!==t)if(t={context:t,memoizedValue:e,next:null},Ir===null){if(jo===null)throw Error(E(308));Ir=t,jo.dependencies={lanes:0,firstContext:t}}else Ir=Ir.next=t;return e}var Wn=null;function Du(t){Wn===null?Wn=[t]:Wn.push(t)}function jm(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Du(e)):(n.next=i.next,i.next=n),e.interleaved=n,Bt(t,r)}function Bt(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Zt=!1;function Lu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Um(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function jt(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function pn(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,V&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Bt(t,n)}return i=r.interleaved,i===null?(e.next=e,Du(r)):(e.next=i.next,i.next=e),r.interleaved=e,Bt(t,n)}function fo(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,vu(t,n)}}function bh(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Uo(t,e,n,r){var i=t.updateQueue;Zt=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var u=t.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==o&&(a===null?u.firstBaseUpdate=c:a.next=c,u.lastBaseUpdate=l))}if(s!==null){var d=i.baseState;o=0,u=c=l=null,a=s;do{var f=a.lane,_=a.eventTime;if((r&f)===f){u!==null&&(u=u.next={eventTime:_,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=t,v=a;switch(f=e,_=n,v.tag){case 1:if(y=v.payload,typeof y=="function"){d=y.call(_,d,f);break e}d=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=v.payload,f=typeof y=="function"?y.call(_,d,f):y,f==null)break e;d=ae({},d,f);break e;case 2:Zt=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,f=i.effects,f===null?i.effects=[a]:f.push(a))}else _={eventTime:_,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(c=u=_,l=d):u=u.next=_,o|=f;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;f=a,a=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(1);if(u===null&&(l=d),i.baseState=l,i.firstBaseUpdate=c,i.lastBaseUpdate=u,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Yn|=o,t.lanes=o,t.memoizedState=d}}function Mh(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(E(191,i));i.call(r)}}}var xs={},Nt=Pn(xs),os=Pn(xs),as=Pn(xs);function Bn(t){if(t===xs)throw Error(E(174));return t}function bu(t,e){switch(J(as,e),J(os,t),J(Nt,xs),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:ec(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=ec(e,t)}te(Nt),J(Nt,e)}function Kr(){te(Nt),te(os),te(as)}function zm(t){Bn(as.current);var e=Bn(Nt.current),n=ec(e,t.type);e!==n&&(J(os,t),J(Nt,n))}function Mu(t){os.current===t&&(te(Nt),te(os))}var ie=Pn(0);function zo(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var El=[];function Fu(){for(var t=0;t<El.length;t++)El[t]._workInProgressVersionPrimary=null;El.length=0}var po=Gt.ReactCurrentDispatcher,Sl=Gt.ReactCurrentBatchConfig,qn=0,oe=null,fe=null,ye=null,Wo=!1,zi=!1,ls=0,qw=0;function Re(){throw Error(E(321))}function ju(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!vt(t[n],e[n]))return!1;return!0}function Uu(t,e,n,r,i,s){if(qn=s,oe=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,po.current=t===null||t.memoizedState===null?Zw:e0,t=n(r,i),zi){s=0;do{if(zi=!1,ls=0,25<=s)throw Error(E(301));s+=1,ye=fe=null,e.updateQueue=null,po.current=t0,t=n(r,i)}while(zi)}if(po.current=Bo,e=fe!==null&&fe.next!==null,qn=0,ye=fe=oe=null,Wo=!1,e)throw Error(E(300));return t}function zu(){var t=ls!==0;return ls=0,t}function kt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ye===null?oe.memoizedState=ye=t:ye=ye.next=t,ye}function at(){if(fe===null){var t=oe.alternate;t=t!==null?t.memoizedState:null}else t=fe.next;var e=ye===null?oe.memoizedState:ye.next;if(e!==null)ye=e,fe=t;else{if(t===null)throw Error(E(310));fe=t,t={memoizedState:fe.memoizedState,baseState:fe.baseState,baseQueue:fe.baseQueue,queue:fe.queue,next:null},ye===null?oe.memoizedState=ye=t:ye=ye.next=t}return ye}function cs(t,e){return typeof e=="function"?e(t):e}function Cl(t){var e=at(),n=e.queue;if(n===null)throw Error(E(311));n.lastRenderedReducer=t;var r=fe,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,c=s;do{var u=c.lane;if((qn&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var d={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=d,o=r):l=l.next=d,oe.lanes|=u,Yn|=u}c=c.next}while(c!==null&&c!==s);l===null?o=r:l.next=a,vt(r,e.memoizedState)||(We=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,oe.lanes|=s,Yn|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function kl(t){var e=at(),n=e.queue;if(n===null)throw Error(E(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);vt(s,e.memoizedState)||(We=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function Wm(){}function Bm(t,e){var n=oe,r=at(),i=e(),s=!vt(r.memoizedState,i);if(s&&(r.memoizedState=i,We=!0),r=r.queue,Wu(Hm.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||ye!==null&&ye.memoizedState.tag&1){if(n.flags|=2048,us(9,Vm.bind(null,n,r,i,e),void 0,null),we===null)throw Error(E(349));qn&30||$m(n,e,i)}return i}function $m(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=oe.updateQueue,e===null?(e={lastEffect:null,stores:null},oe.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Vm(t,e,n,r){e.value=n,e.getSnapshot=r,Km(e)&&Gm(t)}function Hm(t,e,n){return n(function(){Km(e)&&Gm(t)})}function Km(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!vt(t,n)}catch{return!0}}function Gm(t){var e=Bt(t,1);e!==null&&_t(e,t,1,-1)}function Fh(t){var e=kt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:cs,lastRenderedState:t},e.queue=t,t=t.dispatch=Jw.bind(null,oe,t),[e.memoizedState,t]}function us(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=oe.updateQueue,e===null?(e={lastEffect:null,stores:null},oe.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Qm(){return at().memoizedState}function mo(t,e,n,r){var i=kt();oe.flags|=t,i.memoizedState=us(1|e,n,void 0,r===void 0?null:r)}function Ia(t,e,n,r){var i=at();r=r===void 0?null:r;var s=void 0;if(fe!==null){var o=fe.memoizedState;if(s=o.destroy,r!==null&&ju(r,o.deps)){i.memoizedState=us(e,n,s,r);return}}oe.flags|=t,i.memoizedState=us(1|e,n,s,r)}function jh(t,e){return mo(8390656,8,t,e)}function Wu(t,e){return Ia(2048,8,t,e)}function qm(t,e){return Ia(4,2,t,e)}function Ym(t,e){return Ia(4,4,t,e)}function Xm(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Jm(t,e,n){return n=n!=null?n.concat([t]):null,Ia(4,4,Xm.bind(null,e,t),n)}function Bu(){}function Zm(t,e){var n=at();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&ju(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function eg(t,e){var n=at();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&ju(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function tg(t,e,n){return qn&21?(vt(n,e)||(n=om(),oe.lanes|=n,Yn|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,We=!0),t.memoizedState=n)}function Yw(t,e){var n=K;K=n!==0&&4>n?n:4,t(!0);var r=Sl.transition;Sl.transition={};try{t(!1),e()}finally{K=n,Sl.transition=r}}function ng(){return at().memoizedState}function Xw(t,e,n){var r=gn(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},rg(t))ig(e,n);else if(n=jm(t,e,n,r),n!==null){var i=be();_t(n,t,r,i),sg(n,e,r)}}function Jw(t,e,n){var r=gn(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(rg(t))ig(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,vt(a,o)){var l=e.interleaved;l===null?(i.next=i,Du(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=jm(t,e,i,r),n!==null&&(i=be(),_t(n,t,r,i),sg(n,e,r))}}function rg(t){var e=t.alternate;return t===oe||e!==null&&e===oe}function ig(t,e){zi=Wo=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function sg(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,vu(t,n)}}var Bo={readContext:ot,useCallback:Re,useContext:Re,useEffect:Re,useImperativeHandle:Re,useInsertionEffect:Re,useLayoutEffect:Re,useMemo:Re,useReducer:Re,useRef:Re,useState:Re,useDebugValue:Re,useDeferredValue:Re,useTransition:Re,useMutableSource:Re,useSyncExternalStore:Re,useId:Re,unstable_isNewReconciler:!1},Zw={readContext:ot,useCallback:function(t,e){return kt().memoizedState=[t,e===void 0?null:e],t},useContext:ot,useEffect:jh,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,mo(4194308,4,Xm.bind(null,e,t),n)},useLayoutEffect:function(t,e){return mo(4194308,4,t,e)},useInsertionEffect:function(t,e){return mo(4,2,t,e)},useMemo:function(t,e){var n=kt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=kt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=Xw.bind(null,oe,t),[r.memoizedState,t]},useRef:function(t){var e=kt();return t={current:t},e.memoizedState=t},useState:Fh,useDebugValue:Bu,useDeferredValue:function(t){return kt().memoizedState=t},useTransition:function(){var t=Fh(!1),e=t[0];return t=Yw.bind(null,t[1]),kt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=oe,i=kt();if(re){if(n===void 0)throw Error(E(407));n=n()}else{if(n=e(),we===null)throw Error(E(349));qn&30||$m(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,jh(Hm.bind(null,r,s,t),[t]),r.flags|=2048,us(9,Vm.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=kt(),e=we.identifierPrefix;if(re){var n=Lt,r=Dt;n=(r&~(1<<32-gt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=ls++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=qw++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},e0={readContext:ot,useCallback:Zm,useContext:ot,useEffect:Wu,useImperativeHandle:Jm,useInsertionEffect:qm,useLayoutEffect:Ym,useMemo:eg,useReducer:Cl,useRef:Qm,useState:function(){return Cl(cs)},useDebugValue:Bu,useDeferredValue:function(t){var e=at();return tg(e,fe.memoizedState,t)},useTransition:function(){var t=Cl(cs)[0],e=at().memoizedState;return[t,e]},useMutableSource:Wm,useSyncExternalStore:Bm,useId:ng,unstable_isNewReconciler:!1},t0={readContext:ot,useCallback:Zm,useContext:ot,useEffect:Wu,useImperativeHandle:Jm,useInsertionEffect:qm,useLayoutEffect:Ym,useMemo:eg,useReducer:kl,useRef:Qm,useState:function(){return kl(cs)},useDebugValue:Bu,useDeferredValue:function(t){var e=at();return fe===null?e.memoizedState=t:tg(e,fe.memoizedState,t)},useTransition:function(){var t=kl(cs)[0],e=at().memoizedState;return[t,e]},useMutableSource:Wm,useSyncExternalStore:Bm,useId:ng,unstable_isNewReconciler:!1};function ct(t,e){if(t&&t.defaultProps){e=ae({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Ec(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:ae({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Ta={isMounted:function(t){return(t=t._reactInternals)?ar(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=be(),i=gn(t),s=jt(r,i);s.payload=e,n!=null&&(s.callback=n),e=pn(t,s,i),e!==null&&(_t(e,t,i,r),fo(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=be(),i=gn(t),s=jt(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=pn(t,s,i),e!==null&&(_t(e,t,i,r),fo(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=be(),r=gn(t),i=jt(n,r);i.tag=2,e!=null&&(i.callback=e),e=pn(t,i,r),e!==null&&(_t(e,t,r,n),fo(e,t,r))}};function Uh(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!ns(n,r)||!ns(i,s):!0}function og(t,e,n){var r=!1,i=In,s=e.contextType;return typeof s=="object"&&s!==null?s=ot(s):(i=Ve(e)?Gn:Oe.current,r=e.contextTypes,s=(r=r!=null)?$r(t,i):In),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Ta,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function zh(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Ta.enqueueReplaceState(e,e.state,null)}function Sc(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Lu(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=ot(s):(s=Ve(e)?Gn:Oe.current,i.context=$r(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Ec(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Ta.enqueueReplaceState(i,i.state,null),Uo(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Gr(t,e){try{var n="",r=e;do n+=Rv(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Il(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Cc(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var n0=typeof WeakMap=="function"?WeakMap:Map;function ag(t,e,n){n=jt(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Vo||(Vo=!0,Dc=r),Cc(t,e)},n}function lg(t,e,n){n=jt(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Cc(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Cc(t,e),typeof r!="function"&&(mn===null?mn=new Set([this]):mn.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Wh(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new n0;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=g0.bind(null,t,e,n),e.then(t,t))}function Bh(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function $h(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=jt(-1,1),e.tag=2,pn(n,e,1))),n.lanes|=1),t)}var r0=Gt.ReactCurrentOwner,We=!1;function De(t,e,n,r){e.child=t===null?Fm(e,null,n,r):Hr(e,t.child,n,r)}function Vh(t,e,n,r,i){n=n.render;var s=e.ref;return Lr(e,i),r=Uu(t,e,n,r,s,i),n=zu(),t!==null&&!We?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,$t(t,e,i)):(re&&n&&Nu(e),e.flags|=1,De(t,e,r,i),e.child)}function Hh(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Yu(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,cg(t,e,s,r,i)):(t=vo(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:ns,n(o,r)&&t.ref===e.ref)return $t(t,e,i)}return e.flags|=1,t=_n(s,r),t.ref=e.ref,t.return=e,e.child=t}function cg(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(ns(s,r)&&t.ref===e.ref)if(We=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(We=!0);else return e.lanes=t.lanes,$t(t,e,i)}return kc(t,e,n,r,i)}function ug(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},J(Nr,Ke),Ke|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,J(Nr,Ke),Ke|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,J(Nr,Ke),Ke|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,J(Nr,Ke),Ke|=r;return De(t,e,i,n),e.child}function dg(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function kc(t,e,n,r,i){var s=Ve(n)?Gn:Oe.current;return s=$r(e,s),Lr(e,i),n=Uu(t,e,n,r,s,i),r=zu(),t!==null&&!We?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,$t(t,e,i)):(re&&r&&Nu(e),e.flags|=1,De(t,e,n,i),e.child)}function Kh(t,e,n,r,i){if(Ve(n)){var s=!0;Lo(e)}else s=!1;if(Lr(e,i),e.stateNode===null)go(t,e),og(e,n,r),Sc(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=ot(c):(c=Ve(n)?Gn:Oe.current,c=$r(e,c));var u=n.getDerivedStateFromProps,d=typeof u=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==c)&&zh(e,o,r,c),Zt=!1;var f=e.memoizedState;o.state=f,Uo(e,r,o,i),l=e.memoizedState,a!==r||f!==l||$e.current||Zt?(typeof u=="function"&&(Ec(e,n,u,r),l=e.memoizedState),(a=Zt||Uh(e,n,a,r,f,l,c))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=c,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Um(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:ct(e.type,a),o.props=c,d=e.pendingProps,f=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=ot(l):(l=Ve(n)?Gn:Oe.current,l=$r(e,l));var _=n.getDerivedStateFromProps;(u=typeof _=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||f!==l)&&zh(e,o,r,l),Zt=!1,f=e.memoizedState,o.state=f,Uo(e,r,o,i);var y=e.memoizedState;a!==d||f!==y||$e.current||Zt?(typeof _=="function"&&(Ec(e,n,_,r),y=e.memoizedState),(c=Zt||Uh(e,n,c,r,f,y,l)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,y,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,y,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=y),o.props=r,o.state=y,o.context=l,r=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),r=!1)}return Ic(t,e,n,r,s,i)}function Ic(t,e,n,r,i,s){dg(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Ah(e,n,!1),$t(t,e,s);r=e.stateNode,r0.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Hr(e,t.child,null,s),e.child=Hr(e,null,a,s)):De(t,e,a,s),e.memoizedState=r.state,i&&Ah(e,n,!0),e.child}function hg(t){var e=t.stateNode;e.pendingContext?Ph(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Ph(t,e.context,!1),bu(t,e.containerInfo)}function Gh(t,e,n,r,i){return Vr(),Ru(i),e.flags|=256,De(t,e,n,r),e.child}var Tc={dehydrated:null,treeContext:null,retryLane:0};function Nc(t){return{baseLanes:t,cachePool:null,transitions:null}}function fg(t,e,n){var r=e.pendingProps,i=ie.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),J(ie,i&1),t===null)return vc(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Ra(o,r,0,null),t=Hn(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Nc(n),e.memoizedState=Tc,t):$u(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return i0(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=_n(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=_n(a,s):(s=Hn(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Nc(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Tc,r}return s=t.child,t=s.sibling,r=_n(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function $u(t,e){return e=Ra({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function eo(t,e,n,r){return r!==null&&Ru(r),Hr(e,t.child,null,n),t=$u(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function i0(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Il(Error(E(422))),eo(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Ra({mode:"visible",children:r.children},i,0,null),s=Hn(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Hr(e,t.child,null,o),e.child.memoizedState=Nc(o),e.memoizedState=Tc,s);if(!(e.mode&1))return eo(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(E(419)),r=Il(s,r,void 0),eo(t,e,o,r)}if(a=(o&t.childLanes)!==0,We||a){if(r=we,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Bt(t,i),_t(r,t,i,-1))}return qu(),r=Il(Error(E(421))),eo(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=_0.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Ge=fn(i.nextSibling),Qe=e,re=!0,dt=null,t!==null&&(Ze[et++]=Dt,Ze[et++]=Lt,Ze[et++]=Qn,Dt=t.id,Lt=t.overflow,Qn=e),e=$u(e,r.children),e.flags|=4096,e)}function Qh(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),wc(t.return,e,n)}function Tl(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function pg(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(De(t,e,r.children,n),r=ie.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Qh(t,n,e);else if(t.tag===19)Qh(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(J(ie,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&zo(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Tl(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&zo(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Tl(e,!0,n,null,s);break;case"together":Tl(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function go(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function $t(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Yn|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(E(153));if(e.child!==null){for(t=e.child,n=_n(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=_n(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function s0(t,e,n){switch(e.tag){case 3:hg(e),Vr();break;case 5:zm(e);break;case 1:Ve(e.type)&&Lo(e);break;case 4:bu(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;J(Fo,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(J(ie,ie.current&1),e.flags|=128,null):n&e.child.childLanes?fg(t,e,n):(J(ie,ie.current&1),t=$t(t,e,n),t!==null?t.sibling:null);J(ie,ie.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return pg(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),J(ie,ie.current),r)break;return null;case 22:case 23:return e.lanes=0,ug(t,e,n)}return $t(t,e,n)}var mg,xc,gg,_g;mg=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};xc=function(){};gg=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Bn(Nt.current);var s=null;switch(n){case"input":i=Yl(t,i),r=Yl(t,r),s=[];break;case"select":i=ae({},i,{value:void 0}),r=ae({},r,{value:void 0}),s=[];break;case"textarea":i=Zl(t,i),r=Zl(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Oo)}tc(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(qi.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var l=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(qi.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&ee("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};_g=function(t,e,n,r){n!==r&&(e.flags|=4)};function Si(t,e){if(!re)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Pe(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function o0(t,e,n){var r=e.pendingProps;switch(xu(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Pe(e),null;case 1:return Ve(e.type)&&Do(),Pe(e),null;case 3:return r=e.stateNode,Kr(),te($e),te(Oe),Fu(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Js(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,dt!==null&&(Mc(dt),dt=null))),xc(t,e),Pe(e),null;case 5:Mu(e);var i=Bn(as.current);if(n=e.type,t!==null&&e.stateNode!=null)gg(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(E(166));return Pe(e),null}if(t=Bn(Nt.current),Js(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[It]=e,r[ss]=s,t=(e.mode&1)!==0,n){case"dialog":ee("cancel",r),ee("close",r);break;case"iframe":case"object":case"embed":ee("load",r);break;case"video":case"audio":for(i=0;i<Oi.length;i++)ee(Oi[i],r);break;case"source":ee("error",r);break;case"img":case"image":case"link":ee("error",r),ee("load",r);break;case"details":ee("toggle",r);break;case"input":rh(r,s),ee("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},ee("invalid",r);break;case"textarea":sh(r,s),ee("invalid",r)}tc(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Xs(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Xs(r.textContent,a,t),i=["children",""+a]):qi.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ee("scroll",r)}switch(n){case"input":$s(r),ih(r,s,!0);break;case"textarea":$s(r),oh(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Oo)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Hp(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[It]=e,t[ss]=r,mg(t,e,!1,!1),e.stateNode=t;e:{switch(o=nc(n,r),n){case"dialog":ee("cancel",t),ee("close",t),i=r;break;case"iframe":case"object":case"embed":ee("load",t),i=r;break;case"video":case"audio":for(i=0;i<Oi.length;i++)ee(Oi[i],t);i=r;break;case"source":ee("error",t),i=r;break;case"img":case"image":case"link":ee("error",t),ee("load",t),i=r;break;case"details":ee("toggle",t),i=r;break;case"input":rh(t,r),i=Yl(t,r),ee("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=ae({},r,{value:void 0}),ee("invalid",t);break;case"textarea":sh(t,r),i=Zl(t,r),ee("invalid",t);break;default:i=r}tc(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Qp(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Kp(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Yi(t,l):typeof l=="number"&&Yi(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(qi.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ee("scroll",t):l!=null&&fu(t,s,l,o))}switch(n){case"input":$s(t),ih(t,r,!1);break;case"textarea":$s(t),oh(t);break;case"option":r.value!=null&&t.setAttribute("value",""+kn(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Pr(t,!!r.multiple,s,!1):r.defaultValue!=null&&Pr(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Oo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Pe(e),null;case 6:if(t&&e.stateNode!=null)_g(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(E(166));if(n=Bn(as.current),Bn(Nt.current),Js(e)){if(r=e.stateNode,n=e.memoizedProps,r[It]=e,(s=r.nodeValue!==n)&&(t=Qe,t!==null))switch(t.tag){case 3:Xs(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Xs(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[It]=e,e.stateNode=r}return Pe(e),null;case 13:if(te(ie),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(re&&Ge!==null&&e.mode&1&&!(e.flags&128))bm(),Vr(),e.flags|=98560,s=!1;else if(s=Js(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(E(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(E(317));s[It]=e}else Vr(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Pe(e),s=!1}else dt!==null&&(Mc(dt),dt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||ie.current&1?me===0&&(me=3):qu())),e.updateQueue!==null&&(e.flags|=4),Pe(e),null);case 4:return Kr(),xc(t,e),t===null&&rs(e.stateNode.containerInfo),Pe(e),null;case 10:return Ou(e.type._context),Pe(e),null;case 17:return Ve(e.type)&&Do(),Pe(e),null;case 19:if(te(ie),s=e.memoizedState,s===null)return Pe(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Si(s,!1);else{if(me!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=zo(t),o!==null){for(e.flags|=128,Si(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return J(ie,ie.current&1|2),e.child}t=t.sibling}s.tail!==null&&ue()>Qr&&(e.flags|=128,r=!0,Si(s,!1),e.lanes=4194304)}else{if(!r)if(t=zo(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Si(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!re)return Pe(e),null}else 2*ue()-s.renderingStartTime>Qr&&n!==1073741824&&(e.flags|=128,r=!0,Si(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=ue(),e.sibling=null,n=ie.current,J(ie,r?n&1|2:n&1),e):(Pe(e),null);case 22:case 23:return Qu(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Ke&1073741824&&(Pe(e),e.subtreeFlags&6&&(e.flags|=8192)):Pe(e),null;case 24:return null;case 25:return null}throw Error(E(156,e.tag))}function a0(t,e){switch(xu(e),e.tag){case 1:return Ve(e.type)&&Do(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Kr(),te($e),te(Oe),Fu(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Mu(e),null;case 13:if(te(ie),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(E(340));Vr()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return te(ie),null;case 4:return Kr(),null;case 10:return Ou(e.type._context),null;case 22:case 23:return Qu(),null;case 24:return null;default:return null}}var to=!1,Ae=!1,l0=typeof WeakSet=="function"?WeakSet:Set,R=null;function Tr(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){le(t,e,r)}else n.current=null}function Rc(t,e,n){try{n()}catch(r){le(t,e,r)}}var qh=!1;function c0(t,e){if(hc=Ro,t=Sm(),Tu(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,u=0,d=t,f=null;t:for(;;){for(var _;d!==n||i!==0&&d.nodeType!==3||(a=o+i),d!==s||r!==0&&d.nodeType!==3||(l=o+r),d.nodeType===3&&(o+=d.nodeValue.length),(_=d.firstChild)!==null;)f=d,d=_;for(;;){if(d===t)break t;if(f===n&&++c===i&&(a=o),f===s&&++u===r&&(l=o),(_=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=_}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(fc={focusedElem:t,selectionRange:n},Ro=!1,R=e;R!==null;)if(e=R,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,R=t;else for(;R!==null;){e=R;try{var y=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var v=y.memoizedProps,S=y.memoizedState,m=e.stateNode,p=m.getSnapshotBeforeUpdate(e.elementType===e.type?v:ct(e.type,v),S);m.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(E(163))}}catch(w){le(e,e.return,w)}if(t=e.sibling,t!==null){t.return=e.return,R=t;break}R=e.return}return y=qh,qh=!1,y}function Wi(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Rc(e,n,s)}i=i.next}while(i!==r)}}function Na(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Pc(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function yg(t){var e=t.alternate;e!==null&&(t.alternate=null,yg(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[It],delete e[ss],delete e[gc],delete e[Hw],delete e[Kw])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function vg(t){return t.tag===5||t.tag===3||t.tag===4}function Yh(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||vg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Ac(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Oo));else if(r!==4&&(t=t.child,t!==null))for(Ac(t,e,n),t=t.sibling;t!==null;)Ac(t,e,n),t=t.sibling}function Oc(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Oc(t,e,n),t=t.sibling;t!==null;)Oc(t,e,n),t=t.sibling}var Ce=null,ut=!1;function Yt(t,e,n){for(n=n.child;n!==null;)wg(t,e,n),n=n.sibling}function wg(t,e,n){if(Tt&&typeof Tt.onCommitFiberUnmount=="function")try{Tt.onCommitFiberUnmount(va,n)}catch{}switch(n.tag){case 5:Ae||Tr(n,e);case 6:var r=Ce,i=ut;Ce=null,Yt(t,e,n),Ce=r,ut=i,Ce!==null&&(ut?(t=Ce,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ce.removeChild(n.stateNode));break;case 18:Ce!==null&&(ut?(t=Ce,n=n.stateNode,t.nodeType===8?vl(t.parentNode,n):t.nodeType===1&&vl(t,n),es(t)):vl(Ce,n.stateNode));break;case 4:r=Ce,i=ut,Ce=n.stateNode.containerInfo,ut=!0,Yt(t,e,n),Ce=r,ut=i;break;case 0:case 11:case 14:case 15:if(!Ae&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Rc(n,e,o),i=i.next}while(i!==r)}Yt(t,e,n);break;case 1:if(!Ae&&(Tr(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){le(n,e,a)}Yt(t,e,n);break;case 21:Yt(t,e,n);break;case 22:n.mode&1?(Ae=(r=Ae)||n.memoizedState!==null,Yt(t,e,n),Ae=r):Yt(t,e,n);break;default:Yt(t,e,n)}}function Xh(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new l0),e.forEach(function(r){var i=y0.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function lt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Ce=a.stateNode,ut=!1;break e;case 3:Ce=a.stateNode.containerInfo,ut=!0;break e;case 4:Ce=a.stateNode.containerInfo,ut=!0;break e}a=a.return}if(Ce===null)throw Error(E(160));wg(s,o,i),Ce=null,ut=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(c){le(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Eg(e,t),e=e.sibling}function Eg(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(lt(e,t),Ct(t),r&4){try{Wi(3,t,t.return),Na(3,t)}catch(v){le(t,t.return,v)}try{Wi(5,t,t.return)}catch(v){le(t,t.return,v)}}break;case 1:lt(e,t),Ct(t),r&512&&n!==null&&Tr(n,n.return);break;case 5:if(lt(e,t),Ct(t),r&512&&n!==null&&Tr(n,n.return),t.flags&32){var i=t.stateNode;try{Yi(i,"")}catch(v){le(t,t.return,v)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&$p(i,s),nc(a,o);var c=nc(a,s);for(o=0;o<l.length;o+=2){var u=l[o],d=l[o+1];u==="style"?Qp(i,d):u==="dangerouslySetInnerHTML"?Kp(i,d):u==="children"?Yi(i,d):fu(i,u,d,c)}switch(a){case"input":Xl(i,s);break;case"textarea":Vp(i,s);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var _=s.value;_!=null?Pr(i,!!s.multiple,_,!1):f!==!!s.multiple&&(s.defaultValue!=null?Pr(i,!!s.multiple,s.defaultValue,!0):Pr(i,!!s.multiple,s.multiple?[]:"",!1))}i[ss]=s}catch(v){le(t,t.return,v)}}break;case 6:if(lt(e,t),Ct(t),r&4){if(t.stateNode===null)throw Error(E(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(v){le(t,t.return,v)}}break;case 3:if(lt(e,t),Ct(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{es(e.containerInfo)}catch(v){le(t,t.return,v)}break;case 4:lt(e,t),Ct(t);break;case 13:lt(e,t),Ct(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Ku=ue())),r&4&&Xh(t);break;case 22:if(u=n!==null&&n.memoizedState!==null,t.mode&1?(Ae=(c=Ae)||u,lt(e,t),Ae=c):lt(e,t),Ct(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!u&&t.mode&1)for(R=t,u=t.child;u!==null;){for(d=R=u;R!==null;){switch(f=R,_=f.child,f.tag){case 0:case 11:case 14:case 15:Wi(4,f,f.return);break;case 1:Tr(f,f.return);var y=f.stateNode;if(typeof y.componentWillUnmount=="function"){r=f,n=f.return;try{e=r,y.props=e.memoizedProps,y.state=e.memoizedState,y.componentWillUnmount()}catch(v){le(r,n,v)}}break;case 5:Tr(f,f.return);break;case 22:if(f.memoizedState!==null){Zh(d);continue}}_!==null?(_.return=f,R=_):Zh(d)}u=u.sibling}e:for(u=null,d=t;;){if(d.tag===5){if(u===null){u=d;try{i=d.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Gp("display",o))}catch(v){le(t,t.return,v)}}}else if(d.tag===6){if(u===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(v){le(t,t.return,v)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;u===d&&(u=null),d=d.return}u===d&&(u=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:lt(e,t),Ct(t),r&4&&Xh(t);break;case 21:break;default:lt(e,t),Ct(t)}}function Ct(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(vg(n)){var r=n;break e}n=n.return}throw Error(E(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Yi(i,""),r.flags&=-33);var s=Yh(t);Oc(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Yh(t);Ac(t,a,o);break;default:throw Error(E(161))}}catch(l){le(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function u0(t,e,n){R=t,Sg(t)}function Sg(t,e,n){for(var r=(t.mode&1)!==0;R!==null;){var i=R,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||to;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||Ae;a=to;var c=Ae;if(to=o,(Ae=l)&&!c)for(R=i;R!==null;)o=R,l=o.child,o.tag===22&&o.memoizedState!==null?ef(i):l!==null?(l.return=o,R=l):ef(i);for(;s!==null;)R=s,Sg(s),s=s.sibling;R=i,to=a,Ae=c}Jh(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,R=s):Jh(t)}}function Jh(t){for(;R!==null;){var e=R;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Ae||Na(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Ae)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:ct(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Mh(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Mh(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var d=u.dehydrated;d!==null&&es(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(E(163))}Ae||e.flags&512&&Pc(e)}catch(f){le(e,e.return,f)}}if(e===t){R=null;break}if(n=e.sibling,n!==null){n.return=e.return,R=n;break}R=e.return}}function Zh(t){for(;R!==null;){var e=R;if(e===t){R=null;break}var n=e.sibling;if(n!==null){n.return=e.return,R=n;break}R=e.return}}function ef(t){for(;R!==null;){var e=R;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Na(4,e)}catch(l){le(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){le(e,i,l)}}var s=e.return;try{Pc(e)}catch(l){le(e,s,l)}break;case 5:var o=e.return;try{Pc(e)}catch(l){le(e,o,l)}}}catch(l){le(e,e.return,l)}if(e===t){R=null;break}var a=e.sibling;if(a!==null){a.return=e.return,R=a;break}R=e.return}}var d0=Math.ceil,$o=Gt.ReactCurrentDispatcher,Vu=Gt.ReactCurrentOwner,rt=Gt.ReactCurrentBatchConfig,V=0,we=null,he=null,Ie=0,Ke=0,Nr=Pn(0),me=0,ds=null,Yn=0,xa=0,Hu=0,Bi=null,ze=null,Ku=0,Qr=1/0,At=null,Vo=!1,Dc=null,mn=null,no=!1,ln=null,Ho=0,$i=0,Lc=null,_o=-1,yo=0;function be(){return V&6?ue():_o!==-1?_o:_o=ue()}function gn(t){return t.mode&1?V&2&&Ie!==0?Ie&-Ie:Qw.transition!==null?(yo===0&&(yo=om()),yo):(t=K,t!==0||(t=window.event,t=t===void 0?16:fm(t.type)),t):1}function _t(t,e,n,r){if(50<$i)throw $i=0,Lc=null,Error(E(185));Is(t,n,r),(!(V&2)||t!==we)&&(t===we&&(!(V&2)&&(xa|=n),me===4&&tn(t,Ie)),He(t,r),n===1&&V===0&&!(e.mode&1)&&(Qr=ue()+500,ka&&An()))}function He(t,e){var n=t.callbackNode;Qv(t,e);var r=xo(t,t===we?Ie:0);if(r===0)n!==null&&ch(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&ch(n),e===1)t.tag===0?Gw(tf.bind(null,t)):Om(tf.bind(null,t)),$w(function(){!(V&6)&&An()}),n=null;else{switch(am(r)){case 1:n=yu;break;case 4:n=im;break;case 16:n=No;break;case 536870912:n=sm;break;default:n=No}n=Pg(n,Cg.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Cg(t,e){if(_o=-1,yo=0,V&6)throw Error(E(327));var n=t.callbackNode;if(br()&&t.callbackNode!==n)return null;var r=xo(t,t===we?Ie:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Ko(t,r);else{e=r;var i=V;V|=2;var s=Ig();(we!==t||Ie!==e)&&(At=null,Qr=ue()+500,Vn(t,e));do try{p0();break}catch(a){kg(t,a)}while(1);Au(),$o.current=s,V=i,he!==null?e=0:(we=null,Ie=0,e=me)}if(e!==0){if(e===2&&(i=ac(t),i!==0&&(r=i,e=bc(t,i))),e===1)throw n=ds,Vn(t,0),tn(t,r),He(t,ue()),n;if(e===6)tn(t,r);else{if(i=t.current.alternate,!(r&30)&&!h0(i)&&(e=Ko(t,r),e===2&&(s=ac(t),s!==0&&(r=s,e=bc(t,s))),e===1))throw n=ds,Vn(t,0),tn(t,r),He(t,ue()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(E(345));case 2:Fn(t,ze,At);break;case 3:if(tn(t,r),(r&130023424)===r&&(e=Ku+500-ue(),10<e)){if(xo(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){be(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=mc(Fn.bind(null,t,ze,At),e);break}Fn(t,ze,At);break;case 4:if(tn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-gt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=ue()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*d0(r/1960))-r,10<r){t.timeoutHandle=mc(Fn.bind(null,t,ze,At),r);break}Fn(t,ze,At);break;case 5:Fn(t,ze,At);break;default:throw Error(E(329))}}}return He(t,ue()),t.callbackNode===n?Cg.bind(null,t):null}function bc(t,e){var n=Bi;return t.current.memoizedState.isDehydrated&&(Vn(t,e).flags|=256),t=Ko(t,e),t!==2&&(e=ze,ze=n,e!==null&&Mc(e)),t}function Mc(t){ze===null?ze=t:ze.push.apply(ze,t)}function h0(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!vt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function tn(t,e){for(e&=~Hu,e&=~xa,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-gt(e),r=1<<n;t[n]=-1,e&=~r}}function tf(t){if(V&6)throw Error(E(327));br();var e=xo(t,0);if(!(e&1))return He(t,ue()),null;var n=Ko(t,e);if(t.tag!==0&&n===2){var r=ac(t);r!==0&&(e=r,n=bc(t,r))}if(n===1)throw n=ds,Vn(t,0),tn(t,e),He(t,ue()),n;if(n===6)throw Error(E(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Fn(t,ze,At),He(t,ue()),null}function Gu(t,e){var n=V;V|=1;try{return t(e)}finally{V=n,V===0&&(Qr=ue()+500,ka&&An())}}function Xn(t){ln!==null&&ln.tag===0&&!(V&6)&&br();var e=V;V|=1;var n=rt.transition,r=K;try{if(rt.transition=null,K=1,t)return t()}finally{K=r,rt.transition=n,V=e,!(V&6)&&An()}}function Qu(){Ke=Nr.current,te(Nr)}function Vn(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Bw(n)),he!==null)for(n=he.return;n!==null;){var r=n;switch(xu(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Do();break;case 3:Kr(),te($e),te(Oe),Fu();break;case 5:Mu(r);break;case 4:Kr();break;case 13:te(ie);break;case 19:te(ie);break;case 10:Ou(r.type._context);break;case 22:case 23:Qu()}n=n.return}if(we=t,he=t=_n(t.current,null),Ie=Ke=e,me=0,ds=null,Hu=xa=Yn=0,ze=Bi=null,Wn!==null){for(e=0;e<Wn.length;e++)if(n=Wn[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Wn=null}return t}function kg(t,e){do{var n=he;try{if(Au(),po.current=Bo,Wo){for(var r=oe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Wo=!1}if(qn=0,ye=fe=oe=null,zi=!1,ls=0,Vu.current=null,n===null||n.return===null){me=1,ds=e,he=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Ie,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=a,d=u.tag;if(!(u.mode&1)&&(d===0||d===11||d===15)){var f=u.alternate;f?(u.updateQueue=f.updateQueue,u.memoizedState=f.memoizedState,u.lanes=f.lanes):(u.updateQueue=null,u.memoizedState=null)}var _=Bh(o);if(_!==null){_.flags&=-257,$h(_,o,a,s,e),_.mode&1&&Wh(s,c,e),e=_,l=c;var y=e.updateQueue;if(y===null){var v=new Set;v.add(l),e.updateQueue=v}else y.add(l);break e}else{if(!(e&1)){Wh(s,c,e),qu();break e}l=Error(E(426))}}else if(re&&a.mode&1){var S=Bh(o);if(S!==null){!(S.flags&65536)&&(S.flags|=256),$h(S,o,a,s,e),Ru(Gr(l,a));break e}}s=l=Gr(l,a),me!==4&&(me=2),Bi===null?Bi=[s]:Bi.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var m=ag(s,l,e);bh(s,m);break e;case 1:a=l;var p=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof p.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(mn===null||!mn.has(g)))){s.flags|=65536,e&=-e,s.lanes|=e;var w=lg(s,a,e);bh(s,w);break e}}s=s.return}while(s!==null)}Ng(n)}catch(I){e=I,he===n&&n!==null&&(he=n=n.return);continue}break}while(1)}function Ig(){var t=$o.current;return $o.current=Bo,t===null?Bo:t}function qu(){(me===0||me===3||me===2)&&(me=4),we===null||!(Yn&268435455)&&!(xa&268435455)||tn(we,Ie)}function Ko(t,e){var n=V;V|=2;var r=Ig();(we!==t||Ie!==e)&&(At=null,Vn(t,e));do try{f0();break}catch(i){kg(t,i)}while(1);if(Au(),V=n,$o.current=r,he!==null)throw Error(E(261));return we=null,Ie=0,me}function f0(){for(;he!==null;)Tg(he)}function p0(){for(;he!==null&&!Uv();)Tg(he)}function Tg(t){var e=Rg(t.alternate,t,Ke);t.memoizedProps=t.pendingProps,e===null?Ng(t):he=e,Vu.current=null}function Ng(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=a0(n,e),n!==null){n.flags&=32767,he=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{me=6,he=null;return}}else if(n=o0(n,e,Ke),n!==null){he=n;return}if(e=e.sibling,e!==null){he=e;return}he=e=t}while(e!==null);me===0&&(me=5)}function Fn(t,e,n){var r=K,i=rt.transition;try{rt.transition=null,K=1,m0(t,e,n,r)}finally{rt.transition=i,K=r}return null}function m0(t,e,n,r){do br();while(ln!==null);if(V&6)throw Error(E(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(E(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(qv(t,s),t===we&&(he=we=null,Ie=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||no||(no=!0,Pg(No,function(){return br(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=rt.transition,rt.transition=null;var o=K;K=1;var a=V;V|=4,Vu.current=null,c0(t,n),Eg(n,t),bw(fc),Ro=!!hc,fc=hc=null,t.current=n,u0(n),zv(),V=a,K=o,rt.transition=s}else t.current=n;if(no&&(no=!1,ln=t,Ho=i),s=t.pendingLanes,s===0&&(mn=null),$v(n.stateNode),He(t,ue()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Vo)throw Vo=!1,t=Dc,Dc=null,t;return Ho&1&&t.tag!==0&&br(),s=t.pendingLanes,s&1?t===Lc?$i++:($i=0,Lc=t):$i=0,An(),null}function br(){if(ln!==null){var t=am(Ho),e=rt.transition,n=K;try{if(rt.transition=null,K=16>t?16:t,ln===null)var r=!1;else{if(t=ln,ln=null,Ho=0,V&6)throw Error(E(331));var i=V;for(V|=4,R=t.current;R!==null;){var s=R,o=s.child;if(R.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(R=c;R!==null;){var u=R;switch(u.tag){case 0:case 11:case 15:Wi(8,u,s)}var d=u.child;if(d!==null)d.return=u,R=d;else for(;R!==null;){u=R;var f=u.sibling,_=u.return;if(yg(u),u===c){R=null;break}if(f!==null){f.return=_,R=f;break}R=_}}}var y=s.alternate;if(y!==null){var v=y.child;if(v!==null){y.child=null;do{var S=v.sibling;v.sibling=null,v=S}while(v!==null)}}R=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,R=o;else e:for(;R!==null;){if(s=R,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Wi(9,s,s.return)}var m=s.sibling;if(m!==null){m.return=s.return,R=m;break e}R=s.return}}var p=t.current;for(R=p;R!==null;){o=R;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,R=g;else e:for(o=p;R!==null;){if(a=R,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Na(9,a)}}catch(I){le(a,a.return,I)}if(a===o){R=null;break e}var w=a.sibling;if(w!==null){w.return=a.return,R=w;break e}R=a.return}}if(V=i,An(),Tt&&typeof Tt.onPostCommitFiberRoot=="function")try{Tt.onPostCommitFiberRoot(va,t)}catch{}r=!0}return r}finally{K=n,rt.transition=e}}return!1}function nf(t,e,n){e=Gr(n,e),e=ag(t,e,1),t=pn(t,e,1),e=be(),t!==null&&(Is(t,1,e),He(t,e))}function le(t,e,n){if(t.tag===3)nf(t,t,n);else for(;e!==null;){if(e.tag===3){nf(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(mn===null||!mn.has(r))){t=Gr(n,t),t=lg(e,t,1),e=pn(e,t,1),t=be(),e!==null&&(Is(e,1,t),He(e,t));break}}e=e.return}}function g0(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=be(),t.pingedLanes|=t.suspendedLanes&n,we===t&&(Ie&n)===n&&(me===4||me===3&&(Ie&130023424)===Ie&&500>ue()-Ku?Vn(t,0):Hu|=n),He(t,e)}function xg(t,e){e===0&&(t.mode&1?(e=Ks,Ks<<=1,!(Ks&130023424)&&(Ks=4194304)):e=1);var n=be();t=Bt(t,e),t!==null&&(Is(t,e,n),He(t,n))}function _0(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),xg(t,n)}function y0(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(E(314))}r!==null&&r.delete(e),xg(t,n)}var Rg;Rg=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||$e.current)We=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return We=!1,s0(t,e,n);We=!!(t.flags&131072)}else We=!1,re&&e.flags&1048576&&Dm(e,Mo,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;go(t,e),t=e.pendingProps;var i=$r(e,Oe.current);Lr(e,n),i=Uu(null,e,r,t,i,n);var s=zu();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Ve(r)?(s=!0,Lo(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Lu(e),i.updater=Ta,e.stateNode=i,i._reactInternals=e,Sc(e,r,t,n),e=Ic(null,e,r,!0,s,n)):(e.tag=0,re&&s&&Nu(e),De(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(go(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=w0(r),t=ct(r,t),i){case 0:e=kc(null,e,r,t,n);break e;case 1:e=Kh(null,e,r,t,n);break e;case 11:e=Vh(null,e,r,t,n);break e;case 14:e=Hh(null,e,r,ct(r.type,t),n);break e}throw Error(E(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:ct(r,i),kc(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:ct(r,i),Kh(t,e,r,i,n);case 3:e:{if(hg(e),t===null)throw Error(E(387));r=e.pendingProps,s=e.memoizedState,i=s.element,Um(t,e),Uo(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Gr(Error(E(423)),e),e=Gh(t,e,r,n,i);break e}else if(r!==i){i=Gr(Error(E(424)),e),e=Gh(t,e,r,n,i);break e}else for(Ge=fn(e.stateNode.containerInfo.firstChild),Qe=e,re=!0,dt=null,n=Fm(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Vr(),r===i){e=$t(t,e,n);break e}De(t,e,r,n)}e=e.child}return e;case 5:return zm(e),t===null&&vc(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,pc(r,i)?o=null:s!==null&&pc(r,s)&&(e.flags|=32),dg(t,e),De(t,e,o,n),e.child;case 6:return t===null&&vc(e),null;case 13:return fg(t,e,n);case 4:return bu(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Hr(e,null,r,n):De(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:ct(r,i),Vh(t,e,r,i,n);case 7:return De(t,e,e.pendingProps,n),e.child;case 8:return De(t,e,e.pendingProps.children,n),e.child;case 12:return De(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,J(Fo,r._currentValue),r._currentValue=o,s!==null)if(vt(s.value,o)){if(s.children===i.children&&!$e.current){e=$t(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=jt(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),wc(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(E(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),wc(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}De(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Lr(e,n),i=ot(i),r=r(i),e.flags|=1,De(t,e,r,n),e.child;case 14:return r=e.type,i=ct(r,e.pendingProps),i=ct(r.type,i),Hh(t,e,r,i,n);case 15:return cg(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:ct(r,i),go(t,e),e.tag=1,Ve(r)?(t=!0,Lo(e)):t=!1,Lr(e,n),og(e,r,i),Sc(e,r,i,n),Ic(null,e,r,!0,t,n);case 19:return pg(t,e,n);case 22:return ug(t,e,n)}throw Error(E(156,e.tag))};function Pg(t,e){return rm(t,e)}function v0(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function tt(t,e,n,r){return new v0(t,e,n,r)}function Yu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function w0(t){if(typeof t=="function")return Yu(t)?1:0;if(t!=null){if(t=t.$$typeof,t===mu)return 11;if(t===gu)return 14}return 2}function _n(t,e){var n=t.alternate;return n===null?(n=tt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function vo(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Yu(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case _r:return Hn(n.children,i,s,e);case pu:o=8,i|=8;break;case Kl:return t=tt(12,n,e,i|2),t.elementType=Kl,t.lanes=s,t;case Gl:return t=tt(13,n,e,i),t.elementType=Gl,t.lanes=s,t;case Ql:return t=tt(19,n,e,i),t.elementType=Ql,t.lanes=s,t;case zp:return Ra(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case jp:o=10;break e;case Up:o=9;break e;case mu:o=11;break e;case gu:o=14;break e;case Jt:o=16,r=null;break e}throw Error(E(130,t==null?t:typeof t,""))}return e=tt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Hn(t,e,n,r){return t=tt(7,t,r,e),t.lanes=n,t}function Ra(t,e,n,r){return t=tt(22,t,r,e),t.elementType=zp,t.lanes=n,t.stateNode={isHidden:!1},t}function Nl(t,e,n){return t=tt(6,t,null,e),t.lanes=n,t}function xl(t,e,n){return e=tt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function E0(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ll(0),this.expirationTimes=ll(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ll(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Xu(t,e,n,r,i,s,o,a,l){return t=new E0(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=tt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Lu(s),t}function S0(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:gr,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Ag(t){if(!t)return In;t=t._reactInternals;e:{if(ar(t)!==t||t.tag!==1)throw Error(E(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Ve(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(E(171))}if(t.tag===1){var n=t.type;if(Ve(n))return Am(t,n,e)}return e}function Og(t,e,n,r,i,s,o,a,l){return t=Xu(n,r,!0,t,i,s,o,a,l),t.context=Ag(null),n=t.current,r=be(),i=gn(n),s=jt(r,i),s.callback=e??null,pn(n,s,i),t.current.lanes=i,Is(t,i,r),He(t,r),t}function Pa(t,e,n,r){var i=e.current,s=be(),o=gn(i);return n=Ag(n),e.context===null?e.context=n:e.pendingContext=n,e=jt(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=pn(i,e,o),t!==null&&(_t(t,i,o,s),fo(t,i,o)),o}function Go(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function rf(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Ju(t,e){rf(t,e),(t=t.alternate)&&rf(t,e)}function C0(){return null}var Dg=typeof reportError=="function"?reportError:function(t){console.error(t)};function Zu(t){this._internalRoot=t}Aa.prototype.render=Zu.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(E(409));Pa(t,e,null,null)};Aa.prototype.unmount=Zu.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Xn(function(){Pa(null,t,null,null)}),e[Wt]=null}};function Aa(t){this._internalRoot=t}Aa.prototype.unstable_scheduleHydration=function(t){if(t){var e=um();t={blockedOn:null,target:t,priority:e};for(var n=0;n<en.length&&e!==0&&e<en[n].priority;n++);en.splice(n,0,t),n===0&&hm(t)}};function ed(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Oa(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function sf(){}function k0(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=Go(o);s.call(c)}}var o=Og(e,r,t,0,null,!1,!1,"",sf);return t._reactRootContainer=o,t[Wt]=o.current,rs(t.nodeType===8?t.parentNode:t),Xn(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=Go(l);a.call(c)}}var l=Xu(t,0,!1,null,null,!1,!1,"",sf);return t._reactRootContainer=l,t[Wt]=l.current,rs(t.nodeType===8?t.parentNode:t),Xn(function(){Pa(e,l,n,r)}),l}function Da(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=Go(o);a.call(l)}}Pa(e,o,t,i)}else o=k0(n,e,t,i,r);return Go(o)}lm=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ai(e.pendingLanes);n!==0&&(vu(e,n|1),He(e,ue()),!(V&6)&&(Qr=ue()+500,An()))}break;case 13:Xn(function(){var r=Bt(t,1);if(r!==null){var i=be();_t(r,t,1,i)}}),Ju(t,1)}};wu=function(t){if(t.tag===13){var e=Bt(t,134217728);if(e!==null){var n=be();_t(e,t,134217728,n)}Ju(t,134217728)}};cm=function(t){if(t.tag===13){var e=gn(t),n=Bt(t,e);if(n!==null){var r=be();_t(n,t,e,r)}Ju(t,e)}};um=function(){return K};dm=function(t,e){var n=K;try{return K=t,e()}finally{K=n}};ic=function(t,e,n){switch(e){case"input":if(Xl(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Ca(r);if(!i)throw Error(E(90));Bp(r),Xl(r,i)}}}break;case"textarea":Vp(t,n);break;case"select":e=n.value,e!=null&&Pr(t,!!n.multiple,e,!1)}};Xp=Gu;Jp=Xn;var I0={usingClientEntryPoint:!1,Events:[Ns,Er,Ca,qp,Yp,Gu]},Ci={findFiberByHostInstance:zn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},T0={bundleType:Ci.bundleType,version:Ci.version,rendererPackageName:Ci.rendererPackageName,rendererConfig:Ci.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Gt.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=tm(t),t===null?null:t.stateNode},findFiberByHostInstance:Ci.findFiberByHostInstance||C0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ro=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ro.isDisabled&&ro.supportsFiber)try{va=ro.inject(T0),Tt=ro}catch{}}Xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=I0;Xe.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ed(e))throw Error(E(200));return S0(t,e,null,n)};Xe.createRoot=function(t,e){if(!ed(t))throw Error(E(299));var n=!1,r="",i=Dg;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Xu(t,1,!1,null,null,n,!1,r,i),t[Wt]=e.current,rs(t.nodeType===8?t.parentNode:t),new Zu(e)};Xe.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(E(188)):(t=Object.keys(t).join(","),Error(E(268,t)));return t=tm(e),t=t===null?null:t.stateNode,t};Xe.flushSync=function(t){return Xn(t)};Xe.hydrate=function(t,e,n){if(!Oa(e))throw Error(E(200));return Da(null,t,e,!0,n)};Xe.hydrateRoot=function(t,e,n){if(!ed(t))throw Error(E(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=Dg;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Og(e,null,t,1,n??null,i,!1,s,o),t[Wt]=e.current,rs(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Aa(e)};Xe.render=function(t,e,n){if(!Oa(e))throw Error(E(200));return Da(null,t,e,!1,n)};Xe.unmountComponentAtNode=function(t){if(!Oa(t))throw Error(E(40));return t._reactRootContainer?(Xn(function(){Da(null,null,t,!1,function(){t._reactRootContainer=null,t[Wt]=null})}),!0):!1};Xe.unstable_batchedUpdates=Gu;Xe.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Oa(n))throw Error(E(200));if(t==null||t._reactInternals===void 0)throw Error(E(38));return Da(t,e,n,!1,r)};Xe.version="18.3.1-next-f1338f8080-20240426";function Lg(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Lg)}catch(t){console.error(t)}}Lg(),Lp.exports=Xe;var N0=Lp.exports,of=N0;Vl.createRoot=of.createRoot,Vl.hydrateRoot=of.hydrateRoot;function bg(){return h.jsx("img",{src:"/logo.png",alt:"Bruncheria Espinoza",style:{height:60,width:60,borderRadius:"50%",objectFit:"cover",flexShrink:0}})}function x0({onStart:t,menuLoading:e}){return h.jsxs("div",{className:"welcome-screen",children:[h.jsx("div",{className:"welcome-brand",children:h.jsx("img",{src:"/logo.png",alt:"Bruncheria Espinoza",className:"welcome-logo-img"})}),h.jsx("div",{className:"welcome-instruction",children:"Order here, pay at the window."}),h.jsx("button",{className:"welcome-cta",onClick:t,disabled:e,style:e?{opacity:.6,cursor:"default",animation:"none"}:{},children:e?h.jsx("span",{children:"Loading menu…"}):h.jsxs(h.Fragment,{children:[h.jsx("span",{children:"Order Here"}),h.jsx("span",{className:"welcome-cta-sep",children:"·"}),h.jsx("span",{children:"Ordene Aquí"})]})}),h.jsx("a",{href:"?view=kitchen",style:{position:"absolute",bottom:16,right:20,fontSize:12,fontWeight:600,color:"rgba(0,0,0,0.35)",textDecoration:"none",padding:"6px 12px",borderRadius:999,background:"rgba(0,0,0,0.08)"},children:"🍳 Kitchen view"})]})}function R0(t,e){return t.price+e.reduce((n,r)=>n+(r.price||0),0)}function P0(t){return t.reduce((e,n)=>e+R0(n.item,n.modifiers),0)}function A0({item:t,onDone:e,onClose:n}){const[r,i]=O.useState([]);function s(u){i(d=>d.find(f=>f.id===u.id)?d.filter(f=>f.id!==u.id):[...d,u])}const o=t.modifiers.filter(u=>u.group==="remove"),a=t.modifiers.filter(u=>u.group==="add"),l=r.reduce((u,d)=>u+(d.price||0),0),c=t.price+l;return h.jsxs(h.Fragment,{children:[h.jsx("div",{className:"modal-backdrop",onClick:n}),h.jsxs("div",{className:"modifier-modal",children:[h.jsx("div",{className:"modal-drag"}),h.jsxs("div",{className:"modal-header",children:[t.emoji&&h.jsx("span",{className:"modal-item-emoji",children:t.emoji}),h.jsx("span",{className:"modal-item-name",children:t.name_en}),h.jsxs("span",{className:"modal-item-price",children:["$",c.toFixed(2)]})]}),h.jsxs("div",{className:"modal-scroll",children:[o.length>0&&h.jsx(af,{label:"Remove",modifiers:o,selected:r,onToggle:s}),a.length>0&&h.jsx(af,{label:"Add",modifiers:a,selected:r,onToggle:s}),t.modifiers.length===0&&h.jsx("p",{style:{color:"var(--gray)",fontSize:14,padding:"12px 0"},children:"No modifications available"})]}),h.jsx("div",{className:"modal-footer",children:h.jsxs("button",{className:"btn-primary",onClick:()=>e(r),children:["Add to Order · $",c.toFixed(2)]})})]})]})}function af({label:t,modifiers:e,selected:n,onToggle:r}){return h.jsxs("div",{className:"modifier-group",children:[h.jsx("div",{className:"modifier-group-label",children:t}),h.jsx("div",{className:"modifier-grid",children:e.map(i=>{const s=!!n.find(o=>o.id===i.id);return h.jsxs("button",{className:`modifier-btn${s?" selected":""}`,onClick:()=>r(i),children:[h.jsxs("span",{children:[i.en,i.price>0&&h.jsxs("span",{style:{fontWeight:600,color:"var(--gray)",marginLeft:4},children:["(+$",i.price.toFixed(2),")"]})]}),s&&h.jsx("span",{className:"modifier-check",children:"✓"})]},i.id)})})]})}function O0({cart:t,menuItems:e,menuSource:n,onAddItem:r,onCheckout:i,onBack:s}){const[o,a]=O.useState(null),l=P0(t),c=t.length,u=t.reduce((S,m)=>(S[m.item.id]=(S[m.item.id]||0)+1,S),{});function d(S){S.modifiers&&S.modifiers.length>0?a(S):r(S,[])}function f(S){r(o,S),a(null)}const _=e.filter(S=>S.category==="food"),y=e.filter(S=>S.category==="drink"),v=D0(_);return h.jsxs("div",{className:"menu-screen",children:[h.jsxs("div",{className:"menu-header",children:[h.jsx("button",{className:"btn-back",onClick:s,children:"← Back"}),h.jsx(bg,{}),c>0&&h.jsxs("button",{className:"menu-checkout-btn",onClick:i,style:{marginLeft:"auto"},children:[h.jsx("span",{className:"menu-badge",children:c}),"$",l.toFixed(2)]})]}),n==="fallback"&&h.jsx("div",{style:{background:"#FFF8DC",borderBottom:"1px solid #E8D87A",padding:"6px 20px",fontSize:12,fontWeight:600,color:"#7A6A00",flexShrink:0},children:"⚠ Using backup menu — Google Sheet unavailable"}),e.length===0?h.jsx("div",{style:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",color:"var(--gray)"},children:"Loading menu…"}):h.jsxs("div",{className:"menu-scroll",children:[v.map(({label:S,items:m})=>h.jsxs("div",{className:"menu-section",children:[h.jsx("div",{className:"menu-section-label",children:S}),h.jsx("div",{className:"menu-grid",children:m.map(p=>h.jsx(lf,{item:p,count:u[p.id],onTap:()=>d(p)},p.id))})]},S)),y.length>0&&h.jsxs("div",{className:"menu-section",children:[h.jsx("div",{className:"menu-section-label",children:"Drinks"}),h.jsx("div",{className:"menu-grid",children:y.map(S=>h.jsx(lf,{item:S,count:u[S.id],onTap:()=>d(S),isDrink:!0},S.id))})]})]}),c>0&&h.jsx("div",{className:"menu-footer",children:h.jsxs("button",{className:"btn-primary",onClick:i,children:["Review Order · $",l.toFixed(2)]})}),o&&h.jsx(A0,{item:o,onDone:f,onClose:()=>a(null)})]})}function lf({item:t,count:e,onTap:n,isDrink:r}){return h.jsxs("button",{className:`menu-item-btn${r?" drink-btn":""}`,onClick:n,children:[e>0&&h.jsxs("span",{className:"menu-item-count",children:["×",e]}),t.emoji&&h.jsx("span",{className:"menu-item-emoji",children:t.emoji}),h.jsx("span",{className:"menu-item-name",children:t.name_en}),h.jsxs("span",{className:"menu-item-price",children:["$",t.price.toFixed(2)]})]})}function D0(t){if(!t.some(i=>i.subcategory))return[{label:"Food",items:t}];const n=[],r={};for(const i of t){const s=i.subcategory||"Other";r[s]||(r[s]=[],n.push(s)),r[s].push(i)}return n.map(i=>({label:i,items:r[i]}))}const L0=.07;function La(t){const e=t.reduce((r,i)=>{const s=i.item.price,o=i.modifiers.reduce((a,l)=>a+(l.price||0),0);return r+Math.round((s+o)*100)},0),n=Math.round(e*L0);return{subtotal:e/100,tax:n/100,total:(e+n)/100}}function b0(t,e){return t.price+e.reduce((n,r)=>n+(r.price||0),0)}function M0({cart:t,submitting:e,submitError:n,orderLocked:r,onConfirm:i,onBack:s}){const{subtotal:o,tax:a,total:l}=La(t);return h.jsxs("div",{className:"review-screen",children:[h.jsxs("div",{className:"screen-header",children:[h.jsx("button",{className:"btn-back",onClick:s,disabled:r||e,children:"← Back"}),h.jsx(bg,{})]}),h.jsxs("div",{className:"review-scroll",children:[h.jsxs("div",{className:"review-heading",children:[h.jsx("div",{className:"review-heading-title",children:"Everything look right?"}),h.jsx("div",{className:"review-heading-copy",children:"Review your items before sending your order to the window."})]}),h.jsxs("div",{className:"review-section",children:[h.jsx("div",{className:"review-section-label",children:"🧾 Your Order"}),t.map(c=>{const u=b0(c.item,c.modifiers);return h.jsxs("div",{className:"review-item",children:[h.jsxs("div",{className:"review-item-left",children:[h.jsxs("div",{className:"review-item-name",children:[c.item.emoji&&`${c.item.emoji} `,c.item.name_en]}),c.modifiers.length>0&&h.jsx("div",{className:"review-mods",children:c.modifiers.map(d=>h.jsxs("span",{className:"review-mod-tag",children:[d.en,d.price>0&&` +$${d.price.toFixed(2)}`]},d.id))})]}),h.jsxs("div",{className:"review-item-price",children:["$",u.toFixed(2)]})]},c.id)})]}),h.jsxs("div",{className:"review-tax-breakdown",children:[h.jsxs("div",{children:[h.jsx("span",{children:"Subtotal"}),h.jsxs("span",{children:["$",o.toFixed(2)]})]}),h.jsxs("div",{children:[h.jsx("span",{children:"Tax (7%)"}),h.jsxs("span",{children:["$",a.toFixed(2)]})]}),h.jsxs("div",{className:"review-total-bar",children:[h.jsx("span",{className:"review-total-label",children:"Total"}),h.jsxs("span",{className:"review-total-amount",children:["$",l.toFixed(2)]})]})]})]}),h.jsxs("div",{className:"screen-footer",children:[n&&h.jsx("div",{className:"order-submit-error",role:"alert",children:n}),h.jsx("button",{className:"btn-primary",onClick:i,disabled:e||!t.length,children:e?"Sending order…":r?"Retry sending my order":"Send my order"}),h.jsx("button",{className:"btn-add-more",onClick:s,disabled:r||e,children:"Edit order"})]})]})}function F0({order:t,onDone:e}){return h.jsxs("div",{className:"confirmation-screen",children:[h.jsxs("div",{className:"confirmation-inner",children:[h.jsx("div",{className:"confirmation-egg",children:"🍳"}),h.jsx("p",{className:"confirmation-label",children:"Got it! We've received your order."}),h.jsx("p",{className:"confirmation-label-es",children:"¡Listo! Recibimos tu orden."}),h.jsxs("div",{className:"confirmation-order-number",children:["Order #",t.orderNumber]}),h.jsxs("div",{className:"confirmation-buzz",children:["Head to the window to confirm and pay.",h.jsx("span",{children:"Show us your order number. We’ll confirm everything, take your payment, and give you a buzzer."}),h.jsx("span",{className:"confirmation-buzz-es",children:"Muestra tu número en la ventana. Confirmaremos tu orden, recibiremos el pago y te daremos un localizador."})]}),h.jsx("p",{className:"confirmation-footer-copy",children:"Your order will be prepared once it’s confirmed at the window."})]}),h.jsx("button",{className:"btn-primary confirmation-new-order",onClick:e,children:"Start New Order"})]})}const j0=()=>{};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mg={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C=function(t,e){if(!t)throw oi(e)},oi=function(t){return new Error("Firebase Database ("+Mg.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fg=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},U0=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},td={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,u=s>>2,d=(s&3)<<4|a>>4;let f=(a&15)<<2|c>>6,_=c&63;l||(_=64,o||(f=64)),r.push(n[u],n[d],n[f],n[_])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Fg(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):U0(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const d=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||c==null||d==null)throw new z0;const f=s<<2|a>>4;if(r.push(f),c!==64){const _=a<<4&240|c>>2;if(r.push(_),d!==64){const y=c<<6&192|d;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class z0 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const jg=function(t){const e=Fg(t);return td.encodeByteArray(e,!0)},Qo=function(t){return jg(t).replace(/\./g,"")},qo=function(t){try{return td.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W0(t){return Ug(void 0,t)}function Ug(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!B0(n)||(t[n]=Ug(t[n],e[n]));return t}function B0(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $0(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V0=()=>$0().__FIREBASE_DEFAULTS__,H0=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},K0=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&qo(t[1]);return e&&JSON.parse(e)},nd=()=>{try{return j0()||V0()||H0()||K0()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},zg=t=>{var e,n;return(n=(e=nd())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},G0=t=>{const e=zg(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Wg=()=>{var t;return(t=nd())==null?void 0:t.config},Bg=t=>{var e;return(e=nd())==null?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q0(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}},...t},a="";return[Qo(JSON.stringify(n)),Qo(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function rd(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Fe())}function q0(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Y0(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function $g(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function X0(){const t=Fe();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Vg(){return Mg.NODE_ADMIN===!0}function J0(){try{return typeof indexedDB=="object"}catch{return!1}}function Z0(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)==null?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eE="FirebaseError";class On extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=eE,Object.setPrototypeOf(this,On.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Rs.prototype.create)}}class Rs{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?tE(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new On(i,a,r)}}function tE(t,e){return t.replace(nE,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const nE=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hs(t){return JSON.parse(t)}function pe(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hg=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=hs(qo(s[0])||""),n=hs(qo(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},rE=function(t){const e=Hg(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},iE=function(t){const e=Hg(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Et(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Jn(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Fc(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Yo(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function Zn(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(cf(s)&&cf(o)){if(!Zn(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function cf(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function li(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Di(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Li(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sE{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)r[d]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let d=0;d<16;d++)r[d]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let d=16;d<80;d++){const f=r[d-3]^r[d-8]^r[d-14]^r[d-16];r[d]=(f<<1|f>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let d=0;d<80;d++){d<40?d<20?(c=a^s&(o^a),u=1518500249):(c=s^o^a,u=1859775393):d<60?(c=s&o|a&(s|o),u=2400959708):(c=s^o^a,u=3395469782);const f=(i<<5|i>>>27)+c+l+u+r[d]&4294967295;l=a,a=o,o=(s<<30|s>>>2)&4294967295,s=i,i=f}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function oE(t,e){const n=new aE(t,e);return n.subscribe.bind(n)}class aE{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");lE(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Rl),i.error===void 0&&(i.error=Rl),i.complete===void 0&&(i.complete=Rl);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function lE(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Rl(){}function ba(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cE=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,C(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Ma=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xe(t){return t&&t._delegate?t._delegate:t}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ps(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Kg(t){return(await fetch(t,{credentials:"include"})).ok}class er{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uE{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new ai;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(hE(e))try{this.getOrInitializeService({instanceIdentifier:jn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=jn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=jn){return this.instances.has(e)}getOptions(e=jn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),i=this.onInitCallbacks.get(r)??new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:dE(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=jn){return this.component?this.component.multipleInstances?e:jn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function dE(t){return t===jn?void 0:t}function hE(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fE{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new uE(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var G;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(G||(G={}));const pE={debug:G.DEBUG,verbose:G.VERBOSE,info:G.INFO,warn:G.WARN,error:G.ERROR,silent:G.SILENT},mE=G.INFO,gE={[G.DEBUG]:"log",[G.VERBOSE]:"log",[G.INFO]:"info",[G.WARN]:"warn",[G.ERROR]:"error"},_E=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=gE[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class id{constructor(e){this.name=e,this._logLevel=mE,this._logHandler=_E,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in G))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?pE[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,G.DEBUG,...e),this._logHandler(this,G.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,G.VERBOSE,...e),this._logHandler(this,G.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,G.INFO,...e),this._logHandler(this,G.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,G.WARN,...e),this._logHandler(this,G.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,G.ERROR,...e),this._logHandler(this,G.ERROR,...e)}}const yE=(t,e)=>e.some(n=>t instanceof n);let uf,df;function vE(){return uf||(uf=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function wE(){return df||(df=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Gg=new WeakMap,jc=new WeakMap,Qg=new WeakMap,Pl=new WeakMap,sd=new WeakMap;function EE(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(yn(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Gg.set(n,t)}).catch(()=>{}),sd.set(e,t),e}function SE(t){if(jc.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});jc.set(t,e)}let Uc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return jc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Qg.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return yn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function CE(t){Uc=t(Uc)}function kE(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Al(this),e,...n);return Qg.set(r,e.sort?e.sort():[e]),yn(r)}:wE().includes(t)?function(...e){return t.apply(Al(this),e),yn(Gg.get(this))}:function(...e){return yn(t.apply(Al(this),e))}}function IE(t){return typeof t=="function"?kE(t):(t instanceof IDBTransaction&&SE(t),yE(t,vE())?new Proxy(t,Uc):t)}function yn(t){if(t instanceof IDBRequest)return EE(t);if(Pl.has(t))return Pl.get(t);const e=IE(t);return e!==t&&(Pl.set(t,e),sd.set(e,t)),e}const Al=t=>sd.get(t);function TE(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=yn(o);return r&&o.addEventListener("upgradeneeded",l=>{r(yn(o.result),l.oldVersion,l.newVersion,yn(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const NE=["get","getKey","getAll","getAllKeys","count"],xE=["put","add","delete","clear"],Ol=new Map;function hf(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ol.get(e))return Ol.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=xE.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||NE.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return Ol.set(e,s),s}CE(t=>({...t,get:(e,n,r)=>hf(e,n)||t.get(e,n,r),has:(e,n)=>!!hf(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RE{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(PE(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function PE(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const zc="@firebase/app",ff="0.14.11";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vt=new id("@firebase/app"),AE="@firebase/app-compat",OE="@firebase/analytics-compat",DE="@firebase/analytics",LE="@firebase/app-check-compat",bE="@firebase/app-check",ME="@firebase/auth",FE="@firebase/auth-compat",jE="@firebase/database",UE="@firebase/data-connect",zE="@firebase/database-compat",WE="@firebase/functions",BE="@firebase/functions-compat",$E="@firebase/installations",VE="@firebase/installations-compat",HE="@firebase/messaging",KE="@firebase/messaging-compat",GE="@firebase/performance",QE="@firebase/performance-compat",qE="@firebase/remote-config",YE="@firebase/remote-config-compat",XE="@firebase/storage",JE="@firebase/storage-compat",ZE="@firebase/firestore",eS="@firebase/ai",tS="@firebase/firestore-compat",nS="firebase",rS="12.12.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wc="[DEFAULT]",iS={[zc]:"fire-core",[AE]:"fire-core-compat",[DE]:"fire-analytics",[OE]:"fire-analytics-compat",[bE]:"fire-app-check",[LE]:"fire-app-check-compat",[ME]:"fire-auth",[FE]:"fire-auth-compat",[jE]:"fire-rtdb",[UE]:"fire-data-connect",[zE]:"fire-rtdb-compat",[WE]:"fire-fn",[BE]:"fire-fn-compat",[$E]:"fire-iid",[VE]:"fire-iid-compat",[HE]:"fire-fcm",[KE]:"fire-fcm-compat",[GE]:"fire-perf",[QE]:"fire-perf-compat",[qE]:"fire-rc",[YE]:"fire-rc-compat",[XE]:"fire-gcs",[JE]:"fire-gcs-compat",[ZE]:"fire-fst",[tS]:"fire-fst-compat",[eS]:"fire-vertex","fire-js":"fire-js",[nS]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xo=new Map,sS=new Map,Bc=new Map;function pf(t,e){try{t.container.addComponent(e)}catch(n){Vt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function qr(t){const e=t.name;if(Bc.has(e))return Vt.debug(`There were multiple attempts to register component ${e}.`),!1;Bc.set(e,t);for(const n of Xo.values())pf(n,t);for(const n of sS.values())pf(n,t);return!0}function od(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function ht(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oS={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},vn=new Rs("app","Firebase",oS);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aS{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new er("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw vn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ci=rS;function qg(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:Wc,automaticDataCollectionEnabled:!0,...e},i=r.name;if(typeof i!="string"||!i)throw vn.create("bad-app-name",{appName:String(i)});if(n||(n=Wg()),!n)throw vn.create("no-options");const s=Xo.get(i);if(s){if(Zn(n,s.options)&&Zn(r,s.config))return s;throw vn.create("duplicate-app",{appName:i})}const o=new fE(i);for(const l of Bc.values())o.addComponent(l);const a=new aS(n,r,o);return Xo.set(i,a),a}function Yg(t=Wc){const e=Xo.get(t);if(!e&&t===Wc&&Wg())return qg();if(!e)throw vn.create("no-app",{appName:t});return e}function wn(t,e,n){let r=iS[t]??t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),s=e.match(/\s|\//);if(i||s){const o=[`Unable to register library "${r}" with version "${e}":`];i&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&s&&o.push("and"),s&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Vt.warn(o.join(" "));return}qr(new er(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lS="firebase-heartbeat-database",cS=1,fs="firebase-heartbeat-store";let Dl=null;function Xg(){return Dl||(Dl=TE(lS,cS,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(fs)}catch(n){console.warn(n)}}}}).catch(t=>{throw vn.create("idb-open",{originalErrorMessage:t.message})})),Dl}async function uS(t){try{const n=(await Xg()).transaction(fs),r=await n.objectStore(fs).get(Jg(t));return await n.done,r}catch(e){if(e instanceof On)Vt.warn(e.message);else{const n=vn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Vt.warn(n.message)}}}async function mf(t,e){try{const r=(await Xg()).transaction(fs,"readwrite");await r.objectStore(fs).put(e,Jg(t)),await r.done}catch(n){if(n instanceof On)Vt.warn(n.message);else{const r=vn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Vt.warn(r.message)}}}function Jg(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dS=1024,hS=30;class fS{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new mS(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=gf();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>hS){const o=gS(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Vt.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=gf(),{heartbeatsToSend:r,unsentEntries:i}=pS(this._heartbeatsCache.heartbeats),s=Qo(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Vt.warn(n),""}}}function gf(){return new Date().toISOString().substring(0,10)}function pS(t,e=dS){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),_f(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),_f(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class mS{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return J0()?Z0().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await uS(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return mf(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return mf(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function _f(t){return Qo(JSON.stringify({version:2,heartbeats:t})).length}function gS(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _S(t){qr(new er("platform-logger",e=>new RE(e),"PRIVATE")),qr(new er("heartbeat",e=>new fS(e),"PRIVATE")),wn(zc,ff,t),wn(zc,ff,"esm2020"),wn("fire-js","")}_S("");function Zg(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const yS=Zg,e_=new Rs("auth","Firebase",Zg());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jo=new id("@firebase/auth");function vS(t,...e){Jo.logLevel<=G.WARN&&Jo.warn(`Auth (${ci}): ${t}`,...e)}function wo(t,...e){Jo.logLevel<=G.ERROR&&Jo.error(`Auth (${ci}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wt(t,...e){throw ad(t,...e)}function xt(t,...e){return ad(t,...e)}function t_(t,e,n){const r={...yS(),[e]:n};return new Rs("auth","Firebase",r).create(e,{appName:t.name})}function En(t){return t_(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function ad(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return e_.create(t,...e)}function M(t,e,...n){if(!t)throw ad(e,...n)}function bt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw wo(e),new Error(e)}function Ht(t,e){t||bt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $c(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function wS(){return yf()==="http:"||yf()==="https:"}function yf(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ES(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(wS()||Y0()||"connection"in navigator)?navigator.onLine:!0}function SS(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class As{constructor(e,n){this.shortDelay=e,this.longDelay=n,Ht(n>e,"Short delay should be less than long delay!"),this.isMobile=rd()||$g()}get(){return ES()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ld(t,e){Ht(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n_{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;bt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;bt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;bt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CS={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kS=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],IS=new As(3e4,6e4);function lr(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function Dn(t,e,n,r,i={}){return r_(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=li({key:t.config.apiKey,...o}).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const c={method:e,headers:l,...s};return q0()||(c.referrerPolicy="no-referrer"),t.emulatorConfig&&Ps(t.emulatorConfig.host)&&(c.credentials="include"),n_.fetch()(await i_(t,t.config.apiHost,n,a),c)})}async function r_(t,e,n){t._canInitEmulator=!1;const r={...CS,...e};try{const i=new NS(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw io(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw io(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw io(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw io(t,"user-disabled",o);const u=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw t_(t,u,c);wt(t,u)}}catch(i){if(i instanceof On)throw i;wt(t,"network-request-failed",{message:String(i)})}}async function Fa(t,e,n,r,i={}){const s=await Dn(t,e,n,r,i);return"mfaPendingCredential"in s&&wt(t,"multi-factor-auth-required",{_serverResponse:s}),s}async function i_(t,e,n,r){const i=`${e}${n}?${r}`,s=t,o=s.config.emulator?ld(t.config,i):`${t.config.apiScheme}://${i}`;return kS.includes(n)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(o).toString():o}function TS(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class NS{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(xt(this.auth,"network-request-failed")),IS.get())})}}function io(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=xt(t,e,r);return i.customData._tokenResponse=n,i}function vf(t){return t!==void 0&&t.enterprise!==void 0}class xS{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return TS(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function RS(t,e){return Dn(t,"GET","/v2/recaptchaConfig",lr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function PS(t,e){return Dn(t,"POST","/v1/accounts:delete",e)}async function Zo(t,e){return Dn(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vi(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function AS(t,e=!1){const n=xe(t),r=await n.getIdToken(e),i=cd(r);M(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Vi(Ll(i.auth_time)),issuedAtTime:Vi(Ll(i.iat)),expirationTime:Vi(Ll(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Ll(t){return Number(t)*1e3}function cd(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return wo("JWT malformed, contained fewer than 3 sections"),null;try{const i=qo(n);return i?JSON.parse(i):(wo("Failed to decode base64 JWT payload"),null)}catch(i){return wo("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function wf(t){const e=cd(t);return M(e,"internal-error"),M(typeof e.exp<"u","internal-error"),M(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ps(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof On&&OS(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function OS({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DS{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vc{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Vi(this.lastLoginAt),this.creationTime=Vi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ea(t){var d;const e=t.auth,n=await t.getIdToken(),r=await ps(t,Zo(e,{idToken:n}));M(r==null?void 0:r.users.length,e,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const s=(d=i.providerUserInfo)!=null&&d.length?s_(i.providerUserInfo):[],o=bS(t.providerData,s),a=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(o!=null&&o.length),c=a?l:!1,u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new Vc(i.createdAt,i.lastLoginAt),isAnonymous:c};Object.assign(t,u)}async function LS(t){const e=xe(t);await ea(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function bS(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function s_(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function MS(t,e){const n=await r_(t,{},async()=>{const r=li({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=await i_(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();a["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:a,body:r};return t.emulatorConfig&&Ps(t.emulatorConfig.host)&&(l.credentials="include"),n_.fetch()(o,l)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function FS(t,e){return Dn(t,"POST","/v2/accounts:revokeToken",lr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){M(e.idToken,"internal-error"),M(typeof e.idToken<"u","internal-error"),M(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):wf(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){M(e.length!==0,"internal-error");const n=wf(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(M(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await MS(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Mr;return r&&(M(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(M(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(M(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Mr,this.toJSON())}_performRefresh(){return bt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xt(t,e){M(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class pt{constructor({uid:e,auth:n,stsTokenManager:r,...i}){this.providerId="firebase",this.proactiveRefresh=new DS(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Vc(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await ps(this,this.stsTokenManager.getToken(this.auth,e));return M(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return AS(this,e)}reload(){return LS(this)}_assign(e){this!==e&&(M(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new pt({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){M(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await ea(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(ht(this.auth.app))return Promise.reject(En(this.auth));const e=await this.getIdToken();return await ps(this,PS(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,i=n.email??void 0,s=n.phoneNumber??void 0,o=n.photoURL??void 0,a=n.tenantId??void 0,l=n._redirectEventId??void 0,c=n.createdAt??void 0,u=n.lastLoginAt??void 0,{uid:d,emailVerified:f,isAnonymous:_,providerData:y,stsTokenManager:v}=n;M(d&&v,e,"internal-error");const S=Mr.fromJSON(this.name,v);M(typeof d=="string",e,"internal-error"),Xt(r,e.name),Xt(i,e.name),M(typeof f=="boolean",e,"internal-error"),M(typeof _=="boolean",e,"internal-error"),Xt(s,e.name),Xt(o,e.name),Xt(a,e.name),Xt(l,e.name),Xt(c,e.name),Xt(u,e.name);const m=new pt({uid:d,auth:e,email:i,emailVerified:f,displayName:r,isAnonymous:_,photoURL:o,phoneNumber:s,tenantId:a,stsTokenManager:S,createdAt:c,lastLoginAt:u});return y&&Array.isArray(y)&&(m.providerData=y.map(p=>({...p}))),l&&(m._redirectEventId=l),m}static async _fromIdTokenResponse(e,n,r=!1){const i=new Mr;i.updateFromServerResponse(n);const s=new pt({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await ea(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];M(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?s_(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new Mr;a.updateFromIdToken(r);const l=new pt({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Vc(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(l,c),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ef=new Map;function Mt(t){Ht(t instanceof Function,"Expected a class definition");let e=Ef.get(t);return e?(Ht(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Ef.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}o_.type="NONE";const Sf=o_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eo(t,e,n){return`firebase:${t}:${e}:${n}`}class Fr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Eo(this.userKey,i.apiKey,s),this.fullPersistenceKey=Eo("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Zo(this.auth,{idToken:e}).catch(()=>{});return n?pt._fromGetAccountInfoResponse(this.auth,n,e):null}return pt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Fr(Mt(Sf),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||Mt(Sf);const o=Eo(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){let d;if(typeof u=="string"){const f=await Zo(e,{idToken:u}).catch(()=>{});if(!f)break;d=await pt._fromGetAccountInfoResponse(e,f,u)}else d=pt._fromJSON(e,u);c!==s&&(a=d),s=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Fr(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new Fr(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cf(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(u_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(a_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(h_(e))return"Blackberry";if(f_(e))return"Webos";if(l_(e))return"Safari";if((e.includes("chrome/")||c_(e))&&!e.includes("edge/"))return"Chrome";if(d_(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function a_(t=Fe()){return/firefox\//i.test(t)}function l_(t=Fe()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function c_(t=Fe()){return/crios\//i.test(t)}function u_(t=Fe()){return/iemobile/i.test(t)}function d_(t=Fe()){return/android/i.test(t)}function h_(t=Fe()){return/blackberry/i.test(t)}function f_(t=Fe()){return/webos/i.test(t)}function ud(t=Fe()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function jS(t=Fe()){var e;return ud(t)&&!!((e=window.navigator)!=null&&e.standalone)}function US(){return X0()&&document.documentMode===10}function p_(t=Fe()){return ud(t)||d_(t)||f_(t)||h_(t)||/windows phone/i.test(t)||u_(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m_(t,e=[]){let n;switch(t){case"Browser":n=Cf(Fe());break;case"Worker":n=`${Cf(Fe())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ci}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zS{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function WS(t,e={}){return Dn(t,"GET","/v2/passwordPolicy",lr(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BS=6;class $S{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??BS,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VS{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new kf(this),this.idTokenSubscription=new kf(this),this.beforeStateQueue=new zS(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=e_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Mt(n)),this._initializationPromise=this.queue(async()=>{var r,i,s;if(!this._deleted&&(this.persistenceManager=await Fr.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((i=this._popupRedirectResolver)!=null&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)==null?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Zo(this,{idToken:e}),r=await pt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var s;if(ht(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(s=this.redirectUser)==null?void 0:s._redirectEventId,a=r==null?void 0:r._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(r=l.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return M(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ea(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=SS()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(ht(this.app))return Promise.reject(En(this));const n=e?xe(e):null;return n&&M(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&M(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return ht(this.app)?Promise.reject(En(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return ht(this.app)?Promise.reject(En(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Mt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await WS(this),n=new $S(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Rs("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await FS(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Mt(e)||this._popupRedirectResolver;M(n,this,"argument-error"),this.redirectPersistenceManager=await Fr.create(this,[Mt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(M(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return M(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=m_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var i;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((i=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:i.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(ht(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&vS(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function ui(t){return xe(t)}class kf{constructor(e){this.auth=e,this.observer=null,this.addObserver=oE(n=>this.observer=n)}get next(){return M(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ja={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function HS(t){ja=t}function g_(t){return ja.loadJS(t)}function KS(){return ja.recaptchaEnterpriseScript}function GS(){return ja.gapiScript}function QS(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class qS{constructor(){this.enterprise=new YS}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class YS{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const XS="recaptcha-enterprise",__="NO_RECAPTCHA";class JS{constructor(e){this.type=XS,this.auth=ui(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{RS(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new xS(l);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;vf(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(__)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new qS().execute("siteKey",{action:"verify"}):new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&vf(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=KS();l.length!==0&&(l+=a),g_(l).then(()=>{i(a,s,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function ki(t,e,n,r=!1,i=!1){const s=new JS(t);let o;if(i)o=__;else try{o=await s.verify(n)}catch{o=await s.verify(n,!0)}const a={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){const l=a.phoneEnrollmentInfo.phoneNumber,c=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const l=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return r?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function If(t,e,n,r,i){var s,o;if(i==="EMAIL_PASSWORD_PROVIDER")if((s=t._getRecaptchaConfig())!=null&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const a=await ki(t,e,n,n==="getOobCode");return r(t,a)}else return r(t,e).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await ki(t,e,n,n==="getOobCode");return r(t,l)}else return Promise.reject(a)});else if(i==="PHONE_PROVIDER")if((o=t._getRecaptchaConfig())!=null&&o.isProviderEnabled("PHONE_PROVIDER")){const a=await ki(t,e,n);return r(t,a).catch(async l=>{var c;if(((c=t._getRecaptchaConfig())==null?void 0:c.getProviderEnforcementState("PHONE_PROVIDER"))==="AUDIT"&&(l.code==="auth/missing-recaptcha-token"||l.code==="auth/invalid-app-credential")){console.log(`Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${n} flow.`);const u=await ki(t,e,n,!1,!0);return r(t,u)}return Promise.reject(l)})}else{const a=await ki(t,e,n,!1,!0);return r(t,a)}else return Promise.reject(i+" provider is not supported.")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZS(t,e){const n=od(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Zn(s,e??{}))return i;wt(i,"already-initialized")}return n.initialize({options:e})}function eC(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Mt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function tC(t,e,n){const r=ui(t);M(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=y_(e),{host:o,port:a}=nC(e),l=a===null?"":`:${a}`,c={url:`${s}//${o}${l}/`},u=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){M(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),M(Zn(c,r.config.emulator)&&Zn(u,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=c,r.emulatorConfig=u,r.settings.appVerificationDisabledForTesting=!0,Ps(o)?Kg(`${s}//${o}${l}`):i||rC()}function y_(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function nC(t){const e=y_(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Tf(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Tf(o)}}}function Tf(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function rC(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dd{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return bt("not implemented")}_getIdTokenResponse(e){return bt("not implemented")}_linkToIdToken(e,n){return bt("not implemented")}_getReauthenticationResolver(e){return bt("not implemented")}}async function iC(t,e){return Dn(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sC(t,e){return Fa(t,"POST","/v1/accounts:signInWithPassword",lr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oC(t,e){return Fa(t,"POST","/v1/accounts:signInWithEmailLink",lr(t,e))}async function aC(t,e){return Fa(t,"POST","/v1/accounts:signInWithEmailLink",lr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ms extends dd{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new ms(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new ms(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return If(e,n,"signInWithPassword",sC,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return oC(e,{email:this._email,oobCode:this._password});default:wt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return If(e,r,"signUpPassword",iC,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return aC(e,{idToken:n,email:this._email,oobCode:this._password});default:wt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jr(t,e){return Fa(t,"POST","/v1/accounts:signInWithIdp",lr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lC="http://localhost";class tr extends dd{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new tr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):wt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,...s}=n;if(!r||!i)return null;const o=new tr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return jr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,jr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,jr(e,n)}buildRequest(){const e={requestUri:lC,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=li(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cC(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function uC(t){const e=Di(Li(t)).link,n=e?Di(Li(e)).deep_link_id:null,r=Di(Li(t)).deep_link_id;return(r?Di(Li(r)).link:null)||r||n||e||t}class hd{constructor(e){const n=Di(Li(e)),r=n.apiKey??null,i=n.oobCode??null,s=cC(n.mode??null);M(r&&i&&s,"argument-error"),this.apiKey=r,this.operation=s,this.code=i,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=uC(e);try{return new hd(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di{constructor(){this.providerId=di.PROVIDER_ID}static credential(e,n){return ms._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=hd.parseLink(n);return M(r,"argument-error"),ms._fromEmailAndCode(e,r.code,r.tenantId)}}di.PROVIDER_ID="password";di.EMAIL_PASSWORD_SIGN_IN_METHOD="password";di.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v_{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Os extends v_{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn extends Os{constructor(){super("facebook.com")}static credential(e){return tr._fromParams({providerId:nn.PROVIDER_ID,signInMethod:nn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return nn.credentialFromTaggedObject(e)}static credentialFromError(e){return nn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return nn.credential(e.oauthAccessToken)}catch{return null}}}nn.FACEBOOK_SIGN_IN_METHOD="facebook.com";nn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn extends Os{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return tr._fromParams({providerId:rn.PROVIDER_ID,signInMethod:rn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return rn.credentialFromTaggedObject(e)}static credentialFromError(e){return rn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return rn.credential(n,r)}catch{return null}}}rn.GOOGLE_SIGN_IN_METHOD="google.com";rn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn extends Os{constructor(){super("github.com")}static credential(e){return tr._fromParams({providerId:sn.PROVIDER_ID,signInMethod:sn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return sn.credentialFromTaggedObject(e)}static credentialFromError(e){return sn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return sn.credential(e.oauthAccessToken)}catch{return null}}}sn.GITHUB_SIGN_IN_METHOD="github.com";sn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on extends Os{constructor(){super("twitter.com")}static credential(e,n){return tr._fromParams({providerId:on.PROVIDER_ID,signInMethod:on.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return on.credentialFromTaggedObject(e)}static credentialFromError(e){return on.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return on.credential(n,r)}catch{return null}}}on.TWITTER_SIGN_IN_METHOD="twitter.com";on.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await pt._fromIdTokenResponse(e,r,i),o=Nf(r);return new Yr({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Nf(r);return new Yr({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Nf(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ta extends On{constructor(e,n,r,i){super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,ta.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new ta(e,n,r,i)}}function w_(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?ta._fromErrorAndOperation(t,s,e,r):s})}async function dC(t,e,n=!1){const r=await ps(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Yr._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hC(t,e,n=!1){const{auth:r}=t;if(ht(r.app))return Promise.reject(En(r));const i="reauthenticate";try{const s=await ps(t,w_(r,i,e,t),n);M(s.idToken,r,"internal-error");const o=cd(s.idToken);M(o,r,"internal-error");const{sub:a}=o;return M(t.uid===a,r,"user-mismatch"),Yr._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&wt(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function E_(t,e,n=!1){if(ht(t.app))return Promise.reject(En(t));const r="signIn",i=await w_(t,r,e),s=await Yr._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function fC(t,e){return E_(ui(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pC(t){const e=ui(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function mC(t,e,n){return ht(t.app)?Promise.reject(En(t)):fC(xe(t),di.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&pC(t),r})}function gC(t,e,n,r){return xe(t).onIdTokenChanged(e,n,r)}function _C(t,e,n){return xe(t).beforeAuthStateChanged(e,n)}function yC(t,e,n,r){return xe(t).onAuthStateChanged(e,n,r)}function vC(t){return xe(t).signOut()}const na="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S_{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(na,"1"),this.storage.removeItem(na),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wC=1e3,EC=10;class C_ extends S_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=p_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);US()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,EC):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},wC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}C_.type="LOCAL";const SC=C_;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k_ extends S_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}k_.type="SESSION";const I_=k_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CC(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ua{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Ua(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,s)),l=await CC(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ua.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fd(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kC{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const c=fd("",20);i.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(d){const f=d;if(f.data.eventId===c)switch(f.data.status){case"ack":clearTimeout(u),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(f.data.response);break;default:clearTimeout(u),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rt(){return window}function IC(t){Rt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T_(){return typeof Rt().WorkerGlobalScope<"u"&&typeof Rt().importScripts=="function"}async function TC(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function NC(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function xC(){return T_()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N_="firebaseLocalStorageDb",RC=1,ra="firebaseLocalStorage",x_="fbase_key";class Ds{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function za(t,e){return t.transaction([ra],e?"readwrite":"readonly").objectStore(ra)}function PC(){const t=indexedDB.deleteDatabase(N_);return new Ds(t).toPromise()}function Hc(){const t=indexedDB.open(N_,RC);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(ra,{keyPath:x_})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(ra)?e(r):(r.close(),await PC(),e(await Hc()))})})}async function xf(t,e,n){const r=za(t,!0).put({[x_]:e,value:n});return new Ds(r).toPromise()}async function AC(t,e){const n=za(t,!1).get(e),r=await new Ds(n).toPromise();return r===void 0?null:r.value}function Rf(t,e){const n=za(t,!0).delete(e);return new Ds(n).toPromise()}const OC=800,DC=3;class R_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Hc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>DC)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return T_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ua._getInstance(xC()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await TC(),!this.activeServiceWorker)return;this.sender=new kC(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||NC()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Hc();return await xf(e,na,"1"),await Rf(e,na),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>xf(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>AC(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Rf(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=za(i,!1).getAll();return new Ds(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),OC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}R_.type="LOCAL";const LC=R_;new As(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bC(t,e){return e?Mt(e):(M(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pd extends dd{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return jr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return jr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return jr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function MC(t){return E_(t.auth,new pd(t),t.bypassAuthState)}function FC(t){const{auth:e,user:n}=t;return M(n,e,"internal-error"),hC(n,new pd(t),t.bypassAuthState)}async function jC(t){const{auth:e,user:n}=t;return M(n,e,"internal-error"),dC(n,new pd(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P_{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return MC;case"linkViaPopup":case"linkViaRedirect":return jC;case"reauthViaPopup":case"reauthViaRedirect":return FC;default:wt(this.auth,"internal-error")}}resolve(e){Ht(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ht(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UC=new As(2e3,1e4);class xr extends P_{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,xr.currentPopupAction&&xr.currentPopupAction.cancel(),xr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return M(e,this.auth,"internal-error"),e}async onExecution(){Ht(this.filter.length===1,"Popup operations only handle one event");const e=fd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(xt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(xt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,xr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(xt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,UC.get())};e()}}xr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zC="pendingRedirect",So=new Map;class WC extends P_{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=So.get(this.auth._key());if(!e){try{const r=await BC(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}So.set(this.auth._key(),e)}return this.bypassAuthState||So.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function BC(t,e){const n=HC(e),r=VC(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function $C(t,e){So.set(t._key(),e)}function VC(t){return Mt(t._redirectPersistence)}function HC(t){return Eo(zC,t.config.apiKey,t.name)}async function KC(t,e,n=!1){if(ht(t.app))return Promise.reject(En(t));const r=ui(t),i=bC(r,e),o=await new WC(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GC=10*60*1e3;class QC{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!qC(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!A_(e)){const i=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(xt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=GC&&this.cachedEventUids.clear(),this.cachedEventUids.has(Pf(e))}saveEventToCache(e){this.cachedEventUids.add(Pf(e)),this.lastProcessedEventTime=Date.now()}}function Pf(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function A_({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function qC(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return A_(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function YC(t,e={}){return Dn(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XC=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,JC=/^https?/;async function ZC(t){if(t.config.emulator)return;const{authorizedDomains:e}=await YC(t);for(const n of e)try{if(ek(n))return}catch{}wt(t,"unauthorized-domain")}function ek(t){const e=$c(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!JC.test(n))return!1;if(XC.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tk=new As(3e4,6e4);function Af(){const t=Rt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function nk(t){return new Promise((e,n)=>{var i,s,o;function r(){Af(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Af(),n(xt(t,"network-request-failed"))},timeout:tk.get()})}if((s=(i=Rt().gapi)==null?void 0:i.iframes)!=null&&s.Iframe)e(gapi.iframes.getContext());else if((o=Rt().gapi)!=null&&o.load)r();else{const a=QS("iframefcb");return Rt()[a]=()=>{gapi.load?r():n(xt(t,"network-request-failed"))},g_(`${GS()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Co=null,e})}let Co=null;function rk(t){return Co=Co||nk(t),Co}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ik=new As(5e3,15e3),sk="__/auth/iframe",ok="emulator/auth/iframe",ak={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},lk=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ck(t){const e=t.config;M(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?ld(e,ok):`https://${t.config.authDomain}/${sk}`,r={apiKey:e.apiKey,appName:t.name,v:ci},i=lk.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${li(r).slice(1)}`}async function uk(t){const e=await rk(t),n=Rt().gapi;return M(n,t,"internal-error"),e.open({where:document.body,url:ck(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:ak,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=xt(t,"network-request-failed"),a=Rt().setTimeout(()=>{s(o)},ik.get());function l(){Rt().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dk={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},hk=500,fk=600,pk="_blank",mk="http://localhost";class Of{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function gk(t,e,n,r=hk,i=fk){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l={...dk,width:r.toString(),height:i.toString(),top:s,left:o},c=Fe().toLowerCase();n&&(a=c_(c)?pk:n),a_(c)&&(e=e||mk,l.scrollbars="yes");const u=Object.entries(l).reduce((f,[_,y])=>`${f}${_}=${y},`,"");if(jS(c)&&a!=="_self")return _k(e||"",a),new Of(null);const d=window.open(e||"",a,u);M(d,t,"popup-blocked");try{d.focus()}catch{}return new Of(d)}function _k(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yk="__/auth/handler",vk="emulator/auth/handler",wk=encodeURIComponent("fac");async function Df(t,e,n,r,i,s){M(t.config.authDomain,t,"auth-domain-config-required"),M(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ci,eventId:i};if(e instanceof v_){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Fc(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,d]of Object.entries(s||{}))o[u]=d}if(e instanceof Os){const u=e.getScopes().filter(d=>d!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const l=await t._getAppCheckToken(),c=l?`#${wk}=${encodeURIComponent(l)}`:"";return`${Ek(t)}?${li(a).slice(1)}${c}`}function Ek({config:t}){return t.emulator?ld(t,vk):`https://${t.authDomain}/${yk}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bl="webStorageSupport";class Sk{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=I_,this._completeRedirectFn=KC,this._overrideRedirectResult=$C}async _openPopup(e,n,r,i){var o;Ht((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const s=await Df(e,n,r,$c(),i);return gk(e,s,fd())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Df(e,n,r,$c(),i);return IC(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Ht(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await uk(e),r=new QC(e);return n.register("authEvent",i=>(M(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(bl,{type:bl},i=>{var o;const s=(o=i==null?void 0:i[0])==null?void 0:o[bl];s!==void 0&&n(!!s),wt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=ZC(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return p_()||l_()||ud()}}const Ck=Sk;var Lf="@firebase/auth",bf="1.13.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kk{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){M(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ik(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Tk(t){qr(new er("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;M(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:m_(t)},c=new VS(r,i,s,l);return eC(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),qr(new er("auth-internal",e=>{const n=ui(e.getProvider("auth").getImmediate());return(r=>new kk(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),wn(Lf,bf,Ik(t)),wn(Lf,bf,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nk=5*60,xk=Bg("authIdTokenMaxAge")||Nk;let Mf=null;const Rk=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>xk)return;const i=n==null?void 0:n.token;Mf!==i&&(Mf=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Pk(t=Yg()){const e=od(t,"auth");if(e.isInitialized())return e.getImmediate();const n=ZS(t,{popupRedirectResolver:Ck,persistence:[LC,SC,I_]}),r=Bg("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=Rk(s.toString());_C(n,o,()=>o(n.currentUser)),gC(n,a=>o(a))}}const i=zg("auth");return i&&tC(n,`http://${i}`),n}function Ak(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}HS({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=xt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",Ak().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Tk("Browser");var Ok="firebase",Dk="12.12.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */wn(Ok,Dk,"app");const Ff="@firebase/database",jf="1.1.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let O_="";function Lk(t){O_=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bk{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),pe(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:hs(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mk{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Et(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D_=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new bk(e)}}catch{}return new Mk},$n=D_("localStorage"),Kc=D_("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ur=new id("@firebase/database"),L_=function(){let t=1;return function(){return t++}}(),b_=function(t){const e=cE(t),n=new sE;n.update(e);const r=n.digest();return td.encodeByteArray(r)},Ls=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=Ls.apply(null,r):typeof r=="object"?e+=pe(r):e+=r,e+=" "}return e};let Kn=null,Uf=!0;const Fk=function(t,e){C(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(Ur.logLevel=G.VERBOSE,Kn=Ur.log.bind(Ur),e&&Kc.set("logging_enabled",!0)):typeof t=="function"?Kn=t:(Kn=null,Kc.remove("logging_enabled"))},ke=function(...t){if(Uf===!0&&(Uf=!1,Kn===null&&Kc.get("logging_enabled")===!0&&Fk(!0)),Kn){const e=Ls.apply(null,t);Kn(e)}},bs=function(t){return function(...e){ke(t,...e)}},Gc=function(...t){const e="FIREBASE INTERNAL ERROR: "+Ls(...t);Ur.error(e)},Kt=function(...t){const e=`FIREBASE FATAL ERROR: ${Ls(...t)}`;throw Ur.error(e),new Error(e)},Me=function(...t){const e="FIREBASE WARNING: "+Ls(...t);Ur.warn(e)},jk=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Me("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},md=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},Uk=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Xr="[MIN_NAME]",nr="[MAX_NAME]",cr=function(t,e){if(t===e)return 0;if(t===Xr||e===nr)return-1;if(e===Xr||t===nr)return 1;{const n=zf(t),r=zf(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},zk=function(t,e){return t===e?0:t<e?-1:1},Ii=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+pe(e))},gd=function(t){if(typeof t!="object"||t===null)return pe(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=pe(e[r]),n+=":",n+=gd(t[e[r]]);return n+="}",n},M_=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function Ne(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const F_=function(t){C(!md(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,a,l;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(s%2?1:0),s=Math.floor(s/2);c.push(i?1:0),c.reverse();const u=c.join("");let d="";for(l=0;l<64;l+=8){let f=parseInt(u.substr(l,8),2).toString(16);f.length===1&&(f="0"+f),d=d+f}return d.toLowerCase()},Wk=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Bk=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function $k(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const Vk=new RegExp("^-?(0*)\\d{1,10}$"),Hk=-2147483648,Kk=2147483647,zf=function(t){if(Vk.test(t)){const e=Number(t);if(e>=Hk&&e<=Kk)return e}return null},hi=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Me("Exception was thrown by user callback.",n),e},Math.floor(0))}},Gk=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Hi=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qk{constructor(e,n){this.appCheckProvider=n,this.appName=e.name,ht(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)==null||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){Me(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qk{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(ke("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Me(e)}}class zr{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}zr.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _d="5",j_="v",U_="s",z_="r",W_="f",B_=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,$_="ls",V_="p",Qc="ac",H_="websocket",K_="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G_{constructor(e,n,r,i,s=!1,o="",a=!1,l=!1,c=null){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this.emulatorOptions=c,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=$n.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&$n.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function Yk(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Q_(t,e,n){C(typeof e=="string","typeof type must == string"),C(typeof n=="object","typeof params must == object");let r;if(e===H_)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===K_)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Yk(t)&&(n.ns=t.namespace);const i=[];return Ne(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xk{constructor(){this.counters_={}}incrementCounter(e,n=1){Et(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return W0(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ml={},Fl={};function yd(t){const e=t.toString();return Ml[e]||(Ml[e]=new Xk),Ml[e]}function Jk(t,e){const n=t.toString();return Fl[n]||(Fl[n]=e()),Fl[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zk{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&hi(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wf="start",eI="close",tI="pLPCommand",nI="pRTLPCB",q_="id",Y_="pw",X_="ser",rI="cb",iI="seg",sI="ts",oI="d",aI="dframe",J_=1870,Z_=30,lI=J_-Z_,cI=25e3,uI=3e4;class Rr{constructor(e,n,r,i,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=bs(e),this.stats_=yd(n),this.urlFn=l=>(this.appCheckToken&&(l[Qc]=this.appCheckToken),Q_(n,K_,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new Zk(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(uI)),Uk(()=>{if(this.isClosed_)return;this.scriptTagHolder=new vd((...s)=>{const[o,a,l,c,u]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Wf)this.id=a,this.password=l;else if(o===eI)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[Wf]="t",r[X_]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[rI]=this.scriptTagHolder.uniqueCallbackIdentifier),r[j_]=_d,this.transportSessionId&&(r[U_]=this.transportSessionId),this.lastSessionId&&(r[$_]=this.lastSessionId),this.applicationId&&(r[V_]=this.applicationId),this.appCheckToken&&(r[Qc]=this.appCheckToken),typeof location<"u"&&location.hostname&&B_.test(location.hostname)&&(r[z_]=W_);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Rr.forceAllow_=!0}static forceDisallow(){Rr.forceDisallow_=!0}static isAvailable(){return Rr.forceAllow_?!0:!Rr.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!Wk()&&!Bk()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=pe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=jg(n),i=M_(r,lI);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[aI]="t",r[q_]=e,r[Y_]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=pe(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class vd{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=L_(),window[tI+this.uniqueCallbackIdentifier]=e,window[nI+this.uniqueCallbackIdentifier]=n,this.myIFrame=vd.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){ke("frame writing exception"),a.stack&&ke(a.stack),ke(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||ke("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[q_]=this.myID,e[Y_]=this.myPW,e[X_]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Z_+r.length<=J_;){const o=this.pendingSegs.shift();r=r+"&"+iI+i+"="+o.seg+"&"+sI+i+"="+o.ts+"&"+oI+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(cI)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{ke("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dI=16384,hI=45e3;let ia=null;typeof MozWebSocket<"u"?ia=MozWebSocket:typeof WebSocket<"u"&&(ia=WebSocket);class ft{constructor(e,n,r,i,s,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=bs(this.connId),this.stats_=yd(n),this.connURL=ft.connectionURL_(n,o,a,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[j_]=_d,typeof location<"u"&&location.hostname&&B_.test(location.hostname)&&(o[z_]=W_),n&&(o[U_]=n),r&&(o[$_]=r),i&&(o[Qc]=i),s&&(o[V_]=s),Q_(e,H_,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,$n.set("previous_websocket_failure",!0);try{let r;Vg(),this.mySock=new ia(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){ft.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&ia!==null&&!ft.forceDisallow_}static previouslyFailed(){return $n.isInMemoryStorage||$n.get("previous_websocket_failure")===!0}markConnectionHealthy(){$n.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=hs(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(C(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=pe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=M_(n,dI);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(hI))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}ft.responsesRequiredToBeHealthy=2;ft.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gs{static get ALL_TRANSPORTS(){return[Rr,ft]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const n=ft&&ft.isAvailable();let r=n&&!ft.previouslyFailed();if(e.webSocketOnly&&(n||Me("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[ft];else{const i=this.transports_=[];for(const s of gs.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);gs.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}gs.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fI=6e4,pI=5e3,mI=10*1024,gI=100*1024,jl="t",Bf="d",_I="s",$f="r",yI="e",Vf="o",Hf="a",Kf="n",Gf="p",vI="h";class wI{constructor(e,n,r,i,s,o,a,l,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=bs("c:"+this.id+":"),this.transportManager_=new gs(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Hi(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>gI?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>mI?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(jl in e){const n=e[jl];n===Hf?this.upgradeIfSecondaryHealthy_():n===$f?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Vf&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Ii("t",e),r=Ii("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Gf,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Hf,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Kf,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Ii("t",e),r=Ii("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Ii(jl,e);if(Bf in e){const r=e[Bf];if(n===vI){const i={...r};this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===Kf){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===_I?this.onConnectionShutdown_(r):n===$f?this.onReset_(r):n===yI?Gc("Server Error: "+r):n===Vf?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Gc("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),_d!==r&&Me("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),Hi(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(fI))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Hi(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(pI))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Gf,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&($n.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ey{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ty{constructor(e){this.allowedEvents_=e,this.listeners_={},C(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){C(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sa extends ty{static getInstance(){return new sa}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!rd()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return C(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qf=32,qf=768;class Q{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function H(){return new Q("")}function U(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Tn(t){return t.pieces_.length-t.pieceNum_}function X(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new Q(t.pieces_,e)}function wd(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function EI(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function _s(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function ny(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new Q(e,0)}function ce(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof Q)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new Q(n,0)}function W(t){return t.pieceNum_>=t.pieces_.length}function Le(t,e){const n=U(t),r=U(e);if(n===null)return e;if(n===r)return Le(X(t),X(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function SI(t,e){const n=_s(t,0),r=_s(e,0);for(let i=0;i<n.length&&i<r.length;i++){const s=cr(n[i],r[i]);if(s!==0)return s}return n.length===r.length?0:n.length<r.length?-1:1}function Ed(t,e){if(Tn(t)!==Tn(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function nt(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(Tn(t)>Tn(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class CI{constructor(e,n){this.errorPrefix_=n,this.parts_=_s(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=Ma(this.parts_[r]);ry(this)}}function kI(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Ma(e),ry(t)}function II(t){const e=t.parts_.pop();t.byteLength_-=Ma(e),t.parts_.length>0&&(t.byteLength_-=1)}function ry(t){if(t.byteLength_>qf)throw new Error(t.errorPrefix_+"has a key path longer than "+qf+" bytes ("+t.byteLength_+").");if(t.parts_.length>Qf)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Qf+") or object contains a cycle "+Un(t))}function Un(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sd extends ty{static getInstance(){return new Sd}constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}getInitialEvent(e){return C(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ti=1e3,TI=60*5*1e3,Yf=30*1e3,NI=1.3,xI=3e4,RI="server_kill",Xf=3;class Ut extends ey{constructor(e,n,r,i,s,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Ut.nextPersistentConnectionId_++,this.log_=bs("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Ti,this.maxReconnectDelay_=TI,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!Vg())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Sd.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&sa.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(pe(s)),C(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new ai,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),C(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),C(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const l=a.d,c=a.s;Ut.warnOnListenWarnings_(l,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Et(e,"w")){const r=Jn(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();Me(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||iE(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Yf)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=rE(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),C(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+pe(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Gc("Unrecognized action received from server: "+pe(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){C(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Ti,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Ti,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>xI&&(this.reconnectDelay_=Ti),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*NI)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Ut.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,r())},c=function(d){C(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(d)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,f]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?ke("getToken() completed but was canceled"):(ke("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=f&&f.token,a=new wI(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,_=>{Me(_+" ("+this.repoInfo_.toString()+")"),this.interrupt(RI)},s))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&Me(d),l())}}}interrupt(e){ke("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){ke("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Fc(this.interruptReasons_)&&(this.reconnectDelay_=Ti,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>gd(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new Q(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){ke("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Xf&&(this.reconnectDelay_=Yf,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){ke("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Xf&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+O_.replace(/\./g,"-")]=1,rd()?e["framework.cordova"]=1:$g()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=sa.getInstance().currentlyOnline();return Fc(this.interruptReasons_)&&e}}Ut.nextPersistentConnectionId_=0;Ut.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new z(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wa{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new z(Xr,e),i=new z(Xr,n);return this.compare(r,i)!==0}minPost(){return z.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let so;class iy extends Wa{static get __EMPTY_NODE(){return so}static set __EMPTY_NODE(e){so=e}compare(e,n){return cr(e.name,n.name)}isDefinedOn(e){throw oi("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return z.MIN}maxPost(){return new z(nr,so)}makePost(e,n){return C(typeof e=="string","KeyIndex indexValue must always be a string."),new z(e,so)}toString(){return".key"}}const Wr=new iy;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oo{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class ve{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??ve.RED,this.left=i??Be.EMPTY_NODE,this.right=s??Be.EMPTY_NODE}copy(e,n,r,i,s){return new ve(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Be.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return Be.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,ve.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,ve.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}ve.RED=!0;ve.BLACK=!1;class PI{copy(e,n,r,i,s){return this}insert(e,n,r){return new ve(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Be{constructor(e,n=Be.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Be(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,ve.BLACK,null,null))}remove(e){return new Be(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,ve.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new oo(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new oo(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new oo(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new oo(this.root_,null,this.comparator_,!0,e)}}Be.EMPTY_NODE=new PI;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AI(t,e){return cr(t.name,e.name)}function Cd(t,e){return cr(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qc;function OI(t){qc=t}const sy=function(t){return typeof t=="number"?"number:"+F_(t):"string:"+t},oy=function(t){if(t.isLeafNode()){const e=t.val();C(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Et(e,".sv"),"Priority must be a string or number.")}else C(t===qc||t.isEmpty(),"priority of unexpected type.");C(t===qc||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Jf;class _e{static set __childrenNodeConstructor(e){Jf=e}static get __childrenNodeConstructor(){return Jf}constructor(e,n=_e.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,C(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),oy(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new _e(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:_e.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return W(e)?this:U(e)===".priority"?this.priorityNode_:_e.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:_e.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=U(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(C(r!==".priority"||Tn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,_e.__childrenNodeConstructor.EMPTY_NODE.updateChild(X(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+sy(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=F_(this.value_):e+=this.value_,this.lazyHash_=b_(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===_e.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof _e.__childrenNodeConstructor?-1:(C(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=_e.VALUE_TYPE_ORDER.indexOf(n),s=_e.VALUE_TYPE_ORDER.indexOf(r);return C(i>=0,"Unknown leaf type: "+n),C(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}_e.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ay,ly;function DI(t){ay=t}function LI(t){ly=t}class bI extends Wa{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?cr(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return z.MIN}maxPost(){return new z(nr,new _e("[PRIORITY-POST]",ly))}makePost(e,n){const r=ay(e);return new z(n,new _e("[PRIORITY-POST]",r))}toString(){return".priority"}}const se=new bI;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MI=Math.log(2);class FI{constructor(e){const n=s=>parseInt(Math.log(s)/MI,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const oa=function(t,e,n,r){t.sort(e);const i=function(l,c){const u=c-l;let d,f;if(u===0)return null;if(u===1)return d=t[l],f=n?n(d):d,new ve(f,d.node,ve.BLACK,null,null);{const _=parseInt(u/2,10)+l,y=i(l,_),v=i(_+1,c);return d=t[_],f=n?n(d):d,new ve(f,d.node,ve.BLACK,y,v)}},s=function(l){let c=null,u=null,d=t.length;const f=function(y,v){const S=d-y,m=d;d-=y;const p=i(S+1,m),g=t[S],w=n?n(g):g;_(new ve(w,g.node,v,null,p))},_=function(y){c?(c.left=y,c=y):(u=y,c=y)};for(let y=0;y<l.count;++y){const v=l.nextBitIsOne(),S=Math.pow(2,l.count-(y+1));v?f(S,ve.BLACK):(f(S,ve.BLACK),f(S,ve.RED))}return u},o=new FI(t.length),a=s(o);return new Be(r||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ul;const mr={};class Ft{static get Default(){return C(mr&&se,"ChildrenNode.ts has not been loaded"),Ul=Ul||new Ft({".priority":mr},{".priority":se}),Ul}constructor(e,n){this.indexes_=e,this.indexSet_=n}get(e){const n=Jn(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Be?n:null}hasIndex(e){return Et(this.indexSet_,e.toString())}addIndex(e,n){C(e!==Wr,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(z.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let a;i?a=oa(r,e.getCompare()):a=mr;const l=e.toString(),c={...this.indexSet_};c[l]=e;const u={...this.indexes_};return u[l]=a,new Ft(u,c)}addToIndexes(e,n){const r=Yo(this.indexes_,(i,s)=>{const o=Jn(this.indexSet_,s);if(C(o,"Missing index implementation for "+s),i===mr)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(z.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),oa(a,o.getCompare())}else return mr;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new z(e.name,a))),l.insert(e,e.node)}});return new Ft(r,this.indexSet_)}removeFromIndexes(e,n){const r=Yo(this.indexes_,i=>{if(i===mr)return i;{const s=n.get(e.name);return s?i.remove(new z(e.name,s)):i}});return new Ft(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ni;class L{static get EMPTY_NODE(){return Ni||(Ni=new L(new Be(Cd),null,Ft.Default))}constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&oy(this.priorityNode_),this.children_.isEmpty()&&C(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Ni}updatePriority(e){return this.children_.isEmpty()?this:new L(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Ni:n}}getChild(e){const n=U(e);return n===null?this:this.getImmediateChild(n).getChild(X(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(C(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new z(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?Ni:this.priorityNode_;return new L(i,o,s)}}updateChild(e,n){const r=U(e);if(r===null)return n;{C(U(e)!==".priority"||Tn(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(X(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(se,(o,a)=>{n[o]=a.val(e),r++,s&&L.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+sy(this.getPriority().val())+":"),this.forEachChild(se,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":b_(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new z(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new z(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new z(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,z.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,z.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Ms?-1:0}withIndex(e){if(e===Wr||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new L(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Wr||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(se),i=n.getIterator(se);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Wr?null:this.indexMap_.get(e.toString())}}L.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class jI extends L{constructor(){super(new Be(Cd),L.EMPTY_NODE,Ft.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return L.EMPTY_NODE}isEmpty(){return!1}}const Ms=new jI;Object.defineProperties(z,{MIN:{value:new z(Xr,L.EMPTY_NODE)},MAX:{value:new z(nr,Ms)}});iy.__EMPTY_NODE=L.EMPTY_NODE;_e.__childrenNodeConstructor=L;OI(Ms);LI(Ms);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UI=!0;function de(t,e=null){if(t===null)return L.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),C(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new _e(n,de(e))}if(!(t instanceof Array)&&UI){const n=[];let r=!1;if(Ne(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=de(a);l.isEmpty()||(r=r||!l.getPriority().isEmpty(),n.push(new z(o,l)))}}),n.length===0)return L.EMPTY_NODE;const s=oa(n,AI,o=>o.name,Cd);if(r){const o=oa(n,se.getCompare());return new L(s,de(e),new Ft({".priority":o},{".priority":se}))}else return new L(s,de(e),Ft.Default)}else{let n=L.EMPTY_NODE;return Ne(t,(r,i)=>{if(Et(t,r)&&r.substring(0,1)!=="."){const s=de(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(de(e))}}DI(de);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zI extends Wa{constructor(e){super(),this.indexPath_=e,C(!W(e)&&U(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?cr(e.name,n.name):s}makePost(e,n){const r=de(e),i=L.EMPTY_NODE.updateChild(this.indexPath_,r);return new z(n,i)}maxPost(){const e=L.EMPTY_NODE.updateChild(this.indexPath_,Ms);return new z(nr,e)}toString(){return _s(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WI extends Wa{compare(e,n){const r=e.node.compareTo(n.node);return r===0?cr(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return z.MIN}maxPost(){return z.MAX}makePost(e,n){const r=de(e);return new z(n,r)}toString(){return".value"}}const BI=new WI;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cy(t){return{type:"value",snapshotNode:t}}function Jr(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function ys(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function vs(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function $I(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kd{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){C(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(r.getChild(i))&&a.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(ys(n,a)):C(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Jr(n,r)):o.trackChildChange(vs(n,r,a))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(se,(i,s)=>{n.hasChild(i)||r.trackChildChange(ys(i,s))}),n.isLeafNode()||n.forEachChild(se,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(vs(i,s,o))}else r.trackChildChange(Jr(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?L.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ws{constructor(e){this.indexedFilter_=new kd(e.getIndex()),this.index_=e.getIndex(),this.startPost_=ws.getStartPost_(e),this.endPost_=ws.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new z(n,r))||(r=L.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=L.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(L.EMPTY_NODE);const s=this;return n.forEachChild(se,(o,a)=>{s.matches(new z(o,a))||(i=i.updateImmediateChild(o,L.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VI{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new ws(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new z(n,r))||(r=L.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=L.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=L.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const a=s.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(L.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const a=s.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,L.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const d=this.index_.getCompare();o=(f,_)=>d(_,f)}else o=this.index_.getCompare();const a=e;C(a.numChildren()===this.limit_,"");const l=new z(n,r),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(l);if(a.hasChild(n)){const d=a.getImmediateChild(n);let f=i.getChildAfterChild(this.index_,c,this.reverse_);for(;f!=null&&(f.name===n||a.hasChild(f.name));)f=i.getChildAfterChild(this.index_,f,this.reverse_);const _=f==null?1:o(f,l);if(u&&!r.isEmpty()&&_>=0)return s!=null&&s.trackChildChange(vs(n,r,d)),a.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(ys(n,d));const v=a.updateImmediateChild(n,L.EMPTY_NODE);return f!=null&&this.rangedFilter_.matches(f)?(s!=null&&s.trackChildChange(Jr(f.name,f.node)),v.updateImmediateChild(f.name,f.node)):v}}else return r.isEmpty()?e:u&&o(c,l)>=0?(s!=null&&(s.trackChildChange(ys(c.name,c.node)),s.trackChildChange(Jr(n,r))),a.updateImmediateChild(n,r).updateImmediateChild(c.name,L.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Id{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=se}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return C(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return C(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Xr}hasEnd(){return this.endSet_}getIndexEndValue(){return C(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return C(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:nr}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return C(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===se}copy(){const e=new Id;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function HI(t){return t.loadsAllData()?new kd(t.getIndex()):t.hasLimit()?new VI(t):new ws(t)}function Zf(t){const e={};if(t.isDefault())return e;let n;if(t.index_===se?n="$priority":t.index_===BI?n="$value":t.index_===Wr?n="$key":(C(t.index_ instanceof zI,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=pe(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=pe(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+pe(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=pe(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+pe(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function ep(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==se&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aa extends ey{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(C(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=bs("p:rest:"),this.listens_={}}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=aa.getListenId_(e,r),a={};this.listens_[o]=a;const l=Zf(e._queryParams);this.restRequest_(s+".json",l,(c,u)=>{let d=u;if(c===404&&(d=null,c=null),c===null&&this.onDataUpdate_(s,d,!1,r),Jn(this.listens_,o)===a){let f;c?c===401?f="permission_denied":f="rest_error:"+c:f="ok",i(f,null)}})}unlisten(e,n){const r=aa.getListenId_(e,n);delete this.listens_[r]}get(e){const n=Zf(e._queryParams),r=e._path.toString(),i=new ai;return this.restRequest_(r+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+li(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=hs(a.responseText)}catch{Me("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,l)}else a.status!==401&&a.status!==404&&Me("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KI{constructor(){this.rootNode_=L.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function la(){return{value:null,children:new Map}}function uy(t,e,n){if(W(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=U(e);t.children.has(r)||t.children.set(r,la());const i=t.children.get(r);e=X(e),uy(i,e,n)}}function Yc(t,e,n){t.value!==null?n(e,t.value):GI(t,(r,i)=>{const s=new Q(e.toString()+"/"+r);Yc(i,s,n)})}function GI(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QI{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n={...e};return this.last_&&Ne(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tp=10*1e3,qI=30*1e3,YI=5*60*1e3;class XI{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new QI(e);const r=tp+(qI-tp)*Math.random();Hi(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;Ne(e,(i,s)=>{s>0&&Et(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),Hi(this.reportStats_.bind(this),Math.floor(Math.random()*2*YI))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var mt;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(mt||(mt={}));function Td(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Nd(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function xd(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ca{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=mt.ACK_USER_WRITE,this.source=Td()}operationForChild(e){if(W(this.path)){if(this.affectedTree.value!=null)return C(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new Q(e));return new ca(H(),n,this.revert)}}else return C(U(this.path)===e,"operationForChild called for unrelated child."),new ca(X(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Es{constructor(e,n){this.source=e,this.path=n,this.type=mt.LISTEN_COMPLETE}operationForChild(e){return W(this.path)?new Es(this.source,H()):new Es(this.source,X(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=mt.OVERWRITE}operationForChild(e){return W(this.path)?new rr(this.source,H(),this.snap.getImmediateChild(e)):new rr(this.source,X(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=mt.MERGE}operationForChild(e){if(W(this.path)){const n=this.children.subtree(new Q(e));return n.isEmpty()?null:n.value?new rr(this.source,H(),n.value):new Zr(this.source,H(),n)}else return C(U(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Zr(this.source,X(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(W(e))return this.isFullyInitialized()&&!this.filtered_;const n=U(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JI{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function ZI(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push($I(o.childName,o.snapshotNode))}),xi(t,i,"child_removed",e,r,n),xi(t,i,"child_added",e,r,n),xi(t,i,"child_moved",s,r,n),xi(t,i,"child_changed",e,r,n),xi(t,i,"value",e,r,n),i}function xi(t,e,n,r,i,s){const o=r.filter(a=>a.type===n);o.sort((a,l)=>tT(t,a,l)),o.forEach(a=>{const l=eT(t,a,s);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function eT(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function tT(t,e,n){if(e.childName==null||n.childName==null)throw oi("Should only compare child_ events.");const r=new z(e.childName,e.snapshotNode),i=new z(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ba(t,e){return{eventCache:t,serverCache:e}}function Ki(t,e,n,r){return Ba(new Nn(e,n,r),t.serverCache)}function dy(t,e,n,r){return Ba(t.eventCache,new Nn(e,n,r))}function ua(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function ir(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zl;const nT=()=>(zl||(zl=new Be(zk)),zl);class Y{static fromObject(e){let n=new Y(null);return Ne(e,(r,i)=>{n=n.set(new Q(r),i)}),n}constructor(e,n=nT()){this.value=e,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:H(),value:this.value};if(W(e))return null;{const r=U(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(X(e),n);return s!=null?{path:ce(new Q(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(W(e))return this;{const n=U(e),r=this.children.get(n);return r!==null?r.subtree(X(e)):new Y(null)}}set(e,n){if(W(e))return new Y(n,this.children);{const r=U(e),s=(this.children.get(r)||new Y(null)).set(X(e),n),o=this.children.insert(r,s);return new Y(this.value,o)}}remove(e){if(W(e))return this.children.isEmpty()?new Y(null):new Y(null,this.children);{const n=U(e),r=this.children.get(n);if(r){const i=r.remove(X(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new Y(null):new Y(this.value,s)}else return this}}get(e){if(W(e))return this.value;{const n=U(e),r=this.children.get(n);return r?r.get(X(e)):null}}setTree(e,n){if(W(e))return n;{const r=U(e),s=(this.children.get(r)||new Y(null)).setTree(X(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new Y(this.value,o)}}fold(e){return this.fold_(H(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(ce(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,H(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(W(e))return null;{const s=U(e),o=this.children.get(s);return o?o.findOnPath_(X(e),ce(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,H(),n)}foreachOnPath_(e,n,r){if(W(e))return this;{this.value&&r(n,this.value);const i=U(e),s=this.children.get(i);return s?s.foreachOnPath_(X(e),ce(n,i),r):new Y(null)}}foreach(e){this.foreach_(H(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(ce(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(e){this.writeTree_=e}static empty(){return new yt(new Y(null))}}function Gi(t,e,n){if(W(e))return new yt(new Y(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=Le(i,e);return s=s.updateChild(o,n),new yt(t.writeTree_.set(i,s))}else{const i=new Y(n),s=t.writeTree_.setTree(e,i);return new yt(s)}}}function Xc(t,e,n){let r=t;return Ne(n,(i,s)=>{r=Gi(r,ce(e,i),s)}),r}function np(t,e){if(W(e))return yt.empty();{const n=t.writeTree_.setTree(e,new Y(null));return new yt(n)}}function Jc(t,e){return ur(t,e)!=null}function ur(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Le(n.path,e)):null}function rp(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(se,(r,i)=>{e.push(new z(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new z(r,i.value))}),e}function Sn(t,e){if(W(e))return t;{const n=ur(t,e);return n!=null?new yt(new Y(n)):new yt(t.writeTree_.subtree(e))}}function Zc(t){return t.writeTree_.isEmpty()}function ei(t,e){return hy(H(),t.writeTree_,e)}function hy(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(C(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=hy(ce(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(ce(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $a(t,e){return gy(e,t)}function rT(t,e,n,r,i){C(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=Gi(t.visibleWrites,e,n)),t.lastWriteId=r}function iT(t,e,n,r){C(r>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:r,visible:!0}),t.visibleWrites=Xc(t.visibleWrites,e,n),t.lastWriteId=r}function sT(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function oT(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);C(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&aT(a,r.path)?i=!1:nt(r.path,a.path)&&(s=!0)),o--}if(i){if(s)return lT(t),!0;if(r.snap)t.visibleWrites=np(t.visibleWrites,r.path);else{const a=r.children;Ne(a,l=>{t.visibleWrites=np(t.visibleWrites,ce(r.path,l))})}return!0}else return!1}function aT(t,e){if(t.snap)return nt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&nt(ce(t.path,n),e))return!0;return!1}function lT(t){t.visibleWrites=fy(t.allWrites,cT,H()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function cT(t){return t.visible}function fy(t,e,n){let r=yt.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let a;if(s.snap)nt(n,o)?(a=Le(n,o),r=Gi(r,a,s.snap)):nt(o,n)&&(a=Le(o,n),r=Gi(r,H(),s.snap.getChild(a)));else if(s.children){if(nt(n,o))a=Le(n,o),r=Xc(r,a,s.children);else if(nt(o,n))if(a=Le(o,n),W(a))r=Xc(r,H(),s.children);else{const l=Jn(s.children,U(a));if(l){const c=l.getChild(X(a));r=Gi(r,H(),c)}}}else throw oi("WriteRecord should have .snap or .children")}}return r}function py(t,e,n,r,i){if(!r&&!i){const s=ur(t.visibleWrites,e);if(s!=null)return s;{const o=Sn(t.visibleWrites,e);if(Zc(o))return n;if(n==null&&!Jc(o,H()))return null;{const a=n||L.EMPTY_NODE;return ei(o,a)}}}else{const s=Sn(t.visibleWrites,e);if(!i&&Zc(s))return n;if(!i&&n==null&&!Jc(s,H()))return null;{const o=function(c){return(c.visible||i)&&(!r||!~r.indexOf(c.writeId))&&(nt(c.path,e)||nt(e,c.path))},a=fy(t.allWrites,o,e),l=n||L.EMPTY_NODE;return ei(a,l)}}}function uT(t,e,n){let r=L.EMPTY_NODE;const i=ur(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(se,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=Sn(t.visibleWrites,e);return n.forEachChild(se,(o,a)=>{const l=ei(Sn(s,new Q(o)),a);r=r.updateImmediateChild(o,l)}),rp(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=Sn(t.visibleWrites,e);return rp(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function dT(t,e,n,r,i){C(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=ce(e,n);if(Jc(t.visibleWrites,s))return null;{const o=Sn(t.visibleWrites,s);return Zc(o)?i.getChild(n):ei(o,i.getChild(n))}}function hT(t,e,n,r){const i=ce(e,n),s=ur(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=Sn(t.visibleWrites,i);return ei(o,r.getNode().getImmediateChild(n))}else return null}function fT(t,e){return ur(t.visibleWrites,e)}function pT(t,e,n,r,i,s,o){let a;const l=Sn(t.visibleWrites,e),c=ur(l,H());if(c!=null)a=c;else if(n!=null)a=ei(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],d=o.getCompare(),f=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let _=f.getNext();for(;_&&u.length<i;)d(_,r)!==0&&u.push(_),_=f.getNext();return u}else return[]}function mT(){return{visibleWrites:yt.empty(),allWrites:[],lastWriteId:-1}}function da(t,e,n,r){return py(t.writeTree,t.treePath,e,n,r)}function Rd(t,e){return uT(t.writeTree,t.treePath,e)}function ip(t,e,n,r){return dT(t.writeTree,t.treePath,e,n,r)}function ha(t,e){return fT(t.writeTree,ce(t.treePath,e))}function gT(t,e,n,r,i,s){return pT(t.writeTree,t.treePath,e,n,r,i,s)}function Pd(t,e,n){return hT(t.writeTree,t.treePath,e,n)}function my(t,e){return gy(ce(t.treePath,e),t.writeTree)}function gy(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _T{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;C(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),C(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,vs(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,ys(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,Jr(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,vs(r,e.snapshotNode,i.oldSnap));else throw oi("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yT{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const _y=new yT;class Ad{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new Nn(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Pd(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:ir(this.viewCache_),s=gT(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vT(t){return{filter:t}}function wT(t,e){C(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),C(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function ET(t,e,n,r,i){const s=new _T;let o,a;if(n.type===mt.OVERWRITE){const c=n;c.source.fromUser?o=eu(t,e,c.path,c.snap,r,i,s):(C(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!W(c.path),o=fa(t,e,c.path,c.snap,r,i,a,s))}else if(n.type===mt.MERGE){const c=n;c.source.fromUser?o=CT(t,e,c.path,c.children,r,i,s):(C(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=tu(t,e,c.path,c.children,r,i,a,s))}else if(n.type===mt.ACK_USER_WRITE){const c=n;c.revert?o=TT(t,e,c.path,r,i,s):o=kT(t,e,c.path,c.affectedTree,r,i,s)}else if(n.type===mt.LISTEN_COMPLETE)o=IT(t,e,n.path,r,s);else throw oi("Unknown operation type: "+n.type);const l=s.getChanges();return ST(e,o,l),{viewCache:o,changes:l}}function ST(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=ua(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(cy(ua(e)))}}function yy(t,e,n,r,i,s){const o=e.eventCache;if(ha(r,n)!=null)return e;{let a,l;if(W(n))if(C(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=ir(e),u=c instanceof L?c:L.EMPTY_NODE,d=Rd(r,u);a=t.filter.updateFullNode(e.eventCache.getNode(),d,s)}else{const c=da(r,ir(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,s)}else{const c=U(n);if(c===".priority"){C(Tn(n)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const d=ip(r,n,u,l);d!=null?a=t.filter.updatePriority(u,d):a=o.getNode()}else{const u=X(n);let d;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const f=ip(r,n,o.getNode(),l);f!=null?d=o.getNode().getImmediateChild(c).updateChild(u,f):d=o.getNode().getImmediateChild(c)}else d=Pd(r,c,e.serverCache);d!=null?a=t.filter.updateChild(o.getNode(),c,d,u,i,s):a=o.getNode()}}return Ki(e,a,o.isFullyInitialized()||W(n),t.filter.filtersNodes())}}function fa(t,e,n,r,i,s,o,a){const l=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(W(n))c=u.updateFullNode(l.getNode(),r,null);else if(u.filtersNodes()&&!l.isFiltered()){const _=l.getNode().updateChild(n,r);c=u.updateFullNode(l.getNode(),_,null)}else{const _=U(n);if(!l.isCompleteForPath(n)&&Tn(n)>1)return e;const y=X(n),S=l.getNode().getImmediateChild(_).updateChild(y,r);_===".priority"?c=u.updatePriority(l.getNode(),S):c=u.updateChild(l.getNode(),_,S,y,_y,null)}const d=dy(e,c,l.isFullyInitialized()||W(n),u.filtersNodes()),f=new Ad(i,d,s);return yy(t,d,n,i,f,a)}function eu(t,e,n,r,i,s,o){const a=e.eventCache;let l,c;const u=new Ad(i,e,s);if(W(n))c=t.filter.updateFullNode(e.eventCache.getNode(),r,o),l=Ki(e,c,!0,t.filter.filtersNodes());else{const d=U(n);if(d===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),r),l=Ki(e,c,a.isFullyInitialized(),a.isFiltered());else{const f=X(n),_=a.getNode().getImmediateChild(d);let y;if(W(f))y=r;else{const v=u.getCompleteChild(d);v!=null?wd(f)===".priority"&&v.getChild(ny(f)).isEmpty()?y=v:y=v.updateChild(f,r):y=L.EMPTY_NODE}if(_.equals(y))l=e;else{const v=t.filter.updateChild(a.getNode(),d,y,f,u,o);l=Ki(e,v,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function sp(t,e){return t.eventCache.isCompleteForChild(e)}function CT(t,e,n,r,i,s,o){let a=e;return r.foreach((l,c)=>{const u=ce(n,l);sp(e,U(u))&&(a=eu(t,a,u,c,i,s,o))}),r.foreach((l,c)=>{const u=ce(n,l);sp(e,U(u))||(a=eu(t,a,u,c,i,s,o))}),a}function op(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function tu(t,e,n,r,i,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;W(n)?c=r:c=new Y(null).setTree(n,r);const u=e.serverCache.getNode();return c.children.inorderTraversal((d,f)=>{if(u.hasChild(d)){const _=e.serverCache.getNode().getImmediateChild(d),y=op(t,_,f);l=fa(t,l,new Q(d),y,i,s,o,a)}}),c.children.inorderTraversal((d,f)=>{const _=!e.serverCache.isCompleteForChild(d)&&f.value===null;if(!u.hasChild(d)&&!_){const y=e.serverCache.getNode().getImmediateChild(d),v=op(t,y,f);l=fa(t,l,new Q(d),v,i,s,o,a)}}),l}function kT(t,e,n,r,i,s,o){if(ha(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(r.value!=null){if(W(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return fa(t,e,n,l.getNode().getChild(n),i,s,a,o);if(W(n)){let c=new Y(null);return l.getNode().forEachChild(Wr,(u,d)=>{c=c.set(new Q(u),d)}),tu(t,e,n,c,i,s,a,o)}else return e}else{let c=new Y(null);return r.foreach((u,d)=>{const f=ce(n,u);l.isCompleteForPath(f)&&(c=c.set(u,l.getNode().getChild(f)))}),tu(t,e,n,c,i,s,a,o)}}function IT(t,e,n,r,i){const s=e.serverCache,o=dy(e,s.getNode(),s.isFullyInitialized()||W(n),s.isFiltered());return yy(t,o,n,r,_y,i)}function TT(t,e,n,r,i,s){let o;if(ha(r,n)!=null)return e;{const a=new Ad(r,e,i),l=e.eventCache.getNode();let c;if(W(n)||U(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=da(r,ir(e));else{const d=e.serverCache.getNode();C(d instanceof L,"serverChildren would be complete if leaf node"),u=Rd(r,d)}u=u,c=t.filter.updateFullNode(l,u,s)}else{const u=U(n);let d=Pd(r,u,e.serverCache);d==null&&e.serverCache.isCompleteForChild(u)&&(d=l.getImmediateChild(u)),d!=null?c=t.filter.updateChild(l,u,d,X(n),a,s):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(l,u,L.EMPTY_NODE,X(n),a,s):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=da(r,ir(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,s)))}return o=e.serverCache.isFullyInitialized()||ha(r,H())!=null,Ki(e,c,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NT{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new kd(r.getIndex()),s=HI(r);this.processor_=vT(s);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(L.EMPTY_NODE,o.getNode(),null),c=s.updateFullNode(L.EMPTY_NODE,a.getNode(),null),u=new Nn(l,o.isFullyInitialized(),i.filtersNodes()),d=new Nn(c,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=Ba(d,u),this.eventGenerator_=new JI(this.query_)}get query(){return this.query_}}function xT(t){return t.viewCache_.serverCache.getNode()}function RT(t){return ua(t.viewCache_)}function PT(t,e){const n=ir(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!W(e)&&!n.getImmediateChild(U(e)).isEmpty())?n.getChild(e):null}function ap(t){return t.eventRegistrations_.length===0}function AT(t,e){t.eventRegistrations_.push(e)}function lp(t,e,n){const r=[];if(n){C(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function cp(t,e,n,r){e.type===mt.MERGE&&e.source.queryId!==null&&(C(ir(t.viewCache_),"We should always have a full cache before handling merges"),C(ua(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=ET(t.processor_,i,e,n,r);return wT(t.processor_,s.viewCache),C(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,vy(t,s.changes,s.viewCache.eventCache.getNode(),null)}function OT(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(se,(s,o)=>{r.push(Jr(s,o))}),n.isFullyInitialized()&&r.push(cy(n.getNode())),vy(t,r,n.getNode(),e)}function vy(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return ZI(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let pa;class wy{constructor(){this.views=new Map}}function DT(t){C(!pa,"__referenceConstructor has already been defined"),pa=t}function LT(){return C(pa,"Reference.ts has not been loaded"),pa}function bT(t){return t.views.size===0}function Od(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return C(s!=null,"SyncTree gave us an op for an invalid query."),cp(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(cp(o,e,n,r));return s}}function Ey(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let a=da(n,i?r:null),l=!1;a?l=!0:r instanceof L?(a=Rd(n,r),l=!1):(a=L.EMPTY_NODE,l=!1);const c=Ba(new Nn(a,l,!1),new Nn(r,i,!1));return new NT(e,c)}return o}function MT(t,e,n,r,i,s){const o=Ey(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),AT(o,n),OT(o,n)}function FT(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const a=xn(t);if(i==="default")for(const[l,c]of t.views.entries())o=o.concat(lp(c,n,r)),ap(c)&&(t.views.delete(l),c.query._queryParams.loadsAllData()||s.push(c.query));else{const l=t.views.get(i);l&&(o=o.concat(lp(l,n,r)),ap(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||s.push(l.query)))}return a&&!xn(t)&&s.push(new(LT())(e._repo,e._path)),{removed:s,events:o}}function Sy(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Cn(t,e){let n=null;for(const r of t.views.values())n=n||PT(r,e);return n}function Cy(t,e){if(e._queryParams.loadsAllData())return Va(t);{const r=e._queryIdentifier;return t.views.get(r)}}function ky(t,e){return Cy(t,e)!=null}function xn(t){return Va(t)!=null}function Va(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ma;function jT(t){C(!ma,"__referenceConstructor has already been defined"),ma=t}function UT(){return C(ma,"Reference.ts has not been loaded"),ma}let zT=1;class up{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Y(null),this.pendingWriteTree_=mT(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Dd(t,e,n,r,i){return rT(t.pendingWriteTree_,e,n,r,i),i?fi(t,new rr(Td(),e,n)):[]}function WT(t,e,n,r){iT(t.pendingWriteTree_,e,n,r);const i=Y.fromObject(n);return fi(t,new Zr(Td(),e,i))}function cn(t,e,n=!1){const r=sT(t.pendingWriteTree_,e);if(oT(t.pendingWriteTree_,e)){let s=new Y(null);return r.snap!=null?s=s.set(H(),!0):Ne(r.children,o=>{s=s.set(new Q(o),!0)}),fi(t,new ca(r.path,s,n))}else return[]}function Fs(t,e,n){return fi(t,new rr(Nd(),e,n))}function BT(t,e,n){const r=Y.fromObject(n);return fi(t,new Zr(Nd(),e,r))}function $T(t,e){return fi(t,new Es(Nd(),e))}function VT(t,e,n){const r=Ld(t,n);if(r){const i=bd(r),s=i.path,o=i.queryId,a=Le(s,e),l=new Es(xd(o),a);return Md(t,s,l)}else return[]}function ga(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let a=[];if(o&&(e._queryIdentifier==="default"||ky(o,e))){const l=FT(o,e,n,r);bT(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const c=l.removed;if(a=l.events,!i){const u=c.findIndex(f=>f._queryParams.loadsAllData())!==-1,d=t.syncPointTree_.findOnPath(s,(f,_)=>xn(_));if(u&&!d){const f=t.syncPointTree_.subtree(s);if(!f.isEmpty()){const _=GT(f);for(let y=0;y<_.length;++y){const v=_[y],S=v.query,m=xy(t,v);t.listenProvider_.startListening(Qi(S),Ss(t,S),m.hashFn,m.onComplete)}}}!d&&c.length>0&&!r&&(u?t.listenProvider_.stopListening(Qi(e),null):c.forEach(f=>{const _=t.queryToTagMap.get(Ka(f));t.listenProvider_.stopListening(Qi(f),_)}))}QT(t,c)}return a}function Iy(t,e,n,r){const i=Ld(t,r);if(i!=null){const s=bd(i),o=s.path,a=s.queryId,l=Le(o,e),c=new rr(xd(a),l,n);return Md(t,o,c)}else return[]}function HT(t,e,n,r){const i=Ld(t,r);if(i){const s=bd(i),o=s.path,a=s.queryId,l=Le(o,e),c=Y.fromObject(n),u=new Zr(xd(a),l,c);return Md(t,o,u)}else return[]}function nu(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(f,_)=>{const y=Le(f,i);s=s||Cn(_,y),o=o||xn(_)});let a=t.syncPointTree_.get(i);a?(o=o||xn(a),s=s||Cn(a,H())):(a=new wy,t.syncPointTree_=t.syncPointTree_.set(i,a));let l;s!=null?l=!0:(l=!1,s=L.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((_,y)=>{const v=Cn(y,H());v&&(s=s.updateImmediateChild(_,v))}));const c=ky(a,e);if(!c&&!e._queryParams.loadsAllData()){const f=Ka(e);C(!t.queryToTagMap.has(f),"View does not exist, but we have a tag");const _=qT();t.queryToTagMap.set(f,_),t.tagToQueryMap.set(_,f)}const u=$a(t.pendingWriteTree_,i);let d=MT(a,e,n,u,s,l);if(!c&&!o&&!r){const f=Cy(a,e);d=d.concat(YT(t,e,f))}return d}function Ha(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=Le(o,e),c=Cn(a,l);if(c)return c});return py(i,e,s,n,!0)}function KT(t,e){const n=e._path;let r=null;t.syncPointTree_.foreachOnPath(n,(c,u)=>{const d=Le(c,n);r=r||Cn(u,d)});let i=t.syncPointTree_.get(n);i?r=r||Cn(i,H()):(i=new wy,t.syncPointTree_=t.syncPointTree_.set(n,i));const s=r!=null,o=s?new Nn(r,!0,!1):null,a=$a(t.pendingWriteTree_,e._path),l=Ey(i,e,a,s?o.getNode():L.EMPTY_NODE,s);return RT(l)}function fi(t,e){return Ty(e,t.syncPointTree_,null,$a(t.pendingWriteTree_,H()))}function Ty(t,e,n,r){if(W(t.path))return Ny(t,e,n,r);{const i=e.get(H());n==null&&i!=null&&(n=Cn(i,H()));let s=[];const o=U(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,u=my(r,o);s=s.concat(Ty(a,l,c,u))}return i&&(s=s.concat(Od(i,t,r,n))),s}}function Ny(t,e,n,r){const i=e.get(H());n==null&&i!=null&&(n=Cn(i,H()));let s=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=my(r,o),u=t.operationForChild(o);u&&(s=s.concat(Ny(u,a,l,c)))}),i&&(s=s.concat(Od(i,t,r,n))),s}function xy(t,e){const n=e.query,r=Ss(t,n);return{hashFn:()=>(xT(e)||L.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?VT(t,n._path,r):$T(t,n._path);{const s=$k(i,n);return ga(t,n,null,s)}}}}function Ss(t,e){const n=Ka(e);return t.queryToTagMap.get(n)}function Ka(t){return t._path.toString()+"$"+t._queryIdentifier}function Ld(t,e){return t.tagToQueryMap.get(e)}function bd(t){const e=t.indexOf("$");return C(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new Q(t.substr(0,e))}}function Md(t,e,n){const r=t.syncPointTree_.get(e);C(r,"Missing sync point for query tag that we're tracking");const i=$a(t.pendingWriteTree_,e);return Od(r,n,i,null)}function GT(t){return t.fold((e,n,r)=>{if(n&&xn(n))return[Va(n)];{let i=[];return n&&(i=Sy(n)),Ne(r,(s,o)=>{i=i.concat(o)}),i}})}function Qi(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(UT())(t._repo,t._path):t}function QT(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=Ka(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function qT(){return zT++}function YT(t,e,n){const r=e._path,i=Ss(t,e),s=xy(t,n),o=t.listenProvider_.startListening(Qi(e),i,s.hashFn,s.onComplete),a=t.syncPointTree_.subtree(r);if(i)C(!xn(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,u,d)=>{if(!W(c)&&u&&xn(u))return[Va(u).query];{let f=[];return u&&(f=f.concat(Sy(u).map(_=>_.query))),Ne(d,(_,y)=>{f=f.concat(y)}),f}});for(let c=0;c<l.length;++c){const u=l[c];t.listenProvider_.stopListening(Qi(u),Ss(t,u))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fd{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Fd(n)}node(){return this.node_}}class jd{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=ce(this.path_,e);return new jd(this.syncTree_,n)}node(){return Ha(this.syncTree_,this.path_)}}const XT=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},dp=function(t,e,n){if(!t||typeof t!="object")return t;if(C(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return JT(t[".sv"],e,n);if(typeof t[".sv"]=="object")return ZT(t[".sv"],e);C(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},JT=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:C(!1,"Unexpected server value: "+t)}},ZT=function(t,e,n){t.hasOwnProperty("increment")||C(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&C(!1,"Unexpected increment value: "+r);const i=e.node();if(C(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},Ry=function(t,e,n,r){return zd(e,new jd(n,t),r)},Ud=function(t,e,n){return zd(t,new Fd(e),n)};function zd(t,e,n){const r=t.getPriority().val(),i=dp(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=dp(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new _e(a,de(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new _e(i))),o.forEachChild(se,(a,l)=>{const c=zd(l,e.getImmediateChild(a),n);c!==l&&(s=s.updateImmediateChild(a,c))}),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wd{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function Ga(t,e){let n=e instanceof Q?e:new Q(e),r=t,i=U(n);for(;i!==null;){const s=Jn(r.node.children,i)||{children:{},childCount:0};r=new Wd(i,r,s),n=X(n),i=U(n)}return r}function dr(t){return t.node.value}function Bd(t,e){t.node.value=e,ru(t)}function Py(t){return t.node.childCount>0}function eN(t){return dr(t)===void 0&&!Py(t)}function Qa(t,e){Ne(t.node.children,(n,r)=>{e(new Wd(n,t,r))})}function Ay(t,e,n,r){n&&!r&&e(t),Qa(t,i=>{Ay(i,e,!0,r)}),n&&r&&e(t)}function tN(t,e,n){let r=n?t:t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function js(t){return new Q(t.parent===null?t.name:js(t.parent)+"/"+t.name)}function ru(t){t.parent!==null&&nN(t.parent,t.name,t)}function nN(t,e,n){const r=eN(n),i=Et(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,ru(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,ru(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rN=/[\[\].#$\/\u0000-\u001F\u007F]/,iN=/[\[\].#$\u0000-\u001F\u007F]/,Wl=10*1024*1024,$d=function(t){return typeof t=="string"&&t.length!==0&&!rN.test(t)},Oy=function(t){return typeof t=="string"&&t.length!==0&&!iN.test(t)},sN=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Oy(t)},Dy=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!md(t)||t&&typeof t=="object"&&Et(t,".sv")},Ly=function(t,e,n,r){r&&e===void 0||Us(ba(t,"value"),e,n)},Us=function(t,e,n){const r=n instanceof Q?new CI(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Un(r));if(typeof e=="function")throw new Error(t+"contains a function "+Un(r)+" with contents = "+e.toString());if(md(e))throw new Error(t+"contains "+e.toString()+" "+Un(r));if(typeof e=="string"&&e.length>Wl/3&&Ma(e)>Wl)throw new Error(t+"contains a string greater than "+Wl+" utf8 bytes "+Un(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(Ne(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!$d(o)))throw new Error(t+" contains an invalid key ("+o+") "+Un(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);kI(r,o),Us(t,a,r),II(r)}),i&&s)throw new Error(t+' contains ".value" child '+Un(r)+" in addition to actual children.")}},oN=function(t,e){let n,r;for(n=0;n<e.length;n++){r=e[n];const s=_s(r);for(let o=0;o<s.length;o++)if(!(s[o]===".priority"&&o===s.length-1)){if(!$d(s[o]))throw new Error(t+"contains an invalid key ("+s[o]+") in path "+r.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(SI);let i=null;for(n=0;n<e.length;n++){if(r=e[n],i!==null&&nt(i,r))throw new Error(t+"contains a path "+i.toString()+" that is ancestor of another path "+r.toString());i=r}},aN=function(t,e,n,r){if(r&&e===void 0)return;const i=ba(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const s=[];Ne(e,(o,a)=>{const l=new Q(o);if(Us(i,a,ce(n,l)),wd(l)===".priority"&&!Dy(a))throw new Error(i+"contains an invalid value for '"+l.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");s.push(l)}),oN(i,s)},by=function(t,e,n,r){if(!(r&&n===void 0)&&!Oy(n))throw new Error(ba(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},lN=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),by(t,e,n,r)},Vd=function(t,e){if(U(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},cN=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!$d(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!sN(n))throw new Error(ba(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uN{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function qa(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!Ed(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function My(t,e,n){qa(t,n),Fy(t,r=>Ed(r,e))}function Ye(t,e,n){qa(t,n),Fy(t,r=>nt(r,e)||nt(e,r))}function Fy(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(dN(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function dN(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();Kn&&ke("event: "+n.toString()),hi(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hN="repo_interrupt",fN=25;class pN{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new uN,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=la(),this.transactionQueueTree_=new Wd,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function mN(t,e,n){if(t.stats_=yd(t.repoInfo_),t.forceRestClient_||Gk())t.server_=new aa(t.repoInfo_,(r,i,s,o)=>{hp(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>fp(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{pe(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new Ut(t.repoInfo_,e,(r,i,s,o)=>{hp(t,r,i,s,o)},r=>{fp(t,r)},r=>{gN(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=Jk(t.repoInfo_,()=>new XI(t.stats_,t.server_)),t.infoData_=new KI,t.infoSyncTree_=new up({startListening:(r,i,s,o)=>{let a=[];const l=t.infoData_.getNode(r._path);return l.isEmpty()||(a=Fs(t.infoSyncTree_,r._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Hd(t,"connected",!1),t.serverSyncTree_=new up({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(a,l)=>{const c=o(a,l);Ye(t.eventQueue_,r._path,c)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function jy(t){const n=t.infoData_.getNode(new Q(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function zs(t){return XT({timestamp:jy(t)})}function hp(t,e,n,r,i){t.dataUpdateCount++;const s=new Q(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const l=Yo(n,c=>de(c));o=HT(t.serverSyncTree_,s,l,i)}else{const l=de(n);o=Iy(t.serverSyncTree_,s,l,i)}else if(r){const l=Yo(n,c=>de(c));o=BT(t.serverSyncTree_,s,l)}else{const l=de(n);o=Fs(t.serverSyncTree_,s,l)}let a=s;o.length>0&&(a=ti(t,s)),Ye(t.eventQueue_,a,o)}function fp(t,e){Hd(t,"connected",e),e===!1&&wN(t)}function gN(t,e){Ne(e,(n,r)=>{Hd(t,n,r)})}function Hd(t,e,n){const r=new Q("/.info/"+e),i=de(n);t.infoData_.updateSnapshot(r,i);const s=Fs(t.infoSyncTree_,r,i);Ye(t.eventQueue_,r,s)}function Ya(t){return t.nextWriteId_++}function _N(t,e,n){const r=KT(t.serverSyncTree_,e);return r!=null?Promise.resolve(r):t.server_.get(e).then(i=>{const s=de(i).withIndex(e._queryParams.getIndex());nu(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=Fs(t.serverSyncTree_,e._path,s);else{const a=Ss(t.serverSyncTree_,e);o=Iy(t.serverSyncTree_,e._path,s,a)}return Ye(t.eventQueue_,e._path,o),ga(t.serverSyncTree_,e,n,null,!0),s},i=>(pi(t,"get for query "+pe(e)+" failed: "+i),Promise.reject(new Error(i))))}function yN(t,e,n,r,i){pi(t,"set",{path:e.toString(),value:n,priority:r});const s=zs(t),o=de(n,r),a=Ha(t.serverSyncTree_,e),l=Ud(o,a,s),c=Ya(t),u=Dd(t.serverSyncTree_,e,l,c,!0);qa(t.eventQueue_,u),t.server_.put(e.toString(),o.val(!0),(f,_)=>{const y=f==="ok";y||Me("set at "+e+" failed: "+f);const v=cn(t.serverSyncTree_,c,!y);Ye(t.eventQueue_,e,v),iu(t,i,f,_)});const d=Gd(t,e);ti(t,d),Ye(t.eventQueue_,d,[])}function vN(t,e,n,r){pi(t,"update",{path:e.toString(),value:n});let i=!0;const s=zs(t),o={};if(Ne(n,(a,l)=>{i=!1,o[a]=Ry(ce(e,a),de(l),t.serverSyncTree_,s)}),i)ke("update() called with empty data.  Don't do anything."),iu(t,r,"ok",void 0);else{const a=Ya(t),l=WT(t.serverSyncTree_,e,o,a);qa(t.eventQueue_,l),t.server_.merge(e.toString(),n,(c,u)=>{const d=c==="ok";d||Me("update at "+e+" failed: "+c);const f=cn(t.serverSyncTree_,a,!d),_=f.length>0?ti(t,e):e;Ye(t.eventQueue_,_,f),iu(t,r,c,u)}),Ne(n,c=>{const u=Gd(t,ce(e,c));ti(t,u)}),Ye(t.eventQueue_,e,[])}}function wN(t){pi(t,"onDisconnectEvents");const e=zs(t),n=la();Yc(t.onDisconnect_,H(),(i,s)=>{const o=Ry(i,s,t.serverSyncTree_,e);uy(n,i,o)});let r=[];Yc(n,H(),(i,s)=>{r=r.concat(Fs(t.serverSyncTree_,i,s));const o=Gd(t,i);ti(t,o)}),t.onDisconnect_=la(),Ye(t.eventQueue_,H(),r)}function EN(t,e,n){let r;U(e._path)===".info"?r=nu(t.infoSyncTree_,e,n):r=nu(t.serverSyncTree_,e,n),My(t.eventQueue_,e._path,r)}function pp(t,e,n){let r;U(e._path)===".info"?r=ga(t.infoSyncTree_,e,n):r=ga(t.serverSyncTree_,e,n),My(t.eventQueue_,e._path,r)}function SN(t){t.persistentConnection_&&t.persistentConnection_.interrupt(hN)}function pi(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),ke(n,...e)}function iu(t,e,n,r){e&&hi(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function CN(t,e,n,r,i,s){pi(t,"transaction on "+e);const o={path:e,update:n,onComplete:r,status:null,order:L_(),applyLocally:s,retryCount:0,unwatcher:i,abortReason:null,currentWriteId:null,currentInputSnapshot:null,currentOutputSnapshotRaw:null,currentOutputSnapshotResolved:null},a=Kd(t,e,void 0);o.currentInputSnapshot=a;const l=o.update(a.val());if(l===void 0)o.unwatcher(),o.currentOutputSnapshotRaw=null,o.currentOutputSnapshotResolved=null,o.onComplete&&o.onComplete(null,!1,o.currentInputSnapshot);else{Us("transaction failed: Data returned ",l,o.path),o.status=0;const c=Ga(t.transactionQueueTree_,e),u=dr(c)||[];u.push(o),Bd(c,u);let d;typeof l=="object"&&l!==null&&Et(l,".priority")?(d=Jn(l,".priority"),C(Dy(d),"Invalid priority returned by transaction. Priority must be a valid string, finite number, server value, or null.")):d=(Ha(t.serverSyncTree_,e)||L.EMPTY_NODE).getPriority().val();const f=zs(t),_=de(l,d),y=Ud(_,a,f);o.currentOutputSnapshotRaw=_,o.currentOutputSnapshotResolved=y,o.currentWriteId=Ya(t);const v=Dd(t.serverSyncTree_,e,y,o.currentWriteId,o.applyLocally);Ye(t.eventQueue_,e,v),Xa(t,t.transactionQueueTree_)}}function Kd(t,e,n){return Ha(t.serverSyncTree_,e,n)||L.EMPTY_NODE}function Xa(t,e=t.transactionQueueTree_){if(e||Ja(t,e),dr(e)){const n=zy(t,e);C(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&kN(t,js(e),n)}else Py(e)&&Qa(e,n=>{Xa(t,n)})}function kN(t,e,n){const r=n.map(c=>c.currentWriteId),i=Kd(t,e,r);let s=i;const o=i.hash();for(let c=0;c<n.length;c++){const u=n[c];C(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const d=Le(e,u.path);s=s.updateChild(d,u.currentOutputSnapshotRaw)}const a=s.val(!0),l=e;t.server_.put(l.toString(),a,c=>{pi(t,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const d=[];for(let f=0;f<n.length;f++)n[f].status=2,u=u.concat(cn(t.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&d.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();Ja(t,Ga(t.transactionQueueTree_,e)),Xa(t,t.transactionQueueTree_),Ye(t.eventQueue_,e,u);for(let f=0;f<d.length;f++)hi(d[f])}else{if(c==="datastale")for(let d=0;d<n.length;d++)n[d].status===3?n[d].status=4:n[d].status=0;else{Me("transaction at "+l.toString()+" failed: "+c);for(let d=0;d<n.length;d++)n[d].status=4,n[d].abortReason=c}ti(t,e)}},o)}function ti(t,e){const n=Uy(t,e),r=js(n),i=zy(t,n);return IN(t,i,r),r}function IN(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=Le(n,l.path);let u=!1,d;if(C(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,d=l.abortReason,i=i.concat(cn(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=fN)u=!0,d="maxretry",i=i.concat(cn(t.serverSyncTree_,l.currentWriteId,!0));else{const f=Kd(t,l.path,o);l.currentInputSnapshot=f;const _=e[a].update(f.val());if(_!==void 0){Us("transaction failed: Data returned ",_,l.path);let y=de(_);typeof _=="object"&&_!=null&&Et(_,".priority")||(y=y.updatePriority(f.getPriority()));const S=l.currentWriteId,m=zs(t),p=Ud(y,f,m);l.currentOutputSnapshotRaw=y,l.currentOutputSnapshotResolved=p,l.currentWriteId=Ya(t),o.splice(o.indexOf(S),1),i=i.concat(Dd(t.serverSyncTree_,l.path,p,l.currentWriteId,l.applyLocally)),i=i.concat(cn(t.serverSyncTree_,S,!0))}else u=!0,d="nodata",i=i.concat(cn(t.serverSyncTree_,l.currentWriteId,!0))}Ye(t.eventQueue_,n,i),i=[],u&&(e[a].status=2,function(f){setTimeout(f,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(d==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(d),!1,null))))}Ja(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)hi(r[a]);Xa(t,t.transactionQueueTree_)}function Uy(t,e){let n,r=t.transactionQueueTree_;for(n=U(e);n!==null&&dr(r)===void 0;)r=Ga(r,n),e=X(e),n=U(e);return r}function zy(t,e){const n=[];return Wy(t,e,n),n.sort((r,i)=>r.order-i.order),n}function Wy(t,e,n){const r=dr(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);Qa(e,i=>{Wy(t,i,n)})}function Ja(t,e){const n=dr(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,Bd(e,n.length>0?n:void 0)}Qa(e,r=>{Ja(t,r)})}function Gd(t,e){const n=js(Uy(t,e)),r=Ga(t.transactionQueueTree_,e);return tN(r,i=>{Bl(t,i)}),Bl(t,r),Ay(r,i=>{Bl(t,i)}),n}function Bl(t,e){const n=dr(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(C(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(C(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(cn(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?Bd(e,void 0):n.length=s+1,Ye(t.eventQueue_,js(e),i);for(let o=0;o<r.length;o++)hi(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TN(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function NN(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):Me(`Invalid query segment '${n}' in query '${t}'`)}return e}const mp=function(t,e){const n=xN(t),r=n.namespace;n.domain==="firebase.com"&&Kt(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&Kt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||jk();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new G_(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new Q(n.pathString)}},xN=function(t){let e="",n="",r="",i="",s="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let d=t.indexOf("?");d===-1&&(d=t.length),e=t.substring(0,Math.min(u,d)),u<d&&(i=TN(t.substring(u,d)));const f=NN(t.substring(Math.min(t.length,d)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const _=e.slice(0,c);if(_.toLowerCase()==="localhost")n="localhost";else if(_.split(".").length<=2)n=_;else{const y=e.indexOf(".");r=e.substring(0,y).toLowerCase(),n=e.substring(y+1),s=r}"ns"in f&&(s=f.ns)}return{host:e,port:l,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gp="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",RN=function(){let t=0;const e=[];return function(n){const r=n===t;t=n;let i;const s=new Array(8);for(i=7;i>=0;i--)s[i]=gp.charAt(n%64),n=Math.floor(n/64);C(n===0,"Cannot push at time == 0");let o=s.join("");if(r){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=gp.charAt(e[i]);return C(o.length===20,"nextPushId: Length should be 20."),o}}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class By{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+pe(this.snapshot.exportVal())}}class $y{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vy{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return C(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qd{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return W(this._path)?null:wd(this._path)}get ref(){return new St(this._repo,this._path)}get _queryIdentifier(){const e=ep(this._queryParams),n=gd(e);return n==="{}"?"default":n}get _queryObject(){return ep(this._queryParams)}isEqual(e){if(e=xe(e),!(e instanceof Qd))return!1;const n=this._repo===e._repo,r=Ed(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+EI(this._path)}}class St extends Qd{constructor(e,n){super(e,n,new Id,!1)}get parent(){const e=ny(this._path);return e===null?null:new St(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class sr{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new Q(e),r=ni(this.ref,e);return new sr(this._node.getChild(n),r,se)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new sr(i,ni(this.ref,r),se)))}hasChild(e){const n=new Q(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Ee(t,e){return t=xe(t),t._checkNotDeleted("ref"),e!==void 0?ni(t._root,e):t._root}function ni(t,e){return t=xe(t),U(t._path)===null?lN("child","path",e,!1):by("child","path",e,!1),new St(t._repo,ce(t._path,e))}function Hy(t,e){t=xe(t),Vd("push",t._path),Ly("push",e,t._path,!0);const n=jy(t._repo),r=RN(n),i=ni(t,r),s=ni(t,r);let o;return e!=null?o=Ky(s,e).then(()=>s):o=Promise.resolve(s),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function Ky(t,e){t=xe(t),Vd("set",t._path),Ly("set",e,t._path,!1);const n=new ai;return yN(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function Gy(t,e){aN("update",e,t._path,!1);const n=new ai;return vN(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}function PN(t){t=xe(t);const e=new Vy(()=>{}),n=new Za(e);return _N(t._repo,t,n).then(r=>new sr(r,new St(t._repo,t._path),t._queryParams.getIndex()))}class Za{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new By("value",this,new sr(e.snapshotNode,new St(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new $y(this,e,n):null}matches(e){return e instanceof Za?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class qd{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new $y(this,e,n):null}createEvent(e,n){C(e.childName!=null,"Child events should have a childName.");const r=ni(new St(n._repo,n._path),e.childName),i=n._queryParams.getIndex();return new By(e.type,this,new sr(e.snapshotNode,r,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof qd?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function AN(t,e,n,r,i){let s;if(typeof r=="object"&&(s=void 0,i=r),typeof r=="function"&&(s=r),i&&i.onlyOnce){const l=n,c=(u,d)=>{pp(t._repo,t,a),l(u,d)};c.userCallback=n.userCallback,c.context=n.context,n=c}const o=new Vy(n,s||void 0),a=e==="value"?new Za(o):new qd(e,o);return EN(t._repo,t,a),()=>pp(t._repo,t,a)}function el(t,e,n,r){return AN(t,"value",e,n,r)}DT(St);jT(St);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ON="FIREBASE_DATABASE_EMULATOR_HOST",su={};let DN=!1;function LN(t,e,n,r){const i=e.lastIndexOf(":"),s=e.substring(0,i),o=Ps(s);t.repoInfo_=new G_(e,o,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0,n),r&&(t.authTokenProvider_=r)}function bN(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||Kt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),ke("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=mp(s,i),a=o.repoInfo,l,c;typeof process<"u"&&process.env&&(c=process.env[ON]),c?(l=!0,s=`http://${c}?ns=${a.namespace}`,o=mp(s,i),a=o.repoInfo):l=!o.repoInfo.secure;const u=i&&l?new zr(zr.OWNER):new qk(t.name,t.options,e);cN("Invalid Firebase Database URL",o),W(o.path)||Kt("Database URL must point to the root of a Firebase Database (not including a child path).");const d=FN(a,t,u,new Qk(t,n));return new jN(d,t)}function MN(t,e){const n=su[e];(!n||n[t.key]!==t)&&Kt(`Database ${e}(${t.repoInfo_}) has already been deleted.`),SN(t),delete n[t.key]}function FN(t,e,n,r){let i=su[e.name];i||(i={},su[e.name]=i);let s=i[t.toURLString()];return s&&Kt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new pN(t,DN,n,r),i[t.toURLString()]=s,s}class jN{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(mN(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new St(this._repo,H())),this._rootInternal}_delete(){return this._rootInternal!==null&&(MN(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Kt("Cannot call "+e+" on a deleted database.")}}function UN(t=Yg(),e){const n=od(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=G0("database");r&&zN(n,...r)}return n}function zN(t,e,n,r={}){t=xe(t),t._checkNotDeleted("useEmulator");const i=`${e}:${n}`,s=t._repoInternal;if(t._instanceStarted){if(i===t._repoInternal.repoInfo_.host&&Zn(r,s.repoInfo_.emulatorOptions))return;Kt("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let o;if(s.repoInfo_.nodeAdmin)r.mockUserToken&&Kt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new zr(zr.OWNER);else if(r.mockUserToken){const a=typeof r.mockUserToken=="string"?r.mockUserToken:Q0(r.mockUserToken,t.app.options.projectId);o=new zr(a)}Ps(e)&&Kg(e),LN(s,i,r,o)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WN(t){Lk(ci),qr(new er("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return bN(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),wn(Ff,jf,t),wn(Ff,jf,"esm2020")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BN{constructor(e,n){this.committed=e,this.snapshot=n}toJSON(){return{committed:this.committed,snapshot:this.snapshot.toJSON()}}}function it(t,e,n){if(t=xe(t),Vd("Reference.transaction",t._path),t.key===".length"||t.key===".keys")throw"Reference.transaction failed: "+t.key+" is a read-only object.";const r=(n==null?void 0:n.applyLocally)??!0,i=new ai,s=(a,l,c)=>{let u=null;a?i.reject(a):(u=new sr(c,new St(t._repo,t._path),se),i.resolve(new BN(l,u)))},o=el(t,()=>{});return CN(t._repo,t._path,e,s,o,r),i.promise}Ut.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Ut.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};WN();const $N={apiKey:"AIzaSyBdnQklMDUEURzH2EI2UVMs_l3APwZMgq8",authDomain:"bruncheria-ordering.firebaseapp.com",databaseURL:"https://bruncheria-ordering-default-rtdb.firebaseio.com",projectId:"bruncheria-ordering",storageBucket:"bruncheria-ordering.firebasestorage.app",messagingSenderId:"57223437743",appId:"1:57223437743:web:860461fc6997efd646635a"},Qy=qg($N),$l=Pk(Qy),Se=UN(Qy),st="orders",tl="history",nl="ringers",VN="orderCounters";function HN(t){const e=String((t==null?void 0:t.code)||"").toLowerCase(),n=String((t==null?void 0:t.message)||"").toLowerCase();return e.includes("permission_denied")||e.includes("permission-denied")||n.includes("permission_denied")||n.includes("permission denied")}function _p(t){const e=t.getFullYear(),n=String(t.getMonth()+1).padStart(2,"0"),r=String(t.getDate()).padStart(2,"0");return`${e}-${n}-${r}`}async function KN(t,e){if(!e)throw new Error("Order submission state is required.");if(!e.firebaseKey){const i=Hy(Ee(Se,st));if(!i.key)throw new Error("Could not create an order ID.");e.firebaseKey=i.key}if(!e.orderNumber){const i=new Date,s=Ee(Se,`${VN}/${_p(i)}`);try{const o=await it(s,a=>(Number(a)||100)+1,{applyLocally:!1});if(!o.committed)throw new Error("Could not allocate an order number.");e.orderNumber=o.snapshot.val()}catch(o){if(!HN(o))throw o;e.orderNumber=e.firebaseKey}e.createdAt=i.toISOString()}const n=La(t.cart),r={...t,...n,firebaseKey:e.firebaseKey,orderNumber:e.orderNumber,dateKey:_p(new Date(e.createdAt)),status:"awaiting_confirmation",timestamp:e.createdAt,createdAt:e.createdAt};return await Ky(Ee(Se,`${st}/${e.firebaseKey}`),r),r}async function GN(t,e){const n=Ee(Se,`${st}/${t.firebaseKey}`),r=La(e),i=await it(n,s=>{if(!(!s||s.status!=="awaiting_confirmation")&&(s.editRevision||0)===(t.editRevision||0))return{...s,cart:e,...r,editRevision:(s.editRevision||0)+1,updatedAt:new Date().toISOString()}},{applyLocally:!1});if(!i.committed)throw new Error("This order changed in another staff session. Review the latest version and try again.");return i.snapshot.val()}async function QN(t,e,n){if(!n)throw new Error("Confirm that payment was collected first.");if(!Number.isInteger(e)||e<1||e>20)throw new Error("Choose a buzzer number from 1 to 20.");if(!t.firebaseKey)throw new Error("This order is missing its database ID.");const r=Ee(Se,`${st}/${t.firebaseKey}`),i=Ee(Se,`${nl}/${e}`),s=await it(r,l=>{if(l){if(l.status==="preparing"&&l.buzzerNumber===e)return l;if(l.status==="awaiting_confirmation"&&!(l.confirmationBuzzer&&l.confirmationBuzzer!==e))return{...l,confirmationBuzzer:e}}},{applyLocally:!1}),o=s.snapshot.val();if(!s.committed&&!((o==null?void 0:o.status)==="awaiting_confirmation"&&o.confirmationBuzzer===e)){if((o==null?void 0:o.status)==="preparing"&&o.buzzerNumber===e)return o;throw o!=null&&o.confirmationBuzzer&&o.confirmationBuzzer!==e?new Error(`This order has a pending confirmation with buzzer #${o.confirmationBuzzer}.`):new Error("This order was already confirmed or changed by another staff member.")}if((o==null?void 0:o.status)==="preparing")return o;if(!(await it(i,l=>{if(l==null)return{orderKey:t.firebaseKey,orderNumber:t.orderNumber??t.number};if(l.orderKey===t.firebaseKey)return l},{applyLocally:!1})).committed)throw await yp(r,e),new Error(`Buzzer #${e} is already assigned.`);try{const l=await it(r,u=>{if(u){if(u.status==="awaiting_confirmation"&&u.confirmationBuzzer===e){const{confirmationBuzzer:d,...f}=u;return{...f,status:"preparing",buzzerNumber:e,paymentConfirmedAt:new Date().toISOString()}}if(u.status==="preparing"&&u.buzzerNumber===e)return u}},{applyLocally:!1}),c=l.snapshot.val();if(l.committed||(c==null?void 0:c.status)==="preparing"&&c.buzzerNumber===e)return c;throw await Cs(e,t.firebaseKey,!1),await yp(r,e),new Error("This order was already confirmed or changed by another staff member.")}catch(l){if(l.message.startsWith("This order was already"))throw l;try{const c=(await PN(r)).val();if((c==null?void 0:c.status)==="preparing"&&c.buzzerNumber===e)return c;if((c==null?void 0:c.status)==="awaiting_confirmation"&&c.confirmationBuzzer===e)throw l;await Cs(e,t.firebaseKey,!1)}catch(c){if(c===l)throw l;console.error("Could not verify order confirmation after a network error:",c)}throw l}}async function qN(t){const e=Ee(Se,`${st}/${t.firebaseKey}`);let n;const r=await it(e,i=>{if(!i||!["awaiting_confirmation","preparing","active"].includes(i.status))return;n=i.confirmationBuzzer;const{confirmationBuzzer:s,...o}=i;return{...o,status:"cancelled",cancelledAt:new Date().toISOString()}},{applyLocally:!1});if(!r.committed)throw new Error("This order can no longer be cancelled.");return n&&await Cs(n,t.firebaseKey,!1),r.snapshot.val()}async function yp(t,e){await it(t,n=>{if(!n||n.status!=="awaiting_confirmation"||n.confirmationBuzzer!==e)return;const{confirmationBuzzer:r,...i}=n;return i},{applyLocally:!1})}async function YN(t){if(!t.firebaseKey)throw new Error("This order is missing its database ID.");const e=Ee(Se,`${st}/${t.firebaseKey}`),n=await it(e,r=>{if(!(!r||!["preparing","active"].includes(r.status)))return{...r,status:"ready",readyAt:new Date().toISOString()}},{applyLocally:!1});if(!n.committed)throw new Error("This order is no longer being prepared.");return n.snapshot.val()}async function vp(t){if(!t.historyKey){const l=Ee(Se,`${st}/${t.firebaseKey}`),c=await it(l,u=>{if(!(!u||u.status!=="ready"))return{...u,status:"preparing",readyAt:null}},{applyLocally:!1});if(!c.committed)throw new Error("This order can no longer be restored.");return c.snapshot.val()}const e=t.firebaseKey||Hy(Ee(Se,st)).key,n=t.buzzerNumber??(t.status==="done"?t.number:null);n&&await JN(n,e);const{historyKey:r,completedAt:i,status:s,...o}=t,a={...o,firebaseKey:e,status:"preparing",buzzerNumber:n};try{await Gy(Ee(Se),{[`${st}/${e}`]:a,[`${tl}/${r}`]:null})}catch(l){throw n&&await Cs(n,e),l}return a}async function qy(t){var i;const e=t.historyKey?`${tl}/${t.historyKey}`:`${st}/${t.firebaseKey}`,n=Ee(Se,e),r=await it(n,s=>{if(!(!s||!["ready","done"].includes(s.status)))return{...s,status:"completed",completedAt:new Date().toISOString()}},{applyLocally:!1});if(!r.committed&&((i=r.snapshot.val())==null?void 0:i.status)!=="completed")throw new Error("This order is no longer ready for pickup.");return r.snapshot.val()}async function XN(t){const e=t.buzzerNumber??(t.orderNumber?null:t.number);if(!e)return;await Cs(e,t.firebaseKey);const n=t.historyKey?`${tl}/${t.historyKey}`:`${st}/${t.firebaseKey}`;await Gy(Ee(Se,n),{buzzerReleasedAt:new Date().toISOString()})}async function JN(t,e){const n=await it(Ee(Se,`${nl}/${t}`),r=>{if(r==null)return e?{orderKey:e}:!0;if(e&&r.orderKey===e)return r},{applyLocally:!1});if(!n.committed)throw new Error(`Buzzer #${t} is already assigned.`);return n.snapshot.val()}async function Cs(t,e,n=!0){const r=Ee(Se,`${nl}/${t}`),i=await it(r,s=>{if(s==null||n&&s===!0||e&&s.orderKey===e)return null},{applyLocally:!1});if(!i.committed&&i.snapshot.val()!=null)throw new Error(`Buzzer #${t} is assigned to another order.`)}function Yy(t,e){return el(Ee(Se,st),n=>{const r=n.val()||{},i=Object.values(r).sort((s,o)=>new Date(s.createdAt||s.timestamp)-new Date(o.createdAt||o.timestamp));t(i)},e)}function Xy(t,e){return el(Ee(Se,tl),n=>{const r=n.val()||{},i=Object.values(r).sort((s,o)=>new Date(o.readyAt||o.completedAt||o.createdAt||0)-new Date(s.readyAt||s.completedAt||s.createdAt||0));t(i)},e)}function ZN(t,e){return el(Ee(Se,nl),n=>{const r=n.val()||{};t(new Set(Object.keys(r).map(Number)))},e)}function e1(t){return t.orderNumber??t.number}function t1(t){return new Date(t.createdAt||t.timestamp).toLocaleTimeString("en-US",{hour:"numeric",minute:"2-digit"})}function n1({order:t,onSave:e,onCancel:n,onConfirm:r}){const[i,s]=O.useState(t.cart||[]),[o,a]=O.useState(!1),[l,c]=O.useState(!1),[u,d]=O.useState(!1),[f,_]=O.useState(t.confirmationBuzzer?String(t.confirmationBuzzer):""),[y,v]=O.useState(!1),[S,m]=O.useState(""),p=La(o?i:t.cart||[]);O.useEffect(()=>{_(t.confirmationBuzzer?String(t.confirmationBuzzer):"")},[t.confirmationBuzzer]);function g(k,b){s(D=>D.map((A,Z)=>{if(Z!==k)return A;const ge=A.modifiers||[],Pt=ge.some(Ln=>Ln.id===b.id);return{...A,modifiers:Pt?ge.filter(Ln=>Ln.id!==b.id):[...ge,b]}}))}function w(k,b){s(D=>{if(b<0)return D.filter((ge,Pt)=>Pt!==k);const A=D[k],Z={...A,id:`${A.id}-${Date.now()}-${D.length}`,modifiers:[...A.modifiers||[]]};return[...D,Z]})}async function I(k){v(!0),m("");try{await k()}catch(b){console.error("Staff order action failed:",b),m(b.message||"The order could not be updated. Try again.")}finally{v(!1)}}async function N(){await I(async()=>{await e(i),a(!1)})}async function P(){if(!u){m("Confirm that payment was collected first.");return}const k=Number(f);if(!Number.isInteger(k)||k<1||k>20){m("Enter an available buzzer number from 1 to 20.");return}await I(()=>r(k,u))}return h.jsxs("article",{className:"staff-order-card",children:[h.jsxs("header",{className:"staff-order-header",children:[h.jsxs("div",{children:[h.jsxs("div",{className:"staff-order-number",children:["Order #",e1(t)]}),h.jsxs("div",{className:"staff-order-time",children:["Submitted ",t1(t)]})]}),h.jsx("span",{className:"staff-order-status",children:"Awaiting confirmation"})]}),h.jsxs("div",{className:"staff-order-items",children:[(o?i:t.cart||[]).map((k,b)=>{var D;return h.jsxs("div",{className:"staff-order-item",children:[h.jsxs("div",{className:"staff-order-item-copy",children:[h.jsx("strong",{children:k.item.name_en}),h.jsx("span",{children:k.item.name_es||k.item.name_en}),o?h.jsx("div",{className:"staff-modifier-list",children:(k.item.modifiers||[]).map(A=>{const Z=(k.modifiers||[]).some(ge=>ge.id===A.id);return h.jsxs("button",{type:"button",className:`staff-modifier${Z?" staff-modifier--selected":""}`,"aria-pressed":Z,onClick:()=>g(b,A),children:[A.en,A.price>0&&` +$${A.price.toFixed(2)}`]},A.id)})}):((D=k.modifiers)==null?void 0:D.length)>0&&h.jsx("span",{className:"staff-order-mods",children:k.modifiers.map(A=>A.en).join(", ")})]}),h.jsxs("div",{className:"staff-order-item-actions",children:[h.jsxs("span",{children:["$",(k.item.price+(k.modifiers||[]).reduce((A,Z)=>A+(Z.price||0),0)).toFixed(2)]}),o&&h.jsxs("div",{className:"staff-quantity-actions",children:[h.jsx("button",{type:"button","aria-label":"Remove one",onClick:()=>w(b,-1),children:"−"}),h.jsx("button",{type:"button","aria-label":"Add one",onClick:()=>w(b,1),children:"+"})]})]})]},k.id)}),i.length===0&&o&&h.jsx("div",{className:"staff-order-empty",children:"No items. Cancel this order if needed."})]}),h.jsxs("div",{className:"staff-order-totals",children:[h.jsxs("div",{children:[h.jsx("span",{children:"Subtotal"}),h.jsxs("span",{children:["$",p.subtotal.toFixed(2)]})]}),h.jsxs("div",{children:[h.jsx("span",{children:"Tax (7%)"}),h.jsxs("span",{children:["$",p.tax.toFixed(2)]})]}),h.jsxs("div",{className:"staff-order-grand-total",children:[h.jsx("span",{children:"Total"}),h.jsxs("span",{children:["$",p.total.toFixed(2)]})]})]}),o?h.jsxs("div",{className:"staff-order-actions",children:[h.jsx("button",{className:"staff-action-secondary",disabled:y,onClick:()=>{s(t.cart||[]),a(!1),m("")},children:"Discard changes"}),h.jsx("button",{className:"staff-action-primary",disabled:y||i.length===0,onClick:N,children:y?"Saving…":"Save order"})]}):h.jsxs(h.Fragment,{children:[h.jsxs("div",{className:"staff-confirm-panel",children:[h.jsxs("label",{className:"staff-payment-check",children:[h.jsx("input",{type:"checkbox",checked:u,onChange:k=>d(k.target.checked)}),"Payment collected outside the app"]}),h.jsxs("label",{className:"staff-buzzer-label",children:["Assign physical buzzer (1–20)",h.jsx("input",{type:"number",inputMode:"numeric",min:"1",max:"20",value:f,onChange:k=>_(k.target.value)})]}),h.jsx("button",{className:"staff-action-primary",disabled:y||!u||!i.length,onClick:P,children:y?"Confirming…":"Confirm payment & send to kitchen"})]}),h.jsxs("div",{className:"staff-order-actions",children:[h.jsx("button",{className:"staff-action-secondary",disabled:y,onClick:()=>{d(!1),_(""),a(!0)},children:"Edit order"}),l?h.jsxs("div",{className:"staff-cancel-confirm",children:[h.jsx("span",{children:"Cancel this order?"}),h.jsx("button",{className:"staff-action-danger",disabled:y,onClick:()=>I(n),children:"Yes, cancel"}),h.jsx("button",{className:"staff-action-secondary",disabled:y,onClick:()=>c(!1),children:"Keep order"})]}):h.jsx("button",{className:"staff-action-danger",disabled:y,onClick:()=>c(!0),children:"Cancel order"})]})]}),S&&h.jsx("div",{className:"staff-order-error",role:"alert",children:S})]})}const r1=8e3;function i1(){const[t,e]=O.useState(new Date);return O.useEffect(()=>{const n=setInterval(()=>e(new Date),1e3);return()=>clearInterval(n)},[]),h.jsx("span",{className:"kitchen-time",children:t.toLocaleTimeString("es-MX",{hour:"2-digit",minute:"2-digit"})})}function Jy(t){return t.orderNumber??t.number}function _a(t){return t.buzzerNumber??(t.orderNumber?null:t.number)}function s1(){const[t,e]=O.useState(null),[n,r]=O.useState(!1),[i,s]=O.useState(""),[o,a]=O.useState(""),[l,c]=O.useState(!1),[u,d]=O.useState(""),[f,_]=O.useState("review"),[y,v]=O.useState([]),[S,m]=O.useState([]),[p,g]=O.useState(new Set),[w,I]=O.useState(!0),[N,P]=O.useState(""),[k,b]=O.useState(""),[D,A]=O.useState(null),Z=O.useRef(null);O.useEffect(()=>yC($l,T=>{e(T),r(!0),d("")},T=>{console.error("Firebase auth state failed:",T),d("No se pudo comprobar la sesión. Intenta recargar la página."),r(!0)}),[]),O.useEffect(()=>{if(!t){I(!1),v([]),m([]),g(new Set);return}I(!0),P("");const T=bn=>{console.error("Kitchen data subscription failed:",bn),P("No se pudieron cargar los datos. Verifica las reglas de acceso de Firebase."),I(!1)},$=[Yy(bn=>{v(bn),I(!1)},T),Xy(m,T),ZN(g,T)];return()=>$.forEach(bn=>bn())},[t]);async function ge(T){T.preventDefault(),c(!0),d("");try{await mC($l,i.trim(),o),a("")}catch($){console.error("Kitchen sign-in failed:",$),d($.code==="auth/invalid-credential"?"Correo o contraseña incorrectos.":$.code==="auth/too-many-requests"?"Demasiados intentos. Espera un momento e inténtalo de nuevo.":"No se pudo iniciar sesión. Revisa tu conexión e inténtalo de nuevo.")}finally{c(!1)}}async function Pt(){try{await vC($l)}catch(T){console.error("Kitchen sign-out failed:",T),d("No se pudo cerrar sesión. Inténtalo de nuevo.")}}async function Ln(T){try{const $=await YN(T);Z.current&&clearTimeout(Z.current),A($),Z.current=setTimeout(()=>A(null),r1),b("")}catch($){console.error("Could not mark order ready:",$),b($.message||"No se pudo actualizar la orden.")}}async function mi(){if(D){clearTimeout(Z.current);try{await vp(D),A(null),b("")}catch(T){console.error("Could not undo ready order:",T),b(T.message||"No se pudo restaurar la orden.")}}}async function hr(T){try{await qN(T),b("")}catch($){console.error("Could not cancel order:",$),b($.message||"No se pudo cancelar la orden.")}}async function x(T){try{await vp(T),b("")}catch($){console.error("Could not restore order:",$),b($.message||"No se pudo restaurar la orden.")}}async function F(T){try{await qy(T),b("")}catch($){console.error("Could not mark order as picked up:",$),b($.message||"No se pudo completar la entrega.")}}async function j(T){try{await XN(T),b("")}catch($){console.error("Could not release buzzer:",$),b($.message||"No se pudo liberar el localizador.")}}if(!n)return h.jsx("div",{className:"kitchen-screen",children:h.jsxs("div",{className:"kitchen-empty",children:[h.jsx("div",{className:"kitchen-empty-emoji",children:"⏳"}),h.jsx("div",{children:"Verificando sesión…"})]})});if(!t)return h.jsx("div",{className:"kitchen-screen",children:h.jsxs("form",{className:"kitchen-login",onSubmit:ge,children:[h.jsx("div",{className:"kitchen-login-title",children:"🌮 Bruncheria"}),h.jsx("div",{className:"kitchen-login-subtitle",children:"Inicia sesión para abrir la cocina"}),h.jsx("label",{className:"kitchen-login-label",htmlFor:"kitchen-email",children:"Correo"}),h.jsx("input",{id:"kitchen-email",className:"kitchen-login-input",type:"email",autoComplete:"username",value:i,onChange:T=>s(T.target.value),required:!0}),h.jsx("label",{className:"kitchen-login-label",htmlFor:"kitchen-password",children:"Contraseña"}),h.jsx("input",{id:"kitchen-password",className:"kitchen-login-input",type:"password",autoComplete:"current-password",value:o,onChange:T=>a(T.target.value),required:!0}),u&&h.jsx("div",{className:"kitchen-login-error",role:"alert",children:u}),h.jsx("button",{className:"kitchen-login-button",type:"submit",disabled:l,children:l?"Iniciando sesión…":"Iniciar sesión"})]})});if(w||N)return h.jsx("div",{className:"kitchen-screen",children:h.jsxs("div",{className:"kitchen-empty",children:[h.jsx("div",{className:"kitchen-empty-emoji",children:N?"⚠️":"⏳"}),h.jsx("div",{children:N||"Cargando órdenes…"}),N&&h.jsx("button",{className:"kitchen-login-button",onClick:Pt,children:"Cerrar sesión"})]})});const q=y.filter(T=>T.status==="awaiting_confirmation"),ne=y.filter(T=>T.status==="preparing"||T.status==="active"),fr=[...S,...y.filter(T=>["ready","completed","cancelled"].includes(T.status))],qt=[...new Map(fr.map(T=>[T.historyKey||T.firebaseKey||T.id,T])).values()].sort((T,$)=>new Date($.readyAt||$.completedAt||$.cancelledAt||$.timestamp)-new Date(T.readyAt||T.completedAt||T.cancelledAt||T.timestamp));return h.jsxs("div",{className:"kitchen-screen",children:[h.jsxs("div",{className:"kitchen-header",children:[h.jsx("div",{className:"kitchen-title",children:"🌮 Bruncheria"}),h.jsxs("div",{className:"kitchen-status",children:[h.jsx(i1,{}),h.jsxs("span",{className:"kitchen-badge",children:[q.length," por confirmar · ",ne.length," en cocina"]}),h.jsx("button",{className:"kitchen-signout",onClick:Pt,children:"Salir"})]})]}),h.jsxs("div",{className:"kitchen-tabs",children:[h.jsxs("button",{className:`kitchen-tab${f==="review"?" kitchen-tab--active":""}`,onClick:()=>_("review"),children:["Por confirmar ",q.length>0&&h.jsx("span",{className:"kitchen-tab-count",children:q.length})]}),h.jsxs("button",{className:`kitchen-tab${f==="active"?" kitchen-tab--active":""}`,onClick:()=>_("active"),children:["Cocina ",ne.length>0&&h.jsx("span",{className:"kitchen-tab-count",children:ne.length})]}),h.jsxs("button",{className:`kitchen-tab${f==="history"?" kitchen-tab--active":""}`,onClick:()=>_("history"),children:["Historial ",qt.length>0&&h.jsx("span",{className:"kitchen-tab-count",children:qt.length})]})]}),D&&h.jsxs("div",{className:"kitchen-undo-bar",children:[h.jsxs("span",{children:["Pedido #",Jy(D)," marcado listo"]}),h.jsx("button",{className:"kitchen-undo-btn",onClick:mi,children:"↩ Deshacer"})]}),k&&h.jsx("div",{className:"kitchen-action-error",role:"alert",children:k}),f==="review"&&h.jsx("div",{className:"kitchen-scroll",children:q.length===0?h.jsxs("div",{className:"kitchen-empty",children:[h.jsx("div",{className:"kitchen-empty-emoji",children:"✅"}),h.jsx("div",{children:"Al corriente"}),h.jsx("div",{style:{fontSize:20,fontWeight:500},children:"No hay órdenes por confirmar"})]}):h.jsx("div",{className:"staff-order-grid",children:q.map(T=>h.jsx(n1,{order:T,onSave:$=>GN(T,$),onCancel:()=>hr(T),onConfirm:($,bn)=>QN(T,$,bn)},T.firebaseKey||T.id))})}),f==="active"&&(ne.length===0?h.jsxs("div",{className:"kitchen-empty",children:[h.jsx("div",{className:"kitchen-empty-emoji",children:"✅"}),h.jsx("div",{children:"Al corriente"}),h.jsx("div",{style:{fontSize:20,fontWeight:500},children:"Sin órdenes pendientes"})]}):h.jsx("div",{className:"kitchen-scroll",children:h.jsx("div",{className:"kitchen-grid",children:ne.map(T=>h.jsx(o1,{order:T,onDone:()=>Ln(T),onCancel:()=>hr(T)},T.firebaseKey||T.id))})})),f==="history"&&(qt.length===0?h.jsxs("div",{className:"kitchen-empty",children:[h.jsx("div",{className:"kitchen-empty-emoji",children:"📋"}),h.jsx("div",{children:"Sin historial aún"})]}):h.jsx("div",{className:"kitchen-scroll",children:h.jsx("div",{className:"kitchen-grid",children:qt.map(T=>h.jsx(a1,{order:T,ringerInUse:p.has(_a(T)),onRestore:()=>x(T),onPickup:()=>F(T),onReleaseBuzzer:()=>j(T)},T.historyKey||T.firebaseKey||T.id))})}))]})}function o1({order:t,onDone:e,onCancel:n}){const[r,i]=O.useState(!1),s=new Date(t.createdAt||t.timestamp),o=Math.floor((Date.now()-s.getTime())/6e4),a=o>=10,l=s.toLocaleTimeString("en-US",{hour:"numeric",minute:"2-digit",hour12:!0});return r?h.jsxs("div",{className:"kitchen-order kitchen-order--confirming",children:[h.jsx(ou,{order:t}),h.jsx("div",{className:"kitchen-divider"}),h.jsxs("div",{className:"kitchen-cancel-confirm",children:[h.jsx("div",{className:"kitchen-cancel-icon",children:"🗑️"}),h.jsx("div",{className:"kitchen-cancel-question",children:"¿Cancelar esta orden?"}),h.jsx("div",{className:"kitchen-cancel-hint",children:"Se conservará en el historial"}),h.jsx("button",{className:"kitchen-cancel-yes-btn",onClick:n,children:"Sí, cancelar"}),h.jsx("button",{className:"kitchen-cancel-no-btn",onClick:()=>i(!1),children:"No, regresar"})]})]}):h.jsxs("div",{className:`kitchen-order${a?" kitchen-order--urgent":""}`,children:[h.jsxs("div",{className:"kitchen-order-header",children:[h.jsx("div",{className:"kitchen-order-timestamp",children:l}),h.jsx("button",{className:"kitchen-cancel-trigger",onClick:()=>i(!0),title:"Cancelar orden",children:"✕"})]}),h.jsx(ou,{order:t}),h.jsx("div",{className:"kitchen-divider"}),h.jsx("div",{className:"kitchen-items",children:t.cart.map(c=>{var d;const u=c.item.name_es||c.item.nameEs||c.item.name_en||"";return h.jsxs("div",{className:"kitchen-item",children:[h.jsxs("div",{className:"kitchen-item-name",children:[c.item.emoji&&`${c.item.emoji} `,u]}),((d=c.modifiers)==null?void 0:d.length)>0&&h.jsx("div",{className:"kitchen-item-mods",children:c.modifiers.map(f=>h.jsx("span",{className:"kitchen-mod-tag",children:f.es||f.nameEs||f.en},f.id))})]},c.id)})}),a&&h.jsx("div",{className:"kitchen-order-delayed",children:"Retrasado"}),!a&&o>0&&h.jsxs("div",{style:{fontSize:13,color:"rgba(255,255,255,0.3)",textAlign:"center"},children:["hace ",o,"min"]}),h.jsx("button",{className:"kitchen-done-btn",onClick:e,children:"✓ LISTO"})]})}function ou({order:t}){return h.jsxs("div",{className:"kitchen-identifiers",children:[h.jsxs("div",{children:["Pedido #",Jy(t)]}),_a(t)!=null&&h.jsxs("span",{children:["Localizador #",_a(t)]})]})}function a1({order:t,ringerInUse:e,onRestore:n,onPickup:r,onReleaseBuzzer:i}){const s=t.status==="ready"||t.status==="done",o=t.status==="cancelled"?"Cancelada":s?"Lista":"Entregada",a=_a(t)!=null,l=t.completedAt||t.readyAt||t.cancelledAt||t.completedAt,c=l?new Date(l).toLocaleTimeString("es-MX",{hour:"2-digit",minute:"2-digit"}):"—";return h.jsxs("div",{className:"kitchen-order kitchen-order--history",children:[h.jsx(ou,{order:t}),h.jsx("div",{className:"kitchen-divider"}),h.jsx("div",{className:"kitchen-items",children:(t.cart||[]).map(u=>{const d=u.item.name_es||u.item.nameEs||u.item.name_en||"";return h.jsx("div",{className:"kitchen-item",children:h.jsxs("div",{className:"kitchen-item-name",style:{opacity:.6},children:[u.item.emoji&&`${u.item.emoji} `,d]})},u.id)})}),h.jsxs("div",{className:"kitchen-history-status",children:[o," · ",c]}),s&&h.jsxs(h.Fragment,{children:[h.jsx("button",{className:"kitchen-pickup-btn",onClick:r,children:"✓ Entregado"}),h.jsx("button",{className:"kitchen-restore-btn",onClick:n,children:"↩ Restaurar a cocina"})]}),!s&&a&&e&&h.jsx("button",{className:"kitchen-restore-btn",onClick:i,children:"Liberar localizador devuelto"})]})}const l1=10*60*1e3;function c1(){const[t,e]=O.useState(new Date);return O.useEffect(()=>{const n=setInterval(()=>e(new Date),1e3);return()=>clearInterval(n)},[]),h.jsx("span",{className:"display-time",children:t.toLocaleTimeString("es-MX",{hour:"2-digit",minute:"2-digit"})})}function u1(){const[t,e]=O.useState([]),[n,r]=O.useState([]),[i,s]=O.useState(new Set),[o,a]=O.useState("");O.useEffect(()=>{const v=[Yy(e),Xy(r)];return()=>v.forEach(S=>S())},[]);const l=t.filter(v=>v.status==="preparing"||v.status==="active"),u=[...t.filter(v=>v.status==="ready"),...n.filter(v=>v.status==="done"||v.status==="ready")].filter(v=>{const S=v.readyAt||v.completedAt;return S&&Date.now()-new Date(S).getTime()<l1});function d(v){return v.historyKey||v.firebaseKey||v.id}function f(v){return v.orderNumber??v.number}function _(v){return v.buzzerNumber??(v.orderNumber?null:v.number)}function y(v){const S=d(v);s(m=>new Set(m).add(S)),a(""),setTimeout(async()=>{try{await qy(v)}catch(m){console.error("Could not mark order as picked up:",m),s(p=>{const g=new Set(p);return g.delete(S),g}),a("No se pudo actualizar la orden. Pide ayuda al personal.")}},400)}return h.jsxs("div",{className:"display-screen",children:[h.jsxs("div",{className:"display-header",children:[h.jsxs("div",{className:"display-brand",children:[h.jsx("span",{className:"display-brand-emoji",children:"🌮"}),"Bruncheria Espinoza"]}),h.jsxs("div",{className:"display-header-right",children:[h.jsx("div",{className:"display-tagline",children:"Pick up your order when your number appears below"}),h.jsx(c1,{})]})]}),h.jsxs("div",{className:"display-body",children:[h.jsxs("div",{className:"display-col display-col--preparing",children:[h.jsxs("div",{className:"display-col-header",children:[h.jsx("div",{className:"display-col-icon",children:"🍳"}),h.jsxs("div",{children:[h.jsx("div",{className:"display-col-title",children:"Preparing"}),h.jsx("div",{className:"display-col-sub",children:"Preparando"})]})]}),l.length===0?h.jsxs("div",{className:"display-empty",children:[h.jsx("div",{className:"display-empty-icon",children:"✓"}),h.jsx("div",{children:"All caught up"}),h.jsx("div",{className:"display-empty-sub",children:"Al corriente"})]}):h.jsx("div",{className:"display-numbers",children:l.map(v=>h.jsxs("div",{className:"display-number display-number--preparing",children:[h.jsx("div",{className:"display-number-val",children:f(v)}),_(v)!=null&&h.jsxs("div",{className:"display-number-buzzer",children:["Localizador #",_(v)]}),h.jsx("div",{className:"display-number-items",children:v.cart.map(S=>{const m=S.item.name_en||S.item.name_es||"";return h.jsx("div",{className:"display-number-item",children:m},S.id)})})]},d(v)))})]}),h.jsx("div",{className:"display-divider"}),h.jsxs("div",{className:"display-col display-col--ready",children:[h.jsxs("div",{className:"display-col-header",children:[h.jsx("div",{className:"display-col-icon",children:"✅"}),h.jsxs("div",{children:[h.jsx("div",{className:"display-col-title",children:"Ready!"}),h.jsx("div",{className:"display-col-sub",children:"¡Listo!"})]})]}),u.length===0?h.jsxs("div",{className:"display-empty",children:[h.jsx("div",{className:"display-empty-icon",children:"⏳"}),h.jsx("div",{children:"Coming soon"}),h.jsx("div",{className:"display-empty-sub",children:"Pronto"})]}):h.jsx("div",{className:"display-numbers",children:u.map(v=>h.jsxs("div",{className:`display-number display-number--ready${i.has(d(v))?" display-number--dismissing":""}`,children:[h.jsx("div",{className:"display-number-val",children:f(v)}),_(v)!=null&&h.jsxs("div",{className:"display-number-buzzer",children:["Localizador #",_(v)]}),h.jsx("div",{className:"display-number-ready-label",children:"Pick up now · Recoge ahora"}),h.jsx("button",{className:"display-pickup-btn",onClick:()=>y(v),children:"✓ Recogido"})]},d(v)))})]})]}),h.jsx("div",{className:"display-footer",children:o||"💳 Pay at the window · Pague en la ventana"})]})}const wp="https://docs.google.com/spreadsheets/d/e/2PACX-1vThIbNlg4o0feIEFJ9nPwmcwCg13YvId2COr_rbjMUYfphhoVcOjTtw-Uqv_SnRE_VVGMbkDqpNC4tm/pub?output=csv";function Ep(t){const e=[];let n="",r=!1;for(let i=0;i<t.length;i++){const s=t[i];s==='"'?r&&t[i+1]==='"'?(n+='"',i++):r=!r:s===","&&!r?(e.push(n),n=""):n+=s}return e.push(n),e}function d1(t){const e=t.trim().split(/\r?\n/).filter(r=>r.trim());if(e.length<2)return[];const n=Ep(e[0]).map(r=>r.trim());return e.slice(1).map(r=>{const i=Ep(r);return Object.fromEntries(n.map((s,o)=>[s,(i[o]??"").trim()]))})}function h1(t){const e=new Map;for(const n of t){const{id:r,name_en:i,name_es:s,category:o,price:a,enabled:l,modifier_group:c,modifier_en:u,modifier_es:d,modifier_price:f}=n;if(!r||(l==null?void 0:l.toUpperCase())!=="TRUE")continue;const _=parseFloat(a)||0;if(!e.has(r))e.set(r,{id:r,name_en:i||r,name_es:s||i||r,category:(o||"food").toLowerCase(),price:_,modifiers:[]});else{const y=e.get(r);_>y.price&&(y.price=_)}if(c&&u){const y=e.get(r),v=parseFloat(f)||0,S=`${r}::${c}::${u}`;y.modifiers.find(m=>m.id===S)||y.modifiers.push({id:S,group:c.toLowerCase(),en:u,es:d||u,price:v})}}return[...e.values()]}async function f1(){if(wp.startsWith("PASTE_"))throw new Error("MENU_CSV_URL not configured");const t=await fetch(wp);if(!t.ok)throw new Error(`HTTP ${t.status}`);const e=await t.text(),n=d1(e),r=h1(n);if(!r.length)throw new Error("Empty menu");return r}const p1={remove:[{en:"No Onion",es:"Sin cebolla",price:0},{en:"No Cilantro",es:"Sin cilantro",price:0},{en:"No Beans",es:"Sin frijoles",price:0},{en:"No Avocado",es:"Sin aguacate",price:0},{en:"No Salsa",es:"Sin salsa",price:0},{en:"No Cheese",es:"Sin queso",price:0},{en:"No Egg",es:"Sin huevo",price:0},{en:"No Tomato",es:"Sin tomate",price:0}],add:[{en:"Extra Meat",es:"Más carne",price:2},{en:"Add Egg",es:"Con huevo",price:1.5},{en:"Extra Avocado",es:"Más aguacate",price:1},{en:"Extra Cheese",es:"Más queso",price:.5},{en:"Extra Salsa",es:"Más salsa",price:0}]};function m1(t,e){return e.flatMap(n=>p1[n].map(r=>({id:`${t}::${n}::${r.en}`,group:n,en:r.en,es:r.es,price:r.price})))}const g1=[{id:"avocado-toast",name_en:"Avocado Toast",name_es:"Pan con Aguacate",price:8.5,emoji:"🥑",subcategory:"Brunch",mods:["remove","add"]},{id:"huevos-rancheros",name_en:"Huevos Rancheros",name_es:"Huevos Rancheros",price:10.5,emoji:"🍳",subcategory:"Brunch",mods:["remove","add"]},{id:"croissant-sandwich",name_en:"Croissant Sandwich",name_es:"Sándwich de Croissant",price:6.5,emoji:"🥐",subcategory:"Brunch",mods:["remove","add"]},{id:"burrito-ranchero",name_en:"Burrito Ranchero",name_es:"Burrito Ranchero",price:11,emoji:"🌯",subcategory:"Burritos",mods:["remove","add"]},{id:"burrito-asada",name_en:"Burrito Asada",name_es:"Burrito de Asada",price:14,emoji:"🥩",subcategory:"Burritos",mods:["remove","add"]},{id:"chilaquiles-burrito",name_en:"Chilaquiles Burrito",name_es:"Burrito de Chilaquiles",price:13,emoji:"🌮",subcategory:"Burritos",mods:["remove","add"]},{id:"chori-burrito",name_en:"Chori Burrito",name_es:"Burrito de Chorizo",price:12,emoji:"🌯",subcategory:"Burritos",mods:["remove","add"]},{id:"chorizo-bowl",name_en:"Chorizo Bowl",name_es:"Bowl de Chorizo",price:13,emoji:"🥣",subcategory:"Burritos",mods:["remove","add"]},{id:"concha-french-toast",name_en:"Concha French Toast",name_es:"Pan Francés de Concha",price:8,emoji:"🍞",subcategory:"Sweet",mods:[]},{id:"strawberry-crepes",name_en:"Strawberry Crepes",name_es:"Crepas de Fresa",price:8,emoji:"🥞",subcategory:"Sweet",mods:[]},{id:"apple-cinnamon-crepe",name_en:"Apple Cinnamon Crepe",name_es:"Crepa de Manzana y Canela",price:6.99,emoji:"🍎",subcategory:"Sweet",mods:[]},{id:"churro-muffin",name_en:"Churro Muffin",name_es:"Muffin de Churro",price:3.5,emoji:"🧁",subcategory:"Sweet",mods:[]}],_1=[{id:"cafe-de-olla",name_en:"Café de Olla",name_es:"Café de Olla",price:3,emoji:"☕"},{id:"jamaica",name_en:"Jamaica",name_es:"Agua de Jamaica",price:4,emoji:"🌺"},{id:"water-bottle",name_en:"Water",name_es:"Agua",price:1,emoji:"💧"}];function y1(){return[...g1.map(t=>({id:t.id,name_en:t.name_en,name_es:t.name_es,category:"food",subcategory:t.subcategory,emoji:t.emoji,price:t.price,modifiers:m1(t.id,t.mods)})),..._1.map(t=>({id:t.id,name_en:t.name_en,name_es:t.name_es,category:"drink",emoji:t.emoji,price:t.price,modifiers:[]}))]}function v1(){const[t,e]=O.useState(window.location.hash),n=new URLSearchParams(window.location.search).get("view"),r=window.location.pathname.endsWith("/kitchen")||t==="#kitchen"||n==="kitchen",i=window.location.pathname.endsWith("/display")||t==="#display"||n==="display",[s,o]=O.useState([]),[a,l]=O.useState("loading"),[c,u]=O.useState("welcome"),[d,f]=O.useState([]),[_,y]=O.useState(null),[v,S]=O.useState(null),[m,p]=O.useState(!1),[g,w]=O.useState(""),I=O.useRef(!1),N=O.useRef(null);O.useEffect(()=>{const A=()=>e(window.location.hash);return window.addEventListener("hashchange",A),()=>window.removeEventListener("hashchange",A)},[]),O.useEffect(()=>{let A=!1;return f1().then(Z=>{A||(o(Z),l("sheets"))}).catch(()=>{A||(o(y1()),l("fallback"))}),()=>{A=!0}},[]);function P(A){S(A),setTimeout(()=>S(null),1600)}function k(){u("welcome"),f([]),y(null),w(""),N.current=null}function b(A,Z){f(ge=>[...ge,{id:Date.now(),item:A,modifiers:Z}]),P(`${A.name_en} added`)}async function D(){if(!(I.current||!d.length)){I.current=!0,p(!0),w(""),N.current||(N.current={});try{const A=await KN({cart:[...d]},N.current);y(A),u("confirmation")}catch(A){console.error("Order submission failed:",A);const Z=typeof(A==null?void 0:A.code)=="string"?A.code:"unknown",ge=typeof(A==null?void 0:A.message)=="string"?A.message.replace(/https?:\/\/\S+/g,"[Firebase endpoint]").slice(0,180):"No error details returned.";w(`Order error [${Z}]: ${ge}`)}finally{I.current=!1,p(!1)}}}return O.useEffect(()=>{if(c!=="confirmation")return;const A=setTimeout(k,6e4);return()=>clearTimeout(A)},[c,_]),r?h.jsx(s1,{}):i?h.jsx(u1,{}):h.jsxs("div",{className:"app",children:[c==="welcome"&&h.jsx(x0,{onStart:()=>u("menu"),menuLoading:a==="loading"}),c==="menu"&&h.jsx(O0,{cart:d,menuItems:s,menuSource:a,onAddItem:b,onCheckout:()=>u("review"),onBack:k}),c==="review"&&h.jsx(M0,{cart:d,submitting:m,submitError:g,orderLocked:!!N.current,onConfirm:D,onBack:()=>u("menu")}),c==="confirmation"&&_&&h.jsx(F0,{order:_,onDone:k}),v&&h.jsxs("div",{className:"toast",children:["✓ ",v]})]})}class w1 extends Op.Component{constructor(){super(...arguments);Yd(this,"state",{error:null})}static getDerivedStateFromError(n){return{error:n}}componentDidCatch(n){console.error("App render failed:",n)}render(){return this.state.error?h.jsxs("main",{style:{minHeight:"100dvh",display:"grid",placeContent:"center",gap:16,padding:24,color:"#111",background:"#FDCC14",fontFamily:"sans-serif",textAlign:"center"},children:[h.jsx("h1",{children:"The kitchen screen couldn’t load."}),h.jsx("p",{children:"Please refresh this page or return to the ordering screen."}),h.jsx("a",{href:"/bruncheria-espinoza/",style:{color:"#111",fontWeight:700},children:"Return to ordering"})]}):this.props.children}}Vl.createRoot(document.getElementById("root")).render(h.jsx(Op.StrictMode,{children:h.jsx(w1,{children:h.jsx(v1,{})})}));
