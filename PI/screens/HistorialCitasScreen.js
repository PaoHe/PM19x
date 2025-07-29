import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
  TouchableOpacity,
} from "react-native";

export default function HistorialCitasScreen({ navigation }) {
  const [citasPendientes, setCitasPendientes] = useState([
    {
      id: "1",
      paciente: "Juan Pérez",
      psicologo: "Dra. García",
      fecha: "2024-08-05",
      hora: "10:00",
      estado: "Pendiente",
    },
    {
      id: "2",
      paciente: "Ana Gómez",
      psicologo: "Dr. Soto",
      fecha: "2024-08-08",
      hora: "14:30",
      estado: "Pendiente",
    },
  ]);

  const [citasRealizadas, setCitasRealizadas] = useState([
    {
      id: "3",
      paciente: "Carlos Ruiz",
      psicologo: "Dra. López",
      fecha: "2024-07-01",
      hora: "09:00",
      estado: "Realizada",
    },
    {
      id: "4",
      paciente: "Laura Díaz",
      psicologo: "Dr. Morales",
      fecha: "2024-07-15",
      hora: "13:15",
      estado: "Realizada",
    },
  ]);

  const obtenerDiaSemana = (fecha) => {
    const dias = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"];
    const dateObj = new Date(fecha);
    return dias[dateObj.getDay()];
  };

  const renderTableHeader = () => (
    <View style={styles.tableHeader}>
      <Text style={styles.headerText}>Fecha</Text>
      <Text style={styles.headerText}>Hora</Text>
      <Text style={styles.headerText}>Paciente</Text>
      <Text style={styles.headerText}>Psicólogo</Text>
      <Text style={styles.headerText}>Estado</Text>
    </View>
  );

  const renderTableRow = (item, backgroundColor) => (
    <View style={[styles.tableRow, { backgroundColor }]}>
      <Text style={styles.rowText}>
        {obtenerDiaSemana(item.fecha)} {item.fecha}
      </Text>
      <Text style={styles.rowText}>{item.hora}</Text>
      <Text style={styles.rowText}>{item.paciente}</Text>
      <Text style={styles.rowText}>{item.psicologo}</Text>
      <Text style={styles.rowText}>{item.estado}</Text>
    </View>
  );

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
        <Text style={styles.title}>Historial de Citas</Text>

        <Text style={styles.sectionTitle}>📌 Citas Pendientes</Text>
        {renderTableHeader()}
        <FlatList
          data={citasPendientes}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) =>
            renderTableRow(item, "rgba(255,255,255,0.9)")
          }
        />

        <Text style={styles.sectionTitle}>✅ Citas Realizadas</Text>
        {renderTableHeader()}
        <FlatList
          data={citasRealizadas}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) =>
            renderTableRow(item, "rgba(200,255,200,0.85)")
          }
        />

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Citas")}
        >
          <Text style={styles.buttonText}>+ Generar Nueva Cita</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: "#000" },
  absoluteBackground: { ...StyleSheet.absoluteFillObject, zIndex: 0 },
  background: { flex: 1, width: "100%", height: "100%" },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.3)",
  },
  container: { flex: 1, padding: 20, zIndex: 1 },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 20,
    textAlign: "center",
  },
  sectionTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 10,
  },
  tableHeader: {
    flexDirection: "row",
    backgroundColor: "#2b4675",
    paddingVertical: 8,
    borderRadius: 6,
    marginBottom: 4,
  },
  headerText: {
    flex: 1,
    fontWeight: "bold",
    color: "#fff",
    fontSize: 12,
    textAlign: "center",
  },
  tableRow: {
    flexDirection: "row",
    paddingVertical: 8,
    paddingHorizontal: 4,
    borderRadius: 6,
    marginBottom: 4,
  },
  rowText: {
    flex: 1,
    color: "#333",
    textAlign: "center",
    fontSize: 13,
  },
  button: {
    backgroundColor: "#2b4675",
    padding: 14,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 25,
  },
  buttonText: { color: "#fff", fontSize: 16, fontWeight: "bold" },
});
