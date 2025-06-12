
//-Zona 1 Importaciones 
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React, {useState } from 'react';


const Texto=()=>{
  const[contenido, setContenido]=useState('Hola Mundo React')
  const actualizarTexto=()=> {setContenido('Estado Actalizado')}
  return(
    <Text onPress={actualizarTexto}>{contenido}</Text>

  )
}

//Zona 2: Main
export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <Texto></Texto>
      <Texto> </Texto>
      <Texto></Texto>

      <Button title= "Presioname!"></Button>

    </View>
  );
}


//Zona 3: Zona de estilos 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
