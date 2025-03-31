import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { useAppContext } from '../context/ContextProvider'
import AbsBeginnerGame from '../Components/GameExcercises/AbsGame/AbsBeginnerGame/AbsBeginnerGame';

const Game = () => {
  const {points,increasePoints} = useAppContext() ;
  
  const {excerise} =useAppContext() ;

  const RenderComponet = ()=>{
     switch(excerise){
       case "Abs Beginner" :return <AbsBeginnerGame/>
       default: return null


     }
  }

  return (
    <View style={styles.container}>

      <View style={styles.card}>
        <Text style={styles.title}>🏋️ Exercise Game</Text>
        <Text style={styles.score}>🔥 Score: {points}</Text>
      </View>

      <View>
        <RenderComponet/>
      </View>

    
    </View>
  )
}

export default Game

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E3F2FD', 
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
})
