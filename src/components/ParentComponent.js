import React from "react";
import Form from "./Form";
import DisplayData from "./DisplayData";

class ParentComponent extends React.Component {
  state = {
    firstName: "",
    lastName: ""
    // submittedData: []
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  // handleFirstNameChange = event => {
  //   this.setState({
  //     firstName: event.target.value
  //   });
  // };

  // handleLastNameChange = event => {
  //   this.setState({
  //     lastName: event.target.value
  //   });
  // };

  // handleSubmit = event => {
  //   event.preventDefault();
  //   let formData = {
  //     firstName: this.state.firstName,
  //     lastName: this.state.lastName
  //   };
  //   let dataArray = this.state.submittedData.concat(formData);
  //   this.setState({ submittedData: dataArray });
  // };

  // listOfSubmissions = () => {
  //   return this.state.submittedData.map(data => {
  //     return (
  //       <div>
  //         <span>{data.firstName}</span> <span>{data.lastName}</span>
  //       </div>
  //     );
  //   });
  // };

  render() {
    return (
      <div>
        <Form
          formData={this.state}
          handleChange={this.handleChange}
          // handleFirstNameChange={this.handleFirstNameChange}
          // handleLastNameChange={this.handleLastNameChange}
        />
        <DisplayData formData={this.state} />
      </div>
    );
  }
}

export default ParentComponent;
