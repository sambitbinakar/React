import { useState } from "react"

export default function Counter(){
    let [counter,setCounter]=useState(10)
    //let counter = 0
  const addValue = ()=>{
      counter=counter+1
      setCounter(counter=>counter+1)
      setCounter(counter=>counter+1)
      setCounter(counter=>counter+1)
      setCounter(counter=>counter+1)
    }
    const removeValue =()=>{
        counter=counter-1
        setCounter(counter)
    }
    return(
        <>
        <h1>React code</h1>
    <h3>Counter Value: {counter}</h3>
    <button onClick={addValue}>Add Value</button><br />
    <button onClick={removeValue}>Remove Value</button>
        </>
    )
}