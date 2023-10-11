import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from "@react-navigation/native";


const ListaNomesScreen = () => {
  const navigation = useNavigation();
  
  function voltar(){
    navigation.goBack()
  }

  const footballPlayers = [
    {
      name: "Cristiano Ronaldo",
      position: "Forward",
      age: 36,
    },
    {
      name: "Lionel Messi",
      position: "Attacking Midfielder",
      age: 34,
    },
    {
      name: "Neymar Jr.",
      position: "Forward",
      age: 29,
    },
    {
      name: "Kylian Mbappé",
      position: "Forward",
      age: 23,
    },
    {
      name: "Sergio Ramos",
      position: "Defender",
      age: 35,
    },
    {
      name: "Kevin De Bruyne",
      position: "Midfielder",
      age: 30,
    },
    {
      name: "Robert Lewandowski",
      position: "Forward",
      age: 32,
    },
    {
      name: "Virgil van Dijk",
      position: "Defender",
      age: 30,
    },
    {
      name: "Luka Modric",
      position: "Midfielder",
      age: 35,
    },
    {
      name: "Erling Haaland",
      position: "Forward",
      age: 21,
    },
  ];

  const renderItem = ({ item }) => (
    <View>
    <Text style={styles.text}>{item.name}</Text>
    <Text style={styles.text}>{item.position}</Text>
    <Text style={styles.text}>{item.age}</Text>
    </View>
  ) 
  return(
    <View style={styles.container}>
       <Text style={styles.title}>Lista de jogadores</Text>
      <FlatList 
      style={styles.list}
      data={footballPlayers}
      renderItem={renderItem}
      ></FlatList>
         <TouchableOpacity style={styles.btn} onPress={voltar}>
        <Text style={styles.btnTxt}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#FFFF',
      alignItems: 'center',
      justifyContent: 'center',
    },
    list:{
      marginTop: 0.3,
    },
    text:{
      color: "white",
      fontSize: 15,
      width: 190,
      padding: 9,
      backgroundColor: "red",
      borderRadius: 5,
      marginBottom: 10,
      textAlign: 'center'
    },
    title:{
      fontWeight:"bold",
      marginTop: "10%",
      marginBottom: "10%",
      fontSize: 20,
      color: "black"
    },
    btnTxt: {
      fontFamily: "Arial",
      color: "white",
    },
    btn:{
      color:"white",
      marginTop: 10,
      padding: 9,    
      width: 60,
      textAlign: "center",
      borderRadius: 10,
      backgroundColor: "red",
    }
});

export default ListaNomesScreen;