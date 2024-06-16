import { StyleSheet, Text, TextInput, View } from "react-native";
import PrimaryButton from "../components/ButtonPrimary";
import Colors from "../constants/Colors";

function StartGameScreen() {
    return (
        <View style={styles.inputContainer} >
            <TextInput 
            style={styles.numberInput}
            maxLength={2}
            keyboardType="number-pad"
            autoCapitalize="none"
            autoCorrect={false}
             />
                    <PrimaryButton>Reset</PrimaryButton>
                    <PrimaryButton>Confirm</PrimaryButton>
        </View>
    );
}

export default StartGameScreen;

const styles = StyleSheet.create({
    inputContainer: {
        marginTop: 100,
        marginHorizontal: 16,
        padding: 15,
        backgroundColor: Colors.primary500,
        borderRadius: 10,
        elevation: 15, // for android shadow
        shadowColor: Colors.black,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.25
    },

    numberInput: {
        height: 50,
        width: 50,
        fontSize: 32,
        borderBottomColor: Colors.accent500,
        borderBottomWidth: 2,
        color: Colors.accent500,
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center'
    }
});