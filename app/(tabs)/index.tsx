import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Index = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text_container}>🏋️‍♂️ Home Workout</Text>

      <View style={styles.box_flex_container}>
        <View style={styles.box}>
          <Text style={styles.emoji}>💪</Text>
          <Text style={styles.box_text}>Abs Workout</Text>
        </View>

        <View style={styles.box}>
          <Text style={styles.emoji}>💪</Text>
          <Text style={styles.box_text}>Arm Workout</Text>
        </View>
      </View>

      <View style={styles.box_flex_container}>
        <View style={styles.box}>
          <Text style={styles.emoji}>🏋️</Text>
          <Text style={styles.box_text}>Chest Workout</Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.emoji}>🦵</Text>
          <Text style={styles.box_text}>Leg Workout</Text>
        </View>
      </View>

      <View style={styles.box_flex_container2}>
        <View style={styles.bottom_box}>
          <Text style={styles.emoji}>🏋️‍♂️</Text>
          <Text style={styles.box_text}>Back & Shoulder Workout</Text>
        </View>
      </View>
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1C1C1E", // Dark background for a professional gym look
    padding: 20,
  },
  text_container: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 26,
    marginTop: 20,
    color: "#FF9500", // Orange for highlight
    letterSpacing: 1.5,
    textTransform: "uppercase",
  },
  box_flex_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
  },
  box_flex_container2: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 30,
  },
  box: {
    backgroundColor: "#2C2C2E", // Dark Gray for contrast
    padding: 20,
    borderRadius: 15,
    width: 180,
    height: 250,
    alignItems: "center",
    justifyContent: "center",
    elevation: 6,
    shadowColor: "rgba(255, 149, 0, 0.5)", // Orange glow effect
    shadowOffset: { width: 3, height: 5 },
    shadowOpacity: 0.4,
    shadowRadius: 8,
    borderWidth: 1,
    borderColor: "#FF9500",
  },
  bottom_box: {
    backgroundColor: "#2C2C2E",
    padding: 15,
    borderRadius: 15,
    width: 250,
    height: 150,
    alignItems: "center",
    justifyContent: "center",
    elevation: 6,
    shadowColor: "rgba(255, 149, 0, 0.5)",
    shadowOffset: { width: 3, height: 5 },
    shadowOpacity: 0.4,
    shadowRadius: 8,
    borderWidth: 1,
    borderColor: "#FF9500",
  },
  box_text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFFFFF",
    textAlign: "center",
    textTransform: "uppercase",
    letterSpacing: 1.2,
    marginTop: 10,
  },
  emoji: {
    fontSize: 50, // Adjust emoji size
  }
});
