import { useEffect } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useAuthenticateUserMutation } from "../features/apis/authApiSlice";
import { createSession } from "../features/users/userDataSlice";
import Loading from "./Loading";

const Protected = () => {
    const { session } = useSelector(store => store.userData);
    const [authenticateUser, { isLoading }] = useAuthenticateUserMutation();
    const dispatch = useDispatch();
    const navigate = useNavigate();
   
    /**Authenticating user */
    useEffect( () => {
        const userAuth = async () => {
            try {
                const data = await authenticateUser().unwrap();
                if(data){
                    dispatch(createSession({...data?.sessionInfo}));
                }
            } catch (error) {
                /**if expired token*/
                //if(error?.data?.status && error?.data?.status === 'expired token'){
                    //dispatch(clearUserData());
                    navigate("/login");
                //}
                //toast.error(error?.data?.message || 'Something went wrong');
                //navigate('/login');
            }
        }
        userAuth();
    },[]);
    
    /**show loader if still fetching data */
    if(isLoading) return <Loading text="authenticating" />
    
    /**redirect user to login page if they are not logged in.
     * otherwise, remain here
     */
    return session?.isLoggedIn ? <Outlet /> : <Navigate to="/login" />
}

export default Protected;