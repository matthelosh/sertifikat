import{r as _,k as r,o as y,c as V,w as l,a as e,u as i,e as d,b as m,t as u,l as K,p as C,m as I,_ as P}from"./app-fab798c0.js";import{I as g}from"./iconify-bc0a7eae.js";/* empty css             *//* empty css                     */import{_ as A}from"./_plugin-vue_export-helper-c27b6911.js";const B=o=>(C("data-v-3d870852"),o=o(),I(),o),N=["onClick"],S=B(()=>m("button",{class:"bg-red-500 py-1 px-3 rounded-lg text-white shadow-md my-4"}," Hapus ",-1)),D={__name:"Kegiatan",props:{kegiatans:Array},setup(o){const b=K(()=>P(()=>import("./AuthenticatedLayout-4888b5ae.js"),["assets/AuthenticatedLayout-4888b5ae.js","assets/app-fab798c0.js","assets/app-5a4ba6a9.css","assets/iconify-bc0a7eae.js","assets/_plugin-vue_export-helper-c27b6911.js","assets/AuthenticatedLayout-5d898788.css"])),p=_(""),h=c=>{alert(c.nama)},s=_(!1),f=()=>window.innerWidth<=414?"300":"30%";return(c,n)=>{const v=r("el-input"),x=r("el-button"),t=r("el-table-column"),w=r("el-table"),k=r("el-dialog");return y(),V(i(b),null,{"page-title":l(()=>[e(i(g),{icon:"mdi:human-male-board-poll",class:"text-slate-500 text-xl"}),d(" Data Kegiatan ")]),"items-toolbar":l(()=>[e(v,{type:"text",placeholder:"Cari",modelValue:p.value,"onUpdate:modelValue":n[0]||(n[0]=a=>p.value=a),clearable:""},{prefix:l(()=>[e(i(g),{icon:"mdi:magnify"})]),_:1},8,["modelValue"]),e(x,{onClick:n[1]||(n[1]=a=>s.value=!0)},{default:l(()=>[d(" Baru ")]),_:1})]),default:l(()=>[e(w,{data:o.kegiatans,class:"w-full bg-white text-xs",stripe:""},{default:l(()=>[e(t,{"header-align":"center",align:"center",prop:"kode",label:"Kode"}),e(t,{"header-align":"center",label:"Nama Kegiatan"},{default:l(a=>[m("p",{class:"text-sky-500 hover:cursor-pointer hover:underline leading-4",onClick:L=>h(a.row)},u(a.row.nama),9,N)]),_:1}),e(t,{"header-align":"center",prop:"mulai",label:"Tanggal"}),e(t,{"header-align":"center",prop:"penyelenggara",label:"Penyelenggara"}),e(t,{"header-align":"center",prop:"lokasi",label:"Lokasi"}),e(t,{"header-align":"center",prop:"ttd_1",label:"Penanggungjawab"}),e(t,{"header-align":"center",align:"center",prop:"keterangan",label:"Keterangan"}),e(t,{"header-align":"center",align:"center",label:"Peserta"},{default:l(a=>[d(u(a.row.pesertas.length),1)]),_:1}),e(t,{"header-align":"center",align:"center",label:"Opsi"},{default:l(a=>[S]),_:1})]),_:1},8,["data"]),e(k,{modelValue:s.value,"onUpdate:modelValue":n[2]||(n[2]=a=>s.value=a),"modal-class":"bg-slate-400",modal:"",width:f},null,8,["modelValue"])]),_:1})}}},$=A(D,[["__scopeId","data-v-3d870852"]]);export{$ as default};
