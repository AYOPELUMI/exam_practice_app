"use client"

import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/Header";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";
import { Check, BookOpen, Sparkles, BarChart3, GraduationCap, Award, FileText } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const features = [
  {
    icon: BookOpen,
    title: "Real Exam–Standard Practice",
    description: "Access carefully structured questions based on past exams, organized by topic and difficulty.",
  },
  {
    icon: Sparkles,
    title: "AI-Guided Support",
    description: "Use AI assistance to clarify concepts, review mistakes, and suggest focus areas.",
  },
  {
    icon: BarChart3,
    title: "Readiness Assessment & Insights",
    description: "Get clear performance insights that show strengths, weaknesses, and readiness level.",
  },
];

const starterFeatures = [
  "Access limited practice questions",
  "Track progress for up to 2 topics",
  "Basic performance insights",
];

const paidFeatures = [
  "Unlimited practice by topic",
  "Full timed exam simulations",
  "AI-guided support and structured study paths",
  "Comprehensive readiness assessment & progress tracking",
];

const faqs = [
  {
    question: "Who is this platform for?",
    answer: "This platform is designed for medical and professional candidates preparing for high-stakes qualifying exams abroad. Both early-stage learners and those ready for exam simulation can benefit.",
  },
  {
    question: "What is included in the free plan?",
    answer: "The free plan includes access to limited practice questions, progress tracking for up to 2 topics, and basic performance insights to get you started.",
  },
  {
    question: "Are the questions based on real past exams?",
    answer: "Yes, our questions are carefully structured based on past exam patterns and topics, organized by difficulty level to help you prepare effectively.",
  },
];

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 }
};

const Landing = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden py-14">
      <Header showSearch={false} showAuth={true} />

      {/* Hero Section */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 mt-16 sm:mt-20 md:mt-24 lg:mt-0"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            variants={fadeInUp}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-3 px-2"
          >
            Practice <span className="text-primary">Real Exam</span> Questions
          </motion.h1>
          <motion.h1
            variants={fadeInUp}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 px-2"
          >
            Pass with Confidence
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="text-muted-foreground mb-8 max-w-xl mx-auto font-medium text-base sm:text-lg md:text-xl px-4"
          >
            A structured readiness platform built for high-stakes professional exams abroad.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 px-4"
          >
            <Button size="lg" className="w-full sm:w-auto min-w-[200px]" asChild>
              <Link href="/dashboard">Create account</Link>
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto min-w-[200px]" asChild>
              <Link href="/dashboard">Log in account</Link>
            </Button>
          </motion.div>
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="py-12 sm:py-16 px-4 sm:px-6 lg:px-12 bg-muted"
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2
            variants={fadeInUp}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12"
          >
            Exam Readiness Tools
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  className="bg-card p-4 sm:p-6 rounded-xl border border-border text-center hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="mx-auto mb-3 sm:mb-4 flex items-center justify-center">
                    <IconComponent className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-primary" />
                  </div>
                  <h3 className="font-bold text-xl sm:text-2xl md:text-3xl mb-2">{feature.title}</h3>
                  <p className="text-sm sm:text-base md:text-lg text-muted-foreground">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* Pricing Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="py-12 sm:py-16 px-4 sm:px-6"
      >
        <div className="max-w-4xl mx-auto">
          <motion.h2
            variants={fadeInUp}
            className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12"
          >
            Choose Your Plan
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {/* Starter Plan */}
            <motion.div
              variants={scaleIn}
              whileHover={{ scale: 1.02 }}
              className="bg-card rounded-xl border border-border shadow-lg overflow-hidden"
            >
              <div className="p-4 sm:p-6 bg-gradient-to-br from-muted/50 to-muted">
                <div className="inline-block px-3 py-1 bg-muted rounded-md text-xs sm:text-sm font-medium mb-3 sm:mb-4">
                  Starter Plan
                </div>
                <div className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">
                  $0.00<span className="text-sm sm:text-base font-normal text-muted-foreground">/lifetime</span>
                </div>
              </div>
              <div className="p-4 sm:p-6">
                <ul className="space-y-2 sm:space-y-3 mb-6">
                  {starterFeatures.map((feature, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-2 text-xs sm:text-sm"
                    >
                      <Check className="h-4 w-4 sm:h-5 sm:w-5 text-success shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </motion.li>
                  ))}
                </ul>
                <Button className="w-full" size="lg" asChild>
                  <Link href="/dashboard">Start Free</Link>
                </Button>
              </div>
            </motion.div>

            {/* Paid Plan */}
            <motion.div
              variants={scaleIn}
              whileHover={{ scale: 1.02 }}
              className="bg-card rounded-xl border-2 border-primary shadow-xl overflow-hidden relative"
            >
              <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-3 py-1 text-xs font-medium rounded-bl-lg">
                Popular
              </div>
              <div className="p-4 sm:p-6 bg-gradient-to-br from-primary/5 to-muted">
                <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-md text-xs sm:text-sm font-medium mb-3 sm:mb-4">
                  Paid Plan
                </div>
                <div className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">
                  $10.00<span className="text-sm sm:text-base font-normal text-muted-foreground">/month</span>
                </div>
              </div>
              <div className="p-4 sm:p-6">
                <ul className="space-y-2 sm:space-y-3 mb-6">
                  {paidFeatures.map((feature, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-2 text-xs sm:text-sm"
                    >
                      <Check className="h-4 w-4 sm:h-5 sm:w-5 text-success shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </motion.li>
                  ))}
                </ul>
                <Button className="w-full" size="lg" variant="default" asChild>
                  <Link href="/dashboard">Get Started</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* FAQ Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="py-12 sm:py-16 px-4 sm:px-6 lg:px-10 bg-muted"
      >
        <div className="max-w-4xl mx-auto">
          <motion.h2
            variants={fadeInUp}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 sm:mb-9"
          >
            Frequently Asked Questions
          </motion.h2>

          <Accordion type="single" collapsible className="space-y-3 sm:space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.2 }}
              >
                <AccordionItem
                  value={`item-${index}`}
                  className="bg-card border border-border rounded-lg sm:rounded-xl overflow-hidden"
                >
                  <AccordionTrigger className="px-4 sm:px-6 py-3 sm:py-4 text-left text-base sm:text-lg md:text-xl font-semibold hover:no-underline hover:bg-muted/50 transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base text-muted-foreground border-t border-border">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </motion.section>
    </div>
  );
};

export default Landing;