export class WaterfallLayout{
    constructor(selector, args={
        columnWidth: 200,
        gap: 0
    }){
        this.param = {
            columnWidth: args.columnWidth,
            gap: args.gap
        }
        this.selector = selector;
        this.mainElem = this.getMainElem();
        this.columnCount = this.getColumnCount();

        this.monitor();
    }

    monitor(){
        window.addEventListener('resize', () => {
            this.columnCount = this.getColumnCount();
            console.log(this.columnCount);
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