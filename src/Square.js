import React from 'react'
import './square.css'
export default function Square({value,chooseSquare}) {
  return (
    <div className='square' onClick={chooseSquare}>
      {value}
    </div>
  )
}
