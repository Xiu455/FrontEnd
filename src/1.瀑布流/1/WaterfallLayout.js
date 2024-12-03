export class WaterfallLayout{
    constructor(selector, args={
        columnWidth: 200,
        gap: 0
    }){
        this.param = {
            columnWidth: args.columnWidth,
            gap: args.gap
        }

        // 初始化参数
        this.CSS_id = 'waterfall-layout-style-aB3dEf7G';
        this.htmlContainer = [];

        this.selector = selector;                   // 主元素選擇器
        this.mainElem = this.getMainElem();         // 主元素
        this.columnCount = this.getColumnCount();   // 列数
        this.columnIndex = 0;                       // 已布局列數

        this.init();
    }

    /**
     * 獲得主元素
     * @returns {Element} 主元素
     */
    getMainElem(){
        return document.querySelector(this.selector);
    }

    /**
     * 獲得列數
     * @returns {number} 列數
     */
    getColumnCount(){
        return Math.floor(this.mainElem.offsetWidth / (this.param.columnWidth + this.param.gap));
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
                width: 100%; min-width: ${this.param.columnWidth}px;
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
            this.columnlayout();
        });
    }

    columnlayout(){
        if(this.columnIndex === this.columnCount) return;

        this.mainElem.innerHTML = '';

        for(let i = 0; i < this.columnCount; i++){
            let column = document.createElement('div');
            column.classList.add('itemColumn');
            this.mainElem.appendChild(column);
        }

        this.columnIndex = this.columnCount;
    }

    insertElem(html){
        let columnElems = this.mainElem.querySelectorAll('& > .itemColumn');

        let mainColumn = {
            h: 0,
            elem: null
        };

        columnElems.forEach((e) => {
            if(mainColumn.elem === null){
                mainColumn = {h: e.offsetHeight, elem: e}
            }

            if(e.offsetHeight < mainColumn.h){
                mainColumn = {h: e.offsetHeight, elem: e}
            }
        });

        mainColumn.elem.innerHTML += html;
    }
}