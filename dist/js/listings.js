const d=new URLSearchParams(document.location.search);d.get("id");const r=localStorage.getItem("accessToken");localStorage.getItem("username");const m="https://nf-api.onrender.com/api/v1",g="/auction/listings?limit=12&sort=created&sortOrder=desc",p=`${m}${g}`,s=document.getElementById("all-lists");document.getElementById("post-image");const u=document.getElementById("login"),i=document.getElementById("logout"),f=document.getElementById("myIBuy");let h=[];const b='<a href="login.html"><button class="btn btn-outline-primary" name="Login">Login</button></a>',v='<a href="login.html"><button class="btn btn-outline-primary" name="Login">Logout</button></a>',y='<a href="profile.html"><button class="btn btn-outline-primary" name="MyiBuy">MyiBuy</button></a>';r?(i.innerHTML=v,f.innerHTML=y):u.innerHTML=b;i.addEventListener("click",e=>{e.preventDefault(),console.log("logout"),localStorage.clear(),window.location.href="./index.html"});async function L(e){try{const o=await(await fetch(e,{method:"GET"})).json();h=o,w(o,s),ownLists(o)}catch{}}L(p);function w(e){s.innerHTML="";let n="";for(let t of e){const l=new Date(t.endsAt).toLocaleString();document.title=t.title;const c=t.media!=""?`${t.media}`:"https://via.placeholder.com/150",a=t.description==null?"This Post has no description":`${t.description}`;n+=` <div class="card col-lg-3 col-md-6 col-sm-12 gap-3 shadow p-3 mb-5 bg-white rounded">
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
       `}s.innerHTML=n}
