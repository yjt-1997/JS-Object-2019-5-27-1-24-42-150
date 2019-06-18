var user = new Object();
user.name = "John";
user.surname = "Mike";
user.name = "Peter";
delete user.name;
console.log(user);

var fruit = {
  apple: 20,
  pear: 20,
  peach: 10
};
function countFruit(fruit){
  return fruit.apple + fruit.pear + fruit.peach; 
}
console.log(countFruit(fruit));