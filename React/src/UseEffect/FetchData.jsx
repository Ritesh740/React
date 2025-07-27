import React, {useEffect, useState } from 'react'

function FetchData() {
    const[data,setData] =useState([])
    useEffect(() => {
        async function Api() {
        let response=  await  fetch('https://jsonplaceholder.typicode.com/posts')
        let data=await response.json()
        setData(data);
        }
       Api()

    }, [])
    
  return (
    <div>
        <h1>Data fetched</h1>
       {data[0] && <p>Title: {data[0].title}</p>}
        {/* <ol>{
            data.map((variable)=>(
            
                <li key={variable.id}>Tittle:{variable.title}</li>
            ))
            }</ol> */}
        </div>
  )
}

export default FetchData