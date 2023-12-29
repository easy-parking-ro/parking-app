import type { SupabaseClient } from "@supabase/supabase-js";

import { supabase } from "../../../lib/supabase";

const wait = (timeInMs: number) =>
  new Promise((resolve) => {
    setTimeout(resolve, timeInMs);
  });

export class AuthService {
  authClient: SupabaseClient["auth"];

  constructor() {
    this.authClient = supabase.auth;
  }

  getUser() {
    this.authClient.getUser();
  }

  getSession() {
    return supabase.auth.getSession();
  }

  signInWithOAuth(provider: "google" | "facebook") {
    return supabase.auth.signInWithOAuth({ provider });
  }

  async signOut() {
    await wait(500);

    return supabase.auth.signOut();
  }
}
