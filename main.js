function changeTitleColor(){
    const header = document.getElementById('header');
    // header.setAttribute('title-color', 'pink')
    if (header.getAttribute('site-theme')==='light') {
        header.setAttribute('site-theme', 'dark');
    } else {
        header.setAttribute('site-theme','light');
    }
}

// es
// fetch('https://www.reddit.com/r/aww/new.json')
// .then(resp => resp.json())
// .then(res => {
//     const data = res.data;
//     const posts = data.children;
//     console.log(posts)
// })

// creare una pagina web che permetta di visualizzare
// gli ultimi 25 post del subreddit /aww (https://www.reddit.com/r/aww/new.json)
// usare i web component

// 1) permettere all'utente di cambiare il tema


function toHumanTime(timestamp) {    // funzione per convertire orario

    const timestampInMills = timestamp * 1000;
    const now = Date.now();
    const delta = now - timestampInMills;

    const seconds = parseInt(delta / 1000);
    if (seconds < 60) {
        return seconds + ' secondi fa...';
    }

    const minutes = parseInt(seconds / 60);
    if (minutes < 60) {
        return minutes + ' minuti fa...';
    }

    const hours = parseInt(minutes / 60);
    if (hours < 24) {
        return hours + ' ore fa...';
    }
    
    return parseInt(hours / 24) + ' giorni fa...';
}