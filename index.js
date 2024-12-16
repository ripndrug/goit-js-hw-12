import{a as h,S as p,i as d}from"./assets/vendor-DEenWwFD.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();function g(s){return s.map(({webformatURL:t,largeImageURL:o,tags:a,likes:e,views:r,comments:i,downloads:m})=>`
        <li class='form-item'>
            <a href='${o}'><img src='${t}' alt='${a}' width='360' class='form-image'>
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
        `).join("")}const y="47674643-19b0472e1fe1a72aec21686ba";async function v(s,t,o,a){const{data:e}=await h.get(s,{params:{q:t,key:y,per_page:a,page:o,image_type:"photo",orientation:"horizontal",safesearch:!0}});return e}const L=document.querySelector("form"),c=document.querySelector(".container"),n=document.querySelector(".load-more"),b="https://pixabay.com/api/";let l=1,w=15,u="";const S=new p(".container a");L.addEventListener("submit",E);n.addEventListener("click",x);function E(s){s.preventDefault();const t=s.target.elements.input;if(t.value.trim()===""){d.warning({message:"Please enter a valid search term."});return}u=t.value.trim(),c.innerHTML="",l=1,n.classList.add("btn-hidden"),f(),s.target.reset()}function x(){l+=1,f()}async function f(){const s=document.createElement("span");s.classList.add("loader"),n.insertAdjacentElement("afterend",s);try{const t=await v(b,u,l,w);if(l===1&&t.totalHits===0){d.error({message:"Sorry, there are no images matching your search query. Please try again!"});return}c.insertAdjacentHTML("beforeend",g(t.hits)),S.refresh(),c.childElementCount>=t.totalHits?(d.info({message:"We're sorry, but you've reached the end of search results."}),n.classList.add("btn-hidden")):n.classList.remove("btn-hidden"),P()}catch(t){console.error(t.message)}finally{s.remove()}}function P(){const{height:s}=c.firstElementChild.getBoundingClientRect();window.scrollBy({top:s*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
