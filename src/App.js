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
import Login from "./pages/Login";
import ProtectedRoute from "./ProtectedRoute";
import { signOut } from "firebase/auth";
import { auth } from "./firebase";
import { useAuth } from "./AuthContext";

function App() {
  const { user, loading } = useAuth();

  async function handleLogout() {
    try {
      await signOut(auth);
    } catch (error) {
      alert("Unable to log out. Please try again.");
    }
  }
  return (
    <BrowserRouter>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/academics">Academics</NavLink>
        <NavLink to="/admission">Admission</NavLink>

        {!loading && (
          user ? (
            <button type="button" onClick={handleLogout}>
              Logout
            </button>
          ) : (
            <NavLink to="/login">Login</NavLink>
          )
        )}
      </nav>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/login" element={<Login />} />

          <Route
            path="/academics"
            element={
              <ProtectedRoute>
                <Academics />
              </ProtectedRoute>
            }
          />

          <Route
            path="/admission"
            element={
              <ProtectedRoute>
                <Admission />
              </ProtectedRoute>
            }
          />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
