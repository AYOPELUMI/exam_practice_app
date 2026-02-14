
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Pencil, X, AlertCircle } from "lucide-react";

const stats = [
    { label: "Total Questions", value: "28,400", borderColor: "border-success" },
    { label: "Registered Users", value: "400", borderColor: "border-primary" },
    { label: "Premium Users", value: "98", borderColor: "border-warning" },
    { label: "Average Score", value: "69%", borderColor: "border-info" },
];

interface Question {
    id: string;
    text: string;
    course: string;
    dateAdded: string;
    difficulty: "Easy" | "Medium" | "Hard" | "Flagged";
    flagged?: boolean;
}

const questions: Question[] = [
    { id: "1", text: "A 45-year-old patient....", course: "Dentistry", dateAdded: "12/22/2025", difficulty: "Easy" },
    { id: "2", text: "A 45-year-old patient..", course: "Psychology", dateAdded: "12/22/2025", difficulty: "Flagged", flagged: true },
    { id: "3", text: "A 45-year-old patient....", course: "Dentistry", dateAdded: "12/22/2025", difficulty: "Easy" },
    { id: "4", text: "A 45-year-old patient....", course: "Psychology", dateAdded: "12/22/2025", difficulty: "Hard" },
    { id: "5", text: "A 45-year-old patient....", course: "Psychology", dateAdded: "12/22/2025", difficulty: "Medium" },
    { id: "6", text: "A 45-year-old patient....", course: "Dentistry", dateAdded: "12/22/2025", difficulty: "Hard" },
    { id: "7", text: "A 45-year-old patient....", course: "Dentistry", dateAdded: "12/22/2025", difficulty: "Medium" },
    { id: "8", text: "A 45-year-old patient..", course: "Dentistry", dateAdded: "12/22/2025", difficulty: "Flagged", flagged: true },
    { id: "9", text: "A 45-year-old patient....", course: "Psychology", dateAdded: "12/22/2025", difficulty: "Easy" },
    { id: "10", text: "A 45-year-old patient....", course: "Dentistry", dateAdded: "12/22/2025", difficulty: "Hard" },
];

const difficultyStyle = (d: string) => {
    if (d === "Easy") return "bg-success/15 text-success border-0";
    if (d === "Hard") return "bg-destructive/15 text-destructive border-0";
    if (d === "Flagged") return "bg-destructive text-destructive-foreground border-0";
    return "bg-warning/15 text-warning border-0";
};

const AdminDashboard = () => {
    return (
        <>
            <div className="space-y-8">
                <h1 className="text-2xl font-bold text-foreground">Admin Dashboard</h1>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {stats.map((stat) => (
                        <Card key={stat.label} className={`border-2 ${stat.borderColor}`}>
                            <CardContent className="p-5 text-center">
                                <p className="text-sm text-muted-foreground font-medium">{stat.label}</p>
                                <p className="text-3xl font-bold text-foreground mt-1">{stat.value}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Questions Table */}
                <div className="bg-card rounded-xl border border-border overflow-hidden">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="font-semibold text-foreground italic">Questions</TableHead>
                                <TableHead className="font-semibold text-foreground italic">Course</TableHead>
                                <TableHead className="font-semibold text-foreground italic">Date Added</TableHead>
                                <TableHead className="font-semibold text-foreground italic">Difficulty</TableHead>
                                <TableHead className="font-semibold text-foreground italic">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {questions.map((q) => (
                                <TableRow key={q.id}>
                                    <TableCell className="max-w-62.5 truncate">
                                        <span className="flex items-center gap-1.5">
                                            {q.flagged && <AlertCircle className="h-4 w-4 text-destructive shrink-0" />}
                                            {q.text}
                                        </span>
                                    </TableCell>
                                    <TableCell>{q.course}</TableCell>
                                    <TableCell>{q.dateAdded}</TableCell>
                                    <TableCell>
                                        <Badge variant="outline" className={difficultyStyle(q.difficulty)}>{q.difficulty}</Badge>
                                    </TableCell>
                                    <TableCell>
                                        <div className="flex items-center gap-2">
                                            <button className="p-1 hover:bg-muted rounded transition-colors"><Pencil className="h-4 w-4 text-muted-foreground" /></button>
                                            <button className="p-1 hover:bg-muted rounded transition-colors"><X className="h-4 w-4 text-muted-foreground" /></button>
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

export default AdminDashboard;
