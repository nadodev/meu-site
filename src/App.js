import { BrowserRouter, Route, Routes } from "react-router-dom";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import { Home } from "./Pages/Home";
import "./styles/Global.scss";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Hero />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
