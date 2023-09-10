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