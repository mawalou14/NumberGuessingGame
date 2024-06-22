import { StyleSheet, View, useWindowDimensions } from "react-native";
import Colors from "../../constants/Colors";

function Card({ children }) {
    const { height} = useWindowDimensions();

    const marginTopDistance = height < 380 ? 5 : 36;

    return <View style={[styles.card, {marginTop: marginTopDistance}]} >{children}</View>
}

export default Card;


const styles = StyleSheet.create({
    card: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 36,
        marginHorizontal: 16,
        padding: 5,
        backgroundColor: Colors.primary800,
        borderRadius: 10,
        elevation: 15,
        shadowColor: Colors.black,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.25
    },
});