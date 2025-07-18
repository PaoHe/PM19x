import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Profile({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.iconRow}>
        <Ionicons name="person-outline" size={28} color="green" />
        <Text style={styles.title}> Perfil de usuario </Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Detalles de usuario"
          color="#007AFF"
          onPress={() => navigation.navigate('Detalle')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  iconRow: {
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 10,
    color: 'green',
  },
  buttonContainer: {
    marginTop: 20,
    width: '60%',
  },
});
