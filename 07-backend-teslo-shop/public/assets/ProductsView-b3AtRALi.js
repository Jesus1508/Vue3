import{u as h,a as m}from"./get-product-image.action-B_L1PO_j.js";import{_ as x,g as u}from"./ButtonPagination.vue_vue_type_script_setup_true_lang-6O7uivOm.js";import{e as f,w as y,i as g,d as b,f as w,c as n,a as e,F as v,r as q,u as o,g as d,l as k,o as c,n as C,k as N,m as P,t as i}from"./index-Cq-1Whkx.js";const F=()=>{const l=g(),a=f(Number(l.query.page||1));return y(()=>l.query.page,t=>{a.value=Number(t||1),window.scrollTo({top:0,behavior:"smooth"})}),{page:a}},T={class:"bg-white px-5 py-2 rounded"},V=e("h1",{class:"text-3xl"},"Productos",-1),B={class:"py-8 w-full"},L={class:"shadow overflow-hidden rounded border-b border-gray-200"},Q={class:"min-w-full bg-white"},R=e("thead",{class:"bg-gray-800 text-white"},[e("tr",null,[e("th",{class:"w-10 text-left py-3 px-4 uppercase font-semibold text-sm"},"Imagen"),e("th",{class:"flex-1 text-left py-3 px-4 uppercase font-semibold text-sm"},"Título"),e("th",{class:"w-28 py-3 px-4 uppercase font-semibold text-sm"},"Precio"),e("th",{class:"w-60 text-left py-3 px-4 uppercase font-semibold text-sm"},"Tallas")])],-1),j={class:"text-gray-700"},z={class:"text-left py-3 px-4"},E=["src","alt"],K={class:"text-left py-3 px-4"},$={class:"text-left py-3 px-4"},A={class:"bg-blue-200 text-blue-600 py-1 px-3 rounded-full text-xs"},D={class:"text-left py-3 px-4"},M=b({__name:"ProductsView",setup(l){const a=h(),{page:t}=F(),{data:r=[]}=m({queryKey:["products",{page:t}],queryFn:()=>u(t.value)});return w(()=>{a.prefetchQuery({queryKey:["products",{page:t.value+1}],queryFn:()=>u(t.value+1)})}),(I,S)=>{const p=k("RouterLink");return c(),n("div",T,[V,e("div",B,[e("div",L,[e("table",Q,[R,e("tbody",j,[(c(!0),n(v,null,q(o(r),(s,_)=>(c(),n("tr",{key:s.id,class:C({"bg-gray-100":_%2===0})},[e("td",z,[e("img",{src:s.images[0],alt:s.title,class:"h-10 w-10 object-cover"},null,8,E)]),e("td",K,[d(p,{to:`/admin/products/${s.id}`,class:"hover:text-blue-500 hover:underline"},{default:N(()=>[P(i(s.title),1)]),_:2},1032,["to"])]),e("td",$,[e("span",A,i(s.price),1)]),e("td",D,i(s.sizes.join(",")),1)],2))),128))])])]),d(x,{page:o(t),"has-more-data":!!o(r)&&o(r).length<10},null,8,["page","has-more-data"])])])}}});export{M as default};
