import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 50,
    backgroundColor: '#fff8f0',
  },
  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#2e7d32',
  },
  input: {
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#66bb6a',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    marginBottom: 15,
  },
  botao: {
    backgroundColor: '#f57c00',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 10,
  },
  botaoSecundario: {
    backgroundColor: '#2e7d32',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  textoBotao: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    borderLeftWidth: 6,
    borderLeftColor: '#66bb6a',
  },
  areaTexto: {
    flex: 1,
  },
  textoItem: {
    fontSize: 16,
    color: '#333',
  },
  textoFeito: {
    fontSize: 16,
    textDecorationLine: 'line-through',
    color: '#2e7d32',
  },
  excluir: {
    color: '#e65100',
    fontWeight: 'bold',
  },
  contador: {
  textAlign: 'center',
  color: '#f57c00',
  marginBottom: 15,
},
});