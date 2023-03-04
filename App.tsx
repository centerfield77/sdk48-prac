import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text>A</Text>
      </View>
      <View style={styles.box}>
        <Text>B</Text>
      </View>
      <View style={styles.box}>
        <Text>C</Text>
      </View>
      <View style={styles.box}>
        <Text>D</Text>
      </View>
      <View style={styles.box}>
        <Text>E</Text>
      </View>
      <View style={styles.box}>
        <Text>F</Text>
      </View>
      <View style={styles.box}>
        <Text>G</Text>
      </View>
      <View style={styles.box}>
        <Text>H</Text>
      </View>
      <View style={styles.box}>
        <Text>I</Text>
      </View>
      <View style={styles.box}>
        <Text>J</Text>
      </View>
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: "gray",
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
  },
  box: {
    backgroundColor: "white",
    width: 150,
    height: 150,
    justifyContent: "center",
    alignItems: "center",
  },
});
