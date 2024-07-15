import { TextInput, View, StyleSheet } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';

function StartGameScreen() {
    return (
        <View style={styles.inputContainer}>
            <TextInput />
            <PrimaryButton>Reset</PrimaryButton>
            <PrimaryButton>Confirm</PrimaryButton>
        </View>
    )
    
}

const styles = StyleSheet.create({
    inputContainer: {
        
        marginTop: 100,
        padding: 16,
        backgroundColor: '#72063c',
    }
});

export default StartGameScreen;
