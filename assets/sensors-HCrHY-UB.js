import{r as D,i as S,j as e,c as C,e as x,o as k,B as s,T as i,q as h,D as R,u as F,G as _,t as N}from"./index-Umy1MsMC.js";/* empty css               */import{P as z}from"./PrimaryButton-BV2pp94o.js";import{C as M,a as E}from"./Container-Fm4wLwwE.js";import{D as H,a as $,b as q,c as L}from"./DialogTitle-Ry5EIuYi.js";import{T}from"./TextField-eXxlhztJ.js";import{S as U,u as G}from"./SummaryColumn-4Eknf_SA.js";import{B as V}from"./ButtonCard-cY0yktCa.js";import{s as J,g as K}from"./getIcon-rcNiCEvb.js";import"./Button-VI1DzgHi.js";import"./Select-cb1cM4Gr.js";import"./Opacity-d3B3Zb7E.js";var b={},Q=S;Object.defineProperty(b,"__esModule",{value:!0});var O=b.default=void 0,X=Q(D()),Y=e;O=b.default=(0,X.default)((0,Y.jsx)("path",{d:"M17 1H7c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2m0 18H7V5h10zM12 6.72c-1.96 0-3.5 1.52-3.5 3.47h1.75c0-.93.82-1.75 1.75-1.75s1.75.82 1.75 1.75c0 1.75-2.63 1.57-2.63 4.45h1.76c0-1.96 2.62-2.19 2.62-4.45 0-1.96-1.54-3.47-3.5-3.47m-.88 8.8h1.76v1.76h-1.76z"}),"DeviceUnknown");const Z=({display:t,setShowAddDeviceModal:r})=>{const{setHasDevice:a,setDeviceID:d}=C(),[n,g]=x.useState({device_id:"",device_name:""}),[,,,,v]=k(),[u,m]=x.useState(!1),[o,l]=x.useState(""),p=j=>{const{name:f,value:c}=j.target;g(P=>({...P,[f]:c}))},B=async j=>{const f="https://api.gardenguardian.app:8443/";j.preventDefault();try{const c=await v(f+"users/addDevice",n);if(!c||c.status!==201){console.log("There was an error adding the device. Please try again."),m(!0),l(c?c.message:"There was an error adding the device. Please try again.");return}console.log("Device added successfully"),d(n.device_id),a(!0),r(!1)}catch(c){console.error(c)}};return t?e.jsx("div",{className:"modal-wrapper",children:e.jsx(M,{sx:{display:"flex",alignItems:"center",justifyContent:"center"},children:e.jsxs(E,{variant:"light",sx:{padding:2,maxWidth:{md:"100%",lg:"100%"}},component:"form",onSubmit:B,noValidate:!0,children:[e.jsx(O,{fontSize:"large",sx:{color:"green"}}),e.jsx(H,{children:"Add a Device"}),e.jsxs($,{children:[e.jsx(q,{sx:{paddingBottom:2},children:"Oops! It looks like you haven't added a device yet. Please enter your Device ID to get started."}),e.jsxs(s,{sx:{display:"flex",flexDirection:"column",gap:2},children:[e.jsx(T,{id:"deviceIDField",name:"device_id",label:"Device ID",type:"text",margin:"normal",color:"primary",size:"small",variant:"outlined",value:n.ID,onChange:p,error:u,helperText:o}),e.jsx(T,{id:"deviceNameField",name:"device_name",label:"Enter a Name for your Device",type:"text",margin:"normal",color:"primary",size:"small",variant:"outlined",value:n.Name,onChange:p})]})]}),e.jsx(L,{sx:{justifyContent:"center"},children:e.jsx(z,{text:"Submit",type:"submit"})})]})})}):null};var w={},ee=S;Object.defineProperty(w,"__esModule",{value:!0});var W=w.default=void 0,te=ee(D()),re=e;W=w.default=(0,te.default)((0,re.jsx)("path",{d:"M12 20c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8m0 2c5.52 0 10-4.48 10-10S17.52 2 12 2 2 6.48 2 12s4.48 10 10 10m-1-10v4h2v-4h3l-4-4-4 4z"}),"ArrowCircleUpOutlined");var I={},ae=S;Object.defineProperty(I,"__esModule",{value:!0});var A=I.default=void 0,se=ae(D()),ne=e;A=I.default=(0,se.default)((0,ne.jsx)("path",{d:"M12 4c4.41 0 8 3.59 8 8s-3.59 8-8 8-8-3.59-8-8 3.59-8 8-8m0-2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m1 10V8h-2v4H8l4 4 4-4z"}),"ArrowCircleDownOutlined");const y=({difference:t,sensor:r})=>e.jsx(s,{sx:{display:"flex",gap:"1rem"},children:t[r]!==0&&!isNaN(t[r])?t[r]>0?e.jsxs(e.Fragment,{children:[e.jsx(W,{}),e.jsxs(i,{variant:"caption",fontWeight:"bold",children:["Increase By ",t[r]," ",r.includes("Humidity")?"%":"°C"]})]}):e.jsxs(e.Fragment,{children:[e.jsx(A,{}),e.jsxs(i,{variant:"caption",fontWeight:"bold",children:["Decrease By ",Math.abs(t[r])," ",r.includes("Humidity")?"%":"°C"]})]}):null}),ie=({sensorData:t,difference:r})=>{const a=t[h.temperature],d=t[h.humidity],n=t[h.waterTemp];return e.jsxs(s,{name:"sensorBanner",sx:{backgroundColor:"background.lightGrey",padding:"1rem"},children:[e.jsxs(s,{sx:{display:"flex",justifyContent:"space-between"},children:[e.jsx(y,{difference:r,sensor:h.temperature}),e.jsx(i,{variant:"caption",fontWeight:"bold",children:"Current Conditions"})]}),e.jsx(s,{sx:{textAlign:"left"},children:e.jsxs(i,{variant:"h4",fontWeight:"bold",children:["Temperature: ",a,"°C"]})}),e.jsxs(s,{sx:{display:"flex",justifyContent:"space-between",paddingTop:"1rem"},children:[e.jsxs(s,{children:[e.jsx(y,{difference:r,sensor:h.humidity}),e.jsxs(i,{variant:"body1",fontWeight:"bold",children:["Humidity: ",d,"%"]})]}),e.jsx(R,{orientation:"vertical",flexItem:!0,sx:{width:"5px"}}),e.jsxs(s,{children:[e.jsx(y,{difference:r,sensor:h.waterTemp}),e.jsxs(i,{variant:"body1",fontWeight:"bold",children:["Water Temp: ",n,"°C"]})]})]})]})},oe=(t,r)=>{switch(t){case"PH":return r[t]<=5||r[t]>=7?"error.main":r[t]<5.8||r[t]>6.3?"warning.main":"success.main";default:return"primary.secondary"}},le=({sensor:t,sensorData:r,Icon:a})=>e.jsxs(e.Fragment,{children:[a&&e.jsx(a,{sx:{fontSize:80,color:oe(t,r)}}),e.jsxs(s,{children:[e.jsx(i,{variant:"caption",fontWeight:"bold",color:"text.subtitle",children:"Latest Reading"}),e.jsxs(i,{variant:"body1",color:"text.cardTitle",fontWeight:600,children:[r[t],J(t)]})]})]}),ce=({sensorData:t})=>{const r=F();return e.jsxs(s,{sx:{paddingTop:"3rem"},children:[e.jsx(i,{variant:"h5",sx:{fontWeight:"bold"},children:"Sensor Information"}),e.jsx(_,{container:!0,spacing:2,sx:{paddingTop:"1.5rem"},children:Object.keys(t).map((a,d)=>e.jsx(_,{item:!0,xs:6,children:e.jsx(V,{title:a,sx:{color:"text.cardTitle"},onClick:()=>{const n="/sensor/"+a.toLowerCase().replace(/\s/g,"");r(n,{state:{measurement:a,latestReading:t[a]}})},children:e.jsx(le,{sensor:a,sensorData:t,Icon:K(a)})})},d))})]})},de=()=>{const{deviceID:t}=C(),{getLatestReading:r}=G(),[a,d]=x.useState({}),[n,g]=x.useState({}),v=(u,m)=>{const o={};for(const l in u)m.hasOwnProperty(l)&&(o[l]=Math.round((u[l]-m[l])*100)/100);return o};return x.useEffect(()=>{async function u(){const o=await r(t);if(localStorage.getItem("sensorData")){const l=JSON.parse(localStorage.getItem("sensorData")),p=v(o,l);g(p)}localStorage.setItem("sensorData",JSON.stringify(o)),d(o)}u();const m=setInterval(()=>{u()},1*60*1e3);return()=>clearInterval(m)},[]),e.jsxs(M,{maxWidth:"xl",sx:{display:"flex",gap:"1rem",padding:"1.5rem"},children:[e.jsxs(s,{sx:{width:{xs:"100%",md:"70%"}},children:[e.jsx(ie,{sensorData:a,difference:n}),e.jsx(ce,{sensorData:a})]}),e.jsx(R,{orientation:"vertical",flexItem:!0,sx:{display:{xs:"none",md:"block"}}}),e.jsx(s,{sx:{width:"30%",display:{xs:"none",md:"block"}},children:e.jsx(U,{})})]})},Ce=()=>{const{hasDevice:t}=C(),[r,a]=x.useState(!0);return e.jsx(e.Fragment,{children:t?e.jsx(de,{}):e.jsxs(e.Fragment,{children:[e.jsx(N,{}),e.jsx(Z,{display:r,setShowAddDeviceModal:a})]})})};export{Ce as default};
