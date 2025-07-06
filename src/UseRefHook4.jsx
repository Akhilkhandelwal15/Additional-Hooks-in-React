import { useEffect, useRef, useState } from "react";

export const UseRefHook4 = ()=>{

    const [time, setTime] = useState(0);
    const timerRef = useRef(null);

    useEffect(()=>{
        console.log("Component re-rendering");
    })
    
    function startTimer(){
        if (timerRef.current !== null) return;
        timerRef.current = setInterval(()=>{
            setTime((prev) => prev+1);
        }, 1000);
    }

    function stopTimer(){
        clearInterval(timerRef.current);
        timerRef.current = null;
    }

    function resetTimer(){
        stopTimer();
        setTime(0);
    }

    return (
        <>
            <div>
                <h2>Stopwatch: {time} seconds</h2>
                <button onClick={startTimer}>Start Timer</button>
                <button onClick={stopTimer}>Stop Timer</button>
                <button onClick={resetTimer}>Reset Timer</button>
            </div>
        </>
    );
}