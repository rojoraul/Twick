// popup.js
document.addEventListener('DOMContentLoaded', () => {
      
    // Optional: Trigger the scraping when the popup opens
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        files: ['redirect-script.js']
      });
    });
  });
  