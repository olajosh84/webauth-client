/**show/hide password */
export default function handleSHowHidePassword (e) {
    let targetEl = e.currentTarget;
    let passwordEl = targetEl.parentNode.nextElementSibling;
    let siblingEl = targetEl.nextElementSibling || targetEl.previousElementSibling;
    if(targetEl.classList.contains("hidePassword")){
        siblingEl.classList.remove("hidden");
        targetEl.classList.add("hidden");
        passwordEl.setAttribute("type", "text");
    }else{
        siblingEl.classList.remove("hidden");
        targetEl.classList.add("hidden");
        passwordEl.setAttribute("type", "password");
    }
}