import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Platform,
  FlatList,
} from 'react-native';
import { Button } from '../components/Button';
import { SkillCard } from '../components/SkillCard';

export function Home() {
  const [newSkill, setNewSkill] = useState();
  const [mySkills, setMySkills] = useState([]);

  const handleNewAddSkill = () => {
    setMySkills(oldState => [...oldState, newSkill]);
    setNewSkill('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome, Chrystian 😄</Text>
      <TextInput
        style={styles.input}
        placeholder="New Skill"
        placeholderTextColor="#555"
        onChangeText={setNewSkill}
        value={newSkill}
      />
      <Button title="Add" onPress={handleNewAddSkill} />
      <Text style={[{ marginVertical: 30 }, styles.title]}>My Skills</Text>
      <FlatList
        data={mySkills}
        renderItem={({ item }) => (
          <SkillCard item={item} />
        )}
        keyExtractor={item => item}
      >
      </FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121015',
    paddingVertical: 70,
    paddingHorizontal: 30,
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#1f1e25',
    color: '#fff',
    fontSize: 18,
    padding: Platform.OS === 'ios' ? 15 : 10,
    marginTop: 30,
    borderRadius: 8,
  }
});
