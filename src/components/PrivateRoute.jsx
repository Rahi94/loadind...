import { useContext } from "react";
import { authContext } from "./AuthProvider";
import { Navigate, useNavigate } from "react-router-dom";


const PrivateRoute = ({ children }) => {
    const { user, loading, setLoading } = useContext(authContext)
    const navigate = useNavigate()
    console.log(user, loading)

    

    return(
        <>
        {
            user ? children : <Navigate to="/login"></Navigate>
        }
        </>
    )

}
export default PrivateRoute;