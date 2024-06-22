import { Alert, Dimensions, StyleSheet, TextInput, View, useWindowDimensions } from "react-native";
import PrimaryButton from "../components/ui/ButtonPrimary";
import Colors from "../constants/Colors";
import { useState } from "react";
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";

function StartGameScreen({ onPickNumber }) {
    const [enteredNumber, setEnteredNumber] = useState('');

    const {width, height} = useWindowDimensions();

    function numberInputHandler(enteredText) {
        setEnteredNumber(enteredText);
    }

    function resetInputHandler() {
        setEnteredNumber('');
    }

    function confirmInputHandler() {
        const choosenNumer = parseInt(enteredNumber);

        if(isNaN(choosenNumer) || choosenNumer <= 0 || choosenNumer > 99) {
            Alert.alert(
                'Invalid number', 
                'Number has to be a number between 1 and 99', 
                [{ text: 'Okay', style: 'destructive', onPress: resetInputHandler}]
            );
            return;
        }

        onPickNumber(choosenNumer);
    }

    const marginTopDistance = height < 380 ? 30 : 100;


    return (
        <View style={[styles.rootContainer, {marginTop: marginTopDistance}]}>
            <Title>Guess My Number</Title>
                <Card >
                    <InstructionText>Enter a number</InstructionText>
            <TextInput 
            style={styles.numberInput}
            maxLength={2}
            keyboardType="number-pad"
            autoCapitalize="none"
            autoCorrect={false}
            value={enteredNumber}
            onChangeText={numberInputHandler}
             />
             <View style={styles.buttonsContainer}>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
                </View>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
                </View>
             </View>
        </Card>
        </View>
    );
}

export default StartGameScreen;

const deviceHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        marginTop: deviceHeight < 380 ? 30 : 100,
        alignItems: 'center'
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
    },

    buttonsContainer: {
        flexDirection: 'row',
        marginTop: 15
    },

    buttonContainer: {
        flex: 1
    },
});