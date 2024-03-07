import React from 'react';
import ReactDOM from 'react-dom/client';
import './global.css';
import { Container } from './page/home';
import 'bootstrap'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Container></Container>
  </React.StrictMode>
);


