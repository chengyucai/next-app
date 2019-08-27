import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "../reducers";

import { initialState } from "@redux/reducers";
import rootSaga from "../saga";

const bindMiddleware = (middleware: any) => {
  if (process.env.NODE_ENV !== "production") {
    const { composeWithDevTools } = require("redux-devtools-extension");
    const { logger } = require("redux-logger");
    // middleware.push(logger);
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

function configureStore(state = initialState) {
  const sagaMiddleware = createSagaMiddleware();
  const store: any = createStore(
    rootReducer,
    state,
    bindMiddleware([sagaMiddleware])
  );

  store.sagaTask = sagaMiddleware.run(rootSaga);

  return store;
}

export default configureStore;
