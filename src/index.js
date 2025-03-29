import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/home';
import { Container } from 'reactstrap';
import Navigation from './components/navigation';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Navigation />
    <Container>
      <Home />
    </Container>
  </>
);