import { Text, View } from 'react-native';

import Icon from 'react-native-vector-icons/Entypo';

import { styles } from './styles';

export function Logo(){
    return(
        <View style={styles.container}>
            <View style={styles.title}>
                <Icon 
                    name='list'
                    style={styles.icon}
                />
                <Text style={styles.titleTo}>to</Text>
                <Text style={styles.titleDo}>do</Text>
            </View>
        </View>
    )
}