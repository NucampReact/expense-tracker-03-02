import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/home';
import { Container } from 'reactstrap';
import Navigation from './components/navigation';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ExpensePage from './pages/expenses';
import IncomePage from './pages/income';
import ExpenseDetails from './pages/expense_details';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Navigation />
    <Container>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/expenses" element={<ExpensePage />} />
        <Route path="/income" element={<IncomePage />} />
        <Route path="/expenses/:expenseName/:amount/:merchant" element={<ExpenseDetails />} />
      </Routes>
    </Container>
  </BrowserRouter>
);