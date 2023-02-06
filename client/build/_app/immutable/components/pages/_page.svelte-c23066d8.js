import{S as U,i as A,s as G,I as B,k as p,q as y,a as S,l as g,m as k,r as q,h as f,c as P,n as w,b,G as v,J as C,K as J,B as F,L as K,e as I,M as x,p as R,u as H}from"../../chunks/index-d966ee31.js";const T=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],E=(()=>{if(typeof document>"u")return!1;const n=T[0],e={};for(const l of T)if((l==null?void 0:l[1])in document){for(const[s,o]of l.entries())e[n[s]]=o;return e}return!1})(),z={change:E.fullscreenchange,error:E.fullscreenerror};let m={request(n=document.documentElement,e){return new Promise((l,t)=>{const s=()=>{m.off("change",s),l()};m.on("change",s);const o=n[E.requestFullscreen](e);o instanceof Promise&&o.then(s).catch(t)})},exit(){return new Promise((n,e)=>{if(!m.isFullscreen){n();return}const l=()=>{m.off("change",l),n()};m.on("change",l);const t=document[E.exitFullscreen]();t instanceof Promise&&t.then(l).catch(e)})},toggle(n,e){return m.isFullscreen?m.exit():m.request(n,e)},onchange(n){m.on("change",n)},onerror(n){m.on("error",n)},on(n,e){const l=z[n];l&&document.addEventListener(l,e,!1)},off(n,e){const l=z[n];l&&document.removeEventListener(l,e,!1)},raw:E};Object.defineProperties(m,{isFullscreen:{get:()=>Boolean(document[E.fullscreenElement])},element:{enumerable:!0,get:()=>document[E.fullscreenElement]??void 0},isEnabled:{enumerable:!0,get:()=>Boolean(document[E.fullscreenEnabled])}});E||(m={isEnabled:!1});const $=m;function O(n,e,l){const t=n.slice();return t[5]=e[l],t}function V(n,e,l){const t=n.slice();return t[8]=e[l],t}function Q(n){return{c:F,l:F,m:F,p:F,d:F}}function W(n){let e,l=n[4][0],t=[];for(let s=0;s<l.length;s+=1)t[s]=L(O(n,l,s));return{c(){for(let s=0;s<t.length;s+=1)t[s].c();e=I()},l(s){for(let o=0;o<t.length;o+=1)t[o].l(s);e=I()},m(s,o){for(let r=0;r<t.length;r+=1)t[r].m(s,o);b(s,e,o)},p(s,o){if(o&1){l=s[4][0];let r;for(r=0;r<l.length;r+=1){const c=O(s,l,r);t[r]?t[r].p(c,o):(t[r]=L(c),t[r].c(),t[r].m(e.parentNode,e))}for(;r<t.length;r+=1)t[r].d(1);t.length=l.length}},d(s){x(t,s),s&&f(e)}}}function D(n){let e,l,t=n[4][1][n[8]].name+"",s,o,r,c;function d(){return n[3](n[8])}return{c(){e=p("button"),l=p("div"),s=y(t),o=S(),this.h()},l(a){e=g(a,"BUTTON",{class:!0,style:!0});var h=k(e);l=g(h,"DIV",{class:!0});var u=k(l);s=q(u,t),u.forEach(f),o=P(h),h.forEach(f),this.h()},h(){w(l,"class","button-name-wrapper svelte-rpystk"),w(e,"class","button svelte-rpystk"),R(e,"background-image","url('./get_icon?name="+n[4][1][n[8]].icon+"')")},m(a,h){b(a,e,h),v(e,l),v(l,s),v(e,o),r||(c=C(e,"click",d),r=!0)},p(a,h){n=a,h&1&&t!==(t=n[4][1][n[8]].name+"")&&H(s,t),h&1&&R(e,"background-image","url('./get_icon?name="+n[4][1][n[8]].icon+"')")},d(a){a&&f(e),r=!1,c()}}}function L(n){let e,l,t,s,o=n[5],r=[];for(let c=0;c<o.length;c+=1)r[c]=D(V(n,o,c));return{c(){e=p("section"),l=p("div"),t=p("div");for(let c=0;c<r.length;c+=1)r[c].c();s=S(),this.h()},l(c){e=g(c,"SECTION",{class:!0});var d=k(e);l=g(d,"DIV",{class:!0});var a=k(l);t=g(a,"DIV",{class:!0});var h=k(t);for(let u=0;u<r.length;u+=1)r[u].l(h);h.forEach(f),a.forEach(f),s=P(d),d.forEach(f),this.h()},h(){w(t,"class","button-container svelte-rpystk"),w(l,"class","page"),w(e,"class","svelte-rpystk")},m(c,d){b(c,e,d),v(e,l),v(l,t);for(let a=0;a<r.length;a+=1)r[a].m(t,null);v(e,s)},p(c,d){if(d&1){o=c[5];let a;for(a=0;a<o.length;a+=1){const h=V(c,o,a);r[a]?r[a].p(h,d):(r[a]=D(h),r[a].c(),r[a].m(t,null))}for(;a<r.length;a+=1)r[a].d(1);r.length=o.length}},d(c){c&&f(e),x(r,c)}}}function X(n){let e,l;return{c(){e=p("p"),l=y("waiting...")},l(t){e=g(t,"P",{});var s=k(e);l=q(s,"waiting..."),s.forEach(f)},m(t,s){b(t,e,s),v(e,l)},p:F,d(t){t&&f(e)}}}function Y(n){let e,l,t,s,o,r,c,d,a,h,u={ctx:n,current:null,token:null,hasCatch:!1,pending:X,then:W,catch:Q,value:4};return B(d=n[0],u),{c(){e=p("button"),l=y("F"),t=S(),s=p("button"),o=y("R"),r=S(),c=p("div"),u.block.c(),this.h()},l(i){e=g(i,"BUTTON",{});var _=k(e);l=q(_,"F"),_.forEach(f),t=P(i),s=g(i,"BUTTON",{});var M=k(s);o=q(M,"R"),M.forEach(f),r=P(i),c=g(i,"DIV",{id:!0,class:!0});var N=k(c);u.block.l(N),N.forEach(f),this.h()},h(){w(c,"id","container"),w(c,"class","svelte-rpystk")},m(i,_){b(i,e,_),v(e,l),b(i,t,_),b(i,s,_),v(s,o),b(i,r,_),b(i,c,_),u.block.m(c,u.anchor=null),u.mount=()=>c,u.anchor=null,a||(h=[C(e,"click",n[1]),C(s,"click",n[2])],a=!0)},p(i,[_]){n=i,u.ctx=n,_&1&&d!==(d=n[0])&&B(d,u)||J(u,n,_)},i:F,o:F,d(i){i&&f(e),i&&f(t),i&&f(s),i&&f(r),i&&f(c),u.block.d(),u.token=null,u=null,a=!1,K(h)}}}async function j(){const e=await(await fetch("./get_layout")).json(),t=await(await fetch("./get_buttons")).json();return[e,t]}function Z(n){fetch(`./run_button?name=${n}`)}function ee(n,e,l){let t=j();function s(){$.isEnabled&&$.toggle()}function o(){l(0,t=j())}return[t,s,o,c=>{Z(c)}]}class ne extends U{constructor(e){super(),A(this,e,ee,Y,G,{})}}export{ne as default};