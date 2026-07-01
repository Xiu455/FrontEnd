const FLIP_TIME = 2000;
const MAX_VIEW_ANGLE = 180;

const $kanban = document.querySelector(".kanban");

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const startFlip = async () => {
    let curFaceID = 1;
    let curDeg = 0;

    while(true){
        for(let deg = curDeg; deg <= curFaceID * 120; deg ++){
            $kanban.style.setProperty("--face-deg", `${deg}deg`);
            curDeg = deg;
            await delay();
        }

        await delay(FLIP_TIME);

        if(curFaceID < 3){
            curFaceID ++;
        }else{
            curFaceID = 1;
            curDeg = 0;
        }
    }
}

const monitorMouseMove = () => {
    document.addEventListener("mousemove", (e) => {
        const x = (e.clientX - window.innerWidth / 2) / (window.innerWidth / 2);
        const y = (e.clientY - window.innerHeight / 2) / (window.innerHeight / 2);

        let rotateX = y * 0.8 * MAX_VIEW_ANGLE * -1;
        let rotateY = x * 0.8 * MAX_VIEW_ANGLE;

        if(rotateX > MAX_VIEW_ANGLE) rotateX = MAX_VIEW_ANGLE;
        if(rotateX < -MAX_VIEW_ANGLE) rotateX = -MAX_VIEW_ANGLE;
        if(rotateY > MAX_VIEW_ANGLE) rotateY = MAX_VIEW_ANGLE;
        if(rotateY < -MAX_VIEW_ANGLE) rotateY = -MAX_VIEW_ANGLE;

        $kanban.style.setProperty("--rotateX", `${rotateX}deg`);
        $kanban.style.setProperty("--rotateY", `${rotateY}deg`);
    });
}

(async () => {
    startFlip();

    monitorMouseMove();
})();