import React, { Component } from "react";

class ListItem extends Component {
  state = {
    clicked: false,
    count: 0,
    countArray: []
  };

  onClickHandler = () => {
    const countArray = [...this.state.countArray];
    countArray.push(this.state.count + 1);
    this.setState({
      clicked: true,
      count: this.state.count + 1,
      countArray: countArray
    });
  };
  render() {
    let child = "";
    console.log(this.state.count);
    if (this.state.clicked) {
      child = this.state.countArray.map(count => {
        return (
          <ul>
            <li>{this.props.children + count}</li>
          </ul>
        );
      });
    }
    return (
      <li onClick={this.onClickHandler}>
        {this.props.children}
        {child}
      </li>
    );
  }
}

export default ListItem;
