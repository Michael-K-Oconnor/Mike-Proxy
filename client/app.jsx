import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.changeProject = this.changeProject.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      id: Math.floor(Math.random() * 99 + 1),
      hasLoaded: false
    };
  }

  componentDidMount() {
    axios(window.location.href + "routes").then(response => {
      let routes = JSON.parse(response.data);
      console.log(routes);
      const script = document.createElement("script");
      script.src = routes.pledgesRoute + "/app.js";
      script.async = true;
      document.body.appendChild(script);
      setTimeout(
        () =>
          this.setState({
            hasLoaded: true
          }),
        500
      );
    });
  }

  changeProject(e) {
    this.setState({
      id: Math.floor(Math.random() * 99 + 1)
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
        <script src="http://localhost:3003/app.js" />
        {this.state.hasLoaded && <Pledge id={this.state.id} />}

        {/* <Project id={this.state.id} /> */}
        {/* <Comments id={this.state.id} /> */}
        {/* <Related id={this.state.id} handleClick={this.handleClick} /> */}
        <button onClick={this.changeProject}>ChangeProject</button>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
