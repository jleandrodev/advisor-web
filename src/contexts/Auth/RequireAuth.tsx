import { useContext } from "react"
import { Navigate, useNavigate } from "react-router-dom"
import Login from "../../pages/Login/Index"
import { AuthContext } from "./AuthContext"


export const RequireAuth = ({children} : {children: JSX.Element}) => {

  const auth = useContext(AuthContext)
  const navigate = useNavigate()

  if(!auth.user){

      return <Login />
    
  } else {
    
    return children
  }

}