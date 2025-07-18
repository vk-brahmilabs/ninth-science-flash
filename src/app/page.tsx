import Link from 'next/link';
import { lessons } from '@/lib/lessons';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold font-headline tracking-tight">
          Ninth Science Flash
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          Your AI-powered study partner. Select a lesson to begin.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {lessons.map((lesson) => (
          <Link
            href={`/lessons/${lesson.id}`}
            key={lesson.id}
            className="group block"
          >
            <Card className="h-full flex flex-col justify-between transition-all duration-300 hover:shadow-lg hover:-translate-y-1 bg-card">
              <CardHeader>
                <CardTitle>{lesson.title}</CardTitle>
                <CardDescription className="pt-2">
                  {lesson.description}
                </CardDescription>
              </CardHeader>
              <div className="flex items-center justify-end p-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-sm font-medium mr-2">Start Learning</span>
                <ArrowRight className="h-4 w-4" />
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
