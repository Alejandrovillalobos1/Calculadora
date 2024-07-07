import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import WelcomeScreen from "../components/WelcomeScreen.jsx"
import App from "../components/App"

const Stack = createNativeStackNavigator()

export default function Index() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName='Welcome'>
        <Stack.Screen name='Bienvenido' component={WelcomeScreen}></Stack.Screen>
        <Stack.Screen name='App' component={App}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
