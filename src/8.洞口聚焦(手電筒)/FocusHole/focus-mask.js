let isOpen = false;

// 將HTML字串轉換成DOM物件
const drawDom = (htmlSrt) => {
    const tmp = document.createElement('div');
    tmp.innerHTML = htmlSrt;
    const dom = tmp.querySelectorAll('& > *');
    tmp.remove();
    return dom.length > 1? dom : dom[0] ?? null;
}

// 建立DOM物件
const focusMaskDom = drawDom(/*html*/`
    <div class="focus-mask-nPMz57"></div>
`);

// 設定座標
const setCoords = (x, y) => {
    focusMaskDom.setAttribute('style', `--offset-x: ${x}px; --offset-y: ${y}px;`);
}

// 追蹤滑鼠移動
const followMouse = (event) => {
    const { clientX, clientY } = event;
    setCoords(clientX, clientY);
}

// 開啟/關閉
const open = () => {
    isOpen = true;

    document.addEventListener('mousemove', followMouse);
    focusMaskDom.classList.remove('hid');
}
const close = () => {
    isOpen = false;

    document.removeEventListener('mousemove', followMouse);
    focusMaskDom.classList.add('hid');
}

document.body.appendChild(focusMaskDom);

window.addEventListener('click', (event) => {
    if(!isOpen) return;
    const { clientX, clientY } = event;
    setCoords(clientX, clientY);
});

open();

const focusMask = {
    open,
    close,
    switch: () => isOpen? close() : open()
}
export default focusMask;