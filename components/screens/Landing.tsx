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

const Landing = () => {
  return (
    <div className="min-h-screen bg-background py-4">
      <Header showSearch={false} showAuth={true} />

      {/* Hero Section */}
      <section className="py-16 px-6 pt-[14%]">
        <div className="max-w-4xl mx-auto text-center">


          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Practice <span className="text-primary">Real Exam</span> Questions
          </h1>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Pass with Confidence</h1>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto font-medium text-xl">
            A structured readiness platform built for high-stakes professional exams abroad.
          </p>

          <div className="flex justify-center items-center gap-4 mb-8">

            <Button size="xxl" asChild>
              <Link href="/dashboard">Create account</Link>
            </Button>
            <Button variant="outline" size="xxl" >
              <Link href="/dashboard">Log in account</Link>
            </Button>

          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-12 bg-muted">
        <div className="max-w-8xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Exam Readiness Tools</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-card py-4  px-3 rounded-xl border border-border text-center"
              >
                <div className=" mx-auto mb-1 flex items-center justify-center">
                  <feature.icon className="size-16 text-primary" />
                </div>
                <h3 className="font-bold text-3xl mb-2">{feature.title}</h3>
                <p className="text-2xl text-center font-medium text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-12">Choose Your Plan</h2>

          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {/* Starter Plan */}
            <div className="bg-card  rounded-xl border border-border shadow-2xl">
              <div className="bg-card px-4 py-5 rounded-xl border border-border shadow-lg">
                <div className="bg-muted px-4 py-5 rounded-xl">

                  <div className="inline-block px-3 py-1 bg-muted rounded-md text-sm mb-4">
                    Starter Plan
                  </div>
                  <div className="text-3xl font-bold mb-6">
                    $0.00<span className="text-base font-normal text-muted-foreground">/lifetime</span>
                  </div>
                </div>
              </div>
              <div className="p-3">

                <ul className="space-y-3 mb-6 p-6">
                  {starterFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm">
                      <Check className="h-5 w-5 text-success shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button size={"xl"} className="w-full" asChild>
                  <Link href="/dashboard">Start Free</Link>
                </Button>
              </div>
            </div>

            {/* Paid Plan */}
            <div className="bg-card rounded-xl border border-border shadow-2xl">
              <div className="bg-card px-4 py-5 rounded-xl border border-border shadow-lg">
                <div className="bg-muted px-4 py-5 rounded-xl">

                  <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-md text-sm mb-4">
                    Paid Plan
                  </div>
                  <div className="text-3xl font-bold mb-6">
                    $10.00<span className="text-base font-normal text-muted-foreground">/month</span>
                  </div>
                </div>
              </div>
              <div className="p-3">
                <ul className="space-y-3 mb-6">
                  {paidFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm">
                      <Check className="h-5 w-5 text-success shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button size={"xl"} className="w-full" asChild>
                  <Link href="/dashboard">Get Started</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-6  lg:px-10 bg-muted">
        <div className="max-w-360 mx-auto">
          <h2 className="text-4xl font-bold text-center mb-9">FAQs</h2>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-primary rounded-xl p-9 py-4"
              >
                <AccordionTrigger className="text-left text-3xl font-bold ">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className=" text-3xl text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </div>
  );
};

export default Landing;
