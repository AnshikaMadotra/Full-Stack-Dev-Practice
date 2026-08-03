import { useState } from "react";
import './Counter.css'
function Counter(){
     const [count, setCount] = useState(0)
    function increment(){
        setCount(count+1);
    }
    function decrement(){
        setCount(count-1);
    }
    function reset(){
        setCount(0);
    }
    return(
        <>
       <h1>React Counter App</h1>
       <h2 className={count < 0 ? "negative" : "positive"}>Count:{count}</h2>
       <div >
        <button onClick={increment}>Increment</button>
         <button onClick={decrement}>Decrement</button>
          <button onClick={reset}>Reset</button>

       </div>
        </>
    )
}
export default Counter;