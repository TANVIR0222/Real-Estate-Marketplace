import ReactDOM from "react-dom/client";
import "./index.css";
import store from './redux/store.js'
import { Provider } from 'react-redux'

import { RouterProvider } from "react-router-dom";
import { router } from "./Routers/Router.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <div className="max-w-screen-xl mx-auto	">
      <RouterProvider router={router} />
    </div>
  </Provider>
);
