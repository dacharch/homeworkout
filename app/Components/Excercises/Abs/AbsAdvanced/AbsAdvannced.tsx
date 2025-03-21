import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Modal, Pressable } from "react-native";
import { Exercise, AbsAdvanced } from "../../../../data/constant";
import {Image} from 'expo-image'


const AbsAdvannced = () => {
  const [selectedExercise, setSelectedExercise] = useState<Exercise | null>(null);  
  return (
     <>
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.text_container}>🔥 Abs Advanced Workout</Text>

            <View style={styles.exercise_container}>
               {
                AbsAdvanced.map((excercise) =>(
                   <TouchableOpacity
                      key={excercise.id}
                      style={styles.exercise_box}
                      onPress={()=>setSelectedExercise(excercise)}
                   >
                    <Image
                       source={excercise.image}
                       style={styles.gif}
                       contentFit='contain'

                    />
                    <Text style={styles.exercise_text}>
                      {excercise.name}
                    </Text>
                   </TouchableOpacity>
                ))
               }
            </View>
        </ScrollView>
        {/*Modal Excercise View*/}
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
  )
}
export default AbsAdvannced

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
})