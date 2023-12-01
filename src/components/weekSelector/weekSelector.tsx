import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import icons from '../../assets/icons';
import {styles} from './weekSelector.styles';
import {IWeekSelectorProps} from './WeekSelector.interface';

const WeekSelector = ({dateRange, onWeekPress}: IWeekSelectorProps) => {
  const renderIcon = (icon: string) => (
    <TouchableOpacity>
      <Image source={icon} />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {renderIcon(icons.chevronLeft)}
      <TouchableOpacity onPress={onWeekPress}>
        <Text>{dateRange}</Text>
      </TouchableOpacity>
      {renderIcon(icons.chevronRight)}
    </View>
  );
};

export default WeekSelector;
