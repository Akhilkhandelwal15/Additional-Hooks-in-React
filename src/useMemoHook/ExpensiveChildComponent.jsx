import { useMemo } from "react";

export const ExpensiveChildComponent = ()=>{

    // Expensive calculation
    function calculateVal(){
        let val = 0;
        console.log("->>");
        for(let i=0;i<1000000000;i++){
            val+=1;
        }
        return val;
    }

    // const value = calculateVal();
    
    // caching rhe value using useMemo Hook
    const value = useMemo(()=>{
        return calculateVal();
    }, []);

    return (
        <p>Value after a expensive calculation: {value}</p>
    );
}