import { View, StyleSheet, Text, Button } from "react-native";
import * as Notification from "expo-notifications";
import * as Device from "expo-device";
import * as Battery from 'expo-battery';
import Header from "../components/Header";
import { useEffect, useState } from "react";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 10
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

    async function notificarBateria(){
        const token = await Notification.scheduleNotificationAsync({
            content: {
                title: "Nivel da bateria",
                subtitle: "fazueli",
                body: nivelBateria+"%",
            },
            trigger: { seconds: 3 },
        })
        setExpoToken(token);
    }

    async function notificarAparelho(){
        const token = await Notification.scheduleNotificationAsync({
            content: {
                title: "Aparelho",
                subtitle: "fazueli",
                body: "O seu aparelho "+Device.modelName+" é incrivel",
            },
            trigger: { seconds: 3 },
        })
        setExpoToken(token);
    }

  return (
    <View style={styles.container}>
      <Header title="Notificações" />
      <View>
        <Text>Notify</Text>
      </View>
      <View>
        <Text>Token: {expoToken}</Text>
        <Button
          title="Enviar Notificação"
          onPress={async () => notificarBateria ()}
        />

        <Button title="Ler ultima notificação clicada" onPress={async () => notificarAparelho ()} />
        <Button title="Ler notificações não lidas" />
      </View>
    </View>
  );
}
