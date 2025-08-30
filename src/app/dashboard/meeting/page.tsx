import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Video, Plus, Calendar } from "lucide-react";
import Image from "next/image";

const upcomingMeetings = [
    {
        title: "Weekly Project Sync",
        time: "10:00 AM - 10:45 AM",
        date: "Monday, July 29",
        attendees: 5
    },
    {
        title: "Calculus II Study Group",
        time: "2:00 PM - 3:30 PM",
        date: "Tuesday, July 30",
        attendees: 12
    },
    {
        title: "Admin Content Review",
        time: "11:00 AM - 12:00 PM",
        date: "Wednesday, July 31",
        attendees: 3
    }
];

export default function MeetingPage() {
  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight">Virtual Classroom</h1>
        <p className="text-muted-foreground mt-2">
          Host and join live sessions, workshops, and study groups.
        </p>
      </div>

      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle>New Meeting</CardTitle>
          <CardDescription>
            Start an instant meeting or schedule one for later.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col sm:flex-row gap-4">
          <Button size="lg" className="flex-1">
            <Plus className="mr-2 h-5 w-5" /> Start Instant Meeting
          </Button>
          <Button size="lg" variant="outline" className="flex-1">
            <Calendar className="mr-2 h-5 w-5" /> Schedule a Meeting
          </Button>
        </CardContent>
      </Card>
      
      <div>
        <h2 className="text-2xl font-semibold mb-4">Upcoming Meetings</h2>
        <div className="space-y-4">
            {upcomingMeetings.map((meeting, index) => (
                <Card key={index} className="flex items-center p-4">
                    <div className="bg-primary/10 p-3 rounded-lg mr-4">
                        <Video className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                        <p className="font-semibold">{meeting.title}</p>
                        <p className="text-sm text-muted-foreground">{meeting.date} | {meeting.time}</p>
                    </div>
                    <div className="flex -space-x-2 overflow-hidden mr-4">
                        {Array.from({length: meeting.attendees}).slice(0, 3).map((_, i) => (
                             <Image key={i} data-ai-hint="person avatar" className="inline-block h-8 w-8 rounded-full ring-2 ring-background" src={`https://placehold.co/32x32.png?text=${i}`} alt="Attendee" width={32} height={32}/>
                        ))}
                        {meeting.attendees > 3 && <div className="flex items-center justify-center h-8 w-8 rounded-full bg-muted text-xs font-medium ring-2 ring-background">+{meeting.attendees - 3}</div>}
                    </div>
                    <Button>Join</Button>
                </Card>
            ))}
        </div>
      </div>

       <Card className="bg-accent/40 border-accent">
          <CardHeader>
            <CardTitle>AI Meeting Assistant</CardTitle>
            <CardDescription>
              Our AI assistant can transcribe your meetings, create summaries, and provide translations in real-time. Enable it in your meeting settings.
            </CardDescription>
          </CardHeader>
      </Card>

    </div>
  );
}
