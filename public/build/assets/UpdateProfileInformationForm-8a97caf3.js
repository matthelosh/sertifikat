import{S as g,T as _,o as n,f as r,b as s,a,u as e,e as m,w as u,j as x,i as h,N as V,g as f,M as b,d as k}from"./app-fab798c0.js";import{_ as p,a as v,b as y}from"./TextInput-26440d17.js";import{P as w}from"./PrimaryButton-615d065f.js";import"./_plugin-vue_export-helper-c27b6911.js";const S=s("header",null,[s("h2",{class:"text-lg font-medium text-gray-900"},"Profile Information"),s("p",{class:"mt-1 text-sm text-gray-600"}," Update your account's profile information and email address. ")],-1),N={key:0},B={class:"text-sm mt-2 text-gray-800"},E={class:"mt-2 font-medium text-sm text-green-600"},P={class:"flex items-center gap-4"},U={key:0,class:"text-sm text-gray-600"},I={__name:"UpdateProfileInformationForm",props:{mustVerifyEmail:{type:Boolean},status:{type:String}},setup(d){const l=g().props.auth.user,t=_({name:l.name,email:l.email});return(c,o)=>(n(),r("section",null,[S,s("form",{onSubmit:o[2]||(o[2]=k(i=>e(t).patch(c.route("profile.update")),["prevent"])),class:"mt-6 space-y-6"},[s("div",null,[a(p,{for:"name",value:"Name"}),a(v,{id:"name",type:"text",class:"mt-1 block w-full",modelValue:e(t).name,"onUpdate:modelValue":o[0]||(o[0]=i=>e(t).name=i),required:"",autofocus:"",autocomplete:"name"},null,8,["modelValue"]),a(y,{class:"mt-2",message:e(t).errors.name},null,8,["message"])]),s("div",null,[a(p,{for:"email",value:"Email"}),a(v,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:e(t).email,"onUpdate:modelValue":o[1]||(o[1]=i=>e(t).email=i),required:"",autocomplete:"username"},null,8,["modelValue"]),a(y,{class:"mt-2",message:e(t).errors.email},null,8,["message"])]),d.mustVerifyEmail&&e(l).email_verified_at===null?(n(),r("div",N,[s("p",B,[m(" Your email address is unverified. "),a(e(x),{href:c.route("verification.send"),method:"post",as:"button",class:"underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"},{default:u(()=>[m(" Click here to re-send the verification email. ")]),_:1},8,["href"])]),h(s("div",E," A new verification link has been sent to your email address. ",512),[[V,d.status==="verification-link-sent"]])])):f("",!0),s("div",P,[a(w,{disabled:e(t).processing},{default:u(()=>[m("Save")]),_:1},8,["disabled"]),a(b,{"enter-active-class":"transition ease-in-out","enter-from-class":"opacity-0","leave-active-class":"transition ease-in-out","leave-to-class":"opacity-0"},{default:u(()=>[e(t).recentlySuccessful?(n(),r("p",U,"Saved.")):f("",!0)]),_:1})])],32)]))}};export{I as default};
