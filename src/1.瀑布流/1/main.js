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
        {img: "https://picsum.photos/300/400?random=6", text: "6"},
        {img: "https://picsum.photos/300/400?random=7", text: "7"},
        {img: "https://picsum.photos/300/400?random=8", text: "8"},
        {img: "https://picsum.photos/300/400?random=9", text: "9"},
        {img: "https://picsum.photos/300/400?random=10", text: "10"},
        {img: "https://picsum.photos/700/400?random=11", text: "11"},
        {img: "https://picsum.photos/300/400?random=12", text: "12"},
        {img: "https://picsum.photos/300/400?random=13", text: "13"},
        {img: "https://picsum.photos/400/400?random=14", text: "14"},
        {img: "https://picsum.photos/300/400?random=15", text: "15"},
        {img: "https://picsum.photos/300/400?random=16", text: "16"},
        {img: "https://picsum.photos/300/400?random=17", text: "17"},
        {img: "https://picsum.photos/300/600?random=18", text: "18"},
        {img: "https://picsum.photos/300/400?random=19", text: "19"},
        {img: "https://picsum.photos/200/400?random=20", text: "20"},
    ];

    for(let data of datas){
        await waterfall.addContent(convertHTML(data));
    }
})();