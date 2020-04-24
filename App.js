import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
  FlatList
} from 'react-native';
import GoalItem from "./components/GoalItem"
import GoalInputs from "./components/GoalInputs"

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);


  const addGoalHandler = (enteredGoal) => {
    setCourseGoals(currentGoals =>
      currentGoals.concat({ id: Math.random().toString(), value: enteredGoal })
    );
  };

  return (
    <View style={styles.screen}>
      <GoalInputs onAdd={addGoalHandler} />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={itemData => <GoalItem>{itemData.item.value}</GoalItem>}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  screen: {
    padding: 50
  }
});
