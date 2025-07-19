'use client';

import { useState } from 'react';
import { generateFlashcards, type GenerateFlashcardsOutput } from '@/lib/actions';
import { Button } from '@/components/ui/button';
import { FlashcardViewer } from '@/components/flashcard-viewer';
import { Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Card } from '@/components/ui/card';

interface FlashcardGeneratorProps {
  lessonContent: string;
}

export function FlashcardGenerator({ lessonContent }: FlashcardGeneratorProps) {
  const [flashcards, setFlashcards] = useState<GenerateFlashcardsOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleGenerate = async () => {
    if (!lessonContent || lessonContent.startsWith('Error:')) {
       toast({
        title: 'No Content',
        description: 'Could not load lesson content. Please check the file exists.',
        variant: 'destructive',
      });
      return;
    }
    setIsLoading(true);
    setFlashcards(null);
    try {
      const result = await generateFlashcards({ lessonContent });
      if (result && result.length > 0) {
        setFlashcards(result);
      } else {
        throw new Error('No flashcards were generated. The content might be too short or invalid.');
      }
    } catch (e: any) {
      toast({
        title: 'Error Generating Flashcards',
        description: e.message || 'An unexpected error occurred. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  const resetAll = () => {
    setFlashcards(null);
    setIsLoading(false);
  }

  if (flashcards) {
    return <FlashcardViewer flashcards={flashcards} onReset={resetAll} />;
  }

  return (
    <Card className="text-center p-8 md:p-12 bg-background rounded-2xl shadow-[5px_5px_15px_#D1D9E6,-5px_-5px_15px_#FFFFFF] dark:shadow-[5px_5px_15px_#2c2c2c,-5px_-5px_15px_#3a3a3a]">
      <h2 className="text-2xl font-bold mb-2">Ready to Generate Flashcards?</h2>
      <p className="text-muted-foreground mb-8 max-w-md mx-auto">
        The lesson content is loaded. Click the button below to create your flashcards.
      </p>

      <Button
        onClick={handleGenerate}
        disabled={isLoading || !lessonContent || lessonContent.startsWith('Error:')}
        size="lg"
        className="rounded-full px-8 py-6 font-bold text-lg text-foreground transition-all duration-200 shadow-[5px_5px_10px_#d1d9e6,-5px_-5px_10px_#ffffff] dark:shadow-[5px_5px_10px_#2c2c2c,-5px_-5px_10px_#3a3a3a] active:shadow-[inset_5px_5px_10px_#d1d9e6,inset_-5px_-5px_10px_#ffffff] dark:active:shadow-[inset_5px_5px_10px_#2c2c2c,inset_-5px_-5px_10px_#3a3a3a]"
      >
        {isLoading ? (
          <>
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            Generating...
          </>
        ) : (
          'Create Flashcards'
        )}
      </Button>
    </Card>
  );
}
