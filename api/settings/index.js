import { supabase } from '../lib/supabase.js';
import { requireAuth } from '../lib/auth.js';

async function handler(req, res) {
    if (req.method === 'GET') {
        const { data, error } = await supabase
            .from('settings')
            .select('*')
            .limit(1)
            .single();

        if (error && error.code !== 'PGRST116') { // PGRST116 = no rows
            return res.status(500).json({ error: error.message });
        }

        return res.status(200).json(data || {});
    }

    if (req.method === 'POST' || req.method === 'PATCH') {
        // Check if settings exist
        const { data: existing } = await supabase
            .from('settings')
            .select('id')
            .limit(1)
            .single();

        let result;
        if (existing?.id) {
            // Update existing
            result = await supabase
                .from('settings')
                .update(req.body)
                .eq('id', existing.id)
                .select()
                .single();
        } else {
            // Insert new
            result = await supabase
                .from('settings')
                .insert([req.body])
                .select()
                .single();
        }

        if (result.error) {
            return res.status(500).json({ error: result.error.message });
        }

        return res.status(200).json(result.data);
    }

    return res.status(405).json({ error: 'Method not allowed' });
}

export default requireAuth(handler);
