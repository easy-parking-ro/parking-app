import { useEffect } from "react";
import { Heading, VStack } from "@chakra-ui/react";

import { supabase } from "../lib/supabase";

function App() {
  useEffect(() => {
    getLots();
  }, []);

  const getLots = async () => {
    const { data } = await supabase.from("parking-lots").select("*");

    console.log("the result ->", data);
  };

  return (
    <VStack h="100vh" justifyContent="center">
      <Heading>Parking App - Frontend</Heading>
    </VStack>
  );
}

export default App;
