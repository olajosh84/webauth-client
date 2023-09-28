import { Navigate, Outlet} from "react-router-dom";
import { useSelector } from "react-redux";

const Protected = () => {
    const { session } = useSelector(store => store.userData);

    /**redirect user to login page if they are not logged in.
     * otherwise, remain here
     */
    return session?.isLoggedIn ? <Outlet /> : <Navigate to="/login" />
}

export default Protected;