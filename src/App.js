import Login from './Login';
import './App.css';
import Dashboard from './Dashboard';
import { Routes, Route  , HashRouter } from 'react-router-dom';
function App() {
  return (
    <div className="App">
       < HashRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard/>} />
      </Routes>
      </ HashRouter>
    </div>
   
  );
}

export default App;
