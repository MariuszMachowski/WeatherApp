import React from 'react';
import '../styles/NextDays.css';

const NextDays = (props) => {
    const { err, city, day1TempD, day1TempN, day1PicNr, day1Date, day2TempD, day2TempN, day2PicNr, day2Date, day3TempD, day3TempN, day3PicNr, day3Date, day4TempD, day4TempN, day4PicNr, day4Date, day5TempD, day5TempN, day5PicNr, day5Date, day6TempD, day6TempN, day6PicNr, day6Date } = props.weather;
    let contentData = null;
    const url1 = `http://openweathermap.org/img/wn/${day1PicNr}@2x.png`;
    const url2 = `http://openweathermap.org/img/wn/${day2PicNr}@2x.png`;
    const url3 = `http://openweathermap.org/img/wn/${day3PicNr}@2x.png`;
    const url4 = `http://openweathermap.org/img/wn/${day4PicNr}@2x.png`;
    const url5 = `http://openweathermap.org/img/wn/${day5PicNr}@2x.png`;
    const url6 = `http://openweathermap.org/img/wn/${day6PicNr}@2x.png`;
    if (!err && city) {
        let day1Time = new Date(day1Date * 1000).getDay();
        // let day2Time = new Date(day2Date * 1000).getDay();
        // console.log(day1Time);
        // const myarr = [day1Time, day2Time]



        // for (let i = 0; i < 2; i++) {
        //     if (myarr[i === 5]){

        //     }
        // }



        // if (day1Time === 6) {
        //     day1Time = "niedziela";
        //     console.log(day1Time);
        // }


        let day2Time = new Date(day2Date * 1000).getDay();
        let day3Time = new Date(day3Date * 1000).getDay();
        let day4Time = new Date(day4Date * 1000).getDay();
        let day5Time = new Date(day5Date * 1000).getDay();
        let day6Time = new Date(day6Date * 1000).getDay();

        let arrayWithDays = [day1Time, day2Time, day3Time, day4Time, day5Time, day6Time];

        for (let i = 0; i < 6; i++) {
            if (arrayWithDays[i] === 0) {
                arrayWithDays[i] = "Niedziela";

            } else if (arrayWithDays[i] === 1) {
                arrayWithDays[i] = "Poniedziałek";

            } else if (arrayWithDays[i] === 2) {
                arrayWithDays[i] = "Wtorek";

            } else if (arrayWithDays[i] === 3) {
                arrayWithDays[i] = "Środa";

            } else if (arrayWithDays[i] === 4) {
                arrayWithDays[i] = "Czwartek";

            } else if (arrayWithDays[i] === 5) {

                arrayWithDays[i] = "Piątek";
            } else if (arrayWithDays[i] === 6) {
                arrayWithDays[i] = "Sobota";
            }
        }



        contentData = (
            <section className="nextDays">
                <div className="dayForecast">
                    <p className="dayName">Jutro</p>
                    <div className="daysPic"><img src={url1} alt="pogoda" /></div>
                    <p className="dnTemp">{day1TempD}&#176;C / {day1TempN}&#176;C</p>
                </div>
                <div className="dayForecast">
                    <p className="dayName">{arrayWithDays[1]}</p>
                    <div className="daysPic"><img src={url2} alt="pogoda" /></div>
                    <p className="dnTemp">{day2TempD}&#176;C / {day2TempN}&#176;C</p>
                </div>
                <div className="dayForecast">
                    <p className="dayName">{arrayWithDays[2]}</p>
                    <div className="daysPic"><img src={url3} alt="pogoda" /></div>
                    <p className="dnTemp">{day3TempD}&#176;C / {day3TempN}&#176;C</p>
                </div>
                <div className="dayForecast">
                    <p className="dayName">{arrayWithDays[3]}</p>
                    <div className="daysPic"><img src={url4} alt="pogoda" /></div>
                    <p className="dnTemp">{day4TempD}&#176;C / {day4TempN}&#176;C</p>

                </div>
                <div className="dayForecast">
                    <p className="dayName">{arrayWithDays[4]}</p>
                    <div className="daysPic"><img src={url5} alt="pogoda" /></div>
                    <p className="dnTemp">{day5TempD}&#176;C / {day5TempN}&#176;C</p>

                </div>
                <div className="dayForecast">
                    <p className="dayName">{arrayWithDays[5]}</p>
                    <div className="daysPic"><img src={url6} alt="pogoda" /></div>
                    <p className="dnTemp">{day6TempD}&#176;C / {day6TempN}&#176;C</p>
                </div>
            </section>
        )
    }

    return (
        <div>
            {contentData}
        </div>
    );
}

export default NextDays;