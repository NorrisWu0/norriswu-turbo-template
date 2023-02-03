import Image from "next/image";

import vercel from "./assets/vercel.svg";

export function CopyRight() {
  return (
    <div className="">
      <a
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
        className="ui-flex ui-items-center ui-justify-center ui-gap-2 sm:ui-p-4"
      >
        {"By "}
        <Image
          src={vercel}
          alt="Vercel Logo"
          width={100}
          height={24}
          className="ui-invert"
        />
      </a>
    </div>
  );
}
