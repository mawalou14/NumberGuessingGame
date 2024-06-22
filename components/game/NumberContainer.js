import { StyleSheet, Text, View, Dimensions, useWindowDimensions } from "react-native";
import Colors from "../../constants/Colors";


function NumberContainer({ children }) {
    const {width, height} = useWindowDimensions();

    const margin = height < 380 ? 10 : 24;
    const padding = height < 380 ? 10 : 24;
    const fontsize = height < 380 ? 26 : 36;

    return (
        <View style={[styles.container, {margin: margin, padding: padding}]}>
            <Text style={[styles.numberText, {fontSize: fontsize}]}>{children}</Text>
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