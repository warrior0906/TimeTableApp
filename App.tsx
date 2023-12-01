import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {HomeScreen} from './src/screens';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <HomeScreen />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
  },
});

export default App;
