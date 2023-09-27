import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Loader } from "../components";
import { toast } from "react-toastify";
import { useVerifyEmailMutation, useVerifyOtpMutation, useResetPasswordMutation, useSendMailMutation } from "../features/apis/authApiSlice";
import handleSHowHidePassword from "../assets/js/showHidePassword";

let timeLeft = 60 * 5;
const ResetPassword = () => {
    const [time, setTime] = useState(0);
    const [userEmail, setUserEmail ] = useState("");
    const [password, setPassword ] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [otp, setOtp] = useState("");
    const [showOtherForms, setShowOtherForms] = useState({otpForm: false, passForm: false});
    const { otpForm, passForm } = showOtherForms;
    const [loading, setLoading] = useState(false);
    const [verifyEmail, { isLoading }] = useVerifyEmailMutation();
    const [verifyOtp] = useVerifyOtpMutation();
    const [resetPassword] = useResetPasswordMutation();
    const [ sendMail ] = useSendMailMutation();
    const navigate = useNavigate();

    const handleEmailSubmit = async (e) => {
        e.preventDefault();
        try {
            const data = await verifyEmail({userEmail}).unwrap();
            setShowOtherForms(prevState => {
                return {
                    ...prevState,
                    otpForm: true
                }
            });
            setTime(timeLeft);
            toast.success(data.message);
        } catch (error) {
            toast.error(error?.data?.message || "Something went wrong");
        }
    } 
    const handleOtpSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const data = await verifyOtp({userEmail, otp}).unwrap();
            setLoading(false);
            setShowOtherForms(prevState => {
                return {
                    ...prevState,
                    otpForm: false,
                    passForm: true
                }
            })
            setOtp("");
            toast.success(data.message);
        } catch (error) {
            setLoading(false);
            setOtp("");
            //console.log(otp)
            toast.error(error?.data?.message || "Something went wrong");
        }
    }
    const handlePasswordReset = async (e) => {
        e.preventDefault();
        setLoading(true);
        
        try {
            const data = await resetPassword({userEmail, password, confirmPassword}).unwrap();
            setLoading(false);
            setShowOtherForms(prevState => {
                return {
                    ...prevState,
                    otpForm: false,
                    passForm: false
                }
            })
            setUserEmail("");
            setOtp("");
            setPassword("");
            setConfirmPassword("");
            toast.success(data.message);
            /**redirect user to login page */
            navigate("/login");
        } catch (error) {
            setLoading(false);
            toast.error(error?.data?.message || "Something went wrong");
        }
    }
    const handleOtpResend = async () => {
        if(time > 0){ // you can only resend otp if the alloted has elapsed, in this case 5 min
            return;
        }
        try {
            const data = await sendMail({userEmail}).unwrap();
            setTime(timeLeft);
            toast.success(data.message);
        } catch (error) {
            toast.error(error?.data?.message || "Something went wrong");
        }
    }
    
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
    
    return (
        <section className="container mx-auto my-16 w-[95vw] bg-white dark:bg-gray-950 shadow-2xl p-4 max-w-[450px] rounded-xl">
            <h1 className="text-2xl capitalize text-center mb-8">reset password</h1>
            {!otpForm && !passForm && <form onSubmit={handleEmailSubmit}>
                <label className="block capitalize font-semibold my-2">Email<span className="text-red-600">*</span></label>
                <input className="form-control" type="text" placeholder="Enter your email address" autoComplete="off" autoFocus value={userEmail} onChange={(e) => setUserEmail(e.target.value)} />
                <button className="inline-flex items-center justify-center my-4 shadow-md dark:shadow-sm shadow-slate-400 border-2 rounded-full py-1 capitalize px-4 bg-blue-700 text-white hover:bg-blue-900"  type="submit" disabled={`${isLoading ? 'disabled' : ''}`}>
                    {isLoading && <Loader />}
                    {isLoading ? 'Please wait' : 'submit'}
                </button>
            </form>}
            {otpForm && <form onSubmit={handleOtpSubmit}>
                <input type="hidden" value={userEmail} readOnly />
                <label className="block capitalize font-semibold my-2">OTP<span className="text-red-600">*</span></label>
                <input className="form-control" type="text" maxLength={6} placeholder="Enter OTP" autoComplete="off" autoFocus value={otp} onChange={(e) => setOtp(e.target.value)}  />
                <small className="block py-1"  >
                    <span className="cursor-pointer" onClick={handleOtpResend}>
                        {time === 0  ? 'Resend OTP' : ''}
                        {time > 0 ? `${Math.floor(time / 60)}`.padStart(2, 0) + ':' + `${time % 60}`.padStart(2,0) : ''}
                    </span>
                </small>
                <button className="inline-flex items-center justify-center my-4 shadow-md dark:shadow-sm shadow-slate-400  border-2 rounded-full py-1 capitalize px-4 bg-blue-700 text-white hover:bg-blue-900"  type="submit" disabled={`${loading ? 'disabled' : ''}`}>
                    {loading && <Loader />}
                    {loading ? 'Please wait' : 'submit'}
                </button>
            </form>}
            {passForm && <form onSubmit={handlePasswordReset}>
                <input type="hidden" value={userEmail} readOnly />
                <div className="flex justify-between items-center">
                    <label className="block capitalize font-semibold my-2">password<span className="text-red-600">*</span></label>
                    <span className="hidePassword cursor-pointer" onClick={handleSHowHidePassword}>
                        <i className="fa-regular fa-eye-slash"></i>
                    </span>
                    <span className="showPassword cursor-pointer hidden" onClick={handleSHowHidePassword}>
                        <i className="fa-regular fa-eye"></i>
                    </span>
                </div>
                <input className="form-control" type="password" placeholder="Enter new password" autoComplete="off" autoFocus value={password} onChange={(e) => setPassword(e.target.value)} />
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
                <input className="form-control" type="password" placeholder="Retype password" autoComplete="off" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                <button className="inline-flex items-center justify-center my-4 shadow-md dark:shadow-sm shadow-slate-400 border-2 rounded-full py-1 capitalize px-4 bg-blue-700 text-white hover:bg-blue-900"  type="submit" disabled={`${loading ? 'disabled' : ''}`}>
                    {loading && <Loader />}
                    {loading ? 'please wait' : 'reset password'}
                </button>
            </form>}
        </section>
    )
}

export default ResetPassword;