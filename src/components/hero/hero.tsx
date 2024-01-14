import { Fragment } from "react";
import type { IconLinkProps } from "../icon-link/icon-link";
import IconLink from "../icon-link/icon-link";

interface HeroProps {
  title: string;
  subtitle: string;
  links: IconLinkProps[];
}

const Hero = ({ title, subtitle, links }: HeroProps) => {
  return (
    <div className="flex flex-col text-center items-center justify-center">
      <h1 className="text-5xl">{title}</h1>
      <p>{subtitle}</p>
      <ul className="flex space-x-2">
        {links.map((linkProps, index) => (
          <Fragment key={linkProps.text}>
            <li className="flex">
              <IconLink {...linkProps} key={linkProps.text} isNewTab />
            </li>
            {index !== links.length - 1 && <span>/</span>}
          </Fragment>
        ))}
      </ul>
    </div>
  );
};

export default Hero;
