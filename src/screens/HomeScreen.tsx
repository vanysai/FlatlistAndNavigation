// HomeScreen.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/corinthiaaans.png')} style={styles.imagem}/>
      <Text style={styles.title}>Listagem de Jogadores</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('ListaNomes')}
      >
        <Text style={styles.buttonText}>Ir para Lista de Nomes</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Cadastro')}
      >
        <Text style={styles.buttonText}>Ir para Tela de Cadastro</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f7eee9'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    width: 200,
    height: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
    borderRadius: 20,
    marginTop: 20,
  },
  buttonText: {
    fontWeight: 'bold',
    color: 'white',
  },
  imagem:{
    width:1000,
    height:180,
    resizeMode:"contain",
    marginBottom:100
  }

});

export default HomeScreen;
