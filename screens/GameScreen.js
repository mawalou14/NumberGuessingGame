import { StyleSheet, Text, View } from "react-native";
import Title from "../components/Title";


function GameScreen() {
    return (
        <View style={styles.screen}>
            <Title>Oponent's Guess</Title>
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