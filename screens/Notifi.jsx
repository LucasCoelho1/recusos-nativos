import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import * as Notification from "expo-notifications";
import * as Device from "expo-device";
import * as Battery from "expo-battery";
import Header from "../components/Header";
import { TextInput } from "react-native-paper";

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
  const [TituloNofiticacao, setTituloNotificacao] = useState();
  const [SubTituloNotificacao, setSubTituloNotificacao] = useState();
  const [CorpoNotificacao, setCorpoNotificacao] = useState();
  const [TempoNot, setTempoNot] = useState();

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

  async function notificarCoisas() {
    const token = await Notification.scheduleNotificationAsync({
      content: {
        title: TituloNofiticacao,
        subtitle: SubTituloNotificacao,
        body: CorpoNotificacao,
      },
      trigger: { seconds: parseInt(TempoNot) },
    });
    setExpoToken(token);
  }

  return (
    <View style={styles.container}>
      <Header title="Notificações" />
      <Text style={styles.tokenText}>Receber Notificação {expoToken}</Text>
      <View style={styles.buttonContainer}>
        <TextInput
          label="Título"
          value={TituloNofiticacao}
          style={{ backgroundColor: "#white", color: "black" }}
          onChangeText={(text) => setTituloNotificacao(text)}
        />
        <TextInput
          label="Subtítulo"
          value={SubTituloNotificacao}
          style={{ backgroundColor: "#white", color: "black" }}
          onChangeText={(text) => setSubTituloNotificacao(text)}
        />
        <TextInput
          label="Corpo"
          value={CorpoNotificacao}
          style={{ backgroundColor: "#white", color: "black" }}
          onChangeText={(text) => setCorpoNotificacao(text)}
        />
        <TextInput
          label="Tempo"
          value={TempoNot}
          style={{ backgroundColor: "#white", color: "black" }}
          onChangeText={(text) => setTempoNot(text)}
        />
      </View>
      <Button
        title="Notificar"
        onPress={async () => notificarCoisas()}
      ></Button>
    </View>
  );
}
