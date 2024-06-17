import { StyleSheet, Text, View } from "react-native";
import Title from "../components/ui/Title";
import { useState } from "react";

function generateRandomBetween(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;
    if(rndNum === exclude) {
        return generateRandomBetween(min, max, exclude);
    } else {
        return rndNum;
    }
}


function GameScreen({ userNumber }) {
    const initialGuess = generateRandomBetween(1, 100, userNumber);
    const [currentGuess, setCurrentGuest] = useState(initialGuess);


    return (
        <View style={styles.screen}>
            <Title>Oponent's Guess</Title>
            <Text></Text>
            <View>
                <Text>Hihger or lowe</Text>
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
});