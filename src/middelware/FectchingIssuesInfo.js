import * as actionTypes from "./constants";
// import * as actionTypes from "../";
import axios from "axios";
// import { GIT_REPO_INFO } from "../api/constants";
export const FetchingIssuesInfo = (page) => {
  return async (dispatch) => {
    dispatch({ type: actionTypes.FETCH_ISSUES_REQUEST });
    // console.log(" insdine fecthing ", value);
    try {
      let pagelimt = 8;
      let NoofElemnts = page * pagelimt;
      axios({
        method: "get",
        url: `https://api.github.com/repos/facebook/react/issues?per_page=${NoofElemnts}`,
        params: {
          Page: 10,
        },
      }).then((IssueInfo) => {
        console.log(IssueInfo);
        dispatch({
          type: actionTypes.FETCH_ISSUES_SUCCESS,
          Payload: IssueInfo.data,
        });
      });
    } catch (err) {
      console.log("Error is ", err);
      dispatch({ type: actionTypes.FETCH_ISSUES_FAILURE, err });
      // setTimeout(() => {
      //   dispatch({ type: actionTypes.Company_ERROR });
      // }, 2000);
    }
  };
};
