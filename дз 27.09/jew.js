const calculateEngravingPrice = (message, pricePerWord) => {
    let items = message.trim().split(' ');
    for (let i = 0; i < items.length; i++) {
        while (items[i] == "") {
            items.splice(i, 1);
        }
    }
    console.log(items);
    const wholePrice = pricePerWord * items.length;
    alert(`stoimost ${wholePrice}`);
}
calculateEngravingPrice(prompt('vvedite predlozhenie'), prompt('vvedite tsenu za 1 ukrashenie'));


// filter(array => Array.length>0)s