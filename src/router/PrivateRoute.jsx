import { Children, useContext } from "react";

import { Navigate, useLocation, useNavigate } from "react-router-dom";
import Loading from "../component/Loading";
import { authContext } from "../component/AuthProvider/AuthProvider";



const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(authContext);
    const location = useLocation();
    // console.log(location);
    const navigate = useNavigate();
    if(loading){
        return <Loading></Loading>
    }
    if(user && user?.email){
        return children; 
        
    }
    return <Navigate state={location.pathname} to={"/login"}></Navigate>
};

export default PrivateRoute;