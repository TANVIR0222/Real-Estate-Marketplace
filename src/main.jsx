import ReactDOM from "react-dom/client";
import "./index.css";
import {store, persistor}  from './redux/store.js'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import { RouterProvider } from "react-router-dom";
import { router } from "./Routers/Router.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <div className="max-w-screen-xl mx-auto	">
    {/*  redux-persist -> using doc  */}
    <PersistGate loading={null} persistor={persistor}>
      <RouterProvider router={router} />
    </PersistGate>
    </div>
  </Provider>
);
