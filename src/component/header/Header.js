/* eslint-disable camelcase */
import React from "react";

import { connect } from "react-redux";
import navigationValues from "../../Constant/Navigation";

function Header(props) {
  console.log("inside the header --------------------------", props);

  // function used for managing the state of header like no of forkCount,StarCount,WacthCount
  function SetFork() {
    props.IncreamentFork();
  }
  function SetWatch() {
    props.IncreamentWacth();
  }
  function SetStar() {
    props.IncreamentStar();
  }

  const { ForkCount, StarCount, WacthCount } = props;
  return (
    <div className="Nav">
      <div className="Navmenusfirst" row="first">
        <div className="RepoTitleInfo">
          <img
            className="CommonSVGStyle"
            style={{
              height: "10px",
              width: "10px",

              ariaHidden: true,
            }}
          ></img>

          <a href="" className="Anchor" color="#0366d6">
            Facebook
          </a>

          <span className="PathDivider">/</span>
          <a color="#0366d6" fontWeight="bold" href="">
            React
          </a>
        </div>
        <div className="RightNav">
          <div className="RepoDetailContainer" onClick={SetWatch}>
            <span className=" RepoDetailTagContainer">
              <img
                src="https://t4.ftcdn.net/jpg/01/46/11/95/240_F_146119533_BAlUoUk3eo9eSXBnMuMdUDPvLdeLpWJr.jpg"
                style={{
                  position: "relative",
                  top: "3px",
                  marginRight: "7px",
                  height: "20px",
                  width: "20px",
                  backgroundColor: "grey",
                }}
              ></img>
              Wacth
              <span className="Caret" />
            </span>

            <span className=" RepoDetailValueContainer"> {WacthCount}</span>
          </div>

          <div className="RepoDetailContainer" onClick={SetStar}>
            <span className=" RepoDetailTagContainer">
              <img
                src="https://as1.ftcdn.net/v2/jpg/01/65/62/92/500_F_165629234_RU2TizwObXvESLAXGnSH76JjUsNsaQKr.jpg"
                style={{
                  position: "relative",
                  top: "3px",
                  marginRight: "7px",
                  height: "20px",
                  width: "20px",
                  backgroundColor: "grey",
                }}
              ></img>
              Star
              <span className="Caret" />
            </span>

            <span className=" RepoDetailValueContainer">{StarCount}</span>
          </div>

          <div className="RepoDetailContainer" onClick={SetFork}>
            <span className=" RepoDetailTagContainer">
              <img
                src="https://cdn-icons-png.flaticon.com/512/929/929610.png"
                style={{
                  position: "relative",
                  top: "3px",
                  marginRight: "7px",
                  height: "20px",
                  width: "20px",
                  backgroundColor: "grey",
                }}
              ></img>
              Fork
              <span className="Caret" />
            </span>

            <span className=" RepoDetailValueContainer"> {ForkCount} </span>
          </div>
        </div>
      </div>
      <div className="NavmenusSecond">
        {navigationValues.map((item) => (
          <div className="NavigationItemWrapper" key={item.name}>
            <img
              className="CommonSVGStyle"
              style={{ width: "14px", height: "16", ariahidden: "true" }}
              src={item.imageurl}
            ></img>
            <a className="NavigationItemAnchor" href={item.url}>
              {item.name}
            </a>
            {item.value ? (
              <span className="NavigationItemValue">{40}</span>
            ) : (
              <span>{item.value}</span>
            )}
          </div>
        ))}
      </div>
      ;
    </div>
  );
}

const mapStateToProps = (state) => {
  return state.headerinfo;
};

const mapDispatchToProps = (dispatch) => {
  return {
    // dispaatching Actions
    IncreamentFork: () => dispatch({ type: "INCREAMENT_FORK" }),
    IncreamentWacth: () => dispatch({ type: "INCREAMENT_WATCH" }),
    IncreamentStar: () => dispatch({ type: "INCREAMENT_STAR" }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
