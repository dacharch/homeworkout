export interface Exercise {
  id: number;
  name: string;
  image: any; 
  instructions: string[];
  focusAreas: string[];
  commonMistakes: string[];
  breathingTips: string[];
}

export const AbsBeginner: Exercise[] = [
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
    focusAreas: ["Engages the whole body.", "Targets the calves, quads, shoulders, and core.", "Improves cardiovascular endurance."],
    commonMistakes: ["Not landing softly, which can strain your knees.", "Moving arms and legs out of sync.", "Skipping full range of motion."],
    breathingTips: ["Inhale as you jump and extend your arms.", "Exhale as you return to the starting position.", "Maintain a steady breathing rhythm."]
  },
  {
    id: 2,
    name: "Abdominal Crunches",
    image: require("../assets/abodominal_crunch.gif"),
    instructions: [
      "Lie down on your back with your knees bent and feet flat on the floor.",
      "Place your hands behind your head without pulling your neck.",
      "Engage your core and lift your shoulders off the ground.",
      "Hold the position briefly, then lower yourself back down.",
      "Repeat while maintaining control over the movement."
    ],
    focusAreas: ["Strengthens the abdominal muscles.", "Improves core stability and posture.", "Enhances muscle endurance in the midsection."],
    commonMistakes: ["Pulling on the neck, leading to strain.", "Using momentum instead of core strength.", "Lifting too high, which shifts focus away from the abs."],
    breathingTips: ["Exhale as you crunch up.", "Inhale as you lower back down.", "Keep a consistent breathing pattern to maintain rhythm."]
  },
  {
    id: 3,
    name: "Russian Twist",
    image: require("../assets/russian_twist.gif"),
    instructions: [
      "Sit on the floor with your knees bent and feet slightly elevated.",
      "Lean back slightly and engage your core.",
      "Hold your hands together and twist your torso to the left, then to the right.",
      "Repeat while maintaining balance."
    ],
    focusAreas: ["Strengthens oblique muscles.", "Improves rotational core strength.", "Enhances balance and coordination."],
    commonMistakes: ["Not engaging the core fully.", "Using momentum instead of controlled movements.", "Twisting too fast without proper form."],
    breathingTips: ["Exhale as you twist.", "Inhale when returning to the center.", "Maintain a steady rhythm."]
  },
  {
    id: 4,
    name: "Mountain Climber",
    image: require("../assets/mountain_climber.gif"),
    instructions: [
      "Get into a high plank position with your hands under your shoulders.",
      "Engage your core and bring one knee towards your chest.",
      "Quickly switch legs, bringing the other knee forward.",
      "Repeat at a steady or fast pace."
    ],
    focusAreas: ["Engages the core, shoulders, and legs.", "Improves cardiovascular endurance.", "Strengthens coordination and agility."],
    commonMistakes: ["Not keeping the core engaged.", "Hips rising too high.", "Moving too fast with improper form."],
    breathingTips: ["Inhale and exhale rhythmically with each leg switch.", "Maintain steady breathing throughout.", "Avoid holding your breath."]
  },
  {
    id: 5,
    name: "Heel Touch",
    image: require("../assets/Heal_touch.gif"),
    instructions: [
      "Lie on your back with your knees bent and feet flat on the floor.",
      "Engage your core and slightly lift your upper back off the ground.",
      "Reach your right hand towards your right heel, then switch to the left side.",
      "Repeat while keeping your core engaged."
    ],
    focusAreas: ["Targets the oblique muscles.", "Improves side abdominal strength.", "Enhances core stability."],
    commonMistakes: ["Lifting too high.", "Not engaging the core fully.", "Using neck muscles instead of obliques."],
    breathingTips: ["Exhale as you reach for your heel.", "Inhale when switching sides.", "Maintain a steady rhythm."]
  },
  {
    id: 6,
    name: "Leg Raises",
    image: require("../assets/leg_raisies.gif"),
    instructions: [
      "Lie flat on your back with your hands under your glutes for support.",
      "Engage your core and lift both legs towards the ceiling.",
      "Slowly lower them back down without touching the floor.",
      "Repeat while maintaining control."
    ],
    focusAreas: ["Strengthens the lower abs.", "Improves core endurance.", "Enhances lower body stability."],
    commonMistakes: ["Arching the lower back.", "Using momentum instead of control.", "Letting feet touch the ground between reps."],
    breathingTips: ["Exhale as you lift your legs.", "Inhale as you lower them.", "Keep a steady breathing pattern."]
  },
  {
    id: 7,
    name: "Plank",
    image: require("../assets/plank.gif"),
    instructions: [
      "Start in a forearm plank position with elbows under your shoulders.",
      "Engage your core and keep your body in a straight line.",
      "Hold the position without dropping your hips.",
      "Maintain steady breathing."
    ],
    focusAreas: ["Strengthens the core and shoulders.", "Improves endurance and stability.", "Enhances posture."],
    commonMistakes: ["Dropping the hips.", "Arching the back.", "Holding breath instead of breathing steadily."],
    breathingTips: ["Breathe deeply and steadily.", "Avoid holding your breath.", "Maintain controlled breathing throughout."]
  },
  {
    id: 8,
    name: "Cobra Stretch",
    image: require("../assets/cobra_stretch.gif"),
    instructions: [
      "Lie face down with your hands under your shoulders.",
      "Press into your palms and lift your chest off the ground.",
      "Keep your hips on the floor and stretch your abdomen.",
      "Hold the position and breathe deeply."
    ],
    focusAreas: ["Stretches the lower back and core.", "Improves spinal flexibility.", "Relieves tension in the back."],
    commonMistakes: ["Overextending the lower back.", "Not engaging the shoulders.", "Holding breath instead of relaxing into the stretch."],
    breathingTips: ["Inhale deeply as you lift up.", "Exhale while holding the stretch.", "Breathe deeply to relax into the position."]
  },
  {
    id: 9,
    name: "Spine Lumbar Twist Stretch",
    image: require("../assets/spine_number.gif"),
    instructions: [
      "Lie on your back with your knees bent.",
      "Drop both knees to one side while keeping your shoulders on the floor.",
      "Hold the stretch, then switch sides.",
      "Breathe deeply and relax into the stretch."
    ],
    focusAreas: ["Stretches the lower back and obliques.", "Improves spinal flexibility.", "Relieves tension in the lumbar region."],
    commonMistakes: ["Lifting shoulders off the floor.", "Forcing the stretch too much.", "Not breathing deeply."],
    breathingTips: ["Exhale as you lower your knees.", "Inhale when switching sides.", "Maintain steady breathing."]
  }
];


