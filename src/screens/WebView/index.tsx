import React, { useState } from 'react'
import BaseScreen from '../../components/BaseScreen'
import { Text, View } from 'native-base'
import { ActivityIndicator, Dimensions, TouchableOpacity } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { StyleSheet } from 'react-native'
import { WebView } from 'react-native-webview'
const { width, height } = Dimensions.get('window')
const WebViewScreen = () => {
  const { title, uri }: any = useRoute().params || {}
  const navigation = useNavigation()
  const [loading, setLoading] = useState(true)
  return (
    <BaseScreen >
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          hitSlop={{ right: 3, bottom: 3, top: 3, left: 3 }}
        >
          <FontAwesome name="close" size={18} />
        </TouchableOpacity>
        {title && (
          <View style={styles.infoContainer}>
            <FontAwesome name="lock" size={18} />
            <Text
              // eslint-disable-next-line react-native/no-inline-styles
              style={{
                fontSize: 12,
                fontWeight: '500',
                color: '#444C66',
                left: 10,
              }}
              numberOfLines={1}
              ellipsizeMode="tail"
            >
              {title}
            </Text>
          </View>
        )}
      </View>
      <View style={{ flex: 1, width }}>
          <WebView source={{ uri }} onLoad={() => setLoading(false)} />

          {loading && (
            <ActivityIndicator
              // eslint-disable-next-line react-native/no-inline-styles
              style={{ position: 'absolute', top: height / 3, left: width / 2 }}
              size="large"
            />
          )}
        </View>
    </BaseScreen>
  )
}

export default React.memo(WebViewScreen)

const styles = StyleSheet.create({
  header: {
    height: 48,
    width,
    paddingHorizontal: 10,
    borderBottomColor: '#E6EBF3',
    borderBottomWidth: 1,
    justifyContent: 'flex-start',
    alignContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  infoContainer: {
    justifyContent: 'flex-start',
    alignContent: 'center',
    alignItems: 'center',
    left: 20,
    flexDirection: 'row',
  },
})
