import { FlashcardGenerator } from '@/components/flashcard-generator';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold font-headline tracking-tight">
          Ninth Science Flash
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          Your AI-powered study partner. Upload an HTML file with your lesson content to begin.
        </p>
      </div>

      <div className="max-w-3xl mx-auto">
        <FlashcardGenerator />
      </div>
    </div>
  );
}
