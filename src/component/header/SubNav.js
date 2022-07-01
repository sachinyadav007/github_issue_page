import React, { Component } from "react";

class SubNav extends Component {
  render() {
    return (
      <div className="SubNavContainer">
        <div className="FilterNSearchContainer">
          <div>
            <div className="FiltersContainer">
              filters
              <span className="Caret"></span>
            </div>
            <div className="SearchContainer">
              <input
                className="INPUT"
                type="text"
                defaultValue="is:issue is:open "
              />

              <img
                className=" CommonSVGStyle "
                style={{
                  width: "16px",
                  height: "16px",
                  ariaHidden: "true",
                  color: "#c6cbd1",
                  display: "block",
                  left: "8px",
                  pointerEvents: "none",
                  position: "absolute",
                  textAlign: "center",
                  top: "9px",
                }}
                src="https://cdn-icons-png.flaticon.com/128/482/482631.png"
              ></img>
            </div>
          </div>

          <div className="DetailContainer">
            <a
              className="DetailTagContainer"
              style={{ backgroundColor: "#ffffff", padding: "9px 14px" }}
            >
              Labels
            </a>
            <a
              className="DetailValueContainer"
              style={{ backgroundColor: "#ffffff", padding: "9px 14px" }}
            >
              Milestones
            </a>
          </div>
        </div>
        <a className="CreateNewIssueButton">New issue</a>
      </div>
    );
  }
}

export default SubNav;
