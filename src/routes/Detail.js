import React from "react";
import { withRouter } from "./withRouter";
import "./Detail.css";

class Detail extends React.Component {
  componentDidMount() {
    if (this.props.location.state === null) {
      this.props.state("/");
    }
  }
  render() {
    if (this.props.location.state) {
      return (
        <div className="movie__detail">
          <img
            src={this.props.location.state.poster}
            alt={this.props.location.state.title}
            title={this.props.location.state.title}
          ></img>
          <h1>{this.props.location.state.title}</h1>
          <h3>{this.props.location.state.year}</h3>
          <h3>{this.props.location.state.summary}</h3>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default withRouter(Detail);
