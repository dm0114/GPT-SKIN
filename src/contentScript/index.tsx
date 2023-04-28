import React from "react";
import { createRoot } from "react-dom/client";
import "../assets/tailwind.css";
import ContentScript from "./contentScript";



function init() {
  const appContainer = document.createElement("div");
  const lastDivNode = document.querySelector(
    "#__next > div.overflow-hidden.w-full.h-full.relative.flex > div.flex.h-full.max-w-full.flex-1.flex-col > main > div.absolute.bottom-0.left-0.w-full.border-t.md\\:border-t-0.dark\\:border-white\\/20.md\\:border-transparent.md\\:dark\\:border-transparent.md\\:bg-vert-light-gradient.bg-white.dark\\:bg-gray-800.md\\:\\!bg-transparent.dark\\:md\\:bg-vert-dark-gradient.pt-2"
  );
  lastDivNode.appendChild(appContainer);
  lastDivNode.id = ("chat-box")  
  // lastDivNode.classList.add("chat-box")
  console.log(document.getElementById("chat-box"));
  
  const root = createRoot(appContainer);
  root.render(<ContentScript />);
}


chrome.runtime.onMessage.addListener((request) => { 
  if (request && request.type === 'page-rendered') { 
    init();
  } 
});