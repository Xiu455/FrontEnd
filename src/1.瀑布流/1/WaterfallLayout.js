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
        this.selector = selector;                   // 主元素選擇器
        this.mainElem = this.getMainElem();         // 主元素
        this.columnCount = this.getColumnCount();   // 列数

        console.log(this.columnCount);

        this.init();
    }

    getMainElem(){
        return document.querySelector(this.selector);
    }

    getColumnCount(){
        return Math.floor(this.mainElem.offsetWidth / (this.param.columnWidth + this.param.gap));
    }

    // 初始化
    init(){
        this.waterfallCSS();
        this.monitor();
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

                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                align-items: center;
                flex-shrink: 1;
            }
        `));

        document.head.appendChild(styleElement);
    }

    // 監視器
    monitor(){
        window.addEventListener('resize', () => {
            
        });
    }
}