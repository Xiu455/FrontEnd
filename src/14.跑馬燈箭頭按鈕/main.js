const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

(async () => {
    const blockBox = document.querySelector('.block-box');

    while(true){
        const lastChild = blockBox.lastElementChild;
        blockBox.insertBefore(lastChild, blockBox.firstElementChild);
        await delay(200);
    }
})();