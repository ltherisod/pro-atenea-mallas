import React from 'react'

const Item = () => {

  const {nombre, id}=  props
  return (
    <div>Item
      <h1>{nombre}</h1>
      <h3>{id}</h3>
      
    </div>
  )
}

export default Item