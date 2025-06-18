// Zona 1: Importaciones
import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Modal, View, Text, Button, StyleSheet } from 'react-native';

// Zona 2: Componente Modal 
const ModalContenido = ({ visible, cerrar }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={cerrar}
    >
      <View style={styles.modalBackground}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalText}>¡Hola! Este es un Modal 🧾</Text>
          <Button title="Cerrar" onPress={cerrar} />
        </View>
      </View>
    </Modal>
  );
};

// Zona 3: Componente 
export default function App() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>

      <StatusBar style="auto" />
      <Text style={styles.title}>Mostrar Modal</Text>

      <Button title="Mostrar Modal" onPress={() => setModalVisible(true)} />

      <ModalContenido
        visible={modalVisible}
        cerrar={() => setModalVisible(false)}
      />
    </View>
  );
}

// Zona 4: Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EAF2F8',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 22,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
  },
  modalContainer: {
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 25,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  modalText: {
    fontSize: 18,
    marginBottom: 15,
    textAlign: 'center',
  },
});
