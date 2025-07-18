import Link from 'next/link';
import { lessons } from '@/lib/lessons';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { BookOpen } from 'lucide-react';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold font-headline tracking-tight">
          Ninth Science Flash
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          Your AI-powered study partner for Class 9 Science. Select a lesson to begin.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {lessons.map((lesson) => (
          <Link href={`/lessons/${lesson.id}`} key={lesson.id} className="group">
            <Card className="h-full transform transition-all duration-300 group-hover:-translate-y-1 bg-background rounded-2xl shadow-[5px_5px_15px_#D1D9E6,-5px_-5px_15px_#FFFFFF] dark:shadow-[5px_5px_15px_#2c2c2c,-5px_-5px_15px_#3a3a3a] hover:shadow-[inset_2px_2px_5px_#D1D9E6,inset_-2px_-2px_5px_#FFFFFF] dark:hover:shadow-[inset_2px_2px_5px_#2c2c2c,inset_-2px_-2px_5px_#3a3a3a]">
              <CardHeader className="flex flex-row items-start gap-4 p-5">
                <div className="p-3 bg-background rounded-xl shadow-[2px_2px_5px_#D1D9E6,-2px_-2px_5px_#FFFFFF] dark:shadow-[2px_2px_5px_#2c2c2c,-2px_-2px_5px_#3a3a3a]">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-lg font-bold">{lesson.title}</CardTitle>
                  <CardDescription className="mt-1 line-clamp-2 text-xs">
                    {lesson.description}
                  </CardDescription>
                </div>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
