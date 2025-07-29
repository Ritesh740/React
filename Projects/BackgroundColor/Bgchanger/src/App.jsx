import React from 'react'
import { useState } from 'react'
function App() {
  const [color,setColor]=useState('white')
  const handleClick=(e)=>{
    setColor(e.target.value)
    document.body.style.backgroundColor = e.target.value;

  }
  return (
    <div className='hero'>
      <button
  className="bg-blue-500 text-white px-4 py-2 m-2 rounded"
  value="blue"
  onClick={handleClick}
>
  Blue
</button>

<button
  className="bg-green-500 text-white px-4 py-2 m-2 rounded"
  value="green"
  onClick={handleClick}
>
  Green
</button>

<button
  className="bg-black text-white px-4 py-2 m-2 rounded"
  value="black"
  onClick={handleClick}
>
  Black
</button>

<button
  className="bg-yellow-400 text-white px-4 py-2 m-2 rounded"
  value="yellow"
  onClick={handleClick}
>
  Yellow
</button>

<button
  className="bg-gray-700 text-white px-4 py-2 m-2 rounded"
  value="gray"
  onClick={handleClick}
>
  Gray
</button>

    </div>
  )
}

export default App