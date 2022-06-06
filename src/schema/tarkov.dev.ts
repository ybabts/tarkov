export type ID = string;

export type Ammo = {
    item: Item,
    weight: number,
    caliber: string,
    stackMaxSize: number,
    tracer: boolean,
    tracerColor: string
    ammoType: string,
    projectileCount: number
    damage: number,
    armorDamage: number,
    fragmentationChance: number,
    ricochetChance: number,
    penetrationChance: number,
    penetrationPower: number,
    accuracy: number,
    recoil: number,
    initialSpeed: number,
    lightBleedModifier: number,
    heavyBleedModifier: number,
}

export type Barter = {
    source: string,
    sourceName: ItemSourceName,
    requiredItems: [ContainedItem],
    rewardItems: [ContainedItem],
    requirements: [PriceRequirement],
}

export type ContainedItem = {
    item: Item,
    count: number,
    quantity: number,
    attributes: [ItemAttribute]
}

export type Craft = {
    id: string,
    source: string,
    sourceName: string,
    duration: number,
    requiredItems: [ContainedItem],
    rewardItems: [ContainedItem],
    requirements: [PriceRequirement],
}

export type GameProperty = {
    key: string,
    numericValue: number
    stringValue: string
    arrayValue: [string]
    objectValue: string
}

export type HideoutModule = {
    id: number
    name: string
    level: number
    itemRequirements: [ContainedItem],
    moduleRequirements: [HideoutModule],
}

export type historicalPricePonumber = {
    price: number
    timestamp: string
}

export type Item = {
    id: ID,
    name: string,
    normalizedName: string,
    shortName: string,
    basePrice: number,
    updated: string,
    width: number,
    height: number,
    iconLink: string
    iconLinkFallback: string,
    wikiLink: string,
    imageLink: string,
    imageLinkFallback: string,
    gridImageLink: string,
    gridImageLinkFallback: string,
    types: [ItemType],
    avg24hPrice: number,
    accuracyModifier: number,
    recoilModifier: number,
    ergonomicsModifier: number,
    hasGrid: boolean,
    blocksHeadphones: boolean,
    traderPrices: [TraderPrice],
    link: string,
    lastLowPrice: number,
    changeLast48h: number,
    changeLast48hPercent: number,
    low24hPrice: number,
    high24hPrice: number,
    sellFor: [ItemPrice,],
    buyFor: [ItemPrice,],
    containsItems: [ContainedItem],
    bsgCategoryId: string,
    weight: number,
    velocity: number,
    loudness: number,
    translation(languageCode: LanguageCode): ItemTranslation
}

export type ItemAttribute = {
    type: string,
    value: string
}

export type ItemPrice = {
    source: ItemSourceName
    price: number
    currency: string
    priceRUB: number
    requirements: [PriceRequirement],
}

export enum ItemSourceName {
    prapor,
    therapist,
    fence,
    skier,
    peacekeeper,
    mechanic,
    ragman,
    jaeger,
    fleaMarket
}

export type ItemTranslation = {
    name: string
    shortName: string
    description: string
}

export enum ItemType {
    ammo,
    ammoBox,
    any,
    armor,
    backpack,
    barter,
    container,
    disabled,
    glasses,
    grenade,
    gun,
    headphones,
    helmet,
    injectors,
    keys,
    markedOnly,
    meds,
    mods,
    noFlea,
    pistolGrip,
    preset,
    provisions,
    rig,
    suppressor,
    unLootable,
    wearable
}

export enum LanguageCode {
    en
}

export type PriceRequirement = {
    type: RequirementType
    value: number
}

export type Quest = {
    id: string,
    requirements: QuestRequirement
    giver: Trader,
    turnin: Trader,
    title: string,
    wikiLink: string,
    exp: number,
    unlocks: [string],
    reputation: [QuestRewardReputation,]
    objectives: [QuestObjective],
}

export type QuestObjective = {
    id: string
    type: string,
    target: [string,]
    targetItem: Item
    number: number
    location: string
}

export type QuestRequirement = {
    level: number
    quests: [[number]],
    prerequisiteQuests: [[Quest]],
}

export type QuestRewardReputation = {
    trader: Trader,
    amount: number,
}

export enum RequirementType {
    playerLevel,
    loyaltyLevel,
    questCompleted,
    stationLevel
}

export type ServerStatus = {
    generalStatus: Status
    currentStatuses: [Status]
    messages: [StatusMessage]
}

export type Status = {
    name: string,
    message: string
    status: number,
    statusCode: string,
}

export enum StatusCode {
    OK,
    Updating,
    Unstable,
    Down
}

export type StatusMessage = {
    content: string,
    time: string,
    type: number,
    solveTime: string
    statusCode: string,
}

export type Trader = {
    id: string,
    name: string,
}

export type TraderInventory = {
    id: string,
    name: TraderName,
    items: [TraderInventoryItem,]
}

export type TraderInventoryItem = {
    item: Item,
    minLevel: number
    price: number
    updated: string
    questUnlockId: string
    currency: string
}

export enum TraderName {
    prapor,
    therapist,
    fence,
    skier,
    peacekeeper,
    mechanic,
    ragman,
    jaeger
}

export type TraderPrice = {
    price: number,
    currency: string,
    priceRUB: number,
    trader: Trader,
}

export type TraderResetTime = {
    name: string
    resetTimestamp: string
}

export enum BsgCategoryId {
    "5448e8d04bdc2ddf718b4569" = "Food",
}

export type Query = {
    item(id: ID,): Item
    itemsByIDs(ids: [ID],): [Item]
    itemsByType(type: ItemType,): [Item],
    itemsByName(name: string,): [Item],
    itemByNormalizedName(normalizedName: string,): Item
    itemsByBsgCategoryId(bsgCategoryId: string,): [Item],
    historicalItemPrices(id: ID,): [historicalPricePonumber],
    barters: [Barter]
    crafts: [Craft]
    quests: [Quest]
    hideoutModules: [HideoutModule]
    status: ServerStatus,
    traderResetTimes: [TraderResetTime]
    ammo: [Ammo]
}
