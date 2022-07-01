import React from "react";

import IssuesTableHeader from "./TableHeader";
// import IssuesContainer from "../../containers/IssuesContainer";
import IsseuTableContent from "./IsseuTableContent";

const IssuesTable = () => (
  <div className="IssuesTableWraper ">
    <IssuesTableHeader />

    <IsseuTableContent></IsseuTableContent>
  </div>
);

export default IssuesTable;
