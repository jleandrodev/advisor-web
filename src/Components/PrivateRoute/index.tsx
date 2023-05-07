import { Navigate } from "react-router-dom"

interface PrivateRouteProps {
  children: React.ReactNode
}


const PrivateRoute = ({ children } : PrivateRouteProps) => {
  const token = localStorage.getItem('token')

  const isAuth = token

  return isAuth ? children : <Navigate to='/login' />

};

export default PrivateRoute