import"./alert.29446747.js";import"./listings.67e33edd.js";const u=localStorage.getItem("accessToken"),r=localStorage.getItem("username"),l="https://nf-api.onrender.com/api/v1",d="/auction/profiles/",v=`${l}${d}${r}`,f=`${l}${d}${r}/media`,$=document.getElementById("user");document.getElementById("avatar");document.getElementById("edit");document.getElementById("name");document.getElementById("email");document.getElementById("credit");document.getElementById("wins");document.getElementById("lists");async function y(t){try{const o={method:"GET",headers:{Authorization:`Bearer ${u}`}},e=await fetch(t,o);console.log(e);const a=await e.json();h(a),console.warn(a)}catch(o){console.warn(o)}}y(v);function h(t){let e=`
    <div class="container card gap-3 justify-content-between">
    <div class="row">
      <div class=" py-3 col-lg-3">
            <img class="img-thumbnail p-3 border-0" src="${t.avatar!=""?`${t.avatar}`:"https://via.placeholder.com/150"}" alt="" srcset="" width="100%" id="avatar" />
            <button type="button" class="btn btn-primary m-2" data-bs-toggle="modal" data-bs-target="#avatarModal"> Edit Avatar</button>

            </div>
        <div class="card-body bg-gray p-3 col-lg-9">
            <h5 class="card-title">Name: ${t.name}</h5>
            <p class="card-text">Email: ${t.email}</p>
            <p class="card-text">Credits: ${t.credits}</p>
            <p class="card-text">Wins: ${t.wins.length}</p>
            <p class="card-text">Listings: ${t._count.listings}</p>
            </div>
    </a>

</div>`;$.innerHTML=e}const w=document.getElementById("avatarUrl"),E=document.getElementById("save"),c=document.getElementById("update-message");E.addEventListener("click",B);function B(){const t={avatar:w.value.trim()};if(console.log(t),t.avatar===""){c.innerHTML=`
    <div class="text-danger">
    <p>Please enter a valid url</p>
    </div>
  `;return}async function o(e,a){try{const s={method:"PUT",headers:{Authorization:`Bearer ${localStorage.getItem("accessToken")}`,"Content-Type":"application/json"},body:JSON.stringify(a)},i=await fetch(e,s),m=await i.json();return i.ok?(c.innerHTML=`
        <p>Avatar updated successfully</p>
      `,setTimeout(()=>{window.location.reload()},2e3)):c.innerHTML=`
        <div class="text-danger">
        <p>Avatar update failed!</p>
        </div>
      `,m}catch{}}o(f,t)}const I=document.getElementById("active-listings"),p=localStorage.getItem("username"),T=localStorage.getItem("accessToken"),b="https://nf-api.onrender.com/api/v1",L="/auction/profiles/",g=`${b}${L}${p}/listings`;console.log(p);console.log(g);async function A(t){try{const o={method:"GET",headers:{"Content-Type":"application/json",authorization:`Bearer ${T}`}};console.log(t);const e=await fetch(t,o);console.log(e);const a=await e.json();console.warn(a),S(a,I)}catch{}}A(g);function S(t,o){console.log(t);for(let e of t){const a=new Date(e.created).toLocaleString(),n=new Date(e.endsAt).toLocaleString();document.createElement("div"),console.log(e.title);let s=`
    <a href="aList.html?id=${e.id}" class="card-link">
    <div class="card gap-5 justify-content-between">
    <div class="row">
        <div class=" py-3 col-lg-3">
            <img class="img-thumbnail p-3 border-0" src="${e.media}" alt="" srcset="" width="100%" id="avatar" />
            </div>
        <div class="card-body bg-gray p-3 col-lg-9">
            <h5 class="card-title">Title: ${e.title}</h5>
            <p class="card-text">Description: ${e.description}</p>
            <p class="card-text">Total Bids: ${e._count.bids}</p>
            <p class="card-text">Created: ${a}</p>
            <p class="card-text">Ends At: ${n}</p>
            
            </div>    </a>
           <div class="card-footer bg-gray p-3 col-lg-9">
           </div>
           
    </div>

    `;o.innerHTML+=s}}document.getElementById("bids-won");const k=localStorage.getItem("accessToken"),P=localStorage.getItem("username"),U="https://nf-api.onrender.com/api/v1",x="/auction/profiles/",j=`${U}${x}${P}`;async function _(t){try{const o={method:"GET",headers:{Authorization:`Bearer ${k}`}},e=await fetch(t,o);console.log(e);const a=await e.json();listOfBidsWon(a),console.log(a)}catch(o){console.warn(o)}}_(j);
