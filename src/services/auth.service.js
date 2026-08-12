import { createUser } from "../repositories/auth.repository.js";
import { registerSchema } from "../schemas/auth.schema.js";

export async function registerUser(userData) {

    const parsedData = await registerSchema.parseAsync(userData);

    const user = await createUser(parsedData);

    return user;
}