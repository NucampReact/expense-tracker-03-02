import React, { useState } from 'react';
import { Alert, Button } from 'reactstrap';

let names = ['Nas', 'Mary'];
// let nas = names[0];
// let mary = names[1];

// const [nas, mary] = names;

/*
  <Expenses /> = Expenses() = Income is 1000 // State v1
  <Expenses /> = Expenses() = Income is 900 // State v2
  <Expenses /> = Expenses() = Income is 800
*/

function Expenses() {
  // Hooks: A way to communicate to the framework
  /*
    useState returns an array of two elements:
      1. A pointer to the data you are tracking
      2. A "special function" to update the data
  */
  
  // Destructure Syntax
  let [income, setIncome] = useState(1000);
  let [message, setMessage] = useState();
  let [expenseCount, setExpenseCount] = useState(0);

  const addExpense = function() {
    // Subtract $100 from my initial income
    setIncome(income - 100);
    setExpenseCount(expenseCount + 1);


    if (income > 0 && income < 300) {
      setMessage('You are about to go broke, be careful..');
    } else if (income == 0) {
      setMessage('You are broke');
    } else if (income < 0) {
      setMessage('You are in the negatives, now you are paying fees... come on');
    }
  }

  return (
    <div>
      <h6>Initial Income: {income}</h6>
      <h6>Total expenses added: {expenseCount}</h6>
      {message && <Alert color='danger'>{message}</Alert>}
      <Button size='sm' color='primary' onClick={addExpense}>Add Expense</Button>
    </div>
  )
};

export default Expenses;