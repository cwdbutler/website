import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeOpenGraphSkeleton } from "./TypeOpenGraph";

export interface TypeSeoMetadataFields {
    title: EntryFieldTypes.Symbol;
    description?: EntryFieldTypes.Symbol;
    favicon: EntryFieldTypes.AssetLink;
    openGraph: EntryFieldTypes.EntryLink<TypeOpenGraphSkeleton>;
}

export type TypeSeoMetadataSkeleton = EntrySkeletonType<TypeSeoMetadataFields, "seoMetadata">;
export type TypeSeoMetadata<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeSeoMetadataSkeleton, Modifiers, Locales>;

export function isTypeSeoMetadata<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypeSeoMetadata<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'seoMetadata'
}
