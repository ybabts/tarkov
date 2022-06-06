import * as schema from '../schema/tarkov.dev.ts';

async function query(content: string) {
    const request = await fetch('https://api.tarkov.dev/graphql', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }, 
        body: JSON.stringify({query: content})
    });
    return await request.json();
}

export async function fetchItem(id: string, gather: string): Promise<Record<string,unknown>> {
    const result = await query(`{
        item(id:"${id}") ${gather}
    }`);
    if(result.errors) throw new Error(result.errors[0].message);
    if(result.data && result.data.item) return result.data.item;
    throw new Error();
}

type ItemType = keyof typeof schema.ItemType;
export async function fetchItemsByType(type: ItemType, gather: string): Promise<Array<Record<string,unknown>>> {
    const result = await query(`{
        itemsByType(type:${type}) ${gather}
    }`);
    if(result.errors) throw new Error(result.errors[0].message);
    if(result.data && result.data.itemsByType) return result.data.itemsByType;
    throw new Error();
}

export async function fetchItemsByName(name: string, gather: string): Promise<Array<Record<string,unknown>>> {
    const result = await query(`{
        itemsByName(name:"${name}") ${gather}
    }`);
    if(result.errors) throw new Error(result.errors[0].message);
    if(result.data && result.data.itemsByName) return result.data.itemsByName;
    throw new Error();
}

export async function fetchItemByNormalizedName(name: string, gather: string): Promise<Record<string,unknown>> {
    const result = await query(`{
        itemByNormalizedName(normalizedName:"${name}") ${gather}
    }`);
    if(result.errors) throw new Error(result.errors[0].message);
    if(result.data && result.data.itemByNormalizedName) return result.data.itemByNormalizedName;
    throw new Error();
}

type BsgCategoryId = string;
export async function fetchItemsByBsgCategoryId(bsgCategoryId: BsgCategoryId, gather: string): Promise<Record<string,unknown>> {
    const result = await query(`{
        itemsByBsgCategoryId(bsgCategoryId:"${bsgCategoryId}") ${gather}
    }`);
    if(result.errors) throw new Error(result.errors[0].message);
    if(result.data && result.data.itemByNormalizedName) return result.data.itemByNormalizedName;
    throw new Error();
}

export async function fetchHistoricalItemPrices(id: schema.ID): Promise<Array<schema.historicalPricePonumber>> {
    const result = await query(`{
        historicalItemPrices(id:"${id}") {
            price
            timestamp
        }
    }`);
    if(result.errors) throw new Error(result.errors[0].message);
    if(result.data && result.data.historicalItemPrices) return result.data.historicalItemPrices;
    throw new Error();
}

export async function fetchBarters(gather: string): Promise<Record<string,unknown>> {
    const result = await query(`{
        barters ${gather}
    }`);
    if(result.errors) throw new Error(result.errors[0].message);
    if(result.data && result.data.barters) return result.data.barters;
    throw new Error();
}

export async function fetchCrafts(gather: string): Promise<Record<string,unknown>> {
    const result = await query(`{
        crafts ${gather}
    }`);
    if(result.errors) throw new Error(result.errors[0].message);
    if(result.data && result.data.crafts) return result.data.crafts;
    throw new Error();
}

export async function fetchQuest(gather: string): Promise<Record<string,unknown>> {
    const result = await query(`{
        quests ${gather}
    }`);
    if(result.errors) throw new Error(result.errors[0].message);
    if(result.data && result.data.quests) return result.data.quests;
    throw new Error();
}

export async function fetchHideoutModules(gather: string): Promise<Record<string,unknown>> {
    const result = await query(`{
        hideoutModules ${gather}
    }`);
    if(result.errors) throw new Error(result.errors[0].message);
    if(result.data && result.data.hideoutModules) return result.data.hideoutModules;
    throw new Error();
}

export async function fetchStatus(gather: string): Promise<Record<string,unknown>> {
    const result = await query(`{
        status ${gather}
    }`);
    if(result.errors) throw new Error(result.errors[0].message);
    if(result.data && result.data.status) return result.data.status;
    throw new Error();
}

export async function fetchTraderResetTimes(gather: string): Promise<Record<string,unknown>> {
    const result = await query(`{
        traderResetTimes ${gather}
    }`);
    if(result.errors) throw new Error(result.errors[0].message);
    if(result.data && result.data.traderResetTimes) return result.data.traderResetTimes;
    throw new Error();
}

export async function fetchAmmo(gather: string): Promise<Record<string,unknown>> {
    const result = await query(`{
        ammo ${gather}
    }`);
    if(result.errors) throw new Error(result.errors[0].message);
    if(result.data && result.data.ammo) return result.data.ammo;
    throw new Error();
}