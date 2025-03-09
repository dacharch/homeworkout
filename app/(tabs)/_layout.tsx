import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs

    screenOptions={{
      tabBarActiveTintColor: '#4A90E2', // Active tab icon color
      tabBarInactiveTintColor: '#b0b0b0', // Inactive tab icon color
      headerShown: false, // Hide header
     
    }}
    >
      <Tabs.Screen name="index" options={{ title: 'Training' }} />
      <Tabs.Screen name="Setting" options={{ title: 'Setting' }} />
    </Tabs>
  );
}
