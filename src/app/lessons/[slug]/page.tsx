import { lessons } from '@/lib/lessons';
import { notFound } from 'next/navigation';
import { FlashcardClient } from './flashcard-client';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

type Props = {
  params: { slug: string };
};

export async function generateStaticParams() {
  return lessons.map((lesson) => ({
    slug: lesson.id,
  }));
}

export default function LessonPage({ params }: Props) {
  const { slug } = params;
  const lesson = lessons.find((l) => l.id === slug);

  if (!lesson) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-8 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Lessons
        </Link>
        <h1 className="text-3xl md:text-4xl font-bold font-headline mb-2">{lesson.title}</h1>
        <p className="text-muted-foreground mb-8">{lesson.description}</p>

        <FlashcardClient lessonContent={lesson.content} />
      </div>
    </div>
  );
}
