import{T as m,h as f,o as a,c as g,w as s,a as o,u as e,Z as p,f as h,g as y,b as i,d as _,n as v,e as n,j as b}from"./app-4a72ab10.js";import x from"./GuestLayout-ef7fe023.js";import{P as k}from"./PrimaryButton-51d56e2f.js";import"./_plugin-vue_export-helper-c27b6911.js";const w=i("div",{class:"mb-4 text-sm text-gray-600"}," Thanks for signing up! Before getting started, could you verify your email address by clicking on the link we just emailed to you? If you didn't receive the email, we will gladly send you another. ",-1),V={key:0,class:"mb-4 font-medium text-sm text-green-600"},B=["onSubmit"],E={class:"mt-4 flex items-center justify-between"},L={__name:"VerifyEmail",props:{status:{type:String}},setup(r){const c=r,t=m({}),d=()=>{t.post(route("verification.send"))},u=f(()=>c.status==="verification-link-sent");return(l,N)=>(a(),g(x,null,{default:s(()=>[o(e(p),{title:"Email Verification"}),w,u.value?(a(),h("div",V," A new verification link has been sent to the email address you provided during registration. ")):y("",!0),i("form",{onSubmit:_(d,["prevent"])},[i("div",E,[o(k,{class:v({"opacity-25":e(t).processing}),disabled:e(t).processing},{default:s(()=>[n(" Resend Verification Email ")]),_:1},8,["class","disabled"]),o(e(b),{href:l.route("logout"),method:"post",as:"button",class:"underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"},{default:s(()=>[n("Log Out")]),_:1},8,["href"])])],40,B)]),_:1}))}};export{L as default};
