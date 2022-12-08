import { View, Text, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
const FleBoxDemo = () => {
  return (
    <View style={styles.container}>
      <Text>FleBoxDemo</Text>
      <StatusBar style="auto" />
      <View
        style={{
          padding: 50,
          width: "80%",
          height: 300,
          flexDirection: "row",
          justifyContent: "stretch",
          alignItems: "center",
        }}
      >
        <View
          style={{
            backgroundColor: "green",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text>1</Text>
        </View>
        <View
          style={{
            backgroundColor: "yellow",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text>2</Text>
        </View>
        <View
          style={{
            backgroundColor: "red",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text>3</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
  },
});
export default FleBoxDemo;
