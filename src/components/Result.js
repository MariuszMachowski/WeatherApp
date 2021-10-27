import React from 'react';
import '../styles/Result.css';

const Result = (props) => {
    const { err, city, sunrise, sunset, temp, wind, pressure, date, value, picNr, humidity, clouds } = props.weather;
    let content = null;
    const ulr = `http://openweathermap.org/img/wn/${picNr}@2x.png`;
    const errorPage = (
        <p className="invalidCity">Nie mamy w bazie podanego miasta: {value}</p>
    )
    if (!err && city) {
        let sunriseTime = new Date(sunrise * 1000).toLocaleTimeString();
        sunriseTime = sunriseTime.slice(0, 5);
        let sunsetTime = new Date(sunset * 1000).toLocaleTimeString();
        sunsetTime = sunsetTime.slice(0, 5);
        let styles = {
            backgroundImage: `url(${ulr})`,
        };
        content = (
            <section className="forecast">
                <header className="mainInfo">
                    <h1>{city}: <span className="temp">{temp}&#176;C</span></h1>
                    <p>{date}</p>
                    <div className="picture" style={styles}></div>
                </header>
                <aside className="otherData">
                    <div>
                        <p>{wind}m/s</p>
                        <p>Siła wiatru</p>
                    </div>
                    <div>
                        <p>{pressure}hPa</p>
                        <p>Ciśnienie</p>
                    </div>
                    <div>
                        <p>{humidity}%</p>
                        <p>Wilgotność</p>
                    </div>
                    <div>
                        <p>{clouds}%</p>
                        <p>Zachmurzenie</p>
                    </div>
                    <div>
                        <p>{sunriseTime}</p>
                        <p>Wschód słońca</p>
                    </div>
                    <div>
                        <p>{sunsetTime}</p>
                        <p>Zachód słońca</p>
                    </div>
                </aside>
            </section>
        )
    }

    return (
        <>
            <div className="result">
                {err ? errorPage : content}
            </div>
        </>
    );
}

export default Result;