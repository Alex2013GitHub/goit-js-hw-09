const t=document.querySelector("body"),e=document.querySelector("button[data-start]"),d=document.querySelector("button[data-stop]");e.addEventListener("click",(function(){intervalId=setInterval((()=>{n+=1;const e=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`;t.style.backgroundColor=e}),1e3),a()})),d.addEventListener("click",(function(){clearInterval(intervalId),a()}));let n=null;function a(){e.disabled?(e.disabled=!1,d.disabled=!0):(e.disabled=!0,d.disabled=!1)}
//# sourceMappingURL=01-color-switcher.28b0f531.js.map