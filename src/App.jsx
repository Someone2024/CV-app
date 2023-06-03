import React from "react";
import GeneralInfo from "./Components/GeneralInfo";
import Expirience from "./Components/Experience";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      Edit: "Update CV",
    };
  }

  handleEdit = () => {
    if (this.state.Edit === "Update CV") {
      this.setState({
        Edit: "Preview",
      });
    } else this.setState({ Edit: "Update CV" });
  };

  render() {
    const { Edit } = this.state;
    return (
      <div className="Container">
        <div className="title">
          <h1>CV Generator</h1>
          <button className="prev" onClick={this.handleEdit}>
            {Edit}
          </button>
        </div>

        <GeneralInfo Edit={Edit} />

        <div className="line"></div>

        <h2>Educational Experience</h2>
        <Expirience
          first="School"
          second="from"
          third="to"
          fourth="Qualification"
        />

        <div className="line"></div>

        <h2>Practical Experience</h2>
        <Expirience
          first="Company Name"
          second="Title "
          third="tasks"
          fourth="Year Of experience"
        />
      </div>
    );
  }
}
export default App;
