import { useReducer } from "react";

export const UseReduecerHook2 = ()=>{

    const initialState = {
        count: 0
    }

    const reducer= (state, action)=>{
        switch(action.type){
            case "increment":
                return {count: state.count+1};
            case "decrement":
                return {count: state.count-1};
            case "reset":
                return {count: 0};
            case "default":
                return {count: state.count};
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <p>count:{state.count}</p>
            <button onClick={()=>dispatch({type:"increment"})}>Increment count</button>
            <button onClick={()=>dispatch({type: "decrement"})}>Decrement count</button>
            <button onClick={()=>dispatch({type:"reset"})}>Reset count</button>
        </div>
    );
}