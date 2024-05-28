import React from 'react';
import { Touchable } from 'react-native';
import { TouchableOpacity, Text, StyleSheet} from 'react-native-gesture-handler';

const BotaoPrProps = ({label, corFundo, onPress}) => {
    const botaoStyle = {
        backgroundColor: corFundo,
        padding: 10,
        borderRadius: 5
    };
    return(
        <TouchableOpacity onPress={onPress} style={botaoStyle}> 
            <Text>{label}</Text>
        </TouchableOpacity>
    );

}; 

export default BotaoPrProps;