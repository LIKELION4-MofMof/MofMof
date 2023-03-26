import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from 'reportWebVitals';
import FattailHome from 'pages/FattailHome/FattailHome';
import CrestedHome from 'pages/CrestedHome/CrestedHome';
import LeopardHome from 'pages/LeopardHome/LeopardHome';
import FattailMofInfo from 'pages/FattailHome/FattailMofInfo';
import MorphCalc from 'components/morphCalc/MorphCalc';
import Diary from 'pages/Diary/Diary';
import Board from 'pages/Board/Board';
import Search from 'pages/Search/Search';
import EssentialGuide from 'pages/EssentialGuide/EssentialGuide';
import MyPage from './pages/MyPage/MyPage';

import { GlobalStyle } from './styles/GlobalStyle';
import MorphCalcResult from 'components/morphCalc/morphCalcResult/MorphCalcResult';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <GlobalStyle />
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/fattail-home" element={<FattailHome />} />
        <Route path="/crested-home" element={<CrestedHome />} />
        <Route path="/leopard-home" element={<LeopardHome />} />
        <Route path="/fattail-info" element={<FattailMofInfo />} />
        <Route path="/fattail-calc" element={<MorphCalc />} />
        <Route path="/fattail-calcResult" element={<MorphCalcResult />} />
        <Route path="/diary" element={<Diary />} />
        <Route path="/board" element={<Board />} />
        <Route path="/search" element={<Search />} />
        <Route path="/essentialGuide" element={<EssentialGuide />} />
        <Route path="/myPage" element={<MyPage />} />
      </Routes>
    </Router>
  </>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
