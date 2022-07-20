import React from "react";
import { useLocation } from "react-router-dom";

class Detail extends React.Component {
  componentDidMount() {
    console.log(this.props);
  }
  render() {
    return <h1>hello</h1>;
  }
}

export default Detail;
