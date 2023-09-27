import { useSelector, useDispatch } from "react-redux";
import { Avatars, Loader } from "../components";
import { handleShowAvatars } from "../features/users/accountSlice";
import { useState } from "react";
import { useUpdateProfileMutation } from "../features/apis/userApiSlice";
import { createSession } from "../features/users/userDataSlice";
import { useAuthenticateUserMutation } from "../features/apis/authApiSlice";
import { toast } from "react-toastify";

export default function Profile () {
    const { session } = useSelector(store => store.userData);
    const { showAvatars, selectedAvatar } = useSelector(store => store.accountInfo);
    const [ firstName, setFirstName ] = useState(session?.firstName || "");
    const [ lastName, setLastName ] = useState(session?.lastName || "");
    const [ updateProfile, { isLoading } ] = useUpdateProfileMutation();
    const [ authenticateUser ] = useAuthenticateUserMutation(); 
    const dispatch = useDispatch();

    /**handle sent avatar */
    let sentAvatar;
    if(selectedAvatar){
        sentAvatar = selectedAvatar;
    } else if(session?.userAvatar){
        sentAvatar = session?.userAvatar
    } else sentAvatar = "";

    /**handle display picture */
    let displayPicture;
    if(selectedAvatar) {
        displayPicture = selectedAvatar;
    } else if(session?.userAvatar){
        displayPicture = session?.userAvatar;
    } else {
        displayPicture = 'user.png';
    }

    const handleProfileUpdate = async (e) => {
        e.preventDefault();
        try {
            const data = await updateProfile({userId: session?.userId, firstName, lastName, sentAvatar }).unwrap();
            const data2 = await authenticateUser().unwrap();
            if(data2){
                dispatch(createSession({...data2.sessionInfo}));
            }
            toast.success(data.message);
        } catch (error) {
            toast.error(error?.data?.message || "Something went wrong");
        }
        
    }
     
    return (
        <div className="relative overflow-hidden px-8">
            <form className="" onSubmit={handleProfileUpdate}>
                <header className="flex flex-col justify-center items-center pb-8">
                    <img className="w-40 pb-2 cursor-pointer rounded-full" src={require(`../assets/images/${displayPicture}`)} alt="" onClick={() => dispatch(handleShowAvatars(true))} title="Select Avatar" />
                    <p>
                        @{session?.username}
                    </p>
                    <p>
                        {session?.email}
                    </p>
                </header>
                <input type="hidden" placeholder =" user avatar" value={session?.userId} readOnly /> 
                <input type="hidden" placeholder =" user avatar" value={sentAvatar} readOnly />           
                <label className="block capitalize font-semibold my-2">First Name</label>
                <input type="text" className="form-control" autoComplete="off" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                <label className="block capitalize font-semibold my-2">Last Name</label>
                <input type="text" className="form-control" autoComplete="off" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                <button className="inline-flex items-center justify-center my-4 shadow-md dark:shadow-sm shadow-slate-400 border-2 rounded-full py-1 capitalize px-4 bg-blue-700 text-white hover:bg-blue-900"  type="submit" disabled={`${isLoading ? 'disabled' : ''}`} >
                    {isLoading && <Loader />}
                    {isLoading ? 'please wait' : 'update'}
                </button>
            </form>
            {showAvatars && <Avatars />}
        </div>
        
    )
}