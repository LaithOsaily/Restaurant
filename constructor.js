'use strict' ;


let header=document.getElementById("header");
header.style.paddingLeft="4rem";
header.style.paddingRight="2rem";
header.style.display= "flex";
header.style.justifyContent= "space-between";
header.style.backgroundColor= "#643843";



let nav=document.getElementById('nav');
nav.style.display="flex";
nav.style.justifyContent="space-around";
nav.style.listStyle="none";
nav.style.margin="40px";
nav.style.padding="0px";
nav.style.marginLeft="10px";

let a=document.getElementsByTagName('a');

for(let i=0;i<a.length;i++){
  a[i].style.textDecoration="none";
  a[i].style.color="#E7CBCB";
  a[i].style.padding="10px";
}


let footer=document.getElementById("footer");
footer.style.display="flex";
footer.style.background= "#643843";
footer.style.padding= "5px";
footer.style.paddingLeft="35rem";
footer.style.paddingRight="2rem";




let socialmedialinks=document.getElementById('socialmedialinks');
socialmedialinks.style.display="flex";
socialmedialinks.style.listStyle="none";
socialmedialinks.style.margin="10px";

// Food constructor
function Food(foodName, foodType, price) {
    this.foodId = this.generateFoodId();
    this.foodName = foodName;
    this.foodType = foodType;
    this.price = price;
  }
  
  // Generate a unique four-digit food id

  Food.prototype.generateFoodId = function () {
    let randomID = Math.floor(Math.random() * 9000) + 1000;
    return randomID;
  }
  
  Food.prototype.render = function () {
   let restaurant = document.getElementById('restaurant');

   let foodName = document.createElement('h3');
   foodName.textContent = this.foodName;
   foodName.style.fontWeight = 'bold';
   restaurant.appendChild(foodName);

   let foodType = document.createElement('p');
   foodType.textContent = this.foodType;
   foodType.style.color = 'blue';
   restaurant.appendChild(foodType);

   let foodPrice = document.createElement('p');
   foodPrice.textContent = this.price;
   foodPrice.classList.add('price');
   restaurant.appendChild(foodPrice);

   
  };
  

  let pizza = new Food ('pizza','fat','8.35');
  let burger = new Food ('burger','fat','4.25');
  let apple = new Food ('apple','fruit','0.63');
//   pizza.render();
//   burger.render();
//   apple.render();

  function handler(e){
    e.preventDefault();
    let foodName = e.target.food.value;
    let foodType = e.target.foodType.value;
    let foodPrice = e.target.price.value;



    let food = new Food (foodName,foodType,foodPrice);
    console.log({food});
    food.render();
    console.log(foodName,foodPrice,foodType);


  }

  let submitValues = document.getElementById('restaurantform');
  submitValues.addEventListener('submit',handler);