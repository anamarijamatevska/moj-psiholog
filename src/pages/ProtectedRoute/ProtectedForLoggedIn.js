import { Navigate } from "react-router-dom";

const ProtectedForLoggedIn = ({ user, children }) => {
  if (user) {
    return <Navigate to="/welcome" replace />;
  }

  return children;
};

export default ProtectedForLoggedIn