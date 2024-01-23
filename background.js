chrome.runtime.onInstalled.addListener(() => {
});

chrome.action.onClicked.addListener(async (tab) => {
  chrome.scripting.executeScript({
      target: { tabId: tab.id },
      files: ["show_title.js"]
  });
});