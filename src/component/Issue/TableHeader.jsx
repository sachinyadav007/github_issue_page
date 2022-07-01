import React, { Component } from "react";
import { OWNER, REPO, WEB_URL } from "../../api/constants";
class TableHeader extends Component {
  render() {
    const otherValues = [
      "Auther",
      "Label",
      "Projects",
      "Milestones",
      "Assignee",
      "Sort",
    ];

    return (
      <div className="IssuesTableHeaderContainer">
        <div className="OpenClosedIssueDetails ">
          <a
            className="OpenClosedIssueAnchor "
            // selected
            href={`${WEB_URL}/${OWNER}/${REPO}/issues?q=is%3Aopen+is%3Aissue`}
          >
            <img
              className=" CommonSVGStyle "
              style={{
                color: "#28a745",
                width: "14px",
                height: "16px",
                ariahidden: "true",
                // selected,
                color: "",
              }}
              src="https://cdn-icons-png.flaticon.com/128/1828/1828754.png"
            ></img>
            672 open
          </a>

          <a
            className="OpenClosedIssueAnchor "
            style={{ marginLeft: "10px" }}
            href={`${WEB_URL}/${OWNER}/${REPO}/issues?q=is%3Aopen+is%3Aissue`}
          >
            <img
              className="CommonSVGStyle "
              //   selected
              style={{
                color: "#586069",
                hoverColor: "#24292e",
                width: "12px",
                height: "16px",
                ariahidden: "true",
                // selected,
                color: "",
              }}
              src="https://cdn-icons-png.flaticon.com/128/1828/1828754.png"
            ></img>
            6378 closed
          </a>
        </div>

        <div className="OtherDetails">
          {otherValues.map((value) => (
            <div className="OtherDetail" key={value} value={value}>
              <span className="DetailSpan ">
                {value}
                <span className="Caret "></span>
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default TableHeader;
