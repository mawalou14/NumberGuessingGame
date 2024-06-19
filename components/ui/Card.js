import { StyleSheet, View } from "react-native";
import Colors from "../../constants/Colors";

function Card({ children }) {
    return <View style={styles.card} >{children}</View>
}

export default Card;

const styles = StyleSheet.create({
    card: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 36,
        marginHorizontal: 16,
        padding: 15,
        backgroundColor: Colors.primary800,
        borderRadius: 10,
        elevation: 15, // for android shadow
        shadowColor: Colors.black,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.25
    },
});