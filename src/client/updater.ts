import * as items from '../api/items.ts';
import { ensureDir } from 'https://deno.land/std@0.78.0/fs/mod.ts'

if((await Deno.permissions.query({name: 'read', path: 'cache'})).state === 'prompt')
    Deno.permissions.request({name: 'read', path: 'cache'});
if((await Deno.permissions.query({name: 'write', path: 'cache'})).state === 'prompt')
    Deno.permissions.request({name: 'write', path: 'cache'});
if((await Deno.permissions.query({name: 'net', host: 'api.tarkov.dev'})).state === 'prompt')
    Deno.permissions.request({name: 'net', host: 'api.tarkov.dev'});

await ensureDir('cache');
await ensureDir('cache/details');
await ensureDir('cache/prices');
await updateAllItems();
await updateAllPrices();

async function updateAllItems() {
    const encoder = new TextEncoder();
    for(const item of (await items.fetchAllItemDetails()))
        Deno.writeFile(`cache/details/${item.id}.json`, encoder.encode(JSON.stringify(item)));
}

async function updateAllPrices() {
    const encoder = new TextEncoder();
    for(const item of (await items.fetchAllItemsPrices()))
        Deno.writeFile(`cache/prices/${item.id}.json`, encoder.encode(JSON.stringify(item)));
}

// update all the files every 20 minutes
setInterval(() => updateAllPrices(), 600000);

