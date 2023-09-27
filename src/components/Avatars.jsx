import { useRef } from "react";
import useOutsideClick from "../custom-hooks/useOutsideClick";
import { useDispatch } from "react-redux";
import avatars from "../assets/js/avatars";
import { handleShowAvatars, hideAvatars, handleSelectAvatar } from "../features/users/accountSlice";

const Avatars = () => {
    const dispatch = useDispatch();
    const avatarRef = useRef();
    useOutsideClick(avatarRef, () => dispatch(hideAvatars()));
    
    return (
        <section className="absolute overflow-hidden top-0 left-0 bg-white dark:bg-gray-950 shadow-xl p-4 animateAvatars" ref={avatarRef}>
            <header className="flex justify-between mb-4">
                <h2 className="font-mono">Select Avatar</h2>
                <span className="text-xl cursor-pointer" title="Close Avatar" onClick={() => dispatch(handleShowAvatars(false))}>
                    <i className="fa-solid fa-times"></i>
                </span>
            </header>
            <div className="grid grid-cols-4 md:grid-cols-5 gap-2">
                {
                    avatars.map(avatar => <img key={avatar.id} className="cursor-pointer object-cover" src={require(`../assets/images/${avatar.img}`)} alt="avatar" onClick={(e) => dispatch(handleSelectAvatar(avatar.img))} />)
                }
            </div>
            {/*<button className="outline outline-1 rounded-full px-4 py-0.5 transition-all ease-linear duration-200 capitalize text-center mt-8 hover:bg-blue-700 hover:outline-blue-700 hover:text-white">select</button>*/}
        </section>
    )
}

export default Avatars;