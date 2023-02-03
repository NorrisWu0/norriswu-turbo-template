import Image from "next/image";

import next from "./assets/next.svg";
import thirteen from "./assets/thirteen.svg";

export function Logo() {
  return (
    <div className="ui-relative ui-flex ui-items-center ui-justify-center ui-py-16 ui-px-0 before:ui-absolute before:ui-left-[50%] before:ui-ml-[-400px] before:ui-box-border before:ui-h-[360px] before:ui-w-[480px] before:ui-rounded-[50%] before:ui-bg-secondary-glow before:ui-blur-[45px] after:ui-absolute after:ui-left-[50%] after:ui-z-[-2] after:ui-h-[180px] after:ui-w-[240px]  after:ui-bg-primary-glow after:ui-blur-[45px] sm:ui-pt-32 sm:ui-pb-24 before:sm:ui-h-[300px]">
      <Image
        src={next}
        alt="Next.js Logo"
        width={180}
        height={37}
        className="ui-relative ui-drop-shadow-[0_0_0.3rem_#ffffff70] ui-invert"
      />
      <div className="ui-relative ui-ml-[16px] ui-flex ui-h-[75px] ui-w-[75px] ui-items-center ui-justify-center ui-overflow-hidden ui-rounded-[var(--border-radius)] ui-py-[25px] ui-px-[10px] ui-shadow-[0px_2px_8px_-1px_#0000001a] before:ui-absolute before:ui-z-[-1] before:ui-h-[200%] before:ui-w-[200%] before:ui-animate-rotate before:ui-bg-tile-border after:ui-absolute after:ui-inset-0 after:ui-z-[-1] after:ui-rounded-[var(--border-radius)] after:ui-bg-tile after:ui-bg-clip-content after:ui-p-[1px]">
        <Image
          src={thirteen}
          alt="13"
          width={40}
          height={31}
          className="ui-drop-shadow-[0_0_0.3rem_#ffffff70] ui-invert"
        />
      </div>
    </div>
  );
}
