import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export function Cadastro({ navigation }) {
  const [nome, setNome] = React.useState('');
  const [cpf, setCpf] = React.useState('');
  const [dataNasc, setDataNasc] = React.useState('');
  const [endereco, setEndereco] = React.useState('');
  const [idade, setIdade] = React.useState('');
  const [pagamento, setPagamento] = React.useState('');
  const [valor, setValor] = React.useState('');

  const handleCadastro = () => {

    console.log('Nome:', nome);
    console.log('CPF:', cpf);
    console.log('Data de Nascimento:', dataNasc);
    console.log('Endereço:', endereco);
    console.log('Idade:', idade);
    console.log('Pagamento:', pagamento);
    console.log('Valor:', valor);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro</Text>

      <TextInput
        style={styles.input}
        value={nome}
        onChangeText={setNome}
        placeholder="Nome completo"
      />
      <TextInput
        style={styles.input}
        value={cpf}
        onChangeText={setCpf}
        placeholder="CPF"
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        value={dataNasc}
        onChangeText={setDataNasc}
        placeholder="Data de Nascimento"
      />
      <TextInput
        style={styles.input}
        value={endereco}
        onChangeText={setEndereco}
        placeholder="Endereço"
      />
      <TextInput
        style={styles.input}
        value={idade}
        onChangeText={setIdade}
        placeholder="Idade"
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        value={pagamento}
        onChangeText={setPagamento}
        placeholder="Forma de Pagamento"
      />
      <TextInput
        style={styles.input}
        value={valor}
        onChangeText={setValor}
        placeholder="Valor"
        keyboardType="numeric"
      />

      <TouchableOpacity style={styles.button} onPress={handleCadastro}>
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7eee9',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: 250,
    height: 40,
    marginBottom: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'pink',
    fontWeight: '450',
    backgroundColor: '#f1e8dc',
    paddingHorizontal: 10,
  },
  button: {
    width: 150,
    height: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'pink',
    borderRadius: 20,
    marginTop: 20,
  },
  buttonText: {
    fontWeight: 'bold',
    color: 'white',
  },
});
