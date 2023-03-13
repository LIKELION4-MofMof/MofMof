import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Layout from './components/common/Layout/Layout';
import FattailHome from "./pages/FattailHome/FattailHome";

function App() {
  return (
    <>
      <Router>
        <div className="App">
          
          <Layout/>
          <li><Link to="/fattail-home">fattail Home</Link></li>
        </div>
        <Routes>
          <Route path="/fattail-home" elemnet={<FattailHome />} />
        </Routes>
      </Router>
    </>

)}

export default App;
