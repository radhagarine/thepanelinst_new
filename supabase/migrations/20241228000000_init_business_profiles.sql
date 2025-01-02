-- Create the business_profiles table
create table if not exists business_profiles (
    id uuid default uuid_generate_v4() primary key,
    user_id uuid references auth.users not null,
    business_name text,
    address text,
    phone text,
    email text,
    industry text,
    profile_image text,
    created_at timestamp with time zone default timezone('utc'::text, now()) not null,
    updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable RLS
alter table business_profiles enable row level security;

-- RLS Policies for business_profiles
create policy "Users can view their own profile"
    on business_profiles
    for select
    using (auth.uid() = user_id);

create policy "Users can insert their own profile"
    on business_profiles
    for insert
    with check (auth.uid() = user_id);

create policy "Users can update their own profile"
    on business_profiles
    for update
    using (auth.uid() = user_id)
    with check (auth.uid() = user_id);

create policy "Users can delete their own profile"
    on business_profiles
    for delete
    using (auth.uid() = user_id);

-- Create storage bucket for business profiles
insert into storage.buckets (id, name)
values ('business-profiles', 'business-profiles')
on conflict do nothing;

-- Storage policies for business-profiles bucket
create policy "Authenticated users can upload files"
    on storage.objects for insert
    to authenticated
    with check (
        bucket_id = 'business-profiles' AND
        (storage.foldername(name))[1] = auth.uid()::text
    );

create policy "Users can update their own files"
    on storage.objects for update
    to authenticated
    using (
        bucket_id = 'business-profiles' AND
        (storage.foldername(name))[1] = auth.uid()::text
    );

create policy "Public can view files"
    on storage.objects for select
    to public
    using (bucket_id = 'business-profiles');

create policy "Users can delete their own files"
    on storage.objects for delete
    to authenticated
    using (
        bucket_id = 'business-profiles' AND
        (storage.foldername(name))[1] = auth.uid()::text
    );

-- Allow authenticated users to upload files
create policy "Allow authenticated uploads"
on storage.objects
for insert to authenticated
with check (
  bucket_id = 'business-profiles' AND
  auth.role() = 'authenticated'
);

-- Allow authenticated users to update their own files
create policy "Allow authenticated updates"
on storage.objects
for update to authenticated
using (
  bucket_id = 'business-profiles' AND
  auth.uid() = owner
);

-- Allow public read access
create policy "Allow public read"
on storage.objects
for select to public
using (bucket_id = 'business-profiles');