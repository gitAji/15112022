const m=new URLSearchParams(document.location.search);m.get("id");const g="https://nf-api.onrender.com/api/v1",p="/auction/listings?limit=12&sort=created&sortOrder=desc",u=`${g}${p}`,i=document.getElementById("all-lists");document.getElementById("post-image");const f=document.getElementById("login"),h=document.getElementById("logout"),v=document.getElementById("myIBuy");let l=[];const y='<a href="login.html">Logout</a>',L=' <a href="profile.html">My iBuy</a>';localStorage.getItem("accessToken")?(h.innerHTML=y,v.innerHTML=L):f.innerHTML='<a href="login.html">Login</a>';async function w(e){try{const n=await(await fetch(e,{method:"GET"})).json();l=n,c(n,i),ownLists(n)}catch{}}w(u);function c(e){i.innerHTML="";let s="";for(let t of e){const o=new Date(t.endsAt).toLocaleString();document.title=t.title;const a=t.media!=""?`${t.media}`:"https://via.placeholder.com/150",r=t.description==null?"This Post has no description":`${t.description}`;s+=` <div class="card col-lg-3 col-md-6 col-sm-12 gap-3 shadow p-3 mb-5 bg-white rounded">
    <a href="/alist.html?id=${t.id}">
        <div class="card-img-top">
          <img class="img-thumbnail border-2" src="${a}" alt="" srcset="" width="100%" />
        </div>
        <div class="card-title fs-4 d-flex p-2 col-12 fw-bold flex-wrap">
        ${t.title}
        </div>
      </a>
   
      <div class="card-description d-flex p-2 col-12">
        <p>
        ${r}
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
         Ends At: ${o}
        </p>
        </div>
    </div>
       `}i.innerHTML=s}const d=document.getElementById("searchText");document.getElementById("ends-soon");document.getElementById("latest");d.addEventListener("keyup",B);function B(){const e=d.value.trim();localStorage.setItem("filterQuery",e);const s=l.filter(t=>{const n=t.title.toLowerCase(),o=e.toLowerCase();return n.startsWith(o)||n.includes(o)});c(s),s.length===0&&(i.innerHTML=`<div=class="text-primary"> No result found for "${e}" </div><div class="text-warning">Use back key to clear!</div>`)}
