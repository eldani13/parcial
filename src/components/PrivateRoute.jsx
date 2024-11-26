import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem('token');
  // console.log("Token en localStorage:", token);  

  if (!token) {
    // console.log("No token, redirigiendo a /login");  
    return <Navigate to="/login" />;
  }

  return children;
};

export default PrivateRoute;
