import { Routes,Route } from "react-router-dom";
import './App.css';
import Home from "./components/Home";
import LandingPage from "./components/LandingPage";
function App() {
  return (
    <Routes>
      <Route path="/home" element={<Home />}></Route>
      <Route path="/details/:name/:year/:url" element={<LandingPage />}></Route>
    </Routes>
  );
}

export default App;
