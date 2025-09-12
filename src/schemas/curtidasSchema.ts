import { z } from 'zod';
import sanitizeHtml from 'sanitize-html';


export const curtidasSchema = z.object({
    idusuario: z.number().int().positive(),
    idpost: z.number().int().positive()
});