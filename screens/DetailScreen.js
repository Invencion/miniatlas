import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import { useFavorites } from '../context/FavoritesContext';

const DetailScreen = ({ route }) => {
  const { place } = route.params;
  const { theme } = useTheme();
  const { addFavorite, removeFavorite, isFavorite } = useFavorites();

  const favorite = isFavorite(place.cca3);

  return (
    <ScrollView style={[styles.container, { backgroundColor: theme.background }]}>
      <Text style={[styles.title, { color: theme.text }]}>{place.name.common}</Text>
      <Text style={[styles.desc, { color: theme.text }]}>Başkent: {place.capital ? place.capital[0] : 'Bilgi yok'}</Text>
      <Text style={[styles.desc, { color: theme.text }]}>Nüfus: {place.population.toLocaleString()}</Text>
      <Text style={[styles.desc, { color: theme.text }]}>Bölge: {place.region}</Text>
      <TouchableOpacity
        onPress={() => (favorite ? removeFavorite(place.cca3) : addFavorite(place))}
        style={[styles.button, { backgroundColor: theme.primary }]}
      >
        <Text style={styles.buttonText}>
          {favorite ? 'Favorilerden Kaldır' : 'Favorilere Ekle'}
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 15 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 15 },
  desc: { fontSize: 16, marginBottom: 10 },
  button: {
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: { color: 'white', fontWeight: 'bold' },
});

export default DetailScreen;
