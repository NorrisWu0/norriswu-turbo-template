import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { Dict } from "@chakra-ui/utils/dist";

export function ThemeProvider({
  children,
  theme = {},
}: {
  children: React.ReactNode;
  theme?: Dict<any>;
}) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
}
