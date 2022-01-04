async function getData(){
    let request= await fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=a");
    let data= await request.json();
    let foodlist= data.meals;
    displayData(foodlist);
    console.log(foodlist);
}
getData();

function displayData(data){
    let parent= document.querySelector("#container");
    parent.innerHTML="";
   
    data.map(function(elem){
        let childDiv=document.createElement("div");
        childDiv.setAttribute("class","childDiv");
        let foodImg= document.createElement("img");
        foodImg.src=elem.strMealThumb;
        let price=document.createElement("h3");
        let foodprice=Math.floor( Math.random()* 500);
         price.textContent=foodprice+"₹";
         let button= document.createElement("button");
          button.textContent="Add to Cart";
          button.addEventListener("click",function(){
               addToCart(elem.strMealThumb ,foodprice);
               window.location.href="cart.html"
          })
         childDiv.append(foodImg,price,button);
         parent.append(childDiv);
    })
}


function addToCart(foodimg,price){
var foodCart= JSON.parse(localStorage.getItem("FoodList"))||[];
    var obj={
         img: foodimg,
         price:price
    }
     foodCart.push(obj);
     localStorage.setItem("FoodList",JSON.stringify(foodCart));
}