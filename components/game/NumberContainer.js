import { StyleSheet, Text, View } from "react-native";
import Colors from "../../constants/Colors";


function NumberContainer({ children }) {
    return (
        <View style={styles.container}>
            <Text style={styles.numberText}>{children}</Text>
        </View>
    );
}

export default NumberContainer;

const styles = StyleSheet.create({
    container: {
        borderWidth: 4,
        borderColor: Colors.accent500,
        padding: 24,
        margin: 25,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },

    numberText: {
        fontFamily: 'open-sans-bold',
        color: Colors.accent500,
        fontSize: 36,
        // fontWeight: 'bold',
    }
})