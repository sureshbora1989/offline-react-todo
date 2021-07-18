import React from "react";
import { View, StyleSheet } from "react-native";
import { CreateToDoScreen, ToDoListScreen } from "../src/screens/index";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Stack.Navigator>
          <Stack.Screen
            name="ToDoList"
            options={{ headerShown: false }}
            component={ToDoListScreen}
          />
          <Stack.Screen
            name="CreateToDo"
            options={{ headerShown: false }}
            component={CreateToDoScreen}
          />
        </Stack.Navigator>
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%"
  }
});
export default App;
