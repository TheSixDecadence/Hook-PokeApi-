import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';


export function Card({ data = null, navigation }) {

    function handleClick() {
        navigation.navigate("Details", { name: data?.url });
    }

    return (
        <TouchableOpacity style={styles.container} onPress={handleClick}>
            <Text style={styles.text}>{data.name}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FEBD32",
        height: 100,
        width: 100,
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        flexDirection: 'column',
        display: 'flex',
        alignSelf: 'center'
    },
    text: {
        color: "black",
        fontSize: 16,
        fontWeight: "bold",
        textAlign: 'center',
    },
});
