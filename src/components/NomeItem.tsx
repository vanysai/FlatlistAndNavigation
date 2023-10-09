import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../assets/styles';

interface NomeItemProps {
    nome: string
}

const NomeItem: React.FC<NomeItemProps> = ({nome}) => {
    return (
        <View style={styles.nomeContainer}>
            <Text style={styles.nome}>{nome}</Text>
        </View>
    );
};

export default NomeItem;