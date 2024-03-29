import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeIconLinkFields {
    text: EntryFieldTypes.Symbol;
    href: EntryFieldTypes.Symbol;
    icon: EntryFieldTypes.AssetLink;
}

export type TypeIconLinkSkeleton = EntrySkeletonType<TypeIconLinkFields, "iconLink">;
export type TypeIconLink<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeIconLinkSkeleton, Modifiers, Locales>;

export function isTypeIconLink<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypeIconLink<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'iconLink'
}
