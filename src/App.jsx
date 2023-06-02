import React from "react";
import Field from "./Components/Fields";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      Edit: "Preview",
    };
  }

  handleEdit = () => {
    if (this.state.Edit === "Preview") {
      this.setState({
        Edit: "Update CV",
      });
    } else this.setState({ Edit: "Preview" });
  };

  render() {
    const { Edit } = this.state;
    return (
      <>
        <h1>CV Generator</h1>
        <button onClick={this.handleEdit}>{Edit}</button>
        <Field/>
      </>
    );
  }
}
export default App;
