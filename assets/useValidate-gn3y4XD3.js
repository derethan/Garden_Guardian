import{e as n}from"./index-HkzAGyco.js";function d(s){const[i,o]=n.useState({});return[i,()=>{const r={};return["firstName","lastName","email","password","confirmPassword","newPassword","gardenName","gardenLocation","gardenType","groupName","garden","label","gardenID"].forEach(e=>{e in s&&!s[e]&&(r[e]="This Field is required")}),"email"in s&&!/\S+@\S+\.\S+/.test(s.email)&&s.email!==""&&s.email!=="demo"&&(r.email="Email address is invalid"),"password"in s&&s.password.length<6&&s.password!==""&&s.password!=="demo"?r.password="Password must be at least 6 characters":!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$/.test(s.password)&&"password"in s&&s.password!=="demo"&&(r.password="Password must contain at least one uppercase letter, one lowercase letter, and one number"),"confirmPassword"in s&&s.confirmPassword!==s.password&&s.confirmPassword!==""&&(r.confirmPassword="Passwords do not match"),o(r),Object.keys(r).length===0},o]}export{d as u};