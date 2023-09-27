import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import slides from "../assets/js/slides";
import { handleSlideChange, setAllAnimationsToTrue, endAnimation } from "../features/slides/slideSlice";
import { useEffect } from "react";

export default function Slide () {
    const { count, animateSlide, animateCaption, animateTagLine, animateBtn} = useSelector((store) => store.slide);
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(setAllAnimationsToTrue());
    }, [count, dispatch])
    return (
        <div className="w-full h-screen relative">
            <img className={`w-full h-full object-cover absolute ${animateSlide ? 'animateSlide' : ''}`}   src={require(`../assets/images/${slides[count].img}`)} alt="slide" onAnimationEnd={() => dispatch(endAnimation("slide"))} />
            <div className="bg-black w-[90vw] px-4 py-8 text-center bg-opacity-40 absolute top-[30%] left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-xl border-t-4 border-t-sky-800">
                <h1 className={`transition-all  text-3xl text-white uppercase font-semibold ${animateCaption ? 'animateSlideCaption' : ''} `} onAnimationEnd={() => dispatch(endAnimation("caption"))}>{slides[count].caption}</h1>
                <p className={`transition-all text-white text-lg  ${animateTagLine ? 'animateTagLine' : ''} `} onAnimationEnd={() => dispatch(endAnimation("tagLine"))}>{slides[count].tagLine}</p>
                <Link to="/about">
                    <button className={`uppercase bg-transparent border-2 border-white rounded-full px-4 py-1 mt-8 text-white transition-all hover:bg-slate-900 ${animateBtn ? 'animateSlideBtn' : ''}`} onAnimationEnd={() => dispatch(endAnimation("btn"))}>read more</button>
                </Link>
            </div>
                
            <button id="prevBtn" className="absolute top-1/2 left-7 text-2xl bg-white w-10 h-10 rounded-full bg-opacity-20 hover:bg-opacity-100 z-10" onClick={() => dispatch(handleSlideChange("prevBtn"))}>
                <i className="fa-solid fa-arrow-left"></i>
            </button>
            <button id="nextBtn" className="absolute top-1/2 right-7 text-2xl bg-white w-10 h-10 rounded-full bg-opacity-20 hover:bg-opacity-100" onClick={() => dispatch(handleSlideChange("nextBtn")) }>
                <i className="fa-solid fa-arrow-right"></i>
            </button>
        </div>
    )
}