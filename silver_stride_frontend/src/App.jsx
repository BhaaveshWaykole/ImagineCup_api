// import './App.css';
import { Home } from './components/Home.jsx'
import { Sidebar } from './components/Sidebar.jsx'
import Login from "./pages/login/loginpg.jsx"
import Register from "./pages/signup/register.jsx"
function App() {
  return (
    <div>
      {/* <div className="flex">
        <Sidebar/>
        <div className="w-full ">
          <Home/>
        </div>
      </div> */}
      <Register />
    </div>
  );
}

export default App;
