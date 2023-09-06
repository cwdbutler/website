import type { ReactNode } from "react";
import "./hero.css";

type HeroProps = {
  title: string;
  subtitle: string;
};

const Hero = ({ title, subtitle }: HeroProps) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </div>
  );
};

export default Hero;
