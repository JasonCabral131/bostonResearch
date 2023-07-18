import React, { useCallback, useRef, useState } from 'react'
import BaseScreen from '../../components/BaseScreen'
import { Box, Button, HStack, Icon, Text, VStack } from 'native-base'
import { Colors } from '../../contants'
import PagerView from 'react-native-pager-view'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { onboarding_mock_data } from '../../contants/mocks/onboard_mock_data'
import Onboarding from './Onboarding'
import { useNavigation } from '@react-navigation/native'
const OverView = () => {
  const [selected, setSelected] = useState(0)
  const pager = useRef<null | PagerView>(null)
  const navigation = useNavigation()
  const IconInactive = (
    <Icon
      color={Colors.textDarkGray}
      as={FontAwesome}
      name={'circle'}
      size="xs"
    />
  )
  const IconActive = (
    <Icon color={Colors.black} as={FontAwesome} name={'circle'} size="xs" />
  )
  const handleNext = useCallback(() => {
    setSelected((prevSelected) => {
      const nextIndex =
        prevSelected === onboarding_mock_data.length - 1 ? 0 : prevSelected + 1
      pager.current?.setPage(nextIndex)
      return nextIndex
    })
  }, [])
  const setSelectedbyIcon = useCallback((page: number) => {
    setSelected(page)
    pager.current?.setPage(page)
  }, [])
  const handleToDashboard = useCallback(() => {
    navigation.navigate('Dashboard')
  }, [navigation])
  return (
    <BaseScreen fullScreen>
      <VStack flex={1} pb={4}>
        <Box flex={1}>
          <PagerView
            ref={pager}
            style={{ flex: 1 }}
            initialPage={selected}
            scrollEnabled={false}
          >
            {onboarding_mock_data.map((feature, index) => {
              return <Onboarding key={index} {...feature} />
            })}
          </PagerView>
        </Box>
        <Box px={4}>
          <HStack justifyContent="center" alignItems="center" mb={6}>
            {onboarding_mock_data.map((feature, index) => {
              return (
                <Button
                  variant="link"
                  onPress={() => setSelectedbyIcon(index)}
                  p={1}
                  key={index}
                >
                  {selected === index ? IconActive : IconInactive}
                </Button>
              )
            })}
          </HStack>

          <Button
            rounded={'lg'}
            py={4}
            bgColor={Colors.primary}
            _pressed={{ opacity: 0.5 }}
            onPress={handleNext}
          >
            <Text fontSize={'sm'} color={Colors.white}>
              Next
            </Text>
          </Button>
          <Button
            rounded={'lg'}
            borderColor={Colors.neutralBlack}
            borderWidth={0.5}
            mt={2}
            py={4}
            bgColor={Colors.white}
            _pressed={{ opacity: 0.5 }}
            onPress={handleToDashboard}
          >
            <Text fontSize={'sm'}>Get Started</Text>
          </Button>
        </Box>
      </VStack>
    </BaseScreen>
  )
}

export default OverView
