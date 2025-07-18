'use server';

import {
  generateFlashcards as generateFlashcardsFlow,
  type GenerateFlashcardsInput,
  type GenerateFlashcardsOutput,
} from '@/ai/flows/generate-flashcards';

export type { GenerateFlashcardsInput, GenerateFlashcardsOutput };

export async function generateFlashcards(
  input: GenerateFlashcardsInput
): Promise<GenerateFlashcardsOutput> {
  return generateFlashcardsFlow(input);
}
