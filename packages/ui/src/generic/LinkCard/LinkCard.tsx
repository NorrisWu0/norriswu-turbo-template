import { Heading, Link, Text } from "@chakra-ui/react";

type LinkCardProps = {
  href: string;
  title: string;
  description: string;
};
export function LinkCard({ href, title, description }: LinkCardProps) {
  const cardStyle = {
    role: "group",
    padding: "1rem 1.2rem",
    borderRadius: "var(--border-radius)",
    background: "rgba(var(--card-rgb), 0)",
    border: "1px solid rgba(var(--card-border-rgb), 0)",
    transition: "background 200ms, border 200ms",
    _hover: {
      background: "rgba(var(--card-rgb), 0.1)",
      border: "1px solid rgba(var(--card-border-rgb), 0.15)",
    },
  };

  const titleStyle = {
    fontSize: "1.5rem",
    fontWeight: 600,
    marginBottom: "0.7rem",
  };

  const arrowStyle = {
    display: "inline-block",
    transition: "transform 200ms",
    _groupHover: {
      transform: "translateX(4px)",
    },
  };

  const descriptionStyle = {
    margin: 0,
    opacity: 0.6,
    fontSize: "0.9rem",
    lineHeight: 1.5,
    maxWidth: "30ch",
  };

  return (
    <Link href={href} target="_blank" rel="noopener noreferrer" {...cardStyle}>
      <Heading as="h2" {...titleStyle}>
        {title}{" "}
        <Text as="span" {...arrowStyle}>
          -&gt;
        </Text>
      </Heading>
      <Text {...descriptionStyle}>{description}</Text>
    </Link>
  );
}
