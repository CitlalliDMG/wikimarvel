import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
// dev tools middleware
import { composeWithDevTools } from "redux-devtools-extension";

import { rootReducer, rootSaga } from "./modules";

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// mount it on the Store
export default createStore(
  rootReducer,
  {},
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

// then run the saga
sagaMiddleware.run(rootSaga);
