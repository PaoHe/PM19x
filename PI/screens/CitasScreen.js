import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Modal,
  SafeAreaView,
  ImageBackground,
  Platform
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Picker } from "@react-native-picker/picker";

export default function CitasScreen() {
  const [citas, setCitas] = useState([]);
  const [fecha, setFecha] = useState(new Date());
  const [mostrarCalendario, setMostrarCalendario] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [pacienteSeleccionado, setPacienteSeleccionado] = useState("");
  const [psicologoSeleccionado, setPsicologoSeleccionado] = useState("");

  const pacientesMock = ["Juan Pérez", "Ana Torres", "Carlos Méndez"];
  const psicologosMock = ["Lic. María Ruiz", "Mtro. Jorge Soto", "Psic. Valeria Díaz"];

  const agendarCita = () => {
    if (pacienteSeleccionado && psicologoSeleccionado) {
      setCitas([
        ...citas,
        {
          id: Date.now().toString(),
          fecha: fecha.toLocaleDateString(),
          paciente: pacienteSeleccionado,
          psicologo: psicologoSeleccionado,
        },
      ]);
      setModalVisible(true);
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
        <Text style={styles.title}>Agendar una Cita</Text>

        {/* Selectores */}
        <Text style={styles.label}>Seleccionar Paciente:</Text>
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={pacienteSeleccionado}
            onValueChange={(value) => setPacienteSeleccionado(value)}
            style={styles.picker}
          >
            <Picker.Item label="Selecciona un paciente" value="" />
            {pacientesMock.map((p, index) => (
              <Picker.Item key={index} label={p} value={p} />
            ))}
          </Picker>
        </View>

        <Text style={styles.label}>Seleccionar Psicólogo:</Text>
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={psicologoSeleccionado}
            onValueChange={(value) => setPsicologoSeleccionado(value)}
            style={styles.picker}
          >
            <Picker.Item label="Selecciona un psicólogo" value="" />
            {psicologosMock.map((p, index) => (
              <Picker.Item key={index} label={p} value={p} />
            ))}
          </Picker>
        </View>

        {/* Fecha */}
        <TouchableOpacity style={styles.button} onPress={() => setMostrarCalendario(true)}>
          <Text style={styles.buttonText}>Seleccionar Fecha</Text>
        </TouchableOpacity>

        {mostrarCalendario && (
          <DateTimePicker
            value={fecha}
            mode="date"
            display={Platform.OS === "ios" ? "spinner" : "default"}
            onChange={(event, selectedDate) => {
              setMostrarCalendario(false);
              if (selectedDate) setFecha(selectedDate);
            }}
          />
        )}

        <TouchableOpacity style={styles.button} onPress={agendarCita}>
          <Text style={styles.buttonText}>Generar Cita</Text>
        </TouchableOpacity>

        <Text style={styles.subTitle}>Citas Generadas:</Text>

        <FlatList
          data={citas}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Text style={styles.cardText}>📅 {item.fecha}</Text>
              <Text style={styles.cardText}>👤 {item.paciente}</Text>
              <Text style={styles.cardText}>🧠 {item.psicologo}</Text>
            </View>
          )}
        />

        {/* Modal */}
        <Modal transparent animationType="fade" visible={modalVisible} onRequestClose={() => setModalVisible(false)}>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>¡Cita Agendada!</Text>
              <Text style={styles.modalMessage}>Tu cita se ha registrado correctamente.</Text>
              <TouchableOpacity style={styles.modalButton} onPress={() => setModalVisible(false)}>
                <Text style={styles.modalButtonText}>Aceptar</Text>
              </TouchableOpacity>
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
  title: { fontSize: 24, fontWeight: "bold", color: "#fff", marginBottom: 20, textAlign: "center" },
  label: { color: "#fff", fontWeight: "bold", marginBottom: 5, marginTop: 10 },
  pickerContainer: {
    backgroundColor: "rgba(255,255,255,0.2)",
    borderRadius: 10,
    marginBottom: 12,
  },
  picker: { color: "#fff" },
  subTitle: { color: "#ccc", marginVertical: 15, fontSize: 16 },
  button: {
    backgroundColor: "#2b4675",
    padding: 14,
    borderRadius: 12,
    alignItems: "center",
    marginBottom: 12,
  },
  buttonText: { color: "#fff", fontSize: 16, fontWeight: "bold" },
  card: {
    backgroundColor: "rgba(255,255,255,0.9)",
    padding: 12,
    marginVertical: 6,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  cardText: {
    color: "#333",
    fontWeight: "600",
    fontSize: 15,
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
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#2b4675",
    marginBottom: 10,
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
