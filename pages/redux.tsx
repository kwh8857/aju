import { createStore, applyMiddleware, compose } from "redux";
import { createWrapper } from "next-redux-wrapper";
import { createLogger } from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import reducer from "./reducer";

const configureStore = () => {
  const logger = createLogger();
  const enhancer = compose(composeWithDevTools(applyMiddleware(logger)));
  const store = createStore(reducer, enhancer);
  return store;
};

const wrapper = createWrapper(configureStore, { debug: true });
export default wrapper;
