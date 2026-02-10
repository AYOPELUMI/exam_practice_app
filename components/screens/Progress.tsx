"use client"
import { Button } from "@/components/ui/button";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend
} from "recharts";

const studyData = [
  { day: "Sunday", practice: 0.5, mockExams: 0.2, timeSpent: 8 },
  { day: "Monday", practice: 5, mockExams: 4, timeSpent: 7 },
  { day: "Tuesday", practice: 6.5, mockExams: 5.5, timeSpent: 7 },
  { day: "Wednesday", practice: 6, mockExams: 4, timeSpent: 9 },
  { day: "Thursday", practice: 4.5, mockExams: 4.5, timeSpent: 8 },
  { day: "Friday", practice: 8, mockExams: 4, timeSpent: 0.2 },
  { day: "Saturday", practice: 0.2, mockExams: 0.2, timeSpent: 0.2 },
];

const subjectAccuracy = [
  { name: "Anatomy", percentage: 72, color: "bg-success" },
  { name: "Pathology", percentage: 68, color: "bg-accent" },
  { name: "Physiology", percentage: 44, color: "bg-warning" },
  { name: "Pharmacology", percentage: 20, color: "bg-destructive" },
];

const Progress = () => {
  const overallPercentage = 63;
  const questionsAnswered = 120;

  return (
    <>
      <div className="max-w-5xl animate-fade-in">
        {/* Header */}
        <div className="flex items-center justify-between mb-2">
          <div>
            <h1 className="text-xl font-semibold">Track Progress</h1>
            <p className="text-muted-foreground">AI assistance for explanations, revision, and exam clarification.</p>
          </div>
          <Button variant="accent">Upgrade plan</Button>
        </div>

        {/* Study Trends Chart */}
        <div className="bg-card border border-border rounded-xl p-6 mt-6 mb-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold">Study Trends</h2>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-primary" />
                <span className="text-sm">Practice: 100hrs</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-accent" />
                <span className="text-sm">Mock Exams: 50hrs</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-destructive" />
                <span className="text-sm">Time Spent: 150hrs</span>
              </div>
            </div>
          </div>

          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={studyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis
                dataKey="day"
                stroke="hsl(var(--muted-foreground))"
                fontSize={12}
              />
              <YAxis
                stroke="hsl(var(--muted-foreground))"
                fontSize={12}
                tickFormatter={(value) => `${value} hours`}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'hsl(var(--card))',
                  border: '1px solid hsl(var(--border))',
                  borderRadius: '8px',
                }}
              />
              <Line
                type="monotone"
                dataKey="practice"
                stroke="hsl(var(--primary))"
                strokeWidth={2}
                dot={{ fill: 'hsl(var(--primary))', strokeWidth: 2 }}
              />
              <Line
                type="monotone"
                dataKey="mockExams"
                stroke="hsl(var(--accent))"
                strokeWidth={2}
                dot={{ fill: 'hsl(var(--accent))', strokeWidth: 2 }}
              />
              <Line
                type="monotone"
                dataKey="timeSpent"
                stroke="hsl(var(--destructive))"
                strokeWidth={2}
                dot={{ fill: 'hsl(var(--destructive))', strokeWidth: 2 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Overall Performance */}
        <div className="bg-card border border-border rounded-xl p-6">
          <h2 className="text-lg font-semibold mb-1">Overall Performance</h2>
          <p className="text-sm text-muted-foreground mb-6">Questions answered: {questionsAnswered}</p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Donut Chart */}
            <div className="flex justify-center">
              <div className="relative w-48 h-48">
                <svg className="w-full h-full transform -rotate-90">
                  <circle
                    cx="96"
                    cy="96"
                    r="80"
                    stroke="currentColor"
                    strokeWidth="16"
                    fill="none"
                    className="text-muted"
                  />
                  <circle
                    cx="96"
                    cy="96"
                    r="80"
                    stroke="currentColor"
                    strokeWidth="16"
                    fill="none"
                    strokeDasharray={`${overallPercentage * 5.03} 503`}
                    strokeLinecap="round"
                    className="text-success"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-4xl font-bold">{overallPercentage}%</span>
                </div>
              </div>
            </div>

            {/* Accuracy by Subject */}
            <div>
              <h3 className="font-medium mb-4">Accuracy by subject</h3>
              <div className="space-y-4">
                {subjectAccuracy.map((subject) => (
                  <div key={subject.name} className="flex items-center gap-3">
                    <div className={`w-3 h-3 rounded-full ${subject.color}`} />
                    <span className="w-28 text-sm">{subject.name}</span>
                    <div className="flex-1 h-3 bg-muted rounded-full overflow-hidden">
                      <div
                        className={`h-full ${subject.color} rounded-full transition-all duration-500`}
                        style={{ width: `${subject.percentage}%` }}
                      />
                    </div>
                    <span className="text-sm text-muted-foreground w-12">{subject.percentage}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Progress;
