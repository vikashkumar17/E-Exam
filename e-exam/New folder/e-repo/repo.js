const submit=document.getElementById("submit")
const fle=document.getElementById("filess");
const user=document.getElementById("userId");

const fnc=()=>{
    let uid=localStorage.getItem("itemKey");
    uid=JSON.parse(uid);
    // console.log(uid.userId);
     user.setAttribute("value",uid.userId);
}
fnc();