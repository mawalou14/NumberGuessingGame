import { Alert, StyleSheet, View } from "react-native";
import Title from "../components/ui/Title";
import { useEffect, useState } from "react";
import { Ionicons } from '@expo/vector-icons';

import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/ButtonPrimary";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";

function generateRandomBetween(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;
    if(rndNum === exclude) {
        return generateRandomBetween(min, max, exclude);
    } else {
        return rndNum;
    }
}

let minBoundary = 1;
let maxBoundary = 100;


function GameScreen({ userNumber, onGameOver }) {
    const initialGuess = generateRandomBetween(1, 100, userNumber);
    const [currentGuess, setCurrentGuest] = useState(initialGuess);

    useEffect(() => {
        if(currentGuess === userNumber) {
            onGameOver();
        }
    }, [currentGuess, userNumber, onGameOver]);

    function nexGuessHandler(direction) {
        if(
            (direction === 'lower' && currentGuess < userNumber ) || 
            (direction === 'greater' && currentGuess > userNumber) ) {
                Alert.alert("Don't lie!", 'You Know this is wrong...',
                    [{text: 'Sorry', style: 'cancel'}]
                )
                return;
        } 

        if(direction === 'lower') {
            maxBoundary = currentGuess;
        } else {
            minBoundary = currentGuess + 1;
        }
        const newRndNumber = generateRandomBetween(minBoundary, maxBoundary, currentGuess);
        setCurrentGuest(newRndNumber);
    }

    return (
        <View style={styles.screen}>
            <Title>Oponent's Guess</Title>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card>
            <InstructionText>Higher or lower</InstructionText>
                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonContainer}>
                <PrimaryButton onPress={nexGuessHandler.bind(this, 'lower')}>
                <Ionicons name="remove-sharp" size={22} color="white" />
                    </PrimaryButton>
                    </View>
                    <View style={styles.buttonContainer}>
                <PrimaryButton onPress={nexGuessHandler.bind(this, 'greater')}>
                <Ionicons name="add-sharp" size={22} color="white" />
                    </PrimaryButton>
                    </View>
                </View>
            </Card>
        </View>
    );
}

export default GameScreen;


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 12
    },

    buttonsContainer: {
        flexDirection: 'row',
        marginTop: 15
    },

    buttonContainer: {
        flex: 1
    },
});