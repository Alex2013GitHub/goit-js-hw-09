!function(){bodyEl=document.querySelector("body"),startButton=document.querySelector("button[data-start]"),stopButton=document.querySelector("button[data-stop]"),startButton.addEventListener("click",(function(){intervalId=setInterval((function(){1;var t="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0));bodyEl.style.backgroundColor=t}),1e3),t()})),stopButton.addEventListener("click",(function(){clearInterval(intervalId),t()}));function t(){startButton.disabled?(startButton.disabled=!1,stopButton.disabled=!0):(startButton.disabled=!0,stopButton.disabled=!1)}}();
//# sourceMappingURL=01-color-switcher.8dff2179.js.map
