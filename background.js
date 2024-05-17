// background.js
chrome.action.onClicked.addListener((tab) => {
  const targetUrl = "https://kick.com/following"; // URL a la que deseas redirigir

  // Redirigir la pestaña actual a la URL objetivo
  chrome.tabs.update(tab.id, { url: targetUrl });
});