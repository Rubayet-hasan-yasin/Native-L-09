import { StyleSheet, Text, View } from "react-native";

const Home = () => {
    return (
        <View>
            <Text>Home</Text>
        </View>
    );
};

const styles=StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    smallText: {
        color: "#000000"
    }
})

export default Home;