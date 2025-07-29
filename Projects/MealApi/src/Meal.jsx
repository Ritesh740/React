import axios from "axios"
import React from 'react'
import { useState,useEffect } from "react"

function Meal() {
    const [item,setItem]=useState([])
    useEffect(()=>{
        axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood").then(res=>{
            setItem(res.data.meals)
        }).catch(err=>{
            console.log(err)
        })

    },[]);
     const itemsList = item.map((meal) => (
        
        <div className="container" key={meal.idMeal}>
            <img src={meal.strMealThumb} alt={meal.strMeal} />
            <h3>{meal.strMeal}</h3>
            <p>{meal.idMeal}</p>
        </div>
     ));
  return (
    <div className="meal">{itemsList}</div>
  )
}

export default Meal

