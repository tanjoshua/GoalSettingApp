import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [goals, setGoals] = useState([])

  const enterGoalHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    setGoals((currentGoals) => [...currentGoals, enteredGoal]);
  };

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course goal"
          style={styles.textInput}
          onChangeText={enterGoalHandler}
          value={enteredGoal}
        />
        <Button title="Add"
          onPress={addGoalHandler}
        />
      </View>
      <FlatList style={styles.goalList}
        data={goals}
        renderItem={itemData => {
          <View style={styles.listItem}>
            <Text>{itemData.item}</Text>
          </View>
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },

  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  textInput: {
    width: '80%',
    borderBottomColor: 'black',
    borderBottomWidth: 1
  },

  goalList: {

  },

  listItem: {
    padding: 2.5,
    marginVertical: 5,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 0.5
  }
});