create table "public"."parkingLots" (
    "id" uuid not null default gen_random_uuid(),
    "created_at" timestamp with time zone not null default now(),
    "name" text,
    "logo" text
);


create table "public"."parkingTickets" (
    "id" uuid not null default gen_random_uuid(),
    "parkingLotId" uuid not null,
    "userId" uuid,
    "created_at" timestamp with time zone not null default now(),
    "plate" text,
    "status" text not null default 'pending'::text
);

-- Create a public bucket.
insert into storage.buckets
  (id, name, public)
values
  ('assets', 'assets', true);


CREATE UNIQUE INDEX "parkingLots_pkey" ON public."parkingLots" USING btree (id);

CREATE UNIQUE INDEX "parkingTickets_pkey" ON public."parkingTickets" USING btree (id);

alter table "public"."parkingLots" add constraint "parkingLots_pkey" PRIMARY KEY using index "parkingLots_pkey";

alter table "public"."parkingTickets" add constraint "parkingTickets_pkey" PRIMARY KEY using index "parkingTickets_pkey";

alter table "public"."parkingTickets" add constraint "parkingTickets_userId_fkey" FOREIGN KEY ("userId") REFERENCES "parkingLots"(id) not valid;

alter table "public"."parkingTickets" validate constraint "parkingTickets_userId_fkey";

grant delete on table "public"."parkingLots" to "anon";

grant insert on table "public"."parkingLots" to "anon";

grant references on table "public"."parkingLots" to "anon";

grant select on table "public"."parkingLots" to "anon";

grant trigger on table "public"."parkingLots" to "anon";

grant truncate on table "public"."parkingLots" to "anon";

grant update on table "public"."parkingLots" to "anon";

grant delete on table "public"."parkingLots" to "authenticated";

grant insert on table "public"."parkingLots" to "authenticated";

grant references on table "public"."parkingLots" to "authenticated";

grant select on table "public"."parkingLots" to "authenticated";

grant trigger on table "public"."parkingLots" to "authenticated";

grant truncate on table "public"."parkingLots" to "authenticated";

grant update on table "public"."parkingLots" to "authenticated";

grant delete on table "public"."parkingLots" to "service_role";

grant insert on table "public"."parkingLots" to "service_role";

grant references on table "public"."parkingLots" to "service_role";

grant select on table "public"."parkingLots" to "service_role";

grant trigger on table "public"."parkingLots" to "service_role";

grant truncate on table "public"."parkingLots" to "service_role";

grant update on table "public"."parkingLots" to "service_role";

grant delete on table "public"."parkingTickets" to "anon";

grant insert on table "public"."parkingTickets" to "anon";

grant references on table "public"."parkingTickets" to "anon";

grant select on table "public"."parkingTickets" to "anon";

grant trigger on table "public"."parkingTickets" to "anon";

grant truncate on table "public"."parkingTickets" to "anon";

grant update on table "public"."parkingTickets" to "anon";

grant delete on table "public"."parkingTickets" to "authenticated";

grant insert on table "public"."parkingTickets" to "authenticated";

grant references on table "public"."parkingTickets" to "authenticated";

grant select on table "public"."parkingTickets" to "authenticated";

grant trigger on table "public"."parkingTickets" to "authenticated";

grant truncate on table "public"."parkingTickets" to "authenticated";

grant update on table "public"."parkingTickets" to "authenticated";

grant delete on table "public"."parkingTickets" to "service_role";

grant insert on table "public"."parkingTickets" to "service_role";

grant references on table "public"."parkingTickets" to "service_role";

grant select on table "public"."parkingTickets" to "service_role";

grant trigger on table "public"."parkingTickets" to "service_role";

grant truncate on table "public"."parkingTickets" to "service_role";

grant update on table "public"."parkingTickets" to "service_role";


