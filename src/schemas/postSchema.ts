import { z } from 'zod';
import sanitizeHtml from 'sanitize-html';


export const postSchema = z.object({
    titulo: z.string().min(1, "Título é obrigatório").max(250, "Máximo 250 caracteres").transform((val) => sanitizeHtml(val)),
    conteudo: z.string().min(1, "Conteúdo é obrigatório").transform((val) => sanitizeHtml(val)),
    idusuario: z.number().int().positive()
});