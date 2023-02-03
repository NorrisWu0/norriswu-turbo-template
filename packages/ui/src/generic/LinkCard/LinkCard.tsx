type LinkCardProps = {
  href: string;
  title: string;
  description: string;
};
export function LinkCard({ href, title, description }: LinkCardProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="ui-border-[1px]ui-border-solid ui-group ui-rounded-[var(--border-radius)] ui-border-[rgba(var(--card-border-rgb),0)] ui-bg-[rgba(var(--card-rgb),0)] ui-py-4  ui-px-[1.2rem] ui-text-white ui-transition-[background,border] ui-duration-200 hover:ui-border-[rgba(var(--card-border-rgb),0.15)] hover:ui-bg-[rgba(var(--card-rgb),0.1)] sm:ui-py-4 sm:ui-px-10"
    >
      <h2 className="ui-mb-[0.7rem] ui-font-semibold  sm:ui-mb-2">
        {`${title} `}
        <span className="ui-inline-block ui-transition-transform ui-duration-200 group-hover:ui-translate-x-[4px]">
          →
        </span>
      </h2>
      <p className="ui-margin-0 ui-max-w-[30ch] ui-text-[0.9rem] ui-leading-[1.5] ui-opacity-60 sm:ui-text-[0.8rem]">
        {description}
      </p>
    </a>
  );
}
