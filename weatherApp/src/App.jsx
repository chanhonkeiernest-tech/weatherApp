import { Outlet } from "react-router";
import NavBar from "./components/NavBar";
import { DegreeProvider } from "./context/DegreeContext";
import { LocationProvider } from "./context/LocationContext";
import "./App.css";

function App() {
  return (
    <DegreeProvider>
    <LocationProvider>
      <NavBar/>
      <main>
        <Outlet />
      </main>
    </LocationProvider>
    </DegreeProvider>
  );
}

export default App;
