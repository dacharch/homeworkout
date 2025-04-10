import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Modal,
  Animated,
} from 'react-native';
import ConfettiCannon from 'react-native-confetti-cannon';

type RewardType = 'points' | 'pauseTimer' | 'skipExercise' | 'box';

export type Reward = {
  type: RewardType;
  value: string | number;
  description: string;
};

const rewards: Reward[] = [
  { type: 'points', value: 10, description: '+10 Points 🎉' },
  { type: 'pauseTimer', value: 'Pause Timer', description: '🕒 Freeze time for 5 seconds!' },
  { type: 'skipExercise', value: 'Skip Exercise', description: '⏭️ Skip one exercise this round.' },
  { type: 'box', value: 'Nested Box!', description: '📦 Whoa! Another box inside!' },
];

type Props = {
  visible: boolean;
  onClose: (reward: Reward) => void;
};

const MysteryBox: React.FC<Props> = ({ visible, onClose }) => {
  const [boxOpened, setBoxOpened] = useState(false);
  const [reward, setReward] = useState<Reward | null>(null);

  const scaleAnim = useRef(new Animated.Value(0)).current;
  const confettiRef = useRef<any>(null);

  useEffect(() => {
    if (boxOpened) {
      Animated.spring(scaleAnim, {
        toValue: 1,
        useNativeDriver: true,
        friction: 5,
      }).start();

      confettiRef.current?.start();
    } else {
      scaleAnim.setValue(0);
    }
  }, [boxOpened]);

  const openBox = () => {
    const random = Math.random();

    if (random < 0.2) {
      const nestedBox = rewards.find(r => r.type === 'box')!;
      setReward(nestedBox);
    } else {
      const actualRewards = rewards.filter(r => r.type !== 'box');
      const chosen = actualRewards[Math.floor(Math.random() * actualRewards.length)];
      setReward(chosen);
    }

    setBoxOpened(true);
  };

  const handleNext = () => {
    setBoxOpened(false);
    onClose(reward!);
    setReward(null);
  };

  return (
    <Modal visible={visible} animationType="slide" transparent>
      <View style={styles.overlay}>
        {!boxOpened ? (
          <View style={styles.boxContainer}>
            <Text style={styles.title}>🎁 You've Earned a Mystery Box!</Text>
            <TouchableOpacity onPress={openBox} activeOpacity={0.8} style={styles.boxGlow}>
              <Image source={require('../../assets/box.png')} style={styles.boxImage} />
            </TouchableOpacity>
          </View>
        ) : (
          <Animated.View style={[styles.rewardContainer, { transform: [{ scale: scaleAnim }] }]}>
            <Text style={styles.rewardText}>{reward?.description}</Text>
            <TouchableOpacity onPress={handleNext} style={styles.nextBtn}>
              <Text style={styles.nextText}>
                {reward?.type === 'box' ? 'Open Another Box 🔁' : 'Awesome! Continue 🚀'}
              </Text>
            </TouchableOpacity>
            <ConfettiCannon
              count={60}
              origin={{ x: 200, y: 0 }}
              explosionSpeed={350}
              fallSpeed={3000}
              fadeOut
              autoStart={false}
              ref={confettiRef}
            />
          </Animated.View>
        )}
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.9)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  boxContainer: {
    alignItems: 'center',
    backgroundColor: '#222',
    padding: 30,
    borderRadius: 20,
    shadowColor: '#facc15',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.4,
    shadowRadius: 20,
    elevation: 10,
  },
  title: {
    fontSize: 24,
    color: '#facc15',
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  boxGlow: {
    padding: 10,
    borderRadius: 100,
    backgroundColor: '#fff',
    shadowColor: '#facc15',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.9,
    shadowRadius: 20,
    elevation: 20,
  },
  boxImage: {
    width: 160,
    height: 160,
  },
  rewardContainer: {
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 40,
    borderRadius: 25,
    shadowColor: '#ff9800',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.6,
    shadowRadius: 25,
    elevation: 20,
    borderWidth: 2,
    borderColor: '#facc15',
  },
  rewardText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ff6f00',
    marginBottom: 25,
    textAlign: 'center',
  },
  nextBtn: {
    backgroundColor: '#10b981',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 30,
  },
  nextText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default MysteryBox;
