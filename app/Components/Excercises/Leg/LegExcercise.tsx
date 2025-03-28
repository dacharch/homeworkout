import React, {useState} from 'react' ;
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native' 
import LegBeginnerExcercise from './LegBeginner/LegBeginnerExcercise';
import LegIntermediateExcercise from './LegIntermediate/LegIntermediateExcercise';
import LegAdvancedExcercise from './LegAdvanced/LegAdvancedExcercise';

interface LegExcerciseProps {
     setComponent:(component:string) =>void ;
}


const LegExcercise: React.FC<LegExcerciseProps> = ({setComponent}) =>{

   const [switchComponent,setComponent2] = useState("") ;

   const RenderComponent  = () =>{
    switch(switchComponent) {
        case "Leg Beginner Excercise" :
            return <LegIntermediateExcercise/>
        case  "Leg Intermediate Excercise" :
            return <LegIntermediateExcercise />
        case  "Leg Advanced Excercise" :
           return <LegAdvancedExcercise/>
       
        default : return null ;
    }
   }
   return(
         <>
                 {
                    switchComponent === ""?(
                     <View style={styles.container}>
                     <Text style={styles.text_container}>💪 Leg Workout</Text>
               
                     <View style={styles.box_flex_container}>
                       <TouchableOpacity
                         onPress={()=>setComponent2("Leg Beginner Excercise")}
                         style={styles.box} 
                        >
                         <Text style={styles.emoji}>🔥</Text>
                         <Text style={styles.box_text}>Chest Beginner Excercise</Text>
                       </TouchableOpacity>
               
                       <TouchableOpacity 
                          onPress={()=>setComponent2("Leg Intermediate Excercise")}
                          style={styles.box}>
                         <Text style={styles.emoji}>⚡</Text>
                         <Text style={styles.box_text}>Chest Intermedidate Excercise</Text>
                       </TouchableOpacity>
                     </View>
               
                     <View style={styles.box_flex_container2}>
                       <TouchableOpacity 
                         onPress={()=>setComponent2("Leg Advanced Excercise")}
                         style={styles.bottom_box}
                         >
                         <Text style={styles.emoji}>🏆</Text>
                         <Text style={styles.box_text}>Chest Advanced Excercise</Text>
                       </TouchableOpacity>
                     </View>
               
                     <TouchableOpacity style={styles.back_button} onPress={() => setComponent("")}>
                       <Text style={styles.back_text}>⬅ Back</Text>
                     </TouchableOpacity>
                   </View>
                    ):(
                      <RenderComponent/>
                    )
                 }
               
               </>
   )
}

export default LegExcercise ;

const styles  = StyleSheet.create({
   
    container: {
        flex: 1,
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
      box_flex_container: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 30,
        width: "100%",
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
        height: 250,
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
        height: 150,
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
       
        letterSpacing: 1.2,
        marginTop: 10,
      },
      emoji: {
        fontSize: 50,
      },
      back_button: {
        marginTop: 40,
        paddingVertical: 12,
        paddingHorizontal: 20,
        backgroundColor: "#FF9500",
        borderRadius: 10,
        elevation: 5,
      },
      back_text: {
        color: "#1C1C1E",
        fontSize: 18,
        fontWeight: "bold",
        textTransform: "uppercase",
      },
     

})