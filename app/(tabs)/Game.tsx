import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useAppContext } from '../context/ContextProvider';
import AbsBeginnerGame from '../Components/GameExcercises/AbsGame/AbsBeginnerGame/AbsBeginnerGame';
import AbsIntermediateGame from '../Components/GameExcercises/AbsGame/AbsIntermediate/AbsIntermediateGame';
import AbsAdvancedGame from '../Components/GameExcercises/AbsGame/AbsAdvancedGame/AbsAdvancedGame';
import ArmBeginnerGame from '../Components/GameExcercises/ArmGame/ArmBeginnerGame/ArmBeginnerGame';
import ArmIntermediateGame from '../Components/GameExcercises/ArmGame/ArmIntermediateGame/ArmIntermediateGame';
import ArmAdvancedGame from '../Components/GameExcercises/ArmGame/ArmAdavancedGame/ArmAdvancedGame';

const Game = () => {
  const { points } = useAppContext();
  const { excerise } = useAppContext();

  const RenderComponent = () => {
    switch (excerise) {
      case "Abs Beginner":
        return <AbsBeginnerGame />;
      case "Abs Intermediate": 
         return <AbsIntermediateGame/>
      case "Abs Advanced" :
         return <AbsAdvancedGame/>
      
      case "Arm Beginner" :
          return <ArmBeginnerGame/>

      case "Arm Intermediate" :
          return <ArmIntermediateGame/>
      
      case "Arm Advanced" :
          return <ArmAdvancedGame/>
      
      default:
        return null;
    }
  };

  return (
    <>
      <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>🏋️ Exercise Game</Text>
        <Text style={styles.score}>🔥 Score: {points}</Text>
      </View>

        <View style={styles.exerciseContainer}>
        <RenderComponent />
      </View>
    </View>
    </>
    
  );
};

export default Game;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    width: '100%', 
    height: '100%', 
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: '#E3F2FD',
    paddingHorizontal: 16, 
  },
  card: {
    width: '85%',
    paddingVertical: 20,
    paddingHorizontal: 24,
    backgroundColor: '#ffffff',
    borderRadius: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 5,
    marginTop:10,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#1565C0',
    marginBottom: 10,
  },
  score: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#D84315',
    backgroundColor: '#FFF3E0',
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 8,
    overflow: 'hidden',
  },
  exerciseContainer: {
    flex: 1, 
    width: '100%', 
    justifyContent: 'center', 
    alignItems: 'center', 
    marginTop: 20, 
  },
});
