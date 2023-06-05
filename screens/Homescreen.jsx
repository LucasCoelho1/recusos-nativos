import React from 'react';

import { StyleSheet, Text, View, Button } from 'react-native';

export default function HomeScreen ({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.contentTextStyle}>Bateria</Text>
                <Button title="Informações da Bateria" onPress={() => navigation.navigate('BatteryInfo')}/>
            </View>
            <View style={styles.content}>
                <Text style={styles.contentTextStyle}>Dispositivo</Text>
                <Button title="Informações do Dispositivo" onPress={() => navigation.navigate('DeviceInfo')}/>
            </View>
            <View style={styles.content}>
                <Text style={styles.contentTextStyle}>MyScreenOrientation</Text>
                <Button title="Coisas" onPress={() => navigation.navigate('MyScreenOrientation')}/>
            </View>
            <View style={styles.content}>
                <Text style={styles.contentTextStyle}>Notify</Text>
                <Button title="Notify" onPress={() => navigation.navigate('Notify')}/>
            </View>
        </View>
    )
}

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
