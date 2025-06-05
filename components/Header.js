// components/Header.js
import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { ThemeContext } from '../context/ThemeContext';
import { MaterialIcons } from '@expo/vector-icons';

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <View style={[styles.container, { backgroundColor: theme.headerBackground }]}>
      <Text style={[styles.title, { color: theme.text }]}>Miniatlas</Text>
      <TouchableOpacity onPress={toggleTheme} style={styles.button} activeOpacity={0.7}>
        <MaterialIcons
          name={theme.mode === 'light' ? 'dark-mode' : 'light-mode'}
          size={28}
          color={theme.text}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 60,
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    elevation: 4,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  button: {
    padding: 5,
  },
});

export default Header;
