import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import AbsExercise from "../Components/Excercises/Abs/AbsExcercise";
import ArmExcercise from "../Components/Excercises/Arm/ArmExcercise";
import ChestExcercise from "../Components/Excercises/Chest/ChestExcercise";
import LegExcercise from "../Components/Excercises/Leg/LegExcercise";
import ShoulderExcercise from "../Components/Excercises/Shoulder/ShoulderExcercise";

const Index: React.FC = () => {
  const [switchComponent, setComponent] = useState<string>("");

  const RenderComponent = () => {
    switch (switchComponent) {
      case "Abs Exercise":
        return <AbsExercise setComponent={setComponent} />;
      case "Arm Excercise":
        return <ArmExcercise setComponent={setComponent} />;
      case "Chest Excercise":
        return <ChestExcercise setComponent={setComponent} />;
      case "Leg Excercise":
        return <LegExcercise setComponent={setComponent} />;
      case "Shoulder Excercise":
        return <ShoulderExcercise setComponent={setComponent} />;
      default:
        return null;
    }
  };

  return (
    <>
      {switchComponent === "" ? (
        <View style={styles.container}>
          <Text style={styles.text_container}>🏋️‍♂️ Home Workout</Text>

          <View style={styles.box_flex_container}>
            <View style={styles.box}>
              <Image source={require("../assets/Abs_Advanced.jpg")} style={styles.image} />
              <TouchableOpacity onPress={() => setComponent("Abs Exercise")}>
                <Text style={styles.box_text}>Abs Workout</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.box}>
              <Image source={require("../assets/arm.jpg")} style={styles.image} />
              <TouchableOpacity onPress={() => setComponent("Arm Excercise")}>
                <Text style={styles.box_text}>Arm Workout</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.box_flex_container}>
            <View style={styles.box}>
              <Image source={require("../assets/chest.jpg")} style={styles.image} />
              <TouchableOpacity onPress={() => setComponent("Chest Excercise")}>
                <Text style={styles.box_text}>Chest Workout</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.box}>
              <Image source={require("../assets/leg.jpg")} style={styles.image} />
              <TouchableOpacity onPress={() => setComponent("Leg Excercise")}>
                <Text style={styles.box_text}>Leg Workout</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.box_flex_container2}>
            <View style={styles.bottom_box}>
              <Image source={require("../assets/shoulder.jpeg")} style={styles.image} />
              <TouchableOpacity onPress={() => setComponent("Shoulder Excercise")}>
                <Text style={styles.box_text}>Back & Shoulder Workout</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      ) : (
        <RenderComponent />
      )}
    </>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1C1C1E",
    padding: 20,
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
  box_flex_container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 30,
  },
  box_flex_container2: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 30,
  },
  box: {
    backgroundColor: "#2C2C2E",
    padding: 20,
    borderRadius: 15,
    width: 180,
    height: 230,
    alignItems: "center",
    justifyContent: "center",
    elevation: 6,
    shadowColor: "rgba(255, 149, 0, 0.5)",
    shadowOffset: { width: 3, height: 5 },
    shadowOpacity: 0.4,
    shadowRadius: 8,
    borderWidth: 1,
    borderColor: "#FF9500",
  },
  bottom_box: {
    backgroundColor: "#2C2C2E",
    padding: 15,
    borderRadius: 15,
    width: 250,
    height: 200,
    alignItems: "center",
    justifyContent: "center",
    elevation: 6,
    shadowColor: "rgba(255, 149, 0, 0.5)",
    shadowOffset: { width: 3, height: 5 },
    shadowOpacity: 0.4,
    shadowRadius: 8,
    borderWidth: 1,
    borderColor: "#FF9500",
  },
  box_text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFFFFF",
    textAlign: "center",
    textTransform: "uppercase",
    letterSpacing: 1.2,
    marginTop: 10,
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
});
