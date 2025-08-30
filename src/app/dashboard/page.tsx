
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { ThumbsUp, MessageCircle, Share2, Send, Wand2, Loader2, Sparkles } from "lucide-react";
import { suggestContent, SuggestContentInput } from "@/ai/flows/suggest-content";

interface Post {
  id: number;
  author: string;
  role: string;
  avatar: string;
  avatarHint: string;
  content: string;
  image?: string;
  imageHint?: string;
}

const initialPosts: Post[] = [
  {
    id: 1,
    author: "Dr. Jane Professional",
    role: "Astrophysicist | Educator",
    avatar: "https://placehold.co/40x40.png",
    avatarHint: "professional woman",
    content:
      "Just published a new paper on stellar evolution! 🌟 It's fascinating to see how our understanding of the cosmos is constantly expanding. For all my students and fellow space enthusiasts, you can find the preprint in the e-library. #astrophysics #education",
    image: "https://placehold.co/600x400.png",
    imageHint: "nebula galaxy",
  },
  {
    id: 2,
    author: "Alex Student",
    role: "Computer Science Student",
    avatar: "https://placehold.co/40x40.png",
    avatarHint: "student smiling",
    content:
      "Finally deployed my capstone project! It's a web app that uses machine learning to identify plant species. Huge thanks to everyone in the 'Code & Coffee' channel for the support and feedback. Check out the project link in my profile! #cs #webdev #machinelearning",
  },
  {
    id: 3,
    author: "EduVerse Admin",
    role: "Platform Administrator",
    avatar: "https://placehold.co/40x40.png",
    avatarHint: "logo university",
    content: "📢 New Course Announcement: 'Introduction to Quantum Computing' starts next Monday! Taught by the brilliant Dr. Eleanor Vance. Enroll now through the channels tab. #quantumcomputing #newcourse",
  },
  {
    id: 4,
    author: "Prof. Julian Hayes",
    role: "Art Historian",
    avatar: "https://placehold.co/40x40.png",
    avatarHint: "historian professor",
    content: "This week in 'Renaissance Art History,' we're exploring the rivalry between Michelangelo and Raphael. Their competitive spirit fueled some of the most beautiful art in history. Join the discussion in the channel! #arthistory #renaissance",
    image: "https://placehold.co/600x400.png",
    imageHint: "sistine chapel",
  },
  {
    id: 5,
    author: "Maria Student",
    role: "Biology Student",
    avatar: "https://placehold.co/40x40.png",
    avatarHint: "biology student",
    content: "Just completed a lab on CRISPR gene editing. The precision is mind-blowing! Here’s a microscopic image of our results. So excited about the potential of this technology. #biotech #genetics #crispr",
    image: "https://placehold.co/600x400.png",
    imageHint: "dna microscope",
  },
  {
    id: 6,
    author: "Dr. Ada Lovelace",
    role: "Data Scientist",
    avatar: "https://placehold.co/40x40.png",
    avatarHint: "data scientist",
    content: "Presenting my research on Pythonic data visualization techniques at the upcoming tech conference. It's all about making complex data tell a clear story. #python #dataviz #datascience",
  },
  {
    id: 7,
    author: "EduVerse Admin",
    role: "Platform Administrator",
    avatar: "https://placehold.co/40x40.png",
    avatarHint: "logo university",
    content: "Reminder: Scheduled maintenance tonight from 2 AM to 3 AM UTC. The platform will be temporarily unavailable. We appreciate your understanding as we work to improve EduVerse!",
  },
  {
    id: 8,
    author: "Carlos Student",
    role: "Architecture Student",
    avatar: "https://placehold.co/40x40.png",
    avatarHint: "architecture student",
    content: "My final project on sustainable urban planning is complete. The model focuses on green roofs and rainwater harvesting systems to create a self-sufficient community. #architecture #sustainability #urbanplanning",
    image: "https://placehold.co/600x400.png",
    imageHint: "sustainable city",
  },
  {
    id: 9,
    author: "Dr. Marcus Aurelius",
    role: "Historian & Philosopher",
    avatar: "https://placehold.co/40x40.png",
    avatarHint: "philosopher statue",
    content: "A key takeaway from Stoicism: 'The obstacle is the way.' How do you apply this philosophy to your learning challenges? Share your thoughts below. #stoicism #philosophy #resilience",
  },
  {
    id: 10,
    author: "AI & ML Channel",
    role: "Community Channel",
    avatar: "https://placehold.co/40x40.png",
    avatarHint: "ai circuit",
    content: "Weekly challenge! Can you build a neural network that predicts housing prices with over 90% accuracy? Dataset and starter code are in the channel files. #machinelearning #codingchallenge",
  },
  {
    id: 11,
    author: "Sam Student",
    role: "Creative Writing Student",
    avatar: "https://placehold.co/40x40.png",
    avatarHint: "writer student",
    content: "I'm experiencing some serious writer's block for my short story assignment. Any tips on how to get the creative juices flowing again? #writingcommunity #creativewriting",
  },
  {
    id: 12,
    author: "EduVerse Admin",
    role: "Platform Administrator",
    avatar: "https://placehold.co/40x40.png",
    avatarHint: "logo university",
    content: "We've just added 50 new research papers to the E-Library, covering topics from astrophysics to zoology. Happy reading! #elibrary #research",
  },
  {
    id: 13,
    author: "Dr. Marie Curie",
    role: "Chemist & Physicist",
    avatar: "https://placehold.co/40x40.png",
    avatarHint: "scientist woman",
    content: "Exploring the applications of organic chemistry in modern medicine. The synthesis of new compounds is paving the way for groundbreaking treatments. #chemistry #medicine",
    image: "https://placehold.co/600x400.png",
    imageHint: "chemistry lab",
  },
  {
    id: 14,
    author: "Leo Student",
    role: "Film Student",
    avatar: "https://placehold.co/40x40.png",
    avatarHint: "film student",
    content: "My short film, 'The Last Librarian,' is now available for viewing! It’s a documentary about the importance of physical media in a digital age. Link in my profile. Feedback is welcome! #film #documentary",
  },
  {
    id: 15,
    author: "Dr. Stephen Hawking",
    role: "Theoretical Physicist",
    avatar: "https://placehold.co/40x40.png",
    avatarHint: "physicist thinking",
    content: "A brief lecture on black holes and the information paradox will be streamed live from my channel tomorrow at 3 PM. Prepare your questions! #physics #blackholes",
  },
  ...Array.from({ length: 35 }, (_, i) => i + 16).map(id => ({
    id,
    author: `User ${id}`,
    role: ['Student', 'Professional', 'Admin'][id % 3],
    avatar: `https://placehold.co/40x40.png`,
    avatarHint: "person avatar",
    content: `This is sample post number ${id}. Exploring new ideas and concepts within the EduVerse platform. #learning #samplepost`,
    ...(id % 4 === 0 && { 
        image: `https://placehold.co/600x400.png`,
        imageHint: "abstract learning"
    }),
  }))
];

