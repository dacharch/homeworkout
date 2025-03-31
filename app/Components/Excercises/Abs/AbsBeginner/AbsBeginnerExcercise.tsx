import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Modal, Pressable } from "react-native";
import { Exercise, AbsBeginner } from "../../../../data/constant";
import { Image } from "expo-image";
import { useAppContext } from "@/app/context/ContextProvider";
import { useRouter } from "expo-router";

const AbsBeginnerExercise = () => {
  const [selectedExercise, setSelectedExercise] = useState<Exercise | null>(null);
  const{excerise,setExcercise} =useAppContext() ;
  const router = useRouter() ;


  const AbsBeginnerGameSetup = () =>{
    setExcercise("Abs Beginner")
    router.push('/Game') ;
  
  }
  return (
    <>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.text_container}>Abs Beginner Workout</Text>

        <View style={styles.exercise_container}>
          {AbsBeginner.map((exercise) => (
            <TouchableOpacity 
              key={exercise.id}
              style={styles.exercise_box}
              onPress={() => setSelectedExercise(exercise)}
            >
              <Image 
                source={exercise.image} 
                style={styles.gif} 
                contentFit="contain"
              />
              <Text style={styles.exercise_text}>{exercise.name}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <Pressable style={styles.button} onPress={AbsBeginnerGameSetup}>
          <Text style={styles.buttonText}>Start the Exercise</Text>
        </Pressable>
      </ScrollView>

      <Modal
        visible={!!selectedExercise}
        animationType="slide"
        transparent
        onRequestClose={() => setSelectedExercise(null)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            {selectedExercise && (
              <>
                <Text style={styles.modalTitle}>{selectedExercise.name}</Text>
                <Image source={selectedExercise.image} style={styles.modalImage} contentFit="contain" />

                <ScrollView style={styles.modalContent}>
                  <Text style={styles.sectionTitle}>📌 Instruction</Text>
                  {selectedExercise.instructions.map((step, index) => (
                    <Text key={index} style={styles.modalText}>• {step}</Text>
                  ))}

                  <Text style={styles.sectionTitle}>🎯 Focus Area</Text>
                  {selectedExercise.focusAreas.map((area, index) => (
                    <Text key={index} style={styles.modalText}>• {area}</Text>
                  ))}

                  <Text style={styles.sectionTitle}>⚠️ Common Mistakes</Text>
                  {selectedExercise.commonMistakes.map((mistake, index) => (
                    <Text key={index} style={styles.modalText}>• {mistake}</Text>
                  ))}

                  <Text style={styles.sectionTitle}>🌬️ Breathing Tips</Text>
                  {selectedExercise.breathingTips.map((tip, index) => (
                    <Text key={index} style={styles.modalText}>• {tip}</Text>
                  ))}
                </ScrollView>

                <Pressable style={styles.closeButton} onPress={() => setSelectedExercise(null)}>
                  <Text style={styles.closeButtonText}>Close</Text>
                </Pressable>
              </>
            )}
          </View>
        </View>
      </Modal>
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
    justifyContent: "space-between",
    marginTop: 30,
    width: "100%",
    paddingHorizontal: 10,
  },
  exercise_box: {
    backgroundColor: "#2C2C2E",
    padding: 20,
    borderRadius: 15,
    width: "47%",
    height: 250,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 15,
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
  gif: {
    width: 120,
    height: 120,
  },
  button: {
    backgroundColor: "#FF9500",
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    width: "80%",
    marginTop: 20,
    shadowColor: "#FF9500",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.6,
    shadowRadius: 6,
    elevation: 8,
  },
  buttonText: {
    color: "#1C1C1E",
    fontSize: 18,
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: 1.2,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.9)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    backgroundColor: "#3A3A3C",
    padding: 20,
    borderRadius: 12,
    width: "90%",
    maxHeight: "100%",
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFD700",
    marginBottom: 10,
  },
  modalImage: {
    width: 200,
    height: 140,
    borderRadius: 10,
    marginBottom: 10,
  },
  modalContent: {
    width: "100%",
    marginVertical: 10,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FF9500",
    marginTop: 10,
  },
  modalText: {
    fontSize: 14,
    color: "#FFFFFF",
    lineHeight: 20,
  },
  closeButton: {
    marginTop: 15,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#FF9500",
    borderRadius: 8,
  },
  closeButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#1C1C1E",
  },
});
