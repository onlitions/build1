"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[676],{1676:(e,s,a)=>{a.r(s),a.d(s,{default:()=>O});var r=a(1319),n=a(4647),i=a(9281),t=a(2080),l=a(5043),d=a(6545);const o={name:"",email:"",message:""};function m(e){let s={};return e.name||(s.name="Name is required"),e.email?/\S+@\S+\.\S+/.test(e.email)||(s.email="Email address is invalid"):s.email="Email address is required",e.message||(s.message="Message is required"),s}var c=a(5639),h=a(9);const p=(0,h.Ay)("p")`
  margin-top: 1.5rem;
`,x=(0,h.Ay)("div")`
  position: relative;
  max-width: 700px;
`,g=(0,h.Ay)("div")`
  border-radius: 3rem;
  max-width: 400px;
`;var u=a(579);const y=(0,i.C)()((e=>{let{title:s,content:a,t:r}=e;return(0,u.jsxs)(x,{children:[(0,u.jsx)("h6",{children:r(s)}),(0,u.jsx)(g,{children:(0,u.jsx)(p,{children:r(a)})})]})})),j=(0,h.Ay)("div")`
  display: inline-block;
  width: 100%;
  padding: 10px 5px;
`,v=(0,h.Ay)("input")`
  font-size: 0.875rem;
`,b=(0,h.Ay)("div")`
  display: inline-block;
  width: 100%;
  padding: 10px 5px;
  margin-bottom: -0.625rem;
`,A=(0,h.Ay)("textarea")`
  resize: none;
  font-size: 0.875rem;
  height: 185px;
`,f=(0,h.Ay)("label")`
  display: block;
  padding-bottom: 10px;
  text-transform: capitalize;
`,w=(0,i.C)()((e=>{let{name:s,placeholder:a,onChange:r,t:n}=e;return(0,u.jsxs)(j,{children:[(0,u.jsx)(f,{htmlFor:s,children:n(s)}),(0,u.jsx)(v,{placeholder:n(a),name:s,id:s,onChange:r})]})})),C=(0,i.C)()((e=>{let{name:s,placeholder:a,onChange:r,t:n}=e;return(0,u.jsxs)(b,{children:[(0,u.jsx)(f,{htmlFor:s,children:n(s)}),(0,u.jsx)(A,{placeholder:n(a),id:s,name:s,onChange:r})]})})),S=(0,h.Ay)("div")`
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
`,O=(0,i.C)()((e=>{let{title:s,content:a,id:i,t:h}=e;const{values:p,errors:x,handleChange:g,handleSubmit:j}=(e=>{const[s,a]=(0,l.useState)({values:{...o},errors:{...o}});return{handleChange:e=>{e.persist();const{name:s,value:r}=e.target;a((e=>({...e,values:{...e.values,[s]:r},errors:{...e.errors,[s]:""}})))},handleSubmit:async r=>{r.preventDefault();const n=s.values,i=e(n);a((e=>({...e,errors:i})));try{if(Object.values(i).every((e=>""===e))){const e=await fetch("/api/subscribe",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});if(e.ok)r.target.reset(),a((()=>({values:{...o},errors:{...o}}))),d.A.success({message:"Success",description:"Your message has been sent!"});else{const s=await e.json();d.A.error({message:"Error",description:s.message||"There was an error sending your message, please try again later."})}}}catch(t){d.A.error({message:"Error",description:"Failed to submit form. Please try again later."})}},values:s.values,errors:s.errors}})(m),v=e=>{let{type:s}=e;const a=x[s];return(0,u.jsx)(q,{children:a})};return(0,u.jsx)(S,{id:i,children:(0,u.jsxs)(r.A,{justify:"space-between",align:"middle",children:[(0,u.jsx)(n.A,{lg:12,md:11,sm:24,xs:24,children:(0,u.jsx)(t.q7,{direction:"left",triggerOnce:!0,children:(0,u.jsx)(y,{title:s,content:a})})}),(0,u.jsx)(n.A,{lg:12,md:12,sm:24,xs:24,children:(0,u.jsx)(t.q7,{direction:"right",triggerOnce:!0,children:(0,u.jsxs)(k,{autoComplete:"off",onSubmit:j,children:[(0,u.jsxs)(n.A,{span:24,children:[(0,u.jsx)(w,{type:"text",name:"name",placeholder:"Your Name",value:p.name||"",onChange:g}),(0,u.jsx)(v,{type:"name"})]}),(0,u.jsxs)(n.A,{span:24,children:[(0,u.jsx)(w,{type:"text",name:"email",placeholder:"Your Email",value:p.email||"",onChange:g}),(0,u.jsx)(v,{type:"email"})]}),(0,u.jsxs)(n.A,{span:24,children:[(0,u.jsx)(C,{placeholder:"Your Message",value:p.message||"",name:"message",onChange:g}),(0,u.jsx)(v,{type:"message"})]}),(0,u.jsx)(E,{children:(0,u.jsx)(c.$,{name:"submit",children:h("Submit")})})]})})})]})})}))}}]);
//# sourceMappingURL=676.b96b724c.chunk.js.map