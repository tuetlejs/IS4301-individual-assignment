import {
  BrowserRouter,
  NavLink,
  Routes,
  Route,
} from "react-router-dom";

import Home from "./pages/Home";
import Academics from "./pages/Academics";
import Admission from "./pages/Admission";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/academics">Academics</NavLink>
        <NavLink to="/admission">Admission</NavLink>
      </nav>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/admission" element={<Admission />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
