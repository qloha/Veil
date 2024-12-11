function opens(event, url) {
    event.preventDefault();
    let characters = document.getElementById('characterslider').value;
    let nurl = url;
    if (nurl.includes("https://")) {
        nurl = url.replace('https://','')
    }
    nurl ="http://" + "%40".repeat(characters)  + "@" + nurl;
    window.open(nurl, null, '_blank');
}

function aboutblank() {
    const newWindow = window.open();

    if (newWindow) {
        const htmlContent = document.documentElement.outerHTML;

        newWindow.document.open();
        newWindow.document.write(htmlContent);
        newWindow.document.close();
    } else {
        console.error("Popup blocker might be preventing the new window from opening.");
    }
}