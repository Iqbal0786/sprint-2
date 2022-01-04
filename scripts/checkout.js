
document.querySelector("#paymentbtn").addEventListener("click",function(event){
    event.preventDefault();
    var name= document.querySelector("#name").value;
    var addres= document.querySelector("#address").value;
    console.log(name,addres)
    alert("0 seconds :")
     setTimeout(function(){
        alert("Your order is accepted 3 seconds")
     },3000)
     setTimeout(function(){
        alert("Your order is being cooked 8 seconds")
     },8000)
     setTimeout(function(){
        alert("Your order is ready cooked 10 seconds")
     },10000)
     setTimeout(function(){
        alert("Order out for delivery 12 seconds ")
     },12000)
     alert("Order delivered")
})

