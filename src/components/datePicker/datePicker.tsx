import React, {useState} from 'react';
import {Button, Modal, Text, TouchableOpacity, View} from 'react-native';
import {Calendar} from 'react-native-calendars';
import {styles} from './datePicker.styles';
import {IDatePickerInterProps} from './datePicker.interface';
import {currentDate, getCurrentWeek, getWeek} from '../../utils';

const DatePicker = ({
  onPressClose,
  selectedDate = '2023-12-06',
  selectedWeek,
  setSelectedWeek,
}: IDatePickerInterProps) => {
  const [selected, setSelected] = useState<string>(selectedDate);
  const [week, setWeek] = useState<Array<string>>(selectedWeek);

  const renderHeader = () => (
    <View style={styles.header}>
      <Text>{getWeek(week)}</Text>
      <TouchableOpacity
        onPress={() => {
          setSelected(currentDate());
          setWeek(getCurrentWeek()); // need to recheck this
        }}>
        <Text style={styles.today}>Today</Text>
      </TouchableOpacity>
    </View>
  );

  const renderButtons = () => (
    <View style={styles.footer}>
      <View style={styles.apply}>
        <Button
          title="Apply"
          color={'#FFFF'}
          onPress={() => {
            setSelectedWeek(week);
            onPressClose();
          }}
        />
      </View>
      <Button title="Cancel" color={'#3393ba'} onPress={onPressClose} />
    </View>
  );
  return (
    <View style={styles.container}>
      <Modal
        transparent
        visible={true}
        onRequestClose={onPressClose}
        animationType="none">
        <View style={styles.container}>
          <View style={styles.modalView}>
            {renderHeader()}
            <Calendar
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
    </View>
  );
};

export default DatePicker;
