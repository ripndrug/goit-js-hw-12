import{a as h,S as p,i as c}from"./assets/vendor-DEenWwFD.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();function g(t){return t.map(({webformatURL:s,largeImageURL:o,tags:a,likes:e,views:r,comments:i,downloads:m})=>`
        <li class='form-item'>
            <a href='${o}'><img src='${s}' alt='${a}' width='360' class='form-image'>
                <div class='stats-container'>
                    <div class='stats-info'>
                        <h2 class='stats-title'>Likes</h2>
                        <p class='stats-text'>${e}</p>
                    </div>
                    <div class='stats-info'>
                        <h2 class='stats-title'>Views</h2>
                        <p class='stats-text'>${r}</p>
                    </div>
                    <div class='stats-info'>
                        <h2 class='stats-title'>Comments</h2>
                        <p class='stats-text'>${i}</p>
                    </div>
                    <div class='stats-info'>
                        <h2 class='stats-title'>Downloads</h2>
                        <p class='stats-text'>${m}</p>
                    </div>
                </div>
            </a>
        </li>
        `).join("")}const y="47674643-19b0472e1fe1a72aec21686ba";async function v(t,s,o,a){const{data:e}=await h.get(t,{params:{q:s,key:y,per_page:a,page:o,image_type:"photo",orientation:"horizontal",safesearch:!0}});return e}const L=document.querySelector("form"),l=document.querySelector(".container"),n=document.querySelector(".load-more"),b="https://pixabay.com/api/";let d=1,w=15,u="";const E=new p(".container a");L.addEventListener("submit",S);n.addEventListener("click",x);function S(t){t.preventDefault();const s=t.target.elements.input;if(s.value.trim()===""){c.warning({message:"Please enter a valid search term."});return}u=s.value.trim(),l.innerHTML="",d=1,n.classList.add("btn-hidden"),f(),t.target.reset()}function x(){const t=document.createElement("span");t.classList.add("loader"),n.insertAdjacentElement("afterend",t),d+=1,f().finally(()=>t.remove())}async function f(){const t=document.createElement("span");t.classList.add("loader"),n.insertAdjacentElement("afterend",t);try{const s=await v(b,u,d,w);if(d===1&&s.totalHits===0){c.error({message:"Sorry, there are no images matching your search query. Please try again!"});return}l.insertAdjacentHTML("beforeend",g(s.hits)),E.refresh(),l.childElementCount>=s.totalHits?(c.info({message:"We're sorry, but you've reached the end of search results."}),n.classList.add("btn-hidden")):n.classList.remove("btn-hidden"),P()}catch{c.error({message:"An error occurred while fetching images. Please try again later."})}finally{t.remove()}}function P(){const{height:t}=l.firstElementChild.getBoundingClientRect();window.scrollBy({top:t*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
