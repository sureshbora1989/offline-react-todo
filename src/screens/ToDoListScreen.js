import React from "react";
import {
  View,
  Text,
  FlatList,
  TouchableHighlight,
  Button,
  StyleSheet
} from "react-native";
import useTodo from "../hooks/useTodo";

const ToDoListScreen = () => {
  const [todoList, addTodDoList, resetToDoList] = useTodo();

  const renderToDoItem = () => {
    return (
      <View>
        <TouchableHighlight
          onPress={() => {
            resetToDoList();
          }}
        >
          <Text> To do item</Text>
        </TouchableHighlight>
      </View>
    );
  };

  return (
    <View style={styles.conatiner}>
      <Text> Hello User </Text>
      <FlatList
        style={styles.toDoList}
        data={todoList}
        renderItem={renderToDoItem}
        keyExtractor={(item, index) => index}
      />
      <View style={styles.addTodo}>
        <Button
          title="Add Item"
          onPress={() => {
            const toDo = {
              value: "This is dfd dod"
            };
            addTodDoList(toDo);
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
    bottom: 0
  }
});

export default ToDoListScreen;
