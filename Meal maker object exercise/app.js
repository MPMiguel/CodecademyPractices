const menu = {
  _meal: '',
  _price: 0,
 set_meal(mealToCheck){
  if (typeof mealToCheck === "string"){
    return this._meal = mealToCheck;
  }
}, set_price(priceToCheck){
 if (typeof priceToCheck === "number"){
  return this._price = priceToCheck;
}
}, get_todaysSpecial(){
  if (this._meal === true && this._price === true){
    return 'Today’s Special is Spaghetti for $5!';
  } else {
    return 'Meal or price was not set correctly!';
  }
}
};

menu.set_meal('bravas');
menu.set_price(2);

console.log(menu.set_meal('carne'))
console.log(menu.get_todaysSpecial())