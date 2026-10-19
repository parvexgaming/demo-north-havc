CREATE TABLE public.estimate_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL CHECK (char_length(name) BETWEEN 1 AND 100),
  phone text NOT NULL CHECK (char_length(phone) BETWEEN 7 AND 30),
  email text NOT NULL CHECK (char_length(email) BETWEEN 3 AND 255),
  service text NOT NULL CHECK (char_length(service) BETWEEN 1 AND 100),
  location text CHECK (char_length(location) <= 200),
  message text CHECK (char_length(message) <= 2000),
  created_at timestamptz NOT NULL DEFAULT now()
);
GRANT INSERT ON public.estimate_requests TO anon, authenticated;
GRANT ALL ON public.estimate_requests TO service_role;
ALTER TABLE public.estimate_requests ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can submit an estimate request" ON public.estimate_requests FOR INSERT TO anon, authenticated WITH CHECK (true);