
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const channels = [
  {
    title: "Quantum Physics Explorers",
    description: "Dive deep into the world of quantum mechanics, from superposition to entanglement.",
    members: "12.k",
    image: "https://placehold.co/400x200.png",
    aiHint: "atom molecule",
  },
  {
    title: "Renaissance Art History",
    description: "A journey through the masterpieces of Leonardo, Michelangelo, and Raphael.",
    members: "8.7k",
    image: "https://placehold.co/400x200.png",
    aiHint: "renaissance painting",
  },
  {
    title: "Advanced Javascript",
    description: "Discussing modern JS, frameworks, and performance optimization techniques.",
    members: "25.1k",
    image: "https://placehold.co/400x200.png",
    aiHint: "code screen",
  },
  {
    title: "Creative Writing Workshop",
    description: "Share your stories, poems, and scripts. Get feedback and improve your craft.",
    members: "6.3k",
    image: "https://placehold.co/400x200.png",
    aiHint: "writing book",
  },
  {
    title: "Sustainable Architecture",
    description: "Designing the future of eco-friendly buildings and urban spaces.",
    members: "4.8k",
    image: "https://placehold.co/400x200.png",
    aiHint: "modern architecture",
  },
  {
    title: "AI & Machine Learning",
    description: "The hub for enthusiasts and professionals in the field of Artificial Intelligence.",
    members: "31.5k",
    image: "https://placehold.co/400x200.png",
    aiHint: "artificial intelligence",
  },
];

export default function ChannelsPage() {
  const [userRole, setUserRole] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedRole = localStorage.getItem("userRole");
      setUserRole(storedRole);
    }
  }, []);

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
            <h1 className="text-2xl font-bold tracking-tight">Channels</h1>
            <p className="text-muted-foreground">Discover and join channels to learn with others.</p>
        </div>
        <div className="flex gap-2">
            <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search channels..." className="pl-9" />
            </div>
            {userRole === 'admin' && <Button>Create Channel</Button>}
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {channels.map((channel, index) => (
          <Card key={index} className="overflow-hidden">
            <CardHeader className="p-0">
                <Image
                src={channel.image}
                alt={channel.title}
                width={400}
                height={200}
                className="w-full h-32 object-cover"
                data-ai-hint={channel.aiHint}
                />
            </CardHeader>
            <CardContent className="p-4">
                <CardTitle className="text-lg">{channel.title}</CardTitle>
                <CardDescription className="mt-1 h-10 text-ellipsis overflow-hidden">{channel.description}</CardDescription>
                <p className="text-xs text-muted-foreground mt-2">{channel.members} members</p>
            </CardContent>
            <CardFooter className="p-4 pt-0">
                <Button className="w-full">Join Channel</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
