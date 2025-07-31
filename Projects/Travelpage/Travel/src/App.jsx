import React from 'react'
import Header from './Components/Header'
import './index.css'
import Card from './Components/Card'
import data from './Components/data'

function App() {
const entryElements=data.map((pages)=>{
  return <Card
  key={pages.id}
  img={pages.img}
  title={pages.title}
  country={pages.country}
  googleMapsLink={pages.googleMapsLink}
  text={pages.text}
  dates={pages.dates}
  
  />


})
  return (
    <div className='maincontainer'>
     <Header/>
     <main>
      {entryElements}
     </main>
    </div>
   
  )
}

export default App