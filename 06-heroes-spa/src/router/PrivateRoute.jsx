import { useContext } from "react"
import { Navigate, useLocation } from "react-router-dom";

import { AuthContext } from "../auth"


export const PrivateRoute = ( {children} ) => {

    const {logged} = useContext(AuthContext);
    const {pathname, search} = useLocation();

    const lastPast = pathname + search;

    localStorage.setItem('lastPath', lastPast)

  return (logged)
    ? children
    : <Navigate to={'/'}/>

}
