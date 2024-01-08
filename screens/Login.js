import React from "react";
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

export default function LoginScreen() {
  const [nome, setNome] = useState("");
  const [senha, setSenha] = useState("");

  let navigation = useNavigation();
  const telaRegister = () => {
    navigation.navigate('registrar')
  }

  const Entrar = () => {
    if (nome && senha){
        navigation.navigate('ajuda')
    } else if (nome || senha) {
        alert('Prencha todos os campos')
    } else {
        alert('preencha todos os campos')
    }
  } 
  return (
    <View style={styles.container}>
      <Text style={styles.textContainer}>Login</Text>
      <TextInput placeholder="Nome" style={styles.input} onChangeText={(text) => setNome(text)}/>
      <TextInput placeholder="Senha" style={styles.input} secureTextEntry={true} onChangeText={(text) => setSenha(text)}/>
      <TouchableOpacity style={styles.button} onPress={Entrar}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.createAccount} onPress={telaRegister}>
        <Text style={styles.createAccountText}>Criar conta</Text>
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
  createAccount: {
    marginTop: 20,
  },
  createAccountText: {
    color: '#5E8FEB',
    fontSize: 18,
  },
});
