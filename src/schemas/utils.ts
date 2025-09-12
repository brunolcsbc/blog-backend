import sanitizeHtml from "sanitize-html";
import { z } from "zod";

export const idSchema = z.string().refine((val) => Number.isInteger(Number(val)), "Id inválido").transform(val => Number(val));
export const stringSearch = z.string().min(1, "Os parâmetro de consulta não podem ser vazio").transform(val => sanitizeHtml(val));
export const emailSchema = z.email("Email inválido");