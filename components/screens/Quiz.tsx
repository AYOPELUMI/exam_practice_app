"use client"
import { useState } from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Clock, Flag } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

const questions = [
  {
    id: 1,
    text: "A 45-year-old patient presents with persistent pain on biting and sensitivity to heat in a lower first molar restored with a deep occlusal composite filling placed 6 months ago. Clinical examination reveals no mobility and normal periodontal probing depths. A periapical radiograph shows widening of the periodontal ligament space around the affected tooth. What is the most likely diagnosis?",
    options: [
      "Reversible pulpitis",
      "Irreversible pulpitis",
      "Acute apical periodontitis",
      "Cracked tooth syndrome",
    ],
    correctAnswer: 1,
  },
];

const Quiz = () => {
  const router = useRouter();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [timeRemaining] = useState("58:08");
  const totalQuestions = 9;

  const question = questions[0];

  const handleNext = () => {
    if (currentQuestion < totalQuestions - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
    } else {
      router.push("/results");
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedAnswer(null);
    }
  };

  return (
    <>
      <div className=" animate-fade-in">
        {/* Course Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <span className="inline-block px-3 py-1 bg-card border border-border rounded-md text-sm mb-2">
              SELECTED COURSE
            </span>
            <h1 className="text-xl font-semibold">Dentistry</h1>
          </div>
          <Link href="/dashboard" className="text-destructive hover:underline flex items-center gap-1">
            <ChevronLeft className="h-4 w-4" />
            Quit Practice
          </Link>
        </div>

        {/* Question Navigation */}
        <div className="flex items-center gap-2 mb-6 border-b border-border pb-4">
          {Array.from({ length: totalQuestions }, (_, i) => (
            <button
              key={i}
              onClick={() => {
                setCurrentQuestion(i);
                setSelectedAnswer(null);
              }}
              className={cn(
                "w-10 h-10 rounded-lg font-medium transition-colors",
                currentQuestion === i
                  ? "bg-primary text-primary-foreground"
                  : "hover:bg-muted"
              )}
            >
              {i + 1}
            </button>
          ))}
          <Link href="#" className="text-primary hover:underline ml-auto">View All</Link>
        </div>

        {/* Timer */}
        <div className="flex justify-end mb-6">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Clock className="h-5 w-5" />
            <span className="font-medium">Time Remaining {timeRemaining}</span>
          </div>
        </div>

        {/* Question */}
        <div className="mb-8">
          <p className="text-lg font-medium leading-relaxed mb-6">
            {question.text}
          </p>

          <div className="flex items-center gap-3 mb-6">
            <span className="text-sm text-muted-foreground">Select The Correct Option</span>
            <span className="px-2 py-1 bg-muted rounded text-sm">Single Choice</span>
          </div>

          {/* Options */}
          <div className="space-y-3">
            {question.options.map((option, index) => (
              <button
                key={index}
                onClick={() => setSelectedAnswer(index)}
                className={cn(
                  "question-option",
                  selectedAnswer === index && "question-option-selected"
                )}
              >
                <div className="flex items-center gap-3">
                  <div className={cn(
                    "w-5 h-5 rounded-full border-2 flex items-center justify-center",
                    selectedAnswer === index
                      ? "border-primary bg-primary"
                      : "border-muted-foreground"
                  )}>
                    {selectedAnswer === index && (
                      <div className="w-2 h-2 rounded-full bg-primary-foreground" />
                    )}
                  </div>
                  <span>{option}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Flag Question */}
        <div className="flex justify-end mb-8">
          <button className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <Flag className="h-4 w-4" />
            <span className="text-sm">flag question</span>
          </button>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-end gap-4">
          <Button
            variant="outline"
            onClick={handlePrevious}
            disabled={currentQuestion === 0}
          >
            <ChevronLeft className="h-4 w-4 mr-1" />
            Previous
          </Button>
          <Button onClick={handleNext}>
            Next
            <ChevronRight className="h-4 w-4 ml-1" />
          </Button>
        </div>
      </div>
    </>
  );
};

export default Quiz;
