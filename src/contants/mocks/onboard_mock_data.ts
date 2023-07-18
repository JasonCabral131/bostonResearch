import {Dimensions, Platform, StatusBar} from 'react-native';
import {OnboardingProps} from '../../types/onboarding';
const {width, height} = Dimensions.get('window');
const statusBarHeight =
  Platform.OS === 'android' ? StatusBar.currentHeight ?? 0 : 0;
export const onboarding_mock_data: OnboardingProps[] = [
  {
    url: require('./../../../assets/images/onboardingimages.png'),
    title: 'Research Publication Is Now Much Better',
    subtitle:
      'Now you can see news anywhere, anytime, even if there is no internet access!',
    height: height * 0.4852,
    width: width,
    resizeMode: 'stretch',
  },
  {
    url: require('./../../../assets/images/onboardingimages1.png'),
    title: 'Stay Informed On Latest Research News',
    subtitle: 'Stay informed with the latest news from around the world.',
    height: height * 0.412,
    width: width * 95,
    resizeMode: 'contain',
    imgMarginTop: statusBarHeight,
  },
  {
    url: require('./../../../assets/images/onboardingimages2.png'),
    title: 'Get Updates On What’s Happening',
    subtitle:
      'Our app brings you coverage from top news sources, personalized to your interests.',
    height: height * 0.431,
    width: width * 95,
    resizeMode: 'contain',
    imgMarginTop: statusBarHeight,
  },
];
