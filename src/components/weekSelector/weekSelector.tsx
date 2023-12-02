import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageSourcePropType,
} from 'react-native';
import icons from '../../assets/icons';
import {styles} from './weekSelector.styles';
import {IWeekSelectorProps} from './WeekSelector.interface';
import {
  getLastWeekDate,
  getNextWeek,
  getNextWeekDate,
  getPrevWeek,
} from '../../utils';
import scaling from '../../utils/scaling';

const WeekSelector = ({
  selectedDate,
  dateRange,
  onWeekPress,
  setSelectedWeek,
  setSelectedDate,
}: IWeekSelectorProps) => {
  const handleOnPressIcon = (type: string) => {
    if (type === 'prev') {
      setSelectedWeek(getPrevWeek(selectedDate));
      setSelectedDate(getLastWeekDate(selectedDate));
    } else {
      setSelectedWeek(getNextWeek(selectedDate));
      setSelectedDate(getNextWeekDate(selectedDate));
    }
  };

  const renderIcon = (icon: ImageSourcePropType, type: string) => (
    <TouchableOpacity
      onPress={() => handleOnPressIcon(type)}
      style={[
        styles.icon,
        type === 'prev'
          ? {borderRightWidth: scaling.hs(1)}
          : {borderLeftWidth: scaling.hs(1)},
      ]}>
      <Image source={icon} />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {renderIcon(icons.chevronLeft, 'prev')}
      <TouchableOpacity onPress={onWeekPress} style={styles.week}>
        <Text>{dateRange}</Text>
      </TouchableOpacity>
      {renderIcon(icons.chevronRight, 'next')}
    </View>
  );
};

export default WeekSelector;
