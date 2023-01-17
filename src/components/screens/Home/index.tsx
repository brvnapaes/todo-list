import { View } from 'react-native';
import { Logo } from '../../Logo';
import { Input } from '../../Input';
import { ToDos } from '../../ToDos';
import { styles } from './styles';

export function Home(){
    return(
        <View style={styles.container}>
            <Logo />
            <Input />
            <ToDos />
        </View>
    )
}