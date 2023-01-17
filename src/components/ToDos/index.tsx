import { View, Text, Image } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/Ionicons';

import { styles } from './styles';

export function ToDos(){
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.created}>
                    <Text style={styles.createdText}>
                        Criadas
                    </Text>
                    <Text style={styles.number}>
                        0
                    </Text>
                </View>
                <View style={styles.done}>
                    <Text style={styles.doneText}>
                        Concluídas
                    </Text>
                    <Text style={styles.number}>
                        1
                    </Text>
                </View>
            </View>
            <View style={styles.list}>
                <View style={styles.card}>
                    <Icon 
                        name='circle-o'
                        style={styles.unchecked}
                    />
                    <Text style={styles.cardText}>
                        Integer urna interdum massa libero auctor neque turpis turpis semper.
                    </Text>
                    <Icon2
                        name='trash-bin'
                        style={styles.trashBin}
                    />
                </View>
                <View style={styles.card}>
                    <Icon 
                        name='check-circle'
                        style={styles.checked}
                    />
                    <Text style={styles.cardTextCheked}>
                        Integer urna interdum massa libero auctor neque turpis turpis semper.
                    </Text>
                    <Icon2
                        name='trash-bin'
                        style={styles.trashBin}
                    />
                </View>

            </View>
        </View>
    )
}