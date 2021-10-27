import React, { Component } from 'react';
import '../styles/App.css';
import Form from './Form';
import Result from './Result';
import Header from './Header';

class App extends React.Component {

  state = {
    value: "",
    date: "",
    humidity: "",
    clouds: "",
    city: "",
    sunrise: "",
    sunset: "",
    temp: "",
    wind: "",
    pressure: "",
    picNr: "",
    err: false,
  }



  handleInputChange = (e) => {
    this.setState({
      value: e.target.value
    })
  }

  handleCitySubmit = (e) => {
    e.preventDefault();
    // console.log("Potwierdzony formularz");
    const API = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&appid=4a4332af6685cdba1f0675e1f4a2e2bb&units=metric`;
    // const Pic = `http://openweathermap.org/img/wn/${this.state.picNr}@2x.png`;
    fetch(API)
      .then(response => {
        if (response.ok) {
          return response
        }
        throw Error("Nie udało się")
      })
      .then(response => response.json())
      .then(data => {
        // console.log(data);
        let time = new Date();
        time = time.toISOString().slice(0, 10);
        this.setState({
          err: false,
          picNr: data.weather[0].icon,
          date: time,
          humidity: data.main.humidity,
          clouds: data.clouds.all,
          city: data.name,
          sunrise: data.sys.sunrise,
          sunset: data.sys.sunset,
          temp: data.main.temp.toFixed(1),
          wind: data.wind.speed,
          pressure: data.main.pressure,
          value: "",
        });
      })
      .catch(err => {
        console.log(err);
        this.setState({
          err: true,
          city: this.state.value
        });
      })
  }

  render() {
    return (
      <div className="App">
        <div className="Background">  </div>
        <div className="wrapper">
          <Header />
          <Form
            userCity={this.state.value}
            change={this.handleInputChange}
            submit={this.handleCitySubmit}
          />
          <Result weather={this.state} />
        </div>
      </div>
    )

  }
}

export default App;
