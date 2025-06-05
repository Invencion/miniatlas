import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useTheme } from '../context/ThemeContext';

const PlaceItem = ({ place, onPress }) => {
  const { theme } = useTheme();

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.container,
        { backgroundColor: theme.card, borderColor: theme.border },
      ]}
    >
      <Image
        source={{ uri: place.flags?.png }}
        style={styles.flag}
        resizeMode="contain"
      />
      <View style={styles.textContainer}>
        <Text style={[styles.name, { color: theme.text }]}>
          {place.name.common}
        </Text>
        <Text style={[styles.city, { color: theme.text + '99' }]}>
          {place.region}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 15,
    marginHorizontal: 10,
    marginVertical: 5,
    borderRadius: 10,
    borderWidth: 1,
    alignItems: 'center',
  },
  flag: {
    width: 50,
    height: 35,
    marginRight: 15,
    borderRadius: 5,
  },
  textContainer: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  city: {
    fontSize: 14,
  },
});

export default PlaceItem;
