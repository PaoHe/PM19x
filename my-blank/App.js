
//-Zona 1 Importaciones 
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React, {useState } from 'react';


const Texto=({style})=>{
  const[contenido, setContenido]=useState('Hola Mundo React')
  const actualizarTexto=()=> {setContenido('Estado Actalizado')}
  return(
    <Text style={[styles.text,style]} onPress={actualizarTexto}>{contenido}</Text>

  )
}


//Zona 2: Main
export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <Texto style={styles.black}></Texto>
      <Texto style={styles.gray}></Texto>
      <Texto style={styles.purple}></Texto>



    </View>
  );
}


//Zona 3: Zona de estilos 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'base-line',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  text:{
    color: 'pink',
    fontSize: 25,

    },

    black: {backgroundColor: 'black'},
    gray: {backgroundColor: 'gray'},
    purple: {backgroundColor: 'purple'},

});


