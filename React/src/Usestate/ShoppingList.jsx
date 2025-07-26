import React, { useState } from 'react'

function ShoppingList() {
    const [list,setList]=useState([]);
    const [quantity,setQuantity]=useState('');
    const [value,setValue]=useState('');
    const handleSubmit=(e)=> {
         e.preventDefault();
         if (!value || !quantity) {
            return;
         }

            const newItem={
                name:value,
                quantity:parseInt(quantity)
         }
         setList((prevList)=>
            [...prevList,newItem])
            setValue('')
            setQuantity('')
         
    }
      const handleChange=(e)=>{
        setValue(e.target.value);
        

      }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label >Item:
                <input type="text" value={value} onChange={handleChange} placeholder='Add item'/>
            </label>
            <label >Quantity:
                <input type="number" value={quantity} onChange={(e)=>setQuantity(e.target.value)} placeholder='Add Quantity'/>
            </label>
            <button type='submit'>Submit</button>
        </form>
        <ul>
            {
               list.map((item, index) => (
  <li key={index}>{item.name} - Quantity: {item.quantity}</li>
))

            }
        </ul>
        
    </div>
  )
}

export default ShoppingList