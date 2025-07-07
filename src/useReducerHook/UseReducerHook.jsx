import { useReducer } from "react";

export const UseReduecerHook = ()=>{
    const reducer = (state, action) =>{
        if(action.type=="increment"){
            return state+1;
        }
        if(action.type=="decrement"){
            return state-1;
        }
    }

    const [count, dispatch] = useReducer(reducer, 0);
    return (
        <div>
            <h2>UseReducer Hook</h2>
            <p>count: {count}</p>
            <button onClick={()=> dispatch({type : "increment"})}>Increment Count</button>
            <button onClick={()=> dispatch({type: "decrement"})}>Decrement Count</button>
        </div>
    );
}