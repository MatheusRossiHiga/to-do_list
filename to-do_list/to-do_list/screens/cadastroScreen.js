import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { styles } from '../src/styles/styles';

export default function CadastroScreen(props) {
  const [texto, setTexto] = useState('');

  async function salvarTarefa() {
    if (texto == '') {
      Alert.alert('Atenção', 'Digite uma tarefa!');
      return;
    }

    await AsyncStorage.setItem(texto, 'pendente');

    setTexto('');
    Alert.alert('Sucesso', 'Tarefa salva!');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>To-Do List</Text>
      <TextInput
        style={styles.input}
        placeholder="Tarefa"
        value={texto}
        onChangeText={setTexto}
      />

      <TouchableOpacity style={styles.botao} onPress={salvarTarefa}>
        <Text style={styles.textoBotao}>Salvar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botaoSecundario} onPress={props.irParaLista}>
        <Text style={styles.textoBotao}>Ver Tarefas</Text>
      </TouchableOpacity>
    </View>
  );
}