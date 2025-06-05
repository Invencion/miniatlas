import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';
import FavoritesScreen from '../screens/FavoritesScreen';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: true }}>
      <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Miniatlas' }} />
      <Stack.Screen name="Detail" component={DetailScreen} options={{ title: 'Detaylar' }} />
      <Stack.Screen name="Favorites" component={FavoritesScreen} options={{ title: 'Favoriler' }} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
