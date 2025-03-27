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
    image: require("../assets/site_bridges_left.gif"), 
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
    id: 2,
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
  },
  {
    id: 3,
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
    id: 4,
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
    id: 5,
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
    id: 6,
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
  },
  
  {
    id: 7,
    name: "Side Bridges Left",
    image: require("../assets/site_bridges_left.gif"), 
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
]


export const ArmBeginner:Exercise[]= [
  {
    id: 1,
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
 },
 {
  id: 2,
  name: "Arm Raises",
  image: require("../assets/arm_raises.gif"),
  instructions: [
    "Stand upright with your feet shoulder-width apart.",
    "Keep your arms straight and relaxed at your sides.",
    "Slowly raise both arms forward until they reach shoulder height.",
    "Lower them back down in a controlled motion.",
    "Repeat for the desired number of repetitions."
  ],
  focusAreas: [
    "Strengthens the shoulders and upper arms.",
    "Improves shoulder mobility and endurance.",
    "Enhances posture and upper body coordination."
  ],
  commonMistakes: [
    "Using momentum instead of controlled movements.",
    "Raising the arms too high or too low.",
    "Shrugging the shoulders instead of keeping them relaxed."
  ],
  breathingTips: [
    "Inhale before lifting your arms.",
    "Exhale as you raise them to shoulder height.",
    "Breathe steadily and avoid holding your breath."
  ]
},
{
  id: 3,
  name: "Side Arm Raises",
  image: require("../assets/side_arm_raises.gif"),
  instructions: [
    "Stand upright with your feet shoulder-width apart.",
    "Keep your arms straight and relaxed at your sides.",
    "Slowly raise both arms out to the sides until they reach shoulder height.",
    "Lower them back down in a controlled motion.",
    "Repeat for the desired number of repetitions."
  ],
  focusAreas: [
    "Strengthens the shoulders and upper arms.",
    "Improves shoulder mobility and endurance.",
    "Enhances posture and upper body coordination."
  ],
  commonMistakes: [
    "Using momentum instead of controlled movements.",
    "Raising the arms too high or too low.",
    "Shrugging the shoulders instead of keeping them relaxed."
  ],
  breathingTips: [
    "Inhale before lifting your arms.",
    "Exhale as you raise them to shoulder height.",
    "Breathe steadily and avoid holding your breath."
  ]
},

{
  id: 4,
  name: "Triceps Dips",
  image: require("../assets/triceps_dips.gif"),
  instructions: [
    "Sit on the edge of a stable chair or bench with your hands gripping the edge beside your hips.",
    "Slide your hips forward off the edge, keeping your legs bent at 90 degrees or extended straight for more challenge.",
    "Lower your body by bending your elbows until your upper arms are parallel to the floor.",
    "Push through your palms to extend your arms and return to the starting position.",
    "Repeat for the desired number of repetitions."
  ],
  focusAreas: [
    "Strengthens the triceps, shoulders, and chest.",
    "Improves upper body endurance and stability.",
    "Enhances arm definition and functional strength."
  ],
  commonMistakes: [
    "Letting the shoulders hunch forward.",
    "Lowering too far, causing strain on the shoulders.",
    "Using momentum instead of controlled movement."
  ],
  breathingTips: [
    "Inhale as you lower your body.",
    "Exhale as you push back up.",
    "Maintain steady and controlled breathing."
  ]
},
{
  id: 5,
  name: "Arm Circles (Clockwise)",
  image: require("../assets/arm_circles_clockwise.gif"),
  instructions: [
    "Stand upright with your feet shoulder-width apart.",
    "Extend your arms straight out to the sides at shoulder height.",
    "Slowly rotate your arms in small clockwise circles.",
    "Gradually increase the size of the circles for more intensity.",
    "Continue for the desired duration, then switch directions if needed."
  ],
  focusAreas: [
    "Strengthens the shoulders and upper arms.",
    "Improves shoulder mobility and endurance.",
    "Enhances flexibility and coordination in the upper body."
  ],
  commonMistakes: [
    "Moving too fast and using momentum instead of controlled movements.",
    "Letting the arms drop below shoulder height.",
    "Shrugging the shoulders instead of keeping them relaxed."
  ],
  breathingTips: [
    "Breathe steadily throughout the movement.",
    "Inhale as you begin the motion.",
    "Exhale as you complete each circular motion."
  ]
},
{
  id: 6,
  name: "Arm Circles (Counterclockwise)",
  image: require("../assets/arm_circles_counterclockwise.gif"),
  instructions: [
    "Stand upright with your feet shoulder-width apart.",
    "Extend your arms straight out to the sides at shoulder height.",
    "Slowly rotate your arms in small counterclockwise circles.",
    "Gradually increase the size of the circles for more intensity.",
    "Continue for the desired duration, then switch directions if needed."
  ],
  focusAreas: [
    "Strengthens the shoulders and upper arms.",
    "Improves shoulder mobility and endurance.",
    "Enhances flexibility and coordination in the upper body."
  ],
  commonMistakes: [
    "Moving too fast and using momentum instead of controlled movements.",
    "Letting the arms drop below shoulder height.",
    "Shrugging the shoulders instead of keeping them relaxed."
  ],
  breathingTips: [
    "Breathe steadily throughout the movement.",
    "Inhale as you begin the motion.",
    "Exhale as you complete each circular motion."
  ]
},
{
  id: 7,
  name: "Diamond Push-Ups",
  image: require("../assets/diamond_push_ups.gif"),
  instructions: [
    "Start in a high plank position with your hands close together, forming a diamond shape with your thumbs and index fingers.",
    "Keep your core engaged and your body in a straight line from head to heels.",
    "Lower your chest towards your hands by bending your elbows, keeping them close to your body.",
    "Push back up to the starting position by extending your arms.",
    "Repeat for the desired number of repetitions."
  ],
  focusAreas: [
    "Strengthens the triceps, chest, and shoulders.",
    "Engages the core for stability.",
    "Improves upper body endurance and definition."
  ],
  commonMistakes: [
    "Letting the elbows flare out too much.",
    "Arching or sagging the lower back.",
    "Not going low enough for a full range of motion."
  ],
  breathingTips: [
    "Inhale as you lower your body.",
    "Exhale as you push back up.",
    "Maintain a steady breathing rhythm throughout."
  ]
},
{
  id: 8,
  name: "Chest Press Pulse",
  image: require("../assets/chest_press_pulse.gif"),
  instructions: [
    "Lie on your back with your knees bent and feet flat on the floor (or on a bench if using weights).",
    "Hold a pair of dumbbells or use body weight by pressing your palms together at chest level.",
    "Press the weights or hands upward until your arms are fully extended.",
    "Lower them slightly and pulse up and down in small, controlled movements.",
    "Continue pulsing for the desired duration or number of reps, then return to the starting position."
  ],
  focusAreas: [
    "Strengthens the chest, shoulders, and triceps.",
    "Enhances muscular endurance with continuous tension.",
    "Improves control and stability in the upper body."
  ],
  commonMistakes: [
    "Using momentum instead of controlled movements.",
    "Arching the lower back instead of keeping it flat.",
    "Dropping the arms too low, reducing tension on the chest."
  ],
  breathingTips: [
    "Inhale as you lower slightly.",
    "Exhale as you pulse upward.",
    "Maintain steady, controlled breathing throughout."
  ]
},
{
  id: 9,
  name: "Leg Barbell Curl (Right Leg)",
  image: require("../assets/leg_barbell_curl_right.gif"),
  instructions: [
    "Stand upright with your feet shoulder-width apart, holding a barbell with both hands in an underhand grip.",
    "Shift your weight onto your left leg and slightly bend your knee for balance.",
    "Slowly curl your right leg backward, bringing your heel toward your glutes.",
    "Hold the contraction for a moment, then lower your leg back to the starting position in a controlled motion.",
    "Repeat for the desired number of repetitions before switching legs."
  ],
  focusAreas: [
    "Strengthens the hamstrings and calves.",
    "Improves lower body stability and balance.",
    "Enhances leg muscle endurance and control."
  ],
  commonMistakes: [
    "Swinging the leg too fast instead of using controlled movements.",
    "Leaning too far forward or backward, losing balance.",
    "Not engaging the hamstrings properly during the curl."
  ],
  breathingTips: [
    "Inhale as you lower your leg.",
    "Exhale as you curl your leg upward.",
    "Maintain a steady breathing pattern throughout the movement."
  ]
},
{
  id: 10,
  name: "Diagonal Plank",
  image: require("../assets/diagonal_plank.gif"),
  instructions: [
    "Start in a high plank position with your hands shoulder-width apart and your body in a straight line from head to heels.",
    "Extend your right arm forward and your left leg backward simultaneously, keeping them aligned with your torso.",
    "Hold this position for a few seconds while engaging your core and maintaining balance.",
    "Lower your arm and leg back to the starting position.",
    "Repeat on the opposite side, extending your left arm and right leg.",
    "Continue alternating sides for the desired duration or repetitions."
  ],
  focusAreas: [
    "Strengthens the core, shoulders, and glutes.",
    "Improves balance, stability, and coordination.",
    "Engages multiple muscle groups for full-body control."
  ],
  commonMistakes: [
    "Letting the hips sag or rise too high.",
    "Losing control and moving too quickly.",
    "Not engaging the core properly, leading to instability."
  ],
  breathingTips: [
    "Inhale as you prepare to lift your arm and leg.",
    "Exhale as you extend them into position.",
    "Breathe steadily to maintain stability and endurance."
  ]
},
{
  id: 11,
  name: "Punches",
  image: require("../assets/punches.gif"),
  instructions: [
    "Stand with your feet shoulder-widzth apart and knees slightly bent.",
    "Hold your fists up near your chin in a guard position.",
    "Extend one arm forward in a punching motion, rotating your torso slightly.",
    "Quickly retract your arm while simultaneously extending the other arm for the next punch.",
    "Continue alternating punches in a controlled and rhythmic manner for the desired duration."
  ],
  focusAreas: [
    "Strengthens the arms, shoulders, and core.",
    "Improves cardiovascular endurance and agility.",
    "Enhances coordination and reaction speed."
  ],
  commonMistakes: [
    "Locking the elbows when punching.",
    "Not engaging the core, reducing power and control.",
    "Punching too fast without proper form, leading to sloppy movements."
  ],
  breathingTips: [
    "Exhale with each punch for better power and control.",
    "Inhale between punches to maintain a steady rhythm.",
    "Avoid holding your breath to prevent early fatigue."
  ]
},
{
  id: 12,
  name: "Push-Ups",
  image: require("../assets/push_ups.gif"),
  instructions: [
    "Start in a high plank position with your hands slightly wider than shoulder-width apart and your body in a straight line from head to heels.",
    "Engage your core and keep your elbows slightly tucked in.",
    "Lower your chest toward the floor by bending your elbows while keeping your body straight.",
    "Push back up to the starting position by extending your arms fully.",
    "Repeat for the desired number of repetitions."
  ],
  focusAreas: [
    "Strengthens the chest, shoulders, and triceps.",
    "Engages the core and improves overall stability.",
    "Enhances upper body endurance and functional strength."
  ],
  commonMistakes: [
    "Letting the hips sag or rise too high.",
    "Flaring the elbows out too much, straining the shoulders.",
    "Not going low enough for a full range of motion."
  ],
  breathingTips: [
    "Inhale as you lower your body.",
    "Exhale as you push back up.",
    "Maintain steady breathing to avoid early fatigue."
  ]
},
{
  id: 13,
  name: "Inchworms",
  image: require("../assets/inchworms.gif"),
  instructions: [
    "Stand tall with your feet hip-width apart and your arms relaxed at your sides.",
    "Hinge at your hips and reach your hands toward the floor, keeping your legs as straight as possible.",
    "Walk your hands forward until you reach a high plank position with your body in a straight line.",
    "Hold the plank briefly, engaging your core and keeping your shoulders aligned over your wrists.",
    "Walk your hands back toward your feet and return to a standing position.",
    "Repeat for the desired number of repetitions."
  ],
  focusAreas: [
    "Strengthens the core, shoulders, and arms.",
    "Improves flexibility in the hamstrings and lower back.",
    "Enhances overall mobility and coordination."
  ],
  commonMistakes: [
    "Bending the knees too much while reaching down.",
    "Letting the hips sag in the plank position.",
    "Rushing through the movement instead of maintaining control."
  ],
  breathingTips: [
    "Inhale as you bend forward and walk your hands out.",
    "Exhale as you return to a standing position.",
    "Maintain steady breathing throughout the movement."
  ]
},
{
  id: 14,
  name: "Wall Push-Ups",
  image: require("../assets/wall.gif"),
  instructions: [
    "Stand facing a wall with your feet hip-width apart, about arm's length away.",
    "Place your palms flat against the wall at shoulder height and slightly wider than shoulder-width apart.",
    "Keep your body straight and engage your core as you slowly bend your elbows, bringing your chest closer to the wall.",
    "Pause for a moment, then push yourself back to the starting position by extending your arms.",
    "Repeat for the desired number of repetitions."
  ],
  focusAreas: [
    "Strengthens the chest, shoulders, and triceps.",
    "Engages the core and improves upper body endurance.",
    "Great for beginners or those recovering from injuries."
  ],
  commonMistakes: [
    "Letting the hips sag or sticking them out.",
    "Placing hands too high or too low, causing improper form.",
    "Moving too fast and using momentum instead of controlled movements."
  ],
  breathingTips: [
    "Inhale as you lower yourself toward the wall.",
    "Exhale as you push back to the starting position.",
    "Maintain a steady breathing rhythm throughout the exercise."
  ]
},
{
  id: 15,
  name: "Triceps Stretch (Left Arm)",
  image: require("../assets/triceps_stretch_left.gif"),
  instructions: [
    "Stand or sit upright with your feet hip-width apart.",
    "Raise your left arm overhead and bend your elbow, bringing your left hand toward the middle of your back.",
    "Use your right hand to gently push your left elbow back and downward for a deeper stretch.",
    "Hold the stretch for 20-30 seconds while keeping your back straight.",
    "Release and switch to the right arm if needed."
  ],
  focusAreas: [
    "Stretches the triceps and shoulders.",
    "Improves flexibility and range of motion in the arms.",
    "Helps relieve muscle tension and stiffness."
  ],
  commonMistakes: [
    "Arching the back instead of keeping it straight.",
    "Overstretching, causing discomfort or pain.",
    "Tilting the head forward instead of keeping it aligned with the spine."
  ],
  breathingTips: [
    "Inhale deeply before starting the stretch.",
    "Exhale slowly as you deepen the stretch.",
    "Maintain slow, steady breathing to enhance relaxation."
  ]
},
{
  id: 16,
  name: "Standing Biceps Stretch",
  image: require("../assets/standing_biceps_stretch_left.gif"),
  instructions: [
    "Stand upright with your feet shoulder-width apart.",
    "Extend both arms behind you and interlace your fingers with your palms facing downward.",
    "Slowly lift your arms upward while keeping them straight, feeling a stretch in your biceps and shoulders.",
    "Hold the stretch for 20-30 seconds while keeping your chest open.",
    "Release and return to the starting position."
  ],
  focusAreas: [
    "Stretches the biceps, shoulders, and chest.",
    "Improves upper body flexibility and posture.",
    "Helps relieve muscle tightness after upper body workouts."
  ],
  commonMistakes: [
    "Hunching the shoulders instead of keeping them relaxed.",
    "Bending the elbows instead of keeping the arms straight.",
    "Lifting the arms too high, causing discomfort."
  ],
  breathingTips: [
    "Inhale deeply before lifting your arms.",
    "Exhale slowly as you deepen the stretch.",
    "Maintain steady breathing to enhance relaxation."
  ]
},
{
  id: 17,
  name: "Standing Biceps Stretch (Right Arm)",
  image: require("../assets/standing_biceps_stretch_right.gif"),
  instructions: [
    "Stand upright with your feet shoulder-width apart.",
    "Extend your right arm straight out to the side at shoulder height, palm facing forward.",
    "Place your left hand on a wall or behind your back for support.",
    "Slowly rotate your body to the left until you feel a stretch in your right biceps and shoulder.",
    "Hold the stretch for 20-30 seconds, keeping your posture upright.",
    "Release and switch to the other arm if needed."
  ],
  focusAreas: [
    "Stretches the biceps, shoulders, and chest.",
    "Improves upper body flexibility and mobility.",
    "Helps relieve tightness from strength training or prolonged sitting."
  ],
  commonMistakes: [
    "Shrugging the shoulders instead of keeping them relaxed.",
    "Bending the arm instead of keeping it straight.",
    "Twisting too forcefully, causing discomfort."
  ],
  breathingTips: [
    "Inhale deeply before starting the stretch.",
    "Exhale as you rotate slightly to deepen the stretch.",
    "Maintain steady, controlled breathing for better relaxation."
  ]
}
]

