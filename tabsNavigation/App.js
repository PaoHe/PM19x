import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from './screens/home';
import ProfileScreen from './screens/profile';
import SettingsScreen from './screens/settings';
import DetalleScreen from './screens/detalle'; // Nuevo screen

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// Stack para Perfil y Detalle
function ProfileStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Perfil"
        component={ProfileScreen}
        options={{ headerTitle: 'Perfil de Usuario' }}
      />
      <Stack.Screen
        name="Detalle"
        component={DetalleScreen}
        options={{ headerTitle: 'Detalles del Usuario' }}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = 'home-outline';
            } else if (route.name === 'Profile') {
              iconName = 'person-outline';
            } else if (route.name === 'Settings') {
              iconName = 'settings-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#007AFF',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen
          name="Profile"
          component={ProfileStack} // Ahora usa el Stack
          options={{ headerShown: false }}
        />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
