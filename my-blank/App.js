
//-Zona 1 Importaciones 
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

const Texto=(props)=>{
  const{children}=props
  return(
    <Text>{children}</Text>

  )
}

//Zona 2: Main
export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <Texto> Hola</Texto>
      <Texto> Mundo</Texto>
      <Texto> React Native</Texto>

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
