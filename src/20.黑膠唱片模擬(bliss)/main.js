(() => {
    $song = document.getElementById("song");

    document.addEventListener('click', () => {
        $song.play();
    });
})();