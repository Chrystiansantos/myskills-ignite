import React from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity } from 'react-native';

export const SkillCard = ({ item }) => {
  return (
    <TouchableOpacity
      key={item}
      activeOpacity={0.8}
      style={styles.buttonSkill}
    >
      <Text style={styles.textSkill}>{item}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonSkill: {
    backgroundColor: '#1f1e25',
    padding: 15,
    borderRadius: 50,
    alignItems: 'center',
    marginVertical: 10,
  },
  textSkill: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },
})
