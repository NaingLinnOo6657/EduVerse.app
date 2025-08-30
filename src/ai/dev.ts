import { config } from 'dotenv';
config();

import '@/ai/flows/suggest-content.ts';
import '@/ai/flows/answer-study-questions.ts';
import '@/ai/flows/summarize-meeting.ts';
import '@/ai/flows/transcribe-meeting.ts';