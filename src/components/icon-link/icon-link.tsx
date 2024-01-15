export interface IconLinkProps {
  iconUrl: string;
  iconLabel?: string;
  href: string;
  text: string;
  isNewTab?: boolean;
}

const IconLink = ({
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
      className="group font-sans font-medium text-[#6B7380] flex flex-col sm:flex-row items-center transition-all duration-300 ease-in-out hover:text-inherit text-xs sm:text-xl"
    >
      <img
        src={iconUrl}
        alt={iconLabel}
        className="mb-1 sm:mb-0 size-10 sm:size-6 sm:mr-1 transition duration-300 ease-in-out [filter:invert(87%)_sepia(3%)_saturate(3080%)_hue-rotate(188deg)_brightness(50%)_contrast(78%)] group-hover:[filter:invert(87%)_sepia(3%)_saturate(3080%)_hue-rotate(188deg)_brightness(88%)_contrast(78%)]"
      />
      {text}
    </a>
  );
};

export default IconLink;
