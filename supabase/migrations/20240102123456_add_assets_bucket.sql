-- Create a public bucket.

insert into storage.buckets
  (id, name, public)
values
  ('assets', 'assets', true);
