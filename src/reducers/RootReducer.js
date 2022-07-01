import { combineReducers } from "redux";
import { repoInfoData } from "./repoInfoReducer";
import { issuesData } from "./issuesReducer";
import { headerinfo } from "./headerReducer";

const rootReducer = combineReducers({ issuesData, repoInfoData, headerinfo });

export default rootReducer;