export const AbsIntermediate:Exercise[] =[

  {
    id: 1,
    name: "Side Bridges Left",
    image: require("../assets/site_bridges_left.gif"), // Replace with actual file path
    instructions: [
      "Lie on your left side with your legs extended and stacked on top of each other.",
      "Place your left elbow directly under your shoulder, supporting your upper body.",
      "Engage your core and lift your hips off the ground, forming a straight line from head to feet.",
      "Hold the position for the desired duration while keeping your core tight.",
      "Slowly lower your hips back down and repeat."
    ],
    focusAreas: ["Strengthens obliques and core.", "Improves lateral stability.", "Enhances overall body balance."],
    commonMistakes: ["Letting hips drop.", "Not aligning body in a straight line.", "Holding breath instead of breathing steadily."],
    breathingTips: ["Breathe deeply and steadily throughout.", "Exhale when lifting hips.", "Inhale when lowering hips."]
  },
  {
    id: 5,
    name: "Butt Bridge",
    image: require("../assets/butt_bridge_left.gif"), 
    instructions: [
      "Lie on your back with your knees bent and feet flat on the floor.",
      "Place your arms at your sides, palms facing down.",
      "Engage your core and squeeze your glutes as you lift your hips toward the ceiling.",
      "Hold the top position for a second, ensuring your body forms a straight line from shoulders to knees.",
      "Slowly lower your hips back to the starting position and repeat."
    ],
    focusAreas: ["Strengthens glutes, lower back, and core.", "Improves hip mobility.", "Enhances posture and stability."],
    commonMistakes: ["Overarching the lower back.", "Not fully engaging the glutes.", "Lifting too fast without control."],
    breathingTips: ["Exhale as you lift your hips.", "Inhale as you lower them.", "Maintain a steady breathing rhythm."]
  },

  {
    id: 6,
    name: "Side Bridges Right",
    image: require("../assets/site_bridge_right.gif"),
    instructions: [
      "Lie on your right side with legs extended and stacked.",
      "Place your right forearm on the ground, elbow directly under your shoulder.",
      "Engage your core and lift your hips off the ground, forming a straight line.",
      "Hold the position for a few seconds, keeping your abs tight.",
      "Lower your hips slightly and raise them again for an advanced variation.",
      "Repeat for the desired time or reps, then switch sides."
    ],
    focusAreas: [
      "Strengthens obliques, core, and shoulders.",
      "Improves core stability and balance.",
      "Enhances posture and spinal alignment."
    ],
    commonMistakes: [
      "Letting hips sag or raising them too high.",
      "Not keeping the body in a straight line.",
      "Holding the breath instead of maintaining steady breathing."
    ],
    breathingTips: [
      "Exhale as you lift your hips.",
      "Inhale as you lower them.",
      "Keep a steady and controlled breathing rhythm."
    ]
  },

  {
    id: 7,
    name: "Bicycle Crunches",
    image: require("../assets/bicycle_crunches.gif"),
    instructions: [
      "Lie on your back with your hands behind your head and legs lifted, knees bent at 90 degrees.",
      "Engage your core and lift your shoulders off the ground.",
      "Bring your right elbow toward your left knee while extending your right leg.",
      "Switch sides, bringing your left elbow toward your right knee while extending your left leg.",
      "Continue alternating sides in a pedaling motion.",
      "Keep the movement controlled and your core engaged throughout."
    ],
    focusAreas: [
      "Strengthens abs, obliques, and hip flexors.",
      "Improves core endurance and stability.",
      "Enhances coordination and flexibility."
    ],
    commonMistakes: [
      "Pulling the neck instead of using core muscles.",
      "Rushing the movement instead of maintaining control.",
      "Not fully extending the legs or engaging the core."
    ],
    breathingTips: [
      "Exhale as you twist and bring your elbow to your knee.",
      "Inhale as you return to the starting position.",
      "Maintain a steady and controlled breathing rhythm."
    ]
  },
  {
    id: 8,
    name: "Spine Lumbar Twist Stretch Right",
    image: require("../assets/spline_number_right.gif"),
    instructions: [
      "Lie on your back with your legs extended.",
      "Bend your right knee and bring it across your body to the left side.",
      "Extend your right arm to the side and keep your shoulders flat on the ground.",
      "Gently press your right knee down with your left hand for a deeper stretch.",
      "Hold the position for 20-30 seconds, feeling the stretch in your lower back and obliques.",
      "Return to the starting position and switch sides."
    ],
    focusAreas: [
      "Stretches the lower back and obliques.",
      "Improves spinal mobility and flexibility.",
      "Relieves tension and promotes relaxation."
    ],
    commonMistakes: [
      "Lifting the shoulders off the ground.",
      "Forcing the twist too much, causing discomfort.",
      "Not keeping the stretch controlled and relaxed."
    ],
    breathingTips: [
      "Inhale deeply before starting the twist.",
      "Exhale as you lower your knee and deepen the stretch.",
      "Breathe slowly and steadily throughout the hold."
    ]
  },

  {
    id: 9,
    name: "Spine Lumbar Twist Stretch Left",
    image: require("../assets/spine_left.gif"),
    instructions: [
      "Lie on your back with your legs extended.",
      "Bend your left knee and bring it across your body to the right side.",
      "Extend your left arm to the side and keep your shoulders flat on the ground.",
      "Gently press your left knee down with your right hand for a deeper stretch.",
      "Hold the position for 20-30 seconds, feeling the stretch in your lower back and obliques.",
      "Return to the starting position and switch sides."
    ],
    focusAreas: [
      "Stretches the lower back and obliques.",
      "Improves spinal mobility and flexibility.",
      "Relieves tension and promotes relaxation."
    ],
    commonMistakes: [
      "Lifting the shoulders off the ground.",
      "Forcing the twist too much, causing discomfort.",
      "Not keeping the stretch controlled and relaxed."
    ],
    breathingTips: [
      "Inhale deeply before starting the twist.",
      "Exhale as you lower your knee and deepen the stretch.",
      "Breathe slowly and steadily throughout the hold."
    ]
 }
]

