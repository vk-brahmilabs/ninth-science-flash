import { lessons } from '@/lib/lessons';
import { FlashcardGenerator } from '@/components/flashcard-generator';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function LessonPage({
  params,
}: {
  params: { lessonId: string };
}) {
  const lesson = lessons.find((l) => l.id === params.lessonId);

  if (!lesson) {
    notFound();
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
        <FlashcardGenerator />
      </div>
    </div>
  );
}

export function generateStaticParams() {
  return lessons.map((lesson) => ({
    lessonId: lesson.id,
  }));
}
