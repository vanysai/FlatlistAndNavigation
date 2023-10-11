import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useState } from 'react';
import { useNavigation } from "@react-navigation/native";


export function Cadastro(){

  const navigation = useNavigation();


  const [isVisible, setIsVisible] = useState(false);

  const [tecnico, setTecnico] = useState({
    nome: '',
    idade: '',
    nacionalidade: '',
    experiencia: '',
  });

  function handleInputChange(field, value) {
    setTecnico({
      ...tecnico,
      [field]: value,
    });
  }

  function Cadastro() {
    console.log(tecnico);
    setIsVisible(true)
  }

  function ListaNomes() {
    console.log(tecnico);
    navigation.navigate('list')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Preencha os dados do Técnico</Text>
      <br>
      </br>
      <Text style={styles.textInput}>Nome</Text>
      <TextInput
        style={styles.input}
        value={tecnico.nome}
        onChangeText={(text) => handleInputChange('nome', text)}
      />

      <Text style={styles.textInput}>Idade</Text>
      <TextInput
        style={styles.input}
        value={tecnico.idade}
        onChangeText={(text) => handleInputChange('idade', text)}
      />

      <Text style={styles.textInput}>Nacionalidade</Text>
      <TextInput
        style={styles.input}
        value={tecnico.nacionalidade}
        onChangeText={(text) => handleInputChange('nacionalidade', text)}
      />

      <Text style={styles.textInput}>Experiência em anos</Text>
      <TextInput
        style={styles.input}
        value={tecnico.experiencia}
        onChangeText={(text) => handleInputChange('experiencia', text)}
      />

{isVisible && (
<View style={styles.lista}>
<Text style={styles.inputValue}>Nome: {tecnico.nome}</Text>
<Text style={styles.inputValue}>Idade: {tecnico.idade}</Text>
<Text style={styles.inputValue}>Nacionalidade: {tecnico.nacionalidade}</Text>
<Text style={styles.inputValue}>Experiência em anos: {tecnico.experiencia}</Text>
</View>)}

    <TouchableOpacity style={styles.btn} onPress={Cadastro}>
        <Text style={styles.button}>Cadastrar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn}  onPress={() => navigation.navigate('ListaNomes')}>
        <Text style={styles.button}>Ver Lista</Text>
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
  text: {
    fontWeight: 'bold',
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
    borderColor: 'white',
    fontWeight: '450',
    backgroundColor: '#f1e8dc',
    paddingHorizontal: 10,
  },
  inputValue:{
    fontSize: 14,
    width: '60%',
    color: 'black',
    marginBottom: 20,
    marginTop: 20
  },
  button: {
    width: 150,
    height: 50,
    display: 'flex',
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
    borderRadius: 20,
    marginTop: 20,
    color: 'white'
  },
  buttonText: {
    fontWeight: 'bold',
    color: 'white',
  },
});