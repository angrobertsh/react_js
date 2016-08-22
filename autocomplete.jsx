//const ReactCSSTransitionGroup = require('react-addons-css-transition-group');
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import React from 'react';
class Autocomplete extends React.Component {

  constructor(props) {
    super(props);

    this.state = {text: "", matchedNames: this.props.nameData};
  }

  clickName (name) {
    this.setState({text: name}, () => {
      document.getElementById('input').value = name;
      this.handleInput();
    });
  }

  render() {

    const names = this.state.matchedNames.map(name => (
      <li key={name} onClick={this.clickName.bind(this, name)}>{name}</li>
    ));

    return (
      <div>
        <h1>Autocomplete</h1>
        <input id='input' type='text' onChange={this.handleInput.bind(this)}/>
        <ul><ReactCSSTransitionGroup transitionName='auto' transitionEnterTimeout={500} transitionLeaveTimeout={0}>{names}</ReactCSSTransitionGroup></ul>
      </div>
    );
  }

  handleInput(event) {
    let nameString;
    if (event) {
      nameString = event.currentTarget.value;
    } else {
      nameString = document.getElementById('input').value;
    }

    let matchingNames = [];
    this.props.nameData.forEach(function(name) {
      if (name.toLowerCase().indexOf(nameString.toLowerCase()) === 0) {
        matchingNames.push(name);
      }
    });
    this.setState({matchedNames: matchingNames});
  }
}

export default Autocomplete;
