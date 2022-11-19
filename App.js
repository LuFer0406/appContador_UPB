import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function App() {

  const [contador, setContador] = useState(0)
  
  const sumar = () => {
    setContador(contador + 1);
  }

  const restar = () => {
    setContador(contador - 1);
  }

  useEffect(() => {
    if (contador >= 10) {
      Alert.alert("Alerta", "No puedes seguir sumando...")
    }
  }, [contador])
  return (
    <View style={styles.container}>
      <Text style = {styles.title}>Contador: {contador}</Text>
      
      <TouchableOpacity style = {{...styles.button, right: 25, backgroundColor: "#bbf7d0"}} activeOpacity = {0.7} onPress = {() => sumar()} disabled = {contador >= 10}>
        <Text style = {{...styles.nombres}}>
        <Ionicons name="add-outline" size={22} color="green" />
        Sumar
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style = {{...styles.button, left: 25, backgroundColor: "#fecdd3"}} activeOpacity = {0.7}  onPress = {() => restar()}>
        <Text style = {{...styles.nombres}}>
        <Ionicons name="remove-outline" size={22} color="red" />
        Restar
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 30
  },
  button: {
    alignItems: "center",
    borderRadius: 30,
    padding: 10,
    position: "absolute",
    bottom: 25,
  },
  nombres: {
    fontSize: 18,
    alignItems: "center",
    justifyContent: "center",
  },
});
