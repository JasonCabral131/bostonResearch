export type OnboardingProps = {
  url: string | number;
  title: string;
  subtitle: string;
  height: number;
  width: number | string;
  resizeMode?: 'contain' | 'stretch' | 'cover';
  imgMarginTop?: number,
};
