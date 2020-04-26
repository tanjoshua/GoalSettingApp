import React, { useState } from 'react'
import { View, Text, StyleSheet, Button, TextInput, Modal } from 'react-native';

const GoalInputs = props => {
  const [enteredGoal, setEnteredGoal] = useState('');
  const goalInputHandler = enteredText => {
    setEnteredGoal(enteredText);
  };
  const addGoalHandler = () => {
    props.onAdd(enteredGoal);
    setEnteredGoal('');
  }
  const cancelGoalHandler = () => {
    props.onCancel()
    setEnteredGoal('');
  }

  return (
    <Modal visible={props.visible} animationType="fade">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Goal"
          style={styles.input}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <View style={styles.buttons}>
          <View style={styles.singleButton}>
            <Button title="ADD" onPress={addGoalHandler} />
          </View>
          <View style={styles.singleButton}>
            <Button title="CANCEL" color='red' onPress={cancelGoalHandler} />
          </View>
        </View>
      </View>
    </Modal>)
}

export default GoalInputs

const styles = StyleSheet.create(
  {
    inputContainer: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    },
    input: {
      width: '80%',
      borderColor: 'black',
      borderWidth: 1,
      padding: 10,
      marginBottom: 15
    },
    buttons: {
      width: '50%',
      flexDirection: 'row',
      justifyContent: 'space-around'
    },
    singleButton: {
      width: '40%'
    }
  })