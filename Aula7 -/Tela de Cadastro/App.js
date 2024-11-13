import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const App = () => {
  // Estados para armazenar os valores dos campos
  const [nome, setNome] = useState('');
  const [endereco, setEndereco] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');

  // Função que é chamada quando o botão "Cadastrar" é pressionado
  const handleCadastrar = () => {
    alert(`Nome: ${nome}\nEndereço: ${endereco}\nEmail: ${email}\nTelefone: ${telefone}`);
  };

  // Função para limpar os campos
  const handleLimpar = () => {
    setNome('');
    setEndereco('');
    setEmail('');
    setTelefone('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tela de Cadastro</Text>

      {/* Campo Nome */}
      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={nome}
        onChangeText={setNome} // Atualiza o estado do nome
      />

      {/* Campo Endereço */}
      <TextInput
        style={styles.input}
        placeholder="Endereço"
        value={endereco}
        onChangeText={setEndereco} // Atualiza o estado do endereço
      />

      {/* Campo Email */}
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail} // Atualiza o estado do email
        keyboardType="email-address" // Define o teclado para email
      />

      {/* Campo Telefone */}
      <TextInput
        style={styles.input}
        placeholder="Telefone"
        value={telefone}
        onChangeText={setTelefone} // Atualiza o estado do telefone
        keyboardType="phone-pad" // Define o teclado para telefone
      />

      {/* Botões Cadastrar e Limpar */}
      <View style={styles.buttonContainer}>
        <Button title="Limpar" onPress={handleLimpar} color="red" /> 
      </View>
      <View>
            <Button title="Cadastrar" onPress={handleCadastrar} />
      </View>
    </View>
  );
};

// Estilos para a tela
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    width: '100%',
    borderRadius: 5,
  },
  buttonContainer: {
    marginTop: 20,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10
  },
});

export default App;
