import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
  SafeAreaView,
  ImageBackground,
} from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Fondo con capa oscura */}
      <View style={styles.absoluteBackground}>
        <ImageBackground
          source={require("../FondoHome.jpeg")}
          style={styles.background}
          resizeMode="cover"
        >
          <View style={styles.overlay} />
        </ImageBackground>
      </View>

      {/* Contenido visible */}
      <ScrollView contentContainerStyle={styles.container}>
        {/* Navbar distribuida */}
        <View style={styles.navbar}>
          <TouchableOpacity onPress={() => navigation.navigate("Pacientes")}>
            <Text style={styles.navItem}>Pacientes</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Psicologos")}>
            <Text style={styles.navItem}>Psicólogos</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Citas")}>
            <Text style={styles.navItem}>Citas</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("HistorialCitasScreen")}>
            <Text style={styles.navItem}>Historial</Text>
          </TouchableOpacity>
        </View>

        {/* Logo */}
        <Image source={require("../logoUPQ.png")} style={styles.logo} />

        {/* Accesos rápidos */}
        <View style={styles.cardContainer}>
          <TouchableOpacity style={styles.card} onPress={() => navigation.navigate("Pacientes")}>
            <Text style={styles.cardText}>Crear Alumnos</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card} onPress={() => navigation.navigate("Psicologos")}>
            <Text style={styles.cardText}>Crear Psicólogos</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card} onPress={() => navigation.navigate("Citas")}>
            <Text style={styles.cardText}>Generar Citas</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate("HistorialCitasScreen")}
          >
            <Text style={styles.cardText}>Historial de Citas</Text>
          </TouchableOpacity>
        </View>

        {/* Consejos */}
        <View style={styles.tipsContainer}>
          <Text style={styles.tipsTitle}>Consejos del día</Text>
          <Text style={styles.tip}>✓ Establece metas semanales realistas.</Text>
          <Text style={styles.tip}>✓ No tengas miedo de pedir ayuda.</Text>
          <Text style={styles.tip}>✓ Organiza tu tiempo con un calendario.</Text>
        </View>

        {/* Botón cerrar sesión al final */}
        <TouchableOpacity style={styles.logoutButton} onPress={() => navigation.replace("Login")}>
          <Text style={styles.logoutText}>Cerrar Sesión</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#000",
  },
  absoluteBackground: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 0,
  },
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.3)",
  },
  container: {
    alignItems: "center",
    padding: 20,
    zIndex: 1,
  },
  navbar: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "#2b4675",
    paddingVertical: 12,
    width: "100%",
    borderRadius: 12,
    marginBottom: 25,
    elevation: 4,
  },
  navItem: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
    letterSpacing: 0.5,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  logo: {
    width: 280,
    height: 200,
    resizeMode: "contain",
    marginBottom: 30,
  },
  cardContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginBottom: 30,
  },
  card: {
    backgroundColor: "rgba(255,255,255,0.92)",
    width: 150,
    height: 100,
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 14,
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    borderWidth: 1,
    borderColor: "#2b4675",
  },
  cardText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#2b4675",
    textAlign: "center",
  },
  tipsContainer: {
    backgroundColor: "rgba(255,255,255,0.95)",
    borderRadius: 12,
    padding: 20,
    width: "100%",
    marginBottom: 20,
  },
  tipsTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#2b4675",
  },
  tip: {
    fontSize: 14,
    color: "#333",
    marginBottom: 6,
  },
  logoutButton: {
    marginTop: 10,
    backgroundColor: "#ff4d4d",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    elevation: 3,
  },
  logoutText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 14,
  },
});
