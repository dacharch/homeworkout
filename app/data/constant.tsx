export interface Exercise {
  id: number;
  name: string;
  image: any; // Using `any` since `require` doesn't have a strict type
  instructions: string[];
  focusAreas: string[];
  commonMistakes: string[];
  breathingTips: string[];
}

export const exercises: Exercise[] = [
  {
    id: 1,
    name: "Jumping Jacks",
    image: require("../assets/jumping_jack.gif"),
    instructions: [
      "Stand upright with your feet together and arms at your sides.",
      "Jump while spreading your legs shoulder-width apart and raising your arms overhead.",
      "Jump again to return to the starting position.",
      "Repeat at a steady pace."
    ],
    focusAreas: [
      "Engages the whole body.",
      "Targets the calves, quads, shoulders, and core.",
      "Improves cardiovascular endurance."
    ],
    commonMistakes: [
      "Not landing softly, which can strain your knees.",
      "Moving arms and legs out of sync.",
      "Skipping full range of motion."
    ],
    breathingTips: [
      "Inhale as you jump and extend your arms.",
      "Exhale as you return to the starting position.",
      "Maintain a steady breathing rhythm."
    ]
  },
  
];
