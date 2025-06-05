import React, { useState, useEffect } from 'react';
import {View,TextInput,FlatList,StyleSheet,Text,TouchableOpacity,ActivityIndicator,} from 'react-native';
import { useTheme } from '../context/ThemeContext';
import { useNavigation } from '@react-navigation/native';
import PlaceItem from '../components/PlaceItem';

const HomeScreen = () => {
  const [search, setSearch] = useState('');
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const { theme, toggleTheme } = useTheme();
  const navigation = useNavigation();

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const res = await fetch('https://restcountries.com/v3.1/all');
        const data = await res.json();
        setCountries(data);
      } catch (error) {
        console.error('Ülke verileri alınamadı:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchCountries();
  }, []);

  const filteredCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <TextInput
        style={[
          styles.input,
          {
            backgroundColor: theme.card,
            color: theme.text,
            borderColor: theme.border,
          },
        ]}
        placeholder="Ülke ara..."
        placeholderTextColor={theme.text + '99'}
        value={search}
        onChangeText={setSearch}
      />

      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={toggleTheme} style={[styles.button, { backgroundColor: theme.primary }]}>
          <Text style={styles.buttonText}>Temayı Değiştir</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Favorites')} style={[styles.button, { backgroundColor: theme.primary }]}>
          <Text style={styles.buttonText}>Favoriler</Text>
        </TouchableOpacity>
      </View>

      {loading ? (
        <ActivityIndicator size="large" color={theme.primary} style={{ marginTop: 20 }} />
      ) : (
        <FlatList
          data={filteredCountries}
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
  container: { flex: 1 },
  input: {
    margin: 10,
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 10,
  },
  button: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default HomeScreen;
