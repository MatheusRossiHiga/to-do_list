import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { styles } from '../src/styles/styles';

export default function InfoScreen(props) {
  const [tarefas, setTarefas] = useState([]);

  useEffect(() => {
    carregarTarefas();
  }, []);

  async function carregarTarefas() {

    const chaves = await AsyncStorage.getAllKeys();

    const lista = [];

    for (let i = 0; i < chaves.length; i++) {
      const valor = await AsyncStorage.getItem(chaves[i]);

      if (valor == 'pendente' || valor == 'feito') {
        lista.push({ texto: chaves[i], feito: valor == 'feito' });
      }
    }

    setTarefas(lista);
  }

  async function marcarTarefa(texto, feito) {
    if (feito == true) {
      await AsyncStorage.setItem(texto, 'pendente');
    } else {
      await AsyncStorage.setItem(texto, 'feito');
    }

    carregarTarefas();
  }

  async function excluirTarefa(texto) {
    await AsyncStorage.removeItem(texto);
    carregarTarefas();
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Tarefas</Text>

      <Text style={styles.contador}>{tarefas.length} tarefas</Text>

      <FlatList
        data={tarefas}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <TouchableOpacity
              style={styles.areaTexto}
              onPress={() => marcarTarefa(item.texto, item.feito)}
            >
              <Text style={item.feito ? styles.textoFeito : styles.textoItem}>
                {item.texto}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => excluirTarefa(item.texto)}>
              <Text style={styles.excluir}>Excluir</Text>
            </TouchableOpacity>
          </View>
        )}
      />

      <TouchableOpacity style={styles.botao} onPress={props.voltar}>
        <Text style={styles.textoBotao}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}