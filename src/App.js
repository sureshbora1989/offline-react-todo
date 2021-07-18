import React from "react";
import { View, StyleSheet } from "react-native";
import { ToDoListScreen } from "../src/screens/index";

function App() {
  return (
    <View style={styles.container}>
      <ToDoListScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%"
  }
});
export default App;