export const ArmIntermedidate:Exercise[] =[

  {
    id: 1,
    name: "Arm Circles (Clockwise)",
    image: require("../assets/arm_circles_clockwise.gif"),
    instructions: [
      "Stand upright with your feet shoulder-width apart.",
      "Extend your arms straight out to the sides at shoulder height.",
      "Slowly rotate your arms in small clockwise circles.",
      "Gradually increase the size of the circles for more intensity.",
      "Continue for the desired duration, then switch directions if needed."
    ],
    focusAreas: [
      "Strengthens the shoulders and upper arms.",
      "Improves shoulder mobility and endurance.",
      "Enhances flexibility and coordination in the upper body."
    ],
    commonMistakes: [
      "Moving too fast and using momentum instead of controlled movements.",
      "Letting the arms drop below shoulder height.",
      "Shrugging the shoulders instead of keeping them relaxed."
    ],
    breathingTips: [
      "Breathe steadily throughout the movement.",
      "Inhale as you begin the motion.",
      "Exhale as you complete each circular motion."
    ]
  },
  {
    id: 2,
    name: "Arm Circles (Counterclockwise)",
    image: require("../assets/arm_circles_counterclockwise.gif"),
    instructions: [
      "Stand upright with your feet shoulder-width apart.",
      "Extend your arms straight out to the sides at shoulder height.",
      "Slowly rotate your arms in small counterclockwise circles.",
      "Gradually increase the size of the circles for more intensity.",
      "Continue for the desired duration, then switch directions if needed."
    ],
    focusAreas: [
      "Strengthens the shoulders and upper arms.",
      "Improves shoulder mobility and endurance.",
      "Enhances flexibility and coordination in the upper body."
    ],
    commonMistakes: [
      "Moving too fast and using momentum instead of controlled movements.",
      "Letting the arms drop below shoulder height.",
      "Shrugging the shoulders instead of keeping them relaxed."
    ],
    breathingTips: [
      "Breathe steadily throughout the movement.",
      "Inhale as you begin the motion.",
      "Exhale as you complete each circular motion."
    ]
  },
  {
    "id": 3,
    "name": "Floor Tricep Dips",
    "image": require("../assets/floor_tricep_dips.gif"),
    "instructions": [
      "Sit on the floor with your knees bent and feet flat on the ground.",
      "Place your hands behind you, fingers pointing forward, shoulder-width apart.",
      "Press into your palms and lift your hips slightly off the ground.",
      "Lower your body by bending your elbows until your arms are at a 90-degree angle.",
      "Push through your palms to return to the starting position.",
      "Repeat for the desired number of reps."
    ],
    "focusAreas": [
      "Strengthens the triceps, shoulders, and chest.",
      "Improves upper body endurance.",
      "Enhances arm and shoulder stability."
    ],
    "commonMistakes": [
      "Letting elbows flare out instead of keeping them close to the body.",
      "Dropping the hips too low instead of focusing on arm movement.",
      "Locking the elbows at the top of the movement."
    ],
    "breathingTips": [
      "Inhale as you lower your body down.",
      "Exhale as you push yourself back up.",
      "Maintain steady breathing throughout the movement."
    ]
  },
  {
    "id": 4,
    "name": "Military Push-Ups",
    "image": require("../assets/military_push_ups.gif"),
    "instructions": [
      "Start in a high plank position with your hands directly under your shoulders.",
      "Keep your body in a straight line from head to heels, engaging your core.",
      "Lower your body by bending your elbows, keeping them close to your torso.",
      "Go down until your chest is just above the ground, maintaining a controlled motion.",
      "Push through your palms to return to the starting position.",
      "Repeat for the desired number of reps."
    ],
    "focusAreas": [
      "Strengthens the triceps, chest, and shoulders.",
      "Enhances core stability and overall upper body endurance.",
      "Improves posture and functional strength."
    ],
    "commonMistakes": [
      "Letting elbows flare out instead of keeping them close to the body.",
      "Dropping the hips or arching the back, causing poor form.",
      "Not going low enough or rushing through the reps."
    ],
    "breathingTips": [
      "Inhale as you lower your body down.",
      "Exhale as you push yourself back up.",
      "Maintain steady and controlled breathing throughout the movement."
    ]
  },
  {
    "id": 5,
    "name": "Alternative Hooks",
    "image": require("../assets/alternative_hooks.gif"),
    "instructions": [
      "Stand with your feet shoulder-width apart and slightly bend your knees.",
      "Hold your fists near your chin in a boxing stance.",
      "Twist your torso and throw a hook punch with your right arm, keeping your elbow at a 90-degree angle.",
      "Return to the starting position and immediately throw a hook punch with your left arm.",
      "Continue alternating hooks in a controlled and powerful motion.",
      "Maintain a steady pace and engage your core throughout the movement."
    ],
    "focusAreas": [
      "Strengthens the shoulders, arms, and core.",
      "Improves coordination and punching power.",
      "Enhances cardiovascular endurance and agility."
    ],
    "commonMistakes": [
      "Throwing wild punches without control.",
      "Not rotating the hips and torso for full power.",
      "Dropping the guard after each punch instead of keeping hands up."
    ],
    "breathingTips": [
      "Exhale sharply with each punch for more power.",
      "Inhale as you return to the starting position.",
      "Maintain steady breathing to keep up endurance."
    ]
  },
  {
    "id": 6,
    "name": "Push-Up Rotation",
    "image": require("../assets/push_up_rotation.gif"),
    "instructions": [
      "Start in a high plank position with your hands directly under your shoulders.",
      "Lower your body into a push-up by bending your elbows, keeping your core engaged.",
      "Push back up to the starting position.",
      "Rotate your torso to the right and extend your right arm toward the ceiling, forming a side plank.",
      "Return to the starting position and repeat the movement, this time rotating to the left.",
      "Continue alternating sides with each push-up."
    ],
    "focusAreas": [
      "Strengthens the chest, shoulders, triceps, and core.",
      "Improves balance, stability, and coordination.",
      "Engages the obliques and enhances rotational strength."
    ],
    "commonMistakes": [
      "Letting hips sag or rise too high, breaking form.",
      "Not fully extending the arm during the rotation.",
      "Rushing through the movement instead of maintaining control."
    ],
    "breathingTips": [
      "Inhale as you lower your body down.",
      "Exhale as you push back up and rotate.",
      "Maintain steady breathing throughout the movement."
    ]
  },
  {
    id: 9,
    name: "Leg Barbell Curl (Right Leg)",
    image: require("../assets/leg_barbell_curl_right.gif"),
    instructions: [
      "Stand upright with your feet shoulder-width apart, holding a barbell with both hands in an underhand grip.",
      "Shift your weight onto your left leg and slightly bend your knee for balance.",
      "Slowly curl your right leg backward, bringing your heel toward your glutes.",
      "Hold the contraction for a moment, then lower your leg back to the starting position in a controlled motion.",
      "Repeat for the desired number of repetitions before switching legs."
    ],
    focusAreas: [
      "Strengthens the hamstrings and calves.",
      "Improves lower body stability and balance.",
      "Enhances leg muscle endurance and control."
    ],
    commonMistakes: [
      "Swinging the leg too fast instead of using controlled movements.",
      "Leaning too far forward or backward, losing balance.",
      "Not engaging the hamstrings properly during the curl."
    ],
    breathingTips: [
      "Inhale as you lower your leg.",
      "Exhale as you curl your leg upward.",
      "Maintain a steady breathing pattern throughout the movement."
    ]
  },

  {
    id: 10,
    name: "Push-Ups",
    image: require("../assets/push_ups.gif"),
    instructions: [
      "Start in a high plank position with your hands slightly wider than shoulder-width apart and your body in a straight line from head to heels.",
      "Engage your core and keep your elbows slightly tucked in.",
      "Lower your chest toward the floor by bending your elbows while keeping your body straight.",
      "Push back up to the starting position by extending your arms fully.",
      "Repeat for the desired number of repetitions."
    ],
    focusAreas: [
      "Strengthens the chest, shoulders, and triceps.",
      "Engages the core and improves overall stability.",
      "Enhances upper body endurance and functional strength."
    ],
    commonMistakes: [
      "Letting the hips sag or rise too high.",
      "Flaring the elbows out too much, straining the shoulders.",
      "Not going low enough for a full range of motion."
    ],
    breathingTips: [
      "Inhale as you lower your body.",
      "Exhale as you push back up.",
      "Maintain steady breathing to avoid early fatigue."
    ]
  },
  {
    "id": 11,
    "name": "Burpees",
    "image": require("../assets/burpees.gif"),
    "instructions": [
      "Stand upright with your feet shoulder-width apart.",
      "Lower your body into a squat position and place your hands on the ground.",
      "Kick your feet back into a high plank position.",
      "Perform a push-up by lowering your chest to the floor and pushing back up.",
      "Jump your feet forward to return to the squat position.",
      "Explosively jump up, reaching your arms overhead.",
      "Land softly and immediately go into the next rep."
    ],
    "focusAreas": [
      "Engages the full body, including chest, arms, legs, and core.",
      "Boosts cardiovascular endurance and explosive power.",
      "Improves agility, coordination, and functional strength."
    ],
    "commonMistakes": [
      "Not performing a full push-up, reducing effectiveness.",
      "Letting the hips sag during the plank position.",
      "Landing too hard after the jump, increasing impact on joints."
    ],
    "breathingTips": [
      "Inhale as you lower into the squat and kick back.",
      "Exhale as you push up and jump forward.",
      "Maintain a steady rhythm to avoid gasping for air."
    ]
  },
  {
    "id": 12,
    "name": "Arm Scissors",
    "image": require("../assets/arm_scissors.gif"),
    "instructions": [
      "Stand upright with your feet shoulder-width apart.",
      "Extend both arms straight out to the sides at shoulder height.",
      "Cross your arms in front of your chest, overlapping them like scissors.",
      "Quickly return to the starting position and repeat the movement, alternating which arm is on top.",
      "Maintain a steady pace and engage your shoulders throughout the exercise.",
      "Continue for the desired duration or number of repetitions."
    ],
    "focusAreas": [
      "Strengthens the shoulders, chest, and upper arms.",
      "Improves arm mobility and endurance.",
      "Enhances flexibility and coordination."
    ],
    "commonMistakes": [
      "Dropping the arms below shoulder height.",
      "Moving too fast and using momentum instead of controlled movement.",
      "Not fully extending the arms during the motion."
    ],
    "breathingTips": [
      "Breathe steadily throughout the movement.",
      "Inhale as you open your arms.",
      "Exhale as you cross your arms in front of your chest."
    ]
  },
  {
    "id": 13,
    "name": "Skipping Without Rope",
    "image": require("../assets/skipping_without_rope.gif"),
    "instructions": [
      "Stand upright with your feet close together and arms at your sides.",
      "Bend your elbows and position your hands as if holding a jump rope.",
      "Jump lightly off the ground, keeping your knees slightly bent.",
      "Rotate your wrists in a circular motion as if swinging an imaginary rope.",
      "Land softly on the balls of your feet and immediately jump again.",
      "Maintain a steady rhythm and continue for the desired duration."
    ],
    "focusAreas": [
      "Improves cardiovascular endurance and coordination.",
      "Strengthens the calves, legs, and core muscles.",
      "Enhances agility, balance, and footwork."
    ],
    "commonMistakes": [
      "Jumping too high, which can cause unnecessary impact on joints.",
      "Not using arm movements, reducing the effectiveness of the exercise.",
      "Landing too hard instead of keeping it light and controlled."
    ],
    "breathingTips": [
      "Breathe in a steady rhythm to maintain endurance.",
      "Inhale through the nose and exhale through the mouth.",
      "Avoid holding your breath while jumping."
    ]
  }
  
  
  
  

]
export const ArmAdvanced:Exercise[] =[

  {
    id: 1,
    name: "Arm Circles (Clockwise)",
    image: require("../assets/arm_circles_clockwise.gif"),
    instructions: [
      "Stand upright with your feet shoulder-width apart.",
      "Extend your arms straight out to the sides at shoulder height.",
      "Slowly rotate your arms in small clockwise circles.",
      "Gradually increase the size of the circles for more intensity.",
      "Continue for the desired duration, then switch directions if needed."
    ],
    focusAreas: [
      "Strengthens the shoulders and upper arms.",
      "Improves shoulder mobility and endurance.",
      "Enhances flexibility and coordination in the upper body."
    ],
    commonMistakes: [
      "Moving too fast and using momentum instead of controlled movements.",
      "Letting the arms drop below shoulder height.",
      "Shrugging the shoulders instead of keeping them relaxed."
    ],
    breathingTips: [
      "Breathe steadily throughout the movement.",
      "Inhale as you begin the motion.",
      "Exhale as you complete each circular motion."
    ]
  },
  {
    id: 2,
    name: "Arm Circles (Counterclockwise)",
    image: require("../assets/arm_circles_counterclockwise.gif"),
    instructions: [
      "Stand upright with your feet shoulder-width apart.",
      "Extend your arms straight out to the sides at shoulder height.",
      "Slowly rotate your arms in small counterclockwise circles.",
      "Gradually increase the size of the circles for more intensity.",
      "Continue for the desired duration, then switch directions if needed."
    ],
    focusAreas: [
      "Strengthens the shoulders and upper arms.",
      "Improves shoulder mobility and endurance.",
      "Enhances flexibility and coordination in the upper body."
    ],
    commonMistakes: [
      "Moving too fast and using momentum instead of controlled movements.",
      "Letting the arms drop below shoulder height.",
      "Shrugging the shoulders instead of keeping them relaxed."
    ],
    breathingTips: [
      "Breathe steadily throughout the movement.",
      "Inhale as you begin the motion.",
      "Exhale as you complete each circular motion."
    ]
  },
  {
    "id": 3,
    "name": "Skipping Without Rope",
    "image": require("../assets/skipping_without_rope.gif"),
    "instructions": [
      "Stand upright with your feet close together and arms at your sides.",
      "Bend your elbows and position your hands as if holding a jump rope.",
      "Jump lightly off the ground, keeping your knees slightly bent.",
      "Rotate your wrists in a circular motion as if swinging an imaginary rope.",
      "Land softly on the balls of your feet and immediately jump again.",
      "Maintain a steady rhythm and continue for the desired duration."
    ],
    "focusAreas": [
      "Improves cardiovascular endurance and coordination.",
      "Strengthens the calves, legs, and core muscles.",
      "Enhances agility, balance, and footwork."
    ],
    "commonMistakes": [
      "Jumping too high, which can cause unnecessary impact on joints.",
      "Not using arm movements, reducing the effectiveness of the exercise.",
      "Landing too hard instead of keeping it light and controlled."
    ],
    "breathingTips": [
      "Breathe in a steady rhythm to maintain endurance.",
      "Inhale through the nose and exhale through the mouth.",
      "Avoid holding your breath while jumping."
    ]
  },
  {
    id: 9,
    name: "Leg Barbell Curl (Right Leg)",
    image: require("../assets/leg_barbell_curl_right.gif"),
    instructions: [
      "Stand upright with your feet shoulder-width apart, holding a barbell with both hands in an underhand grip.",
      "Shift your weight onto your left leg and slightly bend your knee for balance.",
      "Slowly curl your right leg backward, bringing your heel toward your glutes.",
      "Hold the contraction for a moment, then lower your leg back to the starting position in a controlled motion.",
      "Repeat for the desired number of repetitions before switching legs."
    ],
    focusAreas: [
      "Strengthens the hamstrings and calves.",
      "Improves lower body stability and balance.",
      "Enhances leg muscle endurance and control."
    ],
    commonMistakes: [
      "Swinging the leg too fast instead of using controlled movements.",
      "Leaning too far forward or backward, losing balance.",
      "Not engaging the hamstrings properly during the curl."
    ],
    breathingTips: [
      "Inhale as you lower your leg.",
      "Exhale as you curl your leg upward.",
      "Maintain a steady breathing pattern throughout the movement."
    ]
  },
  {
    "id": 11,
    "name": "Burpees",
    "image": require("../assets/burpees.gif"),
    "instructions": [
      "Stand upright with your feet shoulder-width apart.",
      "Lower your body into a squat position and place your hands on the ground.",
      "Kick your feet back into a high plank position.",
      "Perform a push-up by lowering your chest to the floor and pushing back up.",
      "Jump your feet forward to return to the squat position.",
      "Explosively jump up, reaching your arms overhead.",
      "Land softly and immediately go into the next rep."
    ],
    "focusAreas": [
      "Engages the full body, including chest, arms, legs, and core.",
      "Boosts cardiovascular endurance and explosive power.",
      "Improves agility, coordination, and functional strength."
    ],
    "commonMistakes": [
      "Not performing a full push-up, reducing effectiveness.",
      "Letting the hips sag during the plank position.",
      "Landing too hard after the jump, increasing impact on joints."
    ],
    "breathingTips": [
      "Inhale as you lower into the squat and kick back.",
      "Exhale as you push up and jump forward.",
      "Maintain a steady rhythm to avoid gasping for air."
    ]
  },
  {
    "id": 12,
    "name": "Arm Curls Crunch Left",
    "image": require("../assets/arm_curls_crunch_left.gif"),
    "instructions": [
      "Lie on your left side with your legs stacked and knees slightly bent.",
      "Place your right hand behind your head and your left arm on the floor for support.",
      "Crunch your upper body by bringing your right elbow towards your right knee.",
      "Engage your core and squeeze your obliques during the movement.",
      "Slowly return to the starting position and repeat for the desired reps."
    ],
    "focusAreas": [
      "Strengthens obliques and core muscles.",
      "Enhances abdominal definition and stability.",
      "Improves flexibility and side-body engagement."
    ],
    "commonMistakes": [
      "Using momentum instead of engaging core muscles.",
      "Pulling the neck with the hand instead of using core strength.",
      "Not fully extending the body back to the starting position."
    ],
    "breathingTips": [
      "Exhale as you crunch up.",
      "Inhale as you return to the starting position.",
      "Maintain steady breathing to avoid fatigue."
    ]
},
{
  "id": 13,
  "name": "Arm Curls Crunch Right",
  "image": require("../assets/arm_curls_crunch_right.gif"),
  "instructions": [
    "Lie on your right side with your legs stacked and knees slightly bent.",
    "Place your left hand behind your head and your right arm on the floor for support.",
    "Crunch your upper body by bringing your left elbow towards your left knee.",
    "Engage your core and squeeze your obliques during the movement.",
    "Slowly return to the starting position and repeat for the desired reps."
  ],
  "focusAreas": [
    "Strengthens obliques and core muscles.",
    "Enhances abdominal definition and stability.",
    "Improves flexibility and side-body engagement."
  ],
  "commonMistakes": [
    "Using momentum instead of engaging core muscles.",
    "Pulling the neck with the hand instead of using core strength.",
    "Not fully extending the body back to the starting position."
  ],
  "breathingTips": [
    "Exhale as you crunch up.",
    "Inhale as you return to the starting position.",
    "Maintain steady breathing to avoid fatigue."
  ]
}
    
]

