export class WaterfallLayout{
    constructor(selector, args={
        columnWidth: 200,
        gap: 0
    }){
        const _ = args;

        this.selector = selector;
        this.mainElem = this.getMainElem();

        this.monitor();
    }

    monitor(){
        window.addEventListener('resize', () => {
        });
    }

    getMainElem(){
        return document.querySelector(this.selector);
    }
}