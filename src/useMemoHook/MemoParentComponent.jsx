import { useState } from "react";
import { ExpensiveChildComponent } from "./ExpensiveChildComponent";

export const MemoParentComponent = ()=>{
    const [count, setCount] = useState(0);
    return (
        <>
            <ExpensiveChildComponent />
            <p>count: {count}</p>
            <button onClick={()=>setCount((prev)=>prev+1)}>Increment Count</button>
        </>
    );
}