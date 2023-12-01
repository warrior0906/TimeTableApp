import {StyleSheet} from 'react-native';
import scaling from '../../utils/scaling';

export const styles = StyleSheet.create({
  rootContainer: {
    // borderWidth: 1,
  },
  container: {
    paddingHorizontal: scaling.hs(14),
    paddingVertical: scaling.hs(16),
  },
  itemContainer: {
    alignItems: 'center',
  },
  dateView: {
    width: scaling.hs(40),
    paddingHorizontal: scaling.hs(7),
    paddingVertical: scaling.vs(14),
    marginHorizontal: scaling.hs(4),
    alignItems: 'center',
    borderRadius: scaling.hs(32),
    backgroundColor: '#ebebeb',
  },
  selectedContainer: {
    backgroundColor: '#40ceff',
  },
  day: {
    fontSize: scaling.hs(12),
    fontWeight: '500',
    paddingBottom: scaling.vs(6),
    opacity: 0.67,
  },
  date: {
    fontWeight: '500',
    opacity: 0.8,
  },
  dot: {
    width: scaling.hs(4),
    height: scaling.hs(4),
    backgroundColor: '#40ceff',
    borderRadius: scaling.hs(4),
    marginTop: scaling.vs(8),
  },
});
