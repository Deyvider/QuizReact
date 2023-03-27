import React from 'react'

const Result = ({level, genre}) => {
  return (
    <div>
        <p className='level'>Tu nivel es: </p>
        <p className='gen'>Los generos que selecionaste fueron: </p>
    </div>
  )
}

export default Result