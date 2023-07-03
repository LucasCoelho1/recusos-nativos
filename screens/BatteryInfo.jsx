import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import * as Battery from 'expo-battery';

  export const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    progressBarContainer: {
      width: '80%',
      height: 20,
      backgroundColor: '#ccc',
      borderRadius: 10,
      overflow: 'hidden',
    },
    progressBar: {
      height: '100%',
    },
    contentTextStyle: {
      fontSize: 20,
      fontWeight: 'bold',
      marginTop: 20,
    },
  });

export default function BatteryInfo() {
  const [nivelBateria, setNivelBateria] = useState(0);
  const [progressBarColor, setProgressBarColor] = useState('gray');

  async function getBatteryInfo() {
    const nivel = await Battery.getBatteryLevelAsync();
    const color = getProgressBarColor(nivel * 100);
    setNivelBateria(nivel * 100);
    setProgressBarColor(color);
  }

  function getProgressBarColor(nivelBateria) {
    if (nivelBateria > 80) {
      return 'green';
    } else if (nivelBateria >= 50) {
      return 'yellow';
    } else if (nivelBateria >= 30) {
      return 'orange';
    } else {
      return 'red';
    }
  }

  useEffect(() => {
    getBatteryInfo();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.progressBarContainer}>
        <View style={[styles.progressBar, { width: `${nivelBateria}%`, backgroundColor: progressBarColor }]} />
      </View>
      <Text style={styles.contentTextStyle}>O nível da bateria é: {nivelBateria}%</Text>
      <Button onPress={getBatteryInfo} title="Atualizar" />
    </View>
  );
}
