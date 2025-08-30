
"use client";

import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Bot, Paperclip, Send, Loader2 } from "lucide-react";
import { answerStudyQuestion } from "@/ai/flows/answer-study-questions";

const contacts = [
    { name: "AI Assistant", role: "Study Buddy", online: true, avatar: "bot" },
    { name: "Dr. Evelyn Reed", role: "Professor", online: true, avatar: "https://placehold.co/40x40.png" },
    { name: "CS101 Study Group", role: "12 Members", online: false, avatar: "https://placehold.co/40x40.png" },
    { name: "Alex Student", role: "Classmate", online: false, avatar: "https://placehold.co/40x40.png" },
    { name: "Project Phoenix Team", role: "5 Members", online: true, avatar: "https://placehold.co/40x40.png" },
];

interface Message {
    text: string;
    isUser: boolean;
}

export default function ChatPage() {
    const [messages, setMessages] = useState<Message[]>([
        { text: "Hello! I'm your AI Assistant. How can I help you with your studies today? You can ask me to explain concepts, solve problems, or help you draft content.", isUser: false },
        { text: "Can you explain the theory of relativity in simple terms?", isUser: true },
    ]);
    const [inputValue, setInputValue] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleSendMessage = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!inputValue.trim()) return;

        const userMessage: Message = { text: inputValue, isUser: true };
        setMessages(prev => [...prev, userMessage]);
        setInputValue("");
        setIsLoading(true);

        try {
            const response = await answerStudyQuestion({ question: inputValue });
            const aiMessage: Message = { text: response.answer, isUser: false };
            setMessages(prev => [...prev, aiMessage]);
        } catch (error) {
            console.error("Error getting AI response:", error);
            const errorMessage: Message = { text: "Sorry, I encountered an error. Please try again.", isUser: false };
            setMessages(prev => [...prev, errorMessage]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="h-[calc(100vh-10rem)] w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <div className="md:col-span-1 lg:col-span-1 flex flex-col gap-4">
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="Search chats..." className="pl-9" />
                </div>
                <div className="flex-1 overflow-y-auto pr-2">
                    <div className="space-y-2">
                        {contacts.map((contact, index) => (
                            <div key={index} className="flex items-center gap-3 p-2 rounded-lg cursor-pointer hover:bg-muted transition-colors bg-card">
                                <div className="relative">
                                    <Avatar>
                                        {contact.avatar === 'bot' ?
                                            <AvatarFallback className="bg-primary text-primary-foreground"><Bot /></AvatarFallback> :
                                            <AvatarImage src={contact.avatar} />
                                        }
                                        <AvatarFallback>{contact.name.substring(0, 2)}</AvatarFallback>
                                    </Avatar>
                                    {contact.online && <span className="absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full bg-green-500 ring-2 ring-white" />}
                                </div>
                                <div className="flex-1 truncate">
                                    <p className="font-semibold truncate">{contact.name}</p>
                                    <p className="text-sm text-muted-foreground truncate">{contact.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="md:col-span-2 lg:col-span-3 bg-card rounded-lg flex flex-col h-full">
                <div className="p-4 border-b flex items-center gap-3">
                    <Avatar>
                        <AvatarFallback className="bg-primary text-primary-foreground"><Bot /></AvatarFallback>
                    </Avatar>
                    <div>
                        <p className="font-semibold">AI Assistant</p>
                        <p className="text-sm text-muted-foreground flex items-center gap-1.5">
                            <span className="block h-2 w-2 rounded-full bg-green-500" /> Online
                        </p>
                    </div>
                </div>
                <div className="flex-1 p-4 overflow-y-auto space-y-4">
                    {messages.map((message, index) => (
                         <div key={index} className={`flex items-end gap-2 ${message.isUser ? 'justify-end' : ''}`}>
                            {!message.isUser && (
                                <Avatar className="h-8 w-8">
                                    <AvatarFallback className="bg-primary text-primary-foreground"><Bot className="h-4 w-4"/></AvatarFallback>
                                </Avatar>
                            )}
                            <div className={`${message.isUser ? 'bg-primary text-primary-foreground' : 'bg-muted'} p-3 rounded-lg max-w-xs lg:max-w-md`}>
                                <p>{message.text}</p>
                            </div>
                             {message.isUser && (
                                 <Avatar className="h-8 w-8">
                                    <AvatarImage src="https://placehold.co/32x32.png" />
                                    <AvatarFallback>U</AvatarFallback>
                                </Avatar>
                             )}
                        </div>
                    ))}
                    {isLoading && (
                         <div className="flex items-end gap-2">
                             <Avatar className="h-8 w-8">
                                <AvatarFallback className="bg-primary text-primary-foreground"><Bot className="h-4 w-4"/></AvatarFallback>
                            </Avatar>
                            <div className="bg-muted p-3 rounded-lg max-w-xs lg:max-w-md">
                                <div className="flex items-center gap-2">
                                    <Loader2 className="h-4 w-4 animate-spin"/>
                                    <span>Thinking...</span>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                <form onSubmit={handleSendMessage} className="p-4 border-t">
                    <div className="relative">
                        <Input
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            placeholder="Type your message..."
                            className="pr-24"
                            disabled={isLoading}
                        />
                        <div className="absolute right-2 top-1/2 -translate-y-1/2 flex gap-2">
                            <Button variant="ghost" size="icon" type="button" disabled={isLoading}><Paperclip className="h-5 w-5"/></Button>
                            <Button size="icon" type="submit" disabled={isLoading}>
                                <Send className="h-5 w-5"/>
                            </Button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}
