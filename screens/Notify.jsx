import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import * as Notification from "expo-notifications";
import * as Device from "expo-device";
import * as Battery from 'expo-battery';
import Header from "../components/Header";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    marginTop: 20,
    gap: 10,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  tokenText: {
    marginTop: 20,
    fontSize: 16,
  },
});

export default function Notify({ navigation }) {
  const [expoToken, setExpoToken] = useState("");
  const [nivelBateria, setNivelBateria] = useState();
  const [statusBateria, setStatusBateria] = useState();

  async function atualizarTudo() {
    bateria();
  }

  async function status() {
    const status = await Battery.getBatteryStateAsync();
    setStatusBateria(status);
  }

  async function bateria() {
    const nivel = await Battery.getBatteryLevelAsync();
    setNivelBateria(nivel * 100);
  }

  useEffect(() => {
    bateria();
    status();
  }, []);

  async function notificarBateria() {
    const token = await Notification.scheduleNotificationAsync({
      content: {
        title: "Nível da bateria",
        subtitle: "fazueli",
        body: nivelBateria + "%",
      },
      trigger: { seconds: 3 },
    });
    setExpoToken(token);
  }

  async function notiAlertaBateria() {
    alert("Que fase está o Corinthians");
  }

  async function notificarAparelho() {
    const token = await Notification.scheduleNotificationAsync({
      content: {
        title: "Aparelho",
        subtitle: "fazueli",
        body: "O seu aparelho " + Device.modelName + " é incrível",
      },
      trigger: { seconds: 3 },
    });
    setExpoToken(token);
  }

  async function notiPagina() {
    const token = await Notification.scheduleNotificationAsync({
      content: {
        title: "Página",
        subtitle: "fazueli",
        body: "Clique aqui para ir para a página",
      },
      trigger: { seconds: 3 },
      data: {
        route: "/BatteryInfo"
      },
    });
    setExpoToken(token);
  }

  return (
    <View style={styles.container}>
      <Header title="Notificações"/>
      <Text style={styles.tokenText}>Token: {expoToken}</Text>
      <View style={styles.buttonContainer}>
        <Button
          title="Enviar Notificação"
          onPress={async () => notificarAparelho()}
        />
        <Button
          title="Enviar Alerta da Notificação"
          onPress={async () => notiAlertaBateria()}
        />
        <Button
          title="Enviar Notificação da Bateria"
          onPress={async () => notificarBateria()}
        />
        <Button
          title="Enviar para outra página"
          onPress={async () => notiPagina()}
        />
      </View>
    </View>
  );
}
