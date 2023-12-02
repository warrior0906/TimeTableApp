import React, {useState} from 'react';
import {Button, Modal, Text, TouchableOpacity, View} from 'react-native';
import {Calendar} from 'react-native-calendars';
import {styles} from './datePicker.styles';
import {IDatePickerInterProps} from './datePicker.interface';
import {currentDate, getCurrentWeek, getWeek} from '../../utils';

const DatePicker = ({
  onPressClose,
  selectedDate,
  selectedWeek,
  setSelectedWeek,
  setSelectedDate,
}: IDatePickerInterProps) => {
  const [selected, setSelected] = useState<string>(selectedDate);
  const [week, setWeek] = useState<Array<string>>(selectedWeek);

  const renderHeader = () => (
    <View style={styles.header}>
      <Text>{getWeek(week)}</Text>
      <TouchableOpacity
        onPress={() => {
          setSelected(currentDate());
          setWeek(getCurrentWeek());
        }}>
        <Text style={styles.today}>Today</Text>
      </TouchableOpacity>
    </View>
  );

  const renderButtons = () => (
    <View style={styles.footer}>
      <TouchableOpacity
        style={styles.apply}
        onPress={() => {
          setSelectedWeek(week);
          setSelectedDate(selected);
          onPressClose();
        }}>
        <Text style={styles.applyTxt}>Apply</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.apply, styles.cancel]}
        onPress={() => {
          setSelectedWeek(week);
          setSelectedDate(selected);
          onPressClose();
        }}>
        <Text style={styles.cancelTxt}>Cancel</Text>
      </TouchableOpacity>
    </View>
  );
  return (
    <Modal
      transparent
      visible={true}
      onRequestClose={onPressClose}
      animationType="none">
      <View style={styles.container}>
        <View style={styles.modalView}>
          {renderHeader()}
          <Calendar
            current={selectedDate}
            onDayPress={day => {
              setSelected(day.dateString);
              setWeek(getCurrentWeek(day.dateString));
            }}
            markedDates={{
              [selected]: {
                selected: true,
                disableTouchEvent: true,
              },
            }}
          />
          {renderButtons()}
        </View>
      </View>
    </Modal>
  );
};

export default DatePicker;
