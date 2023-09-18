import { Button, StyleSheet, Text, View } from "react-native";
import {NativeStackNavigationProp, NativeStackScreenProps} from '@react-navigation/native-stack';
import { RootStackParamList } from "../App";
import { useNavigation } from "@react-navigation/native";



type DetailsProps = NativeStackScreenProps<RootStackParamList,'Details'>

const Details = ({route}: DetailsProps) => {
    const {productId} = route.params;

    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()

    return (
        <View style={styles.container}>
            <Text>Details: {productId}</Text>

            <Button
            title="Go to home"
            onPress={()=> navigation.navigate("Home")}
            />
            <Button
            title="Go to home"
            // onPress={()=> navigation.navigate("Home")}
            onPress={()=> navigation.popToTop()}
            />
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

export default Details;