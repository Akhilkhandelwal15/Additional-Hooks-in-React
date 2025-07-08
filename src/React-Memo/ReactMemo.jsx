import { useEffect, useRef, useState } from "react";
import MemoCount from "./MemoCount";

export const ReactMemo = ()=>{
    const [count, setCount] = useState(0);
    console.log("->>>");    
    return (
        <>
            <div>
                <p>count:{count}</p>
                <button onClick={()=> setCount((prev)=>prev+1)}>Increment count</button>
            </div>
            <MemoCount />
        </>
    );
}