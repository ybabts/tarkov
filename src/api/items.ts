import * as dev from './tarkov.dev.ts';
import * as schema from '../schema/items.ts';

export async function fetchAllItemDetails(): Promise<Array<schema.ItemDetails|Record<string,unknown>>> {
    return await dev.fetchItemsByName('', `{
        id
        name
        normalizedName
        shortName
        basePrice
        width
        height
        iconLink
        iconLinkFallback
        wikiLink
        imageLink
        imageLinkFallback
        gridImageLink
        gridImageLinkFallback
        types
        accuracyModifier
        recoilModifier
        ergonomicsModifier
        hasGrid
        blocksHeadphones
        link
        containsItems {
            item {
                id
            }
            count
            quantity
            attributes {
                type
                value
            }
        }
        bsgCategoryId
        weight
        velocity
        loudness
    }`);
}

export async function fetchAllItemsPrices(): Promise<Array<schema.ItemPrices|Record<string,unknown>>>{
    return await dev.fetchItemsByName('', `{
        id
        avg24hPrice
        low24hPrice
        high24hPrice
        lastLowPrice
    }`);
}