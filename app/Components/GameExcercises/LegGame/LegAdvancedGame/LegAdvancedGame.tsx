import React, { useState, useEffect  } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal } from 'react-native';
import { LegAdvanced } from '@/app/data/constant';
import { Image } from 'expo-image';
import { ProgressBar } from 'react-native-paper';
import { useAppContext } from '@/app/context/ContextProvider';

const LegAdvancedGame = () => {
  const [timer, setTimer] = useState(30);
  const [key, setKey] = useState(0); 
  const { points, setPoints, currentIndex, setCurrentIndex } = useAppContext();
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [timer]);

  const handleNextExercise = () => {
    setPoints(points + 10);
    if (currentIndex < LegAdvanced.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setTimer(30);
      setKey((prev) => prev + 1);
    } else {
      setModalVisible(true);
    }
    
  };

  return (
    <View style={styles.container2}>
      <View style={styles.card} key={key}>         
        <Image 
          key={currentIndex}
          source={LegAdvanced[currentIndex].image} 
          style={styles.image} 
        />
        <Text style={styles.exerciseName}>{LegAdvanced[currentIndex].name}</Text>
      </View>

      {/* Timer with Progress Bar */}
      <View style={styles.timerContainer}>
        <Text style={styles.timerText}>⏳ Time Left: {timer}s</Text>
        <ProgressBar 
          progress={timer / 30} 
          color="#FF9800" 
          style={styles.progressBar} 
        />
      </View>

      {/* Completion Button */}
      {timer === 0 && (
        <TouchableOpacity style={styles.button} onPress={handleNextExercise}>
          <Text style={styles.buttonText}>✅ Completed!</Text>
        </TouchableOpacity>
      )}

      {/* Unlock Modal */}
      <Modal visible={modalVisible} transparent animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>🎉 Workout Complete! Unlock the next exercise game?</Text>
            <TouchableOpacity 
              style={styles.modalButton} 
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.buttonText}>🔓 Unlock</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={[styles.modalButton, { backgroundColor: '#ccc' }]} 
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.buttonText}>❌ Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default LegAdvancedGame;

const styles = StyleSheet.create({
  container2: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FAFAFA',
    borderRadius: 30,
    padding: 20,
  },
  card: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
    marginBottom: 20,
  },
  image: {
    width: 250,
    height: 300,
    borderRadius: 15,
    marginBottom: 15,
  },
  exerciseName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
  timerContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  timerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FF9800',
    marginBottom: 5,
  },
  progressBar: {
    width: 250,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#E0E0E0',
  },
  button: {
    backgroundColor: '#FF9800',
    paddingVertical: 14,
    paddingHorizontal: 35,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: 300,
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 15,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  modalButton: {
    backgroundColor: '#FF9800',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginVertical: 5,
    width: '80%',
    alignItems: 'center',
  },
});
