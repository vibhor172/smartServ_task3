import Login from './Login';
import './App.css';
import Dashboard from './Dashboard';
import { Routes, Route  ,BrowserRouter } from 'react-router-dom';
function App() {
  return (
    <div className="App">
       <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard/>} />
      </Routes>
      </BrowserRouter>
    </div>
   
  );
}

export default App;
