import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export const Button = () => {
  return (
    <TouchableOpacity
      style={styles.button}
      activeOpacity={0.8}
      // onPress={handleNewAddSkil}
    >
      <Text style={styles.buttonText}>Add</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#a370f7',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 17,
  },
});
