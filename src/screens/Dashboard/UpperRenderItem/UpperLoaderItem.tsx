import LinearGradient from 'react-native-linear-gradient';
import {createShimmerPlaceholder} from 'react-native-shimmer-placeholder';

import {Dimensions, StyleSheet} from 'react-native';
import React from 'react';
import {styles} from '.';
import {Box, HStack, View} from 'native-base';
const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient);

const UpperLoaderItem = () => {
  return (
    <View style={styles.container} mt={3}>
      <ShimmerPlaceholder style={styles.image} />
      <Box mt={3}>
        <ShimmerPlaceholder style={style.heading} />
        <ShimmerPlaceholder style={style.heading} />
      </Box>
      <Box mt={5}>
        <ShimmerPlaceholder style={style.timeZone} />
      </Box>
      <HStack mt={4} space={2} alignItems={'center'}>
        <ShimmerPlaceholder style={style.rounded} />
        <ShimmerPlaceholder
          style={{
            ...style.timeZone,
            width: Dimensions.get('window').width * 0.48,
          }}
        />
      </HStack>
    </View>
  );
};

export default UpperLoaderItem;
const style = StyleSheet.create({
  heading: {
    height: 20,
    width: Dimensions.get('window').width * 0.45,
    borderRadius: 10,
    marginTop: 5,
  },
  timeZone: {
    height: 12,
    width: Dimensions.get('window').width * 0.48,
    borderRadius: 10,
  },
  rounded: {
    ...styles.imagebox,
    borderRadius: 100,
  },
});
