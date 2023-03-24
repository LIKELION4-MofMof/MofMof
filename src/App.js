// import FattailHome from 'pages/FattailHome/FattailHome';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Fattail from './components/main/Fattail';
import Crested from './components/main/Crested';
import Leopard from './components/main/Leopard';
<<<<<<< HEAD
import { GlobalStyle } from 'styles/GlobalStyle';
=======
>>>>>>> c3d5a384e7413903910863eb08be9e0ad002887b


import { Header } from 'components/common/Header/Header';
import { Navigation } from 'components/common/Navigation/Navigation';

function App() {
  return (
<<<<<<< HEAD
    <>
      <GlobalStyle />
      <div className="App">
        <Header />
        <Navigation />

=======
    <div className="App">
      <Header/>
      <div className='mainContainer'>
>>>>>>> c3d5a384e7413903910863eb08be9e0ad002887b
        <Fattail />
        <Crested />
        <Leopard />
      </div>
<<<<<<< HEAD
    </>
  );
}
=======
      <Navigation />
      
    </div>
)}
>>>>>>> c3d5a384e7413903910863eb08be9e0ad002887b

export default App;
