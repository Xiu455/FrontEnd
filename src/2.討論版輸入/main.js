(() => {
    const discussion_input_box = document.querySelector('#discussion_input_box');

    document.querySelector('#btn1').onclick = () => {
        console.log(discussion_input_box.innerHTML);
    };
})();