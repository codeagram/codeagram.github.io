(()=>{function n(){let t=document.querySelector(".grid-background");t.innerHTML="";let s=Math.floor(window.innerWidth/50),l=Math.floor(window.innerHeight/50);t.style.gridTemplateColumns=`repeat(${s}, 1fr)`,t.style.gridTemplateRows=`repeat(${l}, 1fr)`;for(let r=0;r<s*l;r++){let e=document.createElement("div");e.classList.add("grid-cell"),localStorage.getItem("dark-mode")==="true"?e.style.backgroundColor="#ffffff14":e.style.backgroundColor="#dee3e0",e.addEventListener("mouseover",()=>{e.style.transform="scale(1.2) perspective(500px)",localStorage.getItem("dark-mode")==="true"?e.style.backgroundColor="#ffffff33":e.style.backgroundColor="#f3f2f2",e.style.zIndex="2",e.style.boxShadow="0 0 10px 5px rgba(255, 255, 255, 0.3)"}),e.addEventListener("mouseout",()=>{e.style.transform="none",localStorage.getItem("dark-mode")==="true"?e.style.backgroundColor="#ffffff14":e.style.backgroundColor="#dee3e0",e.style.zIndex="auto",e.style.boxShadow="none"}),t.appendChild(e)}}n();window.addEventListener("resize",n);var c=document.querySelectorAll(".light-switch");c.length>0&&c.forEach((t,s)=>{localStorage.getItem("dark-mode")==="true"&&(t.checked=!0),t.addEventListener("click",()=>{let{checked:l}=t;c.forEach((r,e)=>{e!==s&&(r.checked=l)}),t.checked?(document.documentElement.classList.add("dark"),localStorage.setItem("dark-mode",!0),n()):(document.documentElement.classList.remove("dark"),localStorage.setItem("dark-mode",!1),n())})});document.addEventListener("mousemove",t=>{let{clientX:s,clientY:l}=t;document.querySelectorAll(".grid-cell").forEach((e,g)=>{let y=(s/window.innerWidth-.5)*(g%16)*2,v=(l/window.innerHeight-.5)*Math.floor(g/16)*2;e.style.transform=`translate(${y}px, ${v}px)`})});var a=0,d=document.getElementById("overlay-dropdown"),k=document.getElementById("navbar-toggler"),i=document.getElementById("line1"),m=document.getElementById("line2"),f=document.getElementById("line3");function u(){a==0?(d.classList.remove("hidden"),d.classList.add("flex"),document.body.classList.add("overflow-hidden"),i.style.transform="rotate(50deg) translate(5px, 5px)",m.style.opacity="0",f.style.transform="rotate(-50deg) translate(5px, -5px)",a=1):(d.classList.remove("flex"),d.classList.add("hidden"),document.body.classList.remove("overflow-hidden"),i.style.transform="rotate(0deg) translate(0, 0)",m.style.opacity="1",f.style.transform="rotate(0deg) translate(0, 0)",a=0)}u();u();function L(){d.classList.remove("flex"),d.classList.add("hidden"),i.style.transform="rotate(0deg) translate(0, 0)",m.style.opacity="1",f.style.transform="rotate(0deg) translate(0, 0)",a=0}document.querySelectorAll("#overlay-dropdown a").forEach(t=>{t.addEventListener("click",()=>{L(),document.body.classList.remove("overflow-hidden")})});var o=document.getElementById("social-links"),h=document.getElementById("hero");window.addEventListener("scroll",()=>{window.innerWidth>768&&(h.getBoundingClientRect().bottom<=0?(o.classList.remove("md:relative"),o.classList.add("md:fixed"),o.classList.add("md:bottom-40"),o.classList.add("md:left-10"),o.classList.add("md:flex-col"),o.classList.add("md:w-10")):(o.classList.remove("md:fixed"),o.classList.remove("md:bottom-40"),o.classList.remove("md:left-10"),o.classList.remove("md:flex-col"),o.classList.add("md:relative"),o.classList.remove("md:w-10")))});})();