import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
import { getFirestore, reduxFirestore } from "redux-firestore";
import { getFirebase, reactReduxFirebase } from "react-redux-firebase";
import fbConfig from "./Firebase";

const configureStore = () => {
  const middlewares = [thunk.withExtraArgument({ getFirebase, getFirestore })];
  return createStore(
    rootReducer,
    {},
    composeWithDevTools(
      applyMiddleware(...middlewares),
      reduxFirestore(fbConfig),
      reactReduxFirebase(fbConfig)
    )
  );
};

export default configureStore;
