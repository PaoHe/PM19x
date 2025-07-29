import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Modal,
  ImageBackground,
  SafeAreaView,
  Pressable,
  Alert,
} from "react-native";

export default function PacientesScreen() {
  const [pacientes, setPacientes] = useState([]);
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [telefono, setTelefono] = useState("");
  const [busqueda, setBusqueda] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [modalNoEncontradoVisible, setModalNoEncontradoVisible] = useState(false);

  const agregarPaciente = () => {
    if (nombre && correo && telefono) {
      setPacientes([...pacientes, { id: Date.now().toString(), nombre, correo, telefono }]);
      setNombre("");
      setCorreo("");
      setTelefono("");
      setModalVisible(true);
    }
  };

  const buscarPaciente = () => {
    const encontrado = pacientes.find((p) =>
      p.nombre.toLowerCase().includes(busqueda.toLowerCase())
    );

    if (!encontrado) {
      setModalNoEncontradoVisible(true);
    } else {
      Alert.alert("Encontrado", `Paciente encontrado: ${encontrado.nombre}`);
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.absoluteBackground}>
        <ImageBackground
          source={require("../FondoHome.jpeg")}
          style={styles.background}
          resizeMode="cover"
        >
          <View style={styles.overlay} />
        </ImageBackground>
      </View>

      <View style={styles.container}>
        <Text style={styles.title}>Registro de Pacientes</Text>

        {/* Buscador */}
        <View style={styles.searchSection}>
          <TextInput
            style={styles.input}
            placeholder="Buscar paciente por nombre"
            placeholderTextColor="#ccc"
            value={busqueda}
            onChangeText={setBusqueda}
          />
          <TouchableOpacity style={styles.button} onPress={buscarPaciente}>
            <Text style={styles.buttonText}>Buscar</Text>
          </TouchableOpacity>
        </View>

        {/* Formulario */}
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Nombre"
            placeholderTextColor="#ccc"
            value={nombre}
            onChangeText={setNombre}
          />
          <TextInput
            style={styles.input}
            placeholder="Correo"
            placeholderTextColor="#ccc"
            value={correo}
            onChangeText={setCorreo}
            keyboardType="email-address"
          />
          <TextInput
            style={styles.input}
            placeholder="Teléfono"
            placeholderTextColor="#ccc"
            value={telefono}
            onChangeText={setTelefono}
            keyboardType="phone-pad"
          />

          <TouchableOpacity style={styles.button} onPress={agregarPaciente}>
            <Text style={styles.buttonText}>Guardar Paciente</Text>
          </TouchableOpacity>
        </View>

        {/* Tabla de pacientes */}
        <View style={styles.tableHeader}>
          <Text style={[styles.tableText, { flex: 1 }]}>Nombre</Text>
          <Text style={[styles.tableText, { flex: 1 }]}>Correo</Text>
          <Text style={[styles.tableText, { flex: 1 }]}>Teléfono</Text>
        </View>

        <FlatList
          data={pacientes}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.tableRow}>
              <Text style={[styles.cellText, { flex: 1 }]}>{item.nombre}</Text>
              <Text style={[styles.cellText, { flex: 1 }]}>{item.correo}</Text>
              <Text style={[styles.cellText, { flex: 1 }]}>{item.telefono}</Text>
            </View>
          )}
        />

        {/* Modal de éxito */}
        <Modal
          animationType="fade"
          transparent
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>¡Paciente registrado!</Text>
              <Text style={styles.modalMessage}>Los datos se guardaron correctamente.</Text>
              <Pressable style={styles.modalButton} onPress={() => setModalVisible(false)}>
                <Text style={styles.modalButtonText}>Aceptar</Text>
              </Pressable>
            </View>
          </View>
        </Modal>

        {/* Modal paciente no encontrado */}
        <Modal
          animationType="fade"
          transparent
          visible={modalNoEncontradoVisible}
          onRequestClose={() => setModalNoEncontradoVisible(false)}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Paciente no encontrado</Text>
              <Text style={styles.modalMessage}>¿Deseas registrarlo?</Text>
              <Pressable style={styles.modalButton} onPress={() => setModalNoEncontradoVisible(false)}>
                <Text style={styles.modalButtonText}>Aceptar</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: "#000" },
  absoluteBackground: { ...StyleSheet.absoluteFillObject, zIndex: 0 },
  background: { flex: 1, width: "100%", height: "100%" },
  overlay: { ...StyleSheet.absoluteFillObject, backgroundColor: "rgba(0,0,0,0.3)" },
  container: { flex: 1, padding: 20, zIndex: 1 },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 20,
    textAlign: "center",
  },
  searchSection: {
    backgroundColor: "rgba(255,255,255,0.1)",
    borderRadius: 12,
    padding: 15,
    marginBottom: 20,
  },
  form: {
    backgroundColor: "rgba(255,255,255,0.1)",
    borderRadius: 12,
    padding: 15,
    marginBottom: 20,
  },
  input: {
    backgroundColor: "rgba(255,255,255,0.2)",
    color: "#fff",
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  button: {
    backgroundColor: "#2b4675",
    padding: 12,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 5,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  tableHeader: {
    flexDirection: "row",
    backgroundColor: "#2b4675",
    padding: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  tableText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 14,
    textAlign: "center",
  },
  tableRow: {
    flexDirection: "row",
    backgroundColor: "rgba(255,255,255,0.8)",
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderBottomWidth: 1,
    borderColor: "#ccc",
  },
  cellText: {
    color: "#333",
    fontSize: 13,
    textAlign: "center",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.6)",
    padding: 30,
  },
  modalContent: {
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 25,
    alignItems: "center",
    elevation: 10,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#2b4675",
  },
  modalMessage: {
    fontSize: 14,
    color: "#444",
    marginBottom: 20,
    textAlign: "center",
  },
  modalButton: {
    backgroundColor: "#2b4675",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  modalButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
