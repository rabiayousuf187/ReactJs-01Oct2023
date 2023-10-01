import React from 'react'

const Button = (props) => {
  console.log("Props ===", props)
  return (
    <>
        <button>{props.title}</button>
    </>

  )
}

export default Button;