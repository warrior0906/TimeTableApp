import {StyleSheet} from 'react-native';
import scaling from '../../utils/scaling';

export const styles = StyleSheet.create({
  container: {
    marginHorizontal: scaling.hs(16),
    marginTop: scaling.hs(12),
    paddingVertical: scaling.vs(12),
    paddingHorizontal: scaling.hs(12),
    borderRadius: scaling.hs(10),
    borderWidth: scaling.hs(1),
    borderColor: '#bababa',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
