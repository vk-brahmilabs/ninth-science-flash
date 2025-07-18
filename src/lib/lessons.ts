export type Lesson = {
  id: string;
  title: string;
  description: string;
  content: string; // Kept for potential future use, but not directly used for generation anymore.
};

export const lessons: Lesson[] = [
  {
    id: 'matter-in-our-surroundings',
    title: 'Matter in Our Surroundings',
    description:
      'Explore the physical nature of matter, states of matter, and changes in state.',
    content: ``,
  },
  {
    id: 'is-matter-around-us-pure',
    title: 'Is Matter Around Us Pure',
    description:
      'Understand the difference between pure substances and mixtures.',
    content: ``,
  },
  {
    id: 'atoms-and-molecules',
    title: 'Atoms and Molecules',
    description: 'Delve into the world of atoms, molecules, and the law of chemical combination.',
    content: ``,
  },
  {
    id: 'structure-of-the-atom',
    title: 'Structure of the Atom',
    description: 'Learn about the sub-atomic particles and the various models of an atom.',
    content: ``,
  },
  {
    id: 'the-fundamental-unit-of-life',
    title: 'The Fundamental Unit of Life',
    description:
      'Learn about the cell as the basic unit of life, its structure, and organelles.',
    content: ``,
  },
  {
    id: 'tissues',
    title: 'Tissues',
    description: 'Explore the different types of plant and animal tissues.',
    content: ``,
  },
  {
    id: 'motion',
    title: 'Motion',
    description:
      'Understand the concepts of motion, distance, displacement, speed, velocity, and acceleration.',
    content: ``,
  },
  {
    id: 'force-and-laws-of-motion',
    title: 'Force and Laws of Motion',
    description: `Discover Newton's three laws of motion and the concept of inertia and momentum.`,
    content: ``,
  },
  {
    id: 'gravitation',
    title: 'Gravitation',
    description: 'Learn about the universal law of gravitation, free fall, mass, and weight.',
    content: ``,
  },
];
