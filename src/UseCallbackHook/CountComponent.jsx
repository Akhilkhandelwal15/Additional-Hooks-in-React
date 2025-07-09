import { useCallback, useState } from "react";
import Button from "./Button";

export const CountComponent = ()=>{
    const [count, setCount] = useState(0);

    // function increment(){
    //     console.log("Inside Increment");
    //     setCount(count+1);
    // }

    // function decrement(){
    //     console.log("Inside decrement");
    //     setCount(count-1);
    // }

    const increment = useCallback(()=>{
        console.log("Inside Increment");
        setCount((prev)=>prev+1);
    }, []);

    const decrement = useCallback(()=>{
        console.log("Inside decrement");
        setCount((prev)=>prev-1);
    },[]);

    return (
        <div>
            <p>count: {count}</p>
            <Button onClick={increment} >Increment</Button>
            <Button onClick={decrement} >Decrement</Button>
        </div>
    );
}