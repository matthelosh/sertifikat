import{r as c,o as s,f as o,a,w as i,u as l,Z as f,e as _,b as t,i as x,F as u,q as g,t as h,s as b,x as v}from"./app-4a72ab10.js";import{I as d}from"./iconify-389aba64.js";import k from"./AuthenticatedLayout-90ead708.js";import"./_plugin-vue_export-helper-c27b6911.js";const w=t("title",null,"Buat Sertifikat",-1),S={class:"toolbar w-full h-10 flex items-center justify-between gap-2 border-b pb-4"},y=t("h1",null,"Buat Sertifikat",-1),B={class:"toobar-items flex items-center gap-3"},V=t("p",null,"Pilih Kegiatan",-1),j=["value"],N={class:"content w-full h-full relative text-center p-3"},$={__name:"Sertifikat",props:{kegiatans:Array},setup(p){const n=c(null),m=c("/img/sert/hijau-pgri.jpg");return(z,r)=>(s(),o(u,null,[a(l(f),null,{default:i(()=>[w]),_:1}),a(k,null,{"page-title":i(()=>[a(l(d),{icon:"mdi:certificate",class:"text-slate-500 text-xl"}),_(" Sertifikat ")]),default:i(()=>[t("div",S,[y,t("div",B,[V,x(t("select",{class:"rounded py-1","onUpdate:modelValue":r[0]||(r[0]=e=>n.value=e)},[(s(!0),o(u,null,g(p.kegiatans,e=>(s(),o("option",{value:e.kode},h(e.nama),9,j))),256))],512),[[b,n.value]]),t("button",null,[a(l(d),{icon:"mdi:printer",class:"text-xl text-slate-600"})])])]),t("div",N,[t("div",{style:v(`margin: 10px auto; background: url(${m.value}); background-size:cover;background-position: bottom center; height:793.700787402px; width:1247.244094488px; position: absolute;box-shadow:  2px 3px 5px rgba(0,0,0,0.5);`)},null,4)])]),_:1})],64))}};export{$ as default};
