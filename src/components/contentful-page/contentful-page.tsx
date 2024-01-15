import type { Entry } from "contentful";
import type { TypePageSkeleton } from "../../types/contentful";
import { isTypeHero, isTypeList } from "../../types/contentful";

import Hero from "../hero";

interface ContentfulPageProps {
  sections: Entry<
    TypePageSkeleton,
    "WITHOUT_UNRESOLVABLE_LINKS"
  >["fields"]["sections"];
}

const ContentfulPage = ({ sections }: ContentfulPageProps) =>
  sections.map((section) => {
    if (!section) return;

    if (isTypeHero(section)) {
      const { title, subtitle, links } = section.fields;

      return (
        <Hero
          key={section.sys.id}
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
      );
    }

    if (isTypeList(section)) {
      const { title, items } = section.fields;

      return (
        <div key={section.sys.id}>
          <div>{title}</div>
          {items.map((item) => (
            <pre key={item?.sys.id}>
              {JSON.stringify(item?.fields.text, null, 2)}
            </pre>
          ))}
        </div>
      );
    }
  });

export default ContentfulPage;
