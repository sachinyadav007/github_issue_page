import React from "react";

import { getDifference } from "../header/getTimeDifference";

function Issues(props) {
  let created_at = props.issue.created_at;
  let labels = props.issue.labels;
  let number = props.issue.number;
  let title = props.issue.title;
  let login = props.issue.user.login;

  return (
    <div>
      <div className="IssueWrapper">
        <div className="IssueAnchorNTitleWrapper">
          <div className="IssueOpenedIconWrapper">
            <img
              className="CommonSVGStyle "
              style={{
                background: "#28a745",
                width: "14px",
                height: "16px",
                ariahidden: "true",
              }}
              src="https://cdn-icons-png.flaticon.com/128/0/697.png"
            ></img>
          </div>

          <div className="IssueAnchorWithLabel">
            <a className="IssueAnchor" to={`${number}`} color="#24292e">
              {title}
            </a>
            <span className=" LabelsWrapper">
              {labels.length > 0 &&
                labels.map(({ id, color, name }) => (
                  <span
                    className="Label"
                    key={id}
                    style={{ background: `#${color}` }}
                  >
                    {name}
                  </span>
                ))}
            </span>
          </div>
        </div>

        <div className="IssueOpenedBy">
          <span>
            #{number} opened {getDifference(created_at)} ago by{" "}
            <a className="UserAnchor "> {login}</a>
          </span>
        </div>
      </div>
      ;
    </div>
  );
}

export default Issues;
