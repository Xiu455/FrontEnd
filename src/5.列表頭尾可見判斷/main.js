(() => {
    const items = document.querySelectorAll('.list > .item');
    const mask = document.querySelector('.mask');
    
    const firstItem = items[0];
    const lastItem =  items[items.length - 1];
    
    // 添加屬性
    firstItem.setAttribute('data-order', 'first');
    lastItem.setAttribute('data-order', 'last');

    const obscb = (entries) => {
        const maskTpye = {
            first: 'top-mask',
            last: 'bottom-mask',
        }

        entries.forEach(entry => {
            if(entry.isIntersecting){
                mask.removeAttribute(maskTpye[entry.target.dataset.order], '');
            }else{
                mask.setAttribute(maskTpye[entry.target.dataset.order], '');
            }
        })
    }

    const observer = new IntersectionObserver(obscb);

    observer.observe(firstItem);
    observer.observe(lastItem);
})();