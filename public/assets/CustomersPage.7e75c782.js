import{b as d,a as p,Q as n}from"./QItem.249c0f50.js";import{_ as u,x as r,y as i,z as e,J as m,A as a,G as _,H as f,I as x,j as C,a8 as g,C as b,D as h,Q}from"./index.c6e9e2f2.js";import{Q as k}from"./QPage.65ba001b.js";import{b as v}from"./global.b41e9797.js";import"./axios.81fe9a6a.js";const y={setup(){const t=v();t.getAllCustomers();function o(l){t.setCustomer(l.Empresa)}return{globalStore:t,selectedCustomer:o}}},w=m("div",{class:"text-center text-h4 text-weight-bold"}," Cliente ",-1),S={style:{"min-width":"90vw"}};function B(t,o,l,c,E,I){return r(),i(k,{class:"flex-center q-pa-md"},{default:e(()=>[w,m("div",S,[a(d,{bordered:"",separator:""},{default:e(()=>[(r(!0),_(x,null,f(c.globalStore.customersList,s=>C((r(),i(p,{class:"q-py-md",clickable:"",key:s.Empresa,onClick:D=>c.selectedCustomer(s)},{default:e(()=>[a(n,null,{default:e(()=>[b(h(s.Empresa),1)]),_:2},1024),a(n,{avatar:""},{default:e(()=>[a(Q,{color:"primary",name:"login"})]),_:1})]),_:2},1032,["onClick"])),[[g]])),128))]),_:1})])]),_:1})}var A=u(y,[["render",B]]);export{A as default};
