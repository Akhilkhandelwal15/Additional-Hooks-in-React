// in this example I want to show a particular message when "increment count and decrement count slicks reaches multiple of 10 each time"

import { useEffect, useRef, useState } from "react";

export const UseRefHook2 = ()=>{
    // in useState if the state changes then component re-renders.
    const [count, setCount] = useState(0);

    // When the value stored in useRef changes, the component does not re-render, even though the value itself is updated.
    let val = useRef(0); 

    // it is without arguments so it will run every time when componenet re-renders
    useEffect(()=>{
        console.log("Runs on every re-render");
        console.log("count", count);
        console.log("val", val.current);
    });

    function handleIncrement(){
        setCount(count+1);
        val.current = val.current+1;
    }

    function handleDecrement(){
        setCount(count-1);
        val.current = val.current+1;
    }

    return (
        <div>
            <p>count: {count}</p>
            <p>value: {val.current}</p>
            <button onClick={handleIncrement}>Increment count</button>
            <button onClick={handleDecrement}>Decrement count</button>
            {val.current!==0 && val.current%10===0 && `Wow! clicked ${val.current} times.`}
        </div>
    );
}