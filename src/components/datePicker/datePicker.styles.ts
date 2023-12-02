import {StyleSheet} from 'react-native';
import scaling from '../../utils/scaling';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: scaling.hs(90),
    backgroundColor: 'rgba(0, 0, 3, 0.4)',
  },
  modalView: {
    width: '90%',
    height: '75%',
    backgroundColor: '#FFF',
    borderRadius: scaling.hs(12),
    paddingHorizontal: scaling.hs(16),
    paddingVertical: scaling.vs(12),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 0.3,
    paddingVertical: scaling.vs(12),
  },
  today: {
    color: '#3393ba',
    fontWeight: '700',
    fontSize: scaling.hs(14),
  },
  footer: {
    marginVertical: scaling.vs(12),
  },
  apply: {
    backgroundColor: '#3393ba',
    borderRadius: scaling.hs(8),
    marginVertical: scaling.vs(12),
  },
});
