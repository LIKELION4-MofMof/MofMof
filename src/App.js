import './App.css';
// import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Layout from './components/common/Layout/Layout';
import Fattail from './components/main/Fattail';
import Crested from './components/main/Crested';
import Leopard from './components/main/Leopard';


function App() {
  return (
    <div className="App">
      <Layout />

      <Fattail />

      <Crested />

      <Leopard />
    </div>
  )
}

export default App;
