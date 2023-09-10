// es. creare una pagina web che permetta di visualizzare gli ultimi 25 post del subreddit /aww (https://www.reddit.com/r/aww/new.json)

// Reddit viewer:
// - all'avvio (se non ho mai visitato il sito) presenterà la dialog di selezione dei subreddit dove potrò scegliere tra una decina di subreddit (obbligatorio almeno uno)
// - la pagina principale mostrerà toolbar con un bottone per ogni subreddit selezionato che permetterà di scegliere quali post vedere
// - tasto + che permetta di riaprire la dialog e aggiungere/cambiare i subreddit
// - cura l'estetica

// Funzionalità aggiuntive:
// - aggiungere alla dialog la possibilità di aggiungere subreddit non previsti nella lista tramite un input di tipo testo
// - aggiungere la possibilità di cambiare tra (new, hot, pop)

// Super task:
// - gestire la paginazione
// - trasformare l'app in un gestore di rss


function changeTitleColor(){
    const header = document.getElementById('header');
    // header.setAttribute('title-color', 'pink')
    if (header.getAttribute('site-theme')==='light') {
        header.setAttribute('site-theme', 'dark');
    } else {
        header.setAttribute('site-theme','light');
    }
}

// function toHumanTime(timestamp) {    // funzione per convertire orario

//     const timestampInMills = timestamp * 1000;
//     const now = Date.now();
//     const delta = now - timestampInMills;

//     const seconds = parseInt(delta / 1000);
//     if (seconds < 60) {
//         return seconds + ' secondi fa...';
//     }

//     const minutes = parseInt(seconds / 60);
//     if (minutes < 60) {
//         return minutes + ' minuti fa...';
//     }

//     const hours = parseInt(minutes / 60);
//     if (hours < 24) {
//         return hours + ' ore fa...';
//     }
    
//     return parseInt(hours / 24) + ' giorni fa...';
// }