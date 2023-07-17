import {GestureHandlerRootView} from 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {navigationRef} from './contants';
import Routes from './containers/Routes';
import {NativeBaseProvider} from 'native-base';

const Main = () => {
  return (
    <GestureHandlerRootView>
      <NavigationContainer
        //linking={} to do when deep linkin already setup
        ref={navigationRef}
        onStateChange={async () => {
          //perform analytics when screen on changes
        }}>
        <NativeBaseProvider>
          <Routes />
        </NativeBaseProvider>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

export default Main;
