let greyBtn=document.getElementById("grey");
let redBtn =document.getElementById("red");
let greenBtn =document.getElementById("green");
let bike =document.getElementById("bike");
greyBtn.onclick=function(){
    bike.style.backgroundImage="url(grey-titanio-01.png)";
};
redBtn.onclick=function(){
    bike.style.backgroundImage="url(orange-tramonto-01.png)";
};
greenBtn.onclick=function(){
    bike.style.backgroundImage="url(green-tenace-01.png)";
};