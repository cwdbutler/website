export interface IconLinkProps {
  iconUrl: string;
  iconLabel?: string;
  href: string;
  text: string;
  isNewTab?: boolean;
}

export const IconLink = ({
  iconUrl,
  href,
  text,
  isNewTab,
  iconLabel,
}: IconLinkProps) => {
  return (
    <a
      href={href}
      target={isNewTab ? "_blank" : undefined}
      className="group flex flex-col items-center font-sans text-xs font-medium text-gray-500 transition-all duration-300 ease-in-out hover:text-slate-200 focus:text-slate-200 sm:flex-row sm:text-xl"
    >
      <img
        src={iconUrl}
        alt={iconLabel}
        className="mb-1 size-10 select-none transition duration-300 ease-in-out group-hover:brightness-[200%] group-hover:saturate-[30%] group-focus:brightness-[200%] group-focus:saturate-[30%] sm:mb-0 sm:mr-1 sm:size-6"
      />
      {text}
    </a>
  );
};
