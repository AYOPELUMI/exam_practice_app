"use client"
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ArrowRight, Flame } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

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
  { topic: "Anxiety Disorders", accuracy: "45%" },
  { topic: "Psychotic Disorders", accuracy: "62%" },
];

const weekDays = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
const streakDays = [false, false, false, true, true, true, false];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 12,
    },
  },
};

const cardHoverVariants = {
  hover: {
    scale: 1.02,
    transition: {
      type: "spring" as const,
      stiffness: 400,
      damping: 17,
    },
  },
  tap: {
    scale: 0.98,
  },
};

const Dashboard = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Check for mobile viewport
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="animate-fade-in px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      {/* Welcome Header */}
      <motion.div
        variants={itemVariants}
        className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 sm:mb-8 bg-white/80 backdrop-blur-sm px-4 sm:px-3 py-4 rounded-lg shadow-sm"
      >
        <h1 className="text-xl sm:text-2xl font-normal">Welcome back, Emma 👋</h1>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button variant="accent" asChild className="w-full sm:w-auto">
            <Link href="/pricing">Upgrade plan</Link>
          </Button>
        </motion.div>
      </motion.div>

      {/* Continue Learning Card */}
      <motion.section
        variants={itemVariants}
        className="mb-6 sm:mb-8"
      >
        <h2 className="text-lg font-semibold mb-4 bg-white/80 backdrop-blur-sm px-4 sm:px-3 py-4 rounded-lg">
          Continue learning
        </h2>
        <motion.div
          whileHover={{ scale: 1.01 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="bg-linear-to-br from-foreground to-gray-800 text-background rounded-xl p-4 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 relative overflow-hidden"
        >
          <div className="absolute right-0 top-0 w-32 h-full bg-linear-to-l from-success/20 to-transparent animate-pulse" />
          <div className="absolute right-8 top-0 w-24 h-full bg-linear-to-l from-primary/20 to-transparent animate-pulse delay-100" />

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="w-full sm:w-32 h-48 sm:h-24 rounded-lg overflow-hidden shrink-0 bg-muted"
          >
            <img
              src="https://images.unsplash.com/photo-1532012197267-da84d127e765?w=200&h=150&fit=crop"
              alt="Course thumbnail"
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
            />
          </motion.div>

          <div className="flex-1 w-full">
            <p className="text-xs uppercase tracking-wide opacity-70 mb-1">Course</p>
            <h3 className="text-base sm:text-lg font-semibold mb-2">Medical practices in the world</h3>
            <p className="text-sm opacity-70 mb-2">Current course progress</p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
              <Progress
                value={40}
                className="w-full sm:flex-1 h-2 bg-background/20 [&>div]:animate-progress"
              />
              <span className="text-sm whitespace-nowrap">40% 2Hrs left</span>
            </div>
          </div>

          <motion.div
            whileHover={{ scale: 1.05, x: 5 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto"
          >
            <Button variant="accent" className="w-full sm:w-auto group">
              Resume
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              >
                <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </motion.span>
            </Button>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Practice & Stimulation */}
      <motion.section
        variants={itemVariants}
        className="mb-8"
      >
        <h2 className="text-lg font-semibold mb-4 bg-white/80 backdrop-blur-sm px-4 sm:px-3 py-4 rounded-lg">
          Practice & Stimulation
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
          {/* Practice Cards Grid */}
          <motion.div
            variants={containerVariants}
            className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {practiceCards.map((card, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover="hover"
                whileTap="tap"
                custom={index}
              >
                <Link
                  href={card.link}
                  className={`bg-white/80 backdrop-blur-sm p-4 sm:p-6 rounded-xl border-2 ${card.color} hover:shadow-xl transition-all duration-300 flex flex-col justify-center items-center text-center h-full group`}
                >
                  <motion.div
                    animate={{
                      rotate: [0, 10, -10, 0],
                      scale: [1, 1.1, 1.1, 1]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatDelay: 3
                    }}
                    className="text-4xl sm:text-5xl mb-3 sm:mb-4 group-hover:scale-110 transition-transform"
                  >
                    {card.icon}
                  </motion.div>
                  <h3 className="font-semibold text-xl sm:text-2xl mb-1 sm:mb-2">{card.title}</h3>
                  <p className="text-sm sm:text-base text-muted-foreground">{card.description}</p>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* Right Column - Streak & History */}
          <motion.div
            variants={containerVariants}
            className="space-y-4"
          >
            {/* Streak Card */}
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="bg-white/80 backdrop-blur-sm p-4 sm:p-5 rounded-xl border border-border shadow-sm"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-semibold text-2xl sm:text-3xl">3 Days Streak</h3>
                  <p className="text-base sm:text-lg text-muted-foreground">Keep the fire burning...</p>
                </div>
                <motion.div
                  animate={{
                    rotate: [0, -10, 10, -10, 0],
                    scale: [1, 1.2, 1.2, 1.2, 1]
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatDelay: 2
                  }}
                >
                  <Flame className="h-8 w-8 text-orange-500" />
                </motion.div>
              </div>

              <div className="flex justify-between gap-1 sm:gap-2 overflow-x-auto pb-2">
                {weekDays.map((day, index) => (
                  <motion.div
                    key={day}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex flex-col items-center gap-1 min-w-[40px]"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className={`streak-dot ${streakDays[index] ? 'streak-dot-active' : 'streak-dot-inactive'} transition-all duration-300`}
                    >
                      {streakDays[index] && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ type: "spring", stiffness: 500 }}
                        >
                          <Flame className="h-3 w-3" />
                        </motion.div>
                      )}
                    </motion.div>
                    <span className="text-[10px] sm:text-xs text-muted-foreground">{day}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Recent History */}
            <motion.div
              variants={itemVariants}
              className="bg-white/80 backdrop-blur-sm p-4 sm:p-5 rounded-xl border border-border shadow-sm"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-2xl sm:text-3xl">Recent History</h3>
                <motion.div
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link href="/progress" className="text-sm text-primary hover:underline flex items-center gap-1">
                    View all
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                </motion.div>
              </div>

              <div className="space-y-2 sm:space-y-3">
                {recentHistory.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 5, backgroundColor: "rgba(0,0,0,0.02)" }}
                    className="flex items-center justify-between p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors cursor-pointer group"
                  >
                    <div>
                      <p className="font-semibold text-base sm:text-lg">{item.topic}</p>
                      <p className="text-sm text-muted-foreground">Accuracy: {item.accuracy}</p>
                    </div>
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{
                        repeat: Infinity,
                        duration: 1.5,
                        delay: index * 0.2
                      }}
                    >
                      <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Add custom styles for mobile optimization */}
      <style jsx>{`
        @media (max-width: 640px) {
          .streak-dot {
            width: 32px;
            height: 32px;
          }
        }
      `}</style>
    </motion.div>
  );
};

export default Dashboard;