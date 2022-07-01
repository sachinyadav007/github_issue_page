import React from "react";
import HeaderContainer from "./component/header/HeaderContainer";

import SubNav from "./component/header/SubNav";

import IssuesTable from "./component/Issue/issueTable";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="Container">
        <HeaderContainer></HeaderContainer>
        <div className="IssueListingContainer">
          <SubNav></SubNav>
          <IssuesTable></IssuesTable>
        </div>
      </div>
    </div>
  );
}

export default App;
