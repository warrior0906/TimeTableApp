import React, {useMemo, useState} from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import {DatePicker, Header, WeekSelector} from '../../components';
import {styles} from './home.styles';
import {currentDate, getCurrentWeek, getWeek} from '../../utils';
import moment from 'moment';
import scaling from '../../utils/scaling';
import {getData} from './home.constants';

const HomeScreen = () => {
  const [showCalendar, setShowCalendar] = useState<boolean>(false);
  const [selectedWeek, setSelectedWeek] = useState<Array<string>>(
    getCurrentWeek(currentDate()) || [],
  );
  const [selectedDate, setSelectedDate] = useState<string>(currentDate());

  const initialScrollIndex = useMemo(
    () => selectedWeek.findIndex(e => e === selectedDate) - 1 || 0,
    [selectedWeek, selectedDate],
  );

  const data = useMemo(() => getData(selectedWeek), [selectedWeek]);

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

  const renderItem = ({item, index}: {item: any; index: number}) => {
    const day = moment(item.date).format('ddd');
    if (day === 'Sun') {
      return <></>;
    }
    return (
      <View style={styles.itemContainer}>
        <TouchableOpacity
          style={[
            styles.dateView,
            item.date === selectedDate ? styles.selectedContainer : null,
          ]}
          onPress={() => onPressDate(item.date, index)}>
          <Text style={styles.day}>{day}</Text>
          <View
            style={[item.date === selectedDate ? styles.selectedDate : null]}>
            <Text style={styles.date}>{moment(item.date).format('DD')}</Text>
          </View>
        </TouchableOpacity>
        {item.date === currentDate() && <View style={styles.dot} />}
      </View>
    );
  };

  const renderSubjects = ({item}: {item: any}) => {
    const day = moment(item.date).format('ddd');
    if (day === 'Sun') {
      return <></>;
    }
    return (
      <View
        style={[
          styles.subjectItemContainer,
          {
            width: widthOfEachItem,
            marginHorizontal: marginOnEachSideOfEachItem,
          },
        ]}>
        {item.schedule?.map((e: any) => (
          <View style={styles.subjectItem} key={e.subj}>
            <Text>{`${e.subj} ${item.date}`}</Text>
            <Text>{e.time}</Text>
          </View>
        ))}
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
        data={data}
        renderItem={renderItem}
        horizontal
        style={styles.container}
      />
      <FlatList
        data={data}
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
        onMomentumScrollEnd={ev => {
          const newIndex = Math.round(
            ev.nativeEvent.contentOffset.x / widthOfEachItem,
          );
          setSelectedDate(selectedWeek[newIndex + 1]);
        }}
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
