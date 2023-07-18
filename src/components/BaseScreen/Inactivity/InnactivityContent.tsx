import { useNavigation } from '@react-navigation/native'
import { Box, Button, Text, View } from 'native-base'
import React, { useEffect, useRef } from 'react'
import { BackHandler, Dimensions } from 'react-native'
import { useStore } from 'store/x/react'
import InactivityStore, {
  InactivityStatusEnum,
} from './../../../store/InactivityStore'
import { Colors } from '../../../contants'
import { toMMSS } from '../../../utilities'
let timerId: any
const CountDown = React.memo(() => {
  const [time, setTime] = React.useState(15)
  const timerRef = React.useRef(time)
  React.useEffect(() => {
    timerId = setInterval(() => {
      timerRef.current -= 1
      if (timerRef.current < 0) {
        clearInterval(timerId)
        InactivityStore.store.status = InactivityStatusEnum.TIMEOUT
      } else {
        setTime(timerRef.current)
      }
    }, 1000)
    return () => {
      clearInterval(timerId)
    }
  }, [])
  return (
    <Text color={Colors.black} fontFamily="Gilroy-Bold">
      {toMMSS(time)}
    </Text>
  )
})

CountDown.displayName = 'CountDown'

const InnactivityContent = () => {
  const current = useRef(0)
  current.current = current.current += 1
  console.log(current.current, 'rerender activity modal')
  const navigation = useNavigation()
  const { status } = useStore(InactivityStore.store)

  const imHere = () => {
    navigation.goBack()
    InactivityStore.store.status = InactivityStatusEnum.ACTIVE
  }
  const relogin = () => {
    InactivityStore.store.status = InactivityStatusEnum.ACTIVE
  }
  useEffect(() => {
    const onBackPress = () => {
      return true
    }
    BackHandler.addEventListener('hardwareBackPress', onBackPress)
    return () =>
      BackHandler.removeEventListener('hardwareBackPress', onBackPress)
  }, [])
  return (
    <View
      bgColor={Colors.white}
      rounded="lg"
      justifyContent="center"
      alignItems="center"
      width={Dimensions.get('window').width * 0.95}
      p={4}
    >
      {status === InactivityStatusEnum.COUNTDOWN ? (
        <>
          <Box alignItems="center" justifyContent="center">
            <Text fontSize="xl" fontFamily="Gilroy-Bold">
              Are you still there?
            </Text>
            <Text
              fontSize="sm"
              fontFamily="Gilroy-Medium"
              color={Colors.secondaryBlack}
              textAlign="center"
              mt={3}
            >
              Your session is about to expire, please click I am still here if
              you want to keep using the app.
            </Text>
            <Text
              fontSize="sm"
              fontFamily="Gilroy-Medium"
              color={Colors.secondaryBlack}
              textAlign="center"
              mt={3}
            >
              Session will close in: <CountDown />
            </Text>
          </Box>
          <Box justifyContent="space-evenly" mt={5} width="100%">
            <Button
              borderRadius="full"
              bgColor={Colors.primary}
              alignItems="center"
              width="100%"
              _pressed={{
                opacity: 0.7,
              }}
              onPress={imHere}
            >
              <Text color={Colors.white} fontFamily="Gilroy-Bold">
                Yes, I am still here!
              </Text>
            </Button>
          </Box>
        </>
      ) : (
        <>
          <Box alignItems="center" justifyContent="center">
            <Text fontSize="xl" fontFamily="Gilroy-Bold">
              User Timed out
            </Text>
            <Text
              fontSize="sm"
              fontFamily="Gilroy-Medium"
              color={Colors.secondaryBlack}
              textAlign="center"
              mt={3}
            >
              At least 10 minutes have passed since you were last active. Please
              click below to re-login.
            </Text>
          </Box>
          <Box justifyContent="space-evenly" mt={5} width="100%">
            <Button
              borderRadius="full"
              bgColor={Colors.primary}
              alignItems="center"
              width="100%"
              _pressed={{
                opacity: 0.7,
              }}
              onPress={relogin}
            >
              <Text color={Colors.white} fontFamily="Gilroy-Bold">
                Login
              </Text>
            </Button>
          </Box>
        </>
      )}
    </View>
  )
}

export default InnactivityContent
