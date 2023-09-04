import { StyleSheet, Text, View } from "react-native";
import * as ScreenCapture from 'expo-screen-capture';
import { Button } from "react-native-paper";
import { useEffect } from "react";
import * as MediaLibrary from 'expo-media-library';
import Header from "../components/Header";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    textAlign: "center",
  },
  buttons: {
    alignItems: "center",
  },
});

export default function ScreenCap( navigation ) {

    useEffect(() => {
        if (permissao()){
            const listener = ScreenCapture.addScreenshotListener(() => {
                alert("Você fez uma captura de tela!")
            }
    )}
    }, [])

    const permissao = async () => {
        const { status } = await MediaLibrary.requestPermissionsAsync()
        return status === 'granted'
    }

    useEffect(() => {
        
    })


    const desativar = async () => {
        await ScreenCapture.preventScreenCaptureAsync()
    }

    const ativar = async () => {
        await ScreenCapture.allowScreenCaptureAsync()
    }

  return (
    <View>
      <Header title="Screen Capture"/>
        <Text style={{ textAlign: "center", fontSize: 20, marginBottom: 20, marginTop: 300,  }}>Captura de tela</Text>
        <View style={styles.buttons}>
            <Button style={{ width: 150, marginBottom: 10}} onPress={ativar} mode="outlined">Ativar</Button>
            <Button style={{ width: 150, marginBottom: 10}} onPress={desativar} mode="outlined">Desativar</Button>
      </View>
    </View>
  );
}