
"use client";

import { useState, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from '@/components/ui/textarea';
import { Upload, Loader2, FileAudio, FileText, Bot } from "lucide-react";
import { transcribeMeeting } from '@/ai/flows/transcribe-meeting';
import { summarizeMeeting } from '@/ai/flows/summarize-meeting';

export default function MeetingRecapPage() {
    const [audioFile, setAudioFile] = useState<File | null>(null);
    const [transcript, setTranscript] = useState<string>("");
    const [summary, setSummary] = useState<string>("");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setAudioFile(file);
            setTranscript("");
            setSummary("");
            setError(null);
        }
    };

    const handleFileClick = () => {
        fileInputRef.current?.click();
    };

    const generateRecap = async () => {
        if (!audioFile) {
            setError("Please select an audio file first.");
            return;
        }

        setIsLoading(true);
        setError(null);
        setTranscript("");
        setSummary("");

        try {
            // 1. Convert file to data URI
            const reader = new FileReader();
            reader.readAsDataURL(audioFile);
            const dataUri = await new Promise<string>((resolve, reject) => {
                reader.onload = () => resolve(reader.result as string);
                reader.onerror = (error) => reject(error);
            });

            // 2. Transcribe
            const transcriptionResponse = await transcribeMeeting({ audioDataUri: dataUri });
            setTranscript(transcriptionResponse.transcription);
            
            // 3. Summarize
            const summaryResponse = await summarizeMeeting({ transcript: transcriptionResponse.transcription });
            setSummary(summaryResponse.summary);

        } catch (err) {
            console.error("Error generating recap:", err);
            setError("Failed to generate the meeting recap. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="space-y-8 max-w-4xl mx-auto">
            <div className="text-center">
                <h1 className="text-3xl font-bold tracking-tight">AI Meeting Recap</h1>
                <p className="text-muted-foreground mt-2">
                    Upload a meeting recording to get a full transcript and a concise summary.
                </p>
            </div>

            <Card className="shadow-lg">
                <CardHeader>
                    <CardTitle>Upload Recording</CardTitle>
                    <CardDescription>
                        Select an audio file (e.g., MP3, WAV, M4A) to begin.
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <input
                        type="file"
                        ref={fileInputRef}
                        onChange={handleFileChange}
                        className="hidden"
                        accept="audio/*"
                    />
                    <Button variant="outline" className="w-full justify-start text-left" onClick={handleFileClick}>
                        <Upload className="mr-2 h-4 w-4" />
                        {audioFile ? audioFile.name : 'Choose an audio file...'}
                    </Button>
                    <Button size="lg" className="w-full" onClick={generateRecap} disabled={!audioFile || isLoading}>
                        {isLoading ? (
                            <>
                                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                                Generating Recap...
                            </>
                        ) : (
                            'Generate Recap'
                        )}
                    </Button>
                     {error && <p className="text-sm text-destructive">{error}</p>}
                </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-6">
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                           <FileText className="h-5 w-5" /> Transcript
                        </CardTitle>
                        <CardDescription>The full text from your meeting audio.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Textarea 
                            value={transcript || "Transcription will appear here..."} 
                            readOnly 
                            className="h-64 resize-none"
                            placeholder="Transcription will appear here..."
                        />
                    </CardContent>
                </Card>
                 <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                           <Bot className="h-5 w-5" /> AI Summary
                        </CardTitle>
                        <CardDescription>Key points and action items, summarized.</CardDescription>
                    </CardHeader>
                    <CardContent>
                         <Textarea 
                            value={summary || "AI-powered summary will appear here..."} 
                            readOnly 
                            className="h-64 resize-none"
                            placeholder="AI-powered summary will appear here..."
                         />
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
