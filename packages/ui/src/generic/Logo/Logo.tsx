import { Image, Box, Center } from "@chakra-ui/react";

import next from "./assets/next.svg";
import thirteen from "./assets/thirteen.svg";

export function Logo() {
  const containerStyle = {
    padding: "4em 0",
    _before: {
      content: '" "',
      left: "50%",
      position: "absolute",
      filter: "blur(45px)",
      transform: "translateZ(0)",

      background: "var(--secondary-glow)",
      borderRadius: "50%",
      width: "480px",
      height: "360px",
      marginLeft: "-400px",
    },
    _after: {
      content: '" "',
      left: "50%",
      position: "absolute",
      filter: "blur(45px)",
      transform: "translateZ(0)",

      background: "var(--primary-glow)",
      width: " 240px",
      height: " 180px",
      zIndex: "-1",
    },
  };

  const logoStyle: React.CSSProperties = {
    position: "relative",
    filter: "invert(1) drop-shadow(0 0 0.3rem #ffffff70)",
  };

  const thriteenStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "75px",
    height: "75px",
    padding: "25px 10px",
    marginLeft: "16px",
    transform: "translateZ(0)",
    borderRadius: "var(--border-radius)",
    overflow: "hidden",
    boxShadow: "0px 2px 8px -1px #0000001a",
    _before: {
      content: '""',
      position: "absolute",
      zIndex: -1,

      animation: "6s rotate linear infinite",
      width: "200%",
      height: "200%",
      background: "var(--tile-border)",
    },
    _after: {
      content: '""',
      position: "absolute",
      zIndex: -1,

      inset: 0,
      padding: "1px",
      borderRadius: "var(--border-radius)",
      background: `linear-gradient(
        to bottom right,
        rgba(var(--tile-start-rgb), 1),
        rgba(var(--tile-end-rgb), 1)
      )`,
      backgroundClip: "content-box",
    },
  };

  return (
    <Center {...containerStyle}>
      <Image
        src={next}
        alt="Next.js Logo"
        width={180}
        height={37}
        style={logoStyle}
      />
      <Box position="relative" {...thriteenStyle}>
        <Image
          src={thirteen}
          alt="13"
          width={40}
          height={31}
          style={{ filter: "invert(1) drop-shadow(0 0 0.3rem #ffffff70)" }}
        />
      </Box>
    </Center>
  );
}
