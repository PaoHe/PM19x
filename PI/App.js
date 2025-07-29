import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Pantallas
import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";
import PacientesScreen from "./screens/PacientesScreen";
import PsicologosScreen from "./screens/PsicologosScreen";
import CitasScreen from "./screens/CitasScreen";
import HistorialScreen from "./screens/HistorialCitasScreen"; // Asegúrate que este archivo exista

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        {/* Pantalla de inicio de sesión sin encabezado */}
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />

        {/* Pantallas principales con encabezado */}
        <Stack.Screen
          name="Inicio"
          component={HomeScreen}
          options={{ title: "Inicio" }}
        />
        <Stack.Screen
          name="Pacientes"
          component={PacientesScreen}
          options={{ title: "Pacientes" }}
        />
        <Stack.Screen
          name="Psicologos"
          component={PsicologosScreen}
          options={{ title: "Psicólogos" }}
        />
        <Stack.Screen
          name="Citas"
          component={CitasScreen}
          options={{ title: "Citas" }}
        />
        <Stack.Screen
          name="HistorialCitasScreen"  // ← Este nombre coincide con tu navegación
          component={HistorialScreen}
          options={{ title: "Historial de Citas" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
