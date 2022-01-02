import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Showcase from "./components/Showcase";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Showcase/>
      <Routes>
        <Route extact path="/">
         
        </Route>
        <Route path="/about"> </Route>
        <Route path="/projects"> </Route>
        <Route path="/contact"> </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
