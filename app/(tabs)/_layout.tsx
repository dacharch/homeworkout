import { Tabs } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";
import { AppProvider } from "../context/ContextProvider";

export default function TabLayout() {
  return (
    <AppProvider>
         <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#4A90E2", 
        tabBarInactiveTintColor: "#b0b0b0", 
        tabBarStyle: {
          backgroundColor: "#1e1e1e", 
          borderTopWidth: 1,
          borderTopColor: "#333", 
          height: 60,
          paddingBottom: 8,
          paddingTop: 8,
        },
        headerShown: false, 
      }}
    >
  
      <Tabs.Screen
        name="index"
        options={{
          title: "Training",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="fitness-center" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="Game"
        options={{
          title: "Game",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="sports-esports" size={size} color={color} />
          ),
        }}
      />


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

    </AppProvider>
   
  );
}
