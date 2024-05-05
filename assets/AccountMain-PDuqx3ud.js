import{h as N,g as H,Y as I,j as o,s as S,a6 as te,X as P,af as _,ae as V,_ as h,f,l as O,ax as X,I as pe,m as ne,a8 as fe,n as F,$ as ge,V as W,al as B,ay as me,az as Y,aA as he,k as oe,a as se,ak as xe,aB as ve,C as U,B as M,T as j,G as A,D as Ce,e as re,p as be,b as ye,t as we,aw as ke}from"./index-9KGOSi0w.js";import{P as ae}from"./PrimaryButton-3MC7SjIi.js";import{u as je}from"./useValidate-qaTt-Qyd.js";import{T as q}from"./TextField-zT0J0S18.js";import{C as Se}from"./Close-Y0Sa6FWm.js";function Ee(e){return H("MuiAlert",e)}const Pe=N("MuiAlert",["root","action","icon","message","filled","colorSuccess","colorInfo","colorWarning","colorError","filledSuccess","filledInfo","filledWarning","filledError","outlined","outlinedSuccess","outlinedInfo","outlinedWarning","outlinedError","standard","standardSuccess","standardInfo","standardWarning","standardError"]),K=Pe,Ae=I(o.jsx("path",{d:"M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"}),"SuccessOutlined"),Re=I(o.jsx("path",{d:"M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"}),"ReportProblemOutlined"),Me=I(o.jsx("path",{d:"M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"ErrorOutline"),Le=I(o.jsx("path",{d:"M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"}),"InfoOutlined"),Oe=["action","children","className","closeText","color","components","componentsProps","icon","iconMapping","onClose","role","severity","slotProps","slots","variant"],Ie=fe(),Te=e=>{const{variant:n,color:s,severity:t,classes:a}=e,d={root:["root",`color${P(s||t)}`,`${n}${P(s||t)}`,`${n}`],icon:["icon"],message:["message"],action:["action"]};return F(d,Ee,a)},ze=S(te,{name:"MuiAlert",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:s}=e;return[n.root,n[s.variant],n[`${s.variant}${P(s.color||s.severity)}`]]}})(({theme:e})=>{const n=e.palette.mode==="light"?_:V,s=e.palette.mode==="light"?V:_;return h({},e.typography.body2,{backgroundColor:"transparent",display:"flex",padding:"6px 16px",variants:[...Object.entries(e.palette).filter(([,t])=>t.main&&t.light).map(([t])=>({props:{colorSeverity:t,variant:"standard"},style:{color:e.vars?e.vars.palette.Alert[`${t}Color`]:n(e.palette[t].light,.6),backgroundColor:e.vars?e.vars.palette.Alert[`${t}StandardBg`]:s(e.palette[t].light,.9),[`& .${K.icon}`]:e.vars?{color:e.vars.palette.Alert[`${t}IconColor`]}:{color:e.palette[t].main}}})),...Object.entries(e.palette).filter(([,t])=>t.main&&t.light).map(([t])=>({props:{colorSeverity:t,variant:"outlined"},style:{color:e.vars?e.vars.palette.Alert[`${t}Color`]:n(e.palette[t].light,.6),border:`1px solid ${(e.vars||e).palette[t].light}`,[`& .${K.icon}`]:e.vars?{color:e.vars.palette.Alert[`${t}IconColor`]}:{color:e.palette[t].main}}})),...Object.entries(e.palette).filter(([,t])=>t.main&&t.dark).map(([t])=>({props:{colorSeverity:t,variant:"filled"},style:h({fontWeight:e.typography.fontWeightMedium},e.vars?{color:e.vars.palette.Alert[`${t}FilledColor`],backgroundColor:e.vars.palette.Alert[`${t}FilledBg`]}:{backgroundColor:e.palette.mode==="dark"?e.palette[t].dark:e.palette[t].main,color:e.palette.getContrastText(e.palette[t].main)})}))]})}),De=S("div",{name:"MuiAlert",slot:"Icon",overridesResolver:(e,n)=>n.icon})({marginRight:12,padding:"7px 0",display:"flex",fontSize:22,opacity:.9}),$e=S("div",{name:"MuiAlert",slot:"Message",overridesResolver:(e,n)=>n.message})({padding:"8px 0",minWidth:0,overflow:"auto"}),Z=S("div",{name:"MuiAlert",slot:"Action",overridesResolver:(e,n)=>n.action})({display:"flex",alignItems:"flex-start",padding:"4px 0 0 16px",marginLeft:"auto",marginRight:-8}),Q={success:o.jsx(Ae,{fontSize:"inherit"}),warning:o.jsx(Re,{fontSize:"inherit"}),error:o.jsx(Me,{fontSize:"inherit"}),info:o.jsx(Le,{fontSize:"inherit"})},Be=f.forwardRef(function(n,s){const t=Ie({props:n,name:"MuiAlert"}),{action:a,children:d,className:u,closeText:g="Close",color:p,components:x={},componentsProps:m={},icon:v,iconMapping:y=Q,onClose:w,role:c="alert",severity:l="success",slotProps:C={},slots:r={},variant:i="standard"}=t,b=O(t,Oe),k=h({},t,{color:p,severity:l,variant:i,colorSeverity:p||l}),E=Te(k),L={slots:h({closeButton:x.CloseButton,closeIcon:x.CloseIcon},r),slotProps:h({},m,C)},[R,T]=X("closeButton",{elementType:pe,externalForwardedProps:L,ownerState:k}),[z,D]=X("closeIcon",{elementType:Se,externalForwardedProps:L,ownerState:k});return o.jsxs(ze,h({role:c,elevation:0,ownerState:k,className:ne(E.root,u),ref:s},b,{children:[v!==!1?o.jsx(De,{ownerState:k,className:E.icon,children:v||y[l]||Q[l]}):null,o.jsx($e,{ownerState:k,className:E.message,children:d}),a!=null?o.jsx(Z,{ownerState:k,className:E.action,children:a}):null,a==null&&w?o.jsx(Z,{ownerState:k,className:E.action,children:o.jsx(R,h({size:"small","aria-label":g,title:g,color:"inherit",onClick:w},T,{children:o.jsx(z,h({fontSize:"small"},D))}))}):null]}))}),We=Be;function J(e){return e.substring(2).toLowerCase()}function Ne(e,n){return n.documentElement.clientWidth<e.clientX||n.documentElement.clientHeight<e.clientY}function He(e){const{children:n,disableReactTree:s=!1,mouseEvent:t="onClick",onClickAway:a,touchEvent:d="onTouchEnd"}=e,u=f.useRef(!1),g=f.useRef(null),p=f.useRef(!1),x=f.useRef(!1);f.useEffect(()=>(setTimeout(()=>{p.current=!0},0),()=>{p.current=!1}),[]);const m=ge(n.ref,g),v=W(c=>{const l=x.current;x.current=!1;const C=B(g.current);if(!p.current||!g.current||"clientX"in c&&Ne(c,C))return;if(u.current){u.current=!1;return}let r;c.composedPath?r=c.composedPath().indexOf(g.current)>-1:r=!C.documentElement.contains(c.target)||g.current.contains(c.target),!r&&(s||!l)&&a(c)}),y=c=>l=>{x.current=!0;const C=n.props[c];C&&C(l)},w={ref:m};return d!==!1&&(w[d]=y(d)),f.useEffect(()=>{if(d!==!1){const c=J(d),l=B(g.current),C=()=>{u.current=!0};return l.addEventListener(c,v),l.addEventListener("touchmove",C),()=>{l.removeEventListener(c,v),l.removeEventListener("touchmove",C)}}},[v,d]),t!==!1&&(w[t]=y(t)),f.useEffect(()=>{if(t!==!1){const c=J(t),l=B(g.current);return l.addEventListener(c,v),()=>{l.removeEventListener(c,v)}}},[v,t]),o.jsx(f.Fragment,{children:f.cloneElement(n,w)})}function Fe(e={}){const{autoHideDuration:n=null,disableWindowBlurListener:s=!1,onClose:t,open:a,resumeHideDuration:d}=e,u=me();f.useEffect(()=>{if(!a)return;function r(i){i.defaultPrevented||(i.key==="Escape"||i.key==="Esc")&&(t==null||t(i,"escapeKeyDown"))}return document.addEventListener("keydown",r),()=>{document.removeEventListener("keydown",r)}},[a,t]);const g=W((r,i)=>{t==null||t(r,i)}),p=W(r=>{!t||r==null||u.start(r,()=>{g(null,"timeout")})});f.useEffect(()=>(a&&p(n),u.clear),[a,n,p,u]);const x=r=>{t==null||t(r,"clickaway")},m=u.clear,v=f.useCallback(()=>{n!=null&&p(d??n*.5)},[n,d,p]),y=r=>i=>{const b=r.onBlur;b==null||b(i),v()},w=r=>i=>{const b=r.onFocus;b==null||b(i),m()},c=r=>i=>{const b=r.onMouseEnter;b==null||b(i),m()},l=r=>i=>{const b=r.onMouseLeave;b==null||b(i),v()};return f.useEffect(()=>{if(!s&&a)return window.addEventListener("focus",v),window.addEventListener("blur",m),()=>{window.removeEventListener("focus",v),window.removeEventListener("blur",m)}},[s,a,v,m]),{getRootProps:(r={})=>{const i=h({},Y(e),Y(r));return h({role:"presentation"},r,i,{onBlur:y(i),onFocus:w(i),onMouseEnter:c(i),onMouseLeave:l(i)})},onClickAway:x}}function Ue(e){return H("MuiSnackbarContent",e)}N("MuiSnackbarContent",["root","message","action"]);const Ge=["action","className","message","role"],_e=e=>{const{classes:n}=e;return F({root:["root"],action:["action"],message:["message"]},Ue,n)},Ve=S(te,{name:"MuiSnackbarContent",slot:"Root",overridesResolver:(e,n)=>n.root})(({theme:e})=>{const n=e.palette.mode==="light"?.8:.98,s=he(e.palette.background.default,n);return h({},e.typography.body2,{color:e.vars?e.vars.palette.SnackbarContent.color:e.palette.getContrastText(s),backgroundColor:e.vars?e.vars.palette.SnackbarContent.bg:s,display:"flex",alignItems:"center",flexWrap:"wrap",padding:"6px 16px",borderRadius:(e.vars||e).shape.borderRadius,flexGrow:1,[e.breakpoints.up("sm")]:{flexGrow:"initial",minWidth:288}})}),Xe=S("div",{name:"MuiSnackbarContent",slot:"Message",overridesResolver:(e,n)=>n.message})({padding:"8px 0"}),Ye=S("div",{name:"MuiSnackbarContent",slot:"Action",overridesResolver:(e,n)=>n.action})({display:"flex",alignItems:"center",marginLeft:"auto",paddingLeft:16,marginRight:-8}),qe=f.forwardRef(function(n,s){const t=oe({props:n,name:"MuiSnackbarContent"}),{action:a,className:d,message:u,role:g="alert"}=t,p=O(t,Ge),x=t,m=_e(x);return o.jsxs(Ve,h({role:g,square:!0,elevation:6,className:ne(m.root,d),ownerState:x,ref:s},p,{children:[o.jsx(Xe,{className:m.message,ownerState:x,children:u}),a?o.jsx(Ye,{className:m.action,ownerState:x,children:a}):null]}))}),Ke=qe;function Ze(e){return H("MuiSnackbar",e)}N("MuiSnackbar",["root","anchorOriginTopCenter","anchorOriginBottomCenter","anchorOriginTopRight","anchorOriginBottomRight","anchorOriginTopLeft","anchorOriginBottomLeft"]);const Qe=["onEnter","onExited"],Je=["action","anchorOrigin","autoHideDuration","children","className","ClickAwayListenerProps","ContentProps","disableWindowBlurListener","message","onBlur","onClose","onFocus","onMouseEnter","onMouseLeave","open","resumeHideDuration","TransitionComponent","transitionDuration","TransitionProps"],et=e=>{const{classes:n,anchorOrigin:s}=e,t={root:["root",`anchorOrigin${P(s.vertical)}${P(s.horizontal)}`]};return F(t,Ze,n)},ee=S("div",{name:"MuiSnackbar",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:s}=e;return[n.root,n[`anchorOrigin${P(s.anchorOrigin.vertical)}${P(s.anchorOrigin.horizontal)}`]]}})(({theme:e,ownerState:n})=>{const s={left:"50%",right:"auto",transform:"translateX(-50%)"};return h({zIndex:(e.vars||e).zIndex.snackbar,position:"fixed",display:"flex",left:8,right:8,justifyContent:"center",alignItems:"center"},n.anchorOrigin.vertical==="top"?{top:8}:{bottom:8},n.anchorOrigin.horizontal==="left"&&{justifyContent:"flex-start"},n.anchorOrigin.horizontal==="right"&&{justifyContent:"flex-end"},{[e.breakpoints.up("sm")]:h({},n.anchorOrigin.vertical==="top"?{top:24}:{bottom:24},n.anchorOrigin.horizontal==="center"&&s,n.anchorOrigin.horizontal==="left"&&{left:24,right:"auto"},n.anchorOrigin.horizontal==="right"&&{right:24,left:"auto"})})}),tt=f.forwardRef(function(n,s){const t=oe({props:n,name:"MuiSnackbar"}),a=se(),d={enter:a.transitions.duration.enteringScreen,exit:a.transitions.duration.leavingScreen},{action:u,anchorOrigin:{vertical:g,horizontal:p}={vertical:"bottom",horizontal:"left"},autoHideDuration:x=null,children:m,className:v,ClickAwayListenerProps:y,ContentProps:w,disableWindowBlurListener:c=!1,message:l,open:C,TransitionComponent:r=ve,transitionDuration:i=d,TransitionProps:{onEnter:b,onExited:k}={}}=t,E=O(t.TransitionProps,Qe),L=O(t,Je),R=h({},t,{anchorOrigin:{vertical:g,horizontal:p},autoHideDuration:x,disableWindowBlurListener:c,TransitionComponent:r,transitionDuration:i}),T=et(R),{getRootProps:z,onClickAway:D}=Fe(h({},R)),[ie,G]=f.useState(!0),le=xe({elementType:ee,getSlotProps:z,externalForwardedProps:L,ownerState:R,additionalProps:{ref:s},className:[T.root,v]}),ce=$=>{G(!0),k&&k($)},de=($,ue)=>{G(!1),b&&b($,ue)};return!C&&ie?null:o.jsx(He,h({onClickAway:D},y,{children:o.jsx(ee,h({},le,{children:o.jsx(r,h({appear:!0,in:C,timeout:i,direction:g==="top"?"down":"up",onEnter:de,onExited:ce},E,{children:m||o.jsx(Ke,h({message:l,action:u},w))}))}))}))}),nt=tt,ot=({user:e,isMobile:n})=>{const s={"Full Name":e.name,"Email Address":e.email,"Your location":e.location?e.location:"location Not Set"};return o.jsx(U,{maxWidth:"lg",sx:{mt:4},children:o.jsxs(M,{sx:{backgroundColor:"background.lightGrey",padding:"1rem"},children:[o.jsx(j,{variant:"h5",fontWeight:"bold",children:"Profile Information"}),o.jsx(A,{container:!0,spacing:3,sx:{mt:2},children:Object.keys(s).map(t=>o.jsxs(A,{item:!0,xs:12,md:4,sx:{display:"flex",flexDirection:{xs:"column",md:"row"},justifyContent:"center"},children:[o.jsxs(M,{sx:{display:"flex",flexDirection:"column",gap:1,ml:n?0:"auto",mr:n?0:"auto"},children:[o.jsx(j,{variant:"body1",color:"primary.secondary",fontWeight:"bold",children:t}),o.jsx(j,{variant:"subtitle2",color:"text.secondary",fontWeight:"bold",children:s[t]})]}),Object.keys(s).indexOf(t)!==Object.keys(s).length-1&&o.jsx(Ce,{orientation:n?"horizontal":"vertical",flexItem:!0,sx:{mt:n?2:0,mb:n?2:0,ml:n?0:"auto"}})]},t))})]})})},st=()=>{const{user:e}=re(),[n,s,t,a,d]=be(),[u,g]=f.useState({password:"",newPassword:""}),[p,x]=f.useState({open:!1,horizontal:"right",vertical:"bottom"}),[m,v,y]=je(u),w=l=>{y({});const{name:C,value:r}=l.target;g({...u,[C]:r})},c=l=>{if(l.preventDefault(),e.email==="demo"){y({password:"Password cannot be changed on a demo account"});return}if(v()){if(u.password===u.newPassword){y({password:"New password cannot be the same as the old password",newPassword:"New password cannot be the same as the old password"});return}d("https://api.gardenguardian.app:8443/"+"users/changePassword",u).then(r=>{if(r.status===401){y({password:r.message});return}r.status===200&&a(r.message),g({password:"",newPassword:""}),x({...p,open:!0})})}else console.log("Form is invalid")};return o.jsxs(U,{maxWidth:"lg",sx:{mt:4},children:[o.jsxs(M,{sx:{backgroundColor:"background.lightGrey",padding:"1rem"},children:[o.jsx(j,{variant:"h5",fontWeight:"bold",children:"Account Settings"}),o.jsx(A,{container:!0,spacing:3,sx:{mt:2},children:o.jsxs(A,{item:!0,xs:12,md:12,sx:{display:"flex",flexDirection:"column",justifyContent:"space-evenly",alignItems:"center"},children:[o.jsx(j,{variant:"body2",color:"text.secondary",fontWeight:"bold",children:"Change Password"}),o.jsxs(M,{type:"form",component:"form",noValidate:!0,autoComplete:"false",sx:{display:"flex",flexDirection:"column",justifyContent:"space-between",alignItems:"center",gap:"1rem",pt:2},onSubmit:c,children:[o.jsx(q,{type:"password",name:"password",label:"Password",autoComplete:"off",value:u.password,onChange:w,placeholder:"Current Password",color:"primary",size:"small",variant:"outlined",sx:{backgroundColor:"background.lightGrey",width:{xs:"100%",sm:"300px"}},error:!!m.password,helperText:m.password}),o.jsx(q,{type:"password",name:"newPassword",label:"New Password",value:u.newPassword,onChange:w,placeholder:"New Password",color:"primary",size:"small",variant:"outlined",sx:{backgroundColor:"background.lightGrey",width:{xs:"100%",md:"300px"}},error:!!m.newPassword,helperText:m.newPassword}),o.jsx(ae,{type:"submit",text:"Change Password"})]})]})})]}),o.jsx(nt,{anchorOrigin:{vertical:p.vertical,horizontal:p.horizontal},open:p.open,autoHideDuration:6e3,onClose:()=>x({...p,open:!1}),children:o.jsx(We,{onClose:()=>x({...p,open:!1}),severity:"success",variant:"filled",sx:{width:"100%"},children:s})})]})},rt=({device:e})=>{const{isDeviceActive:n}=we(),[s,t]=f.useState(!1);return f.useEffect(()=>{(async()=>{const d=await n(e);t(d)})()},[e,n]),o.jsx(A,{item:!0,xs:10,sm:6,md:4,sx:{display:"flex",justifyContent:"center",alignItems:"center"},children:o.jsxs(ye,{variant:"light",sx:{p:2,borderRadius:4,width:"100%"},children:[o.jsx(j,{variant:"h6",fontWeight:"bold",children:e.deviceID}),o.jsxs(j,{variant:"body2",color:"grey",children:["Status:"," ",o.jsx(j,{component:"span",sx:{color:s?"green":"red"},children:s?"Online":"Offline"})]}),o.jsx(ae,{text:"Remove"})]})})},at=({hasDevice:e,devices:n})=>o.jsx(U,{maxWidth:"lg",sx:{mt:4},children:o.jsxs(M,{sx:{padding:"1rem"},children:[o.jsx(j,{variant:"h5",fontWeight:"bold",children:"Linked Devices"}),e?o.jsx(A,{container:!0,spacing:2,sx:{mt:2,justifyContent:"center",alignItems:"center"},children:n.map(s=>o.jsx(rt,{device:s},s.deviceID))}):o.jsx(j,{variant:"body1",sx:{mt:2},children:"No devices linked"})]})}),pt=()=>{const e=se(),n=ke(e.breakpoints.down("md")),{user:s,hasDevice:t,devices:a}=re();return o.jsxs(o.Fragment,{children:[o.jsx(ot,{user:s,isMobile:n}),o.jsx(st,{user:s,isMobile:n}),o.jsx(at,{hasDevice:t,devices:a})]})};export{pt as default};
