import type { ReactElement, ReactNode } from "react";

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
      className="group flex items-center transition ease-in-out hover:text-white"
    >
      <img
        src={iconUrl}
        alt={iconLabel}
        className="size-5 mr-1 transition ease-in-out [filter:invert(87%)_sepia(3%)_saturate(3080%)_hue-rotate(188deg)_brightness(88%)_contrast(78%)] group-hover:[filter:invert(99%)_sepia(39%)_saturate(220%)_hue-rotate(213deg)_brightness(121%)_contrast(100%)]"
      />
      {text}
    </a>
  );
};

export default IconLink;
