import React from 'react'

const Button = ({handleClick, text, color}) => {

   
  return (
    <div>
        <button 
        className='btn'
        style = {{backgroundColor : color}}
        onClick = {handleClick}

        >
            {text}
        </button>
      
    </div>
  )
}

export default Button
