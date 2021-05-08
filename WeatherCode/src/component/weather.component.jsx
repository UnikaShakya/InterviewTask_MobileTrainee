import React from "react";
import { ImageBackground, View, Text, StyleSheet } from "react-native";

const Weather = ({ weather, temperature, date }) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={require("./sky.jpg")} style={styles.image}>
        <Text style={styles.text}>
          <br />
          {temperature[0]}˚<br />
          {weather[0]}
          <br />
          {date[0]}
        </Text>

        <Text style={styles.textlast}>
          {temperature[1]}˚------------------
          {weather[1]}-----------------------
          {date[1]}
          <hr
            style={{
              height: 5,
              width: 400
            }}
          />
          {temperature[2]}˚------------------
          {weather[2]}-----------------------
          {date[2]}
          <hr
            style={{
              height: 5,
              width: 400
            }}
          />
          {temperature[3]}˚------------------
          {weather[3]}-----------------------
          {date[3]}
          <hr
            style={{
              height: 5,
              width: 400
            }}
          />
          {temperature[4]}˚------------------
          {weather[4]}-----------------------
          {date[4]}
          <hr
            style={{
              height: 5,
              width: 400
            }}
          />
          {temperature[5]}˚------------------
          {weather[5]}-----------------------
          {date[5]}
          <hr
            style={{
              height: 5,
              width: 400
            }}
          />
          {temperature[6]}˚------------------
          {weather[6]}-----------------------
          {date[6]}
          <hr
            style={{
              height: 5,
              width: 400
            }}
          />
        </Text>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  image: {
    flex: 1,
    resizeMode: "cover"
    //justifyContent: "center"
  },
  text: {
    color: "white",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center"
    //backgroundColor: "#000000a0"
  },
  textlast: {
    spacing: 20,
    padding: 20,
    color: "white",
    backgroundColor: "#000000a0",
    fontSize: 22
  }
});

export default Weather;
