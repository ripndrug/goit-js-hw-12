import{S as h,i as c}from"./assets/vendor-5ObWk2rO.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();function p(s){return s.map(({webformatURL:t,largeImageURL:i,tags:a,likes:e,views:r,comments:o,downloads:m})=>`
        <li class='form-item'>
            <a href='${i}'><img src='${t}' alt='${a}' width='360' class='form-image'>
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
                        <p class='stats-text'>${o}</p>
                    </div>
                    <div class='stats-info'>
                        <h2 class='stats-title'>Downloads</h2>
                        <p class='stats-text'>${m}</p>
                    </div>
                </div>
            </a>
        </li>
        `).join("")}async function g(s,t,i,a){const{data:e}=await axios.get(s,{params:{q:t,key:API_KEY,per_page:a,page:i,image_type:"photo",orientation:"horizontal",safesearch:!0}});return e}const y=document.querySelector("form"),l=document.querySelector(".container"),n=document.querySelector(".load-more"),v="https://pixabay.com/api/";let d=1,L=15,u="";const b=new h(".container a");y.addEventListener("submit",w);n.addEventListener("click",S);function w(s){s.preventDefault();const t=s.target.elements.input;if(t.value.trim()===""){c.warning({message:"Please enter a valid search term."});return}u=t.value.trim(),l.innerHTML="",d=1,n.classList.add("btn-hidden"),f(),s.target.reset()}function S(){d+=1,f()}async function f(){const s=document.createElement("span");s.classList.add("loader"),n.insertAdjacentElement("afterend",s);try{const t=await g(v,u,d,L);if(d===1&&t.totalHits===0){c.error({message:"Sorry, there are no images matching your search query. Please try again!"});return}l.insertAdjacentHTML("beforeend",p(t.hits)),b.refresh(),l.childElementCount>=t.totalHits?(c.info({message:"We're sorry, but you've reached the end of search results."}),n.classList.add("btn-hidden")):n.classList.remove("btn-hidden"),E()}catch{c.error({message:"An error occurred while fetching images. Please try again later."})}finally{s.remove()}}function E(){const{height:s}=l.firstElementChild.getBoundingClientRect();window.scrollBy({top:s*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
