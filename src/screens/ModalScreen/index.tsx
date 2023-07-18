import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Box} from 'native-base';
import React from 'react';
import {RootStackParamList} from '../../types';

const ModalScreen: React.FC<
  NativeStackScreenProps<RootStackParamList, 'Modal'>
> = ({route}) => {
  const {content, bgColor} = route.params;
  console.log('bgcolor', bgColor);
  return (
    <Box flex={1} backgroundColor={bgColor || 'transparent'}>
      {content}
    </Box>
  );
};

export default React.memo(ModalScreen);
