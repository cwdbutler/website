import type { Entry } from "contentful";
import type { TypePageSkeleton } from "../../types/contentful";
import { isTypeHero, isTypeList, isTypeRichText } from "../../types/contentful";
import type { ListItemProps } from "../list-item";
import { Hero } from "../hero";
import { List } from "../list";
import { RichText } from "../rich-text";
import type { ReactNode } from "react";

interface ContentfulPageProps {
  sections: Entry<
    TypePageSkeleton,
    "WITHOUT_UNRESOLVABLE_LINKS"
  >["fields"]["sections"];
}

type SectionProps = { isHero?: boolean; title?: string };

type HeroSectionProps = { isHero: true; title?: never };

const Section = ({
  children,
  isHero,
  title,
}: {
  children: ReactNode;
} & (SectionProps | HeroSectionProps)) => {
  return isHero ? (
    <section className="bg-gradient-to-b from-gray-900">
      <div className="pt-16 sm:pt-32 sm:mb-20 max-w-2xl mx-auto px-4">
        {children}
      </div>
    </section>
  ) : (
    <section className="max-w-5xl mx-auto px-4 mt-10 text-sm">
      <h2 className="font-semibold text-xl text-pink-400 mb-1">{title}</h2>
      {children}
    </section>
  );
};

export const ContentfulPage = ({ sections }: ContentfulPageProps) => (
  <main>
    {sections.map((section) => {
      if (!section) return;

      if (isTypeHero(section)) {
        const { title, subtitle, links } = section.fields;

        return (
          <Section isHero key={section.sys.id}>
            <Hero
              title={title}
              subtitle={subtitle}
              links={links.map((linkData) => {
                const {
                  fields: { icon, ...rest },
                } = linkData!;
                return {
                  ...rest,
                  iconUrl: icon?.fields.file?.url || "",
                  iconLabel: icon?.fields.title || "",
                };
              })}
            />
          </Section>
        );
      }

      if (isTypeList(section)) {
        const { title, items } = section.fields;
        const itemFields = items.map((item) => item?.fields as ListItemProps);

        return (
          <Section key={section.sys.id} title={title}>
            <List items={itemFields} />
          </Section>
        );
      }

      if (isTypeRichText(section)) {
        const { title, text } = section.fields;

        return (
          <Section key={section.sys.id} title={title}>
            <RichText text={text} />
          </Section>
        );
      }
    })}
  </main>
);
