import React from "react";
import GeneralInfo from "./Components/GeneralInfo";

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
      <>
        <h1>CV Generator</h1>
        <button onClick={this.handleEdit}>{Edit}</button>

        <GeneralInfo Edit={Edit}/>
      </>
    );
  }
}
export default App;
