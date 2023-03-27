import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Layout from './components/common/Layout/Layout';
import Fattail from './components/main/Fattail';
import Crested from './components/main/Crested';
import Leopard from './components/main/Leopard';
import Main from 'components/main/Main';


import { Header } from './components/common/Header/Header';
import { Navigation } from './components/common/Navigation/Navigation';




function App() {
  return (
    <div className="App">
      <Header/>
      <Navigation />
      <Main />
      {/* <Fattail />
      <Crested />
      <Leopard /> */}
    </div>
)}

export default App;
