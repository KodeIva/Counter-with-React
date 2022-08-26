import React, {useState} from "react";

function App() {

 const [count,setCount] = useState(0)


 function increase() {
  setCount(count + 1)
 }

 function reset() {
  setCount(0)
 }

 function decrease() {
  setCount(count - 1)
 }

 return (
  <div className="container">
   <h1>{count}</h1>
   <div className="btns">
    <button onClick={decrease}>-</button>
    <button onClick={reset}>Reset</button>
    <button onClick={increase}>+</button>
   </div>
  </div>
 )

}

export default App