import { Text } from "@chakra-ui/react";

type CodeProps = {
  children: string;
};
export function Code({ children }: CodeProps) {
  return (
    <Text as="code" fontWeight="700" fontFamily="var(--font-mono)">
      {children}
    </Text>
  );
}
