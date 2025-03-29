import React from 'react';
import Section from '../components/section';
import { useParams } from 'react-router-dom';

function ExpenseDetails() {
  const params = useParams();

  console.log(params);
  

  return (
    <>
      <Section title={`Viewing expense details for ${params.expenseName}`}
               content={`
                Where: ${params.merchant},
                Amount: ${params.amount} 
               `}
      />
    </>
  )
}

export default ExpenseDetails;