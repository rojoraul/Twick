// content.js

setTimeout(() => {
   chrome.storage.local.get('followers', ({followers}) => {

        // TITULO DEL MENÚ
        const title = document.createElement('h2');
        title.innerText =  'Kick';
        title.className = 'CoreText-sc-1txzju1-0 kyRSfG';
        title.setAttribute('style', 'margin: 1rem; color: #53fc18;')

        // DIV CONTENEDOR DEL STREAMER CARD
        const streamerCard = document.createElement('div');
        streamerCard.className = 'Layout-sc-1xcs6mc-0 side-nav-header';
        
        followers.forEach((follower)=> {
            isOnline(follower.name).then((response) => {
                if(response.livestream !== null) {
                    streamerCard.innerHTML = streamerCard.innerHTML + `
                        <a aria-haspopup="dialog"
                            class="ScCoreLink-sc-16kq0mq-0 eBmhqT InjectLayout-sc-1i43xsx-0 ivecvv side-nav-card__link tw-link"
                            href="${follower.url}" data-a-id="recommended-channel-0" data-test-selector="recommended-channel">
                            <div class="Layout-sc-1xcs6mc-0 bgXDR side-nav-card__avatar">
                                <div class="ScAvatar-sc-144b42z-0 dmnDPS tw-avatar"><img
                                        class="InjectLayout-sc-1i43xsx-0 cXFDOs tw-image tw-image-avatar" style="border: 2px solid #53fc18;" alt="${follower.name}"
                                        src="${follower.img}">
                                </div>
                            </div>
                            <div class="Layout-sc-1xcs6mc-0 eza-dez">
                                <div class="Layout-sc-1xcs6mc-0 iULZCz">
                                    <div data-a-target="side-nav-card-metadata" class="Layout-sc-1xcs6mc-0 cxkdpa">
                                        <div class="Layout-sc-1xcs6mc-0 xxjeD side-nav-card__title">
                                            <p title="${follower.name}" data-a-target="side-nav-title"
                                                class="CoreText-sc-1txzju1-0 fdYGpZ HcPqQ InjectLayout-sc-1i43xsx-0">${follower.name}</p>
                                        </div>
                                        <div class="Layout-sc-1xcs6mc-0 bYeGkU side-nav-card__metadata" data-a-target="side-nav-game-title">
                                            <p title="${response.livestream.categories[0].name}" class="CoreText-sc-1txzju1-0 eUABfN">${response.livestream.categories[0].name}</p>
                                        </div>
                                    </div>
                                    <div class="Layout-sc-1xcs6mc-0 fCKtYt side-nav-card__live-status" data-a-target="side-nav-live-status">
                                        <div class="Layout-sc-1xcs6mc-0 xxjeD">
                                            <div class="ScChannelStatusIndicator-sc-bjn067-0 kqWDUJ tw-channel-status-indicator" style="background-color: #53fc18"></div>
                                            <p class="CoreText-sc-1txzju1-0 InjectLayout-sc-1i43xsx-0 cmeMuc">En directo</p>
                                            <div class="Layout-sc-1xcs6mc-0 jOVwMQ"><span aria-hidden="true"
                                                    class="CoreText-sc-1txzju1-0 gWcDEo">${response.livestream.viewers}</span>
                                                <p class="CoreText-sc-1txzju1-0 InjectLayout-sc-1i43xsx-0 cmeMuc">${response.livestream.viewers} espectadores</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="Layout-sc-1xcs6mc-0 side-nav-card__link__tooltip-arrow">
                                <div class="ScFigure-sc-wkgzod-0 caxXaW tw-svg"><svg width="20" height="20" viewBox="0 0 20 20">
                                        <path d="M7.5 7.5 10 10l-2.5 2.5L9 14l4-4-4-4-1.5 1.5z"></path>
                                    </svg></div>
                                <p class="CoreText-sc-1txzju1-0 InjectLayout-sc-1i43xsx-0 cmeMuc">Pulsa la flecha hacia la derecha para que
                                    se muestre más información sobre ${follower.name}.</p>
                            </div>
                        </a>`                    
                }         
            });
        });   

        // ELEMENTO ACTIVOS EN TWITCH PARA COLOCARLO DEBAJO
        const twitchActives = document.getElementsByClassName('Layout-sc-1xcs6mc-0 dcyYPL side-nav-section')[0];

        const kickActives = document.createElement('div');
        kickActives.className = 'Layout-sc-1xcs6mc-0 dcyYPL side-nav-section Layout-sc-1xcs6mc-0 side-nav-header';
        

        kickActives.insertAdjacentElement('afterbegin', title);
        kickActives.insertAdjacentElement('beforeend', streamerCard);


        twitchActives.insertAdjacentElement('afterend', kickActives);
    });
}, 1000);

const isOnline = async (name) => {
    const response = await fetch(`https://kick.com/api/v1/channels/${name}`);
    const streamer = await response.json();
    
    return streamer;
}




