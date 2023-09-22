import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeIconLinkSkeleton } from "./TypeIconLink";

export interface TypeHeroFields {
    title: EntryFieldTypes.Symbol;
    subtitle: EntryFieldTypes.Symbol;
    links: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeIconLinkSkeleton>>;
}

export type TypeHeroSkeleton = EntrySkeletonType<TypeHeroFields, "hero">;
export type TypeHero<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeHeroSkeleton, Modifiers, Locales>;
