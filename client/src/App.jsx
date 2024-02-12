// import './App.css';
import { Home } from './components/Home.jsx'
import { Sidebar } from './components/Sidebar.jsx'
import Login from "./pages/login/loginpg.jsx"
import Register from "./pages/signup/register.jsx"
import Profile from "./components/Profile.jsx";
import UserFin from "./pages/userfin/UserFin.jsx";
import Assets from './pages/asset/Assets.jsx';
import { Dashboard } from './components/Dashboard.jsx';

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route exact path="/" element={<Register />} /> */}
        <Route exact path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/userfin" element={<UserFin />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/assets" element={<Assets />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
