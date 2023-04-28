/* global chrome */
const MessageType = {
  PAGE_RENDERED: 'pageRendered'
};

let currentUrl = '';
let tabId;

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  console.log(msg);
  console.log(sender);
  sendResponse("Front the background Script");
});

chrome.webNavigation.onHistoryStateUpdated.addListener((details) => {
  tabId = details.tabId;
  currentUrl = details.url;
});

chrome.webRequest.onCompleted.addListener((details) => {
  const parsedUrl = new URL(details.url);

  if (currentUrl && currentUrl.indexOf(parsedUrl.host) > -1 && tabId) { 
    console.log(currentUrl);
    
    chrome.tabs.sendMessage(tabId, { type: 'page-rendered'}); 
  } 

}, { urls: ["https://chat.openai.com/*"] });