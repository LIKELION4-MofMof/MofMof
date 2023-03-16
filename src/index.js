import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import FattailHome from "./pages/FattailHome/FattailHome";
import CrestedHome from './pages/CrestedHome/CrestedHome';
import LeopardHome from './pages/LeopardHome/LeopardHome';
import FattailMofInfo from 'pages/FattailHome/FattailMofInfo';
import { GlobalStyle } from './styles/GlobalStyle';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/fattail-home" element={<FattailHome />} />
        <Route path="/crested-home" element={<CrestedHome />} />
        <Route path="/leopard-home" element={<LeopardHome />} />
        <Route path="/fattail-info" element={<FattailMofInfo />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