export const  ChestBeginner:Exercise[] =[

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
    name: "Incline Push-ups",
    image: require("../assets/incline_push_ups.gif"),
    instructions: [
      "Place your hands on an elevated surface (bench, step, or wall) shoulder-width apart.",
      "Step your feet back until your body forms a straight line from head to heels.",
      "Lower your chest towards the surface by bending your elbows.",
      "Push back up to the starting position, fully extending your arms.",
      "Repeat while maintaining proper form."
    ],
    focusAreas: [
      "Targets the lower chest, shoulders, and triceps.",
      "Engages the core for stability.",
      "Reduces strain on the shoulders compared to standard push-ups."
    ],
    commonMistakes: [
      "Letting hips sag or rise too high, reducing effectiveness.",
      "Placing hands too far apart, straining the shoulders.",
      "Not lowering the chest fully, limiting range of motion."
    ],
    breathingTips: [
      "Inhale as you lower your chest towards the surface.",
      "Exhale as you push back up to the starting position.",
      "Keep a steady breathing rhythm for endurance."
    ]
  },
  {
    id: 2,
    name: "Push-Ups",
    image: require("../assets/push_ups.gif"),
    instructions: [
      "Start in a high plank position with your hands slightly wider than shoulder-width apart and your body in a straight line from head to heels.",
      "Engage your core and keep your elbows slightly tucked in.",
      "Lower your chest toward the floor by bending your elbows while keeping your body straight.",
      "Push back up to the starting position by extending your arms fully.",
      "Repeat for the desired number of repetitions."
    ],
    focusAreas: [
      "Strengthens the chest, shoulders, and triceps.",
      "Engages the core and improves overall stability.",
      "Enhances upper body endurance and functional strength."
    ],
    commonMistakes: [
      "Letting the hips sag or rise too high.",
      "Flaring the elbows out too much, straining the shoulders.",
      "Not going low enough for a full range of motion."
    ],
    breathingTips: [
      "Inhale as you lower your body.",
      "Exhale as you push back up.",
      "Maintain steady breathing to avoid early fatigue."
    ]
  },
  {
    id: 3,
    name: "Wide Arm Push-Ups",
    image: require("../assets/wide_arm_push_ups.gif"),
    instructions: [
      "Start in a high plank position with your hands placed wider than shoulder-width apart.",
      "Engage your core and keep your body in a straight line from head to heels.",
      "Lower your chest toward the floor by bending your elbows outward.",
      "Push back up to the starting position by fully extending your arms.",
      "Repeat for the desired number of repetitions."
    ],
    focusAreas: [
      "Targets the chest muscles more intensely.",
      "Engages the shoulders and triceps.",
      "Improves upper body strength and endurance."
    ],
    commonMistakes: [
      "Allowing the hips to sag or rise too high.",
      "Not maintaining a straight body posture.",
      "Failing to lower the chest enough for a full range of motion."
    ],
    breathingTips: [
      "Inhale as you lower your body.",
      "Exhale as you push back up.",
      "Keep a steady breathing rhythm to maintain endurance."
    ]
  },
  {
    id: 4,
    name: "Wide Arm Push-Ups",
    image: require("../assets/wide_arm_push_ups.gif"),
    instructions: [
      "Start in a high plank position with your hands placed wider than shoulder-width apart.",
      "Engage your core and keep your body in a straight line from head to heels.",
      "Lower your chest toward the floor by bending your elbows outward.",
      "Push back up to the starting position by fully extending your arms.",
      "Repeat for the desired number of repetitions."
    ],
    focusAreas: [
      "Targets the chest muscles more intensely.",
      "Engages the shoulders and triceps.",
      "Improves upper body strength and endurance."
    ],
    commonMistakes: [
      "Allowing the hips to sag or rise too high.",
      "Not maintaining a straight body posture.",
      "Failing to lower the chest enough for a full range of motion."
    ],
    breathingTips: [
      "Inhale as you lower your body.",
      "Exhale as you push back up.",
      "Keep a steady breathing rhythm to maintain endurance."
    ]
  },
  {
    id: 5,
    name: "Triceps Dips",
    image: require("../assets/triceps_dips.gif"),
    instructions: [
      "Sit on the edge of a stable chair or bench with your hands gripping the edge beside your hips.",
      "Slide your hips forward off the edge, keeping your legs bent at 90 degrees or extended straight for more challenge.",
      "Lower your body by bending your elbows until your upper arms are parallel to the floor.",
      "Push through your palms to extend your arms and return to the starting position.",
      "Repeat for the desired number of repetitions."
    ],
    focusAreas: [
      "Strengthens the triceps, shoulders, and chest.",
      "Improves upper body endurance and stability.",
      "Enhances arm definition and functional strength."
    ],
    commonMistakes: [
      "Letting the shoulders hunch forward.",
      "Lowering too far, causing strain on the shoulders.",
      "Using momentum instead of controlled movement."
    ],
    breathingTips: [
      "Inhale as you lower your body.",
      "Exhale as you push back up.",
      "Maintain steady and controlled breathing."
    ]
  },
  {
    id: 6,
    name: "Incline Push-ups",
    image: require("../assets/incline_push_ups.gif"),
    instructions: [
      "Place your hands on an elevated surface (bench, step, or wall) shoulder-width apart.",
      "Step your feet back until your body forms a straight line from head to heels.",
      "Lower your chest towards the surface by bending your elbows.",
      "Push back up to the starting position, fully extending your arms.",
      "Repeat while maintaining proper form."
    ],
    focusAreas: [
      "Targets the lower chest, shoulders, and triceps.",
      "Engages the core for stability.",
      "Reduces strain on the shoulders compared to standard push-ups."
    ],
    commonMistakes: [
      "Letting hips sag or rise too high, reducing effectiveness.",
      "Placing hands too far apart, straining the shoulders.",
      "Not lowering the chest fully, limiting range of motion."
    ],
    breathingTips: [
      "Inhale as you lower your chest towards the surface.",
      "Exhale as you push back up to the starting position.",
      "Keep a steady breathing rhythm for endurance."
    ]
  },
  {
    id: 7,
    name: "Knee Push-Ups",
    image: require("../assets/knee_push_ups.gif"),
    instructions: [
      "Start in a high plank position but lower your knees to the floor, keeping your body in a straight line from head to knees.",
      "Place your hands slightly wider than shoulder-width apart.",
      "Engage your core and lower your chest toward the floor by bending your elbows.",
      "Push back up to the starting position by fully extending your arms.",
      "Repeat for the desired number of repetitions."
    ],
    focusAreas: [
      "Strengthens the chest, shoulders, and triceps with reduced intensity.",
      "Engages the core while maintaining proper form.",
      "Ideal for beginners to build upper body strength."
    ],
    commonMistakes: [
      "Letting the hips sag or sticking them too high.",
      "Not maintaining a straight line from head to knees.",
      "Performing partial reps without a full range of motion."
    ],
    breathingTips: [
      "Inhale as you lower your body.",
      "Exhale as you push back up.",
      "Maintain a steady breathing pattern for better endurance."
    ]
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
    name: "Chest Stretch",
    image: require("../assets/chest_stretch.gif"),
    instructions: [
      "Stand tall or sit upright with your back straight.",
      "Extend your arms behind you and clasp your hands together.",
      "Gently lift your arms upward while opening your chest.",
      "Hold the stretch for 20-30 seconds while breathing deeply.",
      "Release and repeat as needed."
    ],
    focusAreas: [
      "Opens up the chest and shoulders.",
      "Improves posture and flexibility.",
      "Relieves tension from the upper body."
    ],
    commonMistakes: [
      "Arching the lower back excessively.",
      "Hunching the shoulders instead of opening the chest.",
      "Forcing the stretch too aggressively."
    ],
    breathingTips: [
      "Inhale deeply as you prepare for the stretch.",
      "Exhale slowly as you hold the stretch.",
      "Maintain a calm and steady breathing pattern."
    ]
  },  
]

