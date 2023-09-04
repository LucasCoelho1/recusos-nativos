import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import * as ScreenOrientation from 'expo-screen-orientation';
import Header from '../components/Header';

export default function Component() {
  const [backgroundColor, setBackgroundColor] = useState('white');
  useEffect(() => {
    setOrientationColor();
    ScreenOrientation.addOrientationChangeListener(setOrientationColor);
    return () => {
      ScreenOrientation.removeOrientationChangeListener(setOrientationColor);
    };
  }, []);

  async function setOrientationColor() {
    const orientation = await ScreenOrientation.getOrientationAsync();

    switch (orientation) {
      case ScreenOrientation.Orientation.PORTRAIT_DOWN:
        setBackgroundColor('white');
        break;
      case ScreenOrientation.Orientation.PORTRAIT_UP:
        setBackgroundColor('red');
        break;
      case ScreenOrientation.Orientation.LANDSCAPE_LEFT:
        setBackgroundColor('green');
        break;
      case ScreenOrientation.Orientation.LANDSCAPE_RIGHT:
        setBackgroundColor('white');
        break;
      default:
        setBackgroundColor('white');
        break;
    }
  }

  async function padrao() {
    await ScreenOrientation.lockAsync(
      ScreenOrientation.OrientationLock.DEFAULT
    );
    setBackgroundColor('white');
  }

  async function padrao1() {
    await ScreenOrientation.lockAsync(
      ScreenOrientation.OrientationLock.PORTRAIT_DOWN
    );
    setBackgroundColor('white');
  }

  async function padrao2() {
    await ScreenOrientation.lockAsync(
      ScreenOrientation.OrientationLock.PORTRAIT_UP
    );
    setBackgroundColor('red');
  }

  async function padrao3() {
    await ScreenOrientation.lockAsync(
      ScreenOrientation.OrientationLock.LANDSCAPE_LEFT
    );
    setBackgroundColor('green');
  }

  async function padrao4() {
    await ScreenOrientation.lockAsync(
      ScreenOrientation.OrientationLock.LANDSCAPE_RIGHT
    );
    setBackgroundColor('white');
  }

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Header title="Girar tela"/>
      <View style={{ marginTop: 70}}>
      <Button title="Padrão" onPress={padrao} />
      <Button title="Girar para baixo" onPress={padrao1} />
      <Button title="Girar para cima" onPress={padrao2} />
      <Button title="Girar para esquerda" onPress={padrao3} />
      <Button title="Girar para direita" onPress={padrao4} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
