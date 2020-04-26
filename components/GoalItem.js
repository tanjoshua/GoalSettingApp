import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const GoalItem = props => {
  return (
    <TouchableOpacity onPress={() => props.onDelete(props.toDeleteId)}>
      <View style={styles.listItem}>
        <Text>{props.children}</Text>
      </View>
    </TouchableOpacity>)
};

export default GoalItem

const styles = StyleSheet.create(
  {
    listItem: {
      padding: 10,
      marginVertical: 10,
      backgroundColor: '#f2f2f2',
      borderColor: '#ccc',
      borderWidth: 1,
      borderRadius: 7
    }
  }
)