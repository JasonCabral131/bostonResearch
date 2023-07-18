import React from 'react';
import {Box, Image, Text, VStack, View} from 'native-base';
import {Colors} from '../../../contants';
import {OnboardingProps} from '../../../types/onboarding';

const Onboarding: React.FC<OnboardingProps> = ({
  url,
  title,
  subtitle,
  height,
  width,
  resizeMode,
  imgMarginTop = 0,
}) => {
  return (
    <VStack flex={1} width={'100%'}>
      <View
        justifyContent={'center'}
        alignItems={'center'}
        alignContent={'center'}>
        <Image
          source={typeof url === 'number' ? url : {uri: url}}
          alt="onboarding"
          height={height}
          width={width}
          resizeMode={resizeMode}
          marginTop={imgMarginTop}
        />
      </View>
      <Box px={4} mt={4}>
        <Text
          fontFamily={'PlayfairDisplay-Bold'}
          fontSize={'3xl'}
          color={Colors.black}
          textAlign={'center'}>
          {title}
        </Text>
        <Text
          fontFamily={'Manrope-Regular'}
          fontSize={'xs'}
          textAlign={'center'}
          color={Colors.secondaryBlack}
          mt={2}>
          {subtitle}
        </Text>
      </Box>
    </VStack>
  );
};

export default React.memo(Onboarding);
