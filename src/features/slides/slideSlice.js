import { createSlice } from "@reduxjs/toolkit";
import slides from "../../assets/js/slides";

const initialState = {
    count: 0,
    animateSlide: false,
    animateCaption: false, 
    animateTagLine: false, 
    animateBtn: false,
}
const slideSlice = createSlice({
    name: "slide",
    initialState,
    reducers: {
        handleSlideChange: (state, action) => {
            if(action.payload === "prevBtn"){
                state.count = state.count - 1;
                if(state.count < 0){
                    state.count = slides.length - 1;
                }
            }else{
                state.count = state.count + 1;
                if(state.count > slides.length - 1){
                    state.count = 0;
                }
            }
            state.animateSlide = true;
            state.animateCaption = true;
            state.animateTagLine = true;
            state.animateBtn = true;
        },
        setAllAnimationsToTrue: (state) => {
            state.animateSlide = true;
            state.animateCaption = true;
            state.animateTagLine = true;
            state.animateBtn = true;
        },
        endAnimation: (state, action) => {
            switch (action.payload) {
                case "slide":
                    state.animateSlide = false;    
                    break;
                case "caption":
                    state.animateCaption = false;
                    break;
                case "tagLine":
                    state.animateTagLine = false;
                    break;
                case "btn":
                    state.animateBtn = false;
                    break;
                default:
                    break;
            }
        }
    }
})
export const { handleSlideChange, setAllAnimationsToTrue, endAnimation } = slideSlice.actions;
export default slideSlice.reducer;