import './App.css';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import Layout from './components/common/Layout/Layout';
import FattailHome from "./pages/FattailHome/FattailHome";
import CrestedHome from './pages/CrestedHome/CrestedHome';
import LeopardHome from './pages/LeopardHome/LeopardHome';

function App() {
  return (
    <div className="App">
      <Layout />
      <button>Fattail</button>
      <button>Crested</button>
      <button>Leopard</button>
        <Router>
          <Routes>
            <Route path="/fattail-home" element={<FattailHome />} />
            <Route path="/crested-home" element={<CrestedHome />} />
            <Route path="/leopard-home" element={<LeopardHome />} />
          </Routes>
        </Router>
    </div>
  )
}

export default App;
