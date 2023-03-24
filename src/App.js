import './App.css';
// import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Fattail from './components/main/Fattail';
import Crested from './components/main/Crested';
import Leopard from './components/main/Leopard';
import { GlobalStyle } from 'styles/GlobalStyle';

import { Header } from './components/common/Header/Header';
import { Navigation } from './components/common/Navigation/Navigation';

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <Header />
        <Navigation />

        <Fattail />
        <Crested />
        <Leopard />
      </div>
    </>
  );
}

export default App;
