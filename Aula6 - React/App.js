import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

// Função principal do aplicativo
const App = () => {
  // Estados para armazenar o nome de usuário e a senha
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Função que é chamada quando o botão de login é pressionado
  const handleLogin = () => {
    // Aqui, você poderia adicionar lógica para autenticar o usuário
    alert(`Usuário: ${username}\nSenha: ${password}`); // Exibe um alerta
  };

  return (
    // Contâiner principal que centraliza o conteúdo
    <View style={styles.container}>
      <Text style={styles.title}>Tela de configuração</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome do usuário"
        value={username}
        onChangeText={setUsername} // Atualiza o estado do nome de usuário
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry={true} // Esconde o texto digitado
        value={password}
        onChangeText={setPassword} // Atualiza o estado da senha
      />
      <Button title="Entrar" onPress={handleLogin} /> {/* Botão de login */}
    </View>
  );
};

    // Definição de estilos
    const styles = StyleSheet.create({
      container: {
        flex: 1, // Ocupar toda a altura da tela
        justifyContent: 'center', // Centraliza os itens verticalmente
        alignItems: 'center', // Centraliza os itens horizontalmente
        backgroundColor: '#f5f5f5', // Cor de fundo cinza claro
      },
      title: {
        fontSize: 24, // Tamanho da fonte
        fontWeight: 'bold', // Texto em negrito
        marginBottom: 20, // Espaço abaixo do título
      },
      input: {
        height: 40, // Altura do campo de entrada
        borderColor: '#ccc', // Cor da borda do campo de entrada
        borderWidth: 1, // Largura da borda
        marginBottom: 15, // Espaçamento interno do campo de entrada
        paddingHorizontal: 10, // Espaçamento interno do campo de entrada
        width: '80%', // Largura do campo de entrada
      },
    });

export default App;
