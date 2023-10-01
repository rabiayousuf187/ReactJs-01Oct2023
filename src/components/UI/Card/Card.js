import React from 'react'
import Heading from '../../Heading/Heading';
import './Card.css'

const Card = (props) => {
  return (
    <>
        <div className='card'>
        <Heading title="Card Component"/>
            {props.children}
        </div>
    </>
  )
}

export default Card;