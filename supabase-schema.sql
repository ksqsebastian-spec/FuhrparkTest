-- FuhrparkPro Database Schema
-- Run this in Supabase SQL Editor (Dashboard → SQL Editor → New Query)

-- Vehicles table
CREATE TABLE vehicles (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    license_plate TEXT NOT NULL,
    type TEXT,
    make TEXT NOT NULL,
    model TEXT NOT NULL,
    year INTEGER,
    color TEXT,
    vin TEXT,
    mileage INTEGER,
    fuel_type TEXT,
    status TEXT DEFAULT 'active',
    purchase_date DATE,
    purchase_price DECIMAL(10,2),
    insurance_expiry DATE,
    inspection_expiry DATE,
    notes TEXT,
    image_url TEXT,
    custom_fields JSONB DEFAULT '{}',
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Documents table
CREATE TABLE documents (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    vehicle_id UUID REFERENCES vehicles(id) ON DELETE CASCADE,
    type TEXT,
    name TEXT NOT NULL,
    date DATE,
    expiry DATE,
    notes TEXT,
    file_name TEXT,
    file_path TEXT,
    file_type TEXT,
    custom_fields JSONB DEFAULT '{}',
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Maintenance table
CREATE TABLE maintenance (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    vehicle_id UUID REFERENCES vehicles(id) ON DELETE CASCADE,
    type TEXT,
    description TEXT NOT NULL,
    date DATE NOT NULL,
    status TEXT DEFAULT 'scheduled',
    mileage INTEGER,
    cost DECIMAL(10,2),
    provider TEXT,
    notes TEXT,
    custom_fields JSONB DEFAULT '{}',
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Settings table (per-user settings for future auth)
CREATE TABLE settings (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id UUID,
    theme TEXT DEFAULT 'light',
    currency TEXT DEFAULT 'EUR',
    distance_unit TEXT DEFAULT 'km',
    custom_settings JSONB DEFAULT '{}',
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security (RLS) - open for now, lock down later with auth
ALTER TABLE vehicles ENABLE ROW LEVEL SECURITY;
ALTER TABLE documents ENABLE ROW LEVEL SECURITY;
ALTER TABLE maintenance ENABLE ROW LEVEL SECURITY;
ALTER TABLE settings ENABLE ROW LEVEL SECURITY;

-- Policies (allow all for now - add auth later)
CREATE POLICY "Allow all vehicles" ON vehicles FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Allow all documents" ON documents FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Allow all maintenance" ON maintenance FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Allow all settings" ON settings FOR ALL USING (true) WITH CHECK (true);

-- Create storage bucket for documents
INSERT INTO storage.buckets (id, name, public) VALUES ('documents', 'documents', true);

-- Storage policy (allow all for now)
CREATE POLICY "Allow all document uploads" ON storage.objects FOR ALL USING (bucket_id = 'documents') WITH CHECK (bucket_id = 'documents');
