import{a as f,c as G,r as C,w as R,o as J,h as v,aj as ue,d as U,ai as de,T as ve,U as z,R as fe,V as me,W as O,X as j,$ as ee,O as H,a0 as W,g as Z,ay as ge,az as he,n as pe,a2 as ye,aA as be,f as ce,a1 as te,k as _e,u as Se,aB as xe,F as Q,at as Ce,_ as Pe,x as X,y as ne,z as L,J as V,A as q,Q as ae,C as qe,D as we,G as ke,H as Ie,I as Te}from"./index.1885129a.js";import{Q as K,a as Ve}from"./QPageSticky.e19540d2.js";import{Q as Ae}from"./QInput.558b6acb.js";import{g as oe,s as ie,c as Be}from"./selection.cdcb07b5.js";import{u as $e,a as Ee,b as Ne}from"./global.c23c0a78.js";import{Q as Fe}from"./QPage.f252a6e0.js";const Re={ratio:[String,Number]};function Me(e,n){return f(()=>{const r=Number(e.ratio||(n!==void 0?n.value:void 0));return isNaN(r)!==!0&&r>0?{paddingBottom:`${100/r}%`}:null})}const ze=16/9;var De=G({name:"QImg",props:{...Re,src:String,srcset:String,sizes:String,alt:String,crossorigin:String,decoding:String,referrerpolicy:String,draggable:Boolean,loading:{type:String,default:"lazy"},fetchpriority:{type:String,default:"auto"},width:String,height:String,initialRatio:{type:[Number,String],default:ze},placeholderSrc:String,fit:{type:String,default:"cover"},position:{type:String,default:"50% 50%"},imgClass:String,imgStyle:Object,noSpinner:Boolean,noNativeMenu:Boolean,noTransition:Boolean,spinnerColor:String,spinnerSize:String},emits:["load","error"],setup(e,{slots:n,emit:r}){const i=C(e.initialRatio),s=Me(e,i);let t;const a=[C(null),C(e.placeholderSrc!==void 0?{src:e.placeholderSrc}:null)],u=C(0),g=C(!1),h=C(!1),c=f(()=>`q-img q-img--${e.noNativeMenu===!0?"no-":""}menu`),y=f(()=>({width:e.width,height:e.height})),m=f(()=>`q-img__image ${e.imgClass!==void 0?e.imgClass+" ":""}q-img__image--with${e.noTransition===!0?"out":""}-transition`),b=f(()=>({...e.imgStyle,objectFit:e.fit,objectPosition:e.position}));R(()=>_(),w);function _(){return e.src||e.srcset||e.sizes?{src:e.src,srcset:e.srcset,sizes:e.sizes}:null}function w(l){if(clearTimeout(t),h.value=!1,l===null){g.value=!1,a[0].value=null,a[1].value=null;return}g.value=!0,a[u.value].value=l}function P({target:l}){t!==null&&(clearTimeout(t),i.value=l.naturalHeight===0?.5:l.naturalWidth/l.naturalHeight,A(l,1))}function A(l,S){t===null||S===1e3||(l.complete===!0?B(l):t=setTimeout(()=>{A(l,S+1)},50))}function B(l){t!==null&&(u.value=u.value===1?0:1,a[u.value].value=null,g.value=!1,h.value=!1,r("load",l.currentSrc||l.src))}function k(l){clearTimeout(t),g.value=!1,h.value=!0,a[0].value=null,a[1].value=null,r("error",l)}function $(l,S){return v("div",{class:"q-img__container absolute-full",key:l},S)}function E(l){const S=a[l].value,I={key:"img_"+l,class:m.value,style:b.value,crossorigin:e.crossorigin,decoding:e.decoding,referrerpolicy:e.referrerpolicy,height:e.height,width:e.width,loading:e.loading,fetchpriority:e.fetchpriority,"aria-hidden":"true",draggable:e.draggable,...S};return u.value===l?(I.class+=" q-img__image--waiting",Object.assign(I,{onLoad:P,onError:k})):I.class+=" q-img__image--loaded",$("img"+l,v("img",I))}function T(){return g.value!==!0?v("div",{key:"content",class:"q-img__content absolute-full q-anchor--skip"},U(n[h.value===!0?"error":"default"])):v("div",{key:"loading",class:"q-img__loading absolute-full flex flex-center"},n.loading!==void 0?n.loading():e.noSpinner===!0?void 0:[v(de,{color:e.spinnerColor,size:e.spinnerSize})])}return w(_()),J(()=>{clearTimeout(t),t=null}),()=>{const l=[];return s.value!==null&&l.push(v("div",{key:"filler",style:s.value})),h.value!==!0&&(a[0].value!==null&&l.push(E(0)),a[1].value!==null&&l.push(E(1))),l.push(v(ue,{name:"q-transition--fade"},T)),v("div",{class:c.value,style:y.value,role:"img","aria-label":e.alt},l)}}});function Qe(e){const n=[.06,6,50];return typeof e=="string"&&e.length&&e.split(":").forEach((r,i)=>{const s=parseFloat(r);s&&(n[i]=s)}),n}var Oe=ve({name:"touch-swipe",beforeMount(e,{value:n,arg:r,modifiers:i}){if(i.mouse!==!0&&z.has.touch!==!0)return;const s=i.mouseCapture===!0?"Capture":"",t={handler:n,sensitivity:Qe(r),direction:oe(i),noop:fe,mouseStart(a){ie(a,t)&&me(a)&&(O(t,"temp",[[document,"mousemove","move",`notPassive${s}`],[document,"mouseup","end","notPassiveCapture"]]),t.start(a,!0))},touchStart(a){if(ie(a,t)){const u=a.target;O(t,"temp",[[u,"touchmove","move","notPassiveCapture"],[u,"touchcancel","end","notPassiveCapture"],[u,"touchend","end","notPassiveCapture"]]),t.start(a)}},start(a,u){z.is.firefox===!0&&j(e,!0);const g=ee(a);t.event={x:g.left,y:g.top,time:Date.now(),mouse:u===!0,dir:!1}},move(a){if(t.event===void 0)return;if(t.event.dir!==!1){H(a);return}const u=Date.now()-t.event.time;if(u===0)return;const g=ee(a),h=g.left-t.event.x,c=Math.abs(h),y=g.top-t.event.y,m=Math.abs(y);if(t.event.mouse!==!0){if(c<t.sensitivity[1]&&m<t.sensitivity[1]){t.end(a);return}}else if(c<t.sensitivity[2]&&m<t.sensitivity[2])return;const b=c/u,_=m/u;t.direction.vertical===!0&&c<m&&c<100&&_>t.sensitivity[0]&&(t.event.dir=y<0?"up":"down"),t.direction.horizontal===!0&&c>m&&m<100&&b>t.sensitivity[0]&&(t.event.dir=h<0?"left":"right"),t.direction.up===!0&&c<m&&y<0&&c<100&&_>t.sensitivity[0]&&(t.event.dir="up"),t.direction.down===!0&&c<m&&y>0&&c<100&&_>t.sensitivity[0]&&(t.event.dir="down"),t.direction.left===!0&&c>m&&h<0&&m<100&&b>t.sensitivity[0]&&(t.event.dir="left"),t.direction.right===!0&&c>m&&h>0&&m<100&&b>t.sensitivity[0]&&(t.event.dir="right"),t.event.dir!==!1?(H(a),t.event.mouse===!0&&(document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),Be(),t.styleCleanup=w=>{t.styleCleanup=void 0,document.body.classList.remove("non-selectable");const P=()=>{document.body.classList.remove("no-pointer-events--children")};w===!0?setTimeout(P,50):P()}),t.handler({evt:a,touch:t.event.mouse!==!0,mouse:t.event.mouse,direction:t.event.dir,duration:u,distance:{x:c,y:m}})):t.end(a)},end(a){t.event!==void 0&&(W(t,"temp"),z.is.firefox===!0&&j(e,!1),t.styleCleanup!==void 0&&t.styleCleanup(!0),a!==void 0&&t.event.dir!==!1&&H(a),t.event=void 0)}};e.__qtouchswipe=t,i.mouse===!0&&O(t,"main",[[e,"mousedown","mouseStart",`passive${s}`]]),z.has.touch===!0&&O(t,"main",[[e,"touchstart","touchStart",`passive${i.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,n){const r=e.__qtouchswipe;r!==void 0&&(n.oldValue!==n.value&&(typeof n.value!="function"&&r.end(),r.handler=n.value),r.direction=oe(n.modifiers))},beforeUnmount(e){const n=e.__qtouchswipe;n!==void 0&&(W(n,"main"),W(n,"temp"),z.is.firefox===!0&&j(e,!1),n.styleCleanup!==void 0&&n.styleCleanup(),delete e.__qtouchswipe)}});function Le(){const e=new Map;return{getCache:function(n,r){return e[n]===void 0?e[n]=r:e[n]},getCacheWithFn:function(n,r){return e[n]===void 0?e[n]=r():e[n]}}}const Ue={name:{required:!0},disable:Boolean},le={setup(e,{slots:n}){return()=>v("div",{class:"q-panel scroll",role:"tabpanel"},U(n.default))}},je={modelValue:{required:!0},animated:Boolean,infinite:Boolean,swipeable:Boolean,vertical:Boolean,transitionPrev:String,transitionNext:String,transitionDuration:{type:[String,Number],default:300},keepAlive:Boolean,keepAliveInclude:[String,Array,RegExp],keepAliveExclude:[String,Array,RegExp],keepAliveMax:Number},He=["update:modelValue","before-transition","transition"];function We(){const{props:e,emit:n,proxy:r}=Z(),{getCacheWithFn:i}=Le();let s,t;const a=C(null),u=C(null);function g(o){const d=e.vertical===!0?"up":"left";l((r.$q.lang.rtl===!0?-1:1)*(o.direction===d?1:-1))}const h=f(()=>[[Oe,g,void 0,{horizontal:e.vertical!==!0,vertical:e.vertical,mouse:!0}]]),c=f(()=>e.transitionPrev||`slide-${e.vertical===!0?"down":"right"}`),y=f(()=>e.transitionNext||`slide-${e.vertical===!0?"up":"left"}`),m=f(()=>`--q-transition-duration: ${e.transitionDuration}ms`),b=f(()=>typeof e.modelValue=="string"||typeof e.modelValue=="number"?e.modelValue:String(e.modelValue)),_=f(()=>({include:e.keepAliveInclude,exclude:e.keepAliveExclude,max:e.keepAliveMax})),w=f(()=>e.keepAliveInclude!==void 0||e.keepAliveExclude!==void 0);R(()=>e.modelValue,(o,d)=>{const x=k(o)===!0?$(o):-1;t!==!0&&T(x===-1?0:x<$(d)?-1:1),a.value!==x&&(a.value=x,n("before-transition",o,d),pe(()=>{n("transition",o,d)}))});function P(){l(1)}function A(){l(-1)}Object.assign(r,{next:P,previous:A,goTo:B});function B(o){n("update:modelValue",o)}function k(o){return o!=null&&o!==""}function $(o){return s.findIndex(d=>d.props.name===o&&d.props.disable!==""&&d.props.disable!==!0)}function E(){return s.filter(o=>o.props.disable!==""&&o.props.disable!==!0)}function T(o){const d=o!==0&&e.animated===!0&&a.value!==-1?"q-transition--"+(o===-1?c.value:y.value):null;u.value!==d&&(u.value=d)}function l(o,d=a.value){let x=d+o;for(;x>-1&&x<s.length;){const F=s[x];if(F!==void 0&&F.props.disable!==""&&F.props.disable!==!0){T(o),t=!0,n("update:modelValue",F.props.name),setTimeout(()=>{t=!1});return}x+=o}e.infinite===!0&&s.length>0&&d!==-1&&d!==s.length&&l(o,o===-1?s.length:-1)}function S(){const o=$(e.modelValue);return a.value!==o&&(a.value=o),!0}function I(){const o=k(e.modelValue)===!0&&S()&&s[a.value];return e.keepAlive===!0?[v(ge,_.value,[v(w.value===!0?i(b.value,()=>({...le,name:b.value})):le,{key:b.value,style:m.value},()=>o)])]:[v("div",{class:"q-panel scroll",style:m.value,key:b.value,role:"tabpanel"},[o])]}function p(){if(s.length!==0)return e.animated===!0?[v(ue,{name:u.value},I)]:I()}function N(o){return s=he(U(o.default,[])).filter(d=>d.props!==null&&d.props.slot===void 0&&k(d.props.name)===!0),s.length}function M(){return s}return{panelIndex:a,panelDirectives:h,updatePanelsList:N,updatePanelIndex:S,getPanelContent:p,getEnabledPanels:E,getPanels:M,isValidPanelName:k,keepAliveProps:_,needsUniqueKeepAliveWrapper:w,goToPanelByOffset:l,goToPanel:B,nextPanel:P,previousPanel:A}}var Xe=G({name:"QCarouselSlide",props:{...Ue,imgSrc:String},setup(e,{slots:n}){const r=f(()=>e.imgSrc?{backgroundImage:`url("${e.imgSrc}")`}:{});return()=>v("div",{class:"q-carousel__slide",style:r.value},U(n.default))}});let D=0;const Ke={fullscreen:Boolean,noRouteFullscreenExit:Boolean},Ye=["update:fullscreen","fullscreen"];function Ge(){const e=Z(),{props:n,emit:r,proxy:i}=e;let s,t,a;const u=C(!1);ye(e)===!0&&R(()=>i.$route.fullPath,()=>{n.noRouteFullscreenExit!==!0&&c()}),R(()=>n.fullscreen,y=>{u.value!==y&&g()}),R(u,y=>{r("update:fullscreen",y),r("fullscreen",y)});function g(){u.value===!0?c():h()}function h(){u.value!==!0&&(u.value=!0,a=i.$el.parentNode,a.replaceChild(t,i.$el),document.body.appendChild(i.$el),D++,D===1&&document.body.classList.add("q-body--fullscreen-mixin"),s={handler:c},te.add(s))}function c(){u.value===!0&&(s!==void 0&&(te.remove(s),s=void 0),a.replaceChild(i.$el,t),u.value=!1,D=Math.max(0,D-1),D===0&&(document.body.classList.remove("q-body--fullscreen-mixin"),i.$el.scrollIntoView!==void 0&&setTimeout(()=>{i.$el.scrollIntoView()})))}return be(()=>{t=document.createElement("span")}),ce(()=>{n.fullscreen===!0&&h()}),J(c),Object.assign(i,{toggleFullscreen:g,setFullscreen:h,exitFullscreen:c}),{inFullscreen:u,toggleFullscreen:g}}const Je=["top","right","bottom","left"],Ze=["regular","flat","outline","push","unelevated"];var et=G({name:"QCarousel",props:{...$e,...je,...Ke,transitionPrev:{type:String,default:"fade"},transitionNext:{type:String,default:"fade"},height:String,padding:Boolean,controlColor:String,controlTextColor:String,controlType:{type:String,validator:e=>Ze.includes(e),default:"flat"},autoplay:[Number,Boolean],arrows:Boolean,prevIcon:String,nextIcon:String,navigation:Boolean,navigationPosition:{type:String,validator:e=>Je.includes(e)},navigationIcon:String,navigationActiveIcon:String,thumbnails:Boolean},emits:[...Ye,...He],setup(e,{slots:n}){const{proxy:{$q:r}}=Z(),i=Ee(e,r);let s,t;const{updatePanelsList:a,getPanelContent:u,panelDirectives:g,goToPanel:h,previousPanel:c,nextPanel:y,getEnabledPanels:m,panelIndex:b}=We(),{inFullscreen:_}=Ge(),w=f(()=>_.value!==!0&&e.height!==void 0?{height:e.height}:{}),P=f(()=>e.vertical===!0?"vertical":"horizontal"),A=f(()=>`q-carousel q-panel-parent q-carousel--with${e.padding===!0?"":"out"}-padding`+(_.value===!0?" fullscreen":"")+(i.value===!0?" q-carousel--dark q-dark":"")+(e.arrows===!0?` q-carousel--arrows-${P.value}`:"")+(e.navigation===!0?` q-carousel--navigation-${E.value}`:"")),B=f(()=>{const p=[e.prevIcon||r.iconSet.carousel[e.vertical===!0?"up":"left"],e.nextIcon||r.iconSet.carousel[e.vertical===!0?"down":"right"]];return e.vertical===!1&&r.lang.rtl===!0?p.reverse():p}),k=f(()=>e.navigationIcon||r.iconSet.carousel.navigationIcon),$=f(()=>e.navigationActiveIcon||k.value),E=f(()=>e.navigationPosition||(e.vertical===!0?"right":"bottom")),T=f(()=>({color:e.controlColor,textColor:e.controlTextColor,round:!0,[e.controlType]:!0,dense:!0}));R(()=>e.modelValue,()=>{e.autoplay&&(clearInterval(s),l())}),R(()=>e.autoplay,p=>{p?l():clearInterval(s)});function l(){const p=xe(e.autoplay)===!0?e.autoplay:5e3;s=setTimeout(p>=0?y:c,Math.abs(p))}ce(()=>{e.autoplay&&l()}),J(()=>{clearInterval(s)});function S(p,N){return v("div",{class:`q-carousel__control q-carousel__navigation no-wrap absolute flex q-carousel__navigation--${p} q-carousel__navigation--${E.value}`+(e.controlColor!==void 0?` text-${e.controlColor}`:"")},[v("div",{class:"q-carousel__navigation-inner flex flex-center no-wrap"},m().map(N))])}function I(){const p=[];if(e.navigation===!0){const N=n["navigation-icon"]!==void 0?n["navigation-icon"]:o=>v(Q,{key:"nav"+o.name,class:`q-carousel__navigation-icon q-carousel__navigation-icon--${o.active===!0?"":"in"}active`,...o.btnProps,onClick:o.onClick}),M=t-1;p.push(S("buttons",(o,d)=>{const x=o.props.name,F=b.value===d;return N({index:d,maxIndex:M,name:x,active:F,btnProps:{icon:F===!0?$.value:k.value,size:"sm",...T.value},onClick:()=>{h(x)}})}))}else if(e.thumbnails===!0){const N=e.controlColor!==void 0?` text-${e.controlColor}`:"";p.push(S("thumbnails",M=>{const o=M.props;return v("img",{key:"tmb#"+o.name,class:`q-carousel__thumbnail q-carousel__thumbnail--${o.name===e.modelValue?"":"in"}active`+N,src:o.imgSrc||o["img-src"],onClick:()=>{h(o.name)}})}))}return e.arrows===!0&&b.value>=0&&((e.infinite===!0||b.value>0)&&p.push(v("div",{key:"prev",class:`q-carousel__control q-carousel__arrow q-carousel__prev-arrow q-carousel__prev-arrow--${P.value} absolute flex flex-center`},[v(Q,{icon:B.value[0],...T.value,onClick:c})])),(e.infinite===!0||b.value<t-1)&&p.push(v("div",{key:"next",class:`q-carousel__control q-carousel__arrow q-carousel__next-arrow q-carousel__next-arrow--${P.value} absolute flex flex-center`},[v(Q,{icon:B.value[1],...T.value,onClick:y})]))),Se(n.control,p)}return()=>(t=a(n),v("div",{class:A.value,style:w.value},[_e("div",{class:"q-carousel__slides-container"},u(),"sl-cont",e.swipeable,()=>g.value)].concat(I())))}}),re;(function(e){e.Prompt="PROMPT",e.Camera="CAMERA",e.Photos="PHOTOS"})(re||(re={}));var se;(function(e){e.Rear="REAR",e.Front="FRONT"})(se||(se={}));var Y;(function(e){e.Uri="uri",e.Base64="base64",e.DataUrl="dataUrl"})(Y||(Y={}));const tt=Ce("Camera",{web:()=>import("./web.07bd5b4b.js").then(e=>new e.CameraWeb)}),nt={setup(){const e=Ne();e.getPhotos();const n=C("photo"),r=C(""),i=C(1);function s(){e.changeAE()}async function t(){const a=await tt.getPhoto({quality:75,allowEditing:!1,resultType:Y.Base64,source:"CAMERA",correctOrientation:!0});r.value="data:image/jpeg;base64, "+a.base64String,console.log(a.base64String),await e.uploadPhoto(a.base64String),e.getPhotos()}return{globalStore:e,action:n,nuevaEntrega:s,imageSrc:r,captureImage:t,slide:i}}},at={class:"text-center text-h5 text-weight-bold"},ot={class:"text-center"},it={class:"q-pa-sm",style:{"font-size":"20px"}},lt={class:"row items-center"},rt=V("div",{class:"col-3"},"Albar\xE1n",-1),st={class:"col"},ut={class:"row items-center q-pt-sm"},ct={class:"col-12 flex justify-center"};function dt(e,n,r,i,s,t){return X(),ne(Fe,{class:"flex-center q-pa-md"},{default:L(()=>[V("div",at,[q(ae,{name:"photo_camera"}),qe(" Fotografiar "+we(i.globalStore.customer)+" ",1),q(ae,{name:"photo_camera"})]),V("div",ot,[q(K,{modelValue:i.action,"onUpdate:modelValue":n[0]||(n[0]=a=>i.action=a),class:"text-grey-5","checked-icon":"task_alt","unchecked-icon":"panorama_fish_eye",val:"load",label:"Cargar",onClick:n[1]||(n[1]=a=>this.$router.push({path:"/readings",query:{action:"load"}}))},null,8,["modelValue"]),q(K,{modelValue:i.action,"onUpdate:modelValue":n[2]||(n[2]=a=>i.action=a),class:"text-grey-5","checked-icon":"task_alt","unchecked-icon":"panorama_fish_eye",val:"download",label:"Descargar",onClick:n[3]||(n[3]=a=>this.$router.push({path:"/readings",query:{action:"download"}}))},null,8,["modelValue"]),q(K,{modelValue:i.action,"onUpdate:modelValue":n[4]||(n[4]=a=>i.action=a),class:"text-primary","checked-icon":"task_alt","unchecked-icon":"panorama_fish_eye",val:"photo",label:"Fotografiar"},null,8,["modelValue"])]),V("div",it,[V("div",lt,[rt,V("div",st,[q(Ae,{dense:"",square:"",outlined:"",standout:"text-black",modelValue:i.globalStore.aedocument,"onUpdate:modelValue":n[5]||(n[5]=a=>i.globalStore.aedocument=a),disable:""},null,8,["modelValue"])])]),V("div",ut,[V("div",ct,[q(Q,{style:{width:"100vw"},icon:"photo_camera",color:"primary",label:"Hacer Foto",onClick:i.captureImage},null,8,["onClick"])])])]),q(et,{animated:"",modelValue:i.slide,"onUpdate:modelValue":n[6]||(n[6]=a=>i.slide=a),arrows:"",navigation:"",infinite:"",style:{height:"55vh"}},{default:L(()=>[(X(!0),ke(Te,null,Ie(i.globalStore.photoList,a=>(X(),ne(Xe,{key:a.id,name:a.id,class:"q-pa-xs"},{default:L(()=>[q(De,{src:a.src},null,8,["src"])]),_:2},1032,["name"]))),128))]),_:1},8,["modelValue"]),q(Ve,{position:"bottom",offset:[0,18]},{default:L(()=>[q(Q,{style:{width:"95vw"},color:"accent","text-color":"white",label:"Cargar otra entrega","no-caps":"",onClick:i.nuevaEntrega},null,8,["onClick"])]),_:1})]),_:1})}var vt=Pe(nt,[["render",dt]]),bt=Object.freeze(Object.defineProperty({__proto__:null,default:vt},Symbol.toStringTag,{value:"Module"}));export{re as C,bt as P,se as a};
