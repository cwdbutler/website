import type { Entry } from "contentful";
import type { TypePageSkeleton } from "../../types/contentful";
import { isTypeHero, isTypeList } from "../../types/contentful";
import type { ListItemProps } from "../list-item";
import { Hero } from "../hero";
import { List } from "../list";

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
      const itemFields = items.map((item) => item?.fields as ListItemProps);

      return (
        <div key={section.sys.id}>
          <List title={title} items={itemFields} />
        </div>
      );
    }
  });

export default ContentfulPage;
