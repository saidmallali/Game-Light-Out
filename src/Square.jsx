import React from "react";
import "./Square.scss";

class Square extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  // handleClick = () => {
  //   this.setState({
  //     clicked: !this.state.clicked
  //   });
  // };

  handleClick(evt) {
    // call up to the board to flip cells around this cell
    this.props.flipCellsAroundMe();
  }

  render() {
    let classes = "square " + (this.props.isLit ? "light" : "dark");
    return <div onClick={this.handleClick} className={classes}></div>;
  }
}

export default Square;
