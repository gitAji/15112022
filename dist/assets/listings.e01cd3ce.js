const u=new URLSearchParams(document.location.search);u.get("id");const p="https://nf-api.onrender.com/api/v1",f="/auction/listings?limit=12&sort=created&sortOrder=desc",h=`${p}${f}`,i=document.getElementById("all-lists");document.getElementById("post-image");const y=document.getElementById("login"),v=document.getElementById("logout"),L=document.getElementById("myIBuy");let c=[];const w='<a href="login.html">Logout</a>',B=' <a href="profile.html">My iBuy</a>';localStorage.getItem("accessToken")?(v.innerHTML=w,L.innerHTML=B):y.innerHTML='<a href="login.html">Login</a>';async function E(e){try{const o=await(await fetch(e,{method:"GET"})).json();c=o,l(o,i),ownLists(o)}catch{}}E(h);function l(e){i.innerHTML="";let s="";for(let t of e){const n=new Date(t.endsAt).toLocaleString();document.title=t.title;const a=t.media!=""?`${t.media}`:"https://via.placeholder.com/150",d=t.description==null?"This Post has no description":`${t.description}`;s+=` <div class="card col-lg-3 col-md-6 col-sm-12 gap-3 shadow p-3 mb-5 bg-white rounded">
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
        ${d}
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
         Ends At: ${n}
        </p>
        </div>
    </div>
       `}i.innerHTML=s}const r=document.getElementById("searchText"),m=document.getElementById("ends-soon");document.getElementById("latest");r.addEventListener("keyup",I);m.addEventListener("change",g);function g(){const e=m.checked;if(e){console.log(e);const s=c.filter(t=>{const n=new Date(t.endsAt).toLocaleString(),d=new Date().toLocaleString();return n<d});l(s)}else l(c)}g();function I(){const e=r.value.trim();localStorage.setItem("filterQuery",e);const s=c.filter(t=>{const o=t.title.toLowerCase(),n=e.toLowerCase();return o.startsWith(n)||o.includes(n)});l(s),s.length===0&&(i.innerHTML=`<div=class="text-primary"> No result found for "${e}" </div><div class="text-warning">Use back key to clear!</div>`)}
