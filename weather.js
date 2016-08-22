import React from 'react';

class Weather extends React.Component {
  constructor () {
    super();
    this.state = {text: "Loading..."};

  }

  getWeather () {
    let that = this;
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState === XMLHttpRequest.DONE ) {
          console.log(xmlhttp);
           if (xmlhttp.status === 200) {
             let responseMessage = xmlhttp.responseText;
             that.setState({text: JSON.parse(responseMessage).weather[0].description});
           }
           else if (xmlhttp.status === 400) {
              alert('There was an error 400');
           }
           else {
              alert('something else other than 200 was returned');
           }
        }
    };

    xmlhttp.open("GET", "http://api.openweathermap.org/data/2.5/weather?q=San%20Francisco&APPID=645c5d39c7603f17e23fcaffcea1a3c1", true);
    xmlhttp.send();
}

  componentDidMount () {
    this.setState({text: "Loading..."});
    this.getWeather.bind(this)();
  }

  render () {
    return (
      <div>{this.state.text}</div>
    );
  }
}

export default Weather;
