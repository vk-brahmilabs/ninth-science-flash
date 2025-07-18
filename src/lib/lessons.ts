export type Lesson = {
  id: string;
  title: string;
  description: string;
  content: string;
};

export const lessons: Lesson[] = [
  {
    id: 'matter-in-our-surroundings',
    title: 'Matter in Our Surroundings',
    description: 'Explore the physical nature of matter, states of matter, and changes in state.',
    content: `
      Matter is made up of particles. These particles are very small, have space between them, are continuously moving, and attract each other.
      The three states of matter are solid, liquid, and gas.
      Solids have a definite shape and volume. The particles in solids are tightly packed.
      Liquids have a definite volume but no definite shape. They take the shape of the container. The particles in liquids are less tightly packed than in solids.
      Gases have neither a definite shape nor a definite volume. They fill the entire container. The particles in gases are far apart and move randomly.
      Change of state can occur by changing temperature or pressure.
      Melting is the process where a solid changes to a liquid. The temperature at which this happens is the melting point.
      Boiling is the process where a liquid changes to a gas at a constant temperature called the boiling point.
      Evaporation is a surface phenomenon where liquid changes into vapor at any temperature below its boiling point. Factors affecting evaporation are surface area, temperature, humidity, and wind speed. Evaporation causes cooling.
      Sublimation is the change of state directly from solid to gas without changing into liquid state, or vice versa. Example: Camphor or ammonium chloride.
    `,
  },
  {
    id: 'the-fundamental-unit-of-life',
    title: 'The Fundamental Unit of Life',
    description: 'Learn about the cell as the basic unit of life, its structure, and organelles.',
    content: `
      The cell is the fundamental structural and functional unit of all living organisms.
      Robert Hooke discovered cells in 1665.
      Based on the presence or absence of a nuclear membrane, cells can be prokaryotic or eukaryotic.
      Prokaryotic cells lack a true nucleus and other membrane-bound organelles. They have a nucleoid region with genetic material. Example: Bacteria.
      Eukaryotic cells have a well-defined nucleus and membrane-bound organelles like mitochondria, endoplasmic reticulum, Golgi apparatus, lysosomes, and vacuoles. Examples: Plant and animal cells.
      Key differences between Plant and Animal cells:
      - Plant cells have a cell wall outside the cell membrane; animal cells do not.
      - Plant cells have chloroplasts for photosynthesis; animal cells do not.
      - Plant cells have a large central vacuole; animal cells have small, temporary vacuoles.
      The cell membrane is selectively permeable, controlling the entry and exit of substances.
      The nucleus contains chromosomes, which carry genes and control cellular activities.
      Mitochondria are the 'powerhouses' of the cell, generating energy in the form of ATP.
    `,
  },
  {
    id: 'motion',
    title: 'Motion',
    description: 'Understand the concepts of motion, distance, displacement, speed, velocity, and acceleration.',
    content: `
      Motion is the change in position of an object with time.
      Distance is the total path length covered by an object. It is a scalar quantity.
      Displacement is the shortest distance between the initial and final position of an object. It is a vector quantity.
      Speed is the rate of change of distance. Its SI unit is m/s. Speed = Distance / Time.
      Velocity is the rate of change of displacement. It is the speed of an object in a specific direction. Velocity = Displacement / Time.
      Acceleration is the rate of change of velocity. Its SI unit is m/s². a = (v-u)/t where v is final velocity, u is initial velocity, and t is time.
      Uniform motion is when an object travels equal distances in equal intervals of time. Non-uniform motion is when it travels unequal distances in equal intervals.
      The three equations of motion for an object moving with uniform acceleration are:
      1. v = u + at
      2. s = ut + (1/2)at²
      3. 2as = v² - u²
      Where 's' is the displacement.
    `,
  },
];
