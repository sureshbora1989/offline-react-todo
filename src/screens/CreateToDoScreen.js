import React from "react";
import { View, Text, StyleSheet, Button, TextInput } from "react-native";
import { useState } from "react";

const CreateToDoScreen = ({ route, navigation }) => {
  const { addItem } = route.params;
  const [text, setText] = useState("");
  return (
    <View style={styles.conatiner}>
      <Text> Create to do </Text>
      <View style={styles.textAreaContainer}>
        <TextInput
          style={styles.textNotesMain}
          placeholder="Type here to translate!"
          onChangeText={(text) => setText(text)}
          defaultValue={text}
        />
      </View>
      <View style={styles.addTodo}>
        <Button
          title="Create To Do"
          onPress={() => {
            const toDo = {
              todoNotes: { text }
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
  textAreaContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  textNotesMain: {
    height: 100,
    margin: 20,
    padding: 20,
    textAlign: "center",
    width: "100%"
  },
  renderNoItemFound: {}
});

export default CreateToDoScreen;
