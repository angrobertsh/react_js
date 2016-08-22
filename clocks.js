import React from 'react';

class Clock extends React.Component {

  constructor() {
    super();

    this.state = {time: new Date};

  }

  componentDidMount () {
    this.clockInterval = setInterval(this.updateClock.bind(this), 1000);
  }

  render() {
  const displayDate = <h3>Date:  {this.state.time.toDateString()} </h3>;
  const displayTime = <h3>Time:  {this.state.time.toLocaleTimeString()} </h3>;

    return (
      <div>
        <h1>Clock</h1>
        {displayDate}
        {displayTime}

      </div>);
  }


  updateClock() {
    this.setState({time:
      new Date(this.state.time.setTime(this.state.time.getTime() + 1000))});
  }

}


export default Clock;
