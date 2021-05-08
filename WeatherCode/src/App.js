import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Weather from "./component/weather.component";

const API_key = "57b9475971ad30807e794505a27d29cf";
const APP_ID = "147657c4";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      temperature: [0, 0, 0, 0, 0, 0, 0],
      weatherCondition: [null, null, null, null, null, null, null],
      date: [null, null, null, null, null, null, null]
    };
    this.getWeather();
  }

  getWeather = async () => {
    fetch(
      `http://api.weatherunlocked.com/api/forecast/51.50,-0.12?app_id=${APP_ID}&app_key=${API_key}`
    )
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        this.setState({
          temperature: [
            json.Days[0].Timeframes[0].temp_c,
            json.Days[1].Timeframes[0].temp_c,
            json.Days[2].Timeframes[0].temp_c,
            json.Days[3].Timeframes[0].temp_c,
            json.Days[4].Timeframes[0].temp_c,
            json.Days[5].Timeframes[0].temp_c,
            json.Days[6].Timeframes[0].temp_c
          ],
          weatherCondition: [
            json.Days[0].Timeframes[0].wx_desc,
            json.Days[1].Timeframes[0].wx_desc,
            json.Days[2].Timeframes[0].wx_desc,
            json.Days[3].Timeframes[0].wx_desc,
            json.Days[4].Timeframes[0].wx_desc,
            json.Days[5].Timeframes[0].wx_desc,
            json.Days[6].Timeframes[0].wx_desc
          ],
          date: [
            json.Days[0].Timeframes[0].date,
            json.Days[1].Timeframes[0].date,
            json.Days[2].Timeframes[0].date,
            json.Days[3].Timeframes[0].date,
            json.Days[4].Timeframes[0].date,
            json.Days[5].Timeframes[0].date,
            json.Days[6].Timeframes[0].date
          ]
        });
      });
  };

  render() {
    return (
      <Weather
        weather={this.state.weatherCondition}
        temperature={this.state.temperature}
        date={this.state.date}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    color: "rgb(59,108,212)",
    fontSize: 42,
    fontWeight: "100",
    textAlign: "center"
  }
});
