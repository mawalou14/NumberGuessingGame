import { Alert, StyleSheet, Text, View } from "react-native";
import Title from "../components/ui/Title";
import { useEffect, useState } from "react";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/ButtonPrimary";

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
            <View>
                <Text>Hihger or lowe</Text>
                <View style={styles.buttonsContainer}>
                <PrimaryButton onPress={nexGuessHandler.bind(this, 'lower')}>-</PrimaryButton>
                <PrimaryButton onPress={nexGuessHandler.bind(this, 'greater')}>+</PrimaryButton>
                </View>
            </View>
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
        justifyContent:'center',
        alignItems: 'center'
    },
});