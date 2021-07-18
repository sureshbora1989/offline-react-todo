import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const CreateToDoScreen = ({ route, navigation }) => {
  const { addItem } = route.params;

  return (
    <View style={styles.conatiner}>
      <Text> This is creat to do </Text>
      <View style={styles.addTodo}>
        <Button
          title="Create To Do"
          onPress={() => {
            const toDo = {
              value: "This is dfd dod"
            };

            addItem(toDo);
            navigation.goBack();
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    margin: 10
  },
  toDoList: {
    marginTop: 10,
    marginBottom: 10
  },
  addTodo: {
    position: "absolute",
    right: 0,
    left: 0,
    bottom: 0
  },
  renderNoItemFound: {}
});

export default CreateToDoScreen;
