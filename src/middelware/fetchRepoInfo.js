import * as actionTypes from "./constants";
import axios from "axios";
// import { GIT_REPO_INFO } from "../api/constants";
export const FetchingRepoInfo = () => {
  return async (dispatch) => {
    dispatch({ type: actionTypes.FETCH_REPOINFO_REQUEST });

    try {
      axios
        .get(`https://api.github.com/repos/facebook/react?Page==2&results==0`)
        .then((repoInfo) => {
          console.log(repoInfo);
          dispatch({
            type: actionTypes.FETCH_REPOINFO_SUCCESS,
            Payload: repoInfo,
          });
        });
    } catch (err) {
      console.log("Error is ", err);
      dispatch({ type: actionTypes.FETCH_REPOINFO_FAILURE, err });
      // setTimeout(() => {
      //   dispatch({ type: actionTypes.Company_ERROR });
      // }, 2000);
    }
  };
};
