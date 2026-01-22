import { supabase } from '../lib/supabase.js';
import { requireAuth } from '../lib/auth.js';

async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        // Parse the multipart form data
        // Vercel automatically parses the body for us
        const { fileName, fileData, folder } = req.body;

        if (!fileName || !fileData) {
            return res.status(400).json({ error: 'Missing fileName or fileData' });
        }

        // Decode base64 file data
        const buffer = Buffer.from(fileData, 'base64');
        const uploadFolder = folder || 'files';
        const filePath = `${uploadFolder}/${fileName}`;

        // Upload to Supabase Storage
        const { data: uploadData, error: uploadError } = await supabase.storage
            .from('documents')
            .upload(filePath, buffer, {
                contentType: getContentType(fileName),
                upsert: false
            });

        if (uploadError) {
            console.error('Upload error:', uploadError);
            return res.status(500).json({ error: uploadError.message });
        }

        // Get the public URL
        const { data: urlData } = supabase.storage
            .from('documents')
            .getPublicUrl(filePath);

        return res.status(200).json({
            path: filePath,
            publicUrl: urlData.publicUrl
        });
    } catch (error) {
        console.error('Upload handler error:', error);
        return res.status(500).json({ error: 'Upload failed' });
    }
}

function getContentType(fileName) {
    const ext = fileName.split('.').pop().toLowerCase();
    const mimeTypes = {
        'jpg': 'image/jpeg',
        'jpeg': 'image/jpeg',
        'png': 'image/png',
        'gif': 'image/gif',
        'webp': 'image/webp',
        'pdf': 'application/pdf',
        'doc': 'application/msword',
        'docx': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        'xls': 'application/vnd.ms-excel',
        'xlsx': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
    };
    return mimeTypes[ext] || 'application/octet-stream';
}

export default requireAuth(handler);
