import { useState, useEffect } from "react";
import { Session } from "@supabase/supabase-js";

import { AuthService } from "../auth.service";

type UserSession = {
  status: "pending" | "loaded";
  session: Session | null;
};

export const useSession = () => {
  const [userSession, setUserSession] = useState<UserSession>({
    session: null,
    status: "pending",
  });

  useEffect(() => {
    const authService = new AuthService();

    const { data } = authService.authClient.onAuthStateChange((_, session) => {
      if (session) {
        setUserSession({
          session,
          status: "loaded",
        });
      } else {
        setUserSession({
          session: null,
          status: "loaded",
        });
      }
    });

    return () => {
      data.subscription.unsubscribe();
    };
  }, []);

  return userSession;
};
