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
        this.selector = selector;                   // 主元素選擇器
        this.mainElem = this.getMainElem();         // 主元素
        this.columnCount = this.getColumnCount();   // 列数

        console.log(this.columnCount)

        this.monitor();
    }

    monitor(){
        window.addEventListener('resize', () => {
            
        });
    }

    getMainElem(){
        return document.querySelector(this.selector);
    }

    getColumnCount(){
        let width = this.mainElem.offsetWidth;
        let columnCount = Math.floor(width / (this.param.columnWidth + this.param.gap));
        return Math.floor(columnCount);
    }
}