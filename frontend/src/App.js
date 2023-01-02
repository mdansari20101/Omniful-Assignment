import "./App.css";
import Sidebar from "./Components/Sidebar/Sidebar";
import DynamicRoutes from "./Components/RoutesComponent/DynamicRoutes";
import CardsCollection from "./Components/CardsCollection/CardsCollection";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <div className="navbarParent"><Navbar/></div>
      <div className="appbody">
      <div>
        <Sidebar />
      </div>
      <div>
        <DynamicRoutes />
      </div>
      <div className="cardsparentdiv">
        <CardsCollection/>
      </div>
      </div>
    </div>
  );
}

export default App;
