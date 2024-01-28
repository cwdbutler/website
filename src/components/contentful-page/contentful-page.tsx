import type { Entry } from "contentful";
import type { TypePageSkeleton } from "../../types/contentful";
import { isTypeHero, isTypeList, isTypeRichText } from "../../types/contentful";
import type { ListItemProps } from "../list-item";
import { Hero } from "../hero";
import { List } from "../list";
import { RichText } from "../rich-text";
import type { ReactNode } from "react";
import React from "react";

interface ContentfulPageProps {
  sections: Entry<
    TypePageSkeleton,
    "WITHOUT_UNRESOLVABLE_LINKS"
  >["fields"]["sections"];
}

interface SectionProps {
  children: ReactNode;
  type?: "HERO" | "FOOTER";
  title?: string;
}

const Section = ({ children, type, title }: SectionProps) => {
  switch (type) {
    case "HERO":
      return (
        <section className="bg-gradient-to-b from-gray-900">
          <div className="mx-auto max-w-2xl px-4 pt-16 sm:mb-20 sm:pt-32">
            {children}
          </div>
        </section>
      );
    case "FOOTER":
      return (
        <footer className="mb-4 mt-20 px-4 text-center text-xs">
          {children}
        </footer>
      );
    default:
      return (
        <section className="mx-auto mt-10 max-w-5xl px-4 text-sm">
          <h2 className="mb-2 text-xl font-semibold text-pink-400 selection:bg-pink-400 selection:text-white">
            {title}
          </h2>
          {children}
        </section>
      );
  }
};

export const ContentfulPage = ({ sections }: ContentfulPageProps) => (
  <React.Fragment>
    <main>
      {sections.map((section) => {
        if (!section) return;

        if (isTypeHero(section)) {
          const { title, subtitle, links } = section.fields;

          return (
            <Section key={section.sys.id} type="HERO">
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
          const itemFields = items.map((item) => {
            return {
              text: item?.fields.text,
              textLabel: item?.fields.name,
              icon: {
                url: item?.fields.icon?.fields.file?.url,
                title: item?.fields.icon?.fields.title,
              },
            } as ListItemProps;
          });

          return (
            <Section key={section.sys.id} title={title}>
              <List items={itemFields} />
            </Section>
          );
        }

        if (isTypeRichText(section)) {
          const { title, text, displayName } = section.fields;

          return (
            <Section
              key={section.sys.id}
              title={title}
              type={displayName === "Footer" ? "FOOTER" : undefined}
            >
              <RichText text={text} />
            </Section>
          );
        }
      })}
    </main>
  </React.Fragment>
);