export const ChestIntermediate:Exercise[] =[
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
    name: "Knee Push-Ups",
    image: require("../assets/knee_push_ups.gif"),
    instructions: [
      "Start in a high plank position but lower your knees to the floor, keeping your body in a straight line from head to knees.",
      "Place your hands slightly wider than shoulder-width apart.",
      "Engage your core and lower your chest toward the floor by bending your elbows.",
      "Push back up to the starting position by fully extending your arms.",
      "Repeat for the desired number of repetitions."
    ],
    focusAreas: [
      "Strengthens the chest, shoulders, and triceps with reduced intensity.",
      "Engages the core while maintaining proper form.",
      "Ideal for beginners to build upper body strength."
    ],
    commonMistakes: [
      "Letting the hips sag or sticking them too high.",
      "Not maintaining a straight line from head to knees.",
      "Performing partial reps without a full range of motion."
    ],
    breathingTips: [
      "Inhale as you lower your body.",
      "Exhale as you push back up.",
      "Maintain a steady breathing pattern for better endurance."
    ]
  },
  {
    id: 3,
    name: "Push-Ups",
    image: require("../assets/push_ups.gif"),
    instructions: [
      "Start in a high plank position with your hands slightly wider than shoulder-width apart and your body in a straight line from head to heels.",
      "Engage your core and keep your elbows slightly tucked in.",
      "Lower your chest toward the floor by bending your elbows while keeping your body straight.",
      "Push back up to the starting position by extending your arms fully.",
      "Repeat for the desired number of repetitions."
    ],
    focusAreas: [
      "Strengthens the chest, shoulders, and triceps.",
      "Engages the core and improves overall stability.",
      "Enhances upper body endurance and functional strength."
    ],
    commonMistakes: [
      "Letting the hips sag or rise too high.",
      "Flaring the elbows out too much, straining the shoulders.",
      "Not going low enough for a full range of motion."
    ],
    breathingTips: [
      "Inhale as you lower your body.",
      "Exhale as you push back up.",
      "Maintain steady breathing to avoid early fatigue."
    ]
  },
  {
    id: 4,
    name: "Wide Arm Push-Ups",
    image: require("../assets/wide_arm_push_ups.gif"),
    instructions: [
      "Start in a high plank position with your hands placed wider than shoulder-width apart.",
      "Engage your core and keep your body in a straight line from head to heels.",
      "Lower your chest toward the floor by bending your elbows outward.",
      "Push back up to the starting position by fully extending your arms.",
      "Repeat for the desired number of repetitions."
    ],
    focusAreas: [
      "Targets the chest muscles more intensely.",
      "Engages the shoulders and triceps.",
      "Improves upper body strength and endurance."
    ],
    commonMistakes: [
      "Allowing the hips to sag or rise too high.",
      "Not maintaining a straight body posture.",
      "Failing to lower the chest enough for a full range of motion."
    ],
    breathingTips: [
      "Inhale as you lower your body.",
      "Exhale as you push back up.",
      "Keep a steady breathing rhythm to maintain endurance."
    ]
  },
  {
    id: 4,
    name: "Hindu Push-Ups",
    image: require("../assets/hindu_push_ups.gif"),
    instructions: [
      "Start in a downward dog position with your hands and feet shoulder-width apart, hips raised, and body forming an inverted V shape.",
      "Lower your head and chest forward in a scooping motion, bringing your chest close to the ground while keeping your elbows bent.",
      "As you move forward, arch your back and extend your arms to lift your upper body into an upward dog position.",
      "Reverse the movement by lifting your hips back up to the starting position.",
      "Repeat for the desired number of repetitions."
    ],
    focusAreas: [
      "Strengthens the chest, shoulders, triceps, and back.",
      "Improves flexibility and mobility in the spine and shoulders.",
      "Engages the core and enhances overall endurance."
    ],
    commonMistakes: [
      "Not maintaining a smooth, controlled motion.",
      "Dropping the hips too low, straining the lower back.",
      "Failing to engage the core for stability."
    ],
    breathingTips: [
      "Inhale as you lower your body forward.",
      "Exhale as you push up into the upward dog position.",
      "Maintain deep, steady breathing throughout the movement."
    ]
  },
  {
    id: 5,
    name: "Staggered Push-Ups",
    image: require("../assets/staggered_push_ups.gif"),
    instructions: [
      "Start in a high plank position with one hand placed slightly forward and the other hand slightly back.",
      "Engage your core and maintain a straight body posture from head to heels.",
      "Lower your chest toward the floor by bending your elbows while keeping your body aligned.",
      "Push back up to the starting position by extending your arms fully.",
      "Switch hand positions after each set and repeat for the desired number of repetitions."
    ],
    focusAreas: [
      "Targets the chest, shoulders, and triceps asymmetrically for balanced strength.",
      "Engages the core for stability and control.",
      "Improves coordination and upper body endurance."
    ],
    commonMistakes: [
      "Letting the hips sag or rise too high.",
      "Not maintaining a straight body posture.",
      "Failing to switch hand positions evenly."
    ],
    breathingTips: [
      "Inhale as you lower your body.",
      "Exhale as you push back up.",
      "Maintain steady breathing to sustain endurance."
    ]
  },
  {
    id: 6,
    name: "Knee Push-Ups",
    image: require("../assets/knee_push_ups.gif"),
    instructions: [
      "Start in a high plank position but lower your knees to the floor, keeping your body in a straight line from head to knees.",
      "Place your hands slightly wider than shoulder-width apart.",
      "Engage your core and lower your chest toward the floor by bending your elbows.",
      "Push back up to the starting position by fully extending your arms.",
      "Repeat for the desired number of repetitions."
    ],
    focusAreas: [
      "Strengthens the chest, shoulders, and triceps with reduced intensity.",
      "Engages the core while maintaining proper form.",
      "Ideal for beginners to build upper body strength."
    ],
    commonMistakes: [
      "Letting the hips sag or sticking them too high.",
      "Not maintaining a straight line from head to knees.",
      "Performing partial reps without a full range of motion."
    ],
    breathingTips: [
      "Inhale as you lower your body.",
      "Exhale as you push back up.",
      "Maintain a steady breathing pattern for better endurance."
    ]
  },
  {
    id: 7,
    name: "Shoulder Stretch",
    image: require("../assets/shoulder_stretch.gif"),
    instructions: [
      "Stand or sit upright with your back straight.",
      "Extend one arm across your chest at shoulder height.",
      "Use your opposite hand to gently pull the extended arm closer to your body.",
      "Hold the stretch for 20-30 seconds while keeping your shoulders relaxed.",
      "Switch arms and repeat the stretch."
    ],
    focusAreas: [
      "Stretches the shoulders and upper back.",
      "Improves flexibility and range of motion.",
      "Helps reduce muscle tension and stiffness."
    ],
    commonMistakes: [
      "Hunching the shoulders instead of keeping them relaxed.",
      "Holding the breath instead of breathing deeply.",
      "Pulling too forcefully, causing discomfort."
    ],
    breathingTips: [
      "Inhale deeply before starting the stretch.",
      "Exhale slowly as you hold the stretch.",
      "Maintain steady breathing for relaxation and effectiveness."
    ]
  },
  {
    id: 8,
    name: "Shoulder Stretch",
    image: require("../assets/shoulder_stretch.gif"),
    instructions: [
      "Stand or sit with a straight posture.",
      "Extend one arm across your chest at shoulder height.",
      "Use your opposite hand to gently pull the extended arm closer to your body.",
      "Hold the stretch for 20-30 seconds while keeping your shoulders relaxed.",
      "Switch arms and repeat."
    ],
    focusAreas: [
      "Loosens tight shoulder muscles.",
      "Improves flexibility and range of motion.",
      "Reduces muscle tension and stiffness."
    ],
    commonMistakes: [
      "Hunching the shoulders instead of keeping them relaxed.",
      "Pulling too forcefully, causing strain.",
      "Holding the breath instead of breathing deeply."
    ],
    breathingTips: [
      "Inhale deeply before starting the stretch.",
      "Exhale slowly as you hold the stretch.",
      "Maintain steady breathing for relaxation."
    ]
  },

    
]


export const ChestAdvanced:Exercise[] = [
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
] 



