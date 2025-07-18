'use client';

import { useState, useRef, type ChangeEvent } from 'react';
import { generateFlashcards, type GenerateFlashcardsOutput } from '@/lib/actions';
import { Button } from '@/components/ui/button';
import { FlashcardViewer } from '@/components/flashcard-viewer';
import { Loader2, UploadCloud } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Card } from '@/components/ui/card';
import { Input } from './ui/input';

export function FlashcardGenerator() {
  const [flashcards, setFlashcards] = useState<GenerateFlashcardsOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);
  const [lessonContent, setLessonContent] = useState<string | null>(null);
  const { toast } = useToast();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setFileName(file.name);
      const reader = new FileReader();
      reader.onload = (e) => {
        const content = e.target?.result as string;
        // Basic HTML tag stripping. For production, you might want a more robust library.
        const textContent = content.replace(/<[^>]*>/g, ' '); 
        setLessonContent(textContent);
      };
      reader.readAsText(file);
    }
  };

  const handleGenerate = async () => {
    if (!lessonContent) {
       toast({
        title: 'No Content',
        description: 'Please upload a file before generating flashcards.',
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
    setFileName(null);
    setLessonContent(null);
    if(fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  }

  if (flashcards) {
    return <FlashcardViewer flashcards={flashcards} onReset={resetAll} />;
  }

  return (
    <Card className="text-center p-8 md:p-12 bg-background rounded-2xl shadow-[5px_5px_15px_#D1D9E6,-5px_-5px_15px_#FFFFFF] dark:shadow-[5px_5px_15px_#2c2c2c,-5px_-5px_15px_#3a3a3a]">
      <div className="flex justify-center mb-6">
        <div className="p-4 bg-background rounded-full shadow-[inset_2px_2px_5px_#D1D9E6,inset_-2px_-2px_5px_#FFFFFF] dark:shadow-[inset_2px_2px_5px_#2c2c2c,inset_-2px_-2px_5px_#3a3a3a]">
          <UploadCloud className="h-10 w-10 text-primary" />
        </div>
      </div>
      <h2 className="text-2xl font-bold mb-2">Upload Your Lesson</h2>
      <p className="text-muted-foreground mb-8 max-w-md mx-auto">
        Select an HTML file containing your study material to get started.
      </p>

      <Input
        id="file-upload"
        type="file"
        accept=".html"
        onChange={handleFileChange}
        className="hidden"
        ref={fileInputRef}
      />
      <Button
        onClick={() => fileInputRef.current?.click()}
        variant="outline"
        className="mb-4"
      >
        {fileName ? `Selected: ${fileName}` : 'Choose HTML File'}
      </Button>

      <Button
        onClick={handleGenerate}
        disabled={isLoading || !lessonContent}
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
