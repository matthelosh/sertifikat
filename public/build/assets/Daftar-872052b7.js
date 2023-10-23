import{r as m,k as u,o as w,f as N,a,u as c,Z as I,w as t,e as _,b as n,j as F,F as P,O as S,E as g,y as v}from"./app-fab798c0.js";import j from"./GuestLayout-1e0a3a28.js";/* empty css             */const L={class:"w-full flex justify-center p-6"},U={class:"flex items-center gap-2 mx-auto"},E=n("img",{src:"/img/logo.png",alt:"Logo",class:"w-12"},null,-1),A=n("div",null,[n("h1",{class:"text-xl font-bold text-blue-800 leading-5"},"Alsya"),n("small",{class:"text-slate-500 leading-4"},"Sertifikat")],-1),C={class:"w-full sm:w-[500px] bg-white p-4 rounded-lg shadow-lg card mx-auto"},O=n("h1",{class:"mb-2 border-b border-dashed pb-3 text-slate-600 font-bold tracking-wide"},"Formulir Pendaftaran",-1),B=["src"],J={__name:"Daftar",props:{canLogin:{type:Boolean},canRegister:{type:Boolean},laravelVersion:{type:String,required:!0},phpVersion:{type:String,required:!0}},setup(D){const l=m({no_id:"",nama:"",jk:"",instansi:"",alamat:"",kegiatan_id:"",sebagai:"",foto:""}),b=async()=>{let s=new FormData;s.append("peserta",JSON.stringify(l.value)),d.value!==null&&s.append("file_foto",d.value),await S.post(route("peserta.daftar"),s,{onSuccess:e=>{g({title:"Informasi",message:v("i",{style:"color: teal"},"Data peserta disimpan"),position:"top-right"})},onError:e=>{Object.keys(e).forEach(i=>{g({title:"Error",message:v("i",{style:"color: red"},e[i]),position:"top-right"})})}})},p=m(null),d=m(null),k=s=>{let e=s.target.files[0];l.value.foto=URL.createObjectURL(e),d.value=e},V=s=>{s.target.src="/img/avatar.png"};return(s,e)=>{const i=u("el-input"),r=u("el-form-item"),f=u("el-option"),h=u("el-select"),y=u("el-button"),x=u("el-form");return w(),N(P,null,[a(c(I),{title:"Daftar Peserta"}),a(j,null,{"toolbar-title":t(()=>[_(" Formulir Pendaftaran ")]),default:t(()=>[n("div",L,[n("div",U,[a(c(F),{href:s.route("guest")},{default:t(()=>[E]),_:1},8,["href"]),A])]),n("div",C,[O,n("img",{src:l.value.foto,alt:"Avatar",class:"w-24 mx-auto mb-2 rounded-full hover:cursor-pointer hover:shadow-lg",onError:V,onClick:e[0]||(e[0]=o=>p.value.click())},null,40,B),n("input",{type:"file",ref_key:"fileFoto",ref:p,class:"hidden",onChange:k,accept:".jpg, .png"},null,544),a(x,{model:l.value,"label-width":"120px","label-position":"left"},{default:t(()=>[a(r,{label:"No. Identitas"},{default:t(()=>[a(i,{modelValue:l.value.no_id,"onUpdate:modelValue":e[1]||(e[1]=o=>l.value.no_id=o),placeholder:"Isikan NIK / NIP / NISN"},null,8,["modelValue"])]),_:1}),a(r,{label:"Nama Lengkap"},{default:t(()=>[a(i,{modelValue:l.value.nama,"onUpdate:modelValue":e[2]||(e[2]=o=>l.value.nama=o),placeholder:"Isikan Nama Lengkap"},null,8,["modelValue"])]),_:1}),a(r,{label:"Jenis Kelamin"},{default:t(()=>[a(h,{modelValue:l.value.jk,"onUpdate:modelValue":e[3]||(e[3]=o=>l.value.jk=o)},{default:t(()=>[a(f,{label:"Laki-laki",value:"Laki-laki"}),a(f,{label:"Perempuan",value:"Perempuan"})]),_:1},8,["modelValue"])]),_:1}),a(r,{label:"Asal Instansi"},{default:t(()=>[a(i,{modelValue:l.value.instansi,"onUpdate:modelValue":e[4]||(e[4]=o=>l.value.instansi=o),placeholder:"Isikan Asalah Instansi"},null,8,["modelValue"])]),_:1}),a(r,{label:"Asal Instansi (Opsional)"},{default:t(()=>[a(i,{modelValue:l.value.alamat,"onUpdate:modelValue":e[5]||(e[5]=o=>l.value.alamat=o),type:"textarea",placeholder:"Isikan Alamat"},null,8,["modelValue"])]),_:1}),a(r,{label:"Status Kepesertaan"},{default:t(()=>[a(i,{modelValue:l.value.sebagai,"onUpdate:modelValue":e[6]||(e[6]=o=>l.value.sebagai=o),type:"textarea",placeholder:"Contoh: Peserta Tari Saman / Pemenang"},null,8,["modelValue"])]),_:1}),a(r,null,{default:t(()=>[a(y,{type:"primary",onClick:b},{default:t(()=>[_("Daftar")]),_:1})]),_:1})]),_:1},8,["model"])])]),_:1})],64)}}};export{J as default};
