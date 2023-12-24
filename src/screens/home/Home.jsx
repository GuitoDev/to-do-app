import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons/faChevronRight";

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.blocoHome}>
        <Text style={styles.logo}>Anota ai</Text>
        <Text style={styles.slogan}>Anota ai pra não esquecer</Text>
        <TouchableOpacity
          style={{
            backgroundColor: "transparent",
            borderRadius: 5,
            marginTop: "8rem",
          }}
          onPress={() => navigation.navigate("NextScreen")}
        >
          <FontAwesomeIcon icon={faChevronRight} size={30} color="#ffff" />
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0D1F2D",
    alignItems: "center",
    justifyContent: "center",
  },
  blocoHome: {
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    color: "#AFFFFF",
    fontSize: 50,
    fontWeight: "bold",
  },
  slogan: {
    fontStyle: "italic",
    fontSize: 20,
    color: "#ffffff",
  },
});
