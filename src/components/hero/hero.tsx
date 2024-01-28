import { Fragment } from "react";
import type { IconLinkProps } from "../icon-link";
import { IconLink } from "../icon-link";

interface HeroProps {
  title: string;
  subtitle: string;
  links: IconLinkProps[];
}

export const Hero = ({ title, subtitle, links }: HeroProps) => {
  return (
    <div className="mx-auto flex w-full flex-col items-center justify-center text-center transition-all">
      <h1 className="text-4xl text-cyan-400 selection:bg-cyan-400 selection:text-white sm:text-5xl">
        {title}
        <span aria-hidden="true" className="animate-pulse select-none text-4xl">
          _
        </span>
      </h1>
      <p className="mt-4 text-sm sm:text-lg">{subtitle}</p>
      <ul className="mt-6 flex w-full max-w-[300px] grow flex-wrap justify-around sm:mt-12  sm:max-w-full sm:justify-center sm:space-x-2">
        {links.map((linkProps, index) => (
          <Fragment key={linkProps.text}>
            <li className="flex">
              <IconLink {...linkProps} key={linkProps.text} isNewTab />
            </li>
            {index !== links.length - 1 && (
              <span className="text-lg opacity-0 transition-all ease-in-out sm:opacity-100">
                /
              </span>
            )}
          </Fragment>
        ))}
      </ul>
    </div>
  );
};
