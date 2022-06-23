import{i as Me,w as T,o as le,a9 as qe,g as Q,aa as Fe,c as ye,ab as Re,a as b,h as y,ac as Ve,r as I,ad as _e,ae as Ae,af as Be,O as Ee,n as K,ag as $e,ah as Oe,f as ke,q as Pe,Y,d as J,Q as ie,ai as Ie,aj as Te,ak as ze,U as je,Z as se}from"./index.c6e9e2f2.js";import{u as Ne,a as De}from"./global.b41e9797.js";import{b as Le}from"./format.801e7424.js";function Ue({validate:e,resetValidation:t,requiresQForm:o}){const u=Me(qe,!1);if(u!==!1){const{props:f,proxy:h}=Q();Object.assign(h,{validate:e,resetValidation:t}),T(()=>f.disable,v=>{v===!0?(typeof t=="function"&&t(),u.unbindComponent(h)):u.bindComponent(h)}),f.disable!==!0&&u.bindComponent(h),le(()=>{f.disable!==!0&&u.unbindComponent(h)})}else o===!0&&console.error("Parent QForm not found on useFormChild()!")}const de=/^#[0-9a-fA-F]{3}([0-9a-fA-F]{3})?$/,ce=/^#[0-9a-fA-F]{4}([0-9a-fA-F]{4})?$/,fe=/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/,X=/^rgb\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5])\)$/,G=/^rgba\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),(0|0\.[0-9]+[1-9]|0\.[1-9]+|1)\)$/,ve={date:e=>/^-?[\d]+\/[0-1]\d\/[0-3]\d$/.test(e),time:e=>/^([0-1]?\d|2[0-3]):[0-5]\d$/.test(e),fulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d:[0-5]\d$/.test(e),timeOrFulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d(:[0-5]\d)?$/.test(e),email:e=>/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e),hexColor:e=>de.test(e),hexaColor:e=>ce.test(e),hexOrHexaColor:e=>fe.test(e),rgbColor:e=>X.test(e),rgbaColor:e=>G.test(e),rgbOrRgbaColor:e=>X.test(e)||G.test(e),hexOrRgbColor:e=>de.test(e)||X.test(e),hexaOrRgbaColor:e=>ce.test(e)||G.test(e),anyColor:e=>fe.test(e)||X.test(e)||G.test(e)};"Boolean Number String Function Array Date RegExp Object".split(" ").forEach(e=>{e.toLowerCase()});const Ze={...Fe,min:{type:Number,default:0},max:{type:Number,default:100},color:String,centerColor:String,trackColor:String,fontSize:String,thickness:{type:Number,default:.2,validator:e=>e>=0&&e<=1},angle:{type:Number,default:0},showValue:Boolean,reverse:Boolean,instantFeedback:Boolean},ne=50,pe=2*ne,xe=pe*Math.PI,Ke=Math.round(xe*1e3)/1e3;ye({name:"QCircularProgress",props:{...Ze,value:{type:Number,default:0},animationSpeed:{type:[String,Number],default:600},indeterminate:Boolean},setup(e,{slots:t}){const{proxy:{$q:o}}=Q(),u=Re(e),f=b(()=>{const M=(o.lang.rtl===!0?-1:1)*e.angle;return{transform:e.reverse!==(o.lang.rtl===!0)?`scale3d(-1, 1, 1) rotate3d(0, 0, 1, ${-90-M}deg)`:`rotate3d(0, 0, 1, ${M-90}deg)`}}),h=b(()=>e.instantFeedback!==!0&&e.indeterminate!==!0?{transition:`stroke-dashoffset ${e.animationSpeed}ms ease 0s, stroke ${e.animationSpeed}ms ease`}:""),v=b(()=>pe/(1-e.thickness/2)),S=b(()=>`${v.value/2} ${v.value/2} ${v.value} ${v.value}`),p=b(()=>Le(e.value,e.min,e.max)),k=b(()=>xe*(1-(p.value-e.min)/(e.max-e.min))),_=b(()=>e.thickness/2*v.value);function F({thickness:M,offset:A,color:B,cls:D}){return y("circle",{class:"q-circular-progress__"+D+(B!==void 0?` text-${B}`:""),style:h.value,fill:"transparent",stroke:"currentColor","stroke-width":M,"stroke-dasharray":Ke,"stroke-dashoffset":A,cx:v.value,cy:v.value,r:ne})}return()=>{const M=[];e.centerColor!==void 0&&e.centerColor!=="transparent"&&M.push(y("circle",{class:`q-circular-progress__center text-${e.centerColor}`,fill:"currentColor",r:ne-_.value/2,cx:v.value,cy:v.value})),e.trackColor!==void 0&&e.trackColor!=="transparent"&&M.push(F({cls:"track",thickness:_.value,offset:0,color:e.trackColor})),M.push(F({cls:"circle",thickness:_.value,offset:k.value,color:e.color}));const A=[y("svg",{class:"q-circular-progress__svg",style:f.value,viewBox:S.value,"aria-hidden":"true"},M)];return e.showValue===!0&&A.push(y("div",{class:"q-circular-progress__text absolute-full row flex-center content-center",style:{fontSize:e.fontSize}},t.default!==void 0?t.default():[y("div",p.value)])),y("div",{class:`q-circular-progress q-circular-progress--${e.indeterminate===!0?"in":""}determinate`,style:u.value,role:"progressbar","aria-valuemin":e.min,"aria-valuemax":e.max,"aria-valuenow":e.indeterminate===!0?void 0:p.value},Ve(t.internal,A))}}});const He=["rejected"],Qe=[...He,"start","finish","added","removed"],We=()=>!0;function Ye(e){const t={};return e.forEach(o=>{t[o]=We}),t}Ye(Qe);let ae,ee=0;const $=new Array(256);for(let e=0;e<256;e++)$[e]=(e+256).toString(16).substring(1);const Je=(()=>{const e=typeof crypto!="undefined"?crypto:typeof window!="undefined"?window.crypto||window.msCrypto:void 0;if(e!==void 0){if(e.randomBytes!==void 0)return e.randomBytes;if(e.getRandomValues!==void 0)return t=>{const o=new Uint8Array(t);return e.getRandomValues(o),o}}return t=>{const o=[];for(let u=t;u>0;u--)o.push(Math.floor(Math.random()*256));return o}})(),me=4096;function Xe(){(ae===void 0||ee+16>me)&&(ee=0,ae=Je(me));const e=Array.prototype.slice.call(ae,ee,ee+=16);return e[6]=e[6]&15|64,e[8]=e[8]&63|128,$[e[0]]+$[e[1]]+$[e[2]]+$[e[3]]+"-"+$[e[4]]+$[e[5]]+"-"+$[e[6]]+$[e[7]]+"-"+$[e[8]]+$[e[9]]+"-"+$[e[10]]+$[e[11]]+$[e[12]]+$[e[13]]+$[e[14]]+$[e[15]]}const Ge=[!0,!1,"ondemand"],et={modelValue:{},error:{type:Boolean,default:null},errorMessage:String,noErrorIcon:Boolean,rules:Array,reactiveRules:Boolean,lazyRules:{type:[Boolean,String],validator:e=>Ge.includes(e)}};function tt(e,t){const{props:o,proxy:u}=Q(),f=I(!1),h=I(null),v=I(null);Ue({validate:B,resetValidation:A});let S=0,p;const k=b(()=>o.rules!==void 0&&o.rules!==null&&o.rules.length>0),_=b(()=>o.disable!==!0&&k.value===!0),F=b(()=>o.error===!0||f.value===!0),M=b(()=>typeof o.errorMessage=="string"&&o.errorMessage.length>0?o.errorMessage:h.value);T(()=>o.modelValue,()=>{D()}),T(()=>o.reactiveRules,P=>{P===!0?p===void 0&&(p=T(()=>o.rules,()=>{D(!0)})):p!==void 0&&(p(),p=void 0)},{immediate:!0}),T(e,P=>{P===!0?v.value===null&&(v.value=!1):v.value===!1&&(v.value=!0,_.value===!0&&o.lazyRules!=="ondemand"&&t.value===!1&&R())});function A(){S++,t.value=!1,v.value=null,f.value=!1,h.value=null,R.cancel()}function B(P=o.modelValue){if(_.value!==!0)return!0;const z=++S;t.value!==!0&&o.lazyRules!==!0&&(v.value=!0);const O=(q,r)=>{f.value!==q&&(f.value=q);const n=r||void 0;h.value!==n&&(h.value=n),t.value=!1},E=[];for(let q=0;q<o.rules.length;q++){const r=o.rules[q];let n;if(typeof r=="function"?n=r(P):typeof r=="string"&&ve[r]!==void 0&&(n=ve[r](P)),n===!1||typeof n=="string")return O(!0,n),!1;n!==!0&&n!==void 0&&E.push(n)}return E.length===0?(O(!1),!0):(t.value=!0,Promise.all(E).then(q=>{if(q===void 0||Array.isArray(q)===!1||q.length===0)return z===S&&O(!1),!0;const r=q.find(n=>n===!1||typeof n=="string");return z===S&&O(r!==void 0,r),r===void 0},q=>(z===S&&(console.error(q),O(!0)),!1)))}function D(P){_.value===!0&&o.lazyRules!=="ondemand"&&(v.value===!0||o.lazyRules!==!0&&P!==!0)&&R()}const R=_e(B,0);return le(()=>{p!==void 0&&p(),R.cancel()}),Object.assign(u,{resetValidation:A,validate:B}),Ae(u,"hasError",()=>F.value),{isDirtyModel:v,hasRules:k,hasError:F,errorMessage:M,validate:B,resetValidation:A}}const ge=/^on[A-Z]/;function lt(e,t){const o={listeners:I({}),attributes:I({})};function u(){const f={},h={};for(const v in e)v!=="class"&&v!=="style"&&ge.test(v)===!1&&(f[v]=e[v]);for(const v in t.props)ge.test(v)===!0&&(h[v]=t.props[v]);o.attributes.value=f,o.listeners.value=h}return Be(u),u(),o}let H=[],W=[];function Ce(e){W=W.filter(t=>t!==e)}function Ct(e){Ce(e),W.push(e)}function wt(e){Ce(e),W.length===0&&H.length>0&&(H[H.length-1](),H=[])}function we(e){W.length===0?e():H.push(e)}function rt(e){H=H.filter(t=>t!==e)}function oe(e){return e===void 0?`f_${Xe()}`:e}function ue(e){return e!=null&&(""+e).length>0}const at={...Ne,...et,label:String,stackLabel:Boolean,hint:String,hideHint:Boolean,prefix:String,suffix:String,labelColor:String,color:String,bgColor:String,filled:Boolean,outlined:Boolean,borderless:Boolean,standout:[Boolean,String],square:Boolean,loading:Boolean,labelSlot:Boolean,bottomSlots:Boolean,hideBottomSpace:Boolean,rounded:Boolean,dense:Boolean,itemAligned:Boolean,counter:Boolean,clearable:Boolean,clearIcon:String,disable:Boolean,readonly:Boolean,autofocus:Boolean,for:String,maxlength:[Number,String]},nt=["update:modelValue","clear","focus","blur","popup-show","popup-hide"];function ot(){const{props:e,attrs:t,proxy:o,vnode:u}=Q();return{isDark:De(e,o.$q),editable:b(()=>e.disable!==!0&&e.readonly!==!0),innerLoading:I(!1),focused:I(!1),hasPopupOpen:!1,splitAttrs:lt(t,u),targetUid:I(oe(e.for)),rootRef:I(null),targetRef:I(null),controlRef:I(null)}}function ut(e){const{props:t,emit:o,slots:u,attrs:f,proxy:h}=Q(),{$q:v}=h;let S;e.hasValue===void 0&&(e.hasValue=b(()=>ue(t.modelValue))),e.emitValue===void 0&&(e.emitValue=l=>{o("update:modelValue",l)}),e.controlEvents===void 0&&(e.controlEvents={onFocusin:s,onFocusout:d}),Object.assign(e,{clearValue:i,onControlFocusin:s,onControlFocusout:d,focus:n}),e.computedCounter===void 0&&(e.computedCounter=b(()=>{if(t.counter!==!1){const l=typeof t.modelValue=="string"||typeof t.modelValue=="number"?(""+t.modelValue).length:Array.isArray(t.modelValue)===!0?t.modelValue.length:0,m=t.maxlength!==void 0?t.maxlength:t.maxValues;return l+(m!==void 0?" / "+m:"")}}));const{isDirtyModel:p,hasRules:k,hasError:_,errorMessage:F,resetValidation:M}=tt(e.focused,e.innerLoading),A=e.floatingLabel!==void 0?b(()=>t.stackLabel===!0||e.focused.value===!0||e.floatingLabel.value===!0):b(()=>t.stackLabel===!0||e.focused.value===!0||e.hasValue.value===!0),B=b(()=>t.bottomSlots===!0||t.hint!==void 0||k.value===!0||t.counter===!0||t.error!==null),D=b(()=>t.filled===!0?"filled":t.outlined===!0?"outlined":t.borderless===!0?"borderless":t.standout?"standout":"standard"),R=b(()=>`q-field row no-wrap items-start q-field--${D.value}`+(e.fieldClass!==void 0?` ${e.fieldClass.value}`:"")+(t.rounded===!0?" q-field--rounded":"")+(t.square===!0?" q-field--square":"")+(A.value===!0?" q-field--float":"")+(z.value===!0?" q-field--labeled":"")+(t.dense===!0?" q-field--dense":"")+(t.itemAligned===!0?" q-field--item-aligned q-item-type":"")+(e.isDark.value===!0?" q-field--dark":"")+(e.getControl===void 0?" q-field--auto-height":"")+(e.focused.value===!0?" q-field--focused":"")+(_.value===!0?" q-field--error":"")+(_.value===!0||e.focused.value===!0?" q-field--highlighted":"")+(t.hideBottomSpace!==!0&&B.value===!0?" q-field--with-bottom":"")+(t.disable===!0?" q-field--disabled":t.readonly===!0?" q-field--readonly":"")),P=b(()=>"q-field__control relative-position row no-wrap"+(t.bgColor!==void 0?` bg-${t.bgColor}`:"")+(_.value===!0?" text-negative":typeof t.standout=="string"&&t.standout.length>0&&e.focused.value===!0?` ${t.standout}`:t.color!==void 0?` text-${t.color}`:"")),z=b(()=>t.labelSlot===!0||t.label!==void 0),O=b(()=>"q-field__label no-pointer-events absolute ellipsis"+(t.labelColor!==void 0&&_.value!==!0?` text-${t.labelColor}`:"")),E=b(()=>({id:e.targetUid.value,editable:e.editable.value,focused:e.focused.value,floatingLabel:A.value,modelValue:t.modelValue,emitValue:e.emitValue})),q=b(()=>{const l={for:e.targetUid.value};return t.disable===!0?l["aria-disabled"]="true":t.readonly===!0&&(l["aria-readonly"]="true"),l});T(()=>t.for,l=>{e.targetUid.value=oe(l)});function r(){const l=document.activeElement;let m=e.targetRef!==void 0&&e.targetRef.value;m&&(l===null||l.id!==e.targetUid.value)&&(m.hasAttribute("tabindex")===!0||(m=m.querySelector("[tabindex]")),m&&m!==l&&m.focus({preventScroll:!0}))}function n(){we(r)}function c(){rt(r);const l=document.activeElement;l!==null&&e.rootRef.value.contains(l)&&l.blur()}function s(l){clearTimeout(S),e.editable.value===!0&&e.focused.value===!1&&(e.focused.value=!0,o("focus",l))}function d(l,m){clearTimeout(S),S=setTimeout(()=>{document.hasFocus()===!0&&(e.hasPopupOpen===!0||e.controlRef===void 0||e.controlRef.value===null||e.controlRef.value.contains(document.activeElement)!==!1)||(e.focused.value===!0&&(e.focused.value=!1,o("blur",l)),m!==void 0&&m())})}function i(l){Ee(l),v.platform.is.mobile!==!0?(e.targetRef!==void 0&&e.targetRef.value||e.rootRef.value).focus():e.rootRef.value.contains(document.activeElement)===!0&&document.activeElement.blur(),t.type==="file"&&(e.inputRef.value.value=null),o("update:modelValue",null),o("clear",t.modelValue),K(()=>{M(),v.platform.is.mobile!==!0&&(p.value=!1)})}function x(){const l=[];return u.prepend!==void 0&&l.push(y("div",{class:"q-field__prepend q-field__marginal row no-wrap items-center",key:"prepend",onClick:Y},u.prepend())),l.push(y("div",{class:"q-field__control-container col relative-position row no-wrap q-anchor--skip"},g())),_.value===!0&&t.noErrorIcon===!1&&l.push(j("error",[y(ie,{name:v.iconSet.field.error,color:"negative"})])),t.loading===!0||e.innerLoading.value===!0?l.push(j("inner-loading-append",u.loading!==void 0?u.loading():[y(Ie,{color:t.color})])):t.clearable===!0&&e.hasValue.value===!0&&e.editable.value===!0&&l.push(j("inner-clearable-append",[y(ie,{class:"q-field__focusable-action",tag:"button",name:t.clearIcon||v.iconSet.field.clear,tabindex:0,type:"button","aria-hidden":null,role:null,onClick:i})])),u.append!==void 0&&l.push(y("div",{class:"q-field__append q-field__marginal row no-wrap items-center",key:"append",onClick:Y},u.append())),e.getInnerAppend!==void 0&&l.push(j("inner-append",e.getInnerAppend())),e.getControlChild!==void 0&&l.push(e.getControlChild()),l}function g(){const l=[];return t.prefix!==void 0&&t.prefix!==null&&l.push(y("div",{class:"q-field__prefix no-pointer-events row items-center"},t.prefix)),e.getShadowControl!==void 0&&e.hasShadow.value===!0&&l.push(e.getShadowControl()),e.getControl!==void 0?l.push(e.getControl()):u.rawControl!==void 0?l.push(u.rawControl()):u.control!==void 0&&l.push(y("div",{ref:e.targetRef,class:"q-field__native row",tabindex:-1,...e.splitAttrs.attributes.value,"data-autofocus":t.autofocus===!0||void 0},u.control(E.value))),z.value===!0&&l.push(y("div",{class:O.value},J(u.label,t.label))),t.suffix!==void 0&&t.suffix!==null&&l.push(y("div",{class:"q-field__suffix no-pointer-events row items-center"},t.suffix)),l.concat(J(u.default))}function C(){let l,m;_.value===!0?F.value!==null?(l=[y("div",{role:"alert"},F.value)],m=`q--slot-error-${F.value}`):(l=J(u.error),m="q--slot-error"):(t.hideHint!==!0||e.focused.value===!0)&&(t.hint!==void 0?(l=[y("div",t.hint)],m=`q--slot-hint-${t.hint}`):(l=J(u.hint),m="q--slot-hint"));const a=t.counter===!0||u.counter!==void 0;if(t.hideBottomSpace===!0&&a===!1&&l===void 0)return;const w=y("div",{key:m,class:"q-field__messages col"},l);return y("div",{class:"q-field__bottom row items-start q-field__bottom--"+(t.hideBottomSpace!==!0?"animated":"stale")},[t.hideBottomSpace===!0?w:y(Te,{name:"q-transition--field-message"},()=>w),a===!0?y("div",{class:"q-field__counter"},u.counter!==void 0?u.counter():e.computedCounter.value):null])}function j(l,m){return m===null?null:y("div",{key:l,class:"q-field__append q-field__marginal row no-wrap items-center q-anchor--skip"},m)}Object.assign(h,{focus:n,blur:c});let L=!1;return $e(()=>{L=!0}),Oe(()=>{L===!0&&t.autofocus===!0&&h.focus()}),ke(()=>{Pe.value===!0&&t.for===void 0&&(e.targetUid.value=oe()),t.autofocus===!0&&h.focus()}),le(()=>{clearTimeout(S)}),function(){const m=e.getControl===void 0&&u.control===void 0?{...e.splitAttrs.attributes.value,"data-autofocus":t.autofocus===!0||void 0,...q.value}:q.value;return y("label",{ref:e.rootRef,class:[R.value,f.class],style:f.style,...m},[u.before!==void 0?y("div",{class:"q-field__before q-field__marginal row no-wrap items-center",onClick:Y},u.before()):null,y("div",{class:"q-field__inner relative-position col self-stretch"},[y("div",{ref:e.controlRef,class:P.value,tabindex:-1,...e.controlEvents},x()),B.value===!0?C():null]),u.after!==void 0?y("div",{class:"q-field__after q-field__marginal row no-wrap items-center",onClick:Y},u.after()):null])}}const he={date:"####/##/##",datetime:"####/##/## ##:##",time:"##:##",fulltime:"##:##:##",phone:"(###) ### - ####",card:"#### #### #### ####"},te={"#":{pattern:"[\\d]",negate:"[^\\d]"},S:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]"},N:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]"},A:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleUpperCase()},a:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleLowerCase()},X:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleUpperCase()},x:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleLowerCase()}},Se=Object.keys(te);Se.forEach(e=>{te[e].regex=new RegExp(te[e].pattern)});const it=new RegExp("\\\\([^.*+?^${}()|([\\]])|([.*+?^${}()|[\\]])|(["+Se.join("")+"])|(.)","g"),be=/[.*+?^${}()|[\]\\]/g,V=String.fromCharCode(1),st={mask:String,reverseFillMask:Boolean,fillMask:[Boolean,String],unmaskedValue:Boolean};function dt(e,t,o,u){let f,h,v,S;const p=I(null),k=I(F());function _(){return e.autogrow===!0||["textarea","text","search","url","tel","password"].includes(e.type)}T(()=>e.type+e.autogrow,A),T(()=>e.mask,r=>{if(r!==void 0)B(k.value,!0);else{const n=E(k.value);A(),e.modelValue!==n&&t("update:modelValue",n)}}),T(()=>e.fillMask+e.reverseFillMask,()=>{p.value===!0&&B(k.value,!0)}),T(()=>e.unmaskedValue,()=>{p.value===!0&&B(k.value)});function F(){if(A(),p.value===!0){const r=z(E(e.modelValue));return e.fillMask!==!1?q(r):r}return e.modelValue}function M(r){if(r<f.length)return f.slice(-r);let n="",c=f;const s=c.indexOf(V);if(s>-1){for(let d=r-c.length;d>0;d--)n+=V;c=c.slice(0,s)+n+c.slice(s)}return c}function A(){if(p.value=e.mask!==void 0&&e.mask.length>0&&_(),p.value===!1){S=void 0,f="",h="";return}const r=he[e.mask]===void 0?e.mask:he[e.mask],n=typeof e.fillMask=="string"&&e.fillMask.length>0?e.fillMask.slice(0,1):"_",c=n.replace(be,"\\$&"),s=[],d=[],i=[];let x=e.reverseFillMask===!0,g="",C="";r.replace(it,(m,a,w,U,Z)=>{if(U!==void 0){const N=te[U];i.push(N),C=N.negate,x===!0&&(d.push("(?:"+C+"+)?("+N.pattern+"+)?(?:"+C+"+)?("+N.pattern+"+)?"),x=!1),d.push("(?:"+C+"+)?("+N.pattern+")?")}else if(w!==void 0)g="\\"+(w==="\\"?"":w),i.push(w),s.push("([^"+g+"]+)?"+g+"?");else{const N=a!==void 0?a:Z;g=N==="\\"?"\\\\\\\\":N.replace(be,"\\\\$&"),i.push(N),s.push("([^"+g+"]+)?"+g+"?")}});const j=new RegExp("^"+s.join("")+"("+(g===""?".":"[^"+g+"]")+"+)?$"),L=d.length-1,l=d.map((m,a)=>a===0&&e.reverseFillMask===!0?new RegExp("^"+c+"*"+m):a===L?new RegExp("^"+m+"("+(C===""?".":C)+"+)?"+(e.reverseFillMask===!0?"$":c+"*")):new RegExp("^"+m));v=i,S=m=>{const a=j.exec(m);a!==null&&(m=a.slice(1).join(""));const w=[],U=l.length;for(let Z=0,N=m;Z<U;Z++){const re=l[Z].exec(N);if(re===null)break;N=N.slice(re.shift().length),w.push(...re)}return w.length>0?w.join(""):m},f=i.map(m=>typeof m=="string"?m:V).join(""),h=f.split(V).join(n)}function B(r,n,c){const s=u.value,d=s.selectionEnd,i=s.value.length-d,x=E(r);n===!0&&A();const g=z(x),C=e.fillMask!==!1?q(g):g,j=k.value!==C;s.value!==C&&(s.value=C),j===!0&&(k.value=C),document.activeElement===s&&K(()=>{if(C===h){const l=e.reverseFillMask===!0?h.length:0;s.setSelectionRange(l,l,"forward");return}if(c==="insertFromPaste"&&e.reverseFillMask!==!0){const l=d-1;R.right(s,l,l);return}if(["deleteContentBackward","deleteContentForward"].indexOf(c)>-1){const l=e.reverseFillMask===!0?d===0?C.length>g.length?1:0:Math.max(0,C.length-(C===h?0:Math.min(g.length,i)+1))+1:d;s.setSelectionRange(l,l,"forward");return}if(e.reverseFillMask===!0)if(j===!0){const l=Math.max(0,C.length-(C===h?0:Math.min(g.length,i+1)));l===1&&d===1?s.setSelectionRange(l,l,"forward"):R.rightReverse(s,l,l)}else{const l=C.length-i;s.setSelectionRange(l,l,"backward")}else if(j===!0){const l=Math.max(0,f.indexOf(V),Math.min(g.length,d)-1);R.right(s,l,l)}else{const l=d-1;R.right(s,l,l)}});const L=e.unmaskedValue===!0?E(C):C;String(e.modelValue)!==L&&o(L,!0)}function D(r,n,c){const s=z(E(r.value));n=Math.max(0,f.indexOf(V),Math.min(s.length,n)),r.setSelectionRange(n,c,"forward")}const R={left(r,n,c,s){const d=f.slice(n-1).indexOf(V)===-1;let i=Math.max(0,n-1);for(;i>=0;i--)if(f[i]===V){n=i,d===!0&&n++;break}if(i<0&&f[n]!==void 0&&f[n]!==V)return R.right(r,0,0);n>=0&&r.setSelectionRange(n,s===!0?c:n,"backward")},right(r,n,c,s){const d=r.value.length;let i=Math.min(d,c+1);for(;i<=d;i++)if(f[i]===V){c=i;break}else f[i-1]===V&&(c=i);if(i>d&&f[c-1]!==void 0&&f[c-1]!==V)return R.left(r,d,d);r.setSelectionRange(s?n:c,c,"forward")},leftReverse(r,n,c,s){const d=M(r.value.length);let i=Math.max(0,n-1);for(;i>=0;i--)if(d[i-1]===V){n=i;break}else if(d[i]===V&&(n=i,i===0))break;if(i<0&&d[n]!==void 0&&d[n]!==V)return R.rightReverse(r,0,0);n>=0&&r.setSelectionRange(n,s===!0?c:n,"backward")},rightReverse(r,n,c,s){const d=r.value.length,i=M(d),x=i.slice(0,c+1).indexOf(V)===-1;let g=Math.min(d,c+1);for(;g<=d;g++)if(i[g-1]===V){c=g,c>0&&x===!0&&c--;break}if(g>d&&i[c-1]!==void 0&&i[c-1]!==V)return R.leftReverse(r,d,d);r.setSelectionRange(s===!0?n:c,c,"forward")}};function P(r){if(ze(r)===!0)return;const n=u.value,c=n.selectionStart,s=n.selectionEnd;if(r.keyCode===37||r.keyCode===39){const d=R[(r.keyCode===39?"right":"left")+(e.reverseFillMask===!0?"Reverse":"")];r.preventDefault(),d(n,c,s,r.shiftKey)}else r.keyCode===8&&e.reverseFillMask!==!0&&c===s?R.left(n,c,s,!0):r.keyCode===46&&e.reverseFillMask===!0&&c===s&&R.rightReverse(n,c,s,!0)}function z(r){if(r==null||r==="")return"";if(e.reverseFillMask===!0)return O(r);const n=v;let c=0,s="";for(let d=0;d<n.length;d++){const i=r[c],x=n[d];if(typeof x=="string")s+=x,i===x&&c++;else if(i!==void 0&&x.regex.test(i))s+=x.transform!==void 0?x.transform(i):i,c++;else return s}return s}function O(r){const n=v,c=f.indexOf(V);let s=r.length-1,d="";for(let i=n.length-1;i>=0&&s>-1;i--){const x=n[i];let g=r[s];if(typeof x=="string")d=x+d,g===x&&s--;else if(g!==void 0&&x.regex.test(g))do d=(x.transform!==void 0?x.transform(g):g)+d,s--,g=r[s];while(c===i&&g!==void 0&&x.regex.test(g));else return d}return d}function E(r){return typeof r!="string"||S===void 0?typeof r=="number"?S(""+r):r:S(r)}function q(r){return h.length-r.length<=0?r:e.reverseFillMask===!0&&r.length>0?h.slice(0,-r.length)+r:r+h.slice(r.length)}return{innerValue:k,hasMask:p,moveCursorForPaste:D,updateMaskValue:B,onMaskedKeydown:P}}const ct={name:String};function St(e={}){return(t,o,u)=>{t[o](y("input",{class:"hidden"+(u||""),...e.value}))}}function ft(e){return b(()=>e.name||e.for)}function vt(e,t){function o(){const u=e.modelValue;try{const f="DataTransfer"in window?new DataTransfer:"ClipboardEvent"in window?new ClipboardEvent("").clipboardData:void 0;return Object(u)===u&&("length"in u?Array.from(u):[u]).forEach(h=>{f.items.add(h)}),{files:f.files}}catch{return{files:void 0}}}return t===!0?b(()=>{if(e.type==="file")return o()}):b(o)}const mt=/[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]/,gt=/[\u4e00-\u9fff\u3400-\u4dbf\u{20000}-\u{2a6df}\u{2a700}-\u{2b73f}\u{2b740}-\u{2b81f}\u{2b820}-\u{2ceaf}\uf900-\ufaff\u3300-\u33ff\ufe30-\ufe4f\uf900-\ufaff\u{2f800}-\u{2fa1f}]/u,ht=/[\u3131-\u314e\u314f-\u3163\uac00-\ud7a3]/,bt=/[a-z0-9_ -]$/i;function yt(e){return function(o){if(o.type==="compositionend"||o.type==="change"){if(o.target.qComposing!==!0)return;o.target.qComposing=!1,e(o)}else o.type==="compositionupdate"&&o.target.qComposing!==!0&&typeof o.data=="string"&&(je.is.firefox===!0?bt.test(o.data)===!1:mt.test(o.data)===!0||gt.test(o.data)===!0||ht.test(o.data)===!0)===!0&&(o.target.qComposing=!0)}}var Mt=ye({name:"QInput",inheritAttrs:!1,props:{...at,...st,...ct,modelValue:{required:!1},shadowText:String,type:{type:String,default:"text"},debounce:[String,Number],autogrow:Boolean,inputClass:[Array,String,Object],inputStyle:[Array,String,Object]},emits:[...nt,"paste","change"],setup(e,{emit:t,attrs:o}){const u={};let f=NaN,h,v,S,p;const k=I(null),_=ft(e),{innerValue:F,hasMask:M,moveCursorForPaste:A,updateMaskValue:B,onMaskedKeydown:D}=dt(e,t,x,k),R=vt(e,!0),P=b(()=>ue(F.value)),z=yt(i),O=ot(),E=b(()=>e.type==="textarea"||e.autogrow===!0),q=b(()=>E.value===!0||["text","search","url","tel","password"].includes(e.type)),r=b(()=>{const a={...O.splitAttrs.listeners.value,onInput:i,onPaste:d,onChange:C,onBlur:j,onFocus:se};return a.onCompositionstart=a.onCompositionupdate=a.onCompositionend=z,M.value===!0&&(a.onKeydown=D),e.autogrow===!0&&(a.onAnimationend=g),a}),n=b(()=>{const a={tabindex:0,"data-autofocus":e.autofocus===!0||void 0,rows:e.type==="textarea"?6:void 0,"aria-label":e.label,name:_.value,...O.splitAttrs.attributes.value,id:O.targetUid.value,maxlength:e.maxlength,disabled:e.disable===!0,readonly:e.readonly===!0};return E.value===!1&&(a.type=e.type),e.autogrow===!0&&(a.rows=1),a});T(()=>e.type,()=>{k.value&&(k.value.value=e.modelValue)}),T(()=>e.modelValue,a=>{if(M.value===!0){if(v===!0&&(v=!1,String(a)===f))return;B(a)}else F.value!==a&&(F.value=a,e.type==="number"&&u.hasOwnProperty("value")===!0&&(h===!0?h=!1:delete u.value));e.autogrow===!0&&K(g)}),T(()=>e.autogrow,a=>{a===!0?K(g):k.value!==null&&o.rows>0&&(k.value.style.height="auto")}),T(()=>e.dense,()=>{e.autogrow===!0&&K(g)});function c(){we(()=>{const a=document.activeElement;k.value!==null&&k.value!==a&&(a===null||a.id!==O.targetUid.value)&&k.value.focus({preventScroll:!0})})}function s(){k.value!==null&&k.value.select()}function d(a){if(M.value===!0&&e.reverseFillMask!==!0){const w=a.target;A(w,w.selectionStart,w.selectionEnd)}t("paste",a)}function i(a){if(!a||!a.target||a.target.qComposing===!0)return;if(e.type==="file"){t("update:modelValue",a.target.files);return}const w=a.target.value;if(M.value===!0)B(w,!1,a.inputType);else if(x(w),q.value===!0&&a.target===document.activeElement){const{selectionStart:U,selectionEnd:Z}=a.target;U!==void 0&&Z!==void 0&&K(()=>{a.target===document.activeElement&&w.indexOf(a.target.value)===0&&a.target.setSelectionRange(U,Z)})}e.autogrow===!0&&g()}function x(a,w){p=()=>{e.type!=="number"&&u.hasOwnProperty("value")===!0&&delete u.value,e.modelValue!==a&&f!==a&&(f=a,w===!0&&(v=!0),t("update:modelValue",a),K(()=>{f===a&&(f=NaN)})),p=void 0},e.type==="number"&&(h=!0,u.value=a),e.debounce!==void 0?(clearTimeout(S),u.value=a,S=setTimeout(p,e.debounce)):p()}function g(){const a=k.value;if(a!==null){const w=a.parentNode.style,{overflow:U}=a.style;w.marginBottom=a.scrollHeight-1+"px",a.style.height="1px",a.style.overflow="hidden",a.style.height=a.scrollHeight+"px",a.style.overflow=U,w.marginBottom=""}}function C(a){z(a),clearTimeout(S),p!==void 0&&p(),t("change",a.target.value)}function j(a){a!==void 0&&se(a),clearTimeout(S),p!==void 0&&p(),h=!1,v=!1,delete u.value,e.type!=="file"&&setTimeout(()=>{k.value!==null&&(k.value.value=F.value!==void 0?F.value:"")})}function L(){return u.hasOwnProperty("value")===!0?u.value:F.value!==void 0?F.value:""}le(()=>{j()}),ke(()=>{e.autogrow===!0&&g()}),Object.assign(O,{innerValue:F,fieldClass:b(()=>`q-${E.value===!0?"textarea":"input"}`+(e.autogrow===!0?" q-textarea--autogrow":"")),hasShadow:b(()=>e.type!=="file"&&typeof e.shadowText=="string"&&e.shadowText.length>0),inputRef:k,emitValue:x,hasValue:P,floatingLabel:b(()=>P.value===!0||ue(e.displayValue)),getControl:()=>y(E.value===!0?"textarea":"input",{ref:k,class:["q-field__native q-placeholder",e.inputClass],style:e.inputStyle,...n.value,...r.value,...e.type!=="file"?{value:L()}:R.value}),getShadowControl:()=>y("div",{class:"q-field__native q-field__shadow absolute-bottom no-pointer-events"+(E.value===!0?"":" text-no-wrap")},[y("span",{class:"invisible"},L()),y("span",e.shadowText)])});const l=ut(O),m=Q();return Object.assign(m.proxy,{focus:c,select:s,getNativeElement:()=>k.value}),l}});export{Mt as Q,Ct as a,we as b,St as c,wt as r,ct as u};