// export 
class WaterfallLayout{
    constructor(selector, args={
        columnWidth: 200,
        gap: 0,
        fillMode: 'fit',
    }){
        this.param = {
            columnWidth: args.columnWidth,
            gap: args.gap,
            mainImgSelector: 'img',
            fillMode: args.fillMode
        }

        // 初始化参数
        this.CSS_id = 'waterfall-layout-style-aB3dEf7G';
        this.doms = [];

        this.selector = selector;                   // 主元素選擇器
        this.mainElem = this.getMainElem();         // 主元素
        this.columnCount = this.getColumnCount();   // 列数
        this.columnIndex = 0;                       // 已布局列數
        this.domsIndex = 0;                         // 已插入元素索引

        this.init();

        console.log('遠端測試');
    }

    // 獲得主元素
    getMainElem(){
        return document.querySelector(this.selector);
    }

    // 獲得列數
    getColumnCount(){
        return Math.max(1, Math.floor(this.mainElem.offsetWidth / (this.param.columnWidth + this.param.gap)));
    }

    // 初始化
    init(){
        this.waterfallCSS();    // 瀑布流CSS初始化
        this.columnlayout();    // 瀑布流布局初始化
        this.monitor();         // 監視器初始化
    }

    // 瀑布流布局CSS
    waterfallCSS(){
        if(document.querySelector(`#${this.CSS_id}`)) return;

        let styleElement = document.createElement('style');
        styleElement.id = `${this.CSS_id}`;

        styleElement.appendChild(document.createTextNode( /* CSS */`
            ${this.selector} {
                padding: ${this.param.gap}px;
                gap: ${this.param.gap}px;

                display: flex;
                justify-content: center;
                align-items: flex-start;
            }

            ${this.selector} .itemColumn{
                width: 100%;
                min-width: ${this.param.columnWidth}px;
                max-width: ${(this.param.fillMode === 'fill')? this.param.columnWidth*2 : this.param.columnWidth*1}px ;
                height: max-content; min-height: 100px;

                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                align-items: center;
                flex-shrink: 1;

                gap: ${this.param.gap}px;
            }
        `));

        document.head.appendChild(styleElement);
    }

    // 監視器
    monitor(){
        window.addEventListener('resize', () => {
            this.columnCount = this.getColumnCount();
            if(this.columnIndex === this.columnCount) return;

            // 柱子數量發生變動
            this.domsIndex = 0;
            this.columnlayout();
            this.layout();
        });
    }

    // 瀑布流柱子布局
    columnlayout(){
        this.mainElem.innerHTML = '';

        for(let i = 0; i < this.columnCount; i++){
            let column = document.createElement('div');
            column.classList.add('itemColumn');
            this.mainElem.appendChild(column);
        }

        this.columnIndex = this.columnCount;
    }

    // HTML字串轉DOM
    htmlToDom(html){
        let tmpDom = document.createElement('div');
        tmpDom.innerHTML = html;
        return tmpDom.querySelector('& > *');
    }

    // 插入內容元素
    async insertElem(dom){
        let mainColumn = {
            h: 0,
            elem: null
        };

        // 找出最短的列
        this.mainElem.querySelectorAll('& > .itemColumn').forEach((e) => {
            if(mainColumn.elem === null){
                mainColumn = {h: e.offsetHeight, elem: e}
            }

            if(e.offsetHeight < mainColumn.h){
                mainColumn = {h: e.offsetHeight, elem: e}
            }
        });

        await new Promise((resolve, reject) => {
            const img = dom.querySelector(this.param.mainImgSelector);
            let attempts = 0;

            if(img === null || img.complete){
                resolve();
            }else{
                img.onload = () => { 
                    resolve();
                };

                img.onerror = () => { 
                    if(attempts < 3) {
                        img.src = img.src;
                        attempts++;
                    }else{
                        reject();
                    }
                };
            }
        });

        // 插入元素
        mainColumn.elem.appendChild(dom);
    }

    // 等待doms中的圖片加載完成
    waitImgLoad(){ return new Promise( resolve => {
        let contentCount = this.doms.length;    // 預計加載數量
        let loadedCount = 0;                    // 已加載數量
        let attempts = 0;                       // 嘗試次數

        // 監視加載狀態
        const checkComplete = () => { loadedCount === contentCount ? resolve(true) : null; }

        const loadImages = () => {
            this.doms.forEach(dom => {
                const img = dom.querySelector(this.param.mainImgSelector);

                if(img === null || img.complete){ 
                    loadedCount++;
                    checkComplete();
                    // console.log(`已加載 ${loadedCount} / ${contentCount}`);
                }else{
                    img.onload = () => { 
                        loadedCount++; 
                        checkComplete();
                        // console.log(`已加載 ${loadedCount} / ${contentCount}`);
                    };

                    img.onerror = () => {
                        if(attempts < 3) {
                            img.src = img.src;
                            attempts++;
                        } else {
                            loadedCount++; 
                            checkComplete();
                        }
                    };
                }
            });
        };

        loadImages();
    });}

    // 新增內容元素
    async addContent(html){
        let dom = this.htmlToDom(html);
        this.doms.push(dom);
    }

    // 布局
    async layout(){
        // 紀錄當前滾動位置
        let scrollPosition = window.scrollY;

        // 等待圖片加載完成
        this.waitImgLoad();

        let tmpDoms = this.doms.slice(this.domsIndex, this.doms.length);

        // 開始插入元素
        for(let dom of tmpDoms){
            await this.insertElem(dom);
        }

        this.domsIndex = this.doms.length;

        // 回到原先位置
        window.scrollTo({
            top: scrollPosition,
            behavior: 'instant' // 避免平滑滾動效果
        });
    }

    //=== 設定 ===
    setMainImgSelector(selector){
        this.param.mainImgSelector = selector;
    }
}