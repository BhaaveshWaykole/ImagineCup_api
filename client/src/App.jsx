// import './App.css';
import { Home } from './components/Home.jsx'
import { Sidebar } from './components/Sidebar.jsx'
import Login from "./pages/login/loginpg.jsx"
import Register from "./pages/signup/register.jsx"
import Profile from "./components/Profile.jsx";
import UserFin from "./pages/userfin/UserFin.jsx";
import Assets from './pages/asset/Assets.jsx';
import { Dashboard } from './components/Dashboard.jsx';
function App() {
  return (
    <div>
       {/* <div className="flex">
        <Sidebar/>
        <div className="w-full ">
        <Dashboard />
        </div>
      </div>  */}
     <Register/>
    </div>
  );
}

export default App;
