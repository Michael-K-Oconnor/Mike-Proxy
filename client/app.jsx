import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.changeProject = this.changeProject.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      id: Math.ceil(Math.random() * 107)
    };
  }

  changeProject(e) {
    this.setState({
      id: Math.floor(Math.random() * 99 + 1)
    });
  }

  handleClick(e, newId) {
    this.setState({
      id: newId
    });
  }

  render() {
    return (
      <div>
        <Pledge id={this.state.id} />
        {/* <Project id={this.state.id} /> */}
        {/* <Comments id={this.state.id} /> */}
        <Related id={this.state.id} onClick={this.handleClick} />
        <button onClick={this.changeProject}>ChangeProject</button>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
