
// FETCHING THE ORDER TO DISPLAY

function getMenu(){

    fetch(" https://free-food-menus-api-production.up.railway.app/burgers")
    .then( (response)=>response.json())
    .then((data)=>{
    let items = document.querySelector(".fooditems")
    data.map(e=>{
        items.innerHTML += 
        `
        
        <li> 
        <img src= " ${e.img}" style="width:200px">
        <b>${e.name}</b>
        </li><br>
        `})

})
.catch(error=>{console.log("data not fetched"),error})
}  

getMenu();


// TAKING THE ORDER

 function takeOrder()
{ 
    return new Promise((resolve,reject)=>
    {
            setTimeout(()=>{
                fetch(" https://free-food-menus-api-production.up.railway.app/burgers")
    .then( response=>response.json())
    .then(data=>{
        const orders=[];
        for(let i=0;i<3;i++)
        {
            const randomIndex = Math.floor(Math.random()*data.length)
const burger = data[randomIndex]
            orders.push(burger)
        }
        const randomorder = {
            orders:orders
        };
        console.log(randomorder);
        resolve(randomorder)

     })

        },2500)
        
    })
}
    

// Order prep function

function orderPrep()
{ 
   return  new Promise((resolve,reject)=>
   {
    setTimeout(()=>{
       
        const order={order_status:true,paid:false}
            resolve(order)},1500)
           
    })
   }

// Order pay function

function payOrder()
{ 
    return  new Promise((resolve)=>
    {
     setTimeout(()=>{
        
         const payment={order_status:true,paid:true}
             resolve(payment)},1000)
             
     })
}
// thanku msg function

function thankyouFnc()
{
 alert("Thankyou arriving soon !!")
}

// PROMISE CHAINING

let btn = document.querySelector(".order"); 
btn.addEventListener("click",Order)

//ONCLICKING ORDER BUTTON

function Order(){
takeOrder()
.then(orderPrep)
.then(payOrder)
.then(payment=>{
    if(payment.paid)
    {
        thankyouFnc();
    }
})  

//.catch((error)=>{console.log(error)});
}