const postPlaceholders: { [key: string]: string } = {
  student: "Share your learning progress or a new project!",
  professional: "Post a blog, share research, or start a discussion.",
  admin: "Announce a new course, event, or institution news.",
  default: "What's on your mind, learner?",
};

export default function HomeFeed() {
  const [posts, setPosts] = useState<Post[]>(initialPosts);
  const [newPostContent, setNewPostContent] = useState("");
  const [isPosting, setIsPosting] = useState(false);
  const [isLoadingSuggestions, setIsLoadingSuggestions] = useState(false);
  const [suggestedTopics, setSuggestedTopics] = useState<string[]>([]);
  const [userRole, setUserRole] = useState<string>('default');
  
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedRole = localStorage.getItem('userRole') || 'default';
      setUserRole(storedRole);
    }
    getSuggestions();
  }, []);

  const handlePost = () => {
    if(!newPostContent.trim()) return;

    setIsPosting(true);
    const newPost: Post = {
        id: posts.length + 1,
        author: "User",
        role: "Learner",
        avatar: "https://placehold.co/40x40.png",
        avatarHint: "person avatar",
        content: newPostContent
    };
    // Simulate API call
    setTimeout(() => {
        setPosts(prev => [newPost, ...prev]);
        setNewPostContent("");
        setIsPosting(false);
    }, 500);
  }

  const getSuggestions = async () => {
    setIsLoadingSuggestions(true);
    setSuggestedTopics([]);
    try {
        const input: SuggestContentInput = {
            interests: ["Quantum Physics", "Renaissance Art", "Javascript"],
            accountType: 'Student',
            trendingContent: ["AI & Machine Learning", "Sustainable Architecture"]
        };
        const result = await suggestContent(input);
        setSuggestedTopics(result.suggestedContent);
    } catch (error) {
        console.error("Failed to get suggestions:", error);
    } finally {
        setIsLoadingSuggestions(false);
    }
  };


  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start max-w-5xl mx-auto">
      <div className="lg:col-span-2 space-y-6">
        <Card>
          <CardHeader className="pb-2">
            <div className="flex items-center gap-3">
              <Avatar>
                <AvatarImage src="https://placehold.co/40x40.png" />
                <AvatarFallback>U</AvatarFallback>
              </Avatar>
              <div className="w-full">
                <Textarea
                  placeholder={postPlaceholders[userRole]}
                  className="bg-muted border-none focus-visible:ring-0 text-base"
                  value={newPostContent}
                  onChange={(e) => setNewPostContent(e.target.value)}
                  disabled={isPosting}
                />
              </div>
            </div>
          </CardHeader>
          <CardFooter>
            <Button className="ml-auto" onClick={handlePost} disabled={isPosting || !newPostContent.trim()}>
              {isPosting ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : <Send className="w-4 h-4 mr-2" />} 
              Post
            </Button>
          </CardFooter>
        </Card>

        {posts.map((post) => (
          <Card key={post.id}>
            <CardHeader>
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage data-ai-hint={post.avatarHint} src={post.avatar} />
                  <AvatarFallback>{post.author.substring(0,2)}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold">{post.author}</p>
                  <p className="text-xs text-muted-foreground">
                    {post.role}
                  </p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>{post.content}</p>
              {post.image && (
                <Image
                  src={post.image}
                  alt="Post image"
                  width={600}
                  height={400}
                  className="rounded-lg object-cover w-full"
                  data-ai-hint={post.imageHint}
                />
              )}
            </CardContent>
            <CardFooter className="flex justify-between border-t pt-4">
              <Button variant="ghost" className="gap-2">
                <ThumbsUp className="h-4 w-4" /> Like
              </Button>
              <Button variant="ghost" className="gap-2">
                <MessageCircle className="h-4 w-4" /> Comment
              </Button>
              <Button variant="ghost" className="gap-2">
                <Share2 className="h-4 w-4" /> Share
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="space-y-6 lg:col-span-1">
        <Card className="bg-accent/20 border-accent">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-accent-foreground" />
                AI Content Assistant
            </CardTitle>
            <CardDescription>
                Stuck on what to post? Here are some ideas based on your interests.
            </CardDescription>
          </CardHeader>
          <CardContent>
            {isLoadingSuggestions ? (
                <div className="flex items-center justify-center h-24">
                    <Loader2 className="h-6 w-6 animate-spin text-accent-foreground"/>
                </div>
            ) : (
                <ul className="space-y-2 text-sm">
                    {suggestedTopics.map((topic, index) => (
                        <li key={index} 
                            className="cursor-pointer hover:text-primary"
                            onClick={() => setNewPostContent(topic)}>
                           - {topic}
                        </li>
                    ))}
                </ul>
            )}
          </CardContent>
           <CardFooter>
                <Button variant="outline" className="w-full" onClick={getSuggestions} disabled={isLoadingSuggestions}>
                    <Wand2 className="h-4 w-4 mr-2" />
                    Get new ideas
                </Button>
           </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Trending Channels</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between items-center">
                <div>
                    <p className="font-medium">Quantum Mechanics 101</p>
                    <p className="text-sm text-muted-foreground">2,345 members</p>
                </div>
                <Button variant="outline" size="sm">Join</Button>
            </div>
            <div className="flex justify-between items-center">
                <div>
                    <p className="font-medium">AI in Healthcare</p>
                    <p className="text-sm text-muted-foreground">5,123 members</p>
                </div>
                <Button variant="outline" size="sm">Join</Button>
            </div>
            <div className="flex justify-between items-center">
                <div>
                    <p className="font-medium">Ancient History Buffs</p>
                    <p className="text-sm text-muted-foreground">1,890 members</p>
                </div>
                <Button variant="outline" size="sm">Join</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
