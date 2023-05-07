import React from "react";
import { createRoot } from "react-dom/client";
import "../assets/tailwind.css";
import {ContentScript} from "./contentScript";



function init() {
  try {
    const selectedNodes = document.querySelectorAll(
      "main > :first-child > :first-child > :first-child > :first-child > *:nth-child(odd):not(:first-child) > :first-child"
    );
    const selectedNodes2 = document.querySelectorAll(
      "main > :first-child > :first-child > :first-child > :first-child > *:nth-child(even):not(:first-child) > :first-child"
    );
    const selected = document.querySelectorAll(
      "w-[30px]"
    );
    console.log(selected);
    

    selectedNodes.forEach((div) => {
      const imageDiv = div.children[0]
      const chatDiv = div.children[1];
      
      const appContainer = document.createElement("div");
      imageDiv.replaceChild(appContainer, imageDiv.children[0]);
      const root = createRoot(appContainer);
      root.render(<ContentScript />);
  
      chatDiv.classList.add("chat-box")
    });
  
    selectedNodes2.forEach((div) => {
      const chatDiv2 = div.children[1];
      div.classList.add("flex-row-reverse")
      chatDiv2.classList.add("my-chat-box")
    })
  } catch {

  }
}


chrome.runtime.onMessage.addListener((request) => { 
  if (request && request.type === 'page-rendered') { 
    init();
  } 
});
