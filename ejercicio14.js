async function proccessItems(item){
    for(const item of items){
        await processItem(item)
    }
}

async function processItem(item){
    console.log(`Procesando item : `, item);
    await new Promise(resolve => setTimeout(resolve,1000));
    console.log(`Item procesado `, item);
}

const items = [1,2,3,4,5]
proccessItems(items)