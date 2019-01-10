import React from "react";
import ReactDOM from "react-dom";
import "./styles/app.css";

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
      <div className="container">
        {window.Projects && <Project className="Project" id={this.state.id} />}
        <Pledge className="Pledge" id={this.state.id} />
        <Comments className="Comments" id={this.state.id} />
        <Related
          className="Related"
          id={this.state.id}
          onClick={this.handleClick}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
