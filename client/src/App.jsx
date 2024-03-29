// import './App.css';
import { Home } from './components/Home.jsx'
import Login from "./pages/login/loginpg.jsx"
import Register from "./pages/signup/register.jsx"
import UserFin from "./pages/userfin/UserFin.jsx";
import Assets from './pages/asset/Assets.jsx';
import { Dashboard } from './components/Dashboard.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {AuthContextProvider} from "./contex/AuthContext.jsx"
function App() {
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <Routes>
          {/* <Route exact path="/" element={<Register />} /> */}
          <Route exact path="/" element={<Login />} />
          <Route path="/home/:id" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/userfin" element={<UserFin />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/assets" element={<Assets />} />
        </Routes>
      </BrowserRouter>
    </AuthContextProvider>
  );
}

export default App;
