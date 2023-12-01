import React, {useState} from 'react';
import {FlatList, Text, View} from 'react-native';
import {DatePicker, Header, WeekSelector} from '../../components';
import {styles} from './home.styles';
import {getCurrentWeek, getWeek} from '../../utils';
import moment from 'moment';

const HomeScreen = () => {
  const [showCalendar, setShowCalendar] = useState<boolean>(false);
  const [selectedWeek, setSelectedWeek] = useState<Array<string>>(
    getCurrentWeek(Date.now()) || [],
  );
  const [selectedDate, setSelectedDate] = useState(false);

  const renderItem = ({item}: {item: string}) => (
    <View style={styles.itemContainer}>
      <Text style={styles.day}>{moment(item).format('ddd')}</Text>
      <Text style={styles.date}>{moment(item).format('DD')}</Text>
    </View>
  );

  return (
    <View style={styles.rootContainer}>
      <Header />
      <WeekSelector
        dateRange={getWeek(selectedWeek)}
        onWeekPress={() => setShowCalendar(true)}
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
          selectedDate={''}
          selectedWeek={selectedWeek}
          setSelectedWeek={(week: Array<string>) => setSelectedWeek(week)}
        />
      )}
    </View>
  );
};

export default HomeScreen;
