'use client';

import { useState, useEffect } from 'react';
import type { GenerateFlashcardsOutput } from '@/lib/actions';
import { Flashcard } from './flashcard';
import { Button } from './ui/button';
import { ChevronLeft, ChevronRight, RotateCcw } from 'lucide-react';
import { Progress } from './ui/progress';

interface FlashcardViewerProps {
  flashcards: GenerateFlashcardsOutput;
  onReset: () => void;
}

export function FlashcardViewer({ flashcards, onReset }: FlashcardViewerProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [key, setKey] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : flashcards.length - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev < flashcards.length - 1 ? prev + 1 : 0));
  };
  
  useEffect(() => {
    setKey(prev => prev + 1); // Force re-render of Flashcard to reset flip state
  }, [currentIndex]);


  const progressValue = ((currentIndex + 1) / flashcards.length) * 100;

  return (
    <div className="w-full flex flex-col items-center gap-6 md:gap-8">
      <Flashcard
        key={key}
        question={flashcards[currentIndex].question}
        answer={flashcards[currentIndex].answer}
      />

      <div className="w-full max-w-2xl px-4">
        <Progress value={progressValue} className="w-full h-2 bg-background rounded-full shadow-[inset_1px_1px_2px_#D1D9E6,inset_-1px_-1px_2px_#FFFFFF] dark:shadow-[inset_1px_1px_2px_#2c2c2c,inset_-1px_-1px_2px_#3a3a3a]" />
        <div className="flex justify-between items-center mt-2">
          <p className="text-sm font-medium text-muted-foreground">
            Card {currentIndex + 1} of {flashcards.length}
          </p>
        </div>
      </div>

      <div className="flex items-center justify-center gap-4">
        <Button
          onClick={goToPrevious}
          size="lg"
          variant="ghost"
          className="rounded-full p-4 h-auto w-auto transition-all duration-200 shadow-[3px_3px_6px_#d1d9e6,-3px_-3px_6px_#ffffff] dark:shadow-[3px_3px_6px_#2c2c2c,-3px_-3px_6px_#3a3a3a] active:shadow-[inset_3px_3px_6px_#d1d9e6,inset_-3px_-3px_6px_#ffffff] dark:active:shadow-[inset_3px_3px_6px_#2c2c2c,inset_-3px_-3px_6px_#3a3a3a]"
        >
          <ChevronLeft className="h-6 w-6" />
          <span className="sr-only">Previous Card</span>
        </Button>
        <Button
          onClick={goToNext}
          size="lg"
          variant="ghost"
          className="rounded-full p-4 h-auto w-auto transition-all duration-200 shadow-[3px_3px_6px_#d1d9e6,-3px_-3px_6px_#ffffff] dark:shadow-[3px_3px_6px_#2c2c2c,-3px_-3px_6px_#3a3a3a] active:shadow-[inset_3px_3px_6px_#d1d9e6,inset_-3px_-3px_6px_#ffffff] dark:active:shadow-[inset_3px_3px_6px_#2c2c2c,inset_-3px_-3px_6px_#3a3a3a]"
        >
          <ChevronRight className="h-6 w-6" />
          <span className="sr-only">Next Card</span>
        </Button>
      </div>
      <Button variant="link" onClick={onReset} className="mt-4 text-muted-foreground">
        <RotateCcw className="mr-2 h-4 w-4" />
        Generate New Cards
      </Button>
    </div>
  );
}
