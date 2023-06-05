import { StyleSheet, Text, View } from "react-native";
import * as Device from "expo-device";
import Header from "../components/Header";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 10
    },
    content: {
        flex: 1,
        gap: 20,
        padding: 20,
        alignSelf: 'center',
    },
    contentTextStyle: {
        padding: 5,
        textAlignVertical: 'center',
        minHeight: 50,
        backgroundColor: '#969',
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'center'
    },
});

export default function DeviceInfo() {
  return (
    <View style={styles.container}>
        <Header
            title="Informações do Aparelho"
        />

      <View>
        <Text>
          O nome do seu aparelho é:
          {Device.modelName}
        </Text>

        <Text>
          A marca do aparelho é:
          {Device.brand}
        </Text>

        <Text>
          O modelo do aparelho é:
          {Device.modelName}
        </Text>

        <Text>
          O nome completo do aparelho é:
          {Device.deviceName}
        </Text>

        <Text>
          O Design do aparelho é:
          {Device.designName}
        </Text>

        <Text>
          O Ano do lançamento é:
          {Device.deviceYearClass}
        </Text>

        <Text>
          A memória do aparelho é:
          {Device.totalMemory}
        </Text>

        <Text>
          A versão do sistema é a:
          {Device.osBuildId}
        </Text>

        <Text>
          A arquitetura do aparelho é:
          {Device.osInternalBuildId}
        </Text>

      </View>
    </View>
  );
}
