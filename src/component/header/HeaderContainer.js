import React, { Component } from "react";
import { connect } from "react-redux";
import * as Repomiddelware from "../../middelware/fetchRepoInfo";

import Header from "./Header";

class HeaderContainer extends Component {
  componentDidMount() {
    const { requestRepoInfo } = this.props;
    requestRepoInfo();
  }

  render() {
    const { fetching, repoInfo, error } = this.props;
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
          <Header {...repoInfo} />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { repoInfoData } = state;

  const { fetching, repoInfo, error } = repoInfoData || {
    fetching: true,
    repoInfo: {},
  };

  return {
    fetching,
    repoInfo,
    error,
  };
};

const mapDispatchToProps = (dispatch) => ({
  requestRepoInfo: () => dispatch(Repomiddelware.FetchingRepoInfo()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
