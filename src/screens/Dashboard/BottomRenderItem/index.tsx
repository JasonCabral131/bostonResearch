/* eslint-disable prettier/prettier */
import {  Text, View } from 'native-base'
import React, { useCallback, useState } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { DashboardNewsProps } from '../../../types';
import { Colors } from '../../../contants';
import FastImage from 'react-native-fast-image';
import DashboardCard from './DashboardCard';
import { hitslop } from '../../../utilities';
import { useNavigation } from '@react-navigation/native';

const BottomRenderItem: React.FC<DashboardNewsProps> = (props) => {
  const { url, author, topic, timeZone, links } = props
  const navigation = useNavigation()
  const [show, setShow] = useState(false)
  const onClose = useCallback((val: 'block' | 'mute' | 'report') => {
    setShow(false)
    console.log(val)
    //todo perform your logic here 
  }, [])
  const handleShowModal = useCallback(() => setShow(true), [])
  const handleNavigation = () => {
    navigation.navigate('WebView', {
      uri: links,
      title: topic,
    })
  }
  return (
    <TouchableOpacity onPress={handleNavigation} hitSlop={hitslop}>
      <View style={styles.renderItemView1}>
        {author ? (
          <View flexDirection={'row'} alignItems={'center'}>
            <FastImage
              style={styles.imagebox1}
              source={{
                uri: author?.url,
              }}
              resizeMode="cover"
            />
            <Text
              color={Colors.black}
              fontSize={'lg'}
              ml={4}
              fontFamily={'Manrope-SemiBold'}
            >
              {author?.name}
            </Text>
          </View>
        ) : null}
        <View flexDirection={'row'} mt={8}>
          <Text numberOfLines={3} ellipsizeMode={'tail'} style={styles.topic1} fontSize={"lg"}>
            {topic}
          </Text>
          <FastImage source={{ uri: url }} style={styles.image1} />
        </View>
        <View
          flexDirection={'row'}
          justifyContent={'space-between'}
          alignItems={'center'}
        >
          <Text style={styles.timeout1}>{timeZone}</Text>
          <TouchableOpacity onPress={handleShowModal} hitSlop={hitslop}>
            <Text mt={5} color={'grey'} fontSize={'3xl'} fontWeight={'bold'}>
              ···
            </Text>
          </TouchableOpacity>
        </View>
        <DashboardCard show={show} onClose={onClose}/>
      </View>
    </TouchableOpacity>
  );
};

export default React.memo(BottomRenderItem)
export const styles = StyleSheet.create({
  renderItemView1: {
    backgroundColor: 'white',
    padding: 25,
    marginBottom: 1,
    elevation: 0.5,
    position: 'relative',
  },
  imagebox1: { height: 30, width: 30 },
  topic1: {
    fontFamily: 'Manrope-Bold',
    width: '70%',
    color: 'black',
    fontWeight: '600',
  },
  image1: {
    width: 100,
    height: 100,
    marginLeft: 37,
  },
  timeout1: {
    fontFamily: 'Manrope-Regular',
    color: 'darkgrey',
    fontSize: 17,
    fontWeight: 'normal',
  },
})
