import { z } from 'zod';
import sanitizeHtml from 'sanitize-html';
import bcrypt from "bcrypt";

export const usuarioSchema = z.object({
    nome: z.string().min(1, "Nome é obrigatório").max(250, "Máximo 250 caracteres").transform((val) => sanitizeHtml(val)),
    sobrenome: z.string().min(1, "Sobrenome é obrigatório").max(250, 'Máximo 250 caracteres').transform((val) => sanitizeHtml(val)),
    email: z.email('Email inválido').transform((val) => sanitizeHtml(val)),
    biografia: z.string().nullable().optional().transform((val) => val ? sanitizeHtml(val) : null),
    avatar_url: z.string().nullable().optional().transform((val) => val ? sanitizeHtml(val) : null),
    senha: z.string().min(6, "A senha deve conter pelo menos 6 caracteres").transform((val) => bcrypt.hashSync(val, 10))
});