import React from 'react';

import { StyleSheet, Text, View, Button } from 'react-native';

export default function HomeScreen ({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Button title="Informações da Bateria" onPress={() => navigation.navigate('BatteryInfo')}/>
            </View>
            <View style={styles.content}>
                <Button title="Informações do Dispositivo" onPress={() => navigation.navigate('DeviceInfo')}/>
            </View>
            <View style={styles.content}>
                <Button title="Coisas" onPress={() => navigation.navigate('MyScreenOrientation')}/>
            </View>
            <View style={styles.content}>
                <Button title="Notify" onPress={() => navigation.navigate('Notify')}/>
            </View>
            <View style={styles.content}>
                <Button title="Contatos" onPress={() => navigation.navigate('ContactsInfo')}/>
            </View>
            <View style={styles.content}>
                <Button title="Sensors" onPress={() => navigation.navigate('Sensors')}/>
            </View>
            <View style={styles.content}>
                <Button title="ScreenCap" onPress={() => navigation.navigate('ScreenCap')}/>
            </View>
            <View style={styles.content}>
                <Button title="LocalAuthentificator" onPress={() => navigation.navigate('LocalAuthentificator')}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {  
        padding: 20,
        alignSelf: 'center',
    },
    contentTextStyle: {
        padding: 5,
        textAlignVertical: 'center',
        minHeight: 0,
        backgroundColor: '#969',
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'center'
    },
  
});
