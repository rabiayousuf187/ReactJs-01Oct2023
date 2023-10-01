// import React from 'react'
// import PropTypes from 'prop-types'

// const Button =(props)=> {
//   // const {text, styleClass, name, type, otherprops, onClick} = props;
//   console.log("Button Props ==== ", props);

//     return (
//       <>
//         <Button >{props.text}</Button>
//         {/* <Button name={name} type={type} className={`btn btn-${styleClass}`}  onClick={onClick}>{text}</Button> */}
//       </>
//     )
  
// }

// // Button.propTypes = {
// //   name: PropTypes.string.isRequired,
// //   type: PropTypes.string.isRequired,
// //   text: PropTypes.string.isRequired,
// //   style: PropTypes.string,
// //   onClick: PropTypes.func.isRequired,
// // }

// export default Button;


import React from 'react'

const Button = (props) => {
  console.log("Props ===", props)
  return (
    <>
        <button onClick={props.onClick}>{props.text}</button>
    </>

  )
}

export default Button;