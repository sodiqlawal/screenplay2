import React, { Component } from "react";
import graphic from "../images/graphic.jpg";
import dwayne from "../images/dwayne.jpg";
import jane from "../images/jane.jpg";
import "./InnerSlider.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  fas,
  faComment,
  faQuoteRight,
  faCircle
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
library.add(fas, faComment, faQuoteRight, faCircle);

class InnerSlider extends Component {
  4;
  constructor(props) {
    super(props);
    this.state = {
      pageIndex: 0
    };
  }

  handleIndex = index => {
    this.setState({
      pageIndex: index
    });
  };

  handleTestimony = index => {
    switch (index) {
      default:
      case 0:
        return (
          <div>
            <div className="text-center">
              <FontAwesomeIcon icon={faQuoteRight} className="quoteicon" />
            </div>
            <p className="w-70 text-center mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
            <div className="text-center">
              <img src={graphic} alt="testimage" className="testimage" />
              <div className="my-3">
                <h5>John Doe</h5>
                <p>Founder WhoKnowsWhat</p>
              </div>
              <div>
                <FontAwesomeIcon
                  icon={faCircle}
                  className="mr-2 coloricon"
                  onClick={() => this.handleIndex(0)}
                />
                <FontAwesomeIcon
                  icon={faCircle}
                  className="othericon"
                  onClick={() => this.handleIndex(1)}
                />
                <FontAwesomeIcon
                  icon={faCircle}
                  className="ml-2 othericon"
                  onClick={() => this.handleIndex(2)}
                />
              </div>
            </div>
          </div>
        );

      case 1:
        return (
          <div>
            <div className="text-center">
              <FontAwesomeIcon icon={faQuoteRight} className="quoteicon" />
            </div>
            <p className="w-70 text-center mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
            <div className="text-center">
              <img src={dwayne} alt="testimage" className="testimage" />
              <div className="my-3">
                <h5>Dwayne Johnson</h5>
                <p>CEO LetsBuildMuscle</p>
              </div>
              <div>
                <FontAwesomeIcon
                  icon={faCircle}
                  className="mr-2 othericon"
                  onClick={() => this.handleIndex(0)}
                />
                <FontAwesomeIcon
                  icon={faCircle}
                  className="coloricon"
                  onClick={() => this.handleIndex(1)}
                />
                <FontAwesomeIcon
                  icon={faCircle}
                  className="ml-2 othericon"
                  onClick={() => this.handleIndex(2)}
                />
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div>
            <div className="text-center">
              <FontAwesomeIcon icon={faQuoteRight} className="quoteicon" />
            </div>
            <p className="w-70 text-center mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
            <div className="text-center">
              <img src={jane} alt="testimage" className="testimage" />
              <div className="my-3">
                <h5>Jane Doe</h5>
                <p>PR ToothPaste</p>
              </div>
              <div>
                <FontAwesomeIcon
                  icon={faCircle}
                  className="mr-2 othericon"
                  onClick={() => this.handleIndex(0)}
                />
                <FontAwesomeIcon
                  icon={faCircle}
                  className="othericon"
                  onClick={() => this.handleIndex(1)}
                />
                <FontAwesomeIcon
                  icon={faCircle}
                  className="ml-2 coloricon"
                  onClick={() => this.handleIndex(2)}
                />
              </div>
            </div>
          </div>
        );
    }
  };

  render() {
    return (
      <React.Fragment>
        {this.handleTestimony(this.state.pageIndex)}
      </React.Fragment>
    );
  }
}

export default InnerSlider;
