import React, {useState} from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import {DatePicker, Header, WeekSelector} from '../../components';
import {styles} from './home.styles';
import {currentDate, getCurrentWeek, getWeek} from '../../utils';
import moment from 'moment';
import scaling from '../../utils/scaling';

const HomeScreen = () => {
  const [showCalendar, setShowCalendar] = useState<boolean>(false);
  const [selectedWeek, setSelectedWeek] = useState<Array<string>>(
    getCurrentWeek(currentDate()) || [],
  );
  const [selectedDate, setSelectedDate] = useState<string>(currentDate());

  const initialScrollIndex =
    getCurrentWeek(currentDate()).findIndex(e => e === currentDate()) || 0;

  const widthOfEachItem = scaling.hs(328);
  const marginOnEachSideOfEachItem = scaling.hs(16);

  const flatListRef = React.useRef();

  const onPressDate = (item: string, index: number) => {
    setSelectedDate(item);
    flatListRef?.current?.scrollToIndex({
      animated: true,
      index: index,
    });
  };

  const renderItem = ({item, index}: {item: string; index: number}) => {
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
          onPress={() => onPressDate(item, index)}>
          <Text style={styles.day}>{day}</Text>
          <View style={[item === selectedDate ? styles.selectedDate : null]}>
            <Text style={styles.date}>{moment(item).format('DD')}</Text>
          </View>
        </TouchableOpacity>
        {item === currentDate() && <View style={styles.dot} />}
      </View>
    );
  };

  const renderSubjects = ({item}: {item: string}) => (
    <View
      style={[
        styles.subjectItemContainer,
        {width: widthOfEachItem, marginHorizontal: marginOnEachSideOfEachItem},
      ]}>
      {[1, 2, 3, 4]?.map(e => (
        <View style={styles.subjectItem} key={e}>
          <Text>{`Math ${item}`}</Text>
          <Text>08:00 - 08:30</Text>
        </View>
      ))}
    </View>
  );

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
      <FlatList
        data={selectedWeek}
        renderItem={renderSubjects}
        ref={flatListRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        initialScrollIndex={initialScrollIndex}
        getItemLayout={(_, index) => ({
          length: widthOfEachItem + 2 * marginOnEachSideOfEachItem, //  WIDTH + (MARGIN_HORIZONTAL * 2)
          offset: (widthOfEachItem + 2 * marginOnEachSideOfEachItem) * index, //  ( WIDTH + (MARGIN_HORIZONTAL*2) ) * (index)
          index,
        })}
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
