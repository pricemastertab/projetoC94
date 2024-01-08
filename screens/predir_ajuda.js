import React, { useState } from "react";
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { doc, setDoc } from "firebase/firestore";

export default function AjudaScreen() {
  const navigation = useNavigation();
  const [nome, setNome] = useState("");
  const [mensagem, setMensagem] = useState("");

  const handleChamarAjuda = async () => {
    if (!nome || !mensagem) {
      Alert.alert("Preencha todos os campos", "Por favor, preencha todos os campos antes de chamar ajuda.");
      return;
    }
    await setDoc(doc(db, "pessoas", "nome"), {
      pessoa: nome,
      ajuda: mensagem,
    });

    // Lógica para chamar ajuda aqui

    // Exemplo: Enviar uma notificação ou fazer uma chamada para a pessoa do escritório

    Alert.alert("Ajuda Chamada", `Ajuda solicitada por ${nome}. Mensagem: ${mensagem}`);

    // Resetando os campos após chamar ajuda (opcional)
    setNome("");
    setMensagem("");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textContainer}>Pedir Ajuda</Text>
      <TextInput
        placeholder="Seu Nome"
        style={styles.input}
        value={nome}
        onChangeText={(text) => setNome(text)}
      />
      <TextInput
        placeholder="Mensagem de Ajuda"
        style={[styles.input, { height: 100 }]}
        multiline
        value={mensagem}
        onChangeText={(text) => setMensagem(text)}
      />
      <TouchableOpacity style={styles.button} onPress={handleChamarAjuda}>
        <Text style={styles.buttonText}>Pedir Ajuda</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.goBack} onPress={() => navigation.goBack()}>
        <Text style={styles.goBackText}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
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
    width: 300,
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
