import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useUser } from "../context/useUser";
import { useAlert } from "../context/AlertContext";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { user } = useUser();
  const { showAlert } = useAlert();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!user) {
      showAlert("Please login to access this page", "error");
      navigate("/login", { state: { from: location } });
    }
  }, [user, navigate, showAlert, location]);

  return <>{user ? children : null}</>;
};

export default ProtectedRoute;
