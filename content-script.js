// content.js


setTimeout(() => {
  const followersList = [];

  // Supongamos que los nombres de usuario de las personas que está siguiendo se encuentran dentro de elementos con la clase 'follower-username'.
  const followers = document.querySelectorAll('#channels a');

  if(followers !== null) {
    followers.forEach(follower => {
      followersList.push({
        name: follower.getElementsByClassName('text-sm font-bold hover:text-primary')[0].innerHTML,
        url: `https://kick.com/${follower.getElementsByClassName('text-sm font-bold hover:text-primary')[0].innerHTML}`,
        img: follower.getElementsByClassName('h-full w-full object-cover')[0].getAttribute('src')
      });
    });
  
  
    // Guarda los datos scrapeados en el almacenamiento local de Chrome
    chrome.storage.local.set({ followers: followersList });
  }
  
  
}, 1000);
    
  