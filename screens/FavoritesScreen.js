import React from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';
import { useFavorites } from '../context/FavoritesContext';
import { useTheme } from '../context/ThemeContext';
import PlaceItem from '../components/PlaceItem';
import { useNavigation } from '@react-navigation/native';

const FavoritesScreen = () => {
  const { favorites } = useFavorites();
  const { theme } = useTheme();
  const navigation = useNavigation();

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      {favorites.length === 0 ? (
        <Text style={[styles.emptyText, { color: theme.text }]}>
          Henüz favori eklenmedi.
        </Text>
      ) : (
        <FlatList
          data={favorites}
          keyExtractor={(item) => item.cca3}
          renderItem={({ item }) => (
            <PlaceItem
              place={item}
              onPress={() => navigation.navigate('Detail', { place: item })}
            />
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 },
  emptyText: {
    textAlign: 'center',
    fontSize: 16,
    marginTop: 20,
  },
});

export default FavoritesScreen;
