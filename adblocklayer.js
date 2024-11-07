// Viivituse funktsioon
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Peamine funktsioon
async function hideAdBlocks() {
    if (document.readyState === 'complete') {
        await delay(5000);
        console.log('Hello');
        
        const collection = document.getElementsByClassName("ad-block-layer");
        for (let i = 0; i < collection.length; i++) {
            collection[i].setAttribute('style', 'display:none !important');
        }
    }
}

// Käivitab funktsiooni, kui leht on täielikult laetud
window.addEventListener("load", hideAdBlocks);

  