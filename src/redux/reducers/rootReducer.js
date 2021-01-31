import { combineReducers } from "redux";
import SelectMenuReducer from "./SelectMenuReducer";
import Movie from "./MoiveReducer";
import CinemaHome from "./CinemaHome";
import UserReducer from "./UserReducer";
import CommonReducer from "./CommonReducer";
const rootReducer = combineReducers({
  SelectMenuReducer,
  Movie,
  CinemaHome,
  UserReducer,
  CommonReducer,
});
export { rootReducer };
