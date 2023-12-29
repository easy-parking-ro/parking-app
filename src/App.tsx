import { useEffect } from "react";

import { FaGoogle, FaFacebook } from "react-icons/fa6";
import { Button, Heading, VStack } from "@chakra-ui/react";

import { supabase } from "../lib/supabase";

function App() {
  const loginWithGoogle = () => {
    supabase.auth.signInWithOAuth({
      provider: "google",
    });
  };

  const loginWithFacebook = () => {
    supabase.auth.signInWithOAuth({
      provider: "facebook",
    });
  };
  useEffect(() => {
    supabase
      .from("parking-lots")
      .select("*")
      .then((r) => {
        console.log(r);
      });

    const { data } = supabase.auth.onAuthStateChange((event, session) => {
      console.log({ event, session });
    });

    return () => {
      data.subscription.unsubscribe();
    };
  }, []);

  return (
    <VStack h="100vh" justifyContent="center" spacing={6}>
      <Heading>Parking App - Frontend</Heading>

      <Button
        colorScheme="red"
        variant="outline"
        leftIcon={<FaGoogle />}
        onClick={loginWithGoogle}
      >
        Login with Google
      </Button>

      <Button
        variant="outline"
        colorScheme="facebook"
        leftIcon={<FaFacebook />}
        onClick={loginWithFacebook}
      >
        Login with Facebook
      </Button>
    </VStack>
  );
}

export default App;
