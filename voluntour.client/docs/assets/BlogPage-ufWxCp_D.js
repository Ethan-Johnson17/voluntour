import{i as k,s as b}from"./image-url.umd-BZ4ZBcU1.js";import{_ as x}from"./_plugin-vue_export-helper-x3n3nnut.js";import{j as y,f as w,o as a,c as l,a as t,i as g,t as r,F as u,B as _,d as v,C as P,g as h,h as m,p as C,m as T}from"./index-xP0HhpoQ.js";import"./_commonjsHelpers-5-cIlDoe.js";const V=k(b),B=`*[_type == "project"]{
  location,
    startDate,
    endDate,
    aboutImage,
    slug
}[0...50]`;let f=[],D=[],p=[];const U={name:"Blog",setup(){let n=y("");return{loading:!0,projects:[],upcomingProjects:f,currentProjects:D,pastProjects:p,selectedTab:n}},created(){this.fetchData()},methods:{imageUrlFor(n){return V.image(n)},fetchData(){this.loading=!0,b.fetch(B).then(n=>{n.forEach(s=>{s.startDate=this.formatDate(s.startDate),s.endDate=this.formatDate(s.endDate),this.sortProjects(s)}),this.loading=!1,this.projects=n,this.selectedTab="All"},n=>{})},formatDate(n){let s=new Date(n);return s.getMonth()+1+"-"+(s.getDate()+1)+"-"+s.getFullYear().toString().substring(2,4)},sortProjects(n){const s=new Date,i=new Date(n.startDate),o=new Date(n.endDate);switch(!0){case i>s:return f.push(n),"Upcoming";case(i<=s&&o>=s):return D.push(n),"Current";case o<s:return p.push(n),"Past";default:return"Unknown"}}}},c=n=>(C("data-v-2029844d"),n=n(),T(),n),j={class:"container-fluid"},A={class:"row"},I=c(()=>t("div",{class:"col-12 pt-3 d-flex justify-content-center"},[t("h1",{class:"title"},"Projects")],-1)),S={class:"col-12"},F={class:"nav justify-content-center"},N={class:"nav-item"},E={class:"nav-item"},q={class:"nav-item"},z={class:"nav-item"},L={class:"col-12"},M={class:"sm-text"},Y={key:0,class:"row"},G=c(()=>t("div",{class:"col-12 text-center"},[t("h3",null,"All Projects")],-1)),H=c(()=>t("img",{src:"https://placehold.co/1000x300"},null,-1)),J=c(()=>t("button",{class:"btn btn-primary"},"View",-1)),K={key:1,class:"row"},O=c(()=>t("div",{class:"col-12 text-center"},[t("h3",null,"Upcoming Projects")],-1)),Q=c(()=>t("img",{src:"https://placehold.co/1000x300"},null,-1)),R=c(()=>t("button",{class:"btn btn-primary"},"View",-1)),W={key:2,class:"row"},X=c(()=>t("div",{class:"col-12 text-center"},[t("h3",null,"Current Projects")],-1)),Z=c(()=>t("img",{src:"https://placehold.co/1000x300"},null,-1)),$=c(()=>t("button",{class:"btn btn-primary"},"View",-1)),tt={key:3,class:"row"},et=c(()=>t("div",{class:"col-12 text-center"},[t("h3",null,"Past Projects")],-1)),st=c(()=>t("img",{src:"https://placehold.co/1000x300"},null,-1)),nt={class:"text-gray"},ot=c(()=>t("button",{class:"btn btn-primary"},"View",-1));function at(n,s,i,o,lt,ct){const d=w("router-link");return a(),l("div",j,[t("div",A,[I,t("div",S,[t("ul",F,[t("li",N,[t("a",{class:"nav-link active","aria-current":"page",onClick:s[0]||(s[0]=e=>o.selectedTab="All")},"All")]),t("li",E,[t("a",{class:"nav-link",onClick:s[1]||(s[1]=e=>o.selectedTab="Current")},"Current")]),t("li",q,[t("a",{class:"nav-link",onClick:s[2]||(s[2]=e=>o.selectedTab="Upcoming")},"Upcoming")]),t("li",z,[t("a",{class:"nav-link",onClick:s[3]||(s[3]=e=>o.selectedTab="Past")},"Past")])])]),t("div",L,[t("p",M,[g(" Voluntour currently has "),t("strong",null,r(o.projects.length),1),g(" projects available: ")])])]),o.selectedTab=="All"?(a(),l("div",Y,[G,(a(!0),l(u,null,_(o.projects,e=>(a(),l("div",{class:"col-12 text-center",key:e.id},[H,t("h3",null,r(e.location),1),t("h5",{class:P({"text-grey":o.pastProjects.includes(e)})},r(e.startDate),3),h(d,{to:`/projects/${e.slug.current}`},{default:m(()=>[J]),_:2},1032,["to"])]))),128))])):o.selectedTab=="Upcoming"?(a(),l("div",K,[O,(a(!0),l(u,null,_(o.upcomingProjects,e=>(a(),l("div",{class:"col-12 text-center",key:e.id},[Q,t("h3",null,r(e.location),1),t("h5",null,r(e.startDate),1),h(d,{to:`/projects/${e.slug.current}`},{default:m(()=>[R]),_:2},1032,["to"])]))),128))])):o.selectedTab=="Current"?(a(),l("div",W,[X,(a(!0),l(u,null,_(o.currentProjects,e=>(a(),l("div",{class:"col-12 text-center",key:e.id},[Z,t("h3",null,r(e.location),1),t("h5",null,r(e.startDate),1),h(d,{to:`/projects/${e.slug.current}`},{default:m(()=>[$]),_:2},1032,["to"])]))),128))])):v("",!0),o.selectedTab=="Past"?(a(),l("div",tt,[et,(a(!0),l(u,null,_(o.pastProjects,e=>(a(),l("div",{class:"col-12 text-center",key:e.id},[st,t("h3",null,r(e.location),1),t("h5",nt,r(e.startDate),1),h(d,{to:`/projects/${e.slug.current}`},{default:m(()=>[ot]),_:2},1032,["to"])]))),128))])):v("",!0)])}const _t=x(U,[["render",at],["__scopeId","data-v-2029844d"]]);export{_t as default};
