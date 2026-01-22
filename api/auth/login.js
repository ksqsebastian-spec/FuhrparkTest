import bcrypt from 'bcryptjs';
import { generateToken } from '../lib/auth.js';

const PASSWORD_HASH = process.env.APP_PASSWORD_HASH;

export default async function handler(req, res) {
    // Only allow POST
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const { password } = req.body;

        if (!password) {
            return res.status(400).json({ error: 'Password required' });
        }

        // Verify password against hash
        const isValid = await bcrypt.compare(password, PASSWORD_HASH);

        if (!isValid) {
            return res.status(401).json({ error: 'Invalid password' });
        }

        // Generate JWT token
        const token = generateToken({ authenticated: true, timestamp: Date.now() });

        return res.status(200).json({ token });
    } catch (error) {
        console.error('Login error:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
}
