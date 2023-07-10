import React, { useEffect, useState } from "react";

import { View, StyleSheet, Text } from "react-native";

import * as Battery from "expo-battery";

const styles = StyleSheet.create({
  header: {
    paddingTop: 25,
    paddingBottom: 0,
    paddingHorizontal: 0,

    position: "absolute",
    top: 0,
    width: "100%",
  },
  headerTextStyle: {
    color: "white",
    fontWeight: "bold",
    fontSize: 35,
    textAlign: "center",
  },

  greenBackground: {
    flex: 1,
    backgroundColor: "green",
  },
  yellowBackground: {
    flex: 1,
    backgroundColor: "#ffa500",
  },
  orangeBackground: {
    flex: 1,
    backgroundColor: "orange",
  },
  redBackground: {
    flex: 1,
    backgroundColor: "red",
  },
});

export default function HeaderComponent({ title }) {
  const [nivelBateria, setNivelBateria] = useState();
  async function obterNivelBateria() {
    const nivel = await Battery.getBatteryLevelAsync();
    setNivelBateria(nivel * 100);
  }
  useEffect(() => {
    obterNivelBateria();
  }, []);
  let backgroundStyle;
  if (nivelBateria > 60) {
    backgroundStyle = styles.greenBackground;
  } else if (nivelBateria > 30) {
    backgroundStyle = styles.yellowBackground;
  } else if (nivelBateria > 5) {
    backgroundStyle = styles.orangeBackground;
  } else {
    backgroundStyle = styles.redBackground;
  }
  return (
    <View style={[styles.header, backgroundStyle]}>
      <Text style={styles.headerTextStyle}>{title}</Text>
    </View>
  );
}
