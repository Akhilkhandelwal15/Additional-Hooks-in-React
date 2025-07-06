// useRef is used here to access DOM nodes directly (like document.getElementById) — very useful in forms when you don’t need re-renders.

// Updating useRef.current.value does not re-render the component.

// Great for simple form access or managing focus, scroll, etc.


import { useRef } from "react";

export const UseRefHook = ()=>{

    const username = useRef(null);
    const password = useRef(null);

    function submitHandler(event){
        event.preventDefault();
        console.log(username.current.value, password.current.value);
    }
    return (
        <div>
            <h2>UseRef Hook</h2>
            <form onSubmit={submitHandler}>
                <input type="text" placeholder="Enter username" ref={username}/>
                <input type="text" placeholder="Enter password" ref={password}/>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}