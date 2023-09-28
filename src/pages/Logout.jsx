import { useEffect } from "react";
import { useDispatch } from "react-redux"
import { clearSession } from "../features/users/userDataSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


export default function Logout () {
    const dispatch = useDispatch();
    const navigate = useNavigate();
  
    useEffect(() => {
        localStorage.removeItem("session");
        dispatch(clearSession());
        navigate("/login");
        toast.success("Logout successful");
    },[navigate, dispatch])
}