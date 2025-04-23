import FocusMask from './FocusHole/focus-mask.js'

(() => {
    document.body.onclick = () => {
        FocusMask.switch();
    }
})();