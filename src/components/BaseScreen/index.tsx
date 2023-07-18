/* eslint-disable react-native/no-inline-styles */
import {
  View,
  PanResponder,
  StatusBar,
  SafeAreaView,
  Dimensions,
} from 'react-native'
import React, { useCallback } from 'react'
import InactivityStore, {
  DEFAULT_INACTIVITY_TIMEOUT,
  InactivityStatusEnum,
} from '../../store/InactivityStore'
import Inactivity from './Inactivity'
import { useNavigation } from '@react-navigation/native'
import { Box } from 'native-base'
import InnactivityContent from './Inactivity/InnactivityContent'
interface BaseScreenProp {
  backgroundColor?: string
  children: React.ReactNode
  barStyle?: 'dark-content' | 'light-content' | 'default'
  // inactivityAction?: Function
  enableInactivity?: boolean
  fullScreen?: boolean
}
const BaseScreen: React.FC<BaseScreenProp> = ({
  children,
  fullScreen = false,
  enableInactivity = false,
  backgroundColor = 'white',
}) => {
  const navigation = useNavigation()
  const panResponder = React.useRef(
    PanResponder.create({
      onStartShouldSetPanResponderCapture: () => {
        InactivityStore.store.status = InactivityStatusEnum.ACTIVE
        InactivityStore.store.timer =
          InactivityStore.store.timer === DEFAULT_INACTIVITY_TIMEOUT
            ? DEFAULT_INACTIVITY_TIMEOUT - 1
            : DEFAULT_INACTIVITY_TIMEOUT
        return false
      },
    })
  ).current

  const onAction = useCallback(
    (active: boolean) => {
      if (active) {
        InactivityStore.store.status = InactivityStatusEnum.ACTIVE
        InactivityStore.close()
      } else {
        InactivityStore.store.status = InactivityStatusEnum.COUNTDOWN
        navigation.navigate('Modal', {
          content: (
            <Box
              width={Dimensions.get('window').width}
              flex={1}
              justifyContent="center"
              alignItems="center"
            >
              <InnactivityContent />
            </Box>
          ),
          bgColor: 'rgba(111, 125, 137, .4)',
        })
      }
    },
    [navigation]
  )
  return (
    <View
      style={[
        {
          backgroundColor,
          flex: 1,
        },
      ]}
      {...panResponder.panHandlers}
    >
      {fullScreen ? (
        <StatusBar
          barStyle="dark-content"
          backgroundColor="transparent"
          translucent
        />
      ) : (
        <StatusBar
          translucent={false}
          barStyle="dark-content"
          backgroundColor="white"
        />
      )}
      <Inactivity enableInactivity={enableInactivity} onAction={onAction}>
        {!fullScreen && (
          <SafeAreaView style={{ flex: 1 }}>{children}</SafeAreaView>
        )}
        {fullScreen && <>{children}</>}
      </Inactivity>
    </View>
  )
}

export default React.memo(BaseScreen)
