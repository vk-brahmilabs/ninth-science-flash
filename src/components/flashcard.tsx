'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';
import { ScrollArea } from './ui/scroll-area';

interface FlashcardProps {
  question: string;
  answer: string;
}

export function Flashcard({ question, answer }: FlashcardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="group w-full max-w-2xl h-80 md:h-96 perspective-1000"
      onClick={() => setIsFlipped(!isFlipped)}
      role="button"
      tabIndex={0}
      aria-label="Flip card"
      onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setIsFlipped(!isFlipped)}
    >
      <div
        className={cn(
          'relative w-full h-full transition-transform duration-700 transform-style-3d cursor-pointer',
          { 'rotate-y-180': isFlipped }
        )}
      >
        {/* Front of the card */}
        <div className="absolute w-full h-full backface-hidden">
          <Card className="flex flex-col items-center justify-center h-full w-full bg-background rounded-3xl shadow-[9px_9px_18px_#d1d9e6,-9px_-9px_18px_#ffffff] dark:shadow-[9px_9px_18px_#2c2c2c,-9px_-9px_18px_#3a3a3a]">
            <CardContent className="p-6 text-center w-full">
              <p className="text-sm font-semibold text-muted-foreground mb-4">QUESTION</p>
              <ScrollArea className="h-52 md:h-64">
                <p className="text-xl md:text-2xl font-bold px-4">{question}</p>
              </ScrollArea>
            </CardContent>
          </Card>
        </div>

        {/* Back of the card */}
        <div className="absolute w-full h-full backface-hidden rotate-y-180">
          <Card className="flex flex-col items-center justify-center h-full w-full bg-background rounded-3xl shadow-[9px_9px_18px_#d1d9e6,-9px_-9px_18px_#ffffff] dark:shadow-[9px_9px_18px_#2c2c2c,-9px_-9px_18px_#3a3a3a]">
            <CardContent className="p-6 text-center w-full">
              <p className="text-sm font-semibold text-muted-foreground mb-4">ANSWER</p>
              <ScrollArea className="h-52 md:h-64">
                <p className="text-lg md:text-xl px-4 whitespace-pre-wrap">{answer}</p>
              </ScrollArea>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
