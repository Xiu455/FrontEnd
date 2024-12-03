import { WaterfallLayout } from './WaterfallLayout.js';

(async () => {
    const waterfall = new WaterfallLayout('#box1',{
        columnWidth: 300,
        gap: 10
    });


    const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
    
    const convertHTML = (data) => {
        return /* html */`
            <div class="data_box">
                <img src=${data.img}>
                <span>${data.text}<span>
            </div>
        `
    }

    let datas = [
        {img: "https://picsum.photos/300/300?random=1", text: "1"},
        {img: "https://picsum.photos/300/500?random=2", text: "2"},
        {img: "https://picsum.photos/300/200?random=3", text: "3"},
        {img: "https://picsum.photos/300/200?random=4", text: "4"},
        {img: "https://picsum.photos/300/400?random=5", text: "5"},
    ];

    for(let data of datas){
        waterfall.insertElem(convertHTML(data));
        await delay(1000);
    }
})();