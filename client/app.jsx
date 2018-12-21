import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.changeProject = this.changeProject.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      id: Math.floor(Math.random() * 100)
    };
  }

  changeProject(e) {
    this.setState({
      id: Math.floor(Math.random() * 100)
    });
  }

  handleClick(e) {
    this.setState({
      id: e.target.id
    });
  }

  render() {
    return (
      <div>
        <Pledge id={this.state.id} />
        {/* <Project id={this.state.id} /> */}
        {/* <Comments id={this.state.id} /> */}
        {/* <Related id={this.state.id} handleClick={this.handleClick} /> */}
        <button onClick={this.changeProject}>ChangeProject</button>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
