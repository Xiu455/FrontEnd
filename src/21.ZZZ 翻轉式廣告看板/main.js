const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

(async () => {
    const $kanban = document.querySelector(".kanban");

    let curFaceID = 1;
    let curDeg = 0;

    while(true){
        for(let deg = curDeg; deg <= curFaceID * 120; deg ++){
            $kanban.style.setProperty("--deg", `${deg}deg`);
            curDeg = deg;
            await delay();
        }

        await delay(2000);
        
        if(curFaceID < 3){
            curFaceID ++;
        }else{
            curFaceID = 1;
            curDeg = 0;
        }
    }
})();