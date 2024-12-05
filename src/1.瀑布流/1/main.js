import { WaterfallLayout } from './WaterfallLayout.js';

(async () => {
    const waterfall = new WaterfallLayout('#box1',{
        columnWidth: 300,
        gap: 20
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
        {img: "https://picsum.photos/300/100?random=6", text: "6"},
        {img: "https://picsum.photos/300/500?random=7", text: "7"},
        {img: "https://picsum.photos/500/400?random=8", text: "8"},
        {img: "https://picsum.photos/300/400?random=9", text: "9"},
        {img: "https://picsum.photos/300/700?random=10", text: "10"},
        {img: "https://picsum.photos/700/400?random=11", text: "11"},
        {img: "https://picsum.photos/300/400?random=12", text: "12"},
        {img: "https://picsum.photos/300/400?random=13", text: "13"},
        {img: "https://picsum.photos/400/400?random=14", text: "14"},
        {img: "https://picsum.photos/600/400?random=15", text: "15"},
        {img: "https://picsum.photos/300/400?random=16", text: "16"},
        {img: "https://picsum.photos/200/400?random=17", text: "17"},
        {img: "https://picsum.photos/300/600?random=18", text: "18"},
        {img: "https://picsum.photos/300/400?random=19", text: "19"},
        {img: "https://picsum.photos/200/400?random=20", text: "20"},
    ];

    let datas2 = [
        {img: "https://picsum.photos/300/300?random=1", text: "21"},
        {img: "https://picsum.photos/300/500?random=2", text: "22"},
        {img: "https://picsum.photos/300/200?random=3", text: "23"},
        {img: "https://picsum.photos/300/200?random=4", text: "24"},
        {img: "https://picsum.photos/300/400?random=5", text: "25"},
        {img: "https://picsum.photos/300/100?random=6", text: "26"},
        {img: "https://picsum.photos/300/500?random=7", text: "27"},
        {img: "https://picsum.photos/500/400?random=8", text: "28"},
        {img: "https://picsum.photos/300/400?random=9", text: "29"},
        {img: "https://picsum.photos/300/700?random=10", text: "30"},
    ];

    for(let data of datas){
        waterfall.addContent(convertHTML(data));
    }

    await waterfall.layout();

    // 開始計時
    // console.log('開始計時');
    // console.time('layout');

    await delay(1000);

    for(let data of datas2){
        waterfall.addContent(convertHTML(data));
    }

    await waterfall.layout();

    // 結束計時
    // console.timeEnd('layout');
    // console.log('結束計時');
})();