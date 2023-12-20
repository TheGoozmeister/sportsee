import React from 'react';
import ReactDOM from 'react-dom/client';
import Userpage from './pages/Userpage/userpage';
import "./style/css/style.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Userpage />
  </React.StrictMode>
);

