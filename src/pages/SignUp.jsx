import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";
import { useRegisterMutation, useVerifyOtpMutation, useSendMailMutation, 
    useConfirmUserMutation, useAuthenticateUserMutation } from "../features/apis/authApiSlice";
import { createSession } from "../features/users/userDataSlice";
import { toast } from "react-toastify";
import { Loader, MailAlert } from "../components";
import { useSelector, useDispatch } from "react-redux";
import { showMailAlert, dismissMailAlert } from "../features/alerts/mailAlertSlice";
import { setLoading, setShowOTPForm } from "../features/auth/otpSlice";
import handleSHowHidePassword from "../assets/js/showHidePassword";

let timeLeft = 60 * 5;

export default function SignUp () {
    const {showAlert} = useSelector(store => store.mailAlert);
    const { session, cookieExpiry } = useSelector(store => store.userData);
    const { loading, showOTPForm} = useSelector((store) => store.otpInfo);
    const [time, setTime] = useState(0);
    const [otp, setOtp] = useState("");
    const [formData, setFormData] = useState({email: "", username: "", password: "", confirmPassword: ""});
    const { email, username, password, confirmPassword } = formData;
    const [register, { isLoading }] = useRegisterMutation();
    const [verifyOtp] = useVerifyOtpMutation();
    const [sendMail] = useSendMailMutation();
    const [confirmUser] = useConfirmUserMutation();
    const [authenticateUser] = useAuthenticateUserMutation(); 
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [cookies, setCookie] = useCookies([]);
   
    /**run on every change in input */
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: value
            }
        })
    }
    /**run on sign up form submit */
    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            const data = await register(formData).unwrap();
            /**save token in cookie */
            setCookie('token', data.token, {
                //secure: process.env.REACT_APP_ENV === "production",
                //sameSite: "strict",
                expires: cookieExpiry
            })
            /**get session saved in cookies and update state */
            const data2 = await authenticateUser().unwrap();
            if(data2){
                dispatch(createSession({...data2.sessionInfo}));
            }
            /**save user details in local storage */
            setTime(timeLeft);
            /**clear form */
            setFormData(prevFormData => {
                return {
                    ...prevFormData,
                    username: "",
                    password: "",
                    confirmPassword: ""
                }
            })
            toast.success(data.message);
            /**show mail alert */
            dispatch(showMailAlert());
            /**redirect to otp section */
            dispatch(setShowOTPForm(true));
        } catch (error) {
            /**clear passwords */
            setFormData(prevFormData => {
                return {
                    ...prevFormData,
                    password: "",
                    confirmPassword: ""
                }
            })
            toast.error(error?.data?.message || "Something went wrong.");
        }
    }

    const handleOTPSubmit = async (e) => {
        e.preventDefault();
        /**dismiss mail alert if open*/
        dispatch(dismissMailAlert());
        dispatch(setLoading(true));
        let userEmail = email ? email : session?.email;
        try {
            /**verify otp and confirm user */
            const data = await verifyOtp({userEmail, otp}).unwrap();
            const verify = await confirmUser({userEmail}).unwrap();
            /**update cookies with theuser's new info */
            setCookie('token', verify.token, {
                //secure: process.env.REACT_APP_ENV === "production",
                //sameSite: "strict",
                expires: cookieExpiry
                
            })
            /**get session saved in cookies and update state */
            const data2 = await authenticateUser().unwrap();
            if(data2){
                dispatch(createSession({...data2.sessionInfo}));
            }
            /**update user info/data */
            dispatch(setLoading(false));
            dispatch(setShowOTPForm(false));
            setOtp("");
            toast.success(data.message);
            /**dismiss mail alert */
            navigate("/login");
        } catch (error) {
            dispatch(setLoading(false));
            setOtp("");
            toast.error(error?.data?.message || "Something went wrong");
        }
    }

    const handleOtpResend = async () => {
        if(time > 0){ // you can only resend otp if the alloted has elapsed, in this case 5 min
            return;
        }
        /**dismiss mail alert if open*/
        dispatch(dismissMailAlert());
        setOtp("");
        let userEmail = email ? email : session?.email;
        try {
            const data = await sendMail({userEmail}).unwrap();
            setTime(timeLeft);
            toast.success(data.message);
        } catch (error) {
            toast.error(error?.data?.message || "Something went wrong");
        }
    }

    /**start timer */
    useEffect(() => {
        let timer = setInterval(() => {
            setTime((time) => {
                if(time === 0){
                    clearInterval(timer);
                    return 0;
                }else {
                    return time - 1;
                }
            })
        }, 1000);
        return () => clearInterval(timer);
    },[time]);

    /**redirect to login page if user is confirmed. otherwise, remain here */
    useEffect(() => {
        if(session?.confirmed){
            navigate("/login");
        }
    },[session?.confirmed, navigate]);
    
    return (
        <>
            {/* Mail Alert */}
            {showAlert && <MailAlert email={email || session?.email} />}
            <section className="container mx-auto my-8 w-[95vw] bg-white dark:bg-gray-950 dark:text-gray-200 shadow-xl p-4 max-w-[450px] rounded-xl">
                <h1 className="text-2xl capitalize text-center mb-8">sign up</h1>
                {/*signup form */}
                {!showOTPForm && <form onSubmit={handleRegister}>
                    <label className="block capitalize font-semibold my-2">email<span className="text-red-600">*</span></label>
                    <input className="form-control" type="text" placeholder="Email" autoComplete="off" name="email" value={email} onChange={handleInputChange} />
                    <label className="block capitalize font-semibold my-2">username<span className="text-red-600">*</span></label>
                    <input className="form-control" type="text" placeholder="Username" autoComplete="off" name="username" value={username} onChange={handleInputChange} />
                    <div className="text-sm flex gap-1 md:text-lg">
                        <small>4 characters min</small>
                        <small>|</small>
                        <small>15 characters max</small>
                    </div>
                    <div className="flex justify-between items-center">
                        <label className="block capitalize font-semibold my-2">password<span className="text-red-600">*</span></label>
                        <span className="hidePassword cursor-pointer" onClick={handleSHowHidePassword}>
                            <i className="fa-regular fa-eye-slash"></i>
                        </span>
                        <span className="showPassword cursor-pointer hidden" onClick={handleSHowHidePassword}>
                            <i className="fa-regular fa-eye"></i>
                        </span>
                    </div>
                    <input className="form-control" type="password" placeholder="Password" autoComplete="off" name="password" value={password} onChange={handleInputChange} />
                    <div  className="text-sm md:text-lg"><small>8 characters min</small></div>
                    <div className="flex justify-between items-center">
                        <label className="block capitalize font-semibold my-2">retype password<span className="text-red-600">*</span></label>
                        <span className="hidePassword cursor-pointer" onClick={handleSHowHidePassword}>
                            <i className="fa-regular fa-eye-slash"></i>
                        </span>
                        <span className="showPassword cursor-pointer hidden" onClick={handleSHowHidePassword}>
                            <i className="fa-regular fa-eye"></i>
                        </span>
                    </div>
                    <input className="form-control" type="password" placeholder="Retype password" autoComplete="off" name="confirmPassword" value={confirmPassword} onChange={handleInputChange} />
                    <button className="inline-flex items-center justify-center my-4 shadow-md dark:shadow-sm shadow-slate-400 border-2 rounded-full py-1 capitalize px-4 bg-blue-700 hover:bg-blue-900 text-white" type="submit" disabled={`${isLoading ? 'disabled' : ''}`}>
                        {isLoading && <Loader />}
                        {isLoading ? "please wait" : "sign up"}
                    </button>
                    <p>I have an account. <Link className="capitalize text-blue-700" to="/login">sign in</Link></p>
                    
                </form>}
                {/*OTP form */}
                {showOTPForm && <form onSubmit={handleOTPSubmit}>
                    <input type="hidden" readOnly value={email || session?.email} />
                    <label className="block capitalize font-semibold my-2">OTP<span className="text-red-600">*</span></label>
                    <input className="form-control" type="text" maxLength={6} placeholder="Enter OTP" autoComplete="off" value={otp} onChange={(e) => setOtp(e.target.value)}/>
                    <small className="block py-1"  >
                        <span className="cursor-pointer" onClick={handleOtpResend}>
                            {time === 0  ? 'Resend OTP' : ''}
                            {time > 0 ? `${Math.floor(time / 60)}`.padStart(2, 0) + ':' + `${time % 60}`.padStart(2,0) : ''}
                        </span>
                    </small>
                    <button className="inline-flex items-center justify-center my-4 shadow-md dark:shadow-sm shadow-slate-400 border-2 rounded-full py-1 capitalize px-4 bg-blue-700 hover:bg-blue-900 text-white"  type="submit" disabled={`${isLoading ? 'disabled' : ''}`}>
                        {loading && <Loader />}
                        {loading ? "please wait" : "submit"}
                    </button>
                </form>}
            </section>
        </>
        
    )
}