"use client"

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Pencil, X, ChevronDown } from "lucide-react";

interface Question {
    id: string;
    text: string;
    options: string[];
    correctAnswer: string;
    explanation: string;
    course: string;
    difficulty: "Easy" | "Medium" | "Hard";
    dateAdded: string;
}

const initialQuestions: Question[] = [
    { id: "1", text: "A 45-year-old patient presents with...", options: ["A", "B", "C", "D"], correctAnswer: "A", explanation: "", course: "Dentistry", difficulty: "Easy", dateAdded: "12/22/2025" },
    { id: "2", text: "A 45-year-old patient presents with...", options: ["A", "B", "C", "D"], correctAnswer: "B", explanation: "", course: "Psychology", difficulty: "Hard", dateAdded: "12/22/2025" },
    { id: "3", text: "A 45-year-old patient presents with...", options: ["A", "B", "C", "D"], correctAnswer: "C", explanation: "", course: "Dentistry", difficulty: "Easy", dateAdded: "12/22/2025" },
    { id: "4", text: "A 45-year-old patient presents with...", options: ["A", "B", "C", "D"], correctAnswer: "A", explanation: "", course: "Psychology", difficulty: "Hard", dateAdded: "12/22/2025" },
    { id: "5", text: "A 45-year-old patient presents with...", options: ["A", "B", "C", "D"], correctAnswer: "D", explanation: "", course: "Psychology", difficulty: "Medium", dateAdded: "12/22/2025" },
];

const QuestionsOverview = () => {
    const [questions, setQuestions] = useState<Question[]>(initialQuestions);
    const [questionText, setQuestionText] = useState("");
    const [optionA, setOptionA] = useState("");
    const [optionB, setOptionB] = useState("");
    const [optionC, setOptionC] = useState("");
    const [optionD, setOptionD] = useState("");
    const [correctAnswer, setCorrectAnswer] = useState("");
    const [explanation, setExplanation] = useState("");
    const [course, setCourse] = useState("Dentistry");

    const handleAddQuestion = () => {
        if (!questionText.trim() || !correctAnswer) return;
        const newQuestion: Question = {
            id: Date.now().toString(),
            text: questionText,
            options: [optionA, optionB, optionC, optionD],
            correctAnswer,
            explanation,
            course,
            difficulty: "Easy",
            dateAdded: new Date().toLocaleDateString(),
        };
        setQuestions([newQuestion, ...questions]);
        setQuestionText("");
        setOptionA("");
        setOptionB("");
        setOptionC("");
        setOptionD("");
        setCorrectAnswer("");
        setExplanation("");
    };

    const handleDelete = (id: string) => {
        setQuestions(questions.filter((q) => q.id !== id));
    };

    const difficultyColor = (d: string) => {
        if (d === "Easy") return "bg-success/15 text-success border-0";
        if (d === "Hard") return "bg-destructive/15 text-destructive border-0";
        return "bg-warning/15 text-warning border-0";
    };

    return (
        <>
            <div className="space-y-8">
                <h1 className="text-2xl font-bold text-foreground">Questions Overview</h1>

                {/* Add Question Form */}
                <div className="space-y-6">
                    <div>
                        <label className="block text-sm font-semibold text-foreground mb-2">Question Text</label>
                        <Input placeholder="Input question" value={questionText} onChange={(e) => setQuestionText(e.target.value)} />
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Left: Answer Options */}
                        <div className="space-y-4">
                            <label className="block text-sm font-semibold text-foreground">Answer Option</label>
                            <Input placeholder="A)" value={optionA} onChange={(e) => setOptionA(e.target.value)} />
                            <Input placeholder="B)" value={optionB} onChange={(e) => setOptionB(e.target.value)} />
                            <Input placeholder="C)" value={optionC} onChange={(e) => setOptionC(e.target.value)} />
                            <Input placeholder="D)" value={optionD} onChange={(e) => setOptionD(e.target.value)} />
                        </div>

                        {/* Right: Correct Answer, Explanation, Course */}
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-semibold text-foreground mb-2">Correct Answer</label>
                                <Select value={correctAnswer} onValueChange={setCorrectAnswer}>
                                    <SelectTrigger><SelectValue placeholder="Select correct answer" /></SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="A">A</SelectItem>
                                        <SelectItem value="B">B</SelectItem>
                                        <SelectItem value="C">C</SelectItem>
                                        <SelectItem value="D">D</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-foreground mb-2">Explanation</label>
                                <Input placeholder="Input reason for the answer" value={explanation} onChange={(e) => setExplanation(e.target.value)} />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-foreground mb-2">Select Course</label>
                                <Select value={course} onValueChange={setCourse}>
                                    <SelectTrigger><SelectValue /></SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="Dentistry">Dentistry</SelectItem>
                                        <SelectItem value="Psychology">Psychology</SelectItem>
                                        <SelectItem value="Anatomy">Anatomy</SelectItem>
                                        <SelectItem value="Pharmacology">Pharmacology</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center">
                        <Button onClick={handleAddQuestion} className="px-8">
                            Add Questions <ChevronDown className="ml-1 h-4 w-4" />
                        </Button>
                    </div>
                </div>

                {/* Questions Table */}
                <div className="bg-card rounded-xl border border-border overflow-hidden">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="font-semibold text-foreground">Questions</TableHead>
                                <TableHead className="font-semibold text-foreground">Course</TableHead>
                                <TableHead className="font-semibold text-foreground">Date Added</TableHead>
                                <TableHead className="font-semibold text-foreground">Difficulty</TableHead>
                                <TableHead className="font-semibold text-foreground">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {questions.map((q) => (
                                <TableRow key={q.id}>
                                    <TableCell className="max-w-[200px] truncate">{q.text}</TableCell>
                                    <TableCell>{q.course}</TableCell>
                                    <TableCell>{q.dateAdded}</TableCell>
                                    <TableCell>
                                        <Badge variant="outline" className={difficultyColor(q.difficulty)}>{q.difficulty}</Badge>
                                    </TableCell>
                                    <TableCell>
                                        <div className="flex items-center gap-2">
                                            <button className="p-1 hover:bg-muted rounded transition-colors"><Pencil className="h-4 w-4 text-muted-foreground" /></button>
                                            <button onClick={() => handleDelete(q.id)} className="p-1 hover:bg-muted rounded transition-colors"><X className="h-4 w-4 text-muted-foreground" /></button>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </div>
        </>
    );
};

export default QuestionsOverview;
