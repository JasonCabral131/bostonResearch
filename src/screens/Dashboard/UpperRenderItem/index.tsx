import { Box, Text, View } from 'native-base'
import React from 'react'
import { Colors } from '../../../contants'
import { StyleSheet, TouchableOpacity } from 'react-native'
import FastImage from 'react-native-fast-image'
import { useNavigation } from '@react-navigation/native'
import { DashboardNewsProps } from '../../../types'
const UpperRenderItem: React.FC<DashboardNewsProps> = (props) => {
  const { url, topic, timeZone, author, links } = props
  const navigation = useNavigation();
  const handleNavigation = () => {
    navigation.navigate('WebView', {
      uri: links,
      title: topic,
    })
  }
  return (
    <TouchableOpacity onPress={handleNavigation}>
      <View style={styles.container}>
        {!url ? (
          <Box style={styles.image} bgColor={Colors.textDarkGray} />
        ) : (
          <FastImage
            style={styles.image}
            source={{
              uri: url,
            }}
            resizeMode="cover"
          />
        )}

        <View style={styles.box1}>
          <Text
            numberOfLines={2}
            ellipsizeMode={'tail'}
            fontFamily={'Manrope-Bold'}
            color={Colors.white}
            fontSize={'lg'}
            mt={6}
          >
            {topic}
          </Text>
          <Text style={styles.timeout}>{timeZone}</Text>
          {author ? (
            <View style={styles.valuesbox}>
              <FastImage
                source={{
                  uri: author.url,
                  priority: 'high',
                }}
                style={styles.imagebox}
                resizeMode="cover"
              />
              <Text style={styles.author}>{author.name}</Text>
            </View>
          ) : null}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default React.memo(UpperRenderItem);
export const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    height: 370,
    width: 220,
    alignSelf: 'center',
  },
  image: {
    width: 220,
    height: 230,
  },
  box1: { width: 220, height: 230 },
  timeout: {
    fontFamily: 'Manrope-Regular',
    color: Colors.secondaryBlack,
    marginTop: 7,
    fontSize: 14,
    fontWeight: 'normal',
    alignContent: 'center',
  },
  valuesbox: { marginTop: 15, flexDirection: 'row' },
  imagebox: { height: 24, width: 24 },
  author: {
    marginLeft: 10,
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Manrope-SemiBold',
    color: 'white',
  },
})
