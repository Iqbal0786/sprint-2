var cartData= JSON.parse(localStorage.getItem("FoodList"));
console.log(cartData)

  var total=0 ;

function showData(data){
    var parent= document.querySelector("#cartItem");
    parent.innerHTML="";
    data.map(function(elem ,index){
        let childDiv=document.createElement("div");
        childDiv.setAttribute("class","cartData");
        let img= document.createElement("img");
        img.src=elem.img;
        let price= document.createElement("h3");
        price.textContent=elem.price;
        total+=elem.price;
        var d= document.createElement("h3");
         d.textContent="Delete"
         d.setAttribute("class","delete");
          d.addEventListener("click",function(){
               deleteItem(index);
          })
          childDiv.append(img,price , d);
        parent.append(childDiv);
    })
}
showData(cartData);

// showing total ammount
document.querySelector("#totalItem").textContent=cartData.length;
document.querySelector("#totalPrice").textContent=total;

 function deleteItem(index){
     var newTotal=0;
     cartData.splice(index,1);
     console.log(cartData)
     localStorage.setItem("FoodList",JSON.stringify(cartData));
     cartData.map(function(elem){
         newTotal+=elem.price;
     })
     document.querySelector("#totalPrice").textContent=newTotal;
     document.querySelector("#totalItem").textContent=cartData.length;
     showData(cartData);
     // showing total ammount
 
 } 

 document.querySelector("#checkout").addEventListener("click",function(){
    window.location.href="checkout.html"
})