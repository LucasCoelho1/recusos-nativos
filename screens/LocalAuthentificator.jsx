import React, { useState } from "react";
import { View, Button, TextInput, Text, StyleSheet } from "react-native";
import * as LocalAuthentication from "expo-local-authentication";

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      padding: 20,
    },
    input: {
      width: "100%",
      marginBottom: 10,
      padding: 10,
      borderWidth: 1,
      borderRadius: 10,
    },
    button: {
      width: "100%",
      padding: 10,
      backgroundColor: "#007bff",
      borderRadius: 10,
    },
    buttonText: {
      color: "white",
      textAlign: "center",
    },
    authTypeText: {
      marginTop: 10,
    },
    buttonContainer: {
      width: "100%",
      marginTop: 10,
    },
    buttonSpacing: {
      marginBottom: 10,
    },
  });

export default function LocalAuthenticator({ navigation }) {
  const [authType, setAuthType] = useState("Biometria");
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [customMessage, setCustomMessage] = useState("");

  const autenticar = async () => {
    try {
      const result = await LocalAuthentication.authenticateAsync({
        promptMessage: customMessage,
      });

      if (result.success) {
        alert("Autenticação bem-sucedida!");
      } else {
        alert("Autenticação falhou.");
      }
    } catch (error) {
      console.error("Erro durante a autenticação biométrica:", error);
    }
  };

  const selectBiometria = () => {
    setAuthType("Biometria");
  };

  const selectRosto = () => {
    setAuthType("Rosto");
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={customMessage}
        onChangeText={(text) => setCustomMessage(text)}
        placeholder={"Insira sua mensagem: "}
      />
      <Button
        style={styles.button}
        title="Autenticar"
        onPress={autenticar}
        disabled={isButtonDisabled}
      />
      <Text style={styles.authTypeText}>
        Método de autenticação: {authType}
      </Text>
      <View style={styles.buttonContainer}>
        <View style={styles.buttonSpacing}>
          <Button
            title="Selecionar Biometria"
            onPress={selectBiometria}
            disabled={isButtonDisabled}
          />
        </View>
        <View>
          <Button
            title="Selecionar Rosto"
            onPress={selectRosto}
            disabled={isButtonDisabled}
          />
        </View>
      </View>
    </View>
  );
}
