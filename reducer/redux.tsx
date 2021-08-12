import { createStore, applyMiddleware, compose } from "redux";
import { createWrapper } from "next-redux-wrapper";
import { createLogger } from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import reducer from ".";

const configureStore = () => {
  //test
  // const logger = createLogger();
  // const enhancer = compose(composeWithDevTools(applyMiddleware(logger)));

  // const store = createStore(reducer, enhancer);
  //product
  const store = createStore(reducer);
  return store;
};

const wrapper = createWrapper(configureStore, { debug: false });
export default wrapper;
