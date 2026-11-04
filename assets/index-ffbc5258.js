(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function jy(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var sp={exports:{}},sl={},op={exports:{}},U={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var us=Symbol.for("react.element"),Uy=Symbol.for("react.portal"),zy=Symbol.for("react.fragment"),Wy=Symbol.for("react.strict_mode"),By=Symbol.for("react.profiler"),Vy=Symbol.for("react.provider"),Hy=Symbol.for("react.context"),$y=Symbol.for("react.forward_ref"),Ky=Symbol.for("react.suspense"),Gy=Symbol.for("react.memo"),qy=Symbol.for("react.lazy"),Dd=Symbol.iterator;function Qy(t){return t===null||typeof t!="object"?null:(t=Dd&&t[Dd]||t["@@iterator"],typeof t=="function"?t:null)}var lp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ap=Object.assign,cp={};function Vr(t,e,n){this.props=t,this.context=e,this.refs=cp,this.updater=n||lp}Vr.prototype.isReactComponent={};Vr.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Vr.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function up(){}up.prototype=Vr.prototype;function zc(t,e,n){this.props=t,this.context=e,this.refs=cp,this.updater=n||lp}var Wc=zc.prototype=new up;Wc.constructor=zc;ap(Wc,Vr.prototype);Wc.isPureReactComponent=!0;var Ld=Array.isArray,dp=Object.prototype.hasOwnProperty,Bc={current:null},hp={key:!0,ref:!0,__self:!0,__source:!0};function fp(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)dp.call(e,r)&&!hp.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var a=Array(l),c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:us,type:t,key:s,ref:o,props:i,_owner:Bc.current}}function Yy(t,e){return{$$typeof:us,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Vc(t){return typeof t=="object"&&t!==null&&t.$$typeof===us}function Xy(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Md=/\/+/g;function jl(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Xy(""+t.key):e.toString(36)}function Ys(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case us:case Uy:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+jl(o,0):r,Ld(i)?(n="",t!=null&&(n=t.replace(Md,"$&/")+"/"),Ys(i,e,n,"",function(c){return c})):i!=null&&(Vc(i)&&(i=Yy(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Md,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Ld(t))for(var l=0;l<t.length;l++){s=t[l];var a=r+jl(s,l);o+=Ys(s,e,n,a,i)}else if(a=Qy(t),typeof a=="function")for(t=a.call(t),l=0;!(s=t.next()).done;)s=s.value,a=r+jl(s,l++),o+=Ys(s,e,n,a,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ps(t,e,n){if(t==null)return t;var r=[],i=0;return Ys(t,r,"","",function(s){return e.call(n,s,i++)}),r}function Jy(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Ne={current:null},Xs={transition:null},Zy={ReactCurrentDispatcher:Ne,ReactCurrentBatchConfig:Xs,ReactCurrentOwner:Bc};function pp(){throw Error("act(...) is not supported in production builds of React.")}U.Children={map:Ps,forEach:function(t,e,n){Ps(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ps(t,function(){e++}),e},toArray:function(t){return Ps(t,function(e){return e})||[]},only:function(t){if(!Vc(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};U.Component=Vr;U.Fragment=zy;U.Profiler=By;U.PureComponent=zc;U.StrictMode=Wy;U.Suspense=Ky;U.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Zy;U.act=pp;U.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=ap({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Bc.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(a in e)dp.call(e,a)&&!hp.hasOwnProperty(a)&&(r[a]=e[a]===void 0&&l!==void 0?l[a]:e[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){l=Array(a);for(var c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:us,type:t.type,key:i,ref:s,props:r,_owner:o}};U.createContext=function(t){return t={$$typeof:Hy,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Vy,_context:t},t.Consumer=t};U.createElement=fp;U.createFactory=function(t){var e=fp.bind(null,t);return e.type=t,e};U.createRef=function(){return{current:null}};U.forwardRef=function(t){return{$$typeof:$y,render:t}};U.isValidElement=Vc;U.lazy=function(t){return{$$typeof:qy,_payload:{_status:-1,_result:t},_init:Jy}};U.memo=function(t,e){return{$$typeof:Gy,type:t,compare:e===void 0?null:e}};U.startTransition=function(t){var e=Xs.transition;Xs.transition={};try{t()}finally{Xs.transition=e}};U.unstable_act=pp;U.useCallback=function(t,e){return Ne.current.useCallback(t,e)};U.useContext=function(t){return Ne.current.useContext(t)};U.useDebugValue=function(){};U.useDeferredValue=function(t){return Ne.current.useDeferredValue(t)};U.useEffect=function(t,e){return Ne.current.useEffect(t,e)};U.useId=function(){return Ne.current.useId()};U.useImperativeHandle=function(t,e,n){return Ne.current.useImperativeHandle(t,e,n)};U.useInsertionEffect=function(t,e){return Ne.current.useInsertionEffect(t,e)};U.useLayoutEffect=function(t,e){return Ne.current.useLayoutEffect(t,e)};U.useMemo=function(t,e){return Ne.current.useMemo(t,e)};U.useReducer=function(t,e,n){return Ne.current.useReducer(t,e,n)};U.useRef=function(t){return Ne.current.useRef(t)};U.useState=function(t){return Ne.current.useState(t)};U.useSyncExternalStore=function(t,e,n){return Ne.current.useSyncExternalStore(t,e,n)};U.useTransition=function(){return Ne.current.useTransition()};U.version="18.3.1";op.exports=U;var L=op.exports;const ev=jy(L);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tv=L,nv=Symbol.for("react.element"),rv=Symbol.for("react.fragment"),iv=Object.prototype.hasOwnProperty,sv=tv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,ov={key:!0,ref:!0,__self:!0,__source:!0};function mp(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)iv.call(e,r)&&!ov.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:nv,type:t,key:s,ref:o,props:i,_owner:sv.current}}sl.Fragment=rv;sl.jsx=mp;sl.jsxs=mp;sp.exports=sl;var f=sp.exports,ka={},gp={exports:{}},He={},_p={exports:{}},yp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(w,P){var D=w.length;w.push(P);e:for(;0<D;){var J=D-1>>>1,ce=w[J];if(0<i(ce,P))w[J]=P,w[D]=ce,D=J;else break e}}function n(w){return w.length===0?null:w[0]}function r(w){if(w.length===0)return null;var P=w[0],D=w.pop();if(D!==P){w[0]=D;e:for(var J=0,ce=w.length,Rs=ce>>>1;J<Rs;){var In=2*(J+1)-1,Fl=w[In],kn=In+1,xs=w[kn];if(0>i(Fl,D))kn<ce&&0>i(xs,Fl)?(w[J]=xs,w[kn]=D,J=kn):(w[J]=Fl,w[In]=D,J=In);else if(kn<ce&&0>i(xs,D))w[J]=xs,w[kn]=D,J=kn;else break e}}return P}function i(w,P){var D=w.sortIndex-P.sortIndex;return D!==0?D:w.id-P.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var a=[],c=[],d=1,u=null,h=3,_=!1,y=!1,v=!1,I=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(w){for(var P=n(c);P!==null;){if(P.callback===null)r(c);else if(P.startTime<=w)r(c),P.sortIndex=P.expirationTime,e(a,P);else break;P=n(c)}}function E(w){if(v=!1,g(w),!y)if(n(a)!==null)y=!0,ti(k);else{var P=n(c);P!==null&&ni(E,P.startTime-w)}}function k(w,P){y=!1,v&&(v=!1,m(x),x=-1),_=!0;var D=h;try{for(g(P),u=n(a);u!==null&&(!(u.expirationTime>P)||w&&!Ue());){var J=u.callback;if(typeof J=="function"){u.callback=null,h=u.priorityLevel;var ce=J(u.expirationTime<=P);P=t.unstable_now(),typeof ce=="function"?u.callback=ce:u===n(a)&&r(a),g(P)}else r(a);u=n(a)}if(u!==null)var Rs=!0;else{var In=n(c);In!==null&&ni(E,In.startTime-P),Rs=!1}return Rs}finally{u=null,h=D,_=!1}}var N=!1,R=null,x=-1,G=5,M=-1;function Ue(){return!(t.unstable_now()-M<G)}function Wt(){if(R!==null){var w=t.unstable_now();M=w;var P=!0;try{P=R(!0,w)}finally{P?Cn():(N=!1,R=null)}}else N=!1}var Cn;if(typeof p=="function")Cn=function(){p(Wt)};else if(typeof MessageChannel<"u"){var Ns=new MessageChannel,bl=Ns.port2;Ns.port1.onmessage=Wt,Cn=function(){bl.postMessage(null)}}else Cn=function(){I(Wt,0)};function ti(w){R=w,N||(N=!0,Cn())}function ni(w,P){x=I(function(){w(t.unstable_now())},P)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(w){w.callback=null},t.unstable_continueExecution=function(){y||_||(y=!0,ti(k))},t.unstable_forceFrameRate=function(w){0>w||125<w?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):G=0<w?Math.floor(1e3/w):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(a)},t.unstable_next=function(w){switch(h){case 1:case 2:case 3:var P=3;break;default:P=h}var D=h;h=P;try{return w()}finally{h=D}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(w,P){switch(w){case 1:case 2:case 3:case 4:case 5:break;default:w=3}var D=h;h=w;try{return P()}finally{h=D}},t.unstable_scheduleCallback=function(w,P,D){var J=t.unstable_now();switch(typeof D=="object"&&D!==null?(D=D.delay,D=typeof D=="number"&&0<D?J+D:J):D=J,w){case 1:var ce=-1;break;case 2:ce=250;break;case 5:ce=1073741823;break;case 4:ce=1e4;break;default:ce=5e3}return ce=D+ce,w={id:d++,callback:P,priorityLevel:w,startTime:D,expirationTime:ce,sortIndex:-1},D>J?(w.sortIndex=D,e(c,w),n(a)===null&&w===n(c)&&(v?(m(x),x=-1):v=!0,ni(E,D-J))):(w.sortIndex=ce,e(a,w),y||_||(y=!0,ti(k))),w},t.unstable_shouldYield=Ue,t.unstable_wrapCallback=function(w){var P=h;return function(){var D=h;h=P;try{return w.apply(this,arguments)}finally{h=D}}}})(yp);_p.exports=yp;var lv=_p.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var av=L,Ve=lv;function S(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var vp=new Set,bi={};function Yn(t,e){xr(t,e),xr(t+"Capture",e)}function xr(t,e){for(bi[t]=e,t=0;t<e.length;t++)vp.add(e[t])}var Pt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ta=Object.prototype.hasOwnProperty,cv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,bd={},Fd={};function uv(t){return Ta.call(Fd,t)?!0:Ta.call(bd,t)?!1:cv.test(t)?Fd[t]=!0:(bd[t]=!0,!1)}function dv(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function hv(t,e,n,r){if(e===null||typeof e>"u"||dv(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Re(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var ye={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){ye[t]=new Re(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];ye[e]=new Re(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){ye[t]=new Re(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){ye[t]=new Re(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){ye[t]=new Re(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){ye[t]=new Re(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){ye[t]=new Re(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){ye[t]=new Re(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){ye[t]=new Re(t,5,!1,t.toLowerCase(),null,!1,!1)});var Hc=/[\-:]([a-z])/g;function $c(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Hc,$c);ye[e]=new Re(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Hc,$c);ye[e]=new Re(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Hc,$c);ye[e]=new Re(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){ye[t]=new Re(t,1,!1,t.toLowerCase(),null,!1,!1)});ye.xlinkHref=new Re("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){ye[t]=new Re(t,1,!1,t.toLowerCase(),null,!0,!0)});function Kc(t,e,n,r){var i=ye.hasOwnProperty(e)?ye[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(hv(e,n,i,r)&&(n=null),r||i===null?uv(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var jt=av.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,As=Symbol.for("react.element"),nr=Symbol.for("react.portal"),rr=Symbol.for("react.fragment"),Gc=Symbol.for("react.strict_mode"),Na=Symbol.for("react.profiler"),wp=Symbol.for("react.provider"),Ep=Symbol.for("react.context"),qc=Symbol.for("react.forward_ref"),Ra=Symbol.for("react.suspense"),xa=Symbol.for("react.suspense_list"),Qc=Symbol.for("react.memo"),Ht=Symbol.for("react.lazy"),Sp=Symbol.for("react.offscreen"),jd=Symbol.iterator;function ri(t){return t===null||typeof t!="object"?null:(t=jd&&t[jd]||t["@@iterator"],typeof t=="function"?t:null)}var te=Object.assign,Ul;function gi(t){if(Ul===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Ul=e&&e[1]||""}return`
`+Ul+t}var zl=!1;function Wl(t,e){if(!t||zl)return"";zl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var a=`
`+i[o].replace(" at new "," at ");return t.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",t.displayName)),a}while(1<=o&&0<=l);break}}}finally{zl=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?gi(t):""}function fv(t){switch(t.tag){case 5:return gi(t.type);case 16:return gi("Lazy");case 13:return gi("Suspense");case 19:return gi("SuspenseList");case 0:case 2:case 15:return t=Wl(t.type,!1),t;case 11:return t=Wl(t.type.render,!1),t;case 1:return t=Wl(t.type,!0),t;default:return""}}function Pa(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case rr:return"Fragment";case nr:return"Portal";case Na:return"Profiler";case Gc:return"StrictMode";case Ra:return"Suspense";case xa:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Ep:return(t.displayName||"Context")+".Consumer";case wp:return(t._context.displayName||"Context")+".Provider";case qc:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Qc:return e=t.displayName||null,e!==null?e:Pa(t.type)||"Memo";case Ht:e=t._payload,t=t._init;try{return Pa(t(e))}catch{}}return null}function pv(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Pa(e);case 8:return e===Gc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function pn(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Cp(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function mv(t){var e=Cp(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Os(t){t._valueTracker||(t._valueTracker=mv(t))}function Ip(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Cp(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function fo(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Aa(t,e){var n=e.checked;return te({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Ud(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=pn(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function kp(t,e){e=e.checked,e!=null&&Kc(t,"checked",e,!1)}function Oa(t,e){kp(t,e);var n=pn(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Da(t,e.type,n):e.hasOwnProperty("defaultValue")&&Da(t,e.type,pn(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function zd(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Da(t,e,n){(e!=="number"||fo(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var _i=Array.isArray;function gr(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+pn(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function La(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(S(91));return te({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Wd(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(S(92));if(_i(n)){if(1<n.length)throw Error(S(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:pn(n)}}function Tp(t,e){var n=pn(e.value),r=pn(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Bd(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Np(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ma(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Np(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ds,Rp=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ds=Ds||document.createElement("div"),Ds.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ds.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Fi(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Si={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},gv=["Webkit","ms","Moz","O"];Object.keys(Si).forEach(function(t){gv.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Si[e]=Si[t]})});function xp(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Si.hasOwnProperty(t)&&Si[t]?(""+e).trim():e+"px"}function Pp(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=xp(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var _v=te({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ba(t,e){if(e){if(_v[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(S(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(S(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(S(61))}if(e.style!=null&&typeof e.style!="object")throw Error(S(62))}}function Fa(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ja=null;function Yc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ua=null,_r=null,yr=null;function Vd(t){if(t=fs(t)){if(typeof Ua!="function")throw Error(S(280));var e=t.stateNode;e&&(e=ul(e),Ua(t.stateNode,t.type,e))}}function Ap(t){_r?yr?yr.push(t):yr=[t]:_r=t}function Op(){if(_r){var t=_r,e=yr;if(yr=_r=null,Vd(t),e)for(t=0;t<e.length;t++)Vd(e[t])}}function Dp(t,e){return t(e)}function Lp(){}var Bl=!1;function Mp(t,e,n){if(Bl)return t(e,n);Bl=!0;try{return Dp(t,e,n)}finally{Bl=!1,(_r!==null||yr!==null)&&(Lp(),Op())}}function ji(t,e){var n=t.stateNode;if(n===null)return null;var r=ul(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(S(231,e,typeof n));return n}var za=!1;if(Pt)try{var ii={};Object.defineProperty(ii,"passive",{get:function(){za=!0}}),window.addEventListener("test",ii,ii),window.removeEventListener("test",ii,ii)}catch{za=!1}function yv(t,e,n,r,i,s,o,l,a){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var Ci=!1,po=null,mo=!1,Wa=null,vv={onError:function(t){Ci=!0,po=t}};function wv(t,e,n,r,i,s,o,l,a){Ci=!1,po=null,yv.apply(vv,arguments)}function Ev(t,e,n,r,i,s,o,l,a){if(wv.apply(this,arguments),Ci){if(Ci){var c=po;Ci=!1,po=null}else throw Error(S(198));mo||(mo=!0,Wa=c)}}function Xn(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function bp(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Hd(t){if(Xn(t)!==t)throw Error(S(188))}function Sv(t){var e=t.alternate;if(!e){if(e=Xn(t),e===null)throw Error(S(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Hd(i),t;if(s===r)return Hd(i),e;s=s.sibling}throw Error(S(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(S(189))}}if(n.alternate!==r)throw Error(S(190))}if(n.tag!==3)throw Error(S(188));return n.stateNode.current===n?t:e}function Fp(t){return t=Sv(t),t!==null?jp(t):null}function jp(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=jp(t);if(e!==null)return e;t=t.sibling}return null}var Up=Ve.unstable_scheduleCallback,$d=Ve.unstable_cancelCallback,Cv=Ve.unstable_shouldYield,Iv=Ve.unstable_requestPaint,ie=Ve.unstable_now,kv=Ve.unstable_getCurrentPriorityLevel,Xc=Ve.unstable_ImmediatePriority,zp=Ve.unstable_UserBlockingPriority,go=Ve.unstable_NormalPriority,Tv=Ve.unstable_LowPriority,Wp=Ve.unstable_IdlePriority,ol=null,_t=null;function Nv(t){if(_t&&typeof _t.onCommitFiberRoot=="function")try{_t.onCommitFiberRoot(ol,t,void 0,(t.current.flags&128)===128)}catch{}}var ct=Math.clz32?Math.clz32:Pv,Rv=Math.log,xv=Math.LN2;function Pv(t){return t>>>=0,t===0?32:31-(Rv(t)/xv|0)|0}var Ls=64,Ms=4194304;function yi(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function _o(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=yi(l):(s&=o,s!==0&&(r=yi(s)))}else o=n&~i,o!==0?r=yi(o):s!==0&&(r=yi(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-ct(e),i=1<<n,r|=t[n],e&=~i;return r}function Av(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ov(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-ct(s),l=1<<o,a=i[o];a===-1?(!(l&n)||l&r)&&(i[o]=Av(l,e)):a<=e&&(t.expiredLanes|=l),s&=~l}}function Ba(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Bp(){var t=Ls;return Ls<<=1,!(Ls&4194240)&&(Ls=64),t}function Vl(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ds(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-ct(e),t[e]=n}function Dv(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-ct(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Jc(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-ct(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var B=0;function Vp(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Hp,Zc,$p,Kp,Gp,Va=!1,bs=[],en=null,tn=null,nn=null,Ui=new Map,zi=new Map,Kt=[],Lv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Kd(t,e){switch(t){case"focusin":case"focusout":en=null;break;case"dragenter":case"dragleave":tn=null;break;case"mouseover":case"mouseout":nn=null;break;case"pointerover":case"pointerout":Ui.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":zi.delete(e.pointerId)}}function si(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=fs(e),e!==null&&Zc(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function Mv(t,e,n,r,i){switch(e){case"focusin":return en=si(en,t,e,n,r,i),!0;case"dragenter":return tn=si(tn,t,e,n,r,i),!0;case"mouseover":return nn=si(nn,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Ui.set(s,si(Ui.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,zi.set(s,si(zi.get(s)||null,t,e,n,r,i)),!0}return!1}function qp(t){var e=Pn(t.target);if(e!==null){var n=Xn(e);if(n!==null){if(e=n.tag,e===13){if(e=bp(n),e!==null){t.blockedOn=e,Gp(t.priority,function(){$p(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Js(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Ha(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);ja=r,n.target.dispatchEvent(r),ja=null}else return e=fs(n),e!==null&&Zc(e),t.blockedOn=n,!1;e.shift()}return!0}function Gd(t,e,n){Js(t)&&n.delete(e)}function bv(){Va=!1,en!==null&&Js(en)&&(en=null),tn!==null&&Js(tn)&&(tn=null),nn!==null&&Js(nn)&&(nn=null),Ui.forEach(Gd),zi.forEach(Gd)}function oi(t,e){t.blockedOn===e&&(t.blockedOn=null,Va||(Va=!0,Ve.unstable_scheduleCallback(Ve.unstable_NormalPriority,bv)))}function Wi(t){function e(i){return oi(i,t)}if(0<bs.length){oi(bs[0],t);for(var n=1;n<bs.length;n++){var r=bs[n];r.blockedOn===t&&(r.blockedOn=null)}}for(en!==null&&oi(en,t),tn!==null&&oi(tn,t),nn!==null&&oi(nn,t),Ui.forEach(e),zi.forEach(e),n=0;n<Kt.length;n++)r=Kt[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Kt.length&&(n=Kt[0],n.blockedOn===null);)qp(n),n.blockedOn===null&&Kt.shift()}var vr=jt.ReactCurrentBatchConfig,yo=!0;function Fv(t,e,n,r){var i=B,s=vr.transition;vr.transition=null;try{B=1,eu(t,e,n,r)}finally{B=i,vr.transition=s}}function jv(t,e,n,r){var i=B,s=vr.transition;vr.transition=null;try{B=4,eu(t,e,n,r)}finally{B=i,vr.transition=s}}function eu(t,e,n,r){if(yo){var i=Ha(t,e,n,r);if(i===null)Zl(t,e,r,vo,n),Kd(t,r);else if(Mv(i,t,e,n,r))r.stopPropagation();else if(Kd(t,r),e&4&&-1<Lv.indexOf(t)){for(;i!==null;){var s=fs(i);if(s!==null&&Hp(s),s=Ha(t,e,n,r),s===null&&Zl(t,e,r,vo,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Zl(t,e,r,null,n)}}var vo=null;function Ha(t,e,n,r){if(vo=null,t=Yc(r),t=Pn(t),t!==null)if(e=Xn(t),e===null)t=null;else if(n=e.tag,n===13){if(t=bp(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return vo=t,null}function Qp(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(kv()){case Xc:return 1;case zp:return 4;case go:case Tv:return 16;case Wp:return 536870912;default:return 16}default:return 16}}var Jt=null,tu=null,Zs=null;function Yp(){if(Zs)return Zs;var t,e=tu,n=e.length,r,i="value"in Jt?Jt.value:Jt.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Zs=i.slice(t,1<r?1-r:void 0)}function eo(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Fs(){return!0}function qd(){return!1}function $e(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Fs:qd,this.isPropagationStopped=qd,this}return te(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Fs)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Fs)},persist:function(){},isPersistent:Fs}),e}var Hr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},nu=$e(Hr),hs=te({},Hr,{view:0,detail:0}),Uv=$e(hs),Hl,$l,li,ll=te({},hs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ru,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==li&&(li&&t.type==="mousemove"?(Hl=t.screenX-li.screenX,$l=t.screenY-li.screenY):$l=Hl=0,li=t),Hl)},movementY:function(t){return"movementY"in t?t.movementY:$l}}),Qd=$e(ll),zv=te({},ll,{dataTransfer:0}),Wv=$e(zv),Bv=te({},hs,{relatedTarget:0}),Kl=$e(Bv),Vv=te({},Hr,{animationName:0,elapsedTime:0,pseudoElement:0}),Hv=$e(Vv),$v=te({},Hr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Kv=$e($v),Gv=te({},Hr,{data:0}),Yd=$e(Gv),qv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Qv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Yv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Xv(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Yv[t])?!!e[t]:!1}function ru(){return Xv}var Jv=te({},hs,{key:function(t){if(t.key){var e=qv[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=eo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Qv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ru,charCode:function(t){return t.type==="keypress"?eo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?eo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Zv=$e(Jv),ew=te({},ll,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Xd=$e(ew),tw=te({},hs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ru}),nw=$e(tw),rw=te({},Hr,{propertyName:0,elapsedTime:0,pseudoElement:0}),iw=$e(rw),sw=te({},ll,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),ow=$e(sw),lw=[9,13,27,32],iu=Pt&&"CompositionEvent"in window,Ii=null;Pt&&"documentMode"in document&&(Ii=document.documentMode);var aw=Pt&&"TextEvent"in window&&!Ii,Xp=Pt&&(!iu||Ii&&8<Ii&&11>=Ii),Jd=String.fromCharCode(32),Zd=!1;function Jp(t,e){switch(t){case"keyup":return lw.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Zp(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ir=!1;function cw(t,e){switch(t){case"compositionend":return Zp(e);case"keypress":return e.which!==32?null:(Zd=!0,Jd);case"textInput":return t=e.data,t===Jd&&Zd?null:t;default:return null}}function uw(t,e){if(ir)return t==="compositionend"||!iu&&Jp(t,e)?(t=Yp(),Zs=tu=Jt=null,ir=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Xp&&e.locale!=="ko"?null:e.data;default:return null}}var dw={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function eh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!dw[t.type]:e==="textarea"}function em(t,e,n,r){Ap(r),e=wo(e,"onChange"),0<e.length&&(n=new nu("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var ki=null,Bi=null;function hw(t){dm(t,0)}function al(t){var e=lr(t);if(Ip(e))return t}function fw(t,e){if(t==="change")return e}var tm=!1;if(Pt){var Gl;if(Pt){var ql="oninput"in document;if(!ql){var th=document.createElement("div");th.setAttribute("oninput","return;"),ql=typeof th.oninput=="function"}Gl=ql}else Gl=!1;tm=Gl&&(!document.documentMode||9<document.documentMode)}function nh(){ki&&(ki.detachEvent("onpropertychange",nm),Bi=ki=null)}function nm(t){if(t.propertyName==="value"&&al(Bi)){var e=[];em(e,Bi,t,Yc(t)),Mp(hw,e)}}function pw(t,e,n){t==="focusin"?(nh(),ki=e,Bi=n,ki.attachEvent("onpropertychange",nm)):t==="focusout"&&nh()}function mw(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return al(Bi)}function gw(t,e){if(t==="click")return al(e)}function _w(t,e){if(t==="input"||t==="change")return al(e)}function yw(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ht=typeof Object.is=="function"?Object.is:yw;function Vi(t,e){if(ht(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Ta.call(e,i)||!ht(t[i],e[i]))return!1}return!0}function rh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function ih(t,e){var n=rh(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=rh(n)}}function rm(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?rm(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function im(){for(var t=window,e=fo();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=fo(t.document)}return e}function su(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function vw(t){var e=im(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&rm(n.ownerDocument.documentElement,n)){if(r!==null&&su(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=ih(n,s);var o=ih(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var ww=Pt&&"documentMode"in document&&11>=document.documentMode,sr=null,$a=null,Ti=null,Ka=!1;function sh(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ka||sr==null||sr!==fo(r)||(r=sr,"selectionStart"in r&&su(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ti&&Vi(Ti,r)||(Ti=r,r=wo($a,"onSelect"),0<r.length&&(e=new nu("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=sr)))}function js(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var or={animationend:js("Animation","AnimationEnd"),animationiteration:js("Animation","AnimationIteration"),animationstart:js("Animation","AnimationStart"),transitionend:js("Transition","TransitionEnd")},Ql={},sm={};Pt&&(sm=document.createElement("div").style,"AnimationEvent"in window||(delete or.animationend.animation,delete or.animationiteration.animation,delete or.animationstart.animation),"TransitionEvent"in window||delete or.transitionend.transition);function cl(t){if(Ql[t])return Ql[t];if(!or[t])return t;var e=or[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in sm)return Ql[t]=e[n];return t}var om=cl("animationend"),lm=cl("animationiteration"),am=cl("animationstart"),cm=cl("transitionend"),um=new Map,oh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function yn(t,e){um.set(t,e),Yn(e,[t])}for(var Yl=0;Yl<oh.length;Yl++){var Xl=oh[Yl],Ew=Xl.toLowerCase(),Sw=Xl[0].toUpperCase()+Xl.slice(1);yn(Ew,"on"+Sw)}yn(om,"onAnimationEnd");yn(lm,"onAnimationIteration");yn(am,"onAnimationStart");yn("dblclick","onDoubleClick");yn("focusin","onFocus");yn("focusout","onBlur");yn(cm,"onTransitionEnd");xr("onMouseEnter",["mouseout","mouseover"]);xr("onMouseLeave",["mouseout","mouseover"]);xr("onPointerEnter",["pointerout","pointerover"]);xr("onPointerLeave",["pointerout","pointerover"]);Yn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Yn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Yn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Yn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Yn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Yn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var vi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Cw=new Set("cancel close invalid load scroll toggle".split(" ").concat(vi));function lh(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,Ev(r,e,void 0,t),t.currentTarget=null}function dm(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],a=l.instance,c=l.currentTarget;if(l=l.listener,a!==s&&i.isPropagationStopped())break e;lh(i,l,c),s=a}else for(o=0;o<r.length;o++){if(l=r[o],a=l.instance,c=l.currentTarget,l=l.listener,a!==s&&i.isPropagationStopped())break e;lh(i,l,c),s=a}}}if(mo)throw t=Wa,mo=!1,Wa=null,t}function q(t,e){var n=e[Xa];n===void 0&&(n=e[Xa]=new Set);var r=t+"__bubble";n.has(r)||(hm(e,t,2,!1),n.add(r))}function Jl(t,e,n){var r=0;e&&(r|=4),hm(n,t,r,e)}var Us="_reactListening"+Math.random().toString(36).slice(2);function Hi(t){if(!t[Us]){t[Us]=!0,vp.forEach(function(n){n!=="selectionchange"&&(Cw.has(n)||Jl(n,!1,t),Jl(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Us]||(e[Us]=!0,Jl("selectionchange",!1,e))}}function hm(t,e,n,r){switch(Qp(e)){case 1:var i=Fv;break;case 4:i=jv;break;default:i=eu}n=i.bind(null,e,n,t),i=void 0,!za||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Zl(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var a=o.tag;if((a===3||a===4)&&(a=o.stateNode.containerInfo,a===i||a.nodeType===8&&a.parentNode===i))return;o=o.return}for(;l!==null;){if(o=Pn(l),o===null)return;if(a=o.tag,a===5||a===6){r=s=o;continue e}l=l.parentNode}}r=r.return}Mp(function(){var c=s,d=Yc(n),u=[];e:{var h=um.get(t);if(h!==void 0){var _=nu,y=t;switch(t){case"keypress":if(eo(n)===0)break e;case"keydown":case"keyup":_=Zv;break;case"focusin":y="focus",_=Kl;break;case"focusout":y="blur",_=Kl;break;case"beforeblur":case"afterblur":_=Kl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":_=Qd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":_=Wv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":_=nw;break;case om:case lm:case am:_=Hv;break;case cm:_=iw;break;case"scroll":_=Uv;break;case"wheel":_=ow;break;case"copy":case"cut":case"paste":_=Kv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":_=Xd}var v=(e&4)!==0,I=!v&&t==="scroll",m=v?h!==null?h+"Capture":null:h;v=[];for(var p=c,g;p!==null;){g=p;var E=g.stateNode;if(g.tag===5&&E!==null&&(g=E,m!==null&&(E=ji(p,m),E!=null&&v.push($i(p,E,g)))),I)break;p=p.return}0<v.length&&(h=new _(h,y,null,n,d),u.push({event:h,listeners:v}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",_=t==="mouseout"||t==="pointerout",h&&n!==ja&&(y=n.relatedTarget||n.fromElement)&&(Pn(y)||y[At]))break e;if((_||h)&&(h=d.window===d?d:(h=d.ownerDocument)?h.defaultView||h.parentWindow:window,_?(y=n.relatedTarget||n.toElement,_=c,y=y?Pn(y):null,y!==null&&(I=Xn(y),y!==I||y.tag!==5&&y.tag!==6)&&(y=null)):(_=null,y=c),_!==y)){if(v=Qd,E="onMouseLeave",m="onMouseEnter",p="mouse",(t==="pointerout"||t==="pointerover")&&(v=Xd,E="onPointerLeave",m="onPointerEnter",p="pointer"),I=_==null?h:lr(_),g=y==null?h:lr(y),h=new v(E,p+"leave",_,n,d),h.target=I,h.relatedTarget=g,E=null,Pn(d)===c&&(v=new v(m,p+"enter",y,n,d),v.target=g,v.relatedTarget=I,E=v),I=E,_&&y)t:{for(v=_,m=y,p=0,g=v;g;g=er(g))p++;for(g=0,E=m;E;E=er(E))g++;for(;0<p-g;)v=er(v),p--;for(;0<g-p;)m=er(m),g--;for(;p--;){if(v===m||m!==null&&v===m.alternate)break t;v=er(v),m=er(m)}v=null}else v=null;_!==null&&ah(u,h,_,v,!1),y!==null&&I!==null&&ah(u,I,y,v,!0)}}e:{if(h=c?lr(c):window,_=h.nodeName&&h.nodeName.toLowerCase(),_==="select"||_==="input"&&h.type==="file")var k=fw;else if(eh(h))if(tm)k=_w;else{k=mw;var N=pw}else(_=h.nodeName)&&_.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(k=gw);if(k&&(k=k(t,c))){em(u,k,n,d);break e}N&&N(t,h,c),t==="focusout"&&(N=h._wrapperState)&&N.controlled&&h.type==="number"&&Da(h,"number",h.value)}switch(N=c?lr(c):window,t){case"focusin":(eh(N)||N.contentEditable==="true")&&(sr=N,$a=c,Ti=null);break;case"focusout":Ti=$a=sr=null;break;case"mousedown":Ka=!0;break;case"contextmenu":case"mouseup":case"dragend":Ka=!1,sh(u,n,d);break;case"selectionchange":if(ww)break;case"keydown":case"keyup":sh(u,n,d)}var R;if(iu)e:{switch(t){case"compositionstart":var x="onCompositionStart";break e;case"compositionend":x="onCompositionEnd";break e;case"compositionupdate":x="onCompositionUpdate";break e}x=void 0}else ir?Jp(t,n)&&(x="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(x="onCompositionStart");x&&(Xp&&n.locale!=="ko"&&(ir||x!=="onCompositionStart"?x==="onCompositionEnd"&&ir&&(R=Yp()):(Jt=d,tu="value"in Jt?Jt.value:Jt.textContent,ir=!0)),N=wo(c,x),0<N.length&&(x=new Yd(x,t,null,n,d),u.push({event:x,listeners:N}),R?x.data=R:(R=Zp(n),R!==null&&(x.data=R)))),(R=aw?cw(t,n):uw(t,n))&&(c=wo(c,"onBeforeInput"),0<c.length&&(d=new Yd("onBeforeInput","beforeinput",null,n,d),u.push({event:d,listeners:c}),d.data=R))}dm(u,e)})}function $i(t,e,n){return{instance:t,listener:e,currentTarget:n}}function wo(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=ji(t,n),s!=null&&r.unshift($i(t,s,i)),s=ji(t,e),s!=null&&r.push($i(t,s,i))),t=t.return}return r}function er(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function ah(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,a=l.alternate,c=l.stateNode;if(a!==null&&a===r)break;l.tag===5&&c!==null&&(l=c,i?(a=ji(n,s),a!=null&&o.unshift($i(n,a,l))):i||(a=ji(n,s),a!=null&&o.push($i(n,a,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var Iw=/\r\n?/g,kw=/\u0000|\uFFFD/g;function ch(t){return(typeof t=="string"?t:""+t).replace(Iw,`
`).replace(kw,"")}function zs(t,e,n){if(e=ch(e),ch(t)!==e&&n)throw Error(S(425))}function Eo(){}var Ga=null,qa=null;function Qa(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Ya=typeof setTimeout=="function"?setTimeout:void 0,Tw=typeof clearTimeout=="function"?clearTimeout:void 0,uh=typeof Promise=="function"?Promise:void 0,Nw=typeof queueMicrotask=="function"?queueMicrotask:typeof uh<"u"?function(t){return uh.resolve(null).then(t).catch(Rw)}:Ya;function Rw(t){setTimeout(function(){throw t})}function ea(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Wi(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Wi(e)}function rn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function dh(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var $r=Math.random().toString(36).slice(2),gt="__reactFiber$"+$r,Ki="__reactProps$"+$r,At="__reactContainer$"+$r,Xa="__reactEvents$"+$r,xw="__reactListeners$"+$r,Pw="__reactHandles$"+$r;function Pn(t){var e=t[gt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[At]||n[gt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=dh(t);t!==null;){if(n=t[gt])return n;t=dh(t)}return e}t=n,n=t.parentNode}return null}function fs(t){return t=t[gt]||t[At],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function lr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(S(33))}function ul(t){return t[Ki]||null}var Ja=[],ar=-1;function vn(t){return{current:t}}function Y(t){0>ar||(t.current=Ja[ar],Ja[ar]=null,ar--)}function K(t,e){ar++,Ja[ar]=t.current,t.current=e}var mn={},Ce=vn(mn),Le=vn(!1),jn=mn;function Pr(t,e){var n=t.type.contextTypes;if(!n)return mn;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Me(t){return t=t.childContextTypes,t!=null}function So(){Y(Le),Y(Ce)}function hh(t,e,n){if(Ce.current!==mn)throw Error(S(168));K(Ce,e),K(Le,n)}function fm(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(S(108,pv(t)||"Unknown",i));return te({},n,r)}function Co(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||mn,jn=Ce.current,K(Ce,t),K(Le,Le.current),!0}function fh(t,e,n){var r=t.stateNode;if(!r)throw Error(S(169));n?(t=fm(t,e,jn),r.__reactInternalMemoizedMergedChildContext=t,Y(Le),Y(Ce),K(Ce,t)):Y(Le),K(Le,n)}var St=null,dl=!1,ta=!1;function pm(t){St===null?St=[t]:St.push(t)}function Aw(t){dl=!0,pm(t)}function wn(){if(!ta&&St!==null){ta=!0;var t=0,e=B;try{var n=St;for(B=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}St=null,dl=!1}catch(i){throw St!==null&&(St=St.slice(t+1)),Up(Xc,wn),i}finally{B=e,ta=!1}}return null}var cr=[],ur=0,Io=null,ko=0,Ke=[],Ge=0,Un=null,Ct=1,It="";function Tn(t,e){cr[ur++]=ko,cr[ur++]=Io,Io=t,ko=e}function mm(t,e,n){Ke[Ge++]=Ct,Ke[Ge++]=It,Ke[Ge++]=Un,Un=t;var r=Ct;t=It;var i=32-ct(r)-1;r&=~(1<<i),n+=1;var s=32-ct(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Ct=1<<32-ct(e)+i|n<<i|r,It=s+t}else Ct=1<<s|n<<i|r,It=t}function ou(t){t.return!==null&&(Tn(t,1),mm(t,1,0))}function lu(t){for(;t===Io;)Io=cr[--ur],cr[ur]=null,ko=cr[--ur],cr[ur]=null;for(;t===Un;)Un=Ke[--Ge],Ke[Ge]=null,It=Ke[--Ge],Ke[Ge]=null,Ct=Ke[--Ge],Ke[Ge]=null}var Be=null,We=null,X=!1,rt=null;function gm(t,e){var n=qe(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function ph(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Be=t,We=rn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Be=t,We=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Un!==null?{id:Ct,overflow:It}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=qe(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Be=t,We=null,!0):!1;default:return!1}}function Za(t){return(t.mode&1)!==0&&(t.flags&128)===0}function ec(t){if(X){var e=We;if(e){var n=e;if(!ph(t,e)){if(Za(t))throw Error(S(418));e=rn(n.nextSibling);var r=Be;e&&ph(t,e)?gm(r,n):(t.flags=t.flags&-4097|2,X=!1,Be=t)}}else{if(Za(t))throw Error(S(418));t.flags=t.flags&-4097|2,X=!1,Be=t}}}function mh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Be=t}function Ws(t){if(t!==Be)return!1;if(!X)return mh(t),X=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Qa(t.type,t.memoizedProps)),e&&(e=We)){if(Za(t))throw _m(),Error(S(418));for(;e;)gm(t,e),e=rn(e.nextSibling)}if(mh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(S(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){We=rn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}We=null}}else We=Be?rn(t.stateNode.nextSibling):null;return!0}function _m(){for(var t=We;t;)t=rn(t.nextSibling)}function Ar(){We=Be=null,X=!1}function au(t){rt===null?rt=[t]:rt.push(t)}var Ow=jt.ReactCurrentBatchConfig;function ai(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(S(309));var r=n.stateNode}if(!r)throw Error(S(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(S(284));if(!n._owner)throw Error(S(290,t))}return t}function Bs(t,e){throw t=Object.prototype.toString.call(e),Error(S(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function gh(t){var e=t._init;return e(t._payload)}function ym(t){function e(m,p){if(t){var g=m.deletions;g===null?(m.deletions=[p],m.flags|=16):g.push(p)}}function n(m,p){if(!t)return null;for(;p!==null;)e(m,p),p=p.sibling;return null}function r(m,p){for(m=new Map;p!==null;)p.key!==null?m.set(p.key,p):m.set(p.index,p),p=p.sibling;return m}function i(m,p){return m=an(m,p),m.index=0,m.sibling=null,m}function s(m,p,g){return m.index=g,t?(g=m.alternate,g!==null?(g=g.index,g<p?(m.flags|=2,p):g):(m.flags|=2,p)):(m.flags|=1048576,p)}function o(m){return t&&m.alternate===null&&(m.flags|=2),m}function l(m,p,g,E){return p===null||p.tag!==6?(p=aa(g,m.mode,E),p.return=m,p):(p=i(p,g),p.return=m,p)}function a(m,p,g,E){var k=g.type;return k===rr?d(m,p,g.props.children,E,g.key):p!==null&&(p.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Ht&&gh(k)===p.type)?(E=i(p,g.props),E.ref=ai(m,p,g),E.return=m,E):(E=lo(g.type,g.key,g.props,null,m.mode,E),E.ref=ai(m,p,g),E.return=m,E)}function c(m,p,g,E){return p===null||p.tag!==4||p.stateNode.containerInfo!==g.containerInfo||p.stateNode.implementation!==g.implementation?(p=ca(g,m.mode,E),p.return=m,p):(p=i(p,g.children||[]),p.return=m,p)}function d(m,p,g,E,k){return p===null||p.tag!==7?(p=bn(g,m.mode,E,k),p.return=m,p):(p=i(p,g),p.return=m,p)}function u(m,p,g){if(typeof p=="string"&&p!==""||typeof p=="number")return p=aa(""+p,m.mode,g),p.return=m,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case As:return g=lo(p.type,p.key,p.props,null,m.mode,g),g.ref=ai(m,null,p),g.return=m,g;case nr:return p=ca(p,m.mode,g),p.return=m,p;case Ht:var E=p._init;return u(m,E(p._payload),g)}if(_i(p)||ri(p))return p=bn(p,m.mode,g,null),p.return=m,p;Bs(m,p)}return null}function h(m,p,g,E){var k=p!==null?p.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return k!==null?null:l(m,p,""+g,E);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case As:return g.key===k?a(m,p,g,E):null;case nr:return g.key===k?c(m,p,g,E):null;case Ht:return k=g._init,h(m,p,k(g._payload),E)}if(_i(g)||ri(g))return k!==null?null:d(m,p,g,E,null);Bs(m,g)}return null}function _(m,p,g,E,k){if(typeof E=="string"&&E!==""||typeof E=="number")return m=m.get(g)||null,l(p,m,""+E,k);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case As:return m=m.get(E.key===null?g:E.key)||null,a(p,m,E,k);case nr:return m=m.get(E.key===null?g:E.key)||null,c(p,m,E,k);case Ht:var N=E._init;return _(m,p,g,N(E._payload),k)}if(_i(E)||ri(E))return m=m.get(g)||null,d(p,m,E,k,null);Bs(p,E)}return null}function y(m,p,g,E){for(var k=null,N=null,R=p,x=p=0,G=null;R!==null&&x<g.length;x++){R.index>x?(G=R,R=null):G=R.sibling;var M=h(m,R,g[x],E);if(M===null){R===null&&(R=G);break}t&&R&&M.alternate===null&&e(m,R),p=s(M,p,x),N===null?k=M:N.sibling=M,N=M,R=G}if(x===g.length)return n(m,R),X&&Tn(m,x),k;if(R===null){for(;x<g.length;x++)R=u(m,g[x],E),R!==null&&(p=s(R,p,x),N===null?k=R:N.sibling=R,N=R);return X&&Tn(m,x),k}for(R=r(m,R);x<g.length;x++)G=_(R,m,x,g[x],E),G!==null&&(t&&G.alternate!==null&&R.delete(G.key===null?x:G.key),p=s(G,p,x),N===null?k=G:N.sibling=G,N=G);return t&&R.forEach(function(Ue){return e(m,Ue)}),X&&Tn(m,x),k}function v(m,p,g,E){var k=ri(g);if(typeof k!="function")throw Error(S(150));if(g=k.call(g),g==null)throw Error(S(151));for(var N=k=null,R=p,x=p=0,G=null,M=g.next();R!==null&&!M.done;x++,M=g.next()){R.index>x?(G=R,R=null):G=R.sibling;var Ue=h(m,R,M.value,E);if(Ue===null){R===null&&(R=G);break}t&&R&&Ue.alternate===null&&e(m,R),p=s(Ue,p,x),N===null?k=Ue:N.sibling=Ue,N=Ue,R=G}if(M.done)return n(m,R),X&&Tn(m,x),k;if(R===null){for(;!M.done;x++,M=g.next())M=u(m,M.value,E),M!==null&&(p=s(M,p,x),N===null?k=M:N.sibling=M,N=M);return X&&Tn(m,x),k}for(R=r(m,R);!M.done;x++,M=g.next())M=_(R,m,x,M.value,E),M!==null&&(t&&M.alternate!==null&&R.delete(M.key===null?x:M.key),p=s(M,p,x),N===null?k=M:N.sibling=M,N=M);return t&&R.forEach(function(Wt){return e(m,Wt)}),X&&Tn(m,x),k}function I(m,p,g,E){if(typeof g=="object"&&g!==null&&g.type===rr&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case As:e:{for(var k=g.key,N=p;N!==null;){if(N.key===k){if(k=g.type,k===rr){if(N.tag===7){n(m,N.sibling),p=i(N,g.props.children),p.return=m,m=p;break e}}else if(N.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Ht&&gh(k)===N.type){n(m,N.sibling),p=i(N,g.props),p.ref=ai(m,N,g),p.return=m,m=p;break e}n(m,N);break}else e(m,N);N=N.sibling}g.type===rr?(p=bn(g.props.children,m.mode,E,g.key),p.return=m,m=p):(E=lo(g.type,g.key,g.props,null,m.mode,E),E.ref=ai(m,p,g),E.return=m,m=E)}return o(m);case nr:e:{for(N=g.key;p!==null;){if(p.key===N)if(p.tag===4&&p.stateNode.containerInfo===g.containerInfo&&p.stateNode.implementation===g.implementation){n(m,p.sibling),p=i(p,g.children||[]),p.return=m,m=p;break e}else{n(m,p);break}else e(m,p);p=p.sibling}p=ca(g,m.mode,E),p.return=m,m=p}return o(m);case Ht:return N=g._init,I(m,p,N(g._payload),E)}if(_i(g))return y(m,p,g,E);if(ri(g))return v(m,p,g,E);Bs(m,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,p!==null&&p.tag===6?(n(m,p.sibling),p=i(p,g),p.return=m,m=p):(n(m,p),p=aa(g,m.mode,E),p.return=m,m=p),o(m)):n(m,p)}return I}var Or=ym(!0),vm=ym(!1),To=vn(null),No=null,dr=null,cu=null;function uu(){cu=dr=No=null}function du(t){var e=To.current;Y(To),t._currentValue=e}function tc(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function wr(t,e){No=t,cu=dr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Ae=!0),t.firstContext=null)}function Ye(t){var e=t._currentValue;if(cu!==t)if(t={context:t,memoizedValue:e,next:null},dr===null){if(No===null)throw Error(S(308));dr=t,No.dependencies={lanes:0,firstContext:t}}else dr=dr.next=t;return e}var An=null;function hu(t){An===null?An=[t]:An.push(t)}function wm(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,hu(e)):(n.next=i.next,i.next=n),e.interleaved=n,Ot(t,r)}function Ot(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var $t=!1;function fu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Em(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Rt(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function sn(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,z&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Ot(t,n)}return i=r.interleaved,i===null?(e.next=e,hu(r)):(e.next=i.next,i.next=e),r.interleaved=e,Ot(t,n)}function to(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Jc(t,n)}}function _h(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Ro(t,e,n,r){var i=t.updateQueue;$t=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var a=l,c=a.next;a.next=null,o===null?s=c:o.next=c,o=a;var d=t.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==o&&(l===null?d.firstBaseUpdate=c:l.next=c,d.lastBaseUpdate=a))}if(s!==null){var u=i.baseState;o=0,d=c=a=null,l=s;do{var h=l.lane,_=l.eventTime;if((r&h)===h){d!==null&&(d=d.next={eventTime:_,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var y=t,v=l;switch(h=e,_=n,v.tag){case 1:if(y=v.payload,typeof y=="function"){u=y.call(_,u,h);break e}u=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=v.payload,h=typeof y=="function"?y.call(_,u,h):y,h==null)break e;u=te({},u,h);break e;case 2:$t=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,h=i.effects,h===null?i.effects=[l]:h.push(l))}else _={eventTime:_,lane:h,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(c=d=_,a=u):d=d.next=_,o|=h;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;h=l,l=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(1);if(d===null&&(a=u),i.baseState=a,i.firstBaseUpdate=c,i.lastBaseUpdate=d,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Wn|=o,t.lanes=o,t.memoizedState=u}}function yh(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(S(191,i));i.call(r)}}}var ps={},yt=vn(ps),Gi=vn(ps),qi=vn(ps);function On(t){if(t===ps)throw Error(S(174));return t}function pu(t,e){switch(K(qi,e),K(Gi,t),K(yt,ps),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Ma(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Ma(e,t)}Y(yt),K(yt,e)}function Dr(){Y(yt),Y(Gi),Y(qi)}function Sm(t){On(qi.current);var e=On(yt.current),n=Ma(e,t.type);e!==n&&(K(Gi,t),K(yt,n))}function mu(t){Gi.current===t&&(Y(yt),Y(Gi))}var Z=vn(0);function xo(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var na=[];function gu(){for(var t=0;t<na.length;t++)na[t]._workInProgressVersionPrimary=null;na.length=0}var no=jt.ReactCurrentDispatcher,ra=jt.ReactCurrentBatchConfig,zn=0,ee=null,oe=null,de=null,Po=!1,Ni=!1,Qi=0,Dw=0;function ve(){throw Error(S(321))}function _u(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!ht(t[n],e[n]))return!1;return!0}function yu(t,e,n,r,i,s){if(zn=s,ee=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,no.current=t===null||t.memoizedState===null?Fw:jw,t=n(r,i),Ni){s=0;do{if(Ni=!1,Qi=0,25<=s)throw Error(S(301));s+=1,de=oe=null,e.updateQueue=null,no.current=Uw,t=n(r,i)}while(Ni)}if(no.current=Ao,e=oe!==null&&oe.next!==null,zn=0,de=oe=ee=null,Po=!1,e)throw Error(S(300));return t}function vu(){var t=Qi!==0;return Qi=0,t}function mt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return de===null?ee.memoizedState=de=t:de=de.next=t,de}function Xe(){if(oe===null){var t=ee.alternate;t=t!==null?t.memoizedState:null}else t=oe.next;var e=de===null?ee.memoizedState:de.next;if(e!==null)de=e,oe=t;else{if(t===null)throw Error(S(310));oe=t,t={memoizedState:oe.memoizedState,baseState:oe.baseState,baseQueue:oe.baseQueue,queue:oe.queue,next:null},de===null?ee.memoizedState=de=t:de=de.next=t}return de}function Yi(t,e){return typeof e=="function"?e(t):e}function ia(t){var e=Xe(),n=e.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=t;var r=oe,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,a=null,c=s;do{var d=c.lane;if((zn&d)===d)a!==null&&(a=a.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var u={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};a===null?(l=a=u,o=r):a=a.next=u,ee.lanes|=d,Wn|=d}c=c.next}while(c!==null&&c!==s);a===null?o=r:a.next=l,ht(r,e.memoizedState)||(Ae=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=a,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,ee.lanes|=s,Wn|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function sa(t){var e=Xe(),n=e.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);ht(s,e.memoizedState)||(Ae=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function Cm(){}function Im(t,e){var n=ee,r=Xe(),i=e(),s=!ht(r.memoizedState,i);if(s&&(r.memoizedState=i,Ae=!0),r=r.queue,wu(Nm.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||de!==null&&de.memoizedState.tag&1){if(n.flags|=2048,Xi(9,Tm.bind(null,n,r,i,e),void 0,null),pe===null)throw Error(S(349));zn&30||km(n,e,i)}return i}function km(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ee.updateQueue,e===null?(e={lastEffect:null,stores:null},ee.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Tm(t,e,n,r){e.value=n,e.getSnapshot=r,Rm(e)&&xm(t)}function Nm(t,e,n){return n(function(){Rm(e)&&xm(t)})}function Rm(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!ht(t,n)}catch{return!0}}function xm(t){var e=Ot(t,1);e!==null&&ut(e,t,1,-1)}function vh(t){var e=mt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Yi,lastRenderedState:t},e.queue=t,t=t.dispatch=bw.bind(null,ee,t),[e.memoizedState,t]}function Xi(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=ee.updateQueue,e===null?(e={lastEffect:null,stores:null},ee.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Pm(){return Xe().memoizedState}function ro(t,e,n,r){var i=mt();ee.flags|=t,i.memoizedState=Xi(1|e,n,void 0,r===void 0?null:r)}function hl(t,e,n,r){var i=Xe();r=r===void 0?null:r;var s=void 0;if(oe!==null){var o=oe.memoizedState;if(s=o.destroy,r!==null&&_u(r,o.deps)){i.memoizedState=Xi(e,n,s,r);return}}ee.flags|=t,i.memoizedState=Xi(1|e,n,s,r)}function wh(t,e){return ro(8390656,8,t,e)}function wu(t,e){return hl(2048,8,t,e)}function Am(t,e){return hl(4,2,t,e)}function Om(t,e){return hl(4,4,t,e)}function Dm(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Lm(t,e,n){return n=n!=null?n.concat([t]):null,hl(4,4,Dm.bind(null,e,t),n)}function Eu(){}function Mm(t,e){var n=Xe();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&_u(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function bm(t,e){var n=Xe();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&_u(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Fm(t,e,n){return zn&21?(ht(n,e)||(n=Bp(),ee.lanes|=n,Wn|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Ae=!0),t.memoizedState=n)}function Lw(t,e){var n=B;B=n!==0&&4>n?n:4,t(!0);var r=ra.transition;ra.transition={};try{t(!1),e()}finally{B=n,ra.transition=r}}function jm(){return Xe().memoizedState}function Mw(t,e,n){var r=ln(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Um(t))zm(e,n);else if(n=wm(t,e,n,r),n!==null){var i=ke();ut(n,t,r,i),Wm(n,e,r)}}function bw(t,e,n){var r=ln(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Um(t))zm(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,ht(l,o)){var a=e.interleaved;a===null?(i.next=i,hu(e)):(i.next=a.next,a.next=i),e.interleaved=i;return}}catch{}finally{}n=wm(t,e,i,r),n!==null&&(i=ke(),ut(n,t,r,i),Wm(n,e,r))}}function Um(t){var e=t.alternate;return t===ee||e!==null&&e===ee}function zm(t,e){Ni=Po=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Wm(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Jc(t,n)}}var Ao={readContext:Ye,useCallback:ve,useContext:ve,useEffect:ve,useImperativeHandle:ve,useInsertionEffect:ve,useLayoutEffect:ve,useMemo:ve,useReducer:ve,useRef:ve,useState:ve,useDebugValue:ve,useDeferredValue:ve,useTransition:ve,useMutableSource:ve,useSyncExternalStore:ve,useId:ve,unstable_isNewReconciler:!1},Fw={readContext:Ye,useCallback:function(t,e){return mt().memoizedState=[t,e===void 0?null:e],t},useContext:Ye,useEffect:wh,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,ro(4194308,4,Dm.bind(null,e,t),n)},useLayoutEffect:function(t,e){return ro(4194308,4,t,e)},useInsertionEffect:function(t,e){return ro(4,2,t,e)},useMemo:function(t,e){var n=mt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=mt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=Mw.bind(null,ee,t),[r.memoizedState,t]},useRef:function(t){var e=mt();return t={current:t},e.memoizedState=t},useState:vh,useDebugValue:Eu,useDeferredValue:function(t){return mt().memoizedState=t},useTransition:function(){var t=vh(!1),e=t[0];return t=Lw.bind(null,t[1]),mt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=ee,i=mt();if(X){if(n===void 0)throw Error(S(407));n=n()}else{if(n=e(),pe===null)throw Error(S(349));zn&30||km(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,wh(Nm.bind(null,r,s,t),[t]),r.flags|=2048,Xi(9,Tm.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=mt(),e=pe.identifierPrefix;if(X){var n=It,r=Ct;n=(r&~(1<<32-ct(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Qi++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Dw++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},jw={readContext:Ye,useCallback:Mm,useContext:Ye,useEffect:wu,useImperativeHandle:Lm,useInsertionEffect:Am,useLayoutEffect:Om,useMemo:bm,useReducer:ia,useRef:Pm,useState:function(){return ia(Yi)},useDebugValue:Eu,useDeferredValue:function(t){var e=Xe();return Fm(e,oe.memoizedState,t)},useTransition:function(){var t=ia(Yi)[0],e=Xe().memoizedState;return[t,e]},useMutableSource:Cm,useSyncExternalStore:Im,useId:jm,unstable_isNewReconciler:!1},Uw={readContext:Ye,useCallback:Mm,useContext:Ye,useEffect:wu,useImperativeHandle:Lm,useInsertionEffect:Am,useLayoutEffect:Om,useMemo:bm,useReducer:sa,useRef:Pm,useState:function(){return sa(Yi)},useDebugValue:Eu,useDeferredValue:function(t){var e=Xe();return oe===null?e.memoizedState=t:Fm(e,oe.memoizedState,t)},useTransition:function(){var t=sa(Yi)[0],e=Xe().memoizedState;return[t,e]},useMutableSource:Cm,useSyncExternalStore:Im,useId:jm,unstable_isNewReconciler:!1};function tt(t,e){if(t&&t.defaultProps){e=te({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function nc(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:te({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var fl={isMounted:function(t){return(t=t._reactInternals)?Xn(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=ke(),i=ln(t),s=Rt(r,i);s.payload=e,n!=null&&(s.callback=n),e=sn(t,s,i),e!==null&&(ut(e,t,i,r),to(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=ke(),i=ln(t),s=Rt(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=sn(t,s,i),e!==null&&(ut(e,t,i,r),to(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=ke(),r=ln(t),i=Rt(n,r);i.tag=2,e!=null&&(i.callback=e),e=sn(t,i,r),e!==null&&(ut(e,t,r,n),to(e,t,r))}};function Eh(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Vi(n,r)||!Vi(i,s):!0}function Bm(t,e,n){var r=!1,i=mn,s=e.contextType;return typeof s=="object"&&s!==null?s=Ye(s):(i=Me(e)?jn:Ce.current,r=e.contextTypes,s=(r=r!=null)?Pr(t,i):mn),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=fl,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Sh(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&fl.enqueueReplaceState(e,e.state,null)}function rc(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},fu(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Ye(s):(s=Me(e)?jn:Ce.current,i.context=Pr(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(nc(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&fl.enqueueReplaceState(i,i.state,null),Ro(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Lr(t,e){try{var n="",r=e;do n+=fv(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function oa(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function ic(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var zw=typeof WeakMap=="function"?WeakMap:Map;function Vm(t,e,n){n=Rt(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Do||(Do=!0,pc=r),ic(t,e)},n}function Hm(t,e,n){n=Rt(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){ic(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){ic(t,e),typeof r!="function"&&(on===null?on=new Set([this]):on.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Ch(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new zw;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=e0.bind(null,t,e,n),e.then(t,t))}function Ih(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function kh(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Rt(-1,1),e.tag=2,sn(n,e,1))),n.lanes|=1),t)}var Ww=jt.ReactCurrentOwner,Ae=!1;function Ie(t,e,n,r){e.child=t===null?vm(e,null,n,r):Or(e,t.child,n,r)}function Th(t,e,n,r,i){n=n.render;var s=e.ref;return wr(e,i),r=yu(t,e,n,r,s,i),n=vu(),t!==null&&!Ae?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Dt(t,e,i)):(X&&n&&ou(e),e.flags|=1,Ie(t,e,r,i),e.child)}function Nh(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!xu(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,$m(t,e,s,r,i)):(t=lo(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Vi,n(o,r)&&t.ref===e.ref)return Dt(t,e,i)}return e.flags|=1,t=an(s,r),t.ref=e.ref,t.return=e,e.child=t}function $m(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Vi(s,r)&&t.ref===e.ref)if(Ae=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Ae=!0);else return e.lanes=t.lanes,Dt(t,e,i)}return sc(t,e,n,r,i)}function Km(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},K(fr,ze),ze|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,K(fr,ze),ze|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,K(fr,ze),ze|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,K(fr,ze),ze|=r;return Ie(t,e,i,n),e.child}function Gm(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function sc(t,e,n,r,i){var s=Me(n)?jn:Ce.current;return s=Pr(e,s),wr(e,i),n=yu(t,e,n,r,s,i),r=vu(),t!==null&&!Ae?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Dt(t,e,i)):(X&&r&&ou(e),e.flags|=1,Ie(t,e,n,i),e.child)}function Rh(t,e,n,r,i){if(Me(n)){var s=!0;Co(e)}else s=!1;if(wr(e,i),e.stateNode===null)io(t,e),Bm(e,n,r),rc(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var a=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Ye(c):(c=Me(n)?jn:Ce.current,c=Pr(e,c));var d=n.getDerivedStateFromProps,u=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";u||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||a!==c)&&Sh(e,o,r,c),$t=!1;var h=e.memoizedState;o.state=h,Ro(e,r,o,i),a=e.memoizedState,l!==r||h!==a||Le.current||$t?(typeof d=="function"&&(nc(e,n,d,r),a=e.memoizedState),(l=$t||Eh(e,n,l,r,h,a,c))?(u||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=a),o.props=r,o.state=a,o.context=c,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Em(t,e),l=e.memoizedProps,c=e.type===e.elementType?l:tt(e.type,l),o.props=c,u=e.pendingProps,h=o.context,a=n.contextType,typeof a=="object"&&a!==null?a=Ye(a):(a=Me(n)?jn:Ce.current,a=Pr(e,a));var _=n.getDerivedStateFromProps;(d=typeof _=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==u||h!==a)&&Sh(e,o,r,a),$t=!1,h=e.memoizedState,o.state=h,Ro(e,r,o,i);var y=e.memoizedState;l!==u||h!==y||Le.current||$t?(typeof _=="function"&&(nc(e,n,_,r),y=e.memoizedState),(c=$t||Eh(e,n,c,r,h,y,a)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,y,a),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,y,a)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=y),o.props=r,o.state=y,o.context=a,r=c):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),r=!1)}return oc(t,e,n,r,s,i)}function oc(t,e,n,r,i,s){Gm(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&fh(e,n,!1),Dt(t,e,s);r=e.stateNode,Ww.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Or(e,t.child,null,s),e.child=Or(e,null,l,s)):Ie(t,e,l,s),e.memoizedState=r.state,i&&fh(e,n,!0),e.child}function qm(t){var e=t.stateNode;e.pendingContext?hh(t,e.pendingContext,e.pendingContext!==e.context):e.context&&hh(t,e.context,!1),pu(t,e.containerInfo)}function xh(t,e,n,r,i){return Ar(),au(i),e.flags|=256,Ie(t,e,n,r),e.child}var lc={dehydrated:null,treeContext:null,retryLane:0};function ac(t){return{baseLanes:t,cachePool:null,transitions:null}}function Qm(t,e,n){var r=e.pendingProps,i=Z.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),K(Z,i&1),t===null)return ec(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=gl(o,r,0,null),t=bn(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=ac(n),e.memoizedState=lc,t):Su(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return Bw(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var a={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=a,e.deletions=null):(r=an(i,a),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=an(l,s):(s=bn(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?ac(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=lc,r}return s=t.child,t=s.sibling,r=an(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Su(t,e){return e=gl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Vs(t,e,n,r){return r!==null&&au(r),Or(e,t.child,null,n),t=Su(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Bw(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=oa(Error(S(422))),Vs(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=gl({mode:"visible",children:r.children},i,0,null),s=bn(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Or(e,t.child,null,o),e.child.memoizedState=ac(o),e.memoizedState=lc,s);if(!(e.mode&1))return Vs(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(S(419)),r=oa(s,r,void 0),Vs(t,e,o,r)}if(l=(o&t.childLanes)!==0,Ae||l){if(r=pe,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Ot(t,i),ut(r,t,i,-1))}return Ru(),r=oa(Error(S(421))),Vs(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=t0.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,We=rn(i.nextSibling),Be=e,X=!0,rt=null,t!==null&&(Ke[Ge++]=Ct,Ke[Ge++]=It,Ke[Ge++]=Un,Ct=t.id,It=t.overflow,Un=e),e=Su(e,r.children),e.flags|=4096,e)}function Ph(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),tc(t.return,e,n)}function la(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Ym(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Ie(t,e,r.children,n),r=Z.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Ph(t,n,e);else if(t.tag===19)Ph(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(K(Z,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&xo(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),la(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&xo(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}la(e,!0,n,null,s);break;case"together":la(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function io(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Dt(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Wn|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(S(153));if(e.child!==null){for(t=e.child,n=an(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=an(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Vw(t,e,n){switch(e.tag){case 3:qm(e),Ar();break;case 5:Sm(e);break;case 1:Me(e.type)&&Co(e);break;case 4:pu(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;K(To,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(K(Z,Z.current&1),e.flags|=128,null):n&e.child.childLanes?Qm(t,e,n):(K(Z,Z.current&1),t=Dt(t,e,n),t!==null?t.sibling:null);K(Z,Z.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Ym(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),K(Z,Z.current),r)break;return null;case 22:case 23:return e.lanes=0,Km(t,e,n)}return Dt(t,e,n)}var Xm,cc,Jm,Zm;Xm=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};cc=function(){};Jm=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,On(yt.current);var s=null;switch(n){case"input":i=Aa(t,i),r=Aa(t,r),s=[];break;case"select":i=te({},i,{value:void 0}),r=te({},r,{value:void 0}),s=[];break;case"textarea":i=La(t,i),r=La(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Eo)}ba(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var l=i[c];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(bi.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var a=r[c];if(l=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&a!==l&&(a!=null||l!=null))if(c==="style")if(l){for(o in l)!l.hasOwnProperty(o)||a&&a.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in a)a.hasOwnProperty(o)&&l[o]!==a[o]&&(n||(n={}),n[o]=a[o])}else n||(s||(s=[]),s.push(c,n)),n=a;else c==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,l=l?l.__html:void 0,a!=null&&l!==a&&(s=s||[]).push(c,a)):c==="children"?typeof a!="string"&&typeof a!="number"||(s=s||[]).push(c,""+a):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(bi.hasOwnProperty(c)?(a!=null&&c==="onScroll"&&q("scroll",t),s||l===a||(s=[])):(s=s||[]).push(c,a))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};Zm=function(t,e,n,r){n!==r&&(e.flags|=4)};function ci(t,e){if(!X)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function we(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function Hw(t,e,n){var r=e.pendingProps;switch(lu(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return we(e),null;case 1:return Me(e.type)&&So(),we(e),null;case 3:return r=e.stateNode,Dr(),Y(Le),Y(Ce),gu(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Ws(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,rt!==null&&(_c(rt),rt=null))),cc(t,e),we(e),null;case 5:mu(e);var i=On(qi.current);if(n=e.type,t!==null&&e.stateNode!=null)Jm(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(S(166));return we(e),null}if(t=On(yt.current),Ws(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[gt]=e,r[Ki]=s,t=(e.mode&1)!==0,n){case"dialog":q("cancel",r),q("close",r);break;case"iframe":case"object":case"embed":q("load",r);break;case"video":case"audio":for(i=0;i<vi.length;i++)q(vi[i],r);break;case"source":q("error",r);break;case"img":case"image":case"link":q("error",r),q("load",r);break;case"details":q("toggle",r);break;case"input":Ud(r,s),q("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},q("invalid",r);break;case"textarea":Wd(r,s),q("invalid",r)}ba(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&zs(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&zs(r.textContent,l,t),i=["children",""+l]):bi.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&q("scroll",r)}switch(n){case"input":Os(r),zd(r,s,!0);break;case"textarea":Os(r),Bd(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Eo)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Np(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[gt]=e,t[Ki]=r,Xm(t,e,!1,!1),e.stateNode=t;e:{switch(o=Fa(n,r),n){case"dialog":q("cancel",t),q("close",t),i=r;break;case"iframe":case"object":case"embed":q("load",t),i=r;break;case"video":case"audio":for(i=0;i<vi.length;i++)q(vi[i],t);i=r;break;case"source":q("error",t),i=r;break;case"img":case"image":case"link":q("error",t),q("load",t),i=r;break;case"details":q("toggle",t),i=r;break;case"input":Ud(t,r),i=Aa(t,r),q("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=te({},r,{value:void 0}),q("invalid",t);break;case"textarea":Wd(t,r),i=La(t,r),q("invalid",t);break;default:i=r}ba(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var a=l[s];s==="style"?Pp(t,a):s==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&Rp(t,a)):s==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&Fi(t,a):typeof a=="number"&&Fi(t,""+a):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(bi.hasOwnProperty(s)?a!=null&&s==="onScroll"&&q("scroll",t):a!=null&&Kc(t,s,a,o))}switch(n){case"input":Os(t),zd(t,r,!1);break;case"textarea":Os(t),Bd(t);break;case"option":r.value!=null&&t.setAttribute("value",""+pn(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?gr(t,!!r.multiple,s,!1):r.defaultValue!=null&&gr(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Eo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return we(e),null;case 6:if(t&&e.stateNode!=null)Zm(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(S(166));if(n=On(qi.current),On(yt.current),Ws(e)){if(r=e.stateNode,n=e.memoizedProps,r[gt]=e,(s=r.nodeValue!==n)&&(t=Be,t!==null))switch(t.tag){case 3:zs(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&zs(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[gt]=e,e.stateNode=r}return we(e),null;case 13:if(Y(Z),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(X&&We!==null&&e.mode&1&&!(e.flags&128))_m(),Ar(),e.flags|=98560,s=!1;else if(s=Ws(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(S(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(S(317));s[gt]=e}else Ar(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;we(e),s=!1}else rt!==null&&(_c(rt),rt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Z.current&1?ae===0&&(ae=3):Ru())),e.updateQueue!==null&&(e.flags|=4),we(e),null);case 4:return Dr(),cc(t,e),t===null&&Hi(e.stateNode.containerInfo),we(e),null;case 10:return du(e.type._context),we(e),null;case 17:return Me(e.type)&&So(),we(e),null;case 19:if(Y(Z),s=e.memoizedState,s===null)return we(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)ci(s,!1);else{if(ae!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=xo(t),o!==null){for(e.flags|=128,ci(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return K(Z,Z.current&1|2),e.child}t=t.sibling}s.tail!==null&&ie()>Mr&&(e.flags|=128,r=!0,ci(s,!1),e.lanes=4194304)}else{if(!r)if(t=xo(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ci(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!X)return we(e),null}else 2*ie()-s.renderingStartTime>Mr&&n!==1073741824&&(e.flags|=128,r=!0,ci(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=ie(),e.sibling=null,n=Z.current,K(Z,r?n&1|2:n&1),e):(we(e),null);case 22:case 23:return Nu(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?ze&1073741824&&(we(e),e.subtreeFlags&6&&(e.flags|=8192)):we(e),null;case 24:return null;case 25:return null}throw Error(S(156,e.tag))}function $w(t,e){switch(lu(e),e.tag){case 1:return Me(e.type)&&So(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Dr(),Y(Le),Y(Ce),gu(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return mu(e),null;case 13:if(Y(Z),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(S(340));Ar()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Y(Z),null;case 4:return Dr(),null;case 10:return du(e.type._context),null;case 22:case 23:return Nu(),null;case 24:return null;default:return null}}var Hs=!1,Ee=!1,Kw=typeof WeakSet=="function"?WeakSet:Set,T=null;function hr(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ne(t,e,r)}else n.current=null}function uc(t,e,n){try{n()}catch(r){ne(t,e,r)}}var Ah=!1;function Gw(t,e){if(Ga=yo,t=im(),su(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,a=-1,c=0,d=0,u=t,h=null;t:for(;;){for(var _;u!==n||i!==0&&u.nodeType!==3||(l=o+i),u!==s||r!==0&&u.nodeType!==3||(a=o+r),u.nodeType===3&&(o+=u.nodeValue.length),(_=u.firstChild)!==null;)h=u,u=_;for(;;){if(u===t)break t;if(h===n&&++c===i&&(l=o),h===s&&++d===r&&(a=o),(_=u.nextSibling)!==null)break;u=h,h=u.parentNode}u=_}n=l===-1||a===-1?null:{start:l,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(qa={focusedElem:t,selectionRange:n},yo=!1,T=e;T!==null;)if(e=T,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,T=t;else for(;T!==null;){e=T;try{var y=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var v=y.memoizedProps,I=y.memoizedState,m=e.stateNode,p=m.getSnapshotBeforeUpdate(e.elementType===e.type?v:tt(e.type,v),I);m.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(S(163))}}catch(E){ne(e,e.return,E)}if(t=e.sibling,t!==null){t.return=e.return,T=t;break}T=e.return}return y=Ah,Ah=!1,y}function Ri(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&uc(e,n,s)}i=i.next}while(i!==r)}}function pl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function dc(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function eg(t){var e=t.alternate;e!==null&&(t.alternate=null,eg(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[gt],delete e[Ki],delete e[Xa],delete e[xw],delete e[Pw])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function tg(t){return t.tag===5||t.tag===3||t.tag===4}function Oh(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||tg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function hc(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Eo));else if(r!==4&&(t=t.child,t!==null))for(hc(t,e,n),t=t.sibling;t!==null;)hc(t,e,n),t=t.sibling}function fc(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(fc(t,e,n),t=t.sibling;t!==null;)fc(t,e,n),t=t.sibling}var me=null,nt=!1;function Bt(t,e,n){for(n=n.child;n!==null;)ng(t,e,n),n=n.sibling}function ng(t,e,n){if(_t&&typeof _t.onCommitFiberUnmount=="function")try{_t.onCommitFiberUnmount(ol,n)}catch{}switch(n.tag){case 5:Ee||hr(n,e);case 6:var r=me,i=nt;me=null,Bt(t,e,n),me=r,nt=i,me!==null&&(nt?(t=me,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):me.removeChild(n.stateNode));break;case 18:me!==null&&(nt?(t=me,n=n.stateNode,t.nodeType===8?ea(t.parentNode,n):t.nodeType===1&&ea(t,n),Wi(t)):ea(me,n.stateNode));break;case 4:r=me,i=nt,me=n.stateNode.containerInfo,nt=!0,Bt(t,e,n),me=r,nt=i;break;case 0:case 11:case 14:case 15:if(!Ee&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&uc(n,e,o),i=i.next}while(i!==r)}Bt(t,e,n);break;case 1:if(!Ee&&(hr(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){ne(n,e,l)}Bt(t,e,n);break;case 21:Bt(t,e,n);break;case 22:n.mode&1?(Ee=(r=Ee)||n.memoizedState!==null,Bt(t,e,n),Ee=r):Bt(t,e,n);break;default:Bt(t,e,n)}}function Dh(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Kw),e.forEach(function(r){var i=n0.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function et(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:me=l.stateNode,nt=!1;break e;case 3:me=l.stateNode.containerInfo,nt=!0;break e;case 4:me=l.stateNode.containerInfo,nt=!0;break e}l=l.return}if(me===null)throw Error(S(160));ng(s,o,i),me=null,nt=!1;var a=i.alternate;a!==null&&(a.return=null),i.return=null}catch(c){ne(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)rg(e,t),e=e.sibling}function rg(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(et(e,t),pt(t),r&4){try{Ri(3,t,t.return),pl(3,t)}catch(v){ne(t,t.return,v)}try{Ri(5,t,t.return)}catch(v){ne(t,t.return,v)}}break;case 1:et(e,t),pt(t),r&512&&n!==null&&hr(n,n.return);break;case 5:if(et(e,t),pt(t),r&512&&n!==null&&hr(n,n.return),t.flags&32){var i=t.stateNode;try{Fi(i,"")}catch(v){ne(t,t.return,v)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,a=t.updateQueue;if(t.updateQueue=null,a!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&kp(i,s),Fa(l,o);var c=Fa(l,s);for(o=0;o<a.length;o+=2){var d=a[o],u=a[o+1];d==="style"?Pp(i,u):d==="dangerouslySetInnerHTML"?Rp(i,u):d==="children"?Fi(i,u):Kc(i,d,u,c)}switch(l){case"input":Oa(i,s);break;case"textarea":Tp(i,s);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var _=s.value;_!=null?gr(i,!!s.multiple,_,!1):h!==!!s.multiple&&(s.defaultValue!=null?gr(i,!!s.multiple,s.defaultValue,!0):gr(i,!!s.multiple,s.multiple?[]:"",!1))}i[Ki]=s}catch(v){ne(t,t.return,v)}}break;case 6:if(et(e,t),pt(t),r&4){if(t.stateNode===null)throw Error(S(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(v){ne(t,t.return,v)}}break;case 3:if(et(e,t),pt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Wi(e.containerInfo)}catch(v){ne(t,t.return,v)}break;case 4:et(e,t),pt(t);break;case 13:et(e,t),pt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(ku=ie())),r&4&&Dh(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(Ee=(c=Ee)||d,et(e,t),Ee=c):et(e,t),pt(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(T=t,d=t.child;d!==null;){for(u=T=d;T!==null;){switch(h=T,_=h.child,h.tag){case 0:case 11:case 14:case 15:Ri(4,h,h.return);break;case 1:hr(h,h.return);var y=h.stateNode;if(typeof y.componentWillUnmount=="function"){r=h,n=h.return;try{e=r,y.props=e.memoizedProps,y.state=e.memoizedState,y.componentWillUnmount()}catch(v){ne(r,n,v)}}break;case 5:hr(h,h.return);break;case 22:if(h.memoizedState!==null){Mh(u);continue}}_!==null?(_.return=h,T=_):Mh(u)}d=d.sibling}e:for(d=null,u=t;;){if(u.tag===5){if(d===null){d=u;try{i=u.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=u.stateNode,a=u.memoizedProps.style,o=a!=null&&a.hasOwnProperty("display")?a.display:null,l.style.display=xp("display",o))}catch(v){ne(t,t.return,v)}}}else if(u.tag===6){if(d===null)try{u.stateNode.nodeValue=c?"":u.memoizedProps}catch(v){ne(t,t.return,v)}}else if((u.tag!==22&&u.tag!==23||u.memoizedState===null||u===t)&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===t)break e;for(;u.sibling===null;){if(u.return===null||u.return===t)break e;d===u&&(d=null),u=u.return}d===u&&(d=null),u.sibling.return=u.return,u=u.sibling}}break;case 19:et(e,t),pt(t),r&4&&Dh(t);break;case 21:break;default:et(e,t),pt(t)}}function pt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(tg(n)){var r=n;break e}n=n.return}throw Error(S(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Fi(i,""),r.flags&=-33);var s=Oh(t);fc(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=Oh(t);hc(t,l,o);break;default:throw Error(S(161))}}catch(a){ne(t,t.return,a)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function qw(t,e,n){T=t,ig(t)}function ig(t,e,n){for(var r=(t.mode&1)!==0;T!==null;){var i=T,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Hs;if(!o){var l=i.alternate,a=l!==null&&l.memoizedState!==null||Ee;l=Hs;var c=Ee;if(Hs=o,(Ee=a)&&!c)for(T=i;T!==null;)o=T,a=o.child,o.tag===22&&o.memoizedState!==null?bh(i):a!==null?(a.return=o,T=a):bh(i);for(;s!==null;)T=s,ig(s),s=s.sibling;T=i,Hs=l,Ee=c}Lh(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,T=s):Lh(t)}}function Lh(t){for(;T!==null;){var e=T;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Ee||pl(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Ee)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:tt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&yh(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}yh(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var a=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var u=d.dehydrated;u!==null&&Wi(u)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(S(163))}Ee||e.flags&512&&dc(e)}catch(h){ne(e,e.return,h)}}if(e===t){T=null;break}if(n=e.sibling,n!==null){n.return=e.return,T=n;break}T=e.return}}function Mh(t){for(;T!==null;){var e=T;if(e===t){T=null;break}var n=e.sibling;if(n!==null){n.return=e.return,T=n;break}T=e.return}}function bh(t){for(;T!==null;){var e=T;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{pl(4,e)}catch(a){ne(e,n,a)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(a){ne(e,i,a)}}var s=e.return;try{dc(e)}catch(a){ne(e,s,a)}break;case 5:var o=e.return;try{dc(e)}catch(a){ne(e,o,a)}}}catch(a){ne(e,e.return,a)}if(e===t){T=null;break}var l=e.sibling;if(l!==null){l.return=e.return,T=l;break}T=e.return}}var Qw=Math.ceil,Oo=jt.ReactCurrentDispatcher,Cu=jt.ReactCurrentOwner,Qe=jt.ReactCurrentBatchConfig,z=0,pe=null,se=null,_e=0,ze=0,fr=vn(0),ae=0,Ji=null,Wn=0,ml=0,Iu=0,xi=null,Pe=null,ku=0,Mr=1/0,Et=null,Do=!1,pc=null,on=null,$s=!1,Zt=null,Lo=0,Pi=0,mc=null,so=-1,oo=0;function ke(){return z&6?ie():so!==-1?so:so=ie()}function ln(t){return t.mode&1?z&2&&_e!==0?_e&-_e:Ow.transition!==null?(oo===0&&(oo=Bp()),oo):(t=B,t!==0||(t=window.event,t=t===void 0?16:Qp(t.type)),t):1}function ut(t,e,n,r){if(50<Pi)throw Pi=0,mc=null,Error(S(185));ds(t,n,r),(!(z&2)||t!==pe)&&(t===pe&&(!(z&2)&&(ml|=n),ae===4&&Gt(t,_e)),be(t,r),n===1&&z===0&&!(e.mode&1)&&(Mr=ie()+500,dl&&wn()))}function be(t,e){var n=t.callbackNode;Ov(t,e);var r=_o(t,t===pe?_e:0);if(r===0)n!==null&&$d(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&$d(n),e===1)t.tag===0?Aw(Fh.bind(null,t)):pm(Fh.bind(null,t)),Nw(function(){!(z&6)&&wn()}),n=null;else{switch(Vp(r)){case 1:n=Xc;break;case 4:n=zp;break;case 16:n=go;break;case 536870912:n=Wp;break;default:n=go}n=hg(n,sg.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function sg(t,e){if(so=-1,oo=0,z&6)throw Error(S(327));var n=t.callbackNode;if(Er()&&t.callbackNode!==n)return null;var r=_o(t,t===pe?_e:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Mo(t,r);else{e=r;var i=z;z|=2;var s=lg();(pe!==t||_e!==e)&&(Et=null,Mr=ie()+500,Mn(t,e));do try{Jw();break}catch(l){og(t,l)}while(1);uu(),Oo.current=s,z=i,se!==null?e=0:(pe=null,_e=0,e=ae)}if(e!==0){if(e===2&&(i=Ba(t),i!==0&&(r=i,e=gc(t,i))),e===1)throw n=Ji,Mn(t,0),Gt(t,r),be(t,ie()),n;if(e===6)Gt(t,r);else{if(i=t.current.alternate,!(r&30)&&!Yw(i)&&(e=Mo(t,r),e===2&&(s=Ba(t),s!==0&&(r=s,e=gc(t,s))),e===1))throw n=Ji,Mn(t,0),Gt(t,r),be(t,ie()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(S(345));case 2:Nn(t,Pe,Et);break;case 3:if(Gt(t,r),(r&130023424)===r&&(e=ku+500-ie(),10<e)){if(_o(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){ke(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Ya(Nn.bind(null,t,Pe,Et),e);break}Nn(t,Pe,Et);break;case 4:if(Gt(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-ct(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=ie()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Qw(r/1960))-r,10<r){t.timeoutHandle=Ya(Nn.bind(null,t,Pe,Et),r);break}Nn(t,Pe,Et);break;case 5:Nn(t,Pe,Et);break;default:throw Error(S(329))}}}return be(t,ie()),t.callbackNode===n?sg.bind(null,t):null}function gc(t,e){var n=xi;return t.current.memoizedState.isDehydrated&&(Mn(t,e).flags|=256),t=Mo(t,e),t!==2&&(e=Pe,Pe=n,e!==null&&_c(e)),t}function _c(t){Pe===null?Pe=t:Pe.push.apply(Pe,t)}function Yw(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!ht(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Gt(t,e){for(e&=~Iu,e&=~ml,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-ct(e),r=1<<n;t[n]=-1,e&=~r}}function Fh(t){if(z&6)throw Error(S(327));Er();var e=_o(t,0);if(!(e&1))return be(t,ie()),null;var n=Mo(t,e);if(t.tag!==0&&n===2){var r=Ba(t);r!==0&&(e=r,n=gc(t,r))}if(n===1)throw n=Ji,Mn(t,0),Gt(t,e),be(t,ie()),n;if(n===6)throw Error(S(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Nn(t,Pe,Et),be(t,ie()),null}function Tu(t,e){var n=z;z|=1;try{return t(e)}finally{z=n,z===0&&(Mr=ie()+500,dl&&wn())}}function Bn(t){Zt!==null&&Zt.tag===0&&!(z&6)&&Er();var e=z;z|=1;var n=Qe.transition,r=B;try{if(Qe.transition=null,B=1,t)return t()}finally{B=r,Qe.transition=n,z=e,!(z&6)&&wn()}}function Nu(){ze=fr.current,Y(fr)}function Mn(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Tw(n)),se!==null)for(n=se.return;n!==null;){var r=n;switch(lu(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&So();break;case 3:Dr(),Y(Le),Y(Ce),gu();break;case 5:mu(r);break;case 4:Dr();break;case 13:Y(Z);break;case 19:Y(Z);break;case 10:du(r.type._context);break;case 22:case 23:Nu()}n=n.return}if(pe=t,se=t=an(t.current,null),_e=ze=e,ae=0,Ji=null,Iu=ml=Wn=0,Pe=xi=null,An!==null){for(e=0;e<An.length;e++)if(n=An[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}An=null}return t}function og(t,e){do{var n=se;try{if(uu(),no.current=Ao,Po){for(var r=ee.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Po=!1}if(zn=0,de=oe=ee=null,Ni=!1,Qi=0,Cu.current=null,n===null||n.return===null){ae=1,Ji=e,se=null;break}e:{var s=t,o=n.return,l=n,a=e;if(e=_e,l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var c=a,d=l,u=d.tag;if(!(d.mode&1)&&(u===0||u===11||u===15)){var h=d.alternate;h?(d.updateQueue=h.updateQueue,d.memoizedState=h.memoizedState,d.lanes=h.lanes):(d.updateQueue=null,d.memoizedState=null)}var _=Ih(o);if(_!==null){_.flags&=-257,kh(_,o,l,s,e),_.mode&1&&Ch(s,c,e),e=_,a=c;var y=e.updateQueue;if(y===null){var v=new Set;v.add(a),e.updateQueue=v}else y.add(a);break e}else{if(!(e&1)){Ch(s,c,e),Ru();break e}a=Error(S(426))}}else if(X&&l.mode&1){var I=Ih(o);if(I!==null){!(I.flags&65536)&&(I.flags|=256),kh(I,o,l,s,e),au(Lr(a,l));break e}}s=a=Lr(a,l),ae!==4&&(ae=2),xi===null?xi=[s]:xi.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var m=Vm(s,a,e);_h(s,m);break e;case 1:l=a;var p=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof p.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(on===null||!on.has(g)))){s.flags|=65536,e&=-e,s.lanes|=e;var E=Hm(s,l,e);_h(s,E);break e}}s=s.return}while(s!==null)}cg(n)}catch(k){e=k,se===n&&n!==null&&(se=n=n.return);continue}break}while(1)}function lg(){var t=Oo.current;return Oo.current=Ao,t===null?Ao:t}function Ru(){(ae===0||ae===3||ae===2)&&(ae=4),pe===null||!(Wn&268435455)&&!(ml&268435455)||Gt(pe,_e)}function Mo(t,e){var n=z;z|=2;var r=lg();(pe!==t||_e!==e)&&(Et=null,Mn(t,e));do try{Xw();break}catch(i){og(t,i)}while(1);if(uu(),z=n,Oo.current=r,se!==null)throw Error(S(261));return pe=null,_e=0,ae}function Xw(){for(;se!==null;)ag(se)}function Jw(){for(;se!==null&&!Cv();)ag(se)}function ag(t){var e=dg(t.alternate,t,ze);t.memoizedProps=t.pendingProps,e===null?cg(t):se=e,Cu.current=null}function cg(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=$w(n,e),n!==null){n.flags&=32767,se=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{ae=6,se=null;return}}else if(n=Hw(n,e,ze),n!==null){se=n;return}if(e=e.sibling,e!==null){se=e;return}se=e=t}while(e!==null);ae===0&&(ae=5)}function Nn(t,e,n){var r=B,i=Qe.transition;try{Qe.transition=null,B=1,Zw(t,e,n,r)}finally{Qe.transition=i,B=r}return null}function Zw(t,e,n,r){do Er();while(Zt!==null);if(z&6)throw Error(S(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(S(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(Dv(t,s),t===pe&&(se=pe=null,_e=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||$s||($s=!0,hg(go,function(){return Er(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Qe.transition,Qe.transition=null;var o=B;B=1;var l=z;z|=4,Cu.current=null,Gw(t,n),rg(n,t),vw(qa),yo=!!Ga,qa=Ga=null,t.current=n,qw(n),Iv(),z=l,B=o,Qe.transition=s}else t.current=n;if($s&&($s=!1,Zt=t,Lo=i),s=t.pendingLanes,s===0&&(on=null),Nv(n.stateNode),be(t,ie()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Do)throw Do=!1,t=pc,pc=null,t;return Lo&1&&t.tag!==0&&Er(),s=t.pendingLanes,s&1?t===mc?Pi++:(Pi=0,mc=t):Pi=0,wn(),null}function Er(){if(Zt!==null){var t=Vp(Lo),e=Qe.transition,n=B;try{if(Qe.transition=null,B=16>t?16:t,Zt===null)var r=!1;else{if(t=Zt,Zt=null,Lo=0,z&6)throw Error(S(331));var i=z;for(z|=4,T=t.current;T!==null;){var s=T,o=s.child;if(T.flags&16){var l=s.deletions;if(l!==null){for(var a=0;a<l.length;a++){var c=l[a];for(T=c;T!==null;){var d=T;switch(d.tag){case 0:case 11:case 15:Ri(8,d,s)}var u=d.child;if(u!==null)u.return=d,T=u;else for(;T!==null;){d=T;var h=d.sibling,_=d.return;if(eg(d),d===c){T=null;break}if(h!==null){h.return=_,T=h;break}T=_}}}var y=s.alternate;if(y!==null){var v=y.child;if(v!==null){y.child=null;do{var I=v.sibling;v.sibling=null,v=I}while(v!==null)}}T=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,T=o;else e:for(;T!==null;){if(s=T,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ri(9,s,s.return)}var m=s.sibling;if(m!==null){m.return=s.return,T=m;break e}T=s.return}}var p=t.current;for(T=p;T!==null;){o=T;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,T=g;else e:for(o=p;T!==null;){if(l=T,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:pl(9,l)}}catch(k){ne(l,l.return,k)}if(l===o){T=null;break e}var E=l.sibling;if(E!==null){E.return=l.return,T=E;break e}T=l.return}}if(z=i,wn(),_t&&typeof _t.onPostCommitFiberRoot=="function")try{_t.onPostCommitFiberRoot(ol,t)}catch{}r=!0}return r}finally{B=n,Qe.transition=e}}return!1}function jh(t,e,n){e=Lr(n,e),e=Vm(t,e,1),t=sn(t,e,1),e=ke(),t!==null&&(ds(t,1,e),be(t,e))}function ne(t,e,n){if(t.tag===3)jh(t,t,n);else for(;e!==null;){if(e.tag===3){jh(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(on===null||!on.has(r))){t=Lr(n,t),t=Hm(e,t,1),e=sn(e,t,1),t=ke(),e!==null&&(ds(e,1,t),be(e,t));break}}e=e.return}}function e0(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=ke(),t.pingedLanes|=t.suspendedLanes&n,pe===t&&(_e&n)===n&&(ae===4||ae===3&&(_e&130023424)===_e&&500>ie()-ku?Mn(t,0):Iu|=n),be(t,e)}function ug(t,e){e===0&&(t.mode&1?(e=Ms,Ms<<=1,!(Ms&130023424)&&(Ms=4194304)):e=1);var n=ke();t=Ot(t,e),t!==null&&(ds(t,e,n),be(t,n))}function t0(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),ug(t,n)}function n0(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(S(314))}r!==null&&r.delete(e),ug(t,n)}var dg;dg=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Le.current)Ae=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Ae=!1,Vw(t,e,n);Ae=!!(t.flags&131072)}else Ae=!1,X&&e.flags&1048576&&mm(e,ko,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;io(t,e),t=e.pendingProps;var i=Pr(e,Ce.current);wr(e,n),i=yu(null,e,r,t,i,n);var s=vu();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Me(r)?(s=!0,Co(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,fu(e),i.updater=fl,e.stateNode=i,i._reactInternals=e,rc(e,r,t,n),e=oc(null,e,r,!0,s,n)):(e.tag=0,X&&s&&ou(e),Ie(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(io(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=i0(r),t=tt(r,t),i){case 0:e=sc(null,e,r,t,n);break e;case 1:e=Rh(null,e,r,t,n);break e;case 11:e=Th(null,e,r,t,n);break e;case 14:e=Nh(null,e,r,tt(r.type,t),n);break e}throw Error(S(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:tt(r,i),sc(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:tt(r,i),Rh(t,e,r,i,n);case 3:e:{if(qm(e),t===null)throw Error(S(387));r=e.pendingProps,s=e.memoizedState,i=s.element,Em(t,e),Ro(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Lr(Error(S(423)),e),e=xh(t,e,r,n,i);break e}else if(r!==i){i=Lr(Error(S(424)),e),e=xh(t,e,r,n,i);break e}else for(We=rn(e.stateNode.containerInfo.firstChild),Be=e,X=!0,rt=null,n=vm(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ar(),r===i){e=Dt(t,e,n);break e}Ie(t,e,r,n)}e=e.child}return e;case 5:return Sm(e),t===null&&ec(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Qa(r,i)?o=null:s!==null&&Qa(r,s)&&(e.flags|=32),Gm(t,e),Ie(t,e,o,n),e.child;case 6:return t===null&&ec(e),null;case 13:return Qm(t,e,n);case 4:return pu(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Or(e,null,r,n):Ie(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:tt(r,i),Th(t,e,r,i,n);case 7:return Ie(t,e,e.pendingProps,n),e.child;case 8:return Ie(t,e,e.pendingProps.children,n),e.child;case 12:return Ie(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,K(To,r._currentValue),r._currentValue=o,s!==null)if(ht(s.value,o)){if(s.children===i.children&&!Le.current){e=Dt(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var a=l.firstContext;a!==null;){if(a.context===r){if(s.tag===1){a=Rt(-1,n&-n),a.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?a.next=a:(a.next=d.next,d.next=a),c.pending=a}}s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),tc(s.return,n,e),l.lanes|=n;break}a=a.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(S(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),tc(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Ie(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,wr(e,n),i=Ye(i),r=r(i),e.flags|=1,Ie(t,e,r,n),e.child;case 14:return r=e.type,i=tt(r,e.pendingProps),i=tt(r.type,i),Nh(t,e,r,i,n);case 15:return $m(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:tt(r,i),io(t,e),e.tag=1,Me(r)?(t=!0,Co(e)):t=!1,wr(e,n),Bm(e,r,i),rc(e,r,i,n),oc(null,e,r,!0,t,n);case 19:return Ym(t,e,n);case 22:return Km(t,e,n)}throw Error(S(156,e.tag))};function hg(t,e){return Up(t,e)}function r0(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function qe(t,e,n,r){return new r0(t,e,n,r)}function xu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function i0(t){if(typeof t=="function")return xu(t)?1:0;if(t!=null){if(t=t.$$typeof,t===qc)return 11;if(t===Qc)return 14}return 2}function an(t,e){var n=t.alternate;return n===null?(n=qe(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function lo(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")xu(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case rr:return bn(n.children,i,s,e);case Gc:o=8,i|=8;break;case Na:return t=qe(12,n,e,i|2),t.elementType=Na,t.lanes=s,t;case Ra:return t=qe(13,n,e,i),t.elementType=Ra,t.lanes=s,t;case xa:return t=qe(19,n,e,i),t.elementType=xa,t.lanes=s,t;case Sp:return gl(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case wp:o=10;break e;case Ep:o=9;break e;case qc:o=11;break e;case Qc:o=14;break e;case Ht:o=16,r=null;break e}throw Error(S(130,t==null?t:typeof t,""))}return e=qe(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function bn(t,e,n,r){return t=qe(7,t,r,e),t.lanes=n,t}function gl(t,e,n,r){return t=qe(22,t,r,e),t.elementType=Sp,t.lanes=n,t.stateNode={isHidden:!1},t}function aa(t,e,n){return t=qe(6,t,null,e),t.lanes=n,t}function ca(t,e,n){return e=qe(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function s0(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Vl(0),this.expirationTimes=Vl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Vl(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Pu(t,e,n,r,i,s,o,l,a){return t=new s0(t,e,n,l,a),e===1?(e=1,s===!0&&(e|=8)):e=0,s=qe(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},fu(s),t}function o0(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:nr,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function fg(t){if(!t)return mn;t=t._reactInternals;e:{if(Xn(t)!==t||t.tag!==1)throw Error(S(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Me(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(S(171))}if(t.tag===1){var n=t.type;if(Me(n))return fm(t,n,e)}return e}function pg(t,e,n,r,i,s,o,l,a){return t=Pu(n,r,!0,t,i,s,o,l,a),t.context=fg(null),n=t.current,r=ke(),i=ln(n),s=Rt(r,i),s.callback=e??null,sn(n,s,i),t.current.lanes=i,ds(t,i,r),be(t,r),t}function _l(t,e,n,r){var i=e.current,s=ke(),o=ln(i);return n=fg(n),e.context===null?e.context=n:e.pendingContext=n,e=Rt(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=sn(i,e,o),t!==null&&(ut(t,i,o,s),to(t,i,o)),o}function bo(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Uh(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Au(t,e){Uh(t,e),(t=t.alternate)&&Uh(t,e)}function l0(){return null}var mg=typeof reportError=="function"?reportError:function(t){console.error(t)};function Ou(t){this._internalRoot=t}yl.prototype.render=Ou.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(S(409));_l(t,e,null,null)};yl.prototype.unmount=Ou.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Bn(function(){_l(null,t,null,null)}),e[At]=null}};function yl(t){this._internalRoot=t}yl.prototype.unstable_scheduleHydration=function(t){if(t){var e=Kp();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Kt.length&&e!==0&&e<Kt[n].priority;n++);Kt.splice(n,0,t),n===0&&qp(t)}};function Du(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function vl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function zh(){}function a0(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=bo(o);s.call(c)}}var o=pg(e,r,t,0,null,!1,!1,"",zh);return t._reactRootContainer=o,t[At]=o.current,Hi(t.nodeType===8?t.parentNode:t),Bn(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var c=bo(a);l.call(c)}}var a=Pu(t,0,!1,null,null,!1,!1,"",zh);return t._reactRootContainer=a,t[At]=a.current,Hi(t.nodeType===8?t.parentNode:t),Bn(function(){_l(e,a,n,r)}),a}function wl(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var a=bo(o);l.call(a)}}_l(e,o,t,i)}else o=a0(n,e,t,i,r);return bo(o)}Hp=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=yi(e.pendingLanes);n!==0&&(Jc(e,n|1),be(e,ie()),!(z&6)&&(Mr=ie()+500,wn()))}break;case 13:Bn(function(){var r=Ot(t,1);if(r!==null){var i=ke();ut(r,t,1,i)}}),Au(t,1)}};Zc=function(t){if(t.tag===13){var e=Ot(t,134217728);if(e!==null){var n=ke();ut(e,t,134217728,n)}Au(t,134217728)}};$p=function(t){if(t.tag===13){var e=ln(t),n=Ot(t,e);if(n!==null){var r=ke();ut(n,t,e,r)}Au(t,e)}};Kp=function(){return B};Gp=function(t,e){var n=B;try{return B=t,e()}finally{B=n}};Ua=function(t,e,n){switch(e){case"input":if(Oa(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=ul(r);if(!i)throw Error(S(90));Ip(r),Oa(r,i)}}}break;case"textarea":Tp(t,n);break;case"select":e=n.value,e!=null&&gr(t,!!n.multiple,e,!1)}};Dp=Tu;Lp=Bn;var c0={usingClientEntryPoint:!1,Events:[fs,lr,ul,Ap,Op,Tu]},ui={findFiberByHostInstance:Pn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},u0={bundleType:ui.bundleType,version:ui.version,rendererPackageName:ui.rendererPackageName,rendererConfig:ui.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:jt.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Fp(t),t===null?null:t.stateNode},findFiberByHostInstance:ui.findFiberByHostInstance||l0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ks=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ks.isDisabled&&Ks.supportsFiber)try{ol=Ks.inject(u0),_t=Ks}catch{}}He.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=c0;He.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Du(e))throw Error(S(200));return o0(t,e,null,n)};He.createRoot=function(t,e){if(!Du(t))throw Error(S(299));var n=!1,r="",i=mg;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Pu(t,1,!1,null,null,n,!1,r,i),t[At]=e.current,Hi(t.nodeType===8?t.parentNode:t),new Ou(e)};He.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(S(188)):(t=Object.keys(t).join(","),Error(S(268,t)));return t=Fp(e),t=t===null?null:t.stateNode,t};He.flushSync=function(t){return Bn(t)};He.hydrate=function(t,e,n){if(!vl(e))throw Error(S(200));return wl(null,t,e,!0,n)};He.hydrateRoot=function(t,e,n){if(!Du(t))throw Error(S(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=mg;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=pg(e,null,t,1,n??null,i,!1,s,o),t[At]=e.current,Hi(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new yl(e)};He.render=function(t,e,n){if(!vl(e))throw Error(S(200));return wl(null,t,e,!1,n)};He.unmountComponentAtNode=function(t){if(!vl(t))throw Error(S(40));return t._reactRootContainer?(Bn(function(){wl(null,null,t,!1,function(){t._reactRootContainer=null,t[At]=null})}),!0):!1};He.unstable_batchedUpdates=Tu;He.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!vl(n))throw Error(S(200));if(t==null||t._reactInternals===void 0)throw Error(S(38));return wl(t,e,n,!1,r)};He.version="18.3.1-next-f1338f8080-20240426";function gg(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(gg)}catch(t){console.error(t)}}gg(),gp.exports=He;var d0=gp.exports,Wh=d0;ka.createRoot=Wh.createRoot,ka.hydrateRoot=Wh.hydrateRoot;function _g(){return f.jsx("img",{src:"/logo.png",alt:"Bruncheria Espinoza",style:{height:60,width:60,borderRadius:"50%",objectFit:"cover",flexShrink:0}})}function h0({onStart:t,menuLoading:e}){return f.jsxs("div",{className:"welcome-screen",children:[f.jsx("div",{className:"welcome-brand",children:f.jsx("img",{src:"/logo.png",alt:"Bruncheria Espinoza",className:"welcome-logo-img"})}),f.jsx("button",{className:"welcome-cta",onClick:t,disabled:e,style:e?{opacity:.6,cursor:"default",animation:"none"}:{},children:e?f.jsx("span",{children:"Loading menu…"}):f.jsxs(f.Fragment,{children:[f.jsx("span",{children:"Order Here"}),f.jsx("span",{className:"welcome-cta-sep",children:"·"}),f.jsx("span",{children:"Ordene Aquí"})]})}),f.jsx("a",{href:"/kitchen",style:{position:"absolute",bottom:16,right:20,fontSize:12,fontWeight:600,color:"rgba(0,0,0,0.35)",textDecoration:"none",padding:"6px 12px",borderRadius:999,background:"rgba(0,0,0,0.08)"},children:"🍳 Kitchen view"})]})}function f0(t,e){return t.price+e.reduce((n,r)=>n+(r.price||0),0)}function p0(t){return t.reduce((e,n)=>e+f0(n.item,n.modifiers),0)}function m0({item:t,onDone:e,onClose:n}){const[r,i]=L.useState([]);function s(d){i(u=>u.find(h=>h.id===d.id)?u.filter(h=>h.id!==d.id):[...u,d])}const o=t.modifiers.filter(d=>d.group==="remove"),l=t.modifiers.filter(d=>d.group==="add"),a=r.reduce((d,u)=>d+(u.price||0),0),c=t.price+a;return f.jsxs(f.Fragment,{children:[f.jsx("div",{className:"modal-backdrop",onClick:n}),f.jsxs("div",{className:"modifier-modal",children:[f.jsx("div",{className:"modal-drag"}),f.jsxs("div",{className:"modal-header",children:[t.emoji&&f.jsx("span",{className:"modal-item-emoji",children:t.emoji}),f.jsx("span",{className:"modal-item-name",children:t.name_en}),f.jsxs("span",{className:"modal-item-price",children:["$",c.toFixed(2)]})]}),f.jsxs("div",{className:"modal-scroll",children:[o.length>0&&f.jsx(Bh,{label:"Remove",modifiers:o,selected:r,onToggle:s}),l.length>0&&f.jsx(Bh,{label:"Add",modifiers:l,selected:r,onToggle:s}),t.modifiers.length===0&&f.jsx("p",{style:{color:"var(--gray)",fontSize:14,padding:"12px 0"},children:"No modifications available"})]}),f.jsx("div",{className:"modal-footer",children:f.jsxs("button",{className:"btn-primary",onClick:()=>e(r),children:["Add to Order · $",c.toFixed(2)]})})]})]})}function Bh({label:t,modifiers:e,selected:n,onToggle:r}){return f.jsxs("div",{className:"modifier-group",children:[f.jsx("div",{className:"modifier-group-label",children:t}),f.jsx("div",{className:"modifier-grid",children:e.map(i=>{const s=!!n.find(o=>o.id===i.id);return f.jsxs("button",{className:`modifier-btn${s?" selected":""}`,onClick:()=>r(i),children:[f.jsxs("span",{children:[i.en,i.price>0&&f.jsxs("span",{style:{fontWeight:600,color:"var(--gray)",marginLeft:4},children:["(+$",i.price.toFixed(2),")"]})]}),s&&f.jsx("span",{className:"modifier-check",children:"✓"})]},i.id)})})]})}function g0({cart:t,menuItems:e,menuSource:n,onAddItem:r,onCheckout:i,onBack:s}){const[o,l]=L.useState(null),a=p0(t),c=t.length,d=t.reduce((I,m)=>(I[m.item.id]=(I[m.item.id]||0)+1,I),{});function u(I){I.modifiers&&I.modifiers.length>0?l(I):r(I,[])}function h(I){r(o,I),l(null)}const _=e.filter(I=>I.category==="food"),y=e.filter(I=>I.category==="drink"),v=_0(_);return f.jsxs("div",{className:"menu-screen",children:[f.jsxs("div",{className:"menu-header",children:[f.jsx("button",{className:"btn-back",onClick:s,children:"← Back"}),f.jsx(_g,{}),c>0&&f.jsxs("button",{className:"menu-checkout-btn",onClick:i,style:{marginLeft:"auto"},children:[f.jsx("span",{className:"menu-badge",children:c}),"$",a.toFixed(2)]})]}),n==="fallback"&&f.jsx("div",{style:{background:"#FFF8DC",borderBottom:"1px solid #E8D87A",padding:"6px 20px",fontSize:12,fontWeight:600,color:"#7A6A00",flexShrink:0},children:"⚠ Using backup menu — Google Sheet unavailable"}),e.length===0?f.jsx("div",{style:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",color:"var(--gray)"},children:"Loading menu…"}):f.jsxs("div",{className:"menu-scroll",children:[v.map(({label:I,items:m})=>f.jsxs("div",{className:"menu-section",children:[f.jsx("div",{className:"menu-section-label",children:I}),f.jsx("div",{className:"menu-grid",children:m.map(p=>f.jsx(Vh,{item:p,count:d[p.id],onTap:()=>u(p)},p.id))})]},I)),y.length>0&&f.jsxs("div",{className:"menu-section",children:[f.jsx("div",{className:"menu-section-label",children:"Drinks"}),f.jsx("div",{className:"menu-grid",children:y.map(I=>f.jsx(Vh,{item:I,count:d[I.id],onTap:()=>u(I),isDrink:!0},I.id))})]})]}),c>0&&f.jsx("div",{className:"menu-footer",children:f.jsxs("button",{className:"btn-primary",onClick:i,children:["Review Order · $",a.toFixed(2)]})}),o&&f.jsx(m0,{item:o,onDone:h,onClose:()=>l(null)})]})}function Vh({item:t,count:e,onTap:n,isDrink:r}){return f.jsxs("button",{className:`menu-item-btn${r?" drink-btn":""}`,onClick:n,children:[e>0&&f.jsxs("span",{className:"menu-item-count",children:["×",e]}),t.emoji&&f.jsx("span",{className:"menu-item-emoji",children:t.emoji}),f.jsx("span",{className:"menu-item-name",children:t.name_en}),f.jsxs("span",{className:"menu-item-price",children:["$",t.price.toFixed(2)]})]})}function _0(t){if(!t.some(i=>i.subcategory))return[{label:"Food",items:t}];const n=[],r={};for(const i of t){const s=i.subcategory||"Other";r[s]||(r[s]=[],n.push(s)),r[s].push(i)}return n.map(i=>({label:i,items:r[i]}))}function Hh(t,e){return t.price+e.reduce((n,r)=>n+(r.price||0),0)}function y0({cart:t,onConfirm:e,onBack:n,onReset:r}){const i=t.reduce((s,o)=>s+Hh(o.item,o.modifiers),0);return f.jsxs("div",{className:"review-screen",children:[f.jsxs("div",{className:"screen-header",children:[f.jsx("button",{className:"btn-back",onClick:n,children:"← Back"}),f.jsx(_g,{}),f.jsx("button",{onClick:r,style:{marginLeft:"auto",fontSize:22,fontWeight:700,color:"var(--gray)",padding:"14px 24px",borderRadius:"var(--r-full)",transition:"background var(--t)"},children:"Start Over"})]}),f.jsxs("div",{className:"review-scroll",children:[f.jsxs("div",{className:"review-section",children:[f.jsx("div",{className:"review-section-label",children:"🧾 Your Order"}),t.map(s=>{const o=Hh(s.item,s.modifiers);return f.jsxs("div",{className:"review-item",children:[f.jsxs("div",{className:"review-item-left",children:[f.jsxs("div",{className:"review-item-name",children:[s.item.emoji&&`${s.item.emoji} `,s.item.name_en]}),s.modifiers.length>0&&f.jsx("div",{className:"review-mods",children:s.modifiers.map(l=>f.jsxs("span",{className:"review-mod-tag",children:[l.en,l.price>0&&` +$${l.price.toFixed(2)}`]},l.id))})]}),f.jsxs("div",{className:"review-item-price",children:["$",o.toFixed(2)]})]},s.id)})]}),f.jsxs("div",{className:"review-total-bar",children:[f.jsx("span",{className:"review-total-label",children:"Total"}),f.jsxs("span",{className:"review-total-amount",children:["$",i.toFixed(2)]})]}),f.jsx("div",{style:{textAlign:"center",fontSize:15,color:"var(--gray)",marginTop:6},children:"+ tax at checkout"})]}),f.jsxs("div",{className:"screen-footer",children:[f.jsx("button",{className:"btn-primary",onClick:e,children:"Confirm Order · Confirmar"}),f.jsx("button",{className:"btn-add-more",onClick:n,children:"+ Add something else · Agregar más"})]})]})}const v0=()=>{};/**
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
 */const yg={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const C=function(t,e){if(!t)throw Kr(e)},Kr=function(t){return new Error("Firebase Database ("+yg.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const vg=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},w0=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],a=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(a>>10)),e[r++]=String.fromCharCode(56320+(a&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Lu={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,a=i+2<t.length,c=a?t[i+2]:0,d=s>>2,u=(s&3)<<4|l>>4;let h=(l&15)<<2|c>>6,_=c&63;a||(_=64,o||(h=64)),r.push(n[d],n[u],n[h],n[_])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(vg(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):w0(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const u=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||c==null||u==null)throw new E0;const h=s<<2|l>>4;if(r.push(h),c!==64){const _=l<<4&240|c>>2;if(r.push(_),u!==64){const y=c<<6&192|u;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class E0 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const wg=function(t){const e=vg(t);return Lu.encodeByteArray(e,!0)},Fo=function(t){return wg(t).replace(/\./g,"")},jo=function(t){try{return Lu.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function S0(t){return Eg(void 0,t)}function Eg(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!C0(n)||(t[n]=Eg(t[n],e[n]));return t}function C0(t){return t!=="__proto__"}/**
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
 */function I0(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const k0=()=>I0().__FIREBASE_DEFAULTS__,T0=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},N0=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&jo(t[1]);return e&&JSON.parse(e)},Mu=()=>{try{return v0()||k0()||T0()||N0()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Sg=t=>{var e,n;return(n=(e=Mu())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},R0=t=>{const e=Sg(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Cg=()=>{var t;return(t=Mu())==null?void 0:t.config},Ig=t=>{var e;return(e=Mu())==null?void 0:e[`_${t}`]};/**
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
 */class El{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function x0(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}},...t},l="";return[Fo(JSON.stringify(n)),Fo(JSON.stringify(o)),l].join(".")}/**
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
 */function Te(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function bu(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Te())}function P0(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function A0(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function kg(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function O0(){const t=Te();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Tg(){return yg.NODE_ADMIN===!0}function D0(){try{return typeof indexedDB=="object"}catch{return!1}}function L0(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)==null?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const M0="FirebaseError";class En extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=M0,Object.setPrototypeOf(this,En.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ms.prototype.create)}}class ms{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?b0(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new En(i,l,r)}}function b0(t,e){return t.replace(F0,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const F0=/\{\$([^}]+)}/g;/**
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
 */function Zi(t){return JSON.parse(t)}function fe(t){return JSON.stringify(t)}/**
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
 */const Ng=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=Zi(jo(s[0])||""),n=Zi(jo(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},j0=function(t){const e=Ng(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},U0=function(t){const e=Ng(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function Ut(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function br(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function yc(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Uo(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function Vn(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if($h(s)&&$h(o)){if(!Vn(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function $h(t){return t!==null&&typeof t=="object"}/**
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
 */function Gr(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function wi(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Ei(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
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
 */class z0{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let u=0;u<16;u++)r[u]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let u=0;u<16;u++)r[u]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let u=16;u<80;u++){const h=r[u-3]^r[u-8]^r[u-14]^r[u-16];r[u]=(h<<1|h>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],l=this.chain_[3],a=this.chain_[4],c,d;for(let u=0;u<80;u++){u<40?u<20?(c=l^s&(o^l),d=1518500249):(c=s^o^l,d=1859775393):u<60?(c=s&o|l&(s|o),d=2400959708):(c=s^o^l,d=3395469782);const h=(i<<5|i>>>27)+c+a+d+r[u]&4294967295;a=l,l=o,o=(s<<30|s>>>2)&4294967295,s=i,i=h}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+a&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function W0(t,e){const n=new B0(t,e);return n.subscribe.bind(n)}class B0{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");V0(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=ua),i.error===void 0&&(i.error=ua),i.complete===void 0&&(i.complete=ua);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function V0(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ua(){}function Fu(t,e){return`${t} failed: ${e} argument `}/**
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
 */const H0=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,C(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Sl=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function gs(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Rg(t){return(await fetch(t,{credentials:"include"})).ok}class Hn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Rn="[DEFAULT]";/**
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
 */class $0{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new El;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(G0(e))try{this.getOrInitializeService({instanceIdentifier:Rn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Rn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Rn){return this.instances.has(e)}getOptions(e=Rn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),i=this.onInitCallbacks.get(r)??new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:K0(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Rn){return this.component?this.component.multipleInstances?e:Rn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function K0(t){return t===Rn?void 0:t}function G0(t){return t.instantiationMode==="EAGER"}/**
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
 */class q0{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new $0(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var V;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(V||(V={}));const Q0={debug:V.DEBUG,verbose:V.VERBOSE,info:V.INFO,warn:V.WARN,error:V.ERROR,silent:V.SILENT},Y0=V.INFO,X0={[V.DEBUG]:"log",[V.VERBOSE]:"log",[V.INFO]:"info",[V.WARN]:"warn",[V.ERROR]:"error"},J0=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=X0[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ju{constructor(e){this.name=e,this._logLevel=Y0,this._logHandler=J0,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in V))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Q0[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,V.DEBUG,...e),this._logHandler(this,V.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,V.VERBOSE,...e),this._logHandler(this,V.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,V.INFO,...e),this._logHandler(this,V.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,V.WARN,...e),this._logHandler(this,V.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,V.ERROR,...e),this._logHandler(this,V.ERROR,...e)}}const Z0=(t,e)=>e.some(n=>t instanceof n);let Kh,Gh;function eE(){return Kh||(Kh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function tE(){return Gh||(Gh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const xg=new WeakMap,vc=new WeakMap,Pg=new WeakMap,da=new WeakMap,Uu=new WeakMap;function nE(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(cn(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&xg.set(n,t)}).catch(()=>{}),Uu.set(e,t),e}function rE(t){if(vc.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});vc.set(t,e)}let wc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return vc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Pg.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return cn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function iE(t){wc=t(wc)}function sE(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(ha(this),e,...n);return Pg.set(r,e.sort?e.sort():[e]),cn(r)}:tE().includes(t)?function(...e){return t.apply(ha(this),e),cn(xg.get(this))}:function(...e){return cn(t.apply(ha(this),e))}}function oE(t){return typeof t=="function"?sE(t):(t instanceof IDBTransaction&&rE(t),Z0(t,eE())?new Proxy(t,wc):t)}function cn(t){if(t instanceof IDBRequest)return nE(t);if(da.has(t))return da.get(t);const e=oE(t);return e!==t&&(da.set(t,e),Uu.set(e,t)),e}const ha=t=>Uu.get(t);function lE(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=cn(o);return r&&o.addEventListener("upgradeneeded",a=>{r(cn(o.result),a.oldVersion,a.newVersion,cn(o.transaction),a)}),n&&o.addEventListener("blocked",a=>n(a.oldVersion,a.newVersion,a)),l.then(a=>{s&&a.addEventListener("close",()=>s()),i&&a.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const aE=["get","getKey","getAll","getAllKeys","count"],cE=["put","add","delete","clear"],fa=new Map;function qh(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(fa.get(e))return fa.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=cE.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||aE.includes(n)))return;const s=async function(o,...l){const a=this.transaction(o,i?"readwrite":"readonly");let c=a.store;return r&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),i&&a.done]))[0]};return fa.set(e,s),s}iE(t=>({...t,get:(e,n,r)=>qh(e,n)||t.get(e,n,r),has:(e,n)=>!!qh(e,n)||t.has(e,n)}));/**
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
 */class uE{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(dE(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function dE(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ec="@firebase/app",Qh="0.14.11";/**
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
 */const Lt=new ju("@firebase/app"),hE="@firebase/app-compat",fE="@firebase/analytics-compat",pE="@firebase/analytics",mE="@firebase/app-check-compat",gE="@firebase/app-check",_E="@firebase/auth",yE="@firebase/auth-compat",vE="@firebase/database",wE="@firebase/data-connect",EE="@firebase/database-compat",SE="@firebase/functions",CE="@firebase/functions-compat",IE="@firebase/installations",kE="@firebase/installations-compat",TE="@firebase/messaging",NE="@firebase/messaging-compat",RE="@firebase/performance",xE="@firebase/performance-compat",PE="@firebase/remote-config",AE="@firebase/remote-config-compat",OE="@firebase/storage",DE="@firebase/storage-compat",LE="@firebase/firestore",ME="@firebase/ai",bE="@firebase/firestore-compat",FE="firebase",jE="12.12.0";/**
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
 */const Sc="[DEFAULT]",UE={[Ec]:"fire-core",[hE]:"fire-core-compat",[pE]:"fire-analytics",[fE]:"fire-analytics-compat",[gE]:"fire-app-check",[mE]:"fire-app-check-compat",[_E]:"fire-auth",[yE]:"fire-auth-compat",[vE]:"fire-rtdb",[wE]:"fire-data-connect",[EE]:"fire-rtdb-compat",[SE]:"fire-fn",[CE]:"fire-fn-compat",[IE]:"fire-iid",[kE]:"fire-iid-compat",[TE]:"fire-fcm",[NE]:"fire-fcm-compat",[RE]:"fire-perf",[xE]:"fire-perf-compat",[PE]:"fire-rc",[AE]:"fire-rc-compat",[OE]:"fire-gcs",[DE]:"fire-gcs-compat",[LE]:"fire-fst",[bE]:"fire-fst-compat",[ME]:"fire-vertex","fire-js":"fire-js",[FE]:"fire-js-all"};/**
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
 */const zo=new Map,zE=new Map,Cc=new Map;function Yh(t,e){try{t.container.addComponent(e)}catch(n){Lt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Fr(t){const e=t.name;if(Cc.has(e))return Lt.debug(`There were multiple attempts to register component ${e}.`),!1;Cc.set(e,t);for(const n of zo.values())Yh(n,t);for(const n of zE.values())Yh(n,t);return!0}function zu(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function it(t){return t==null?!1:t.settings!==void 0}/**
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
 */const WE={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},un=new ms("app","Firebase",WE);/**
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
 */class BE{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Hn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw un.create("app-deleted",{appName:this._name})}}/**
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
 */const qr=jE;function Ag(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:Sc,automaticDataCollectionEnabled:!0,...e},i=r.name;if(typeof i!="string"||!i)throw un.create("bad-app-name",{appName:String(i)});if(n||(n=Cg()),!n)throw un.create("no-options");const s=zo.get(i);if(s){if(Vn(n,s.options)&&Vn(r,s.config))return s;throw un.create("duplicate-app",{appName:i})}const o=new q0(i);for(const a of Cc.values())o.addComponent(a);const l=new BE(n,r,o);return zo.set(i,l),l}function Og(t=Sc){const e=zo.get(t);if(!e&&t===Sc&&Cg())return Ag();if(!e)throw un.create("no-app",{appName:t});return e}function dn(t,e,n){let r=UE[t]??t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),s=e.match(/\s|\//);if(i||s){const o=[`Unable to register library "${r}" with version "${e}":`];i&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&s&&o.push("and"),s&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Lt.warn(o.join(" "));return}Fr(new Hn(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const VE="firebase-heartbeat-database",HE=1,es="firebase-heartbeat-store";let pa=null;function Dg(){return pa||(pa=lE(VE,HE,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(es)}catch(n){console.warn(n)}}}}).catch(t=>{throw un.create("idb-open",{originalErrorMessage:t.message})})),pa}async function $E(t){try{const n=(await Dg()).transaction(es),r=await n.objectStore(es).get(Lg(t));return await n.done,r}catch(e){if(e instanceof En)Lt.warn(e.message);else{const n=un.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Lt.warn(n.message)}}}async function Xh(t,e){try{const r=(await Dg()).transaction(es,"readwrite");await r.objectStore(es).put(e,Lg(t)),await r.done}catch(n){if(n instanceof En)Lt.warn(n.message);else{const r=un.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Lt.warn(r.message)}}}function Lg(t){return`${t.name}!${t.options.appId}`}/**
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
 */const KE=1024,GE=30;class qE{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new YE(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Jh();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>GE){const o=XE(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Lt.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Jh(),{heartbeatsToSend:r,unsentEntries:i}=QE(this._heartbeatsCache.heartbeats),s=Fo(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Lt.warn(n),""}}}function Jh(){return new Date().toISOString().substring(0,10)}function QE(t,e=KE){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Zh(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Zh(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class YE{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return D0()?L0().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await $E(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Xh(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Xh(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Zh(t){return Fo(JSON.stringify({version:2,heartbeats:t})).length}function XE(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function JE(t){Fr(new Hn("platform-logger",e=>new uE(e),"PRIVATE")),Fr(new Hn("heartbeat",e=>new qE(e),"PRIVATE")),dn(Ec,Qh,t),dn(Ec,Qh,"esm2020"),dn("fire-js","")}JE("");var ZE="firebase",eS="12.12.1";/**
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
 */dn(ZE,eS,"app");function Mg(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const tS=Mg,bg=new ms("auth","Firebase",Mg());/**
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
 */const Wo=new ju("@firebase/auth");function nS(t,...e){Wo.logLevel<=V.WARN&&Wo.warn(`Auth (${qr}): ${t}`,...e)}function ao(t,...e){Wo.logLevel<=V.ERROR&&Wo.error(`Auth (${qr}): ${t}`,...e)}/**
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
 */function ft(t,...e){throw Wu(t,...e)}function vt(t,...e){return Wu(t,...e)}function Fg(t,e,n){const r={...tS(),[e]:n};return new ms("auth","Firebase",r).create(e,{appName:t.name})}function hn(t){return Fg(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Wu(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return bg.create(t,...e)}function A(t,e,...n){if(!t)throw Wu(e,...n)}function kt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ao(e),new Error(e)}function Mt(t,e){t||kt(e)}/**
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
 */function Ic(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function rS(){return ef()==="http:"||ef()==="https:"}function ef(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
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
 */function iS(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(rS()||A0()||"connection"in navigator)?navigator.onLine:!0}function sS(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class _s{constructor(e,n){this.shortDelay=e,this.longDelay=n,Mt(n>e,"Short delay should be less than long delay!"),this.isMobile=bu()||kg()}get(){return iS()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Bu(t,e){Mt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class jg{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;kt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;kt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;kt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const oS={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const lS=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],aS=new _s(3e4,6e4);function Jn(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function Sn(t,e,n,r,i={}){return Ug(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=Gr({key:t.config.apiKey,...o}).slice(1),a=await t._getAdditionalHeaders();a["Content-Type"]="application/json",t.languageCode&&(a["X-Firebase-Locale"]=t.languageCode);const c={method:e,headers:a,...s};return P0()||(c.referrerPolicy="no-referrer"),t.emulatorConfig&&gs(t.emulatorConfig.host)&&(c.credentials="include"),jg.fetch()(await zg(t,t.config.apiHost,n,l),c)})}async function Ug(t,e,n){t._canInitEmulator=!1;const r={...oS,...e};try{const i=new uS(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Gs(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[a,c]=l.split(" : ");if(a==="FEDERATED_USER_ID_ALREADY_LINKED")throw Gs(t,"credential-already-in-use",o);if(a==="EMAIL_EXISTS")throw Gs(t,"email-already-in-use",o);if(a==="USER_DISABLED")throw Gs(t,"user-disabled",o);const d=r[a]||a.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Fg(t,d,c);ft(t,d)}}catch(i){if(i instanceof En)throw i;ft(t,"network-request-failed",{message:String(i)})}}async function Cl(t,e,n,r,i={}){const s=await Sn(t,e,n,r,i);return"mfaPendingCredential"in s&&ft(t,"multi-factor-auth-required",{_serverResponse:s}),s}async function zg(t,e,n,r){const i=`${e}${n}?${r}`,s=t,o=s.config.emulator?Bu(t.config,i):`${t.config.apiScheme}://${i}`;return lS.includes(n)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(o).toString():o}function cS(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class uS{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(vt(this.auth,"network-request-failed")),aS.get())})}}function Gs(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=vt(t,e,r);return i.customData._tokenResponse=n,i}function tf(t){return t!==void 0&&t.enterprise!==void 0}class dS{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return cS(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function hS(t,e){return Sn(t,"GET","/v2/recaptchaConfig",Jn(t,e))}/**
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
 */async function fS(t,e){return Sn(t,"POST","/v1/accounts:delete",e)}async function Bo(t,e){return Sn(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ai(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function pS(t,e=!1){const n=xe(t),r=await n.getIdToken(e),i=Vu(r);A(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Ai(ma(i.auth_time)),issuedAtTime:Ai(ma(i.iat)),expirationTime:Ai(ma(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function ma(t){return Number(t)*1e3}function Vu(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return ao("JWT malformed, contained fewer than 3 sections"),null;try{const i=jo(n);return i?JSON.parse(i):(ao("Failed to decode base64 JWT payload"),null)}catch(i){return ao("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function nf(t){const e=Vu(t);return A(e,"internal-error"),A(typeof e.exp<"u","internal-error"),A(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function ts(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof En&&mS(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function mS({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class gS{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class kc{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ai(this.lastLoginAt),this.creationTime=Ai(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Vo(t){var u;const e=t.auth,n=await t.getIdToken(),r=await ts(t,Bo(e,{idToken:n}));A(r==null?void 0:r.users.length,e,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const s=(u=i.providerUserInfo)!=null&&u.length?Wg(i.providerUserInfo):[],o=yS(t.providerData,s),l=t.isAnonymous,a=!(t.email&&i.passwordHash)&&!(o!=null&&o.length),c=l?a:!1,d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new kc(i.createdAt,i.lastLoginAt),isAnonymous:c};Object.assign(t,d)}async function _S(t){const e=xe(t);await Vo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function yS(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Wg(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
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
 */async function vS(t,e){const n=await Ug(t,{},async()=>{const r=Gr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=await zg(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const a={method:"POST",headers:l,body:r};return t.emulatorConfig&&gs(t.emulatorConfig.host)&&(a.credentials="include"),jg.fetch()(o,a)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function wS(t,e){return Sn(t,"POST","/v2/accounts:revokeToken",Jn(t,e))}/**
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
 */class Sr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){A(e.idToken,"internal-error"),A(typeof e.idToken<"u","internal-error"),A(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):nf(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){A(e.length!==0,"internal-error");const n=nf(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(A(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await vS(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Sr;return r&&(A(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(A(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(A(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Sr,this.toJSON())}_performRefresh(){return kt("not implemented")}}/**
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
 */function Vt(t,e){A(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class ot{constructor({uid:e,auth:n,stsTokenManager:r,...i}){this.providerId="firebase",this.proactiveRefresh=new gS(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new kc(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await ts(this,this.stsTokenManager.getToken(this.auth,e));return A(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return pS(this,e)}reload(){return _S(this)}_assign(e){this!==e&&(A(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new ot({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){A(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Vo(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(it(this.auth.app))return Promise.reject(hn(this.auth));const e=await this.getIdToken();return await ts(this,fS(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,i=n.email??void 0,s=n.phoneNumber??void 0,o=n.photoURL??void 0,l=n.tenantId??void 0,a=n._redirectEventId??void 0,c=n.createdAt??void 0,d=n.lastLoginAt??void 0,{uid:u,emailVerified:h,isAnonymous:_,providerData:y,stsTokenManager:v}=n;A(u&&v,e,"internal-error");const I=Sr.fromJSON(this.name,v);A(typeof u=="string",e,"internal-error"),Vt(r,e.name),Vt(i,e.name),A(typeof h=="boolean",e,"internal-error"),A(typeof _=="boolean",e,"internal-error"),Vt(s,e.name),Vt(o,e.name),Vt(l,e.name),Vt(a,e.name),Vt(c,e.name),Vt(d,e.name);const m=new ot({uid:u,auth:e,email:i,emailVerified:h,displayName:r,isAnonymous:_,photoURL:o,phoneNumber:s,tenantId:l,stsTokenManager:I,createdAt:c,lastLoginAt:d});return y&&Array.isArray(y)&&(m.providerData=y.map(p=>({...p}))),a&&(m._redirectEventId=a),m}static async _fromIdTokenResponse(e,n,r=!1){const i=new Sr;i.updateFromServerResponse(n);const s=new ot({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Vo(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];A(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?Wg(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new Sr;l.updateFromIdToken(r);const a=new ot({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new kc(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(a,c),a}}/**
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
 */const rf=new Map;function Tt(t){Mt(t instanceof Function,"Expected a class definition");let e=rf.get(t);return e?(Mt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,rf.set(t,e),e)}/**
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
 */class Bg{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Bg.type="NONE";const sf=Bg;/**
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
 */function co(t,e,n){return`firebase:${t}:${e}:${n}`}class Cr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=co(this.userKey,i.apiKey,s),this.fullPersistenceKey=co("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Bo(this.auth,{idToken:e}).catch(()=>{});return n?ot._fromGetAccountInfoResponse(this.auth,n,e):null}return ot._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Cr(Tt(sf),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||Tt(sf);const o=co(r,e.config.apiKey,e.name);let l=null;for(const c of n)try{const d=await c._get(o);if(d){let u;if(typeof d=="string"){const h=await Bo(e,{idToken:d}).catch(()=>{});if(!h)break;u=await ot._fromGetAccountInfoResponse(e,h,d)}else u=ot._fromJSON(e,d);c!==s&&(l=u),s=c;break}}catch{}const a=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!a.length?new Cr(s,e,r):(s=a[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new Cr(s,e,r))}}/**
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
 */function of(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Kg(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Vg(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(qg(e))return"Blackberry";if(Qg(e))return"Webos";if(Hg(e))return"Safari";if((e.includes("chrome/")||$g(e))&&!e.includes("edge/"))return"Chrome";if(Gg(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Vg(t=Te()){return/firefox\//i.test(t)}function Hg(t=Te()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function $g(t=Te()){return/crios\//i.test(t)}function Kg(t=Te()){return/iemobile/i.test(t)}function Gg(t=Te()){return/android/i.test(t)}function qg(t=Te()){return/blackberry/i.test(t)}function Qg(t=Te()){return/webos/i.test(t)}function Hu(t=Te()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function ES(t=Te()){var e;return Hu(t)&&!!((e=window.navigator)!=null&&e.standalone)}function SS(){return O0()&&document.documentMode===10}function Yg(t=Te()){return Hu(t)||Gg(t)||Qg(t)||qg(t)||/windows phone/i.test(t)||Kg(t)}/**
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
 */function Xg(t,e=[]){let n;switch(t){case"Browser":n=of(Te());break;case"Worker":n=`${of(Te())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${qr}/${r}`}/**
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
 */class CS{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const a=e(s);o(a)}catch(a){l(a)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function IS(t,e={}){return Sn(t,"GET","/v2/passwordPolicy",Jn(t,e))}/**
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
 */const kS=6;class TS{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??kS,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class NS{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new lf(this),this.idTokenSubscription=new lf(this),this.beforeStateQueue=new CS(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=bg,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Tt(n)),this._initializationPromise=this.queue(async()=>{var r,i,s;if(!this._deleted&&(this.persistenceManager=await Cr.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((i=this._popupRedirectResolver)!=null&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)==null?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Bo(this,{idToken:e}),r=await ot._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var s;if(it(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(s=this.redirectUser)==null?void 0:s._redirectEventId,l=r==null?void 0:r._redirectEventId,a=await this.tryRedirectSignIn(e);(!o||o===l)&&(a!=null&&a.user)&&(r=a.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return A(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Vo(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=sS()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(it(this.app))return Promise.reject(hn(this));const n=e?xe(e):null;return n&&A(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&A(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return it(this.app)?Promise.reject(hn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return it(this.app)?Promise.reject(hn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Tt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await IS(this),n=new TS(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new ms("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await wS(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Tt(e)||this._popupRedirectResolver;A(n,this,"argument-error"),this.redirectPersistenceManager=await Cr.create(this,[Tt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(A(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const a=e.addObserver(n,r,i);return()=>{o=!0,a()}}else{const a=e.addObserver(n);return()=>{o=!0,a()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return A(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Xg(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var i;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((i=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:i.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(it(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&nS(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Qr(t){return xe(t)}class lf{constructor(e){this.auth=e,this.observer=null,this.addObserver=W0(n=>this.observer=n)}get next(){return A(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Il={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function RS(t){Il=t}function Jg(t){return Il.loadJS(t)}function xS(){return Il.recaptchaEnterpriseScript}function PS(){return Il.gapiScript}function AS(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class OS{constructor(){this.enterprise=new DS}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class DS{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const LS="recaptcha-enterprise",Zg="NO_RECAPTCHA";class MS{constructor(e){this.type=LS,this.auth=Qr(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,l)=>{hS(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(a=>{if(a.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const c=new dS(a);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(a=>{l(a)})})}function i(s,o,l){const a=window.grecaptcha;tf(a)?a.enterprise.ready(()=>{a.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(Zg)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new OS().execute("siteKey",{action:"verify"}):new Promise((s,o)=>{r(this.auth).then(l=>{if(!n&&tf(window.grecaptcha))i(l,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let a=xS();a.length!==0&&(a+=l),Jg(a).then(()=>{i(l,s,o)}).catch(c=>{o(c)})}}).catch(l=>{o(l)})})}}async function di(t,e,n,r=!1,i=!1){const s=new MS(t);let o;if(i)o=Zg;else try{o=await s.verify(n)}catch{o=await s.verify(n,!0)}const l={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const a=l.phoneEnrollmentInfo.phoneNumber,c=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:a,recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const a=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:a,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return r?Object.assign(l,{captchaResp:o}):Object.assign(l,{captchaResponse:o}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function af(t,e,n,r,i){var s,o;if(i==="EMAIL_PASSWORD_PROVIDER")if((s=t._getRecaptchaConfig())!=null&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const l=await di(t,e,n,n==="getOobCode");return r(t,l)}else return r(t,e).catch(async l=>{if(l.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await di(t,e,n,n==="getOobCode");return r(t,a)}else return Promise.reject(l)});else if(i==="PHONE_PROVIDER")if((o=t._getRecaptchaConfig())!=null&&o.isProviderEnabled("PHONE_PROVIDER")){const l=await di(t,e,n);return r(t,l).catch(async a=>{var c;if(((c=t._getRecaptchaConfig())==null?void 0:c.getProviderEnforcementState("PHONE_PROVIDER"))==="AUDIT"&&(a.code==="auth/missing-recaptcha-token"||a.code==="auth/invalid-app-credential")){console.log(`Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${n} flow.`);const d=await di(t,e,n,!1,!0);return r(t,d)}return Promise.reject(a)})}else{const l=await di(t,e,n,!1,!0);return r(t,l)}else return Promise.reject(i+" provider is not supported.")}/**
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
 */function bS(t,e){const n=zu(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Vn(s,e??{}))return i;ft(i,"already-initialized")}return n.initialize({options:e})}function FS(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Tt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function jS(t,e,n){const r=Qr(t);A(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=e_(e),{host:o,port:l}=US(e),a=l===null?"":`:${l}`,c={url:`${s}//${o}${a}/`},d=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){A(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),A(Vn(c,r.config.emulator)&&Vn(d,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=c,r.emulatorConfig=d,r.settings.appVerificationDisabledForTesting=!0,gs(o)?Rg(`${s}//${o}${a}`):i||zS()}function e_(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function US(t){const e=e_(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:cf(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:cf(o)}}}function cf(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function zS(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class $u{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return kt("not implemented")}_getIdTokenResponse(e){return kt("not implemented")}_linkToIdToken(e,n){return kt("not implemented")}_getReauthenticationResolver(e){return kt("not implemented")}}async function WS(t,e){return Sn(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function BS(t,e){return Cl(t,"POST","/v1/accounts:signInWithPassword",Jn(t,e))}/**
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
 */async function VS(t,e){return Cl(t,"POST","/v1/accounts:signInWithEmailLink",Jn(t,e))}async function HS(t,e){return Cl(t,"POST","/v1/accounts:signInWithEmailLink",Jn(t,e))}/**
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
 */class ns extends $u{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new ns(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new ns(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return af(e,n,"signInWithPassword",BS,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return VS(e,{email:this._email,oobCode:this._password});default:ft(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return af(e,r,"signUpPassword",WS,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return HS(e,{idToken:n,email:this._email,oobCode:this._password});default:ft(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Ir(t,e){return Cl(t,"POST","/v1/accounts:signInWithIdp",Jn(t,e))}/**
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
 */const $S="http://localhost";class $n extends $u{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new $n(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):ft("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,...s}=n;if(!r||!i)return null;const o=new $n(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ir(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ir(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ir(e,n)}buildRequest(){const e={requestUri:$S,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Gr(n)}return e}}/**
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
 */function KS(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function GS(t){const e=wi(Ei(t)).link,n=e?wi(Ei(e)).deep_link_id:null,r=wi(Ei(t)).deep_link_id;return(r?wi(Ei(r)).link:null)||r||n||e||t}class Ku{constructor(e){const n=wi(Ei(e)),r=n.apiKey??null,i=n.oobCode??null,s=KS(n.mode??null);A(r&&i&&s,"argument-error"),this.apiKey=r,this.operation=s,this.code=i,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=GS(e);try{return new Ku(n)}catch{return null}}}/**
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
 */class Yr{constructor(){this.providerId=Yr.PROVIDER_ID}static credential(e,n){return ns._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Ku.parseLink(n);return A(r,"argument-error"),ns._fromEmailAndCode(e,r.code,r.tenantId)}}Yr.PROVIDER_ID="password";Yr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Yr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class t_{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ys extends t_{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class qt extends ys{constructor(){super("facebook.com")}static credential(e){return $n._fromParams({providerId:qt.PROVIDER_ID,signInMethod:qt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return qt.credentialFromTaggedObject(e)}static credentialFromError(e){return qt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return qt.credential(e.oauthAccessToken)}catch{return null}}}qt.FACEBOOK_SIGN_IN_METHOD="facebook.com";qt.PROVIDER_ID="facebook.com";/**
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
 */class Qt extends ys{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return $n._fromParams({providerId:Qt.PROVIDER_ID,signInMethod:Qt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Qt.credentialFromTaggedObject(e)}static credentialFromError(e){return Qt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Qt.credential(n,r)}catch{return null}}}Qt.GOOGLE_SIGN_IN_METHOD="google.com";Qt.PROVIDER_ID="google.com";/**
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
 */class Yt extends ys{constructor(){super("github.com")}static credential(e){return $n._fromParams({providerId:Yt.PROVIDER_ID,signInMethod:Yt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Yt.credentialFromTaggedObject(e)}static credentialFromError(e){return Yt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Yt.credential(e.oauthAccessToken)}catch{return null}}}Yt.GITHUB_SIGN_IN_METHOD="github.com";Yt.PROVIDER_ID="github.com";/**
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
 */class Xt extends ys{constructor(){super("twitter.com")}static credential(e,n){return $n._fromParams({providerId:Xt.PROVIDER_ID,signInMethod:Xt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Xt.credentialFromTaggedObject(e)}static credentialFromError(e){return Xt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Xt.credential(n,r)}catch{return null}}}Xt.TWITTER_SIGN_IN_METHOD="twitter.com";Xt.PROVIDER_ID="twitter.com";/**
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
 */class jr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await ot._fromIdTokenResponse(e,r,i),o=uf(r);return new jr({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=uf(r);return new jr({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function uf(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Ho extends En{constructor(e,n,r,i){super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Ho.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Ho(e,n,r,i)}}function n_(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Ho._fromErrorAndOperation(t,s,e,r):s})}async function qS(t,e,n=!1){const r=await ts(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return jr._forOperation(t,"link",r)}/**
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
 */async function QS(t,e,n=!1){const{auth:r}=t;if(it(r.app))return Promise.reject(hn(r));const i="reauthenticate";try{const s=await ts(t,n_(r,i,e,t),n);A(s.idToken,r,"internal-error");const o=Vu(s.idToken);A(o,r,"internal-error");const{sub:l}=o;return A(t.uid===l,r,"user-mismatch"),jr._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&ft(r,"user-mismatch"),s}}/**
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
 */async function r_(t,e,n=!1){if(it(t.app))return Promise.reject(hn(t));const r="signIn",i=await n_(t,r,e),s=await jr._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function YS(t,e){return r_(Qr(t),e)}/**
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
 */async function XS(t){const e=Qr(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function JS(t,e,n){return it(t.app)?Promise.reject(hn(t)):YS(xe(t),Yr.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&XS(t),r})}function ZS(t,e,n,r){return xe(t).onIdTokenChanged(e,n,r)}function eC(t,e,n){return xe(t).beforeAuthStateChanged(e,n)}function tC(t,e,n,r){return xe(t).onAuthStateChanged(e,n,r)}function nC(t){return xe(t).signOut()}const $o="__sak";/**
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
 */class i_{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem($o,"1"),this.storage.removeItem($o),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const rC=1e3,iC=10;class s_ extends i_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Yg(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,a)=>{this.notifyListeners(o,a)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);SS()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,iC):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},rC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}s_.type="LOCAL";const sC=s_;/**
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
 */class o_ extends i_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}o_.type="SESSION";const l_=o_;/**
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
 */function oC(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class kl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new kl(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async c=>c(n.origin,s)),a=await oC(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:a})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}kl.receivers=[];/**
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
 */function Gu(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class lC{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,a)=>{const c=Gu("",20);i.port1.start();const d=setTimeout(()=>{a(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(u){const h=u;if(h.data.eventId===c)switch(h.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(h.data.response);break;default:clearTimeout(d),clearTimeout(s),a(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function wt(){return window}function aC(t){wt().location.href=t}/**
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
 */function a_(){return typeof wt().WorkerGlobalScope<"u"&&typeof wt().importScripts=="function"}async function cC(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function uC(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function dC(){return a_()?self:null}/**
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
 */const c_="firebaseLocalStorageDb",hC=1,Ko="firebaseLocalStorage",u_="fbase_key";class vs{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Tl(t,e){return t.transaction([Ko],e?"readwrite":"readonly").objectStore(Ko)}function fC(){const t=indexedDB.deleteDatabase(c_);return new vs(t).toPromise()}function Tc(){const t=indexedDB.open(c_,hC);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Ko,{keyPath:u_})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Ko)?e(r):(r.close(),await fC(),e(await Tc()))})})}async function df(t,e,n){const r=Tl(t,!0).put({[u_]:e,value:n});return new vs(r).toPromise()}async function pC(t,e){const n=Tl(t,!1).get(e),r=await new vs(n).toPromise();return r===void 0?null:r.value}function hf(t,e){const n=Tl(t,!0).delete(e);return new vs(n).toPromise()}const mC=800,gC=3;class d_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Tc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>gC)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return a_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=kl._getInstance(dC()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await cC(),!this.activeServiceWorker)return;this.sender=new lC(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||uC()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Tc();return await df(e,$o,"1"),await hf(e,$o),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>df(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>pC(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>hf(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Tl(i,!1).getAll();return new vs(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),mC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}d_.type="LOCAL";const _C=d_;new _s(3e4,6e4);/**
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
 */function yC(t,e){return e?Tt(e):(A(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class qu extends $u{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ir(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ir(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ir(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function vC(t){return r_(t.auth,new qu(t),t.bypassAuthState)}function wC(t){const{auth:e,user:n}=t;return A(n,e,"internal-error"),QS(n,new qu(t),t.bypassAuthState)}async function EC(t){const{auth:e,user:n}=t;return A(n,e,"internal-error"),qS(n,new qu(t),t.bypassAuthState)}/**
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
 */class h_{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const a={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(a))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return vC;case"linkViaPopup":case"linkViaRedirect":return EC;case"reauthViaPopup":case"reauthViaRedirect":return wC;default:ft(this.auth,"internal-error")}}resolve(e){Mt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Mt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const SC=new _s(2e3,1e4);class pr extends h_{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,pr.currentPopupAction&&pr.currentPopupAction.cancel(),pr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return A(e,this.auth,"internal-error"),e}async onExecution(){Mt(this.filter.length===1,"Popup operations only handle one event");const e=Gu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(vt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(vt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,pr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(vt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,SC.get())};e()}}pr.currentPopupAction=null;/**
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
 */const CC="pendingRedirect",uo=new Map;class IC extends h_{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=uo.get(this.auth._key());if(!e){try{const r=await kC(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}uo.set(this.auth._key(),e)}return this.bypassAuthState||uo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function kC(t,e){const n=RC(e),r=NC(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function TC(t,e){uo.set(t._key(),e)}function NC(t){return Tt(t._redirectPersistence)}function RC(t){return co(CC,t.config.apiKey,t.name)}async function xC(t,e,n=!1){if(it(t.app))return Promise.reject(hn(t));const r=Qr(t),i=yC(r,e),o=await new IC(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const PC=10*60*1e3;class AC{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!OC(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!f_(e)){const i=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(vt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=PC&&this.cachedEventUids.clear(),this.cachedEventUids.has(ff(e))}saveEventToCache(e){this.cachedEventUids.add(ff(e)),this.lastProcessedEventTime=Date.now()}}function ff(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function f_({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function OC(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return f_(t);default:return!1}}/**
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
 */async function DC(t,e={}){return Sn(t,"GET","/v1/projects",e)}/**
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
 */const LC=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,MC=/^https?/;async function bC(t){if(t.config.emulator)return;const{authorizedDomains:e}=await DC(t);for(const n of e)try{if(FC(n))return}catch{}ft(t,"unauthorized-domain")}function FC(t){const e=Ic(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!MC.test(n))return!1;if(LC.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const jC=new _s(3e4,6e4);function pf(){const t=wt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function UC(t){return new Promise((e,n)=>{var i,s,o;function r(){pf(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{pf(),n(vt(t,"network-request-failed"))},timeout:jC.get()})}if((s=(i=wt().gapi)==null?void 0:i.iframes)!=null&&s.Iframe)e(gapi.iframes.getContext());else if((o=wt().gapi)!=null&&o.load)r();else{const l=AS("iframefcb");return wt()[l]=()=>{gapi.load?r():n(vt(t,"network-request-failed"))},Jg(`${PS()}?onload=${l}`).catch(a=>n(a))}}).catch(e=>{throw ho=null,e})}let ho=null;function zC(t){return ho=ho||UC(t),ho}/**
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
 */const WC=new _s(5e3,15e3),BC="__/auth/iframe",VC="emulator/auth/iframe",HC={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},$C=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function KC(t){const e=t.config;A(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Bu(e,VC):`https://${t.config.authDomain}/${BC}`,r={apiKey:e.apiKey,appName:t.name,v:qr},i=$C.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Gr(r).slice(1)}`}async function GC(t){const e=await zC(t),n=wt().gapi;return A(n,t,"internal-error"),e.open({where:document.body,url:KC(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:HC,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=vt(t,"network-request-failed"),l=wt().setTimeout(()=>{s(o)},WC.get());function a(){wt().clearTimeout(l),i(r)}r.ping(a).then(a,()=>{s(o)})}))}/**
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
 */const qC={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},QC=500,YC=600,XC="_blank",JC="http://localhost";class mf{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function ZC(t,e,n,r=QC,i=YC){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const a={...qC,width:r.toString(),height:i.toString(),top:s,left:o},c=Te().toLowerCase();n&&(l=$g(c)?XC:n),Vg(c)&&(e=e||JC,a.scrollbars="yes");const d=Object.entries(a).reduce((h,[_,y])=>`${h}${_}=${y},`,"");if(ES(c)&&l!=="_self")return eI(e||"",l),new mf(null);const u=window.open(e||"",l,d);A(u,t,"popup-blocked");try{u.focus()}catch{}return new mf(u)}function eI(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const tI="__/auth/handler",nI="emulator/auth/handler",rI=encodeURIComponent("fac");async function gf(t,e,n,r,i,s){A(t.config.authDomain,t,"auth-domain-config-required"),A(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:qr,eventId:i};if(e instanceof t_){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",yc(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,u]of Object.entries(s||{}))o[d]=u}if(e instanceof ys){const d=e.getScopes().filter(u=>u!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const d of Object.keys(l))l[d]===void 0&&delete l[d];const a=await t._getAppCheckToken(),c=a?`#${rI}=${encodeURIComponent(a)}`:"";return`${iI(t)}?${Gr(l).slice(1)}${c}`}function iI({config:t}){return t.emulator?Bu(t,nI):`https://${t.authDomain}/${tI}`}/**
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
 */const ga="webStorageSupport";class sI{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=l_,this._completeRedirectFn=xC,this._overrideRedirectResult=TC}async _openPopup(e,n,r,i){var o;Mt((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const s=await gf(e,n,r,Ic(),i);return ZC(e,s,Gu())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await gf(e,n,r,Ic(),i);return aC(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Mt(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await GC(e),r=new AC(e);return n.register("authEvent",i=>(A(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(ga,{type:ga},i=>{var o;const s=(o=i==null?void 0:i[0])==null?void 0:o[ga];s!==void 0&&n(!!s),ft(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=bC(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Yg()||Hg()||Hu()}}const oI=sI;var _f="@firebase/auth",yf="1.13.0";/**
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
 */class lI{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){A(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function aI(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function cI(t){Fr(new Hn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;A(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const a={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Xg(t)},c=new NS(r,i,s,a);return FS(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Fr(new Hn("auth-internal",e=>{const n=Qr(e.getProvider("auth").getImmediate());return(r=>new lI(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),dn(_f,yf,aI(t)),dn(_f,yf,"esm2020")}/**
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
 */const uI=5*60,dI=Ig("authIdTokenMaxAge")||uI;let vf=null;const hI=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>dI)return;const i=n==null?void 0:n.token;vf!==i&&(vf=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function fI(t=Og()){const e=zu(t,"auth");if(e.isInitialized())return e.getImmediate();const n=bS(t,{popupRedirectResolver:oI,persistence:[_C,sC,l_]}),r=Ig("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=hI(s.toString());eC(n,o,()=>o(n.currentUser)),ZS(n,l=>o(l))}}const i=Sg("auth");return i&&jS(n,`http://${i}`),n}function pI(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}RS({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=vt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",pI().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});cI("Browser");const wf="@firebase/database",Ef="1.1.2";/**
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
 */let p_="";function mI(t){p_=t}/**
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
 */class gI{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),fe(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Zi(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class _I{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Ut(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const m_=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new gI(e)}}catch{}return new _I},Dn=m_("localStorage"),Nc=m_("sessionStorage");/**
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
 */const kr=new ju("@firebase/database"),yI=function(){let t=1;return function(){return t++}}(),g_=function(t){const e=H0(t),n=new z0;n.update(e);const r=n.digest();return Lu.encodeByteArray(r)},ws=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=ws.apply(null,r):typeof r=="object"?e+=fe(r):e+=r,e+=" "}return e};let Fn=null,Sf=!0;const vI=function(t,e){C(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(kr.logLevel=V.VERBOSE,Fn=kr.log.bind(kr),e&&Nc.set("logging_enabled",!0)):typeof t=="function"?Fn=t:(Fn=null,Nc.remove("logging_enabled"))},Se=function(...t){if(Sf===!0&&(Sf=!1,Fn===null&&Nc.get("logging_enabled")===!0&&vI(!0)),Fn){const e=ws.apply(null,t);Fn(e)}},Es=function(t){return function(...e){Se(t,...e)}},Rc=function(...t){const e="FIREBASE INTERNAL ERROR: "+ws(...t);kr.error(e)},bt=function(...t){const e=`FIREBASE FATAL ERROR: ${ws(...t)}`;throw kr.error(e),new Error(e)},Fe=function(...t){const e="FIREBASE WARNING: "+ws(...t);kr.warn(e)},wI=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Fe("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},__=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},EI=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Ur="[MIN_NAME]",Kn="[MAX_NAME]",Xr=function(t,e){if(t===e)return 0;if(t===Ur||e===Kn)return-1;if(e===Ur||t===Kn)return 1;{const n=Cf(t),r=Cf(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},SI=function(t,e){return t===e?0:t<e?-1:1},hi=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+fe(e))},Qu=function(t){if(typeof t!="object"||t===null)return fe(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=fe(e[r]),n+=":",n+=Qu(t[e[r]]);return n+="}",n},y_=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function je(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const v_=function(t){C(!__(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,l,a;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=l+r,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const c=[];for(a=n;a;a-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(a=e;a;a-=1)c.push(s%2?1:0),s=Math.floor(s/2);c.push(i?1:0),c.reverse();const d=c.join("");let u="";for(a=0;a<64;a+=8){let h=parseInt(d.substr(a,8),2).toString(16);h.length===1&&(h="0"+h),u=u+h}return u.toLowerCase()},CI=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},II=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function kI(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const TI=new RegExp("^-?(0*)\\d{1,10}$"),NI=-2147483648,RI=2147483647,Cf=function(t){if(TI.test(t)){const e=Number(t);if(e>=NI&&e<=RI)return e}return null},Jr=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Fe("Exception was thrown by user callback.",n),e},Math.floor(0))}},xI=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Oi=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class PI{constructor(e,n){this.appCheckProvider=n,this.appName=e.name,it(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)==null||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){Fe(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class AI{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Se("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Fe(e)}}class Tr{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Tr.OWNER="owner";/**
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
 */const Yu="5",w_="v",E_="s",S_="r",C_="f",I_=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,k_="ls",T_="p",xc="ac",N_="websocket",R_="long_polling";/**
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
 */class x_{constructor(e,n,r,i,s=!1,o="",l=!1,a=!1,c=null){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=a,this.emulatorOptions=c,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Dn.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Dn.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function OI(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function P_(t,e,n){C(typeof e=="string","typeof type must == string"),C(typeof n=="object","typeof params must == object");let r;if(e===N_)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===R_)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);OI(t)&&(n.ns=t.namespace);const i=[];return je(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
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
 */class DI{constructor(){this.counters_={}}incrementCounter(e,n=1){Ut(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return S0(this.counters_)}}/**
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
 */const _a={},ya={};function Xu(t){const e=t.toString();return _a[e]||(_a[e]=new DI),_a[e]}function LI(t,e){const n=t.toString();return ya[n]||(ya[n]=e()),ya[n]}/**
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
 */class MI{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&Jr(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const If="start",bI="close",FI="pLPCommand",jI="pRTLPCB",A_="id",O_="pw",D_="ser",UI="cb",zI="seg",WI="ts",BI="d",VI="dframe",L_=1870,M_=30,HI=L_-M_,$I=25e3,KI=3e4;class mr{constructor(e,n,r,i,s,o,l){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Es(e),this.stats_=Xu(n),this.urlFn=a=>(this.appCheckToken&&(a[xc]=this.appCheckToken),P_(n,R_,a))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new MI(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(KI)),EI(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Ju((...s)=>{const[o,l,a,c,d]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===If)this.id=l,this.password=a;else if(o===bI)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,l]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const r={};r[If]="t",r[D_]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[UI]=this.scriptTagHolder.uniqueCallbackIdentifier),r[w_]=Yu,this.transportSessionId&&(r[E_]=this.transportSessionId),this.lastSessionId&&(r[k_]=this.lastSessionId),this.applicationId&&(r[T_]=this.applicationId),this.appCheckToken&&(r[xc]=this.appCheckToken),typeof location<"u"&&location.hostname&&I_.test(location.hostname)&&(r[S_]=C_);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){mr.forceAllow_=!0}static forceDisallow(){mr.forceDisallow_=!0}static isAvailable(){return mr.forceAllow_?!0:!mr.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!CI()&&!II()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=fe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=wg(n),i=y_(r,HI);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[VI]="t",r[A_]=e,r[O_]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=fe(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Ju{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=yI(),window[FI+this.uniqueCallbackIdentifier]=e,window[jI+this.uniqueCallbackIdentifier]=n,this.myIFrame=Ju.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){Se("frame writing exception"),l.stack&&Se(l.stack),Se(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Se("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[A_]=this.myID,e[O_]=this.myPW,e[D_]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+M_+r.length<=L_;){const o=this.pendingSegs.shift();r=r+"&"+zI+i+"="+o.seg+"&"+WI+i+"="+o.ts+"&"+BI+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor($I)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{Se("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
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
 */const GI=16384,qI=45e3;let Go=null;typeof MozWebSocket<"u"?Go=MozWebSocket:typeof WebSocket<"u"&&(Go=WebSocket);class st{constructor(e,n,r,i,s,o,l){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Es(this.connId),this.stats_=Xu(n),this.connURL=st.connectionURL_(n,o,l,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[w_]=Yu,typeof location<"u"&&location.hostname&&I_.test(location.hostname)&&(o[S_]=C_),n&&(o[E_]=n),r&&(o[k_]=r),i&&(o[xc]=i),s&&(o[T_]=s),P_(e,N_,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Dn.set("previous_websocket_failure",!0);try{let r;Tg(),this.mySock=new Go(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){st.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&Go!==null&&!st.forceDisallow_}static previouslyFailed(){return Dn.isInMemoryStorage||Dn.get("previous_websocket_failure")===!0}markConnectionHealthy(){Dn.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=Zi(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(C(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=fe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=y_(n,GI);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(qI))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}st.responsesRequiredToBeHealthy=2;st.healthyTimeout=3e4;/**
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
 */class rs{static get ALL_TRANSPORTS(){return[mr,st]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const n=st&&st.isAvailable();let r=n&&!st.previouslyFailed();if(e.webSocketOnly&&(n||Fe("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[st];else{const i=this.transports_=[];for(const s of rs.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);rs.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}rs.globalTransportInitialized_=!1;/**
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
 */const QI=6e4,YI=5e3,XI=10*1024,JI=100*1024,va="t",kf="d",ZI="s",Tf="r",ek="e",Nf="o",Rf="a",xf="n",Pf="p",tk="h";class nk{constructor(e,n,r,i,s,o,l,a,c,d){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=a,this.onKill_=c,this.lastSessionId=d,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Es("c:"+this.id+":"),this.transportManager_=new rs(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Oi(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>JI?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>XI?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(va in e){const n=e[va];n===Rf?this.upgradeIfSecondaryHealthy_():n===Tf?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Nf&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=hi("t",e),r=hi("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Pf,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Rf,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:xf,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=hi("t",e),r=hi("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=hi(va,e);if(kf in e){const r=e[kf];if(n===tk){const i={...r};this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===xf){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===ZI?this.onConnectionShutdown_(r):n===Tf?this.onReset_(r):n===ek?Rc("Server Error: "+r):n===Nf?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Rc("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Yu!==r&&Fe("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),Oi(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(QI))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Oi(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(YI))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Pf,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Dn.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class b_{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class F_{constructor(e){this.allowedEvents_=e,this.listeners_={},C(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){C(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class qo extends F_{static getInstance(){return new qo}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!bu()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return C(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const Af=32,Of=768;class H{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function W(){return new H("")}function b(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function gn(t){return t.pieces_.length-t.pieceNum_}function $(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new H(t.pieces_,e)}function j_(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function rk(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function U_(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function z_(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new H(e,0)}function le(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof H)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new H(n,0)}function j(t){return t.pieceNum_>=t.pieces_.length}function Oe(t,e){const n=b(t),r=b(e);if(n===null)return e;if(n===r)return Oe($(t),$(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function Zu(t,e){if(gn(t)!==gn(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function lt(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(gn(t)>gn(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class ik{constructor(e,n){this.errorPrefix_=n,this.parts_=U_(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=Sl(this.parts_[r]);W_(this)}}function sk(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Sl(e),W_(t)}function ok(t){const e=t.parts_.pop();t.byteLength_-=Sl(e),t.parts_.length>0&&(t.byteLength_-=1)}function W_(t){if(t.byteLength_>Of)throw new Error(t.errorPrefix_+"has a key path longer than "+Of+" bytes ("+t.byteLength_+").");if(t.parts_.length>Af)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Af+") or object contains a cycle "+xn(t))}function xn(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class ed extends F_{static getInstance(){return new ed}constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}getInitialEvent(e){return C(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const fi=1e3,lk=60*5*1e3,Df=30*1e3,ak=1.3,ck=3e4,uk="server_kill",Lf=3;class xt extends b_{constructor(e,n,r,i,s,o,l,a){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=a,this.id=xt.nextPersistentConnectionId_++,this.log_=Es("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=fi,this.maxReconnectDelay_=lk,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!Tg())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");ed.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&qo.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(fe(s)),C(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new El,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),C(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),C(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,l=>{const a=l.d,c=l.s;xt.warnOnListenWarnings_(a,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",l),c!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(c,a))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Ut(e,"w")){const r=br(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();Fe(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||U0(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Df)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=j0(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),C(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+fe(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Rc("Unrecognized action received from server: "+fe(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){C(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=fi,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=fi,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>ck&&(this.reconnectDelay_=fi),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*ak)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+xt.nextConnectionId_++,s=this.lastSessionId;let o=!1,l=null;const a=function(){l?l.close():(o=!0,r())},c=function(u){C(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(u)};this.realtime_={close:a,sendRequest:c};const d=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[u,h]=await Promise.all([this.authTokenProvider_.getToken(d),this.appCheckTokenProvider_.getToken(d)]);o?Se("getToken() completed but was canceled"):(Se("getToken() completed. Creating connection."),this.authToken_=u&&u.accessToken,this.appCheckToken_=h&&h.token,l=new nk(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,_=>{Fe(_+" ("+this.repoInfo_.toString()+")"),this.interrupt(uk)},s))}catch(u){this.log_("Failed to get token: "+u),o||(this.repoInfo_.nodeAdmin&&Fe(u),a())}}}interrupt(e){Se("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Se("Resuming connection for reason: "+e),delete this.interruptReasons_[e],yc(this.interruptReasons_)&&(this.reconnectDelay_=fi,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>Qu(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new H(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){Se("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Lf&&(this.reconnectDelay_=Df,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Se("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Lf&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+p_.replace(/\./g,"-")]=1,bu()?e["framework.cordova"]=1:kg()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=qo.getInstance().currentlyOnline();return yc(this.interruptReasons_)&&e}}xt.nextPersistentConnectionId_=0;xt.nextConnectionId_=0;/**
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
 */class F{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new F(e,n)}}/**
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
 */class Nl{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new F(Ur,e),i=new F(Ur,n);return this.compare(r,i)!==0}minPost(){return F.MIN}}/**
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
 */let qs;class B_ extends Nl{static get __EMPTY_NODE(){return qs}static set __EMPTY_NODE(e){qs=e}compare(e,n){return Xr(e.name,n.name)}isDefinedOn(e){throw Kr("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return F.MIN}maxPost(){return new F(Kn,qs)}makePost(e,n){return C(typeof e=="string","KeyIndex indexValue must always be a string."),new F(e,qs)}toString(){return".key"}}const Nr=new B_;/**
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
 */class Qs{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class he{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??he.RED,this.left=i??De.EMPTY_NODE,this.right=s??De.EMPTY_NODE}copy(e,n,r,i,s){return new he(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return De.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return De.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,he.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,he.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}he.RED=!0;he.BLACK=!1;class dk{copy(e,n,r,i,s){return this}insert(e,n,r){return new he(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class De{constructor(e,n=De.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new De(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,he.BLACK,null,null))}remove(e){return new De(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,he.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Qs(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Qs(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Qs(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Qs(this.root_,null,this.comparator_,!0,e)}}De.EMPTY_NODE=new dk;/**
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
 */function hk(t,e){return Xr(t.name,e.name)}function td(t,e){return Xr(t,e)}/**
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
 */let Pc;function fk(t){Pc=t}const V_=function(t){return typeof t=="number"?"number:"+v_(t):"string:"+t},H_=function(t){if(t.isLeafNode()){const e=t.val();C(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Ut(e,".sv"),"Priority must be a string or number.")}else C(t===Pc||t.isEmpty(),"priority of unexpected type.");C(t===Pc||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let Mf;class ue{static set __childrenNodeConstructor(e){Mf=e}static get __childrenNodeConstructor(){return Mf}constructor(e,n=ue.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,C(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),H_(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new ue(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:ue.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return j(e)?this:b(e)===".priority"?this.priorityNode_:ue.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:ue.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=b(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(C(r!==".priority"||gn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,ue.__childrenNodeConstructor.EMPTY_NODE.updateChild($(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+V_(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=v_(this.value_):e+=this.value_,this.lazyHash_=g_(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===ue.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof ue.__childrenNodeConstructor?-1:(C(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=ue.VALUE_TYPE_ORDER.indexOf(n),s=ue.VALUE_TYPE_ORDER.indexOf(r);return C(i>=0,"Unknown leaf type: "+n),C(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}ue.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let $_,K_;function pk(t){$_=t}function mk(t){K_=t}class gk extends Nl{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?Xr(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return F.MIN}maxPost(){return new F(Kn,new ue("[PRIORITY-POST]",K_))}makePost(e,n){const r=$_(e);return new F(n,new ue("[PRIORITY-POST]",r))}toString(){return".priority"}}const re=new gk;/**
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
 */const _k=Math.log(2);class yk{constructor(e){const n=s=>parseInt(Math.log(s)/_k,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Qo=function(t,e,n,r){t.sort(e);const i=function(a,c){const d=c-a;let u,h;if(d===0)return null;if(d===1)return u=t[a],h=n?n(u):u,new he(h,u.node,he.BLACK,null,null);{const _=parseInt(d/2,10)+a,y=i(a,_),v=i(_+1,c);return u=t[_],h=n?n(u):u,new he(h,u.node,he.BLACK,y,v)}},s=function(a){let c=null,d=null,u=t.length;const h=function(y,v){const I=u-y,m=u;u-=y;const p=i(I+1,m),g=t[I],E=n?n(g):g;_(new he(E,g.node,v,null,p))},_=function(y){c?(c.left=y,c=y):(d=y,c=y)};for(let y=0;y<a.count;++y){const v=a.nextBitIsOne(),I=Math.pow(2,a.count-(y+1));v?h(I,he.BLACK):(h(I,he.BLACK),h(I,he.RED))}return d},o=new yk(t.length),l=s(o);return new De(r||e,l)};/**
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
 */let wa;const tr={};class Nt{static get Default(){return C(tr&&re,"ChildrenNode.ts has not been loaded"),wa=wa||new Nt({".priority":tr},{".priority":re}),wa}constructor(e,n){this.indexes_=e,this.indexSet_=n}get(e){const n=br(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof De?n:null}hasIndex(e){return Ut(this.indexSet_,e.toString())}addIndex(e,n){C(e!==Nr,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(F.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let l;i?l=Qo(r,e.getCompare()):l=tr;const a=e.toString(),c={...this.indexSet_};c[a]=e;const d={...this.indexes_};return d[a]=l,new Nt(d,c)}addToIndexes(e,n){const r=Uo(this.indexes_,(i,s)=>{const o=br(this.indexSet_,s);if(C(o,"Missing index implementation for "+s),i===tr)if(o.isDefinedOn(e.node)){const l=[],a=n.getIterator(F.Wrap);let c=a.getNext();for(;c;)c.name!==e.name&&l.push(c),c=a.getNext();return l.push(e),Qo(l,o.getCompare())}else return tr;else{const l=n.get(e.name);let a=i;return l&&(a=a.remove(new F(e.name,l))),a.insert(e,e.node)}});return new Nt(r,this.indexSet_)}removeFromIndexes(e,n){const r=Uo(this.indexes_,i=>{if(i===tr)return i;{const s=n.get(e.name);return s?i.remove(new F(e.name,s)):i}});return new Nt(r,this.indexSet_)}}/**
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
 */let pi;class O{static get EMPTY_NODE(){return pi||(pi=new O(new De(td),null,Nt.Default))}constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&H_(this.priorityNode_),this.children_.isEmpty()&&C(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||pi}updatePriority(e){return this.children_.isEmpty()?this:new O(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?pi:n}}getChild(e){const n=b(e);return n===null?this:this.getImmediateChild(n).getChild($(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(C(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new F(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?pi:this.priorityNode_;return new O(i,o,s)}}updateChild(e,n){const r=b(e);if(r===null)return n;{C(b(e)!==".priority"||gn(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild($(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(re,(o,l)=>{n[o]=l.val(e),r++,s&&O.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+V_(this.getPriority().val())+":"),this.forEachChild(re,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":g_(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new F(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new F(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new F(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,F.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,F.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Ss?-1:0}withIndex(e){if(e===Nr||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new O(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Nr||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(re),i=n.getIterator(re);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Nr?null:this.indexMap_.get(e.toString())}}O.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class vk extends O{constructor(){super(new De(td),O.EMPTY_NODE,Nt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return O.EMPTY_NODE}isEmpty(){return!1}}const Ss=new vk;Object.defineProperties(F,{MIN:{value:new F(Ur,O.EMPTY_NODE)},MAX:{value:new F(Kn,Ss)}});B_.__EMPTY_NODE=O.EMPTY_NODE;ue.__childrenNodeConstructor=O;fk(Ss);mk(Ss);/**
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
 */const wk=!0;function ge(t,e=null){if(t===null)return O.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),C(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new ue(n,ge(e))}if(!(t instanceof Array)&&wk){const n=[];let r=!1;if(je(t,(o,l)=>{if(o.substring(0,1)!=="."){const a=ge(l);a.isEmpty()||(r=r||!a.getPriority().isEmpty(),n.push(new F(o,a)))}}),n.length===0)return O.EMPTY_NODE;const s=Qo(n,hk,o=>o.name,td);if(r){const o=Qo(n,re.getCompare());return new O(s,ge(e),new Nt({".priority":o},{".priority":re}))}else return new O(s,ge(e),Nt.Default)}else{let n=O.EMPTY_NODE;return je(t,(r,i)=>{if(Ut(t,r)&&r.substring(0,1)!=="."){const s=ge(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(ge(e))}}pk(ge);/**
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
 */class Ek extends Nl{constructor(e){super(),this.indexPath_=e,C(!j(e)&&b(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?Xr(e.name,n.name):s}makePost(e,n){const r=ge(e),i=O.EMPTY_NODE.updateChild(this.indexPath_,r);return new F(n,i)}maxPost(){const e=O.EMPTY_NODE.updateChild(this.indexPath_,Ss);return new F(Kn,e)}toString(){return U_(this.indexPath_,0).join("/")}}/**
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
 */class Sk extends Nl{compare(e,n){const r=e.node.compareTo(n.node);return r===0?Xr(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return F.MIN}maxPost(){return F.MAX}makePost(e,n){const r=ge(e);return new F(n,r)}toString(){return".value"}}const Ck=new Sk;/**
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
 */function G_(t){return{type:"value",snapshotNode:t}}function zr(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function is(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function ss(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function Ik(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class nd{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){C(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(n);return l.getChild(i).equals(r.getChild(i))&&l.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(is(n,l)):C(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(zr(n,r)):o.trackChildChange(ss(n,r,l))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(re,(i,s)=>{n.hasChild(i)||r.trackChildChange(is(i,s))}),n.isLeafNode()||n.forEachChild(re,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(ss(i,s,o))}else r.trackChildChange(zr(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?O.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class os{constructor(e){this.indexedFilter_=new nd(e.getIndex()),this.index_=e.getIndex(),this.startPost_=os.getStartPost_(e),this.endPost_=os.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new F(n,r))||(r=O.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=O.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(O.EMPTY_NODE);const s=this;return n.forEachChild(re,(o,l)=>{s.matches(new F(o,l))||(i=i.updateImmediateChild(o,O.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class kk{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new os(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new F(n,r))||(r=O.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=O.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=O.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const l=s.getNext();if(this.withinDirectionalStart(l))if(this.withinDirectionalEnd(l))i=i.updateImmediateChild(l.name,l.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(O.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const l=s.getNext();o<this.limit_&&this.withinDirectionalStart(l)&&this.withinDirectionalEnd(l)?o++:i=i.updateImmediateChild(l.name,O.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const u=this.index_.getCompare();o=(h,_)=>u(_,h)}else o=this.index_.getCompare();const l=e;C(l.numChildren()===this.limit_,"");const a=new F(n,r),c=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),d=this.rangedFilter_.matches(a);if(l.hasChild(n)){const u=l.getImmediateChild(n);let h=i.getChildAfterChild(this.index_,c,this.reverse_);for(;h!=null&&(h.name===n||l.hasChild(h.name));)h=i.getChildAfterChild(this.index_,h,this.reverse_);const _=h==null?1:o(h,a);if(d&&!r.isEmpty()&&_>=0)return s!=null&&s.trackChildChange(ss(n,r,u)),l.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(is(n,u));const v=l.updateImmediateChild(n,O.EMPTY_NODE);return h!=null&&this.rangedFilter_.matches(h)?(s!=null&&s.trackChildChange(zr(h.name,h.node)),v.updateImmediateChild(h.name,h.node)):v}}else return r.isEmpty()?e:d&&o(c,a)>=0?(s!=null&&(s.trackChildChange(is(c.name,c.node)),s.trackChildChange(zr(n,r))),l.updateImmediateChild(n,r).updateImmediateChild(c.name,O.EMPTY_NODE)):e}}/**
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
 */class rd{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=re}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return C(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return C(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Ur}hasEnd(){return this.endSet_}getIndexEndValue(){return C(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return C(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Kn}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return C(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===re}copy(){const e=new rd;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Tk(t){return t.loadsAllData()?new nd(t.getIndex()):t.hasLimit()?new kk(t):new os(t)}function bf(t){const e={};if(t.isDefault())return e;let n;if(t.index_===re?n="$priority":t.index_===Ck?n="$value":t.index_===Nr?n="$key":(C(t.index_ instanceof Ek,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=fe(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=fe(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+fe(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=fe(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+fe(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Ff(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==re&&(e.i=t.index_.toString()),e}/**
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
 */class Yo extends b_{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(C(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=Es("p:rest:"),this.listens_={}}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=Yo.getListenId_(e,r),l={};this.listens_[o]=l;const a=bf(e._queryParams);this.restRequest_(s+".json",a,(c,d)=>{let u=d;if(c===404&&(u=null,c=null),c===null&&this.onDataUpdate_(s,u,!1,r),br(this.listens_,o)===l){let h;c?c===401?h="permission_denied":h="rest_error:"+c:h="ok",i(h,null)}})}unlisten(e,n){const r=Yo.getListenId_(e,n);delete this.listens_[r]}get(e){const n=bf(e._queryParams),r=e._path.toString(),i=new El;return this.restRequest_(r+".json",n,(s,o)=>{let l=o;s===404&&(l=null,s=null),s===null?(this.onDataUpdate_(r,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Gr(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(r&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let a=null;if(l.status>=200&&l.status<300){try{a=Zi(l.responseText)}catch{Fe("Failed to parse JSON response for "+o+": "+l.responseText)}r(null,a)}else l.status!==401&&l.status!==404&&Fe("Got unsuccessful REST response for "+o+" Status: "+l.status),r(l.status);r=null}},l.open("GET",o,!0),l.send()})}}/**
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
 */class Nk{constructor(){this.rootNode_=O.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function Xo(){return{value:null,children:new Map}}function q_(t,e,n){if(j(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=b(e);t.children.has(r)||t.children.set(r,Xo());const i=t.children.get(r);e=$(e),q_(i,e,n)}}function Ac(t,e,n){t.value!==null?n(e,t.value):Rk(t,(r,i)=>{const s=new H(e.toString()+"/"+r);Ac(i,s,n)})}function Rk(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
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
 */class xk{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n={...e};return this.last_&&je(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
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
 */const jf=10*1e3,Pk=30*1e3,Ak=5*60*1e3;class Ok{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new xk(e);const r=jf+(Pk-jf)*Math.random();Oi(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;je(e,(i,s)=>{s>0&&Ut(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),Oi(this.reportStats_.bind(this),Math.floor(Math.random()*2*Ak))}}/**
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
 */var at;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(at||(at={}));function Q_(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function id(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function sd(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class Jo{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=at.ACK_USER_WRITE,this.source=Q_()}operationForChild(e){if(j(this.path)){if(this.affectedTree.value!=null)return C(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new H(e));return new Jo(W(),n,this.revert)}}else return C(b(this.path)===e,"operationForChild called for unrelated child."),new Jo($(this.path),this.affectedTree,this.revert)}}/**
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
 */class ls{constructor(e,n){this.source=e,this.path=n,this.type=at.LISTEN_COMPLETE}operationForChild(e){return j(this.path)?new ls(this.source,W()):new ls(this.source,$(this.path))}}/**
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
 */class Gn{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=at.OVERWRITE}operationForChild(e){return j(this.path)?new Gn(this.source,W(),this.snap.getImmediateChild(e)):new Gn(this.source,$(this.path),this.snap)}}/**
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
 */class as{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=at.MERGE}operationForChild(e){if(j(this.path)){const n=this.children.subtree(new H(e));return n.isEmpty()?null:n.value?new Gn(this.source,W(),n.value):new as(this.source,W(),n)}else return C(b(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new as(this.source,$(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class qn{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(j(e))return this.isFullyInitialized()&&!this.filtered_;const n=b(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class Dk{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function Lk(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(Ik(o.childName,o.snapshotNode))}),mi(t,i,"child_removed",e,r,n),mi(t,i,"child_added",e,r,n),mi(t,i,"child_moved",s,r,n),mi(t,i,"child_changed",e,r,n),mi(t,i,"value",e,r,n),i}function mi(t,e,n,r,i,s){const o=r.filter(l=>l.type===n);o.sort((l,a)=>bk(t,l,a)),o.forEach(l=>{const a=Mk(t,l,s);i.forEach(c=>{c.respondsTo(l.type)&&e.push(c.createEvent(a,t.query_))})})}function Mk(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function bk(t,e,n){if(e.childName==null||n.childName==null)throw Kr("Should only compare child_ events.");const r=new F(e.childName,e.snapshotNode),i=new F(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
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
 */function Rl(t,e){return{eventCache:t,serverCache:e}}function Di(t,e,n,r){return Rl(new qn(e,n,r),t.serverCache)}function Y_(t,e,n,r){return Rl(t.eventCache,new qn(e,n,r))}function Oc(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Qn(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let Ea;const Fk=()=>(Ea||(Ea=new De(SI)),Ea);class Q{static fromObject(e){let n=new Q(null);return je(e,(r,i)=>{n=n.set(new H(r),i)}),n}constructor(e,n=Fk()){this.value=e,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:W(),value:this.value};if(j(e))return null;{const r=b(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue($(e),n);return s!=null?{path:le(new H(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(j(e))return this;{const n=b(e),r=this.children.get(n);return r!==null?r.subtree($(e)):new Q(null)}}set(e,n){if(j(e))return new Q(n,this.children);{const r=b(e),s=(this.children.get(r)||new Q(null)).set($(e),n),o=this.children.insert(r,s);return new Q(this.value,o)}}remove(e){if(j(e))return this.children.isEmpty()?new Q(null):new Q(null,this.children);{const n=b(e),r=this.children.get(n);if(r){const i=r.remove($(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new Q(null):new Q(this.value,s)}else return this}}get(e){if(j(e))return this.value;{const n=b(e),r=this.children.get(n);return r?r.get($(e)):null}}setTree(e,n){if(j(e))return n;{const r=b(e),s=(this.children.get(r)||new Q(null)).setTree($(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new Q(this.value,o)}}fold(e){return this.fold_(W(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(le(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,W(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(j(e))return null;{const s=b(e),o=this.children.get(s);return o?o.findOnPath_($(e),le(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,W(),n)}foreachOnPath_(e,n,r){if(j(e))return this;{this.value&&r(n,this.value);const i=b(e),s=this.children.get(i);return s?s.foreachOnPath_($(e),le(n,i),r):new Q(null)}}foreach(e){this.foreach_(W(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(le(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
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
 */class dt{constructor(e){this.writeTree_=e}static empty(){return new dt(new Q(null))}}function Li(t,e,n){if(j(e))return new dt(new Q(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=Oe(i,e);return s=s.updateChild(o,n),new dt(t.writeTree_.set(i,s))}else{const i=new Q(n),s=t.writeTree_.setTree(e,i);return new dt(s)}}}function Uf(t,e,n){let r=t;return je(n,(i,s)=>{r=Li(r,le(e,i),s)}),r}function zf(t,e){if(j(e))return dt.empty();{const n=t.writeTree_.setTree(e,new Q(null));return new dt(n)}}function Dc(t,e){return Zn(t,e)!=null}function Zn(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Oe(n.path,e)):null}function Wf(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(re,(r,i)=>{e.push(new F(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new F(r,i.value))}),e}function fn(t,e){if(j(e))return t;{const n=Zn(t,e);return n!=null?new dt(new Q(n)):new dt(t.writeTree_.subtree(e))}}function Lc(t){return t.writeTree_.isEmpty()}function Wr(t,e){return X_(W(),t.writeTree_,e)}function X_(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(C(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=X_(le(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(le(t,".priority"),r)),n}}/**
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
 */function od(t,e){return ty(e,t)}function jk(t,e,n,r,i){C(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=Li(t.visibleWrites,e,n)),t.lastWriteId=r}function Uk(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function zk(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);C(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&Wk(l,r.path)?i=!1:lt(r.path,l.path)&&(s=!0)),o--}if(i){if(s)return Bk(t),!0;if(r.snap)t.visibleWrites=zf(t.visibleWrites,r.path);else{const l=r.children;je(l,a=>{t.visibleWrites=zf(t.visibleWrites,le(r.path,a))})}return!0}else return!1}function Wk(t,e){if(t.snap)return lt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&lt(le(t.path,n),e))return!0;return!1}function Bk(t){t.visibleWrites=J_(t.allWrites,Vk,W()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function Vk(t){return t.visible}function J_(t,e,n){let r=dt.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let l;if(s.snap)lt(n,o)?(l=Oe(n,o),r=Li(r,l,s.snap)):lt(o,n)&&(l=Oe(o,n),r=Li(r,W(),s.snap.getChild(l)));else if(s.children){if(lt(n,o))l=Oe(n,o),r=Uf(r,l,s.children);else if(lt(o,n))if(l=Oe(o,n),j(l))r=Uf(r,W(),s.children);else{const a=br(s.children,b(l));if(a){const c=a.getChild($(l));r=Li(r,W(),c)}}}else throw Kr("WriteRecord should have .snap or .children")}}return r}function Z_(t,e,n,r,i){if(!r&&!i){const s=Zn(t.visibleWrites,e);if(s!=null)return s;{const o=fn(t.visibleWrites,e);if(Lc(o))return n;if(n==null&&!Dc(o,W()))return null;{const l=n||O.EMPTY_NODE;return Wr(o,l)}}}else{const s=fn(t.visibleWrites,e);if(!i&&Lc(s))return n;if(!i&&n==null&&!Dc(s,W()))return null;{const o=function(c){return(c.visible||i)&&(!r||!~r.indexOf(c.writeId))&&(lt(c.path,e)||lt(e,c.path))},l=J_(t.allWrites,o,e),a=n||O.EMPTY_NODE;return Wr(l,a)}}}function Hk(t,e,n){let r=O.EMPTY_NODE;const i=Zn(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(re,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=fn(t.visibleWrites,e);return n.forEachChild(re,(o,l)=>{const a=Wr(fn(s,new H(o)),l);r=r.updateImmediateChild(o,a)}),Wf(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=fn(t.visibleWrites,e);return Wf(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function $k(t,e,n,r,i){C(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=le(e,n);if(Dc(t.visibleWrites,s))return null;{const o=fn(t.visibleWrites,s);return Lc(o)?i.getChild(n):Wr(o,i.getChild(n))}}function Kk(t,e,n,r){const i=le(e,n),s=Zn(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=fn(t.visibleWrites,i);return Wr(o,r.getNode().getImmediateChild(n))}else return null}function Gk(t,e){return Zn(t.visibleWrites,e)}function qk(t,e,n,r,i,s,o){let l;const a=fn(t.visibleWrites,e),c=Zn(a,W());if(c!=null)l=c;else if(n!=null)l=Wr(a,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const d=[],u=o.getCompare(),h=s?l.getReverseIteratorFrom(r,o):l.getIteratorFrom(r,o);let _=h.getNext();for(;_&&d.length<i;)u(_,r)!==0&&d.push(_),_=h.getNext();return d}else return[]}function Qk(){return{visibleWrites:dt.empty(),allWrites:[],lastWriteId:-1}}function Zo(t,e,n,r){return Z_(t.writeTree,t.treePath,e,n,r)}function ld(t,e){return Hk(t.writeTree,t.treePath,e)}function Bf(t,e,n,r){return $k(t.writeTree,t.treePath,e,n,r)}function el(t,e){return Gk(t.writeTree,le(t.treePath,e))}function Yk(t,e,n,r,i,s){return qk(t.writeTree,t.treePath,e,n,r,i,s)}function ad(t,e,n){return Kk(t.writeTree,t.treePath,e,n)}function ey(t,e){return ty(le(t.treePath,e),t.writeTree)}function ty(t,e){return{treePath:t,writeTree:e}}/**
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
 */class Xk{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;C(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),C(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,ss(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,is(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,zr(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,ss(r,e.snapshotNode,i.oldSnap));else throw Kr("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class Jk{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const ny=new Jk;class cd{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new qn(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return ad(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Qn(this.viewCache_),s=Yk(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
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
 */function Zk(t){return{filter:t}}function eT(t,e){C(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),C(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function tT(t,e,n,r,i){const s=new Xk;let o,l;if(n.type===at.OVERWRITE){const c=n;c.source.fromUser?o=Mc(t,e,c.path,c.snap,r,i,s):(C(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered()&&!j(c.path),o=tl(t,e,c.path,c.snap,r,i,l,s))}else if(n.type===at.MERGE){const c=n;c.source.fromUser?o=rT(t,e,c.path,c.children,r,i,s):(C(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered(),o=bc(t,e,c.path,c.children,r,i,l,s))}else if(n.type===at.ACK_USER_WRITE){const c=n;c.revert?o=oT(t,e,c.path,r,i,s):o=iT(t,e,c.path,c.affectedTree,r,i,s)}else if(n.type===at.LISTEN_COMPLETE)o=sT(t,e,n.path,r,s);else throw Kr("Unknown operation type: "+n.type);const a=s.getChanges();return nT(e,o,a),{viewCache:o,changes:a}}function nT(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=Oc(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(G_(Oc(e)))}}function ry(t,e,n,r,i,s){const o=e.eventCache;if(el(r,n)!=null)return e;{let l,a;if(j(n))if(C(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=Qn(e),d=c instanceof O?c:O.EMPTY_NODE,u=ld(r,d);l=t.filter.updateFullNode(e.eventCache.getNode(),u,s)}else{const c=Zo(r,Qn(e));l=t.filter.updateFullNode(e.eventCache.getNode(),c,s)}else{const c=b(n);if(c===".priority"){C(gn(n)===1,"Can't have a priority with additional path components");const d=o.getNode();a=e.serverCache.getNode();const u=Bf(r,n,d,a);u!=null?l=t.filter.updatePriority(d,u):l=o.getNode()}else{const d=$(n);let u;if(o.isCompleteForChild(c)){a=e.serverCache.getNode();const h=Bf(r,n,o.getNode(),a);h!=null?u=o.getNode().getImmediateChild(c).updateChild(d,h):u=o.getNode().getImmediateChild(c)}else u=ad(r,c,e.serverCache);u!=null?l=t.filter.updateChild(o.getNode(),c,u,d,i,s):l=o.getNode()}}return Di(e,l,o.isFullyInitialized()||j(n),t.filter.filtersNodes())}}function tl(t,e,n,r,i,s,o,l){const a=e.serverCache;let c;const d=o?t.filter:t.filter.getIndexedFilter();if(j(n))c=d.updateFullNode(a.getNode(),r,null);else if(d.filtersNodes()&&!a.isFiltered()){const _=a.getNode().updateChild(n,r);c=d.updateFullNode(a.getNode(),_,null)}else{const _=b(n);if(!a.isCompleteForPath(n)&&gn(n)>1)return e;const y=$(n),I=a.getNode().getImmediateChild(_).updateChild(y,r);_===".priority"?c=d.updatePriority(a.getNode(),I):c=d.updateChild(a.getNode(),_,I,y,ny,null)}const u=Y_(e,c,a.isFullyInitialized()||j(n),d.filtersNodes()),h=new cd(i,u,s);return ry(t,u,n,i,h,l)}function Mc(t,e,n,r,i,s,o){const l=e.eventCache;let a,c;const d=new cd(i,e,s);if(j(n))c=t.filter.updateFullNode(e.eventCache.getNode(),r,o),a=Di(e,c,!0,t.filter.filtersNodes());else{const u=b(n);if(u===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),r),a=Di(e,c,l.isFullyInitialized(),l.isFiltered());else{const h=$(n),_=l.getNode().getImmediateChild(u);let y;if(j(h))y=r;else{const v=d.getCompleteChild(u);v!=null?j_(h)===".priority"&&v.getChild(z_(h)).isEmpty()?y=v:y=v.updateChild(h,r):y=O.EMPTY_NODE}if(_.equals(y))a=e;else{const v=t.filter.updateChild(l.getNode(),u,y,h,d,o);a=Di(e,v,l.isFullyInitialized(),t.filter.filtersNodes())}}}return a}function Vf(t,e){return t.eventCache.isCompleteForChild(e)}function rT(t,e,n,r,i,s,o){let l=e;return r.foreach((a,c)=>{const d=le(n,a);Vf(e,b(d))&&(l=Mc(t,l,d,c,i,s,o))}),r.foreach((a,c)=>{const d=le(n,a);Vf(e,b(d))||(l=Mc(t,l,d,c,i,s,o))}),l}function Hf(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function bc(t,e,n,r,i,s,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let a=e,c;j(n)?c=r:c=new Q(null).setTree(n,r);const d=e.serverCache.getNode();return c.children.inorderTraversal((u,h)=>{if(d.hasChild(u)){const _=e.serverCache.getNode().getImmediateChild(u),y=Hf(t,_,h);a=tl(t,a,new H(u),y,i,s,o,l)}}),c.children.inorderTraversal((u,h)=>{const _=!e.serverCache.isCompleteForChild(u)&&h.value===null;if(!d.hasChild(u)&&!_){const y=e.serverCache.getNode().getImmediateChild(u),v=Hf(t,y,h);a=tl(t,a,new H(u),v,i,s,o,l)}}),a}function iT(t,e,n,r,i,s,o){if(el(i,n)!=null)return e;const l=e.serverCache.isFiltered(),a=e.serverCache;if(r.value!=null){if(j(n)&&a.isFullyInitialized()||a.isCompleteForPath(n))return tl(t,e,n,a.getNode().getChild(n),i,s,l,o);if(j(n)){let c=new Q(null);return a.getNode().forEachChild(Nr,(d,u)=>{c=c.set(new H(d),u)}),bc(t,e,n,c,i,s,l,o)}else return e}else{let c=new Q(null);return r.foreach((d,u)=>{const h=le(n,d);a.isCompleteForPath(h)&&(c=c.set(d,a.getNode().getChild(h)))}),bc(t,e,n,c,i,s,l,o)}}function sT(t,e,n,r,i){const s=e.serverCache,o=Y_(e,s.getNode(),s.isFullyInitialized()||j(n),s.isFiltered());return ry(t,o,n,r,ny,i)}function oT(t,e,n,r,i,s){let o;if(el(r,n)!=null)return e;{const l=new cd(r,e,i),a=e.eventCache.getNode();let c;if(j(n)||b(n)===".priority"){let d;if(e.serverCache.isFullyInitialized())d=Zo(r,Qn(e));else{const u=e.serverCache.getNode();C(u instanceof O,"serverChildren would be complete if leaf node"),d=ld(r,u)}d=d,c=t.filter.updateFullNode(a,d,s)}else{const d=b(n);let u=ad(r,d,e.serverCache);u==null&&e.serverCache.isCompleteForChild(d)&&(u=a.getImmediateChild(d)),u!=null?c=t.filter.updateChild(a,d,u,$(n),l,s):e.eventCache.getNode().hasChild(d)?c=t.filter.updateChild(a,d,O.EMPTY_NODE,$(n),l,s):c=a,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Zo(r,Qn(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,s)))}return o=e.serverCache.isFullyInitialized()||el(r,W())!=null,Di(e,c,o,t.filter.filtersNodes())}}/**
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
 */class lT{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new nd(r.getIndex()),s=Tk(r);this.processor_=Zk(s);const o=n.serverCache,l=n.eventCache,a=i.updateFullNode(O.EMPTY_NODE,o.getNode(),null),c=s.updateFullNode(O.EMPTY_NODE,l.getNode(),null),d=new qn(a,o.isFullyInitialized(),i.filtersNodes()),u=new qn(c,l.isFullyInitialized(),s.filtersNodes());this.viewCache_=Rl(u,d),this.eventGenerator_=new Dk(this.query_)}get query(){return this.query_}}function aT(t){return t.viewCache_.serverCache.getNode()}function cT(t,e){const n=Qn(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!j(e)&&!n.getImmediateChild(b(e)).isEmpty())?n.getChild(e):null}function $f(t){return t.eventRegistrations_.length===0}function uT(t,e){t.eventRegistrations_.push(e)}function Kf(t,e,n){const r=[];if(n){C(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function Gf(t,e,n,r){e.type===at.MERGE&&e.source.queryId!==null&&(C(Qn(t.viewCache_),"We should always have a full cache before handling merges"),C(Oc(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=tT(t.processor_,i,e,n,r);return eT(t.processor_,s.viewCache),C(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,iy(t,s.changes,s.viewCache.eventCache.getNode(),null)}function dT(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(re,(s,o)=>{r.push(zr(s,o))}),n.isFullyInitialized()&&r.push(G_(n.getNode())),iy(t,r,n.getNode(),e)}function iy(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return Lk(t.eventGenerator_,e,n,i)}/**
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
 */let nl;class hT{constructor(){this.views=new Map}}function fT(t){C(!nl,"__referenceConstructor has already been defined"),nl=t}function pT(){return C(nl,"Reference.ts has not been loaded"),nl}function mT(t){return t.views.size===0}function ud(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return C(s!=null,"SyncTree gave us an op for an invalid query."),Gf(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(Gf(o,e,n,r));return s}}function gT(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let l=Zo(n,i?r:null),a=!1;l?a=!0:r instanceof O?(l=ld(n,r),a=!1):(l=O.EMPTY_NODE,a=!1);const c=Rl(new qn(l,a,!1),new qn(r,i,!1));return new lT(e,c)}return o}function _T(t,e,n,r,i,s){const o=gT(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),uT(o,n),dT(o,n)}function yT(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const l=_n(t);if(i==="default")for(const[a,c]of t.views.entries())o=o.concat(Kf(c,n,r)),$f(c)&&(t.views.delete(a),c.query._queryParams.loadsAllData()||s.push(c.query));else{const a=t.views.get(i);a&&(o=o.concat(Kf(a,n,r)),$f(a)&&(t.views.delete(i),a.query._queryParams.loadsAllData()||s.push(a.query)))}return l&&!_n(t)&&s.push(new(pT())(e._repo,e._path)),{removed:s,events:o}}function sy(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Rr(t,e){let n=null;for(const r of t.views.values())n=n||cT(r,e);return n}function oy(t,e){if(e._queryParams.loadsAllData())return xl(t);{const r=e._queryIdentifier;return t.views.get(r)}}function ly(t,e){return oy(t,e)!=null}function _n(t){return xl(t)!=null}function xl(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let rl;function vT(t){C(!rl,"__referenceConstructor has already been defined"),rl=t}function wT(){return C(rl,"Reference.ts has not been loaded"),rl}let ET=1;class qf{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Q(null),this.pendingWriteTree_=Qk(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function ay(t,e,n,r,i){return jk(t.pendingWriteTree_,e,n,r,i),i?Cs(t,new Gn(Q_(),e,n)):[]}function Ln(t,e,n=!1){const r=Uk(t.pendingWriteTree_,e);if(zk(t.pendingWriteTree_,e)){let s=new Q(null);return r.snap!=null?s=s.set(W(),!0):je(r.children,o=>{s=s.set(new H(o),!0)}),Cs(t,new Jo(r.path,s,n))}else return[]}function Pl(t,e,n){return Cs(t,new Gn(id(),e,n))}function ST(t,e,n){const r=Q.fromObject(n);return Cs(t,new as(id(),e,r))}function CT(t,e){return Cs(t,new ls(id(),e))}function IT(t,e,n){const r=hd(t,n);if(r){const i=fd(r),s=i.path,o=i.queryId,l=Oe(s,e),a=new ls(sd(o),l);return pd(t,s,a)}else return[]}function Fc(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let l=[];if(o&&(e._queryIdentifier==="default"||ly(o,e))){const a=yT(o,e,n,r);mT(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const c=a.removed;if(l=a.events,!i){const d=c.findIndex(h=>h._queryParams.loadsAllData())!==-1,u=t.syncPointTree_.findOnPath(s,(h,_)=>_n(_));if(d&&!u){const h=t.syncPointTree_.subtree(s);if(!h.isEmpty()){const _=NT(h);for(let y=0;y<_.length;++y){const v=_[y],I=v.query,m=dy(t,v);t.listenProvider_.startListening(Mi(I),il(t,I),m.hashFn,m.onComplete)}}}!u&&c.length>0&&!r&&(d?t.listenProvider_.stopListening(Mi(e),null):c.forEach(h=>{const _=t.queryToTagMap.get(Al(h));t.listenProvider_.stopListening(Mi(h),_)}))}RT(t,c)}return l}function kT(t,e,n,r){const i=hd(t,r);if(i!=null){const s=fd(i),o=s.path,l=s.queryId,a=Oe(o,e),c=new Gn(sd(l),a,n);return pd(t,o,c)}else return[]}function TT(t,e,n,r){const i=hd(t,r);if(i){const s=fd(i),o=s.path,l=s.queryId,a=Oe(o,e),c=Q.fromObject(n),d=new as(sd(l),a,c);return pd(t,o,d)}else return[]}function Qf(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(h,_)=>{const y=Oe(h,i);s=s||Rr(_,y),o=o||_n(_)});let l=t.syncPointTree_.get(i);l?(o=o||_n(l),s=s||Rr(l,W())):(l=new hT,t.syncPointTree_=t.syncPointTree_.set(i,l));let a;s!=null?a=!0:(a=!1,s=O.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((_,y)=>{const v=Rr(y,W());v&&(s=s.updateImmediateChild(_,v))}));const c=ly(l,e);if(!c&&!e._queryParams.loadsAllData()){const h=Al(e);C(!t.queryToTagMap.has(h),"View does not exist, but we have a tag");const _=xT();t.queryToTagMap.set(h,_),t.tagToQueryMap.set(_,h)}const d=od(t.pendingWriteTree_,i);let u=_T(l,e,n,d,s,a);if(!c&&!o&&!r){const h=oy(l,e);u=u.concat(PT(t,e,h))}return u}function dd(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,l)=>{const a=Oe(o,e),c=Rr(l,a);if(c)return c});return Z_(i,e,s,n,!0)}function Cs(t,e){return cy(e,t.syncPointTree_,null,od(t.pendingWriteTree_,W()))}function cy(t,e,n,r){if(j(t.path))return uy(t,e,n,r);{const i=e.get(W());n==null&&i!=null&&(n=Rr(i,W()));let s=[];const o=b(t.path),l=t.operationForChild(o),a=e.children.get(o);if(a&&l){const c=n?n.getImmediateChild(o):null,d=ey(r,o);s=s.concat(cy(l,a,c,d))}return i&&(s=s.concat(ud(i,t,r,n))),s}}function uy(t,e,n,r){const i=e.get(W());n==null&&i!=null&&(n=Rr(i,W()));let s=[];return e.children.inorderTraversal((o,l)=>{const a=n?n.getImmediateChild(o):null,c=ey(r,o),d=t.operationForChild(o);d&&(s=s.concat(uy(d,l,a,c)))}),i&&(s=s.concat(ud(i,t,r,n))),s}function dy(t,e){const n=e.query,r=il(t,n);return{hashFn:()=>(aT(e)||O.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?IT(t,n._path,r):CT(t,n._path);{const s=kI(i,n);return Fc(t,n,null,s)}}}}function il(t,e){const n=Al(e);return t.queryToTagMap.get(n)}function Al(t){return t._path.toString()+"$"+t._queryIdentifier}function hd(t,e){return t.tagToQueryMap.get(e)}function fd(t){const e=t.indexOf("$");return C(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new H(t.substr(0,e))}}function pd(t,e,n){const r=t.syncPointTree_.get(e);C(r,"Missing sync point for query tag that we're tracking");const i=od(t.pendingWriteTree_,e);return ud(r,n,i,null)}function NT(t){return t.fold((e,n,r)=>{if(n&&_n(n))return[xl(n)];{let i=[];return n&&(i=sy(n)),je(r,(s,o)=>{i=i.concat(o)}),i}})}function Mi(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(wT())(t._repo,t._path):t}function RT(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=Al(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function xT(){return ET++}function PT(t,e,n){const r=e._path,i=il(t,e),s=dy(t,n),o=t.listenProvider_.startListening(Mi(e),i,s.hashFn,s.onComplete),l=t.syncPointTree_.subtree(r);if(i)C(!_n(l.value),"If we're adding a query, it shouldn't be shadowed");else{const a=l.fold((c,d,u)=>{if(!j(c)&&d&&_n(d))return[xl(d).query];{let h=[];return d&&(h=h.concat(sy(d).map(_=>_.query))),je(u,(_,y)=>{h=h.concat(y)}),h}});for(let c=0;c<a.length;++c){const d=a[c];t.listenProvider_.stopListening(Mi(d),il(t,d))}}return o}/**
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
 */class md{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new md(n)}node(){return this.node_}}class gd{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=le(this.path_,e);return new gd(this.syncTree_,n)}node(){return dd(this.syncTree_,this.path_)}}const AT=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Yf=function(t,e,n){if(!t||typeof t!="object")return t;if(C(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return OT(t[".sv"],e,n);if(typeof t[".sv"]=="object")return DT(t[".sv"],e);C(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},OT=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:C(!1,"Unexpected server value: "+t)}},DT=function(t,e,n){t.hasOwnProperty("increment")||C(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&C(!1,"Unexpected increment value: "+r);const i=e.node();if(C(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},LT=function(t,e,n,r){return _d(e,new gd(n,t),r)},hy=function(t,e,n){return _d(t,new md(e),n)};function _d(t,e,n){const r=t.getPriority().val(),i=Yf(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,l=Yf(o.getValue(),e,n);return l!==o.getValue()||i!==o.getPriority().val()?new ue(l,ge(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new ue(i))),o.forEachChild(re,(l,a)=>{const c=_d(a,e.getImmediateChild(l),n);c!==a&&(s=s.updateImmediateChild(l,c))}),s}}/**
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
 */class yd{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function vd(t,e){let n=e instanceof H?e:new H(e),r=t,i=b(n);for(;i!==null;){const s=br(r.node.children,i)||{children:{},childCount:0};r=new yd(i,r,s),n=$(n),i=b(n)}return r}function Zr(t){return t.node.value}function fy(t,e){t.node.value=e,jc(t)}function py(t){return t.node.childCount>0}function MT(t){return Zr(t)===void 0&&!py(t)}function Ol(t,e){je(t.node.children,(n,r)=>{e(new yd(n,t,r))})}function my(t,e,n,r){n&&!r&&e(t),Ol(t,i=>{my(i,e,!0,r)}),n&&r&&e(t)}function bT(t,e,n){let r=n?t:t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function Is(t){return new H(t.parent===null?t.name:Is(t.parent)+"/"+t.name)}function jc(t){t.parent!==null&&FT(t.parent,t.name,t)}function FT(t,e,n){const r=MT(n),i=Ut(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,jc(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,jc(t))}/**
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
 */const jT=/[\[\].#$\/\u0000-\u001F\u007F]/,UT=/[\[\].#$\u0000-\u001F\u007F]/,Sa=10*1024*1024,gy=function(t){return typeof t=="string"&&t.length!==0&&!jT.test(t)},_y=function(t){return typeof t=="string"&&t.length!==0&&!UT.test(t)},zT=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),_y(t)},yy=function(t,e,n,r){r&&e===void 0||wd(Fu(t,"value"),e,n)},wd=function(t,e,n){const r=n instanceof H?new ik(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+xn(r));if(typeof e=="function")throw new Error(t+"contains a function "+xn(r)+" with contents = "+e.toString());if(__(e))throw new Error(t+"contains "+e.toString()+" "+xn(r));if(typeof e=="string"&&e.length>Sa/3&&Sl(e)>Sa)throw new Error(t+"contains a string greater than "+Sa+" utf8 bytes "+xn(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(je(e,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!gy(o)))throw new Error(t+" contains an invalid key ("+o+") "+xn(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);sk(r,o),wd(t,l,r),ok(r)}),i&&s)throw new Error(t+' contains ".value" child '+xn(r)+" in addition to actual children.")}},vy=function(t,e,n,r){if(!(r&&n===void 0)&&!_y(n))throw new Error(Fu(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},WT=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),vy(t,e,n,r)},Ed=function(t,e){if(b(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},BT=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!gy(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!zT(n))throw new Error(Fu(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class VT{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Sd(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!Zu(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function wy(t,e,n){Sd(t,n),Ey(t,r=>Zu(r,e))}function Ft(t,e,n){Sd(t,n),Ey(t,r=>lt(r,e)||lt(e,r))}function Ey(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(HT(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function HT(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();Fn&&Se("event: "+n.toString()),Jr(r)}}}/**
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
 */const $T="repo_interrupt",KT=25;class GT{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new VT,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Xo(),this.transactionQueueTree_=new yd,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function qT(t,e,n){if(t.stats_=Xu(t.repoInfo_),t.forceRestClient_||xI())t.server_=new Yo(t.repoInfo_,(r,i,s,o)=>{Xf(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Jf(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{fe(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new xt(t.repoInfo_,e,(r,i,s,o)=>{Xf(t,r,i,s,o)},r=>{Jf(t,r)},r=>{QT(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=LI(t.repoInfo_,()=>new Ok(t.stats_,t.server_)),t.infoData_=new Nk,t.infoSyncTree_=new qf({startListening:(r,i,s,o)=>{let l=[];const a=t.infoData_.getNode(r._path);return a.isEmpty()||(l=Pl(t.infoSyncTree_,r._path,a),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),Id(t,"connected",!1),t.serverSyncTree_=new qf({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(l,a)=>{const c=o(l,a);Ft(t.eventQueue_,r._path,c)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function Sy(t){const n=t.infoData_.getNode(new H(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Cd(t){return AT({timestamp:Sy(t)})}function Xf(t,e,n,r,i){t.dataUpdateCount++;const s=new H(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const a=Uo(n,c=>ge(c));o=TT(t.serverSyncTree_,s,a,i)}else{const a=ge(n);o=kT(t.serverSyncTree_,s,a,i)}else if(r){const a=Uo(n,c=>ge(c));o=ST(t.serverSyncTree_,s,a)}else{const a=ge(n);o=Pl(t.serverSyncTree_,s,a)}let l=s;o.length>0&&(l=Dl(t,s)),Ft(t.eventQueue_,l,o)}function Jf(t,e){Id(t,"connected",e),e===!1&&XT(t)}function QT(t,e){je(e,(n,r)=>{Id(t,n,r)})}function Id(t,e,n){const r=new H("/.info/"+e),i=ge(n);t.infoData_.updateSnapshot(r,i);const s=Pl(t.infoSyncTree_,r,i);Ft(t.eventQueue_,r,s)}function Cy(t){return t.nextWriteId_++}function YT(t,e,n,r,i){kd(t,"set",{path:e.toString(),value:n,priority:r});const s=Cd(t),o=ge(n,r),l=dd(t.serverSyncTree_,e),a=hy(o,l,s),c=Cy(t),d=ay(t.serverSyncTree_,e,a,c,!0);Sd(t.eventQueue_,d),t.server_.put(e.toString(),o.val(!0),(h,_)=>{const y=h==="ok";y||Fe("set at "+e+" failed: "+h);const v=Ln(t.serverSyncTree_,c,!y);Ft(t.eventQueue_,e,v),eN(t,i,h,_)});const u=Ry(t,e);Dl(t,u),Ft(t.eventQueue_,u,[])}function XT(t){kd(t,"onDisconnectEvents");const e=Cd(t),n=Xo();Ac(t.onDisconnect_,W(),(i,s)=>{const o=LT(i,s,t.serverSyncTree_,e);q_(n,i,o)});let r=[];Ac(n,W(),(i,s)=>{r=r.concat(Pl(t.serverSyncTree_,i,s));const o=Ry(t,i);Dl(t,o)}),t.onDisconnect_=Xo(),Ft(t.eventQueue_,W(),r)}function JT(t,e,n){let r;b(e._path)===".info"?r=Qf(t.infoSyncTree_,e,n):r=Qf(t.serverSyncTree_,e,n),wy(t.eventQueue_,e._path,r)}function Zf(t,e,n){let r;b(e._path)===".info"?r=Fc(t.infoSyncTree_,e,n):r=Fc(t.serverSyncTree_,e,n),wy(t.eventQueue_,e._path,r)}function ZT(t){t.persistentConnection_&&t.persistentConnection_.interrupt($T)}function kd(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Se(n,...e)}function eN(t,e,n,r){e&&Jr(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function Iy(t,e,n){return dd(t.serverSyncTree_,e,n)||O.EMPTY_NODE}function Td(t,e=t.transactionQueueTree_){if(e||Ll(t,e),Zr(e)){const n=Ty(t,e);C(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&tN(t,Is(e),n)}else py(e)&&Ol(e,n=>{Td(t,n)})}function tN(t,e,n){const r=n.map(c=>c.currentWriteId),i=Iy(t,e,r);let s=i;const o=i.hash();for(let c=0;c<n.length;c++){const d=n[c];C(d.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),d.status=1,d.retryCount++;const u=Oe(e,d.path);s=s.updateChild(u,d.currentOutputSnapshotRaw)}const l=s.val(!0),a=e;t.server_.put(a.toString(),l,c=>{kd(t,"transaction put response",{path:a.toString(),status:c});let d=[];if(c==="ok"){const u=[];for(let h=0;h<n.length;h++)n[h].status=2,d=d.concat(Ln(t.serverSyncTree_,n[h].currentWriteId)),n[h].onComplete&&u.push(()=>n[h].onComplete(null,!0,n[h].currentOutputSnapshotResolved)),n[h].unwatcher();Ll(t,vd(t.transactionQueueTree_,e)),Td(t,t.transactionQueueTree_),Ft(t.eventQueue_,e,d);for(let h=0;h<u.length;h++)Jr(u[h])}else{if(c==="datastale")for(let u=0;u<n.length;u++)n[u].status===3?n[u].status=4:n[u].status=0;else{Fe("transaction at "+a.toString()+" failed: "+c);for(let u=0;u<n.length;u++)n[u].status=4,n[u].abortReason=c}Dl(t,e)}},o)}function Dl(t,e){const n=ky(t,e),r=Is(n),i=Ty(t,n);return nN(t,i,r),r}function nN(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const a=e[l],c=Oe(n,a.path);let d=!1,u;if(C(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),a.status===4)d=!0,u=a.abortReason,i=i.concat(Ln(t.serverSyncTree_,a.currentWriteId,!0));else if(a.status===0)if(a.retryCount>=KT)d=!0,u="maxretry",i=i.concat(Ln(t.serverSyncTree_,a.currentWriteId,!0));else{const h=Iy(t,a.path,o);a.currentInputSnapshot=h;const _=e[l].update(h.val());if(_!==void 0){wd("transaction failed: Data returned ",_,a.path);let y=ge(_);typeof _=="object"&&_!=null&&Ut(_,".priority")||(y=y.updatePriority(h.getPriority()));const I=a.currentWriteId,m=Cd(t),p=hy(y,h,m);a.currentOutputSnapshotRaw=y,a.currentOutputSnapshotResolved=p,a.currentWriteId=Cy(t),o.splice(o.indexOf(I),1),i=i.concat(ay(t.serverSyncTree_,a.path,p,a.currentWriteId,a.applyLocally)),i=i.concat(Ln(t.serverSyncTree_,I,!0))}else d=!0,u="nodata",i=i.concat(Ln(t.serverSyncTree_,a.currentWriteId,!0))}Ft(t.eventQueue_,n,i),i=[],d&&(e[l].status=2,function(h){setTimeout(h,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(u==="nodata"?r.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):r.push(()=>e[l].onComplete(new Error(u),!1,null))))}Ll(t,t.transactionQueueTree_);for(let l=0;l<r.length;l++)Jr(r[l]);Td(t,t.transactionQueueTree_)}function ky(t,e){let n,r=t.transactionQueueTree_;for(n=b(e);n!==null&&Zr(r)===void 0;)r=vd(r,n),e=$(e),n=b(e);return r}function Ty(t,e){const n=[];return Ny(t,e,n),n.sort((r,i)=>r.order-i.order),n}function Ny(t,e,n){const r=Zr(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);Ol(e,i=>{Ny(t,i,n)})}function Ll(t,e){const n=Zr(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,fy(e,n.length>0?n:void 0)}Ol(e,r=>{Ll(t,r)})}function Ry(t,e){const n=Is(ky(t,e)),r=vd(t.transactionQueueTree_,e);return bT(r,i=>{Ca(t,i)}),Ca(t,r),my(r,i=>{Ca(t,i)}),n}function Ca(t,e){const n=Zr(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(C(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(C(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Ln(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?fy(e,void 0):n.length=s+1,Ft(t.eventQueue_,Is(e),i);for(let o=0;o<r.length;o++)Jr(r[o])}}/**
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
 */function rN(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function iN(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):Fe(`Invalid query segment '${n}' in query '${t}'`)}return e}const ep=function(t,e){const n=sN(t),r=n.namespace;n.domain==="firebase.com"&&bt(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&bt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||wI();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new x_(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new H(n.pathString)}},sN=function(t){let e="",n="",r="",i="",s="",o=!0,l="https",a=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(l=t.substring(0,c-1),t=t.substring(c+2));let d=t.indexOf("/");d===-1&&(d=t.length);let u=t.indexOf("?");u===-1&&(u=t.length),e=t.substring(0,Math.min(d,u)),d<u&&(i=rN(t.substring(d,u)));const h=iN(t.substring(Math.min(t.length,u)));c=e.indexOf(":"),c>=0?(o=l==="https"||l==="wss",a=parseInt(e.substring(c+1),10)):c=e.length;const _=e.slice(0,c);if(_.toLowerCase()==="localhost")n="localhost";else if(_.split(".").length<=2)n=_;else{const y=e.indexOf(".");r=e.substring(0,y).toLowerCase(),n=e.substring(y+1),s=r}"ns"in h&&(s=h.ns)}return{host:e,port:a,domain:n,subdomain:r,secure:o,scheme:l,pathString:i,namespace:s}};/**
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
 */const tp="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",oN=function(){let t=0;const e=[];return function(n){const r=n===t;t=n;let i;const s=new Array(8);for(i=7;i>=0;i--)s[i]=tp.charAt(n%64),n=Math.floor(n/64);C(n===0,"Cannot push at time == 0");let o=s.join("");if(r){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=tp.charAt(e[i]);return C(o.length===20,"nextPushId: Length should be 20."),o}}();/**
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
 */class xy{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+fe(this.snapshot.exportVal())}}class Py{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class lN{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return C(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class Nd{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return j(this._path)?null:j_(this._path)}get ref(){return new zt(this._repo,this._path)}get _queryIdentifier(){const e=Ff(this._queryParams),n=Qu(e);return n==="{}"?"default":n}get _queryObject(){return Ff(this._queryParams)}isEqual(e){if(e=xe(e),!(e instanceof Nd))return!1;const n=this._repo===e._repo,r=Zu(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+rk(this._path)}}class zt extends Nd{constructor(e,n){super(e,n,new rd,!1)}get parent(){const e=z_(this._path);return e===null?null:new zt(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class cs{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new H(e),r=Br(this.ref,e);return new cs(this._node.getChild(n),r,re)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new cs(i,Br(this.ref,r),re)))}hasChild(e){const n=new H(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Je(t,e){return t=xe(t),t._checkNotDeleted("ref"),e!==void 0?Br(t._root,e):t._root}function Br(t,e){return t=xe(t),b(t._path)===null?WT("child","path",e,!1):vy("child","path",e,!1),new zt(t._repo,le(t._path,e))}function Rd(t,e){t=xe(t),Ed("push",t._path),yy("push",e,t._path,!0);const n=Sy(t._repo),r=oN(n),i=Br(t,r),s=Br(t,r);let o;return e!=null?o=ei(s,e).then(()=>s):o=Promise.resolve(s),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function ks(t){return Ed("remove",t._path),ei(t,null)}function ei(t,e){t=xe(t),Ed("set",t._path),yy("set",e,t._path,!1);const n=new El;return YT(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}class xd{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new xy("value",this,new cs(e.snapshotNode,new zt(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new Py(this,e,n):null}matches(e){return e instanceof xd?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class Pd{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new Py(this,e,n):null}createEvent(e,n){C(e.childName!=null,"Child events should have a childName.");const r=Br(new zt(n._repo,n._path),e.childName),i=n._queryParams.getIndex();return new xy(e.type,this,new cs(e.snapshotNode,r,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof Pd?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function aN(t,e,n,r,i){let s;if(typeof r=="object"&&(s=void 0,i=r),typeof r=="function"&&(s=r),i&&i.onlyOnce){const a=n,c=(d,u)=>{Zf(t._repo,t,l),a(d,u)};c.userCallback=n.userCallback,c.context=n.context,n=c}const o=new lN(n,s||void 0),l=e==="value"?new xd(o):new Pd(e,o);return JT(t._repo,t,l),()=>Zf(t._repo,t,l)}function Ad(t,e,n,r){return aN(t,"value",e,n,r)}fT(zt);vT(zt);/**
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
 */const cN="FIREBASE_DATABASE_EMULATOR_HOST",Uc={};let uN=!1;function dN(t,e,n,r){const i=e.lastIndexOf(":"),s=e.substring(0,i),o=gs(s);t.repoInfo_=new x_(e,o,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0,n),r&&(t.authTokenProvider_=r)}function hN(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||bt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Se("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=ep(s,i),l=o.repoInfo,a,c;typeof process<"u"&&process.env&&(c=process.env[cN]),c?(a=!0,s=`http://${c}?ns=${l.namespace}`,o=ep(s,i),l=o.repoInfo):a=!o.repoInfo.secure;const d=i&&a?new Tr(Tr.OWNER):new AI(t.name,t.options,e);BT("Invalid Firebase Database URL",o),j(o.path)||bt("Database URL must point to the root of a Firebase Database (not including a child path).");const u=pN(l,t,d,new PI(t,n));return new mN(u,t)}function fN(t,e){const n=Uc[e];(!n||n[t.key]!==t)&&bt(`Database ${e}(${t.repoInfo_}) has already been deleted.`),ZT(t),delete n[t.key]}function pN(t,e,n,r){let i=Uc[e.name];i||(i={},Uc[e.name]=i);let s=i[t.toURLString()];return s&&bt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new GT(t,uN,n,r),i[t.toURLString()]=s,s}class mN{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(qT(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new zt(this._repo,W())),this._rootInternal}_delete(){return this._rootInternal!==null&&(fN(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&bt("Cannot call "+e+" on a deleted database.")}}function gN(t=Og(),e){const n=zu(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=R0("database");r&&_N(n,...r)}return n}function _N(t,e,n,r={}){t=xe(t),t._checkNotDeleted("useEmulator");const i=`${e}:${n}`,s=t._repoInternal;if(t._instanceStarted){if(i===t._repoInternal.repoInfo_.host&&Vn(r,s.repoInfo_.emulatorOptions))return;bt("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let o;if(s.repoInfo_.nodeAdmin)r.mockUserToken&&bt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new Tr(Tr.OWNER);else if(r.mockUserToken){const l=typeof r.mockUserToken=="string"?r.mockUserToken:x0(r.mockUserToken,t.app.options.projectId);o=new Tr(l)}gs(e)&&Rg(e),dN(s,i,r,o)}/**
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
 */function yN(t){mI(qr),Fr(new Hn("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return hN(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),dn(wf,Ef,t),dn(wf,Ef,"esm2020")}xt.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};xt.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};yN();const vN={apiKey:"AIzaSyBdnQklMDUEURzH2EI2UVMs_l3APwZMgq8",authDomain:"bruncheria-ordering.firebaseapp.com",databaseURL:"https://bruncheria-ordering-default-rtdb.firebaseio.com",projectId:"bruncheria-ordering",storageBucket:"bruncheria-ordering.firebasestorage.app",messagingSenderId:"57223437743",appId:"1:57223437743:web:860461fc6997efd646635a"},Ay=Ag(vN),Ia=fI(Ay),Ze=gN(Ay),Ts="orders",Ml="history",Od="ringers";async function wN(t){const e=Rd(Je(Ze,Ts));return await ei(e,{...t,firebaseKey:e.key}),e.key}async function EN(t){await Promise.all([ks(Je(Ze,`${Ts}/${t.firebaseKey}`)),by(t.number)])}async function SN(t){const e=Rd(Je(Ze,Ml)),n=e.key;return await Promise.all([ei(e,{...t,historyKey:n,status:"done",completedAt:new Date().toISOString()}),ks(Je(Ze,`${Ts}/${t.firebaseKey}`)),by(t.number)]),n}async function np(t,e=!1){const n=Rd(Je(Ze,Ts)),{historyKey:r,completedAt:i,status:s,...o}=t;return await Promise.all([ei(n,{...o,firebaseKey:n.key,status:"active"}),ks(Je(Ze,`${Ml}/${r}`)),...e?[My(t.number)]:[]]),n.key}async function Oy(t){await ks(Je(Ze,`${Ml}/${t.historyKey}`))}function Dy(t,e){return Ad(Je(Ze,Ts),n=>{const r=n.val()||{},i=Object.values(r).sort((s,o)=>new Date(s.createdAt||s.timestamp)-new Date(o.createdAt||o.timestamp));t(i)},e)}function Ly(t,e){return Ad(Je(Ze,Ml),n=>{const r=n.val()||{},i=Object.values(r).sort((s,o)=>new Date(o.completedAt)-new Date(s.completedAt));t(i)},e)}async function My(t){await ei(Je(Ze,`${Od}/${t}`),!0)}async function by(t){await ks(Je(Ze,`${Od}/${t}`))}function Fy(t,e){return Ad(Je(Ze,Od),n=>{const r=n.val()||{};t(new Set(Object.keys(r).map(Number)))},e)}const CN=Array.from({length:20},(t,e)=>e+1);function IN({onSelect:t,onBack:e}){const[n,r]=L.useState(null),[i,s]=L.useState(new Set);return L.useEffect(()=>Fy(s),[]),f.jsxs("div",{className:"order-number-screen",children:[f.jsxs("div",{className:"screen-header",children:[f.jsx("button",{className:"btn-back",onClick:e,children:"← Back"}),f.jsxs("div",{children:[f.jsx("div",{className:"screen-title",children:"Select Ringer Number"}),f.jsx("div",{className:"screen-subtitle",children:"Seleccione el número del localizador"})]})]}),f.jsxs("div",{className:"order-number-prompt",children:[f.jsx("div",{className:"order-number-prompt-text",children:"📟 Match the number on the ringer"}),f.jsx("div",{className:"order-number-prompt-sub",children:"Haga coincidir el número del localizador"})]}),f.jsx("div",{className:"order-number-scroll",children:f.jsx("div",{className:"number-grid",children:CN.map(o=>{const l=i.has(o);return f.jsxs("button",{className:`number-btn${n===o?" number-btn--selected":""}${l?" number-btn--busy":""}`,onClick:()=>!l&&r(o),disabled:l,"aria-label":l?`Ringer ${o} in use`:`Ringer ${o}`,children:[o,l&&f.jsx("span",{className:"number-btn-busy-dot"})]},o)})})}),f.jsx("div",{className:"order-number-footer",children:f.jsx("button",{className:"btn-primary",disabled:!n,onClick:()=>n&&t(n),style:n?{}:{opacity:.35,cursor:"default"},children:n?`Confirm Ringer #${n} · Confirmar #${n}`:"Select a number above"})})]})}function kN({order:t,onDone:e}){return f.jsxs("div",{className:"confirmation-screen",children:[f.jsxs("div",{className:"confirmation-inner",children:[f.jsx("div",{className:"confirmation-egg",children:"🍳"}),f.jsx("p",{className:"confirmation-label",children:"We're working on your order!"}),f.jsx("p",{className:"confirmation-label-es",children:"¡Estamos preparando su orden!"}),f.jsx("div",{className:"confirmation-ringer-tag",children:t.number}),f.jsxs("div",{className:"confirmation-buzz",children:["Your ringer will buzz when it's ready",f.jsx("span",{className:"confirmation-buzz-es",children:"Su localizador vibrará cuando esté lista"})]}),f.jsx("div",{className:"confirmation-pay",children:"💳 Pay at the window · Pague en la ventana"})]}),f.jsx("button",{className:"btn-primary confirmation-new-order",onClick:e,children:"Start New Order · Nueva Orden"})]})}const TN=8e3;function NN(){const[t,e]=L.useState(new Date);return L.useEffect(()=>{const n=setInterval(()=>e(new Date),1e3);return()=>clearInterval(n)},[]),f.jsx("span",{className:"kitchen-time",children:t.toLocaleTimeString("es-MX",{hour:"2-digit",minute:"2-digit"})})}function RN(){const[t,e]=L.useState(null),[n,r]=L.useState(!1),[i,s]=L.useState(""),[o,l]=L.useState(""),[a,c]=L.useState(!1),[d,u]=L.useState(""),[h,_]=L.useState("active"),[y,v]=L.useState([]),[I,m]=L.useState([]),[p,g]=L.useState(new Set),[E,k]=L.useState(!0),[N,R]=L.useState(""),[x,G]=L.useState(null),M=L.useRef(null);L.useEffect(()=>tC(Ia,w=>{e(w),r(!0),u("")},w=>{console.error("Firebase auth state failed:",w),u("No se pudo comprobar la sesión. Intenta recargar la página."),r(!0)}),[]),L.useEffect(()=>{if(!t){k(!1),v([]),m([]),g(new Set);return}k(!0),R("");const w=D=>{console.error("Kitchen data subscription failed:",D),R("No se pudieron cargar los datos. Verifica las reglas de acceso de Firebase."),k(!1)},P=[Dy(D=>{v(D.filter(J=>J.status==="active")),k(!1)},w),Ly(m,w),Fy(g,w)];return()=>P.forEach(D=>D())},[t]);async function Ue(w){w.preventDefault(),c(!0),u("");try{await JS(Ia,i.trim(),o),l("")}catch(P){console.error("Kitchen sign-in failed:",P),u(P.code==="auth/invalid-credential"?"Correo o contraseña incorrectos.":P.code==="auth/too-many-requests"?"Demasiados intentos. Espera un momento e inténtalo de nuevo.":"No se pudo iniciar sesión. Revisa tu conexión e inténtalo de nuevo.")}finally{c(!1)}}async function Wt(){try{await nC(Ia)}catch(w){console.error("Kitchen sign-out failed:",w),u("No se pudo cerrar sesión. Inténtalo de nuevo.")}}async function Cn(w){const P=await SN(w),D={...w,historyKey:P,status:"done",completedAt:new Date().toISOString()};M.current&&clearTimeout(M.current),G(D),M.current=setTimeout(()=>G(null),TN)}async function Ns(){if(!x)return;clearTimeout(M.current);const w=!p.has(x.number);await np(x,w),G(null)}async function bl(w){await EN(w)}async function ti(w){const P=!p.has(w.number);await np(w,P),P||alert(`⚠️ Localizador #${w.number} está en uso. La orden fue restaurada sin re-asignar el localizador.`)}async function ni(w){await Oy(w)}return n?t?E||N?f.jsx("div",{className:"kitchen-screen",children:f.jsxs("div",{className:"kitchen-empty",children:[f.jsx("div",{className:"kitchen-empty-emoji",children:N?"⚠️":"⏳"}),f.jsx("div",{children:N||"Cargando órdenes…"}),N&&f.jsx("button",{className:"kitchen-login-button",onClick:Wt,children:"Cerrar sesión"})]})}):f.jsxs("div",{className:"kitchen-screen",children:[f.jsxs("div",{className:"kitchen-header",children:[f.jsx("div",{className:"kitchen-title",children:"🌮 Bruncheria"}),f.jsxs("div",{className:"kitchen-status",children:[f.jsx(NN,{}),f.jsxs("span",{className:"kitchen-badge",children:[y.length," ",y.length===1?"orden":"órdenes"]}),f.jsx("button",{className:"kitchen-signout",onClick:Wt,children:"Salir"})]})]}),f.jsxs("div",{className:"kitchen-tabs",children:[f.jsxs("button",{className:`kitchen-tab${h==="active"?" kitchen-tab--active":""}`,onClick:()=>_("active"),children:["Activas ",y.length>0&&f.jsx("span",{className:"kitchen-tab-count",children:y.length})]}),f.jsxs("button",{className:`kitchen-tab${h==="history"?" kitchen-tab--active":""}`,onClick:()=>_("history"),children:["Historial ",I.length>0&&f.jsx("span",{className:"kitchen-tab-count",children:I.length})]})]}),x&&f.jsxs("div",{className:"kitchen-undo-bar",children:[f.jsxs("span",{children:["Orden #",x.number," completada"]}),f.jsx("button",{className:"kitchen-undo-btn",onClick:Ns,children:"↩ Deshacer"})]}),h==="active"&&(y.length===0?f.jsxs("div",{className:"kitchen-empty",children:[f.jsx("div",{className:"kitchen-empty-emoji",children:"✅"}),f.jsx("div",{children:"Al corriente"}),f.jsx("div",{style:{fontSize:20,fontWeight:500},children:"Sin órdenes pendientes"})]}):f.jsx("div",{className:"kitchen-scroll",children:f.jsx("div",{className:"kitchen-grid",children:y.map(w=>f.jsx(xN,{order:w,onDone:()=>Cn(w),onCancel:()=>bl(w)},w.firebaseKey||w.id))})})),h==="history"&&(I.length===0?f.jsxs("div",{className:"kitchen-empty",children:[f.jsx("div",{className:"kitchen-empty-emoji",children:"📋"}),f.jsx("div",{children:"Sin historial aún"})]}):f.jsx("div",{className:"kitchen-scroll",children:f.jsx("div",{className:"kitchen-grid",children:I.map(w=>f.jsx(PN,{order:w,ringerInUse:p.has(w.number),onRestore:()=>ti(w),onPickup:()=>ni(w)},w.historyKey))})}))]}):f.jsx("div",{className:"kitchen-screen",children:f.jsxs("form",{className:"kitchen-login",onSubmit:Ue,children:[f.jsx("div",{className:"kitchen-login-title",children:"🌮 Bruncheria"}),f.jsx("div",{className:"kitchen-login-subtitle",children:"Inicia sesión para abrir la cocina"}),f.jsx("label",{className:"kitchen-login-label",htmlFor:"kitchen-email",children:"Correo"}),f.jsx("input",{id:"kitchen-email",className:"kitchen-login-input",type:"email",autoComplete:"username",value:i,onChange:w=>s(w.target.value),required:!0}),f.jsx("label",{className:"kitchen-login-label",htmlFor:"kitchen-password",children:"Contraseña"}),f.jsx("input",{id:"kitchen-password",className:"kitchen-login-input",type:"password",autoComplete:"current-password",value:o,onChange:w=>l(w.target.value),required:!0}),d&&f.jsx("div",{className:"kitchen-login-error",role:"alert",children:d}),f.jsx("button",{className:"kitchen-login-button",type:"submit",disabled:a,children:a?"Iniciando sesión…":"Iniciar sesión"})]})}):f.jsx("div",{className:"kitchen-screen",children:f.jsxs("div",{className:"kitchen-empty",children:[f.jsx("div",{className:"kitchen-empty-emoji",children:"⏳"}),f.jsx("div",{children:"Verificando sesión…"})]})})}function xN({order:t,onDone:e,onCancel:n}){const[r,i]=L.useState(!1),s=new Date(t.createdAt||t.timestamp),o=Math.floor((Date.now()-s.getTime())/6e4),l=o>=10,a=s.toLocaleTimeString("en-US",{hour:"numeric",minute:"2-digit",hour12:!0});return r?f.jsxs("div",{className:"kitchen-order kitchen-order--confirming",children:[f.jsx("div",{className:"kitchen-order-number",children:t.number}),f.jsx("div",{className:"kitchen-divider"}),f.jsxs("div",{className:"kitchen-cancel-confirm",children:[f.jsx("div",{className:"kitchen-cancel-icon",children:"🗑️"}),f.jsx("div",{className:"kitchen-cancel-question",children:"¿Cancelar esta orden?"}),f.jsx("div",{className:"kitchen-cancel-hint",children:"Se eliminará permanentemente"}),f.jsx("button",{className:"kitchen-cancel-yes-btn",onClick:n,children:"Sí, cancelar"}),f.jsx("button",{className:"kitchen-cancel-no-btn",onClick:()=>i(!1),children:"No, regresar"})]})]}):f.jsxs("div",{className:`kitchen-order${l?" kitchen-order--urgent":""}`,children:[f.jsxs("div",{className:"kitchen-order-header",children:[f.jsx("div",{className:"kitchen-order-timestamp",children:a}),f.jsx("button",{className:"kitchen-cancel-trigger",onClick:()=>i(!0),title:"Cancelar orden",children:"✕"})]}),f.jsx("div",{className:"kitchen-order-number",children:t.number}),f.jsx("div",{className:"kitchen-divider"}),f.jsx("div",{className:"kitchen-items",children:t.cart.map(c=>{var u;const d=c.item.name_es||c.item.nameEs||c.item.name_en||"";return f.jsxs("div",{className:"kitchen-item",children:[f.jsxs("div",{className:"kitchen-item-name",children:[c.item.emoji&&`${c.item.emoji} `,d]}),((u=c.modifiers)==null?void 0:u.length)>0&&f.jsx("div",{className:"kitchen-item-mods",children:c.modifiers.map(h=>f.jsx("span",{className:"kitchen-mod-tag",children:h.es||h.nameEs||h.en},h.id))})]},c.id)})}),l&&f.jsx("div",{className:"kitchen-order-delayed",children:"Retrasado"}),!l&&o>0&&f.jsxs("div",{style:{fontSize:13,color:"rgba(255,255,255,0.3)",textAlign:"center"},children:["hace ",o,"min"]}),f.jsx("button",{className:"kitchen-done-btn",onClick:e,children:"✓ LISTO"})]})}function PN({order:t,ringerInUse:e,onRestore:n,onPickup:r}){const i=t.completedAt?new Date(t.completedAt).toLocaleTimeString("es-MX",{hour:"2-digit",minute:"2-digit"}):"—";return f.jsxs("div",{className:"kitchen-order kitchen-order--history",children:[f.jsx("div",{className:"kitchen-order-number kitchen-order-number--history",children:t.number}),f.jsx("div",{className:"kitchen-divider"}),f.jsx("div",{className:"kitchen-items",children:t.cart.map(s=>{const o=s.item.name_es||s.item.nameEs||s.item.name_en||"";return f.jsx("div",{className:"kitchen-item",children:f.jsxs("div",{className:"kitchen-item-name",style:{opacity:.6},children:[s.item.emoji&&`${s.item.emoji} `,o]})},s.id)})}),f.jsxs("div",{style:{fontSize:13,color:"rgba(255,255,255,0.3)",textAlign:"center"},children:["Completada a las ",i,e&&f.jsx("div",{style:{color:"#FF6B6B",marginTop:2},children:"⚠ Localizador en uso"})]}),f.jsx("button",{className:"kitchen-pickup-btn",onClick:r,children:"✓ Recogido"}),f.jsx("button",{className:"kitchen-restore-btn",onClick:n,children:"↩ Restaurar"})]})}const AN=10*60*1e3;function ON(){const[t,e]=L.useState(new Date);return L.useEffect(()=>{const n=setInterval(()=>e(new Date),1e3);return()=>clearInterval(n)},[]),f.jsx("span",{className:"display-time",children:t.toLocaleTimeString("es-MX",{hour:"2-digit",minute:"2-digit"})})}function DN(){const[t,e]=L.useState([]),[n,r]=L.useState([]),[i,s]=L.useState(new Set),[o,l]=L.useState(0);L.useEffect(()=>{const d=[Dy(h=>e(h.filter(_=>_.status==="active"))),Ly(r)],u=setInterval(()=>l(h=>h+1),3e4);return()=>{d.forEach(h=>h()),clearInterval(u)}},[]);const a=n.filter(d=>d.completedAt&&Date.now()-new Date(d.completedAt).getTime()<AN);function c(d){s(u=>new Set(u).add(d.historyKey)),setTimeout(()=>Oy(d),400)}return f.jsxs("div",{className:"display-screen",children:[f.jsxs("div",{className:"display-header",children:[f.jsxs("div",{className:"display-brand",children:[f.jsx("span",{className:"display-brand-emoji",children:"🌮"}),"Bruncheria Espinoza"]}),f.jsxs("div",{className:"display-header-right",children:[f.jsx("div",{className:"display-tagline",children:"Pick up your order when your number appears below"}),f.jsx(ON,{})]})]}),f.jsxs("div",{className:"display-body",children:[f.jsxs("div",{className:"display-col display-col--preparing",children:[f.jsxs("div",{className:"display-col-header",children:[f.jsx("div",{className:"display-col-icon",children:"🍳"}),f.jsxs("div",{children:[f.jsx("div",{className:"display-col-title",children:"Preparing"}),f.jsx("div",{className:"display-col-sub",children:"Preparando"})]})]}),t.length===0?f.jsxs("div",{className:"display-empty",children:[f.jsx("div",{className:"display-empty-icon",children:"✓"}),f.jsx("div",{children:"All caught up"}),f.jsx("div",{className:"display-empty-sub",children:"Al corriente"})]}):f.jsx("div",{className:"display-numbers",children:t.map(d=>f.jsxs("div",{className:"display-number display-number--preparing",children:[f.jsx("div",{className:"display-number-val",children:d.number}),f.jsx("div",{className:"display-number-items",children:d.cart.map(u=>{const h=u.item.name_en||u.item.name_es||"";return f.jsx("div",{className:"display-number-item",children:h},u.id)})})]},d.firebaseKey||d.id))})]}),f.jsx("div",{className:"display-divider"}),f.jsxs("div",{className:"display-col display-col--ready",children:[f.jsxs("div",{className:"display-col-header",children:[f.jsx("div",{className:"display-col-icon",children:"✅"}),f.jsxs("div",{children:[f.jsx("div",{className:"display-col-title",children:"Ready!"}),f.jsx("div",{className:"display-col-sub",children:"¡Listo!"})]})]}),a.length===0?f.jsxs("div",{className:"display-empty",children:[f.jsx("div",{className:"display-empty-icon",children:"⏳"}),f.jsx("div",{children:"Coming soon"}),f.jsx("div",{className:"display-empty-sub",children:"Pronto"})]}):f.jsx("div",{className:"display-numbers",children:a.map(d=>f.jsxs("div",{className:`display-number display-number--ready${i.has(d.historyKey)?" display-number--dismissing":""}`,children:[f.jsx("div",{className:"display-number-val",children:d.number}),f.jsx("div",{className:"display-number-ready-label",children:"Pick up now · Recoge ahora"}),f.jsx("button",{className:"display-pickup-btn",onClick:()=>c(d),children:"✓ Recogido"})]},d.historyKey))})]})]}),f.jsx("div",{className:"display-footer",children:"💳 Pay at the window  ·  Pague en la ventana"})]})}const rp="https://docs.google.com/spreadsheets/d/e/2PACX-1vThIbNlg4o0feIEFJ9nPwmcwCg13YvId2COr_rbjMUYfphhoVcOjTtw-Uqv_SnRE_VVGMbkDqpNC4tm/pub?output=csv";function ip(t){const e=[];let n="",r=!1;for(let i=0;i<t.length;i++){const s=t[i];s==='"'?r&&t[i+1]==='"'?(n+='"',i++):r=!r:s===","&&!r?(e.push(n),n=""):n+=s}return e.push(n),e}function LN(t){const e=t.trim().split(/\r?\n/).filter(r=>r.trim());if(e.length<2)return[];const n=ip(e[0]).map(r=>r.trim());return e.slice(1).map(r=>{const i=ip(r);return Object.fromEntries(n.map((s,o)=>[s,(i[o]??"").trim()]))})}function MN(t){const e=new Map;for(const n of t){const{id:r,name_en:i,name_es:s,category:o,price:l,enabled:a,modifier_group:c,modifier_en:d,modifier_es:u,modifier_price:h}=n;if(!r||(a==null?void 0:a.toUpperCase())!=="TRUE")continue;const _=parseFloat(l)||0;if(!e.has(r))e.set(r,{id:r,name_en:i||r,name_es:s||i||r,category:(o||"food").toLowerCase(),price:_,modifiers:[]});else{const y=e.get(r);_>y.price&&(y.price=_)}if(c&&d){const y=e.get(r),v=parseFloat(h)||0,I=`${r}::${c}::${d}`;y.modifiers.find(m=>m.id===I)||y.modifiers.push({id:I,group:c.toLowerCase(),en:d,es:u||d,price:v})}}return[...e.values()]}async function bN(){if(rp.startsWith("PASTE_"))throw new Error("MENU_CSV_URL not configured");const t=await fetch(rp);if(!t.ok)throw new Error(`HTTP ${t.status}`);const e=await t.text(),n=LN(e),r=MN(n);if(!r.length)throw new Error("Empty menu");return r}const FN={remove:[{en:"No Onion",es:"Sin cebolla",price:0},{en:"No Cilantro",es:"Sin cilantro",price:0},{en:"No Beans",es:"Sin frijoles",price:0},{en:"No Avocado",es:"Sin aguacate",price:0},{en:"No Salsa",es:"Sin salsa",price:0},{en:"No Cheese",es:"Sin queso",price:0},{en:"No Egg",es:"Sin huevo",price:0},{en:"No Tomato",es:"Sin tomate",price:0}],add:[{en:"Extra Meat",es:"Más carne",price:2},{en:"Add Egg",es:"Con huevo",price:1.5},{en:"Extra Avocado",es:"Más aguacate",price:1},{en:"Extra Cheese",es:"Más queso",price:.5},{en:"Extra Salsa",es:"Más salsa",price:0}]};function jN(t,e){return e.flatMap(n=>FN[n].map(r=>({id:`${t}::${n}::${r.en}`,group:n,en:r.en,es:r.es,price:r.price})))}const UN=[{id:"avocado-toast",name_en:"Avocado Toast",name_es:"Pan con Aguacate",price:8.5,emoji:"🥑",subcategory:"Brunch",mods:["remove","add"]},{id:"huevos-rancheros",name_en:"Huevos Rancheros",name_es:"Huevos Rancheros",price:10.5,emoji:"🍳",subcategory:"Brunch",mods:["remove","add"]},{id:"croissant-sandwich",name_en:"Croissant Sandwich",name_es:"Sándwich de Croissant",price:6.5,emoji:"🥐",subcategory:"Brunch",mods:["remove","add"]},{id:"burrito-ranchero",name_en:"Burrito Ranchero",name_es:"Burrito Ranchero",price:11,emoji:"🌯",subcategory:"Burritos",mods:["remove","add"]},{id:"burrito-asada",name_en:"Burrito Asada",name_es:"Burrito de Asada",price:14,emoji:"🥩",subcategory:"Burritos",mods:["remove","add"]},{id:"chilaquiles-burrito",name_en:"Chilaquiles Burrito",name_es:"Burrito de Chilaquiles",price:13,emoji:"🌮",subcategory:"Burritos",mods:["remove","add"]},{id:"chori-burrito",name_en:"Chori Burrito",name_es:"Burrito de Chorizo",price:12,emoji:"🌯",subcategory:"Burritos",mods:["remove","add"]},{id:"chorizo-bowl",name_en:"Chorizo Bowl",name_es:"Bowl de Chorizo",price:13,emoji:"🥣",subcategory:"Burritos",mods:["remove","add"]},{id:"concha-french-toast",name_en:"Concha French Toast",name_es:"Pan Francés de Concha",price:8,emoji:"🍞",subcategory:"Sweet",mods:[]},{id:"strawberry-crepes",name_en:"Strawberry Crepes",name_es:"Crepas de Fresa",price:8,emoji:"🥞",subcategory:"Sweet",mods:[]},{id:"apple-cinnamon-crepe",name_en:"Apple Cinnamon Crepe",name_es:"Crepa de Manzana y Canela",price:6.99,emoji:"🍎",subcategory:"Sweet",mods:[]},{id:"churro-muffin",name_en:"Churro Muffin",name_es:"Muffin de Churro",price:3.5,emoji:"🧁",subcategory:"Sweet",mods:[]}],zN=[{id:"cafe-de-olla",name_en:"Café de Olla",name_es:"Café de Olla",price:3,emoji:"☕"},{id:"jamaica",name_en:"Jamaica",name_es:"Agua de Jamaica",price:4,emoji:"🌺"},{id:"water-bottle",name_en:"Water",name_es:"Agua",price:1,emoji:"💧"}];function WN(){return[...UN.map(t=>({id:t.id,name_en:t.name_en,name_es:t.name_es,category:"food",subcategory:t.subcategory,emoji:t.emoji,price:t.price,modifiers:jN(t.id,t.mods)})),...zN.map(t=>({id:t.id,name_en:t.name_en,name_es:t.name_es,category:"drink",emoji:t.emoji,price:t.price,modifiers:[]}))]}function BN(){const t=window.location.pathname.endsWith("/kitchen")||window.location.hash==="#kitchen",e=window.location.pathname.endsWith("/display")||window.location.hash==="#display",[n,r]=L.useState([]),[i,s]=L.useState("loading"),[o,l]=L.useState("welcome"),[a,c]=L.useState([]),[d,u]=L.useState(null),[h,_]=L.useState(null);L.useEffect(()=>{let p=!1;return bN().then(g=>{p||(r(g),s("sheets"))}).catch(()=>{p||(r(WN()),s("fallback"))}),()=>{p=!0}},[]);function y(p){_(p),setTimeout(()=>_(null),1600)}function v(){l("welcome"),c([]),u(null)}function I(p,g){c(E=>[...E,{id:Date.now(),item:p,modifiers:g}]),y(`${p.name_en} added`)}function m(p){const g={id:Date.now(),number:p,cart:[...a],status:"active",timestamp:new Date().toISOString(),createdAt:new Date().toISOString()};u(g),l("confirmation"),My(p).catch(E=>console.error("Ringer claim failed:",E)),wN(g).catch(E=>console.error("Firebase push failed:",E))}return t?f.jsx(RN,{}):e?f.jsx(DN,{}):f.jsxs("div",{className:"app",children:[o==="welcome"&&f.jsx(h0,{onStart:()=>l("menu"),menuLoading:i==="loading"}),o==="menu"&&f.jsx(g0,{cart:a,menuItems:n,menuSource:i,onAddItem:I,onCheckout:()=>l("review"),onBack:v}),o==="review"&&f.jsx(y0,{cart:a,onConfirm:()=>l("order-number"),onBack:()=>l("menu"),onReset:v}),o==="order-number"&&f.jsx(IN,{onSelect:m,onBack:()=>l("review")}),o==="confirmation"&&d&&f.jsx(kN,{order:d,onDone:v}),h&&f.jsxs("div",{className:"toast",children:["✓ ",h]})]})}ka.createRoot(document.getElementById("root")).render(f.jsx(ev.StrictMode,{children:f.jsx(BN,{})}));
