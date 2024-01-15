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
    <section className="transition-all bg-gradient-to-b from-gray-900 py-16 sm:py-32 ">
      <div className="w-full px-4 flex flex-col items-center justify-center text-center max-w-[640px] mx-auto">
        <h1 className="text-4xl sm:text-5xl">
          {title}
          <span
            aria-hidden="true"
            className="text-4xl animate-pulse select-none"
          >
            _
          </span>
        </h1>
        <p className="mt-4 text-sm sm:text-lg">{subtitle}</p>
        <ul className="mt-6 sm:mt-12 flex grow sm:space-x-2 w-full max-w-[300px] sm:max-w-full  sm:justify-center flex-wrap justify-around">
          {links.map((linkProps, index) => (
            <Fragment key={linkProps.text}>
              <li className="flex">
                <IconLink {...linkProps} key={linkProps.text} isNewTab />
              </li>
              {index !== links.length - 1 && (
                <span className="text-lg opacity-0 sm:opacity-100 transition-all ease-in-out">
                  /
                </span>
              )}
            </Fragment>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Hero;
