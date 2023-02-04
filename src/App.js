import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './App.css';
import HomePage from './pages/Homepage';
import CreateEvent from './pages/CreateEvent';
import EditEvent from './pages/EditEvent';

import Login from './pages/Login';
import Success from './pages/SuccessPage';

function App() {
  return (
    <BrowserRouter className="App">
      <nav className="App-header">
        <Link to="/" >Home</Link>
        <Link to="/new-event" >New Event</Link>
        <Link to="/login" >Log In</Link>
      </nav>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/new-event' element={<CreateEvent />} />
        <Route path='/:id' element={<EditEvent />} />
        <Route path='/login' element={<Login />} />
        <Route path='/success' element={<Success />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
