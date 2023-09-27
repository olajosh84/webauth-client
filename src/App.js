import { Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { handleBackToTopBtn, hideBackToTopBtn } from "./features/modals/backToTopSlice";
import { 
  Home, About, Contact, Blog, SignUp, 
  Login, Logout, Account, ResetPassword, 
  SinglePost, Profile, Settings, Messages, Notifications } from "./pages";
import { SharedLayout, ScrollToTop, Protected, BackToTop, NotFound } from "./components";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";

const App = () => {
  const { showBackToTopBtn } = useSelector(store => store.backToTop);
  const dispatch = useDispatch();

  /**takes care of back-to-top link's visibility and otherwise */
  useEffect(() => {
    let toggleBackToTopBtn = window.addEventListener("scroll", () => {
      let windowHeight = window.scrollY;
      windowHeight > 500 ? dispatch(handleBackToTopBtn()) : dispatch(hideBackToTopBtn());
    });
    return () => {
      window.removeEventListener("scroll", toggleBackToTopBtn);
    }
  },[dispatch])
  return (
    <div>
      <ToastContainer theme="colored" />
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog/:postId" element={<SinglePost/>} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />}/>
          <Route path="resetpassword" element={<ResetPassword />} />
          <Route path="*"  element={<NotFound />} />
          <Route path="notFound"  element={<NotFound />} />
          {/**Protected Routes */}
          <Route path="" element={<Protected />}>
            <Route path="/account" element={<Account />} >
              <Route index element={<Profile />}  />
              <Route path="settings" element={<Settings />} />
              <Route path="notifications" element={<Notifications />} />
              <Route path="messages" element={<Messages />} />
              <Route path="logout" element={<Logout/>} />
            </Route>
          </Route>
        </Route>
        {/*<Route path="logout" element= {<Logout />} />*/}
      </Routes>
      <ScrollToTop />
      {showBackToTopBtn && <BackToTop />}
    </div>
  )
}

export default App;