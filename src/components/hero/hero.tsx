import type { IconLinkProps } from "../icon-link/icon-link";
import IconLink from "../icon-link/icon-link";
import styles from "./hero.module.css";

interface HeroProps {
  title: string;
  subtitle: string;
  links: IconLinkProps[];
}

const Hero = ({ title, subtitle, links }: HeroProps) => {
  return (
    <div className={styles.component}>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.subtitle}>{subtitle}</p>
      <ul className={styles.links}>
        {links.map((linkProps) => (
          <li className={styles.link} key={linkProps.text}>
            <IconLink {...linkProps} key={linkProps.text} isNewTab />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Hero;
