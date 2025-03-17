import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Image } from 'expo-image';

interface ExerciseInfoProps {
  exerciseName: string;
  imageSource: number; // Static image import
}

const ExerciseInfo: React.FC<ExerciseInfoProps> = ({ exerciseName, imageSource }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{exerciseName}</Text>
      <Image source={imageSource} style={styles.image} contentFit="contain" />

      {/* Instruction Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>📌 Instruction</Text>
        <Text style={styles.sectionText}>
          1. Stand upright with your feet together and arms at your sides.{"\n"}
          2. Jump while spreading your legs shoulder-width apart and raising your arms overhead.{"\n"}
          3. Jump again to return to the starting position.{"\n"}
          4. Repeat at a steady pace.
        </Text>
      </View>

      {/* Focus Area Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>🎯 Focus Area</Text>
        <Text style={styles.sectionText}>
          - Engages the whole body.{"\n"}
          - Targets the calves, quads, shoulders, and core.{"\n"}
          - Improves cardiovascular endurance.
        </Text>
      </View>

      {/* Common Mistakes Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>⚠️ Common Mistakes</Text>
        <Text style={styles.sectionText}>
          - Not landing softly, which can strain your knees.{"\n"}
          - Moving arms and legs out of sync.{"\n"}
          - Skipping full range of motion.
        </Text>
      </View>

      {/* Breathing Tips Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>🌬️ Breathing Tips</Text>
        <Text style={styles.sectionText}>
          - Inhale as you jump and extend your arms.{"\n"}
          - Exhale as you return to the starting position.{"\n"}
          - Maintain a steady breathing rhythm.
        </Text>
      </View>
    </View>
  );
};

export default ExerciseInfo;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#1E1E1E',
    borderRadius: 10,
    marginVertical: 10,
    alignItems: 'center',
    width: 250, 
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFD700',
    textAlign: 'center',
    marginBottom: 10,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 10,
  },
  section: {
    marginTop: 12,
    padding: 10,
    backgroundColor: '#2C2C2E',
    borderRadius: 8,
    width: '100%',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FF9500',
    marginBottom: 5,
  },
  sectionText: {
    fontSize: 14,
    color: '#FFFFFF',
    lineHeight: 20,
  },
});
