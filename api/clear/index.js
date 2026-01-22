import { supabase } from '../lib/supabase.js';
import { requireAuth } from '../lib/auth.js';

async function handler(req, res) {
    if (req.method !== 'DELETE') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        // Delete all data from all tables
        await Promise.all([
            supabase.from('maintenance').delete().neq('id', '00000000-0000-0000-0000-000000000000'),
            supabase.from('documents').delete().neq('id', '00000000-0000-0000-0000-000000000000'),
            supabase.from('vehicles').delete().neq('id', '00000000-0000-0000-0000-000000000000')
        ]);

        return res.status(200).json({ success: true });
    } catch (error) {
        console.error('Error clearing data:', error);
        return res.status(500).json({ error: error.message });
    }
}

export default requireAuth(handler);
