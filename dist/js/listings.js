const d=new URLSearchParams(document.location.search);d.get("id");const r=localStorage.getItem("accessToken");localStorage.getItem("username");const m="https://nf-api.onrender.com/api/v1",g="/auction/listings?limit=15&sort=created&sortOrder=desc",u=`${m}${g}`,s=document.getElementById("all-lists");document.getElementById("post-image");const p=document.getElementById("login"),b=document.getElementById("join-us"),i=document.getElementById("logout"),h=document.getElementById("myIBuy");let f=[];const v='<a href="register.html"><button class="btn btn-link" name="join-us">Join Us</button></a>',L='<a href="login.html"><button class="btn btn-link" name="Login">Login</button></a>',y='<a href="login.html"><button class="btn btn-link" name="Login">Logout</button></a>',B='<a href="profile.html"><button class="btn btn-link" name="MyiBuy">MyiBuy</button></a>';r?(i.innerHTML=y,h.innerHTML=B):(p.innerHTML=L,b.innerHTML=v);i.addEventListener("click",n=>{n.preventDefault(),localStorage.clear(),window.location.href="./index.html"});async function w(n){try{const o=await(await fetch(n,{method:"GET"})).json();f=o,E(o,s),ownLists(o)}catch{}}w(u);function E(n){s.innerHTML="";let e="";for(let t of n){const l=new Date(t.endsAt).toLocaleString();document.title=t.title;const c=t.media!=""?`${t.media}`:"https://via.placeholder.com/150",a=t.description==null?"This Post has no description":`${t.description}`;e+=` <div class="card col-lg-3 col-md-6 col-sm-12 gap-3 shadow p-3 mb-5 bg-white rounded">
    <a href="/alist.html?id=${t.id}">
        <div class="card-img-top">
          <img class="img-thumbnail border-2" src="${c}" alt="" srcset="" width="100%" />
        </div>
        <div class="card-title fs-4 d-flex p-2 col-12 fw-bold flex-wrap">
        ${t.title}
        </div>
      </a>
   
      <div class="card-description d-flex p-2 col-12">
        <p>
        ${a}
        </p>
      </div>
      <div class="card-subtitle d-flex p-0 col-12">
        <p class="text-muted">
          Bids: ${t._count.bids}
        </p>
      </div>
      <div class="card-subtitle d-flex p-0 col-12">
        <p class="text-muted">
          Tags: ${t.tags}
        </p>
  
      </div>
      <div class="card-subtitle d-flex p-0 col-12">
        <p class="text-muted">
         Ends At: ${l}
        </p>
        </div>
    </div>
       `}s.innerHTML=e}
