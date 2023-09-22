import type { ReactElement, ReactNode } from "react";
import styles from "./icon-link.module.css";

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
      className={styles.link}
      aria-label={text}
    >
      <img src={iconUrl} alt={iconLabel} className={styles.icon} />
      {text}
    </a>
  );
};

export default IconLink;
