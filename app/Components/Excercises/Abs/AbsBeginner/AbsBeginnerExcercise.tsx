import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Image } from 'expo-image';

const AbsBeginnerExercise = () => {
  return (

    <>
       <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.text_container}>🔥 Abs Beginner Workout</Text>

      <View style={styles.exercise_container}>
        <TouchableOpacity 
          style={styles.exercise_box}
          
          >
          <Image 
            source={require('../../../../assets/jumping_jack.gif')} 
            style={styles.gif} 
            contentFit="contain"
          />
          <Text style={styles.exercise_text}>Jumping Jacks</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.exercise_box}>
          <Text style={styles.emoji}>💪</Text>
          <Text style={styles.exercise_text}>Abdominal Crunches</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
    
    </>
    
  );
};

export default AbsBeginnerExercise;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#1C1C1E",
    padding: 20,
    alignItems: "center",
  },
  text_container: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 26,
    marginTop: 20,
    color: "#FF9500",
    letterSpacing: 1.5,
    textTransform: "uppercase",
  },
  exercise_container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginTop: 30,
  },
  exercise_box: {
    backgroundColor: "#2C2C2E",
    padding: 20,
    borderRadius: 15,
    width: 160,
    height: 200,
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
    elevation: 6,
    shadowColor: "rgba(255, 149, 0, 0.5)",
    shadowOffset: { width: 3, height: 5 },
    shadowOpacity: 0.4,
    shadowRadius: 8,
    borderWidth: 1,
    borderColor: "#FF9500",
  },
  exercise_text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFFFFF",
    textAlign: "center",
    textTransform: "uppercase",
    letterSpacing: 1.2,
    marginTop: 10,
  },
  emoji: {
    fontSize: 40,
  },
  gif: {
    width: 80,
    height: 80,
  },
});
