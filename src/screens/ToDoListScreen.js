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

const ToDoListScreen = ({ navigation }) => {
  const [todoList, addTodDoList, resetToDoList] = useTodo();

  const RenderNoItemView = () => {
    return (
      <View style={styles.renderNoItemFound}>
        <Text> + Add item using Add button</Text>
      </View>
    );
  };

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
      {todoList.length <= 0 ? (
        <RenderNoItemView />
      ) : (
        <FlatList
          style={styles.toDoList}
          data={todoList}
          renderItem={renderToDoItem}
          keyExtractor={(item, index) => index}
        />
      )}

      <View style={styles.addTodo}>
        <Button
          title="Add Item"
          onPress={() => {
            // const toDo = {
            //   value: "This is dfd dod"
            // };
            navigation.navigate("CreateToDo", { addItem: addTodDoList });
            //addTodDoList(toDo);
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
  },
  renderNoItemFound: {}
});

export default ToDoListScreen;
