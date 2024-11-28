var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function r(t){return"function"==typeof t}function s(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}let c,i;function u(t,e){return c||(c=document.createElement("a")),c.href=e,t===c.href}function l(t,e,n,o){return t[1]&&o?function(t,e){for(const n in e)t[n]=e[n];return t}(n.ctx.slice(),t[1](o(e))):n.ctx}function a(t,e){t.appendChild(e)}function f(t,e,n){t.insertBefore(e,n||null)}function d(t){t.parentNode&&t.parentNode.removeChild(t)}function $(t){return document.createElement(t)}function p(t){return document.createTextNode(t)}function m(){return p(" ")}function h(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function g(t){i=t}const y=[],x=[];let v=[];const b=[],_=Promise.resolve();let w=!1;function k(t){v.push(t)}const q=new Set;let E=0;function M(){if(0!==E)return;const t=i;do{try{for(;E<y.length;){const t=y[E];E++,g(t),F(t.$$)}}catch(t){throw y.length=0,E=0,t}for(g(null),y.length=0,E=0;x.length;)x.pop()();for(let t=0;t<v.length;t+=1){const e=v[t];q.has(e)||(q.add(e),e())}v.length=0}while(y.length);for(;b.length;)b.pop()();w=!1,q.clear(),g(t)}function F(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(k)}}const j=new Set;let C;function A(t,e){t&&t.i&&(j.delete(t),t.i(e))}function I(t,e,n,o){if(t&&t.o){if(j.has(t))return;j.add(t),C.c.push((()=>{j.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}else o&&o()}function S(t){t&&t.c()}function T(t,n,s,c){const{fragment:i,after_update:u}=t.$$;i&&i.m(n,s),c||k((()=>{const n=t.$$.on_mount.map(e).filter(r);t.$$.on_destroy?t.$$.on_destroy.push(...n):o(n),t.$$.on_mount=[]})),u.forEach(k)}function L(t,e){const n=t.$$;null!==n.fragment&&(!function(t){const e=[],n=[];v.forEach((o=>-1===t.indexOf(o)?e.push(o):n.push(o))),n.forEach((t=>t())),v=e}(n.after_update),o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function N(t,e){-1===t.$$.dirty[0]&&(y.push(t),w||(w=!0,_.then(M)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function O(e,r,s,c,u,l,a,f=[-1]){const $=i;g(e);const p=e.$$={fragment:null,ctx:[],props:l,update:t,not_equal:u,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(r.context||($?$.$$.context:[])),callbacks:n(),dirty:f,skip_bound:!1,root:r.target||$.$$.root};a&&a(p.root);let m=!1;if(p.ctx=s?s(e,r.props||{},((t,n,...o)=>{const r=o.length?o[0]:n;return p.ctx&&u(p.ctx[t],p.ctx[t]=r)&&(!p.skip_bound&&p.bound[t]&&p.bound[t](r),m&&N(e,t)),n})):[],p.update(),m=!0,o(p.before_update),p.fragment=!!c&&c(p.ctx),r.target){if(r.hydrate){const t=function(t){return Array.from(t.childNodes)}(r.target);p.fragment&&p.fragment.l(t),t.forEach(d)}else p.fragment&&p.fragment.c();r.intro&&A(e.$$.fragment),T(e,r.target,r.anchor,r.customElement),M()}g($)}class H{$destroy(){L(this,1),this.$destroy=t}$on(e,n){if(!r(n))return t;const o=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return o.push(n),()=>{const t=o.indexOf(n);-1!==t&&o.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function Q(t){let e;const n=t[5].default,o=function(t,e,n,o){if(t){const r=l(t,e,n,o);return t[0](r)}}(n,t,t[4],null);return{c(){o&&o.c()},m(t,n){o&&o.m(t,n),e=!0},p(t,r){o&&o.p&&(!e||16&r)&&function(t,e,n,o,r,s){if(r){const c=l(e,n,o,s);t.p(c,r)}}(o,n,t,t[4],e?function(t,e,n,o){if(t[2]&&o){const r=t[2](o(n));if(void 0===e.dirty)return r;if("object"==typeof r){const t=[],n=Math.max(e.dirty.length,r.length);for(let o=0;o<n;o+=1)t[o]=e.dirty[o]|r[o];return t}return e.dirty|r}return e.dirty}(n,t[4],r,null):function(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let t=0;t<n;t++)e[t]=-1;return e}return-1}(t[4]),null)},i(t){e||(A(o,t),e=!0)},o(t){I(o,t),e=!1},d(t){o&&o.d(t)}}}function D(t){let e,n,r,s,c,i,l,g,y,x,v,b=t[1]&&Q(t);return{c(){e=$("div"),n=$("div"),r=$("h4"),s=p(t[0]),c=m(),i=$("img"),g=m(),b&&b.c(),u(i.src,l=t[2])||h(i,"src",l),h(i,"alt",""),h(n,"class","questionDiv svelte-1voheiw")},m(o,u){var l,d,$,p;f(o,e,u),a(e,n),a(n,r),a(r,s),a(n,c),a(n,i),a(e,g),b&&b.m(e,null),y=!0,x||(l=n,d="click",$=t[3],l.addEventListener(d,$,p),v=()=>l.removeEventListener(d,$,p),x=!0)},p(t,[n]){(!y||1&n)&&function(t,e){e=""+e,t.data!==e&&(t.data=e)}(s,t[0]),(!y||4&n&&!u(i.src,l=t[2]))&&h(i,"src",l),t[1]?b?(b.p(t,n),2&n&&A(b,1)):(b=Q(t),b.c(),A(b,1),b.m(e,null)):b&&(C={r:0,c:[],p:C},I(b,1,1,(()=>{b=null})),C.r||o(C.c),C=C.p)},i(t){y||(A(b),y=!0)},o(t){I(b),y=!1},d(t){t&&d(e),b&&b.d(),x=!1,v()}}}function Y(t,e,n){let o,{$$slots:r={},$$scope:s}=e,{question:c="Specify question"}=e,i=!1;return t.$$set=t=>{"question"in t&&n(0,c=t.question),"$$scope"in t&&n(4,s=t.$$scope)},t.$$.update=()=>{2&t.$$.dirty&&n(2,o=i?"images/icon-minus.svg":"images/icon-plus.svg")},[c,i,o,()=>{n(1,i=!i)},s,r]}class B extends H{constructor(t){super(),O(this,t,Y,D,s,{question:0})}}function J(e){let n;return{c(){n=$("p"),n.textContent="Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building."},m(t,e){f(t,n,e)},p:t,d(t){t&&d(n)}}}function P(e){let n;return{c(){n=$("p"),n.textContent="Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels."},m(t,e){f(t,n,e)},p:t,d(t){t&&d(n)}}}function W(e){let n;return{c(){n=$("p"),n.textContent="Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!"},m(t,e){f(t,n,e)},p:t,d(t){t&&d(n)}}}function z(e){let n;return{c(){n=$("p"),n.textContent="The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members."},m(t,e){f(t,n,e)},p:t,d(t){t&&d(n)}}}function G(t){let e,n,o,r,s,c,i,u,l,p,g,y;return s=new B({props:{question:"What is Frontend Mentor, and how will it help me?",$$slots:{default:[J]},$$scope:{ctx:t}}}),i=new B({props:{question:"Is Frontend Mentor free?",$$slots:{default:[P]},$$scope:{ctx:t}}}),l=new B({props:{question:"Can I use Frontend Mentor projects in my portfolio?",$$slots:{default:[W]},$$scope:{ctx:t}}}),g=new B({props:{question:"How can I get help if I'm stuck on a challenge?",$$slots:{default:[z]},$$scope:{ctx:t}}}),{c(){e=$("main"),n=$("div"),o=$("div"),o.innerHTML='<img class="star svelte-1oqd99" src="images/icon-star.svg" alt=""/>  \n\t\t\t<h1 class="svelte-1oqd99">FAQs</h1>',r=m(),S(s.$$.fragment),c=m(),S(i.$$.fragment),u=m(),S(l.$$.fragment),p=m(),S(g.$$.fragment),h(o,"class","FAQtitle svelte-1oqd99"),h(n,"class","FAQblock svelte-1oqd99")},m(t,d){f(t,e,d),a(e,n),a(n,o),a(n,r),T(s,n,null),a(n,c),T(i,n,null),a(n,u),T(l,n,null),a(n,p),T(g,n,null),y=!0},p(t,[e]){const n={};1&e&&(n.$$scope={dirty:e,ctx:t}),s.$set(n);const o={};1&e&&(o.$$scope={dirty:e,ctx:t}),i.$set(o);const r={};1&e&&(r.$$scope={dirty:e,ctx:t}),l.$set(r);const c={};1&e&&(c.$$scope={dirty:e,ctx:t}),g.$set(c)},i(t){y||(A(s.$$.fragment,t),A(i.$$.fragment,t),A(l.$$.fragment,t),A(g.$$.fragment,t),y=!0)},o(t){I(s.$$.fragment,t),I(i.$$.fragment,t),I(l.$$.fragment,t),I(g.$$.fragment,t),y=!1},d(t){t&&d(e),L(s),L(i),L(l),L(g)}}}return new class extends H{constructor(t){super(),O(this,t,null,G,s,{})}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map