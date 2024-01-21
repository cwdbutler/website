export interface IconLinkProps {
  iconUrl: string;
  iconLabel?: string;
  href: string;
  text: string;
  isNewTab?: boolean;
}

export const IconLink = ({
  iconUrl,
  iconLabel,
  href,
  text,
  isNewTab,
}: IconLinkProps) => {
  return (
    <a
      href={href}
      target={isNewTab ? "_blank" : undefined}
      aria-label={text}
      className="group flex flex-col items-center font-sans text-xs font-medium text-[#6B7380] transition-all duration-300 ease-in-out hover:text-inherit sm:flex-row sm:text-xl"
    >
      <img
        src={iconUrl}
        alt={iconLabel}
        className="mb-1 size-10 transition duration-300 ease-in-out [filter:invert(87%)_sepia(3%)_saturate(3080%)_hue-rotate(188deg)_brightness(50%)_contrast(78%)] group-hover:[filter:invert(87%)_sepia(3%)_saturate(3080%)_hue-rotate(188deg)_brightness(88%)_contrast(78%)] sm:mb-0 sm:mr-1 sm:size-6"
      />
      {text}
    </a>
  );
};
