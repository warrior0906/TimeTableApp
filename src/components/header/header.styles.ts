import {StyleSheet} from 'react-native';
import scaling from '../../utils/scaling';

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: scaling.hs(16),
    paddingBottom: scaling.vs(12),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: scaling.hs(20),
    fontWeight: '600',
    opacity: 0.87,
  },
  rightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textBtn: {
    color: '#3393ba',
    fontWeight: '600',
    paddingHorizontal: scaling.hs(12),
  },
  avatarContainer: {
    backgroundColor: '#bcbdf4',
    paddingHorizontal: scaling.hs(8),
    paddingVertical: scaling.vs(8),
    borderRadius: scaling.hs(40),
  },
  avatarTxt: {
    color: '#38105c',
    fontWeight: '600',
  },
});
