import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Dapp from "./pages/Dapp";
import VirtualTours from "./pages/VirtualTours";
import Services from "./pages/Services";
import RealEstate from "./pages/RealEstate";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/services" element={<Services />} />
        <Route exact path="/realestate" element={<RealEstate />} />
        <Route exact path="/virtualtours" element={<VirtualTours />} />
        <Route exact path="/dapp" element={<Dapp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
