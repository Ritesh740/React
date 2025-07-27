import React, { useEffect } from 'react'

function BasicEffect() {
    useEffect(() => {
        console.log('First console load')

    },[])
  return (
    <div><h1>first console</h1></div>
  )
}

export default BasicEffect