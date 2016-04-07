//PROBLEM #1 : calculate average price of all items. console.log average price of $23.63 or $23.62

function averagePrice(products) {
  var total = 0;

  for (var i=0; i< products.length; i++){
    total += products[i].price/products.length;
  }
  console.log(total);
  return total
}

var ebayItems = [
  {price: 10},
  {price: 12},
  {price: 0.99}
];


averagePrice(items);//products parameter is equal to items
var ebayProductAvg = averagePrice(ebayItems); //products parameter is equal to ebayItems
// var amazonPorductAvg = averagePrice(amazonItems);


//PROBLEM #2 : Show me how to get an array of items that cost between $14.00 & $18.00 USD grab title.
//output is a new array with items names that cost  between 14 -18
//input is an array of objects
//loop through the items array, grab the items that cost 14-18 and display their names into new array

var newArray = [];

function costBetween(items){

for (var i =0; i < items.length; i++){
  if (items[i].price >= 14 && items[i].price <= 18){
      newArray.push(items[i].title);
  }

}
    console.log(newArray);
    return newArray

}

costBetween(items);


//PROBLEM #3 : Show me how to find the item with a "GBP" currency code and print its name and price.
                
//input array in which we itirate to find the currency code GBP
//output single item's name and price with gbp currency


function containsGbp(currency) {
  if (items.currency_code === "GBP") {
    return true;
  }
}

var gbpCurrency = items.filter(containsGbp);
console.log(gbpCurrency);



//PROBLEM #4 : Show me how to find which items are made of wood. Console.log the ones you find

//get a list of all things that have a material of "wood"
//input: items array (type = array of objects)

//1. pick out the items that have wood as one of their tags

var woodItems = items.filter(containsWood);
var woodItemTitles = woodItems.map(getTitle);
// console.log (woodItemTitles);

//going to determine if an item has wood in its materials
//input: a single type item (type = object)
function  containsWood(item){
  //1.search materials of the item
  //2. if materials contain "wood"

  if(item.materials.indexOf('wood') !== -1){
    return true;
  }
  else {
  //2b. if the material doesnt contain wood return false
    return false;
  }

}
//output : true of it contains wood, otherwise false (type=boolean)
//2. convert the items from step one to just a list of titles
//3. return or display the list 
//output : items that have a tag of wood (type= array of product names, strings)
//pull the title from an item
//input: a single item (type=object)
function getTitle(item){
  return item.title;

}

//output= the items title
























