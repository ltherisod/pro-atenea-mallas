import React from 'react'
import { Link } from 'react-router-dom'

const Item = (props) => {

  const {nombre, id}=  props
  return (
    <link>
            <div>
                    <h3>{id}</h3>
                    <h1>{nombre}</h1>

                    <Link rel="stylesheet" to = {`/Item/detail/${id}`} >"detalle"</Link>
                  

            </div>
    </link>
  )
}

export default Item