import { compose, createStore, applyMiddleware } from "redux";
import { rootReducer } from "./root-reducer";
// import logger from "redux-logger";

const loggerMiddleware = (store) => (next) => (action) => {
  if (!action.type) {
    return next(action);
  }

  console.log("type", action.type);
  console.log("payload", action.payload);
  console.log("currentState", store.getState());

  next(action);

  console.log("next state: ", store.getState());
};

// run before an action hits a reducer. they do some doctoring.
const middleWares = [loggerMiddleware];

// pass multiple functions left to right
const composedEnhancers = compose(applyMiddleware(...middleWares));

// root reducer - reducers combined
// undefined is an optional 2nd param
export const store = createStore(rootReducer, undefined, composedEnhancers);
