DROP TABLE IF EXISTS public.task;

CREATE TABLE IF NOT EXISTS public.task (
   task_id SERIAL PRIMARY KEY,
   task_code TEXT NOT NULL,
   title TEXT NOT NULL,
   description TEXT,
   assigned_to TEXT,
   status TEXT NOT NULL
);
