import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from './header.styles';
import {fetchInitials, fullName} from '../../utils';

const Avatar = () => (
  <View style={styles.avatarContainer}>
    <Text style={styles.avatarTxt}>{fetchInitials(fullName)}</Text>
  </View>
);

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>TimeTable</Text>
      <View style={styles.rightContainer}>
        <TouchableOpacity>
          <Text style={styles.textBtn}>View Holidays</Text>
        </TouchableOpacity>
        <Avatar />
      </View>
    </View>
  );
};

export default Header;
