import "./App.css";
import Sidebar from "./Components/Sidebar/Sidebar";
import DynamicRoutes from "./Components/RoutesComponent/DynamicRoutes";
import CardsCollection from "./Components/CardsCollection/CardsCollection";

function App() {
  return (
    <div className="App">
      <div>
        <Sidebar />
      </div>
      <div>
        <DynamicRoutes />
      </div>
      <div>
        <CardsCollection/>
      </div>
    </div>
  );
}

export default App;
