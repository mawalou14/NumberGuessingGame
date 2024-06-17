import { StyleSheet, Text, View } from "react-native";
import Colors from "../constants/Colors";


function GameScreen() {
    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Oponent's guess</Text>
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

    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: Colors.accent500,
        textAlign: 'center',
        paddingVertical: 12,
        borderWidth: 2,
        borderColor: Colors.accent500,
    }
});