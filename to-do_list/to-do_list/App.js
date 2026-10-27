import React, { useState } from 'react';
import CadastroScreen from './screens/cadastroScreen';
import InfoScreen from './screens/infoScreen';

export default function App() {
  const [tela, setTela] = useState('cadastro');

  if (tela === 'cadastro') {
    return <CadastroScreen irParaLista={() => setTela('info')} />;
  }
  return <InfoScreen voltar={() => setTela('cadastro')} />;
}