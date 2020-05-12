import React from "react";

class ListForm extends React.Component {
  // Constructor with state
  constructor() {
    super();
    this.state = {
      keyword: "",
      somethingElse: 42
    };
  }

  handleChanges = e => {
    // update state with each keystroke (this.setState)
    this.setState(
      {
        keyword: e.target.value
      },
      // add a second argument if you want to run a function _after_ state is updated
      () => console.log(this.state.keyword)
    );
    
  };

  // class property to submit form
  submitForm = e => {
    e.preventDefault();
    this.props.addVillager(this.state.keyword);
    this.setState({
      keyword: ""
    });
  };

  render() {
    return (
      <form onSubmit={this.submitForm}>
        <input
          onChange={this.handleChanges}
          type="text"
          name="item"
          placeholder="Enter Villager Here"
          value={this.state.keyword}
        />
        <button>Add Villager</button>
      </form>
    );
  }
}

export default ListForm;
