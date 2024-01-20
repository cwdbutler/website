import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeListItemSkeleton } from "./TypeListItem";

export interface TypeListFields {
    displayName?: EntryFieldTypes.Symbol;
    title?: EntryFieldTypes.Symbol;
    items: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeListItemSkeleton>>;
}

export type TypeListSkeleton = EntrySkeletonType<TypeListFields, "list">;
export type TypeList<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeListSkeleton, Modifiers, Locales>;

export function isTypeList<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypeList<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'list'
}
