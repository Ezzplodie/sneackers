import React from "react";

class List extends React.Component {
  state = {
    numbers: [1, 2, 3],
  };
  addRandomNumber = () => {
    const randNumber = Math.round(Math.random() * 10);
    this.setState({
      numbers: [...this.state.numbers, randNumber],
    });
  };

  componentDidUpdate(prevProps, prevState) {
    console.log(prevProps, prevState, this.props, this.state);
  }

  componentDidMount() {
    console.log("OPENED");
  }

  componentWillUnmount() {
    console.log("CLOSED");
  }

  render() {
    return (
      <div className="m-30">
        <ul>
          {this.state.numbers.map((num, index) => (
            <li key={index}>{num}</li>
          ))}
        </ul>
        <button onClick={this.addRandomNumber}>Нове число</button>
      </div>
    );
  }
}
export default List;
