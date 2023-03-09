import { useState } from "react";
import { Box, Text } from "@chakra-ui/react";
import AppShell from "components/AppShell";

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <AppShell>
      <Box p={10} onClick={() => setCount((p) => p + 1)}>
        <Text>Count: {count}</Text>
      </Box>
    </AppShell>
  );
};

export default App;
