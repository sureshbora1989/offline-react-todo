import React from "react";
import { View, Text, FlatList, TouchableHighlight } from "react-native";
import useTodo from "../hooks/useTodo";

const ToDoListScreen = () => {
  const [todoList, addTodDoList, resetToDoList] = useTodo();

  const renderToDoItem = () => {
    return (
      <View>
        <TouchableHighlight
          onPress={() => {
            addTodDoList({});
          }}
        >
          <Text> To do item</Text>
        </TouchableHighlight>
      </View>
    );
  };

  return (
    <View>
      <Text> To do Screen </Text>
      <FlatList data={todoList} renderIem={renderToDoItem} />
    </View>
  );
};

export default ToDoListScreen;
