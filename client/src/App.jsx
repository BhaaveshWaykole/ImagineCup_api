// import './App.css';
import { Home } from './components/Home.jsx'
import { Sidebar } from './components/Sidebar.jsx'
import Login from "./pages/login/loginpg.jsx"
import Register from "./pages/signup/register.jsx"
import Profile from "./components/Profile.jsx";
function App() {
  return (
    <div>
      {/* <div className="flex">
        <Sidebar/>
        <div className="w-full ">
          <Home/>
        </div>
      </div> */}
      <Profile />
    </div>
  );
}

export default App;
