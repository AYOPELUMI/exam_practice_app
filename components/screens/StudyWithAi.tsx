"use client"

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Send, Share, Clock } from "lucide-react";

interface Message {
    id: string;
    role: "user" | "ai";
    content: string;
}

const StudyWithAI = () => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState("");

    const handleSend = () => {
        if (!input.trim()) return;
        const userMsg: Message = { id: Date.now().toString(), role: "user", content: input };
        setMessages((prev) => [...prev, userMsg]);
        setInput("");
        // Simulate AI response
        setTimeout(() => {
            const aiMsg: Message = {
                id: (Date.now() + 1).toString(),
                role: "ai",
                content: "That's a great question! Based on your study materials, here's what I can tell you...",
            };
            setMessages((prev) => [...prev, aiMsg]);
        }, 1000);
    };

    return (
        <>
            <div className="flex flex-col h-[calc(100vh-7rem)]">
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                    <div>
                        <h1 className="text-xl font-bold text-foreground">Study with AI</h1>
                        <p className="text-sm text-muted-foreground">AI assistance for explanations, revision, and exam clarification.</p>
                    </div>
                    <Button variant="accent" className="bg-accent text-accent-foreground hover:bg-accent/90">
                        Upgrade plan
                    </Button>
                </div>

                <div className="flex justify-end gap-4 mb-4">
                    <button className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors">
                        <Share className="h-4 w-4" /> Share
                    </button>
                    <button className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors">
                        <Clock className="h-4 w-4" /> History
                    </button>
                </div>

                {/* Chat Area */}
                <div className="flex-1 flex flex-col items-center justify-center overflow-y-auto scrollbar-thin">
                    {messages.length === 0 ? (
                        <div className="text-center space-y-3">
                            <h2 className="text-3xl font-bold text-primary">Talk to your AI</h2>
                            <p className="text-muted-foreground max-w-lg">
                                Study with AI, Ask questions regarding your study and get them answered instantly
                            </p>
                        </div>
                    ) : (
                        <div className="w-full max-w-2xl space-y-4 px-4">
                            {messages.map((msg) => (
                                <div key={msg.id} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                                    <div className={`max-w-[80%] rounded-xl px-4 py-3 text-sm ${msg.role === "user"
                                        ? "bg-primary text-primary-foreground"
                                        : "bg-card border border-border text-foreground"
                                        }`}>
                                        {msg.content}
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Input Area */}
                <div className="mt-4 max-w-2xl mx-auto w-full">
                    <div className="relative border border-border rounded-xl bg-card">
                        <Textarea
                            placeholder="Ask your question"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); handleSend(); } }}
                            className="min-h-[120px] border-0 resize-none focus-visible:ring-0 pr-12"
                        />
                        <Button
                            size="icon"
                            onClick={handleSend}
                            className="absolute bottom-3 right-3 h-8 w-8 rounded-lg"
                        >
                            <Send className="h-4 w-4" />
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default StudyWithAI;
