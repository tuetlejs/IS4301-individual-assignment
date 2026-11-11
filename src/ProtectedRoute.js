import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();

  if (loading) {
    return <p>Checking sign-in...</p>;
  }

  if (!user) {
    return (
      <Navigate
        to="/login"
        replace
        state={{ message: "Please sign in to access Academics or Admission." }}
      />
    );
  }

  return children;
}

export default ProtectedRoute;
