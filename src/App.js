import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './App.css';
import HomePage from './pages/Homepage';

function App() {
  return (
    <BrowserRouter className="App">
      <nav className="App-header">
        <Link to="/" >Home</Link>
      </nav>
      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
