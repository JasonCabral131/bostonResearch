import React from 'react';
import SplashScreen from '../../screens/Splash/SplashSceen';
import {RootStackParamList} from '../../types';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
const Stack = createNativeStackNavigator<RootStackParamList>();

const Routes = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
      }}
    >
      <Stack.Screen name="Splash" component={SplashScreen} />
    </Stack.Navigator>
  );
};
export default React.memo(Routes);
