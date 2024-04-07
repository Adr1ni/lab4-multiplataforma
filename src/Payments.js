import { StatusBar } from "react-native";
import { StyleSheet,Text,View } from "react-native";

export default function Setting() {
    return (
        <View style={styles.containerr}>
            <Text>Setup time!</Text>
            <StatusBar style="auto"/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
        alignItems:'center',
        justifyContent:'center'
    }
})