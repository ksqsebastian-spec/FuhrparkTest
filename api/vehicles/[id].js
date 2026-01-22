import { supabase } from '../lib/supabase.js';
import { requireAuth } from '../lib/auth.js';

async function handler(req, res) {
    const { id } = req.query;

    if (req.method === 'GET') {
        const { data, error } = await supabase
            .from('vehicles')
            .select('*')
            .eq('id', id)
            .single();

        if (error) {
            return res.status(404).json({ error: 'Vehicle not found' });
        }

        return res.status(200).json(data);
    }

    if (req.method === 'PATCH') {
        const { data, error } = await supabase
            .from('vehicles')
            .update(req.body)
            .eq('id', id)
            .select()
            .single();

        if (error) {
            return res.status(500).json({ error: error.message });
        }

        return res.status(200).json(data);
    }

    if (req.method === 'DELETE') {
        const { error } = await supabase
            .from('vehicles')
            .delete()
            .eq('id', id);

        if (error) {
            return res.status(500).json({ error: error.message });
        }

        return res.status(204).end();
    }

    return res.status(405).json({ error: 'Method not allowed' });
}

export default requireAuth(handler);
