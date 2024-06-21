import { StyleSheet, Text } from "react-native";
import Colors from "../../constants/Colors";

function Title({ children }) {
    return <Text style={styles.title}>{children}</Text>
}

export default Title;

const styles = StyleSheet.create({

    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 24,
        // fontWeight: 'bold',
        color: Colors.white,
        textAlign: 'center',
        padding: 12,
        borderWidth: 2,
        borderColor: Colors.white,
        maxWidth: '80%',
        width: 300
    }

});