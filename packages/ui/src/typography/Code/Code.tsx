type CodeProps = {
  children: string;
};
export function Code({ children }: CodeProps) {
  // fontWeight="700" fontFamily="var(--font-mono)"
  return <code className="ui-font-bold ui-text-mono">{children}</code>;
}
