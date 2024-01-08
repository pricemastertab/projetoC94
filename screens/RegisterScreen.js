import React, { useState } from "react";
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function RegisterScreen() {
  const navigation = useNavigation();
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [idade, setIdade] = useState("");
  const [senha, setSenha] = useState("");

  const telaLogin = () => {
    navigation.navigate('login');
  };

  const handleRegistro = () => {
    if (!nome || !email || !idade || !senha) {
      Alert.alert("Preencha todos os campos");
      return;
    } else if (!nome && !email && !idade && !senha) {
      Alert.alert('Preencha todos os campos')
    } else {
        navigation.navigate('ajuda')
    }
    if ('@gmail.com' in email){
      navigation.navigate('ajuda')
    } else {
      Alert.alert('erro no Email, colocar o @gmail.com')
    }

    // Lógica de registro aqui

    // Resetando os campos após o registro (opcional)
    setNome("");
    setEmail("");
    setIdade("");
    setSenha("");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textContainer}>Registro</Text>
      <TextInput
        placeholder="Nome"
        style={styles.input}
        value={nome}
        onChangeText={(text) => setNome(text)}
      />
      <TextInput
        placeholder="E-mail"
        style={styles.input}
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        placeholder="Idade"
        style={styles.input}
        keyboardType="numeric"
        value={idade}
        onChangeText={(text) => setIdade(text)}
      />
      <TextInput
        placeholder="Senha"
        style={styles.input}
        secureTextEntry={true}
        value={senha}
        onChangeText={(text) => setSenha(text)}
      />
      <TouchableOpacity style={styles.button} onPress={handleRegistro}>
        <Text style={styles.buttonText}>Registrar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.goBack} onPress={telaLogin}>
        <Text style={styles.goBackText}>Voltar para Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    fontSize: 36,
    marginBottom: 20,
  },
  input: {
    borderWidth: 2,
    borderRadius: 10,
    fontSize: 20,
    padding: 10,
    width: 250,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#5E8FEB',
    padding: 15,
    borderRadius: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
  },
  goBack: {
    marginTop: 20,
  },
  goBackText: {
    color: '#5E8FEB',
    fontSize: 18,
  },
});
