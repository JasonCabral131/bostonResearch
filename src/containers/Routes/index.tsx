import React from 'react'
import SplashScreen from '../../screens/Splash/SplashSceen'
import { RootStackParamList } from '../../types'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ModalScreen from '../../screens/ModalScreen'
import OverView from '../../screens/OverView'
import Dashboard from '../../screens/Dashboard/Dashboard'
import WebView from '../../screens/WebView'

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
const Stack = createNativeStackNavigator<RootStackParamList>()

const Routes = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
      }}
      initialRouteName="Splash"
    >
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen
        name="Modal"
        component={ModalScreen}
        options={{ presentation: 'transparentModal' }}
      />
      <Stack.Screen name="OverView" component={OverView} />
      <Stack.Screen name="Dashboard" component={Dashboard} />
      <Stack.Screen name="WebView" component={WebView} />
    </Stack.Navigator>
  )
}
export default React.memo(Routes)
