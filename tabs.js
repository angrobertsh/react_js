import React from 'react';

class Tab extends React.Component {

  constructor() {
    super();
    this.state = {selectedTab: 0};

  }

  render(){


    const titles = Object.keys(this.props.tabData[0]).map((titleKey, index) => {
      return (
        <li className={index === this.state.selectedTab ? "Bold" : "notBold"} key={index} onClick={this.handleClick.bind(this, index)}> { this.props.tabData[0][titleKey] } </li>
      );
    });

    const content = <p> { this.props.tabData[1][this.state.selectedTab] } </p>;

    return (
      <div>
        <ul>
          { titles }
        </ul>
        <article>
          { content }
        </article>
      </div>);
  }

  handleClick(index) {

    this.setState({selectedTab: index});
  }

}


export default Tab;
