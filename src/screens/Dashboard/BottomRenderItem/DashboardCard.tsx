/* eslint-disable prettier/prettier */
import { Text, View } from 'native-base'
import React, { useCallback } from 'react'
import { Colors, font } from '../../../contants'
import { TouchableOpacity } from 'react-native'
type Props = {
  show: boolean
  onClose: (type: 'block' | 'mute' | 'report') => any
}
type ModalPress = {
  onPress: () => any
  title: string
}
const DashboardCard: React.FC<Props> = (props) => {
  const { onClose, show} = props;
  const ModalList: React.FC<ModalPress> = ({ onPress, title }) => {
    return (
      <TouchableOpacity onPress={onPress}>
        <View p={4}>
          <Text fontFamily={font.manrope.regular}>{title}</Text>
        </View>
      </TouchableOpacity>
    )
  }
  const handleBlockReport = useCallback(() => {
    onClose('block')
  }, [onClose])
  const handleMuteThisNews = useCallback(() => {
    onClose('mute')
  }, [onClose])
  const handleReport = useCallback(() => onClose('report'), [onClose])
  if(!show) return null;
  return (
    <View
      bgColor={Colors.white}
      position="absolute"
      rounded={'lg'}
      shadow={4}
      px={4}
      right={3}
      top="23%"
    >
      <ModalList onPress={handleBlockReport} title="Block reporter" />
      <ModalList onPress={handleMuteThisNews} title="Block reporter" />
      <ModalList onPress={handleReport} title="Report" />
    </View>
  )
}

export default React.memo(DashboardCard)
