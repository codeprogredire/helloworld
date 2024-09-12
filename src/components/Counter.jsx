import { useState } from 'react'
import "../index.css"

export function Counter(){
    const [count,setCount]=useState(0)

    function handleClick(){
        setCount(count+1)
    }

    return <button className="btn" onClick={handleClick}>Click to increment. Counter value: {count}</button>
}