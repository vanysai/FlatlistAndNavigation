import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const ListaNomesScreen = () => {
  const nomes = ["Jaíza Freire", "Maria Eduarda", "Santiago Cardoso"];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Nomes</Text>
      <FlatList
        data={nomes}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Text style={styles.item}>{item}</Text>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f7eee9',
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginVertical: 20,
  },
  item: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default ListaNomesScreen;
