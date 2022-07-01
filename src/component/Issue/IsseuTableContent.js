import React, { Component } from "react";
import { connect } from "react-redux";

import * as authmidleware from "../../middelware/FectchingIssuesInfo";

import Issue from "./Issues";

import { useState, useEffect } from "react";

function IsseuTableContainer(props) {
  let [pageno, Setpageno] = useState(1);

  // used for adding infine scrolling
  window.onscroll = function () {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      Setpageno(pageno + 1);
    }
  };

  useEffect(() => {
    const { requestIssues } = props;
    requestIssues(pageno);

    console.log(pageno);
  }, [pageno]);

  const { fetching, issues, error } = props;
  return (
    <div>
      {fetching ? (
        <div className="LoaderWrapper">
          <div className="loader" />
        </div>
      ) : error ? (
        <div className="SomethingWentWrong">
          <h1 className="SomethingWentWrongText ">
            {" "}
            Oops, Something went wrong!!!
          </h1>
        </div>
      ) : (
        <div className="IssuesContainerWrapper">
          {!!issues &&
            issues.map((issue) => <Issue key={issue.id} issue={issue} />)}
        </div>
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  const { issuesData } = state;

  const { fetching, issues, error } = issuesData || {
    fetching: true,
  };

  return {
    fetching,
    issues,
    error,
  };
};
const mapDispatchToProps = (dispatch) => ({
  requestIssues: (value) => dispatch(authmidleware.FetchingIssuesInfo(value)),
});
// export default isseuTableComtair;
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IsseuTableContainer);
