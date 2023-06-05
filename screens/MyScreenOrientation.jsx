import{ StyleSheet, Text, View, Button} from 'react-native';
import Header from '../components/Header';
import * as ScreenOrientation from 'expo-screen-orientation';

async function padrao() {
    await ScreenOrientation.lockAsync(
        ScreenOrientation.OrientationLock.DEFAULT
        );
}
async function padrao1() {
    await ScreenOrientation.lockAsync(
        ScreenOrientation.OrientationLock.PORTRAIT_DOWN
        );
}
async function padrao2() {
    await ScreenOrientation.lockAsync(
        ScreenOrientation.OrientationLock.PORTRAIT_UP
        );
}
async function padrao3() {
    await ScreenOrientation.lockAsync(
        ScreenOrientation.OrientationLock.LANDSCAPE_LEFT
        );
}
async function padrao4() {
    await ScreenOrientation.lockAsync(
        ScreenOrientation.OrientationLock.LANDSCAPE_RIGHT
        );
}
async function padrao5() {
    await ScreenOrientation.lockAsync(
        ScreenOrientation.OrientationLock.ALL
        );
}
export default function MyScreenOrientation({ navigation }) {
return (
<View>
    <Header title="Orientação da tela"/>
    <Text>
        Sas
    </Text>
    <Button title="Padrao" onPress={padrao}></Button>
    <Button title="Girar para baixo" onPress={padrao1}></Button>
    <Button title="Girar para Cima" onPress={padrao2}></Button>
    <Button title="Girar para esquerda" onPress={padrao3}></Button>
    <Button title="Girar para direita" onPress={padrao4}></Button>
    <Button title="Padrao" onPress={padrao5}></Button>
</View>
);
}

export const styles = StyleSheet.create({
container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
},
});