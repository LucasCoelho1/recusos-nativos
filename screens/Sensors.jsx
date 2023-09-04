import { StyleSheet, Text, View } from "react-native";
import Header from "../components/Header";
import { Gyroscope, Magnetometer, LightSensor } from "expo-sensors";
import { useEffect } from "react";
import { useState } from "react";

export default function Sensors({ navigation }) {
  const [giroscopio, setGiroscopio] = useState({});
  const [magnetometro, setMagnetometro] = useState({});
  const [lightData, setLightData] = useState({});

  useEffect(() => {
    Gyroscope.addListener(giroscopioLister);
    Magnetometer.addListener(magnetometroLister);  
    LightSensor.addListener(lightSensorLister);
}, []);

  const giroscopioLister = (data) => {
    setGiroscopio(data);
  };

  const magnetometroLister = (data) => {
    setMagnetometro(data);
  };

  const lightSensorLister = (data) => {
    setLightData(data);
  };


  return (
    <View style={styles.container}>
      <Header title="Informções do Sensor" />
      <View style={{ marginTop: 80}}>
      <Text>
        Giroscópio:{"\n"}
        x: {giroscopio.x} {"\n"}
        y: {giroscopio.y} {"\n"}
        z: {giroscopio.z} {"\n"}
      </Text>
        <Text>
            Magnetômetro:{"\n"}
            x: {magnetometro.x} {"\n"}
            y: {magnetometro.y} {"\n"}
            z: {magnetometro.z} {"\n"}
        </Text>
        <Text>
            Sensor de Luz:{"\n"}
            {lightData?.illuminance} {"\n"}
        </Text>
      </View>
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    backgroundColor: "#fff",
    },
});
