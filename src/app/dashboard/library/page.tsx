
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Search, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";

const resources = [
  { title: "Quantum Computing Explained", author: "Dr. Eleanor Vance", aiHint: "quantum physics" },
  { title: "Sonnets of the Renaissance", author: "Prof. Julian Hayes", aiHint: "old book" },
  { title: "Advanced Pythonic Data", author: "Ada Lovelace", aiHint: "python code" },
  { title: "The Roman Empire's Rise", author: "Marcus Aurelius", aiHint: "roman ruins" },
  { title: "Organic Chemistry Today", author: "Marie Curie", aiHint: "chemistry molecules" },
  { title: "Microeconomics Principles", author: "Adam Smith", aiHint: "stock chart" },
  { title: "Introduction to Astrophysics", author: "Carl Sagan", aiHint: "galaxy stars" },
  { title: "The Art of Fiction", author: "Virginia Woolf", aiHint: "writing pen" },
  { title: "Algorithms & You", author: "Grace Hopper", aiHint: "flowchart diagram" },
  { title: "A Brief History of Time", author: "Stephen Hawking", aiHint: "black hole" },
  { title: "The Structure of Scientific Revolutions", author: "Thomas Kuhn", aiHint: "gears turning" },
  { title: "Behavioral Psychology", author: "B.F. Skinner", aiHint: "brain maze" },
  { title: "Silent Spring", author: "Rachel Carson", aiHint: "forest nature" },
  { title: "The Selfish Gene", author: "Richard Dawkins", aiHint: "dna strand" },
  { title: "Cosmos", author: "Carl Sagan", aiHint: "nebula space" },
  { title: "Thinking, Fast and Slow", author: "Daniel Kahneman", aiHint: "brain gears" },
  { title: "Sapiens: A Brief History of Humankind", author: "Yuval Noah Harari", aiHint: "ancient map" },
  { title: "The Double Helix", author: "James Watson", aiHint: "dna model" },
  { title: "A History of Western Philosophy", author: "Bertrand Russell", aiHint: "greek statue" },
  { title: "The Elements of Style", author: "Strunk & White", aiHint: "notebook pen" },
  { title: "Calculus Made Easy", author: "Silvanus Thompson", aiHint: "math equations" },
  { title: "On the Origin of Species", author: "Charles Darwin", aiHint: "finch bird" },
  { title: "The Wealth of Nations", author: "Adam Smith", aiHint: "old coin" },
  { title: "Guns, Germs, and Steel", author: "Jared Diamond", aiHint: "world map" },
  { title: "The Feynman Lectures on Physics", author: "Richard Feynman", aiHint: "atom diagram" },
  { title: "Introduction to the Theory of Computation", author: "Michael Sipser", aiHint: "binary code" },
  { title: "The Design of Everyday Things", author: "Don Norman", aiHint: "product design" },
  { title: "Freakonomics", author: "Levitt & Dubner", aiHint: "question mark" },
  { title: "The Odyssey", author: "Homer", aiHint: "ancient ship" },
  { title: "Moby Dick", author: "Herman Melville", aiHint: "whale ocean" },
  { title: "War and Peace", author: "Leo Tolstoy", aiHint: "old soldier" },
  { title: "1984", author: "George Orwell", aiHint: "security camera" },
  { title: "To Kill a Mockingbird", author: "Harper Lee", aiHint: "courthouse gavel" },
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald", aiHint: "1920s party" },
  { title: "Pride and Prejudice", author: "Jane Austen", aiHint: "regency couple" },
  { title: "The Catcher in the Rye", author: "J.D. Salinger", aiHint: "city street" },
  { title: "Brave New World", author: "Aldous Huxley", aiHint: "futuristic city" },
  { title: "The Lord of the Rings", author: "J.R.R. Tolkien", aiHint: "fantasy landscape" },
  { title: "The Hobbit", author: "J.R.R. Tolkien", aiHint: "fantasy map" },
  { title: "Fahrenheit 451", author: "Ray Bradbury", aiHint: "burning book" },
  { title: "Jane Eyre", author: "Charlotte Brontë", aiHint: "gothic manor" },
  { title: "Wuthering Heights", author: "Emily Brontë", aiHint: "moody landscape" },
  { title: "Animal Farm", author: "George Orwell", aiHint: "farm animals" },
  { title: "The Divine Comedy", author: "Dante Alighieri", aiHint: "heavenly light" },
  { title: "The Iliad", author: "Homer", aiHint: "greek soldiers" },
  { title: "Don Quixote", author: "Miguel de Cervantes", aiHint: "windmill knight" },
  { title: "One Hundred Years of Solitude", author: "Gabriel García Márquez", aiHint: "magical realism" },
  { title: "The Sound and the Fury", author: "William Faulkner", aiHint: "southern gothic" },
  { title: "Ulysses", author: "James Joyce", aiHint: "dublin street" },
  { title: "The Stranger", author: "Albert Camus", aiHint: "sunny beach" }
];

export default function LibraryPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
         <div>
            <h1 className="text-3xl font-bold tracking-tight">E-Library</h1>
            <p className="text-muted-foreground mt-1">
            Access a vast collection of books, research papers, and study materials.
            </p>
        </div>
        <div className="flex items-center gap-2">
            <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search for books..." className="pl-9" />
            </div>
            <Button variant="ghost" size="icon">
                <Settings className="h-5 w-5" />
                <span className="sr-only">Settings</span>
            </Button>
        </div>
      </div>

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-x-4 gap-y-8">
        {resources.map((resource, index) => (
          <div key={index} className="group text-center">
            <div className="relative w-[100px] h-[150px] mx-auto rounded-md overflow-hidden shadow-lg transition-transform group-hover:scale-105">
                <Image
                    src={`https://placehold.co/100x150.png`}
                    alt={resource.title}
                    width={100}
                    height={150}
                    className="w-full h-full object-cover"
                    data-ai-hint={resource.aiHint}
                />
            </div>
            <div className="mt-2 px-1">
              <p className="text-sm font-semibold truncate" title={resource.title}>{resource.title}</p>
              <p className="text-xs text-muted-foreground truncate" title={resource.author}>{resource.author}</p>
            </div>
          </div>
        ))}
      </div>
       <div className="flex justify-center pt-4">
            <Button variant="outline">Load More</Button>
        </div>
    </div>
  );
}
