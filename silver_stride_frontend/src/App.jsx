// import './App.css';
import { Home } from './components/Home.jsx'
import { Sidebar } from './components/Sidebar.jsx'
function App() {
  return (
    <div>
      <div className="flex">
        <Sidebar/>
        <div className="w-full ">
          <Home/>
        </div>
      </div>
    </div>
  );
}

export default App;
