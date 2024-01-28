import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeOpenGraphFields {
    displayName: EntryFieldTypes.Symbol;
    url?: EntryFieldTypes.Symbol;
    title?: EntryFieldTypes.Symbol;
    description?: EntryFieldTypes.Symbol;
    image?: EntryFieldTypes.AssetLink;
}

export type TypeOpenGraphSkeleton = EntrySkeletonType<TypeOpenGraphFields, "openGraph">;
export type TypeOpenGraph<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeOpenGraphSkeleton, Modifiers, Locales>;

export function isTypeOpenGraph<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypeOpenGraph<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'openGraph'
}
