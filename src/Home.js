import { StatusBar } from "react-native";
import { StyleSheet, Text,View  } from "react-native";

export default function Home() {
  return (
    <View style={styles.container}>
      <Text>
        Welcome Home!
      </Text>
      <StatusBar style="auto"/>    
      </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    background:'#fff',
    alignItems:'center',
    justifyContent:'center'
  }
})