import "./App.css";
import Sidebar from "./Components/Sidebar/Sidebar";
import DynamicRoutes from "./Components/RoutesComponent/DynamicRoutes";

function App() {
  return (
    <div className="App">
      <div>
        <Sidebar />
      </div>
      <div>
        <DynamicRoutes />
      </div>
    </div>
  );
}

export default App;
