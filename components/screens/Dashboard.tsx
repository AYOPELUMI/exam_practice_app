import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ArrowRight, BookOpen, Users, Target, Flame } from "lucide-react";
import Link from "next/link"

const practiceCards = [
  {
    icon: "📚",
    title: "Focused Practice",
    description: "Practice by topic and difficulty",
    color: "border-primary/30",
    link: "/focused-practice",
  },
  {
    icon: "📊",
    title: "Study Materials",
    description: "Find curated learning materials",
    color: "border-accent/30",
    link: "/study-materials",
  },
  {
    icon: "👥",
    title: "Peer Review",
    description: "Discuss questions with other candidates",
    color: "border-warning/30",
    link: "/peer-review",
  },
  {
    icon: "🎯",
    title: "Performance Goals",
    description: "Track streaks and milestones",
    color: "border-success/30",
    link: "/progress",
  },
];

const recentHistory = [
  { topic: "Mood Disorders", accuracy: "28%" },
  { topic: "Mood Disorders", accuracy: "28%" },
];

const weekDays = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
const streakDays = [false, false, false, true, true, true, false];

const Dashboard = () => {
  return (
    <>
      <div className="animate-fade-in">
        {/* Welcome Header */}
        <div className="flex items-center justify-between mb-8 bg-white px-3 py-4 rounded-lg">
          <h1 className="text-xl font-normal">Welcome back, Emma 👋</h1>
          <Button variant="accent" asChild>
            <Link href="/pricing">Upgrade plan</Link>
          </Button>
        </div>

        {/* Continue Learning Card */}
        <section className="mb-8">
          <h2 className="text-lg font-semibold mb-4 bg-white px-3 py-4 rounded-lg">Continue learning</h2>
          <div className="bg-foreground text-background rounded-xl p-6 flex items-center gap-6 relative overflow-hidden">
            <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-success/20 to-transparent" />
            <div className="absolute right-8 top-0 w-24 h-full bg-gradient-to-l from-primary/20 to-transparent" />

            <div className="w-32 h-24 rounded-lg overflow-hidden shrink-0 bg-muted">
              <img
                src="https://images.unsplash.com/photo-1532012197267-da84d127e765?w=200&h=150&fit=crop"
                alt="Course thumbnail"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex-1">
              <p className="text-xs uppercase tracking-wide opacity-70 mb-1">Course</p>
              <h3 className="text-lg font-semibold mb-2">Medical practices in the world</h3>
              <p className="text-sm opacity-70 mb-2">Current course progress</p>
              <div className="flex items-center gap-4">
                <Progress value={40} className="flex-1 h-2 bg-background/20" />
                <span className="text-sm">40% 2Hrs left</span>
              </div>
            </div>

            <Button variant="accent" className="shrink-0">
              Resume <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </section>

        {/* Practice & Stimulation */}
        <section className="mb-8">
          <h2 className="text-lg font-semibold mb-4 bg-white px-3 py-4 rounded-lg">Practice & Stimulation</h2>

          <div className="grid grid-cols-3 gap-6">
            {/* Practice Cards Grid */}
            <div className="col-span-2 grid grid-cols-2 gap-4">
              {practiceCards.map((card, index) => (
                <Link
                  key={index}
                  href={card.link}
                  className={`bg-card p-6 rounded-xl border-2 ${card.color} hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5 flex flex-col justify-center items-center`}
                >
                  <div className="text-4xl mb-4">{card.icon}</div>
                  <h3 className="font-semibold text-3xl mb-1">{card.title}</h3>
                  <p className="text-lg text-muted-foreground">{card.description}</p>
                </Link>
              ))}
            </div>

            {/* Right Column - Streak & History */}
            <div className="space-y-4">
              {/* Streak Card */}
              <div className="bg-card p-4 rounded-xl border border-border">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-semibold text-3xl">3 Days Streak</h3>
                    <p className="text-xl font-medium">Keep the fire burning, burning...</p>
                  </div>
                  <Flame className="h-8 w-8 text-destructive" />
                </div>

                <div className="flex justify-between">
                  {weekDays.map((day, index) => (
                    <div key={day} className="flex flex-col items-center gap-1">
                      <div className={`streak-dot ${streakDays[index] ? 'streak-dot-active' : 'streak-dot-inactive'}`}>
                        {streakDays[index] && <Flame className="h-3 w-3" />}
                      </div>
                      <span className="text-xs text-muted-foreground">{day}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recent History */}
              <div className="bg-card p-4 rounded-xl border border-border">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-3xl">Recent History</h3>
                  <Link href="/progress" className="text-sm text-primary hover:underline">View all</Link>
                </div>

                <div className="space-y-3">
                  {recentHistory.map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-3 rounded-[6px] bg-muted border-b border-border last:border-0">
                      <div>
                        <p className="font-semibold text-xl">{item.topic}</p>
                        <p className="text-base font-medium">Accuracy: {item.accuracy}</p>
                      </div>
                      <ArrowRight className="h-4 w-4 text-muted-foreground" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Dashboard;