export const AbsAdvanced:Exercise[] = [
  {
    id: 1,
    name: "Sit-Ups",
    image: require("../assets/situps.gif"),
    instructions: [
      "Lie on your back with your knees bent and feet flat on the floor.",
      "Place your hands behind your head or cross them over your chest.",
      "Engage your core and lift your upper body towards your knees.",
      "Lower yourself back down with control and repeat."
    ],
    focusAreas: [
      "Strengthens the abdominal muscles.",
      "Improves core stability.",
      "Enhances endurance and muscular definition."
    ],
    commonMistakes: [
      "Pulling on the neck with hands.",
      "Using momentum instead of core strength.",
      "Not controlling the descent."
    ],
    breathingTips: [
      "Exhale as you lift your body up.",
      "Inhale as you lower yourself down.",
      "Maintain steady and controlled breathing."
    ]
  },
  {
    id: 3,
    name: "V-Ups",
    image: require("../assets/v_ups.gif"),
    instructions: [
      "Lie flat on your back with your legs extended and arms stretched overhead.",
      "Engage your core and lift both your upper body and legs simultaneously.",
      "Reach your hands toward your toes, forming a 'V' shape with your body.",
      "Lower yourself back down with control and repeat."
    ],
    focusAreas: [
      "Targets the upper and lower abs.",
      "Improves core strength and stability.",
      "Enhances balance and coordination."
    ],
    commonMistakes: [
      "Bending the knees too much.",
      "Using momentum instead of core engagement.",
      "Not maintaining a straight back."
    ],
    breathingTips: [
      "Exhale as you lift your body into the 'V' position.",
      "Inhale as you lower yourself back down.",
      "Keep your breathing steady and controlled."
    ]
  }
  
  
]


