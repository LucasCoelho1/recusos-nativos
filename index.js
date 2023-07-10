import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BatteryInfo from './screens/BatteryInfo';
import DeviceInfo from './screens/DeviceInfo';
import HomeScreen from './screens/Homescreen';
import MyScreenOrientation from './screens/MyScreenOrientation';
import Notify from './screens/Notify';
import ContactsInfo from './screens/ContactsInfo';
import Notifi from './screens/Notifi';

const Stack = createStackNavigator();

function RootNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            headerShown: true,
          }}
        />
        <Stack.Screen
          name="BatteryInfo"
          component={BatteryInfo}
          options={{
            headerShown: true,
          }}
        />
        <Stack.Screen
          name="DeviceInfo"
          component={DeviceInfo}
          options={{
            headerShown: true,
          }}
        />
         <Stack.Screen
          name="MyScreenOrientation"
          component={MyScreenOrientation}
          options={{
            headerShown: true,
          }}
        />
        <Stack.Screen
          name="Notify"
          component={Notify}
          options={{
            headerShown: true,
          }}
        />
        <Stack.Screen
          name="ContactsInfo"
          component={ContactsInfo}
          options={{
            headerShown: true,
          }}
        />
        <Stack.Screen
          name="Notifi"
          component={Notifi}
          options={{
            headerShown: true,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootNavigation;