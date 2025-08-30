
'use server';

/**
 * @fileOverview An AI content suggestion agent for the home feed.
 *
 * - suggestContent - A function that suggests content for the home feed.
 * - SuggestContentInput - The input type for the suggestContent function.
 * - SuggestContentOutput - The return type for the suggestContent function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestContentInputSchema = z.object({
  interests: z.array(z.string()).describe('The user\'s interests.'),
  accountType: z
    .enum(['Student', 'Professional', 'Admin'])
    .describe('The type of user account.'),
  trendingContent: z.array(z.string()).describe('The current trending content.'),
});
export type SuggestContentInput = z.infer<typeof SuggestContentInputSchema>;

const SuggestContentOutputSchema = z.object({
  suggestedContent: z.array(z.string()).describe('A list of 3-5 creative and engaging content suggestions for the user as a JSON array of strings.'),
});
export type SuggestContentOutput = z.infer<typeof SuggestContentOutputSchema>;

export async function suggestContent(input: SuggestContentInput): Promise<SuggestContentOutput> {
  return suggestContentFlow(input);
}

const prompt = ai.definePrompt({
  name: 'suggestContentPrompt',
  input: {schema: SuggestContentInputSchema},
  output: {schema: SuggestContentOutputSchema},
  prompt: `You are an expert content strategist for a social media platform focused on education and learning.

  Your goal is to provide creative, engaging, and accessible content suggestions to a user.

  Generate a list of 3 to 5 unique post ideas based on the following user profile and trending topics.
  The suggestions should be phrased as interesting questions, thought-provoking statements, or calls to action. Avoid generic topics.

  User Profile:
  - Account Type: {{{accountType}}}
  - Interests: {{#each interests}}"{{this}}"{{#unless @last}}, {{/unless}}{{/each}}

  Current Trending Topics:
  - {{#each trendingContent}}"{{this}}"{{#unless @last}}, {{/unless}}{{/each}}

  Based on this, provide a JSON array of 3-5 suggested post ideas.`,
});

const suggestContentFlow = ai.defineFlow(
  {
    name: 'suggestContentFlow',
    inputSchema: SuggestContentInputSchema,
    outputSchema: SuggestContentOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
