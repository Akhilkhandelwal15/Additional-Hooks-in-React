// used to pass data from parent t child component without re-rendering.

import { forwardRef, useId, useRef } from "react";

// parent component
export const ForwardRefHook = ()=>{

    const username = useRef(null);
    const password = useRef(null);

    function handleSubmit(event){
        event.preventDefault();
        console.log(username.current.value, password.current.value);
    }

    return (
        <div>
            {/* <form onSubmit={handleSubmit}>
                <BeforeReact19 type="text" label="Username" ref={username}/>
                <BeforeReact19 type="password" label="Password" ref={password}/>
                <button type="submit">Submit</button>
            </form> */}
             <form onSubmit={handleSubmit}>
                <AfterReact19 type="text" label="Username" ref={username}/>
                <AfterReact19 type="password" label="Password" ref={password}/>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

// child component
const BeforeReact19 = forwardRef((props, ref)=>{
    const id = useId();
    return (
        <div>
            <label htmlFor={id}>{props.label}</label>
            <input type={props.type} ref={ref} />
        </div>
    );
});

//child component
const AfterReact19 = ({type, label, ref})=>{
    const id = useId();
    return (
        <div>
            <label htmlFor={id}>{label}</label>
            <input type={type} ref={ref} />
        </div>
    );
}