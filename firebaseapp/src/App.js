import React from "react";
import { Provider } from "react-redux";
import AppRoutes from "./routes";
import configureStore from "./store";

const store = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <AppRoutes />
    </Provider>
  );
};
export default App;
