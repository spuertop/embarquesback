import{c as E,a as r,h as c,d as S,al as we,am as ke,g as Y,o as Z,n as ee,an as x,r as y,t as be,ao as xe,ap as Be,aq as Ee,N as te,U as ne,w as $,aj as G,ar as Se,T as Te}from"./index.f99b5f9f.js";import{u as Ce,a as Pe}from"./use-dark.740bc772.js";import{u as De,a as Fe,b as Me,c as Qe,d as $e,e as ze}from"./use-timeout.efb88233.js";import{r as V,a as He,b as Le}from"./QInput.9ede4e32.js";var nt=E({name:"QCardSection",props:{tag:{type:String,default:"div"},horizontal:Boolean},setup(e,{slots:t}){const o=r(()=>`q-card__section q-card__section--${e.horizontal===!0?"horiz row no-wrap":"vert"}`);return()=>c(e.tag,{class:o.value},S(t.default))}}),ot=E({name:"QCardActions",props:{...we,vertical:Boolean},setup(e,{slots:t}){const o=ke(e),s=r(()=>`q-card__actions ${o.value} q-card__actions--${e.vertical===!0?"vert column":"horiz row"}`);return()=>c("div",{class:s.value},S(t.default))}}),at=E({name:"QCard",props:{...Ce,tag:{type:String,default:"div"},square:Boolean,flat:Boolean,bordered:Boolean},setup(e,{slots:t}){const o=Y(),s=Pe(e,o.proxy.$q),a=r(()=>"q-card"+(s.value===!0?" q-card--dark q-dark":"")+(e.bordered===!0?" q-card--bordered":"")+(e.square===!0?" q-card--square no-border-radius":"")+(e.flat===!0?" q-card--flat no-shadow":""));return()=>c(e.tag,{class:a.value},S(t.default))}});function Re(){let e;return Z(()=>{e=void 0}),{registerTick(t){e=t,ee(()=>{e===t&&(e(),e=void 0)})},removeTick(){e=void 0}}}const Ie={transitionShow:{type:String,default:"fade"},transitionHide:{type:String,default:"fade"},transitionDuration:{type:[String,Number],default:300}},B=[];function Oe(e){return B.find(t=>t.__qPortalInnerRef.value!==null&&t.__qPortalInnerRef.value.contains(e))}function Ae(e,t){do{if(e.$options.name==="QMenu"){if(e.hide(t),e.$props.separateClosePopup===!0)return x(e)}else if(e.__qPortalInnerRef!==void 0){const o=x(e);return o!==void 0&&o.$options.name==="QPopupProxy"?(e.hide(t),o):e}e=x(e)}while(e!=null)}function Ke(e,t,o){for(;o!==0&&e!==void 0&&e!==null;){if(e.__qPortalInnerRef!==void 0){if(o--,e.$options.name==="QMenu"){e=Ae(e,t);continue}e.hide(t)}e=x(e)}}function je(e){for(e=e.parent;e!=null;){if(e.type.name==="QGlobalDialog")return!0;if(e.type.name==="QDialog"||e.type.name==="QMenu")return!1;e=e.parent}return!1}function Ne(e,t,o,s){const a=y(!1),l=y(!1);let i=null;const v={},d=s===!0&&je(e);function _(f){if(f===!0){V(v),l.value=!0;return}l.value=!1,a.value===!1&&(d===!1&&i===null&&(i=Be()),a.value=!0,B.push(e.proxy),He(v))}function u(f){if(l.value=!1,f!==!0)return;V(v),a.value=!1;const p=B.indexOf(e.proxy);p>-1&&B.splice(p,1),i!==null&&(Ee(i),i=null)}return be(()=>{u(!0)}),Object.assign(e.proxy,{__qPortalInnerRef:t}),{showPortal:_,hidePortal:u,portalIsActive:a,portalIsAccessible:l,renderPortal:()=>d===!0?o():a.value===!0?[c(xe,{to:i},o())]:void 0}}const h=[];let q;function Ge(e){q=e.keyCode===27}function Ve(){q===!0&&(q=!1)}function Ue(e){q===!0&&(q=!1,te(e,27)===!0&&h[h.length-1](e))}function oe(e){window[e]("keydown",Ge),window[e]("blur",Ve),window[e]("keyup",Ue),q=!1}function We(e){ne.is.desktop===!0&&(h.push(e),h.length===1&&oe("addEventListener"))}function U(e){const t=h.indexOf(e);t>-1&&(h.splice(t,1),h.length===0&&oe("removeEventListener"))}const g=[];function ae(e){g[g.length-1](e)}function Je(e){ne.is.desktop===!0&&(g.push(e),g.length===1&&document.body.addEventListener("focusin",ae))}function W(e){const t=g.indexOf(e);t>-1&&(g.splice(t,1),g.length===0&&document.body.removeEventListener("focusin",ae))}let b=0;const Xe={standard:"fixed-full flex-center",top:"fixed-top justify-center",bottom:"fixed-bottom justify-center",right:"fixed-right items-center",left:"fixed-left items-center"},J={standard:["scale","scale"],top:["slide-down","slide-up"],bottom:["slide-up","slide-down"],right:["slide-left","slide-right"],left:["slide-right","slide-left"]};var it=E({name:"QDialog",inheritAttrs:!1,props:{...De,...Ie,transitionShow:String,transitionHide:String,persistent:Boolean,autoClose:Boolean,allowFocusOutside:Boolean,noEscDismiss:Boolean,noBackdropDismiss:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,noShake:Boolean,seamless:Boolean,maximized:Boolean,fullWidth:Boolean,fullHeight:Boolean,square:Boolean,position:{type:String,default:"standard",validator:e=>e==="standard"||["top","bottom","left","right"].includes(e)}},emits:[...Fe,"shake","click","escape-key"],setup(e,{slots:t,emit:o,attrs:s}){const a=Y(),l=y(null),i=y(!1),v=y(!1),d=y(!1);let _,u=null,f,p;const z=r(()=>e.persistent!==!0&&e.noRouteDismiss!==!0&&e.seamless!==!0),{preventBodyScroll:H}=ze(),{registerTimeout:L,removeTimeout:R}=Me(),{registerTick:ie,removeTick:I}=Re(),{showPortal:O,hidePortal:A,portalIsAccessible:se,renderPortal:le}=Ne(a,l,_e,!0),{hide:k}=Qe({showing:i,hideOnRouteChange:z,handleShow:ve,handleHide:pe,processOnMount:!0}),{addToHistory:re,removeFromHistory:ue}=$e(i,k,z),ce=r(()=>`q-dialog__inner flex no-pointer-events q-dialog__inner--${e.maximized===!0?"maximized":"minimized"} q-dialog__inner--${e.position} ${Xe[e.position]}`+(d.value===!0?" q-dialog__inner--animating":"")+(e.fullWidth===!0?" q-dialog__inner--fullwidth":"")+(e.fullHeight===!0?" q-dialog__inner--fullheight":"")+(e.square===!0?" q-dialog__inner--square":"")),de=r(()=>"q-transition--"+(e.transitionShow===void 0?J[e.position][0]:e.transitionShow)),fe=r(()=>"q-transition--"+(e.transitionHide===void 0?J[e.position][1]:e.transitionHide)),me=r(()=>v.value===!0?fe.value:de.value),K=r(()=>`--q-transition-duration: ${e.transitionDuration}ms`),T=r(()=>i.value===!0&&e.seamless!==!0),he=r(()=>e.autoClose===!0?{onClick:ye}:{}),ge=r(()=>[`q-dialog fullscreen no-pointer-events q-dialog--${T.value===!0?"modal":"seamless"}`,s.class]);$(i,n=>{ee(()=>{v.value=n})}),$(()=>e.maximized,n=>{i.value===!0&&D(n)}),$(T,n=>{H(n),n===!0?(Je(F),We(P)):(W(F),U(P))});function ve(n){R(),I(),re(),u=e.noRefocus===!1&&document.activeElement!==null?document.activeElement:null,D(e.maximized),O(),d.value=!0,e.noFocus!==!0&&(document.activeElement!==null&&document.activeElement.blur(),ie(w)),L(()=>{if(a.proxy.$q.platform.is.ios===!0){if(e.seamless!==!0&&document.activeElement){const{top:m,bottom:M}=document.activeElement.getBoundingClientRect(),{innerHeight:N}=window,Q=window.visualViewport!==void 0?window.visualViewport.height:N;m>0&&M>Q/2&&(document.scrollingElement.scrollTop=Math.min(document.scrollingElement.scrollHeight-Q,M>=N?1/0:Math.ceil(document.scrollingElement.scrollTop+M-Q/2))),document.activeElement.scrollIntoView()}p=!0,l.value.click(),p=!1}O(!0),d.value=!1,o("show",n)},e.transitionDuration)}function pe(n){R(),I(),ue(),j(!0),d.value=!0,A(),u!==null&&(u.focus(),u=null),L(()=>{A(!0),d.value=!1,o("hide",n)},e.transitionDuration)}function w(n){Le(()=>{let m=l.value;m===null||m.contains(document.activeElement)===!0||(m=m.querySelector(n||"[autofocus], [data-autofocus]")||m,m.focus({preventScroll:!0}))})}function C(){w(),o("shake");const n=l.value;n!==null&&(n.classList.remove("q-animate--scale"),n.classList.add("q-animate--scale"),clearTimeout(_),_=setTimeout(()=>{l.value!==null&&(n.classList.remove("q-animate--scale"),w())},170))}function P(){e.seamless!==!0&&(e.persistent===!0||e.noEscDismiss===!0?e.maximized!==!0&&e.noShake!==!0&&C():(o("escape-key"),k()))}function j(n){clearTimeout(_),(n===!0||i.value===!0)&&(D(!1),e.seamless!==!0&&(H(!1),W(F),U(P))),n!==!0&&(u=null)}function D(n){n===!0?f!==!0&&(b<1&&document.body.classList.add("q-body--dialog"),b++,f=!0):f===!0&&(b<2&&document.body.classList.remove("q-body--dialog"),b--,f=!1)}function ye(n){p!==!0&&(k(n),o("click",n))}function qe(n){e.persistent!==!0&&e.noBackdropDismiss!==!0?k(n):e.noShake!==!0&&C()}function F(n){e.allowFocusOutside!==!0&&se.value===!0&&Se(l.value,n.target)!==!0&&w('[tabindex]:not([tabindex="-1"])')}Object.assign(a.proxy,{focus:w,shake:C,__updateRefocusTarget(n){u=n||null}}),Z(j);function _e(){return c("div",{...s,class:ge.value},[c(G,{name:"q-transition--fade",appear:!0},()=>T.value===!0?c("div",{class:"q-dialog__backdrop fixed-full",style:K.value,"aria-hidden":"true",onMousedown:qe}):null),c(G,{name:me.value,appear:!0},()=>i.value===!0?c("div",{ref:l,class:ce.value,style:K.value,tabindex:-1,...he.value},S(t.default)):null)])}return le}});function X(e){if(e===!1)return 0;if(e===!0||e===void 0)return 1;const t=parseInt(e,10);return isNaN(t)?0:t}var st=Te({name:"close-popup",beforeMount(e,{value:t}){const o={depth:X(t),handler(s){o.depth!==0&&setTimeout(()=>{const a=Oe(e);a!==void 0&&Ke(a,s,o.depth)})},handlerKey(s){te(s,13)===!0&&o.handler(s)}};e.__qclosepopup=o,e.addEventListener("click",o.handler),e.addEventListener("keyup",o.handlerKey)},updated(e,{value:t,oldValue:o}){t!==o&&(e.__qclosepopup.depth=X(t))},beforeUnmount(e){const t=e.__qclosepopup;e.removeEventListener("click",t.handler),e.removeEventListener("keyup",t.handlerKey),delete e.__qclosepopup}});export{st as C,at as Q,nt as a,ot as b,it as c};
