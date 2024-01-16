import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeListItemFields {
    icon: EntryFieldTypes.AssetLink;
    text: EntryFieldTypes.RichText;
    name?: EntryFieldTypes.Symbol;
}

export type TypeListItemSkeleton = EntrySkeletonType<TypeListItemFields, "listItem">;
export type TypeListItem<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeListItemSkeleton, Modifiers, Locales>;

export function isTypeListItem<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypeListItem<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'listItem'
}
