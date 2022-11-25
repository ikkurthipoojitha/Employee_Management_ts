import { createStore } from "redux";
// import rootreducer from "./rootreducer";
import rootReducer from "./rootreducer";
const store = createStore(rootReducer)

export type rootState = ReturnType<typeof rootReducer>;
export default store