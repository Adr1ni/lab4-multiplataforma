import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { Linking } from "react-native";

const SocialMedia = () => {
  const handleSocialLink = (social) => {
    switch (social) {
        case "instagram":
            Linking.openURL("https://github.com/Adr1ni");
            break;
        case "github":
            Linking.openURL("https://github.com/Adr1ni");
            break;
        case "twitter":
            Linking.openURL("https://github.com/Adr1ni");
            break;
        default:
            break;
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Connect with us:</Text>
      <View style={styles.socialContainer}>
        <TouchableOpacity
          style={styles.socialButton}
          onPress={() => handleSocialLink("instagram")}
        >
          <FontAwesome5 name="instagram" size={30} color="#405DE6" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.socialButton}
          onPress={() => handleSocialLink("github")}
        >
          <FontAwesome5 name="github" size={30} color="#4078c0" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.socialButton}
          onPress={() => handleSocialLink("twitter")}
        >
          <FontAwesome5 name="twitter" size={30} color="#1DA1F2" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    marginBottom: 10,
  },
  socialContainer: {
    flexDirection: "row",
  },
  socialButton: {
    marginHorizontal: 10,
  },
});

export default SocialMedia;
