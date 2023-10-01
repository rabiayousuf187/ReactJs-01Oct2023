import React from 'react'
import Heading from '../Heading/Heading'
import Button from '../Button/Button'

const Header = (props) => {
  return (
    <>
        <Header>
            <Heading title = {props.title}/>
            <Button title = {props.btnTitle}/>
            <Button title = {props.btnTitle2}/>
        </Header>
    </>
  )
}

export default Header