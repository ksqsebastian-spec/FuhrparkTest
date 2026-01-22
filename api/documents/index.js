import { supabase } from '../lib/supabase.js';
import { requireAuth } from '../lib/auth.js';

async function handler(req, res) {
    if (req.method === 'GET') {
        const { data, error } = await supabase
            .from('documents')
            .select('*')
            .order('created_at', { ascending: false });

        if (error) {
            return res.status(500).json({ error: error.message });
        }

        return res.status(200).json(data);
    }

    if (req.method === 'POST') {
        const { data, error } = await supabase
            .from('documents')
            .insert([req.body])
            .select()
            .single();

        if (error) {
            return res.status(500).json({ error: error.message });
        }

        return res.status(201).json(data);
    }

    return res.status(405).json({ error: 'Method not allowed' });
}

export default requireAuth(handler);
