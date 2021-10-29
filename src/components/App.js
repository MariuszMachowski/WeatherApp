import React, { Component } from 'react';
import '../styles/App.css';
import Form from './Form';
import Result from './Result';
import Header from './Header';
import NextDays from './NextDays';

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
    day1TempD: "",
    day1TempN: "",
    day1PicNr: "",
    day1Date: "",
    day2TempD: "",
    day2TempN: "",
    day2PicNr: "",
    day2Date: "",
    day3TempD: "",
    day3TempN: "",
    day3PicNr: "",
    day3Date: "",
    day4TempD: "",
    day4TempN: "",
    day4PicNr: "",
    day4Date: "",
    day5TempD: "",
    day5TempN: "",
    day5PicNr: "",
    day5Date: "",
    day6TempD: "",
    day6TempN: "",
    day6PicNr: "",
    day6Date: "",
  }



  handleInputChange = (e) => {
    this.setState({
      value: e.target.value
    })
  }
  handleCitySubmit = (e) => {
    e.preventDefault();
    // console.log("Potwierdzony formularz");
    // const API = `https://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&appid=4a4332af6685cdba1f0675e1f4a2e2bb&units=metric`;
    const API = `https://api.openweathermap.org/data/2.5/forecast/daily?q=${this.state.value}&cnt=7&appid=927d09bc49dbee6aac7f5cb1df707542&units=metric`;
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
          date: time,
          // picNr: data.weather[0].icon,
          picNr: data.list[0].weather[0].icon,
          humidity: data.list[0].humidity,
          clouds: data.list[0].clouds,
          city: data.city.name,
          sunrise: data.list[0].sunrise,
          sunset: data.list[0].sunset,
          temp: data.list[0].temp.day.toFixed(1),
          wind: data.list[0].speed,
          pressure: data.list[0].pressure,
          value: "",
          day1TempD: data.list[1].temp.day.toFixed(),
          day1TempN: data.list[1].temp.min.toFixed(),
          day1PicNr: data.list[1].weather[0].icon,
          day1Date: data.list[1].dt,
          day2TempD: data.list[2].temp.day.toFixed(),
          day2TempN: data.list[2].temp.min.toFixed(),
          day2PicNr: data.list[2].weather[0].icon,
          day2Date: data.list[2].dt,
          day3TempD: data.list[3].temp.day.toFixed(),
          day3TempN: data.list[3].temp.min.toFixed(),
          day3PicNr: data.list[3].weather[0].icon,
          day3Date: data.list[3].dt,
          day4TempD: data.list[4].temp.day.toFixed(),
          day4TempN: data.list[4].temp.min.toFixed(),
          day4PicNr: data.list[4].weather[0].icon,
          day4Date: data.list[4].dt,
          day5TempD: data.list[5].temp.day.toFixed(),
          day5TempN: data.list[5].temp.min.toFixed(),
          day5PicNr: data.list[5].weather[0].icon,
          day5Date: data.list[5].dt,
          day6TempD: data.list[6].temp.day.toFixed(),
          day6TempN: data.list[6].temp.min.toFixed(),
          day6PicNr: data.list[6].weather[0].icon,
          day6Date: data.list[6].dt,
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
          <NextDays weather={this.state} />
        </div>
      </div>
    )

  }
}

export default App;
