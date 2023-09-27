import mailImg from "../assets/images/mail.png";
import { dismissMailAlert } from "../features/alerts/mailAlertSlice";
import { useDispatch } from "react-redux";

export default function MailAlert ({email}) {
    const dispatch = useDispatch();
    
    return (
        <aside className="relative flex flex-col items-center justify-center text-center bg-white dark:bg-gray-950 shadow-xl p-4 mx-auto mt-4 w-[95vw] max-w-[450px] transition-all ease-linear animateAlert">
            <img className="w-20 pb-1" src={mailImg} alt="Mail Alert"/>
            <h4 className="text-lg pb-1">Please verify your email to continue</h4>
            <p className="font-thin">A mail has been sent to the following address</p>
            <p className="font-thin">{email}</p>
            <p className="font-thin">Please enter the OTP sent to the address in the form below or click "Resend OTP"</p>
            <span className="absolute top-2 right-4 text-xl cursor-pointer" onClick={() => dispatch(dismissMailAlert())}>
                <i className="fa-solid fa-times"></i>
            </span>
            <span className="absolute top-2 left-4 text-xl text-[#17a2b8]">
                <i className="fa-solid fa-circle-info"></i>
            </span>
        </aside>
    )
}