import {View, TextInput, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import { styles } from './styles';

export function Input(){
    return (
        <View style={styles.container}>
            <TextInput 
                style={styles.input}
                placeholder='Adicione uma nova tarefa'
                placeholderTextColor='#808080'
                selectionColor='#9747FF'
            />
            <TouchableOpacity style={styles.button}>
                <Icon name='plus-circle'
                    style={styles.icon}
                />
            </TouchableOpacity>
        </View>
    )
}