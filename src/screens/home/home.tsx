import React, {useState} from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import {DatePicker, Header, WeekSelector} from '../../components';
import {styles} from './home.styles';
import {currentDate, getCurrentWeek, getWeek} from '../../utils';
import moment from 'moment';

const HomeScreen = () => {
  const [showCalendar, setShowCalendar] = useState<boolean>(false);
  const [selectedWeek, setSelectedWeek] = useState<Array<string>>(
    getCurrentWeek(currentDate()) || [],
  );
  const [selectedDate, setSelectedDate] = useState<string>(currentDate());

  const renderItem = ({item}: {item: string}) => {
    const day = moment(item).format('ddd');
    if (day === 'Sun') {
      return <></>;
    }
    return (
      <View style={styles.itemContainer}>
        <TouchableOpacity
          style={[
            styles.dateView,
            item === selectedDate ? styles.selectedContainer : null,
          ]}
          onPress={() => setSelectedDate(item)}>
          <Text style={styles.day}>{day}</Text>
          <View style={[item === selectedDate ? styles.selectedDate : null]}>
            <Text style={styles.date}>{moment(item).format('DD')}</Text>
          </View>
        </TouchableOpacity>
        {item === currentDate() && <View style={styles.dot} />}
      </View>
    );
  };

  return (
    <View style={styles.rootContainer}>
      <Header />
      <WeekSelector
        selectedDate={selectedDate}
        dateRange={getWeek(selectedWeek)}
        onWeekPress={() => setShowCalendar(true)}
        setSelectedWeek={setSelectedWeek}
        setSelectedDate={setSelectedDate}
      />
      <FlatList
        data={selectedWeek}
        renderItem={renderItem}
        horizontal
        style={styles.container}
      />
      {showCalendar && (
        <DatePicker
          onPressClose={() => setShowCalendar(false)}
          selectedDate={selectedDate}
          selectedWeek={selectedWeek}
          setSelectedWeek={(week: Array<string>) => setSelectedWeek(week)}
          setSelectedDate={setSelectedDate}
        />
      )}
    </View>
  );
};

export default HomeScreen;
