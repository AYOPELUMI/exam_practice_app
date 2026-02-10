import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Clock, FileText } from "lucide-react";
import Link from "next/link";

const mockExams = [
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
    difficulty: "Easy",
    duration: "20 mins",
  },
  {
    title: "Pharmacology",
    description: "Drug actions, uses, and side effects.",
    questions: 50,
    difficulty: "Hard",
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

const MockExams = () => {
  return (
    <>
      <div className="max-w-5xl animate-fade-in">
        {/* Header */}
        <div className="flex items-center justify-between mb-2">
          <div>
            <h1 className="text-xl font-semibold">Mock Exams</h1>
            <p className="text-muted-foreground">Simulate real exam conditions and assess your readiness</p>
          </div>
          <Button variant="accent">Upgrade plan</Button>
        </div>

        {/* Exams Grid */}
        <div className="grid md:grid-cols-2 gap-6 mt-8">
          {mockExams.map((exam, index) => (
            <div key={index} className="bg-card border border-border rounded-xl overflow-hidden">
              <div className="h-40 bg-muted" />

              <div className="p-5">
                <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">MOCK EXAM</p>
                <h3 className="font-semibold text-lg mb-1">{exam.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{exam.description}</p>

                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <span className="flex items-center gap-1">
                    <FileText className="h-4 w-4" />
                    {exam.questions} Questions
                  </span>
                  <span>{exam.difficulty}</span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {exam.duration}
                  </span>
                </div>

                <Button className="w-full" asChild>
                  <Link href="/quiz">Start Mock Exam</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MockExams;
