import React from 'react'
import { useState } from 'react'

function Counter() {
const [count,setCount]=useState(0)
      const increase=()=>{
        setCount(count+1)
      }
      const decrease=()=>{
        setCount(count-1)
      }
  return (
<div>
  <p>count:{count}</p>
    <button onClick={increase}>Increase Value:</button>
    <button onClick={decrease}>Decrease Value:</button>
    </div>
  )
}

export default Counter