import { lessons } from '@/lib/lessons';
import { FlashcardGenerator } from '@/components/flashcard-generator';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import fs from 'fs/promises';
import path from 'path';

export default async function LessonPage({
  params,
}: {
  params: { lessonId: string };
}) {
  const lesson = lessons.find((l) => l.id === params.lessonId);

  if (!lesson) {
    notFound();
  }

  let lessonContent = '';
  try {
    // Construct the file path relative to the project root
    const filePath = path.join(process.cwd(), 'src', 'lib', `${lesson.id}.html`);
    lessonContent = await fs.readFile(filePath, 'utf-8');
    // Basic HTML tag stripping. For production, you might want a more robust library.
    lessonContent = lessonContent.replace(/<[^>]*>/g, ' ');
  } catch (error) {
    console.error(`Could not read file for lesson ${lesson.id}:`, error);
    // Handle the error appropriately, maybe show a message to the user
    lessonContent = "Error: Could not load lesson content. Please make sure the file exists at `src/lib/" + lesson.id + ".html`";
  }


  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <div className="mb-8">
        <Button asChild variant="ghost">
          <Link href="/">
            <ChevronLeft className="mr-2 h-4 w-4" />
            Back to Lessons
          </Link>
        </Button>
      </div>

      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-bold font-headline tracking-tight">
          {lesson.title}
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          {lesson.description}
        </p>
      </div>

      <div className="max-w-3xl mx-auto">
        <FlashcardGenerator lessonContent={lessonContent} />
      </div>
    </div>
  );
}

export function generateStaticParams() {
  return lessons.map((lesson) => ({
    lessonId: lesson.id,
  }));
}
