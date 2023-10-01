import React from 'react'
import Card from '../UI/Card/Card'
import ExpenseItem from './ExpenseItem'
import './Expenses.css'

const Expenses = () => {
  return (
    <>
         <Card>
            <ExpenseItem title="Books" amount="Rs. 1000"></ExpenseItem>
            <ExpenseItem title="Pencil" amount="Rs. 50"></ExpenseItem>
            <ExpenseItem title="Colors" amount="Rs. 500"></ExpenseItem>
            {/* <p>Heading 1</p>
            <p>Heading 2 as Card Children</p> */}
        </Card>

    </>
  )
}

export default Expenses