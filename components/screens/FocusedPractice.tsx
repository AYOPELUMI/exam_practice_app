import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ChevronDown, Clock, FileText } from "lucide-react";
import Link from "next/link";

const courses = [
  {
    title: "Pharmacology",
    description: "Drug actions, uses, and side effects.",
    questions: 50,
    difficulty: "Intermediate",
    duration: "20 mins",
  },
  {
    title: "Pharmacology",
    description: "Drug actions, uses, and side effects.",
    questions: 50,
    difficulty: "Intermediate",
    duration: "20 mins",
  },
];

const FocusedPractice = () => {
  return (
    <>
      <div className=" animate-fade-in">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Link href="/dashboard" className="p-2 hover:bg-muted rounded-lg transition-colors">
              <ArrowLeft className="h-5 w-5" />
            </Link>
            <h1 className="text-xl font-semibold">Focused Practice</h1>
          </div>
          <Button variant="accent">Upgrade plan</Button>
        </div>

        {/* Description */}
        <p className="text-muted-foreground mb-8">
          Practice specific topics and difficulty levels efficiently.
        </p>

        {/* Filters */}
        <div className="space-y-4 mb-10">
          <div className="bg-card border border-border rounded-xl p-4 flex items-center justify-between cursor-pointer hover:bg-muted/50 transition-colors">
            <span className="font-medium">Select Course</span>
            <ChevronDown className="h-5 w-5 text-muted-foreground" />
          </div>

          <div className="bg-card border border-border rounded-xl p-4 flex items-center justify-between cursor-pointer hover:bg-muted/50 transition-colors">
            <span>
              <span className="font-medium">Difficulty</span>
              <span className="text-muted-foreground"> (Easy / Medium / Hard)</span>
            </span>
            <ChevronDown className="h-5 w-5 text-muted-foreground" />
          </div>

          <div className="bg-card border border-border rounded-xl p-4 flex items-center justify-between cursor-pointer hover:bg-muted/50 transition-colors">
            <span className="font-medium">Number of questions</span>
            <ChevronDown className="h-5 w-5 text-muted-foreground" />
          </div>
        </div>

        {/* Based on Recent Mistakes */}
        <section>
          <h2 className="text-lg font-semibold mb-6">Based on your Recent Mistakes</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {courses.map((course, index) => (
              <div key={index} className="bg-card border border-border rounded-xl overflow-hidden">
                <div className="h-40 bg-muted" />

                <div className="p-5">
                  <h3 className="font-semibold text-lg mb-1">{course.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{course.description}</p>

                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <span className="flex items-center gap-1">
                      <FileText className="h-4 w-4" />
                      {course.questions} Questions
                    </span>
                    <span>{course.difficulty}</span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {course.duration}
                    </span>
                  </div>

                  <Button className="w-full" asChild>
                    <Link href="/quiz">Select Course</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default FocusedPractice;
