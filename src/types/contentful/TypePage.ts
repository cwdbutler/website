import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeHeroSkeleton } from "./TypeHero";
import type { TypeListSkeleton } from "./TypeList";
import type { TypeRichTextSkeleton } from "./TypeRichText";
import type { TypeSeoMetadataSkeleton } from "./TypeSeoMetadata";

export interface TypePageFields {
    slug: EntryFieldTypes.Symbol;
    seoMetadata: EntryFieldTypes.EntryLink<TypeSeoMetadataSkeleton>;
    sections: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeHeroSkeleton | TypeListSkeleton | TypeRichTextSkeleton>>;
}

export type TypePageSkeleton = EntrySkeletonType<TypePageFields, "page">;
export type TypePage<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypePageSkeleton, Modifiers, Locales>;

export function isTypePage<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypePage<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'page'
}
