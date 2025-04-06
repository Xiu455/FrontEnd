(() => {
    const focusMask = document.querySelector('.focus-mask');

    document.addEventListener('mousemove', async(event) => {
        const { clientX, clientY } = event;
        focusMask.setAttribute('style', `--offset-x: ${clientX}px; --offset-y: ${clientY}px;`);
    });
})();