import { GestureHandlerRootView } from 'react-native-gesture-handler'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { Colors, navigationRef } from './contants'
import Routes from './containers/Routes'
import { NativeBaseProvider } from 'native-base'

const Main = () => {
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <GestureHandlerRootView style={{ flex: 1, backgroundColor: Colors.white }}>
      <NavigationContainer
        //linking={} to do when deep linkin already setup
        ref={navigationRef}
        onStateChange={async () => {
          //perform analytics when screen on changes
        }}
      >
        <NativeBaseProvider>
          <Routes />
        </NativeBaseProvider>
      </NavigationContainer>
    </GestureHandlerRootView>
  )
}

export default Main
