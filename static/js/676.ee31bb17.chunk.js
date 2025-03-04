"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[676],{1676:(e,s,a)=>{a.r(s),a.d(s,{default:()=>O});var n=a(1319),r=a(4647),i=a(9281),t=a(2080),l=a(5043),d=a(6545);const o={name:"",email:"",message:""};function m(e){let s={};return e.name||(s.name="Name is required"),e.email?/\S+@\S+\.\S+/.test(e.email)||(s.email="Email address is invalid"):s.email="Email address is required",e.message||(s.message="Message is required"),s}var c=a(5639),h=a(9);const p=(0,h.Ay)("p")`
  margin-top: 1.5rem;
`,x=(0,h.Ay)("div")`
  position: relative;
  max-width: 700px;
`,u=(0,h.Ay)("div")`
  border-radius: 3rem;
  max-width: 400px;
`;var g=a(579);const y=(0,i.C)()((e=>{let{title:s,content:a,t:n}=e;return(0,g.jsxs)(x,{children:[(0,g.jsx)("h6",{children:n(s)}),(0,g.jsx)(u,{children:(0,g.jsx)(p,{children:n(a)})})]})})),j=(0,h.Ay)("div")`
  display: inline-block;
  width: 100%;
  padding: 10px 5px;
`,v=(0,h.Ay)("input")`
  font-size: 0.875rem;
  color: white;
`,b=(0,h.Ay)("div")`
  display: inline-block;
  width: 100%;
  padding: 10px 5px;
  margin-bottom: -0.625rem;
`,f=(0,h.Ay)("textarea")`
  resize: none;
  font-size: 0.875rem;
  height: 185px;
`,A=(0,h.Ay)("label")`
  display: block;
  padding-bottom: 10px;
  text-transform: capitalize;
`,w=(0,i.C)()((e=>{let{name:s,placeholder:a,onChange:n,t:r}=e;return(0,g.jsxs)(j,{children:[(0,g.jsx)(A,{htmlFor:s,children:r(s)}),(0,g.jsx)(v,{placeholder:r(a),name:s,id:s,onChange:n})]})})),C=(0,i.C)()((e=>{let{name:s,placeholder:a,onChange:n,t:r}=e;return(0,g.jsxs)(b,{children:[(0,g.jsx)(A,{htmlFor:s,children:r(s)}),(0,g.jsx)(f,{placeholder:r(a),id:s,name:s,onChange:n})]})})),S=(0,h.Ay)("div")`
  padding: 5rem 0;

  @media only screen and (max-width: 1024px) {
    padding: 3rem 0;
  }
`,k=(0,h.Ay)("form")`
  width: 100%;
  max-width: 520px;

  @media only screen and (max-width: 1045px) {
    max-width: 100%;
    margin-top: 2rem;
  }
`,q=(0,h.Ay)("span")`
  display: block;
  font-weight: 600;
  color: rgb(255, 130, 92);
  height: 0.775rem;
  padding: 0 0.675rem;
`,E=(0,h.Ay)("div")`
  text-align: end;
  position: relative;

  @media only screen and (max-width: 414px) {
    padding-top: 0.75rem;
  }
`,O=(0,i.C)()((e=>{let{title:s,content:a,id:i,t:h}=e;const{values:p,errors:x,handleChange:u,handleSubmit:j}=(e=>{const[s,a]=(0,l.useState)({values:{...o},errors:{...o}});return{handleChange:e=>{e.persist();const{name:s,value:n}=e.target;a((e=>({...e,values:{...e.values,[s]:n},errors:{...e.errors,[s]:""}})))},handleSubmit:async n=>{n.preventDefault();const r=e(s.values);try{if(0===Object.keys(r).length){const e=await fetch("/api/contact",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(s.values)}),a=await e.json();if(!a.success)throw new Error(a.error||"Failed to submit form");d.A.success({message:"Success",description:"Your message has been sent!"})}else a((e=>({...e,errors:r})))}catch(i){d.A.error({message:"Error",description:"Failed to submit form. Please try again later."})}},values:s.values,errors:s.errors}})(m),v=e=>{let{type:s}=e;const a=x[s];return(0,g.jsx)(q,{children:a})};return(0,g.jsx)(S,{id:i,children:(0,g.jsxs)(n.A,{justify:"space-between",align:"middle",children:[(0,g.jsx)(r.A,{lg:12,md:11,sm:24,xs:24,children:(0,g.jsx)(t.q7,{direction:"left",triggerOnce:!0,children:(0,g.jsx)(y,{title:s,content:a})})}),(0,g.jsx)(r.A,{lg:12,md:12,sm:24,xs:24,children:(0,g.jsx)(t.q7,{direction:"right",triggerOnce:!0,children:(0,g.jsxs)(k,{autoComplete:"off",onSubmit:j,children:[(0,g.jsxs)(r.A,{span:24,children:[(0,g.jsx)(w,{type:"text",name:"name",placeholder:"Your Name",value:p.name||"",onChange:u}),(0,g.jsx)(v,{type:"name"})]}),(0,g.jsxs)(r.A,{span:24,children:[(0,g.jsx)(w,{type:"text",name:"email",placeholder:"Your Email",value:p.email||"",onChange:u}),(0,g.jsx)(v,{type:"email"})]}),(0,g.jsxs)(r.A,{span:24,children:[(0,g.jsx)(C,{placeholder:"Your Message",value:p.message||"",name:"message",onChange:u}),(0,g.jsx)(v,{type:"message"})]}),(0,g.jsx)(E,{children:(0,g.jsx)(c.$,{name:"submit",children:h("Submit")})})]})})})]})})}))}}]);
//# sourceMappingURL=676.ee31bb17.chunk.js.map