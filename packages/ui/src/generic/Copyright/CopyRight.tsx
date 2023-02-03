import { Image } from "@chakra-ui/react";

import vercel from "./assets/vercel.svg";

export function CopyRight() {
  return (
    <div>
      <a
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        {"By "}
        <Image
          src={vercel}
          alt="Vercel Logo"
          width={100}
          height={24}
          filter="invert(1)"
        />
      </a>
    </div>
  );
}
