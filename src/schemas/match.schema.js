import * as z from 'zod';

export const createMatchSchema = z.object({
    homeTeam: z.string().min(1, { message: 'Home team is required' }),
    awayTeam: z.string().min(1, { message: 'Away team is required' }),
    homeGoals: z.number().int().nonnegative({ message: 'Home goals must be a non-negative integer' }),
    awayGoals: z.number().int().nonnegative({ message: 'Away goals must be a non-negative integer' }),
    stage: z.enum(['Group Stage', 'Round of 16', 'Quarter-finals', 'Semi-finals', 'Final'], { message: 'Invalid stage' }),
    venue: z.string().min(1, { message: 'Venue is required' }),
    date: z.string().regex(/^\d{2}\/\d{2}\/\d{4}$/, { message: 'Date must be in DD/MM/YYYY format' }),
    imageUrl: z.string().url({ message: 'Image URL must be a valid URL' }),
    description: z.string().min(1, { message: 'Description is required' }),
});

export default createMatchSchema;