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
    <TouchableOpacity onPress={() => handleOnPressIcon(type)}>
      <Image source={icon} />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {renderIcon(icons.chevronLeft, 'prev')}
      <TouchableOpacity onPress={onWeekPress}>
        <Text>{dateRange}</Text>
      </TouchableOpacity>
      {renderIcon(icons.chevronRight, 'next')}
    </View>
  );
};

export default WeekSelector;
