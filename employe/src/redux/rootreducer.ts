import { combineReducers } from "redux";
import { LikeDataReducer, NotifyReducer, PaySlipReducer } from "./reducer";

// export default combineReducers (
//      { LikeDataReducer, NotifyReducer, PaySlipReducer }
    
// )

const rootReducer = combineReducers({LikeDataReducer, NotifyReducer, PaySlipReducer});

export default rootReducer