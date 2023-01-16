import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './App.css';
import HomePage from './pages/Homepage';
import CreateTask from './pages/CreateTask';
import EditTask from './pages/EditTask';

function App() {
  return (
    <BrowserRouter className="App">
      <nav className="App-header">
        <Link to="/" >Home</Link>
        <Link to="/new-event" >New Event</Link>
      </nav>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/new-event' element={<CreateTask />} />
        <Route path='/:id' element={<EditTask />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
