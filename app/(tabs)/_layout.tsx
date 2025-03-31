import { Tabs } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#4A90E2", // Active tab icon color
        tabBarInactiveTintColor: "#b0b0b0", // Inactive tab icon color
        tabBarStyle: {
          backgroundColor: "#1e1e1e", // Dark background
          borderTopWidth: 1,
          borderTopColor: "#333", // Subtle border
          height: 60,
          paddingBottom: 8,
          paddingTop: 8,
        },
        headerShown: false, // Hide header
      }}
    >
      {/* Training Tab */}
      <Tabs.Screen
        name="index"
        options={{
          title: "Training",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="fitness-center" size={size} color={color} />
          ),
        }}
      />

      {/* Game Tab */}
      <Tabs.Screen
        name="Game"
        options={{
          title: "Game",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="sports-esports" size={size} color={color} />
          ),
        }}
      />

      {/* Settings Tab */}
      <Tabs.Screen
        name="Setting"
        options={{
          title: "Setting",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="settings" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
