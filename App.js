import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  FlatList
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import GoalItem from "./components/GoalItem";
import GoalInputs from "./components/GoalInputs";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [addModal, setAddModal] = useState(false)

  const addGoalHandler = (enteredGoal) => {
    setCourseGoals(currentGoals =>
      currentGoals.concat({ id: Math.random().toString(), value: enteredGoal })
    );
    setAddModal(false);
  };

  const deleteGoalHandler = (goalId) => {
    setCourseGoals(currentGoals => currentGoals.filter(x => x.id !== goalId))
  }

  const addModalHandler = () => {
    setAddModal(true);
  }

  const cancelGoalHandler = () => {
    setAddModal(false);
  }

  return (
    <View style={styles.screen}>
      <Ionicons style={styles.icon} name='ios-add-circle-outline' size={32} onPress={addModalHandler} />
      <GoalInputs visible={addModal} onAdd={addGoalHandler} onCancel={cancelGoalHandler} />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={itemData => <GoalItem toDeleteId={itemData.item.id}
          onDelete={deleteGoalHandler}>{itemData.item.value}</GoalItem>}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
  icon: {
    alignSelf: 'center',
    padding: 20
  }
});
