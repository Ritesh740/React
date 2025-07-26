import React from 'react'

function Userlist() {
    const users = [
        { id: 1, name: "Alice", age: 30 },  
        { id: 2, name: "Bob", age: 25 },
        { id: 3, name: "Charlie", age: 35 } 
    ];
  return (
    users.map(({id, name, age}) => (
        <div key={id}>
            <h4>ID: {id}</h4>
            <h4>Name: {name}</h4>
            <h4>Age: {age}</h4>
        </div>
    ))  
  )
}
export default Userlist