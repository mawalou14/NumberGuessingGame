import { Pressable, StyleSheet, Text, View } from "react-native";
import Colors from "../constants/Colors";


function PrimaryButton({children, onPress}) {

    return (
        <View style={styles.butonOuterContainer}>
        <Pressable 
        onPress={onPress} 
        style={({pressed}) => pressed ? [styles.butonInnerContainer, styles.pressed] : styles.butonInnerContainer} 
        android_ripple={{color: Colors.primary600}}
        >
            <Text style={styles.buttonText}>{children}</Text>
        </Pressable>
        </View>
    );
}

export default PrimaryButton;

const styles = StyleSheet.create({
    butonOuterContainer: {
        borderRadius: 28,
        margin: 4,
        overflow: 'hidden'
    },

    butonInnerContainer: {
        backgroundColor: Colors.primary500,
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 8,
        shadowColor: Colors.black,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.25
    },

    buttonText: {
        color: Colors.white,
        textAlign: 'center',
    },

    pressed: {
        opacity: 0.75
    }
});