import ReactDOM  from "react-dom/client";
import {BrowserRouter} from "react-router-dom";
import "./index.css";
import "./assets/css/styles.css";
import "./assets/css/bouncing.css";
import App from "./App";
//import "./assets/fontawesome-free-6.4.0-web/css/all.min.css";
import { store } from "./store";
import { Provider } from "react-redux"; 
import "react-toastify/dist/ReactToastify.css";
import { CookiesProvider } from "react-cookie";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <CookiesProvider defaultSetOptions={{path: '/'}}>
        <App />
      </CookiesProvider>
    </Provider>
  </BrowserRouter>
)
