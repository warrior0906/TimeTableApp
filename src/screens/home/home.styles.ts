import {StyleSheet} from 'react-native';
import scaling from '../../utils/scaling';

export const styles = StyleSheet.create({
  rootContainer: {
    // borderWidth: 1,
  },
  container: {
    marginHorizontal: scaling.hs(14),
    paddingVertical: scaling.hs(16),
  },
  itemContainer: {
    alignItems: 'center',
  },
  dateView: {
    width: scaling.hs(40),
    paddingTop: scaling.vs(16),
    paddingBottom: scaling.vs(12),
    marginHorizontal: scaling.hs(8),
    alignItems: 'center',
    borderRadius: scaling.hs(32),
    backgroundColor: '#ebebeb',
  },
  selectedContainer: {
    backgroundColor: '#40ceff',
    paddingBottom: scaling.vs(6),
  },
  day: {
    fontSize: scaling.hs(12),
    fontWeight: '500',
    paddingBottom: scaling.vs(6),
    opacity: 0.67,
  },
  selectedDate: {
    backgroundColor: '#FFF',
    padding: scaling.vs(4),
    borderRadius: scaling.hs(12),
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
  subjectItemContainer: {
    width: scaling.hs(328),
    marginHorizontal: scaling.hs(16),
  },
  subjectItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: scaling.hs(8),
    paddingVertical: scaling.vs(12),
    paddingHorizontal: scaling.hs(12),
    borderWidth: 1,
    borderRadius: scaling.hs(8),
  },
});
