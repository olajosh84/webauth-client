import { useEffect } from "react";
import { useLogoutMutation } from "../features/apis/authApiSlice";
import { useDispatch } from "react-redux"
import { clearSession } from "../features/users/userDataSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Loading } from "../components";

export default function Logout () {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [logout, { isLoading }] = useLogoutMutation();

    useEffect(() => {
        const signOut = async () => {
            try {
                const data = await logout().unwrap();
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