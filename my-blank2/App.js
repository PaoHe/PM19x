import React, { useState } from 'react';
import {View,Text,TextInput,Switch,Button,Image,Alert,StyleSheet,ImageBackground} from 'react-native';

export default function App() {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [aceptaTerminos, setAceptaTerminos] = useState(false);

  const handleRegister = () => {
    if (!nombre || !correo) {
      Alert.alert("Error", "Todos los campos son obligatorios.");
      return;
    }
    if (!aceptaTerminos) {
      Alert.alert("Error", "Debes aceptar los términos y condiciones.");
      return;
    }
    Alert.alert("Registro exitoso", `Nombre: ${nombre}\nCorreo: ${correo}`);
  };

  return (
    <ImageBackground
      source={require('./fondo.jpeg')} 
      style={styles.background}
    >
      <View style={styles.container}>
        <Image
          source={require('./logo.png')} 
          style={styles.logo}
        />
        <Text style={styles.title}>Registro de Usuario</Text>

        <TextInput
          style={styles.input}
          placeholder="Nombre completo"
          placeholderTextColor="#999"
          value={nombre}
          onChangeText={setNombre}
        />

        <TextInput
          style={styles.input}
          placeholder="Correo"
          placeholderTextColor="#999"
          keyboardType="email-address"
          value={correo}
          onChangeText={setCorreo}
        />

        <View style={styles.switchContainer}>
          <Switch
            value={aceptaTerminos}
            onValueChange={setAceptaTerminos}
          />
          <Text style={styles.switchText}>Aceptar términos y conbiciones</Text>
        </View>

        <View style={styles.button}>
          <Button title="Registrarse" onPress={handleRegister} color="#FF00AA" />
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    backgroundColor: 'rgba(255,255,255,0.5)',
    margin: 20,
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 22,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
    backgroundColor: '#fff',
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  switchText: {
    marginLeft: 10,
    fontSize: 16,
  },
  button: {
    width: '100%',
  },
});
