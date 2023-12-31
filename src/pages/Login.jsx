import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useLoginMutation } from "../features/apis/authApiSlice";
import { createSession } from "../features/users/userDataSlice";
import { setShowOTPForm } from "../features/auth/otpSlice";
import { showMailAlert } from "../features/alerts/mailAlertSlice";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { Loader } from "../components";
import handleSHowHidePassword from "../assets/js/showHidePassword";


const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const { session } = useSelector((store) => store.userData);
    const [login, {isLoading}] = useLoginMutation();
    const navigate = useNavigate();
    const dispatch = useDispatch();
 
    
    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const data = await login({username, password}).unwrap();
            /**update local storage */
            localStorage.setItem('session', JSON.stringify(data.userInfo));
            dispatch(createSession({...data.userInfo}));
            
            /**clear form */
            setUsername("");
            setPassword("");
            /**success message alert */
            toast.success(data.message);
            /**redirect to profile/account page */
            navigate("/account");
        } catch (error) {
            if(error?.data?.message === "You have yet to confirm your email"){
                localStorage.setItem('session', JSON.stringify(error?.data?.userInfo));
                dispatch(createSession({...error?.data?.userInfo}));
                dispatch(setShowOTPForm(true));
                dispatch(showMailAlert());
                navigate("/signup");
            }
            setPassword("");
            toast.error(error?.data?.message || "Something went wrong. Please try again later");
        }
    }
    /**redirect to profile/account page if already logged in */
    useEffect(() => {
        /**check if he's  logged in*/
        if(session?.isLoggedIn){
            navigate("/account")
        }
        
    },[session?.isLoggedIn, navigate]);
    
    return (
        <section className="container mx-auto my-16 w-[95vw] bg-white dark:bg-gray-950 dark:text-gray-200 shadow-2xl p-4 max-w-[450px] rounded-xl">
            <h1 className="text-2xl capitalize text-center mb-8">sign in</h1>
            <form onSubmit={handleLogin}>
                <label className="block capitalize font-semibold my-2">username<span className="text-red-600">*</span></label>
                <input className="form-control" type="text" placeholder="Username" autoComplete="off" value={username} onChange={(e) => setUsername(e.target.value)} />
                <div className="flex justify-between items-center">
                    <label className="block capitalize font-semibold my-2">password<span className="text-red-600">*</span></label>
                    <span className="hidePassword cursor-pointer" onClick={handleSHowHidePassword}>
                        <i className="fa-regular fa-eye-slash"></i>
                    </span>
                    <span className="showPassword cursor-pointer hidden" onClick={handleSHowHidePassword}>
                        <i className="fa-regular fa-eye"></i>
                    </span>
                </div>
                <input className="form-control" type="password" placeholder="Password" autoComplete="off" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button className="inline-flex items-center justify-center my-4 shadow-md dark:shadow-sm  shadow-slate-400 border-2 rounded-full py-1 capitalize px-4 bg-blue-700 text-white hover:bg-blue-900"  type="submit" disabled={`${isLoading ? 'disabled' : ''}`}>
                    {isLoading && <Loader />}
                    {isLoading ? "please wait" : "sign in"}
                </button>
                <p>I forgot my password. <Link to="/resetpassword" className="capitalize text-blue-700">reset password</Link></p>
                <p>Dont't have an account? <Link className="capitalize text-blue-700" to="/signup">sign up</Link></p>
            </form>
        </section>
    )
}

export default Login;