// HomeScreen.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem vindo a Home</Text>
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
    backgroundColor: 'pink',
    borderRadius: 20,
    marginTop: 20,
  },
  buttonText: {
    fontWeight: 'bold',
    color: 'white',
  },
});

export default HomeScreen;


// import React from 'react';
// import { View, Text, FlatList } from 'react-native';
// import { styles } from '../assets/styles';
// import { nomes } from '../constants/nomes';
// import NomeItem from '../components/NomeItem';

// const HomeScreen: React.FC = () => {
//     return (
//         <View style={styles.container}>
//             <Text style={styles.header}>Lista de Nomes</Text>
//             <FlatList
//                 data={nomes}
//                 keyExtractor={(item, index) => index.toString()}
//                 renderItem={({item}) => <NomeItem nome={item} />}
//                 />
//         </View>
//     );
// };

// export default HomeScreen;