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

const Section = ({
  children,
  isHero,
}: {
  children: ReactNode;
  isHero?: boolean;
}) => {
  return isHero ? (
    <div className="bg-gradient-to-b from-gray-900">
      <section className="transition-all pt-16 sm:pt-32 sm:mb-20 max-w-2xl mx-auto px-4">
        {children}
      </section>
    </div>
  ) : (
    <section className="transition-all max-w-5xl mx-auto px-4 mt-10 text-sm">
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
          <Section key={section.sys.id}>
            <List title={title} items={itemFields} />
          </Section>
        );
      }

      if (isTypeRichText(section)) {
        const { text } = section.fields;

        return (
          <Section key={section.sys.id}>
            <RichText text={text} />
          </Section>
        );
      }
    })}
  </main>
);
