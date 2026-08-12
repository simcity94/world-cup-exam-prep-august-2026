import userRepository, { createUser, findByEmail } from "../repositories/user.repository.js";
import { registerSchema } from "../schemas/auth.schema.js";
import bcrypt from 'bcrypt';
import { createAuthToken } from "../utils/token.js";

export async function registerUser(userData) {

    const parsedData = await registerSchema.parseAsync(userData);

    const user = await userRepository.createUser(parsedData);

    return user;
}

export async function loginUser(userData) {

    const user = await findByEmail(userData.email);

    if (!user) {
        throw new Error('No user found!!');
    }

    const isPasswordValid = await bcrypt.compare(userData.password, user.password);

    if (!isPasswordValid) {
        throw new Error('Invalid password!!');
    }

    const payload = {
        id: user.id,
        email: user.email,
    };

    const token = createAuthToken(payload);

    return token;
}

const authService = {
    registerUser,
    loginUser
};

export default authService;