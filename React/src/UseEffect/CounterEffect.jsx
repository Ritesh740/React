import React, { useEffect, useState } from 'react'

function CounterEffect() {
    const [count,setCount]=useState(0)
    useEffect(() => {
       document.title=`Count: ${count}`
     
    }, [count])
    

  return (
    <div>
        <h1>count:{count}</h1>
        <button onClick={()=>(
            setCount(count+1)
        )}>Increse</button>
    </div>
  )
}

export default CounterEffect