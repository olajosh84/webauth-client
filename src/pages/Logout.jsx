import { useEffect } from "react";
import { useLogoutMutation } from "../features/apis/authApiSlice";
import { useDispatch, useSelector } from "react-redux"
import { clearSession } from "../features/users/userDataSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Loading } from "../components";
import { useCookies } from "react-cookie";

export default function Logout () {
    const { cookieExpiry } = useSelector(store => store.userData);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [logout, { isLoading }] = useLogoutMutation();
    const [cookies, removeCookie] = useCookies([]);

    useEffect(() => {
        const signOut = async () => {
            try {
                const data = await logout().unwrap();
                //remove user cookies
                removeCookie('token', "", {
                    expires: new Date(0)
                })
                dispatch(clearSession());
                toast.success(data.message);
                navigate("/login");
            } catch (error) {
                toast.error("Something went wrong");
            }
        }
        signOut();
    },[dispatch, navigate, logout])

    return (
        <div>
            {isLoading && <Loading text="Logging out..." />}
        </div>
    )
    
}