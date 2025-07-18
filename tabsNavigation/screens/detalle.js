import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function DetalleScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Detalles del Usuario</Text>
      <Button title="Regresar al Perfil" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  text: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});
