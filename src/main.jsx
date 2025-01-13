/** @format */

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/redux.persist.js";
import { Toaster } from "./Components/ui/toaster.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* Adding redux here to provide state all over app */}
    <Provider store={store}>
      <PersistGate  loading={null} persistor={persistor}>
        <App />
        <Toaster />
      </PersistGate>
    </Provider>
  </StrictMode>
);
