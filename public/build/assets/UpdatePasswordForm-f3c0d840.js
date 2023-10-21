import{r as p,T as _,o as i,f as m,b as o,a as e,u as r,w,e as v,g as y,M as g,d as V}from"./app-4a72ab10.js";import{_ as n,a as l,b as d}from"./TextInput-1c665078.js";import{P as x}from"./PrimaryButton-51d56e2f.js";import"./_plugin-vue_export-helper-c27b6911.js";const P=o("header",null,[o("h2",{class:"text-lg font-medium text-gray-900"},"Update Password"),o("p",{class:"mt-1 text-sm text-gray-600"}," Ensure your account is using a long, random password to stay secure. ")],-1),b=["onSubmit"],k={class:"flex items-center gap-4"},S={key:0,class:"text-sm text-gray-600"},E={__name:"UpdatePasswordForm",setup(N){const u=p(null),c=p(null),s=_({current_password:"",password:"",password_confirmation:""}),f=()=>{s.put(route("password.update"),{preserveScroll:!0,onSuccess:()=>s.reset(),onError:()=>{s.errors.password&&(s.reset("password","password_confirmation"),u.value.focus()),s.errors.current_password&&(s.reset("current_password"),c.value.focus())}})};return(U,a)=>(i(),m("section",null,[P,o("form",{onSubmit:V(f,["prevent"]),class:"mt-6 space-y-6"},[o("div",null,[e(n,{for:"current_password",value:"Current Password"}),e(l,{id:"current_password",ref_key:"currentPasswordInput",ref:c,modelValue:r(s).current_password,"onUpdate:modelValue":a[0]||(a[0]=t=>r(s).current_password=t),type:"password",class:"mt-1 block w-full",autocomplete:"current-password"},null,8,["modelValue"]),e(d,{message:r(s).errors.current_password,class:"mt-2"},null,8,["message"])]),o("div",null,[e(n,{for:"password",value:"New Password"}),e(l,{id:"password",ref_key:"passwordInput",ref:u,modelValue:r(s).password,"onUpdate:modelValue":a[1]||(a[1]=t=>r(s).password=t),type:"password",class:"mt-1 block w-full",autocomplete:"new-password"},null,8,["modelValue"]),e(d,{message:r(s).errors.password,class:"mt-2"},null,8,["message"])]),o("div",null,[e(n,{for:"password_confirmation",value:"Confirm Password"}),e(l,{id:"password_confirmation",modelValue:r(s).password_confirmation,"onUpdate:modelValue":a[2]||(a[2]=t=>r(s).password_confirmation=t),type:"password",class:"mt-1 block w-full",autocomplete:"new-password"},null,8,["modelValue"]),e(d,{message:r(s).errors.password_confirmation,class:"mt-2"},null,8,["message"])]),o("div",k,[e(x,{disabled:r(s).processing},{default:w(()=>[v("Save")]),_:1},8,["disabled"]),e(g,{"enter-active-class":"transition ease-in-out","enter-from-class":"opacity-0","leave-active-class":"transition ease-in-out","leave-to-class":"opacity-0"},{default:w(()=>[r(s).recentlySuccessful?(i(),m("p",S,"Saved.")):y("",!0)]),_:1})])],40,b)]))}};export{E as default};
