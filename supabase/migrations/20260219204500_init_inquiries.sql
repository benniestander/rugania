-- Create the inquiries table
CREATE TABLE public.inquiries (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT,
    guests INTEGER DEFAULT 1,
    arrival_date DATE,
    interest TEXT,
    message TEXT,
    popia_consent BOOLEAN NOT NULL DEFAULT false,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'contacted', 'booked', 'archived'))
);

-- Enable Row Level Security (RLS)
ALTER TABLE public.inquiries ENABLE ROW LEVEL SECURITY;

-- Allow anonymous inserts (anyone can submit an inquiry)
CREATE POLICY "Allow anonymous inserts" ON public.inquiries FOR INSERT TO anon, authenticated WITH CHECK (true);

-- Allow authenticated admins to view all inquiries
CREATE POLICY "Allow authenticated full access" ON public.inquiries FOR ALL TO authenticated USING (true) WITH CHECK (true);

-- Create simple notifications table
CREATE TABLE public.notifications (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    inquiry_id UUID REFERENCES public.inquiries(id) ON DELETE CASCADE,
    email_sent BOOLEAN DEFAULT false,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

ALTER TABLE public.notifications ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow authenticated full access" ON public.notifications FOR ALL TO authenticated USING (true) WITH CHECK (true);
