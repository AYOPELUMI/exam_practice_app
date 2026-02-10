"use client"

import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Button } from "@/components/ui/button";
import {
  CheckCircle2,
  XCircle,
  AlertCircle,
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
  Star
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface QuestionResult {
  id: number;
  text: string;
  status: "correct" | "incorrect" | "not_attempted";
  hasOptions?: boolean;
  options?: string[];
  correctAnswer?: number;
  selectedAnswer?: number;
}

const questionResults: QuestionResult[] = [
  {
    id: 1,
    text: "A 45-year-old patient presents with persistent pain on biting and sensitivity to heat in a lower first molar restored with a deep occlusal composite filling placed 6 months ago.",
    status: "incorrect",
    hasOptions: true,
    options: [
      "A 45-year-old patient presents with persistent pain on biting and sensitivity to heat in a lower first molar",
      "A 45-year-old patient presents with persistent pain on biting and sensitivity to heat in a lower first molar",
      "A 45-year-old patient presents with persistent pain on biting and sensitivity to heat in a lower first molar",
      "A 45-year-old patient presents with persistent pain on biting and sensitivity to heat in a lower first molar",
      "A 45-year-old patient presents with persistent pain on biting and sensitivity to heat in a lower first molar",
    ],
    correctAnswer: 2,
    selectedAnswer: 0,
  },
  {
    id: 2,
    text: "A 45-year-old patient presents with persistent pain on biting and sensitivity to heat in a lower first molar restored with a deep occlusal composite filling placed 6 months ago.",
    status: "correct",
  },
  {
    id: 3,
    text: "A 45-year-old patient presents with persistent pain on biting and sensitivity to heat in a lower first molar restored with a deep occlusal composite filling placed 6 months ago.",
    status: "incorrect",
  },
  {
    id: 4,
    text: "A 45-year-old patient presents with persistent pain on biting and sensitivity to heat in a lower first molar restored with a deep occlusal composite filling placed 6 months ago.",
    status: "not_attempted",
  },
];

const Results = () => {
  const [expandedQuestion, setExpandedQuestion] = useState<number | null>(0);
  const [currentPage, setCurrentPage] = useState(2);
  const totalPages = 5;

  const score = 36;
  const total = 50;
  const correct = 36;
  const incorrect = 14;
  const percentage = (score / total) * 100;

  const getStatusIcon = (status: QuestionResult["status"]) => {
    switch (status) {
      case "correct":
        return <CheckCircle2 className="h-5 w-5 text-success" />;
      case "incorrect":
        return <XCircle className="h-5 w-5 text-destructive" />;
      case "not_attempted":
        return <AlertCircle className="h-5 w-5 text-warning" />;
    }
  };

  const getStatusText = (status: QuestionResult["status"]) => {
    switch (status) {
      case "correct":
        return <span className="text-success font-medium">Correct</span>;
      case "incorrect":
        return <span className="text-destructive font-medium">Incorrect</span>;
      case "not_attempted":
        return <span className="text-warning font-medium">Not Attempted</span>;
    }
  };

  return (
    <div className="h-full bg-background overflow-auto mb-20">


      <div className="p-6 h-full mx-auto animate-fade-in">
        <h1 className="text-xl font-semibold text-center mb-8">
          Well done Emma, below is your score
        </h1>

        <div className="grid lg:grid-cols-[280px_1fr] gap-6">
          {/* Summary Card */}
          <div className="bg-card border border-border rounded-xl p-6">
            <h2 className="font-semibold mb-6">Summary</h2>

            {/* Score Ring */}
            <div className="relative w-40 h-40 mx-auto mb-6">
              <svg className="w-full h-full transform -rotate-90">
                <circle
                  cx="80"
                  cy="80"
                  r="70"
                  stroke="currentColor"
                  strokeWidth="12"
                  fill="none"
                  className="text-destructive/20"
                />
                <circle
                  cx="80"
                  cy="80"
                  r="70"
                  stroke="currentColor"
                  strokeWidth="12"
                  fill="none"
                  strokeDasharray={`${percentage * 4.4} 440`}
                  strokeLinecap="round"
                  className="text-success"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-sm text-muted-foreground">Score</span>
                <span className="text-3xl font-bold">{score}/{total}</span>
              </div>
            </div>

            <p className="text-center text-sm text-muted-foreground mb-4">COURSE: Dentistry</p>

            <div className="flex justify-center gap-6 mb-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-success" />
                <span className="text-sm">Correct ({correct})</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-destructive" />
                <span className="text-sm">Incorrect ({incorrect})</span>
              </div>
            </div>

            <div className="text-center mb-4">
              <span className="px-3 py-1 bg-muted rounded-md text-sm">Practice mode</span>
            </div>

            <div className="flex items-center justify-center gap-2">
              <span className="text-sm text-muted-foreground">Rate your experience</span>
              <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-4 w-4 text-muted" />
                ))}
              </div>
            </div>
          </div>

          {/* Questions List */}
          <div className="bg-card border border-border rounded-xl">
            <div className="p-4 border-b border-border flex items-center justify-between">
              <h2 className="font-semibold">Questions</h2>
              <button className="p-1 hover:bg-muted rounded">
                <ChevronUp className="h-5 w-5" />
              </button>
            </div>

            <div className="h-full overflow-y-auto scrollbar-thin">
              {/* Expanded Question with Options */}
              <div className="p-4 border-b border-border">
                <div className="flex items-start gap-3 mb-4">
                  <XCircle className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <span className="text-destructive font-medium text-sm">Incorrect</span>
                    <p className="text-sm mt-1">
                      A 45-year-old patient presents with persistent pain on biting and sensitivity to heat in a lower first molar restored with a deep occlusal composite filling placed 6 months ago.
                    </p>
                  </div>
                  <ChevronUp className="h-5 w-5 text-muted-foreground cursor-pointer" />
                </div>

                <div className="space-y-2 ml-8">
                  {questionResults[0].options?.map((option, index) => (
                    <div
                      key={index}
                      className={cn(
                        "p-3 rounded-lg border text-sm",
                        index === questionResults[0].correctAnswer
                          ? "border-success bg-success/5"
                          : "border-border"
                      )}
                    >
                      <p>{option}</p>
                      {index === questionResults[0].correctAnswer && (
                        <div className="flex items-center justify-between mt-2">
                          <span className="text-success text-sm flex items-center gap-1">
                            <CheckCircle2 className="h-4 w-4" />
                            Correct answer
                          </span>
                          <Link href="#" className="text-primary text-sm hover:underline">
                            View Solution
                          </Link>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Collapsed Questions */}
              {questionResults.slice(1).map((result) => (
                <div
                  key={result.id}
                  className="p-4 border-b border-border last:border-0"
                >
                  <div className="flex items-start gap-3">
                    {getStatusIcon(result.status)}
                    <div className="flex-1">
                      {getStatusText(result.status)}
                      <p className="text-sm mt-1 text-muted-foreground line-clamp-2">
                        {result.text}
                      </p>
                    </div>
                    <ChevronDown className="h-5 w-5 text-muted-foreground cursor-pointer" />
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="p-4 border-t border-border flex items-center justify-center gap-2">
              <button className="p-1 hover:bg-muted rounded">
                <ChevronLeft className="h-4 w-4" />
              </button>
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i}
                  className={cn(
                    "w-8 h-8 rounded text-sm",
                    currentPage === i + 1
                      ? "border border-primary text-primary"
                      : "hover:bg-muted"
                  )}
                >
                  {i + 1}
                </button>
              ))}
              <button className="p-1 hover:bg-muted rounded">
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center gap-4 mt-8">
          <Button variant="outline" asChild>
            <Link href="/dashboard">Back Home</Link>
          </Button>
          <Button asChild>
            <Link href="/quiz">Start Practice</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Results;
