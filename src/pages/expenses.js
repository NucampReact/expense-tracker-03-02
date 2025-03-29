import React from 'react';
import Section from '../components/section';
import Expenses from '../components/expenses';
import { Link } from 'react-router-dom';

function ExpensePage() {
  return (
    <>
    <Section title="My Expenses" content={<Expenses />} />
    <ul>
      <li><Link to="/expenses/restaurant/100/outback">Restaurant</Link></li>
      <li><Link to="/expenses/boat/4000/oceanCity">Boat</Link></li>
      <li><Link to="/expenses/store/12/wawa">Store</Link></li>
      <li><Link to="/expenses/bills/300/electric">Bills</Link></li>
    </ul>
    </>
  )
}

export default ExpensePage;