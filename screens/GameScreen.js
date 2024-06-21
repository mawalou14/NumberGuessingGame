import { Alert, FlatList, StyleSheet, Text, View } from "react-native";
import Title from "../components/ui/Title";
import { useEffect, useState } from "react";
import { Ionicons } from '@expo/vector-icons';

import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/ButtonPrimary";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";
import GameLogItem from "../components/game/GameLogItem";

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
    const [guessRounds, setGuessRounds] = useState([initialGuess]);

    useEffect(() => {
        if(currentGuess === userNumber) {
            onGameOver(guessRounds.length);
        }
    }, [currentGuess, userNumber, onGameOver]);

    useEffect(() => {
        minBoundary = 1;
        maxBoundary = 100;
    }, []);

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
        setGuessRounds(previousGuessRounds => [newRndNumber, ...previousGuessRounds]);
    }

    const guessRoundListLength = guessRounds.length;

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
            <View style={styles.guessesContainer}>
                {/* {guessRounds.map(guessRound => <Text key={guessRound}>{guessRound}</Text>)} */}
                <FlatList 
                data={guessRounds}  
                renderItem={(itemData) => ( 
                    <GameLogItem 
                    roundNumber={guessRoundListLength - itemData.index} 
                    guess={itemData.item} 
                    />
    )}
                keyExtractor={(item) => item}
                />
            </View>
        </View>
    );
}

export default GameScreen;


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 12,
        alignItems: 'center',
    },

    buttonsContainer: {
        flexDirection: 'row',
        marginTop: 15
    },

    buttonContainer: {
        flex: 1
    },

    guessesContainer: {
        flex: 1,
        padding: 16
    }
});