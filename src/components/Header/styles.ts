import {StyleSheet} from 'react-native';
import COLORS from '../../theme/colors';
import {normalize} from '../../utils/reponsive';

export default StyleSheet.create({
  container: {
    paddingVertical: normalize(5),
    justifyContent: 'center',
    backgroundColor: `${COLORS.blu26225b}`,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  baseView: {
    flex: 1,
  },
  largeView: {
    flex: 5,
  },
  flexStart: {
    alignItems: 'flex-start',
  },
  flexEnd: {
    alignItems: 'flex-end',
  },
  viewHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  leftIconView: {},
  rightIconVIew: {
    marginRight: normalize(16),
  },
  title: {
    textAlign: 'center',
  },
  titleLeft: {
    textAlign: 'left',
    marginLeft: normalize(15),
  },
  titleRight: {
    textAlign: 'right',
  },
  rightButton: {
    padding: normalize(10),
  },
  titleLarge: {
    fontWeight: '700',
    fontSize: normalize(18),
    lineHeight: normalize(27),
    color: COLORS.white,
  },
});
