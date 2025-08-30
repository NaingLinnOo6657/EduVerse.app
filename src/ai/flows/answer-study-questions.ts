// This file is machine-generated - edit at your own risk!

'use server';

/**
 * @fileOverview An AI agent that answers study questions with citations.
 *
 * - answerStudyQuestion - A function that handles answering study questions.
 * - AnswerStudyQuestionInput - The input type for the answerStudyQuestion function.
 * - AnswerStudyQuestionOutput - The return type for the answerStudyQuestion function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AnswerStudyQuestionInputSchema = z.object({
  question: z.string().describe('The study question to be answered.'),
});

export type AnswerStudyQuestionInput = z.infer<typeof AnswerStudyQuestionInputSchema>;

const AnswerStudyQuestionOutputSchema = z.object({
  answer: z.string().describe('The answer to the study question, with citations.'),
});

export type AnswerStudyQuestionOutput = z.infer<typeof AnswerStudyQuestionOutputSchema>;

export async function answerStudyQuestion(input: AnswerStudyQuestionInput): Promise<AnswerStudyQuestionOutput> {
  return answerStudyQuestionFlow(input);
}

const answerStudyQuestionPrompt = ai.definePrompt({
  name: 'answerStudyQuestionPrompt',
  input: {schema: AnswerStudyQuestionInputSchema},
  output: {schema: AnswerStudyQuestionOutputSchema},
  prompt: `You are an AI chatbot designed to answer study questions with citations.

  Answer the following question, providing citations where appropriate:

  Question: {{{question}}}`,
});

const answerStudyQuestionFlow = ai.defineFlow(
  {
    name: 'answerStudyQuestionFlow',
    inputSchema: AnswerStudyQuestionInputSchema,
    outputSchema: AnswerStudyQuestionOutputSchema,
  },
  async input => {
    const {output} = await answerStudyQuestionPrompt(input);
    return output!;
  }
);
