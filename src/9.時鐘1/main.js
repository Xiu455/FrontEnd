(async() => {
    const h10 = document.getElementById('h-10');
    const h1 = document.getElementById('h-1');
    const m10 = document.getElementById('m-10');
    const m1 = document.getElementById('m-1');
    const s10 = document.getElementById('s-10');
    const s1 = document.getElementById('s-1');

    // 延遲函式
    const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

    // 更新顯示數字
    const updateTime = async (e, i) => {
        const numList = e.querySelector('.num-list');
        const focus = e.querySelectorAll('.focus');
        const num = e.querySelectorAll('.num')[i];
        
        // 移動 focus 狀態
        focus?.forEach(f => f.classList.remove('focus'));
        numList.style.setProperty('--offset', i);   // 將移動到 i 數字的位置

        await delay(200);
        
        num.classList.add('focus');                 // 設置 focus 狀態
    }

    // 設定時間函式 使用閉包 (Closure) 儲存上一次時間
    const SetTime = () => {
        let prevTime = {
            h: {x: 0, i: 0},
            m: {x: 0, i: 0},
            s: {x: 0, i: 0}
        }

        return ({h = 0, m = 0, s = 0}) => {
            h = {
                'x': Math.floor(h/10),
                'i': h%10
            }
    
            m = {
                'x': Math.floor(m/10),
                'i': m%10
            }
    
            s = {
                'x': Math.floor(s/10),
                'i': s%10
            }
    
            if(h.x !== prevTime.h.x){
                updateTime(h10, h.x);
            }

            if(h.i !== prevTime.h.i){
                updateTime(h1, h.i);
            }

            if(m.x !== prevTime.m.x){
                updateTime(m10, m.x);
            }

            if(m.i !== prevTime.m.i){
                updateTime(m1, m.i);
            }

            if(s.x !== prevTime.s.x){
                updateTime(s10, s.x);
            }

            if(s.i !== prevTime.s.i){
                updateTime(s1, s.i);
            }

            prevTime = {h, m, s};
        }
    }

    const setTime = SetTime();

    setInterval(() => {
        const newTime = new Date();
        const h = newTime.getHours();
        const m = newTime.getMinutes();
        const s = newTime.getSeconds();

        setTime({h, m, s});
    }, 1000);
})();