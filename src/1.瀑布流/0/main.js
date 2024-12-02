(() => {
    var elem = document.querySelector('.grid');
    var msnry = new Masonry(elem, {
        // options
        itemSelector: '.grid-item',
        gutter: 20,
        percentPosition: true,
    });
})();