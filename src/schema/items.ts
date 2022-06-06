import * as schema from './tarkov.dev.ts';

export interface ItemDetails {
    id: string,
    name: string,
    normalizedName: string,
    shortName: string,
    basePrice: number,
    width: number,
    height: number,
    iconLink: string,
    iconLinkFallback: string,
    wikiLink: string,
    imageLink: string,
    imageLinkFallback: string,
    gridImageLink: string,
    gridImageLinkFallback: string,
    types: schema.ItemType,
    accuracyModifier: number,
    recoilModifier: number,
    ergonomicsModifier: number,
    hasGrid: boolean,
    blocksHeadphones: boolean,
    link: string,
    containsItems: Array<{
        item: {
            id: string
        },
        count: number,
        quantity: number,
        attributes: Array<schema.ItemAttribute>
    }>,
    count: number,
    quantity: number,
    attributes: Array<schema.ItemAttribute>,
    bsgCategoryId: string,
    weight: number,
    velocity: number,
    loudness: number
}

export interface ItemPrices {
    id: string,
    avg24hPrice: number,
    low24hPrice: number,
    high24hPrice: number,
    lastLowPrice: number
}