// import FattailHome from 'pages/FattailHome/FattailHome';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Fattail from './components/main/Fattail';
import Crested from './components/main/Crested';
import Leopard from './components/main/Leopard';


import { Header } from 'components/common/Header/Header';
import { Navigation } from 'components/common/Navigation/Navigation';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className='mainContainer'>
        <Fattail />
        <Crested />
        <Leopard />
      </div>
      <Navigation />
      
    </div>
)}

export default App;
