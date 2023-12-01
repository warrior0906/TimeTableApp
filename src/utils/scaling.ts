import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const [shortDimension, longDimension] =
  width < height ? [width, height] : [height, width];

const guidelineBaseWidth = 360;
const guidelineBaseHeight = 760;

const scale = (size: number) => (shortDimension / guidelineBaseWidth) * size;
const verticalScale = (size: number) =>
  (longDimension / guidelineBaseHeight) * size;

export default {
  hs: (value: number) => {
    return scale(value);
  },
  vs: (value: number) => {
    return verticalScale(value);
  },
};
