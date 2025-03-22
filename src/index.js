import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/home';
import { Container } from 'reactstrap';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Container>
    <Home />
  </Container>
);