"use strict";
var rect = document.getElementById("rectangle");
var rectLeft = rect.offsetLeft;
var rectTop = rect.offsetTop;
var rectWidth = rect.clientWidth;
var rectHeight = rect.clientHeight;

var browserW = document.documentElement.clientWidth;
var browserH = document.documentElement.clientHeight;

rect.addEventListener('mouseover',moveRect);
var newLeft,newTop;
function moveRect(event){
	console.log("Event Occured");
	newLeft = Math.floor(Math.random()*browserW);
	newTop = Math.floor(Math.random()*browserH);

	//newTop and newLeft will be different values than the previous ones
	while(newTop==rectTop && newLeft == rectLeft)
	{
		if(newTop == rectTop)
			newTop = Math.floor(Math.random()*browserH);
		else
			newLeft = Math.floor(Math.random()*browserW);
	}

	var correctL = false , correctT = false;
	while(!correctL || !correctT) //it wont go out of browser viewport
	{
		if(newLeft+rectWidth <= browserW)
			correctL = true;

		else
			newLeft = Math.floor(Math.random()*browserW);

		if(newTop+rectHeight <= browserH)
			correctT = true;
		else
			newTop = Math.floor(Math.random()*browserH);
	}
	// var intialTop = rect.offsetTop;//rectTop;
	// var intialLeft = rect.offsetLeft;//rectLeft;
	// rect.style.left = newLeft + "px";
	// rect.style.top = newTop + "px";
	toDo(rect.offsetTop,rect.offsetLeft,newTop,newLeft);
	 // rectLeft = rect.offsetLeft;
	 // rectTop = rect.offsetTop;
	 console.log(newTop,newLeft);

}
var id ;
function toDo(intialTop,intialLeft,finalTop,finalLeft){
	// intialTop =  rect.offsetTop;
	// intialLeft = rect.offsetLeft;

	console.log("function1 Called");
 id = setInterval(function() { sendToDesti(finalTop,finalLeft,id);},1);
}
function sendToDesti(finalTop,finalLeft,id)
{
	var intialTop=rect.offsetTop;
	var intialLeft=rect.offsetLeft;
	console.log("fuction2 called");
if(intialTop == finalTop && intialLeft == finalLeft)
	{
				clearInterval(id);
				return;
	}

	if(intialLeft<finalLeft)
		{
			if(intialLeft+20<=finalLeft)
				intialLeft+=20;
			else
				intialLeft = finalLeft;

		}
	else{
		if(intialLeft-20>=finalLeft)
			intialLeft-=20;
		else
			intialLeft = finalLeft;
	}


	if(intialTop<finalTop)
		{
			if(intialTop+20<=finalTop)
				intialTop+=20;
			else
				intialTop = finalTop;
		}
	else
	{
		if(intialTop-20>=finalTop)
			intialTop-=20;
		else
			intialTop = finalTop;
	}
	rect.style.left = intialLeft + "px";
	rect.style.top = intialTop + "px";
	console.log(intialTop,intialLeft);
	console.log(rect.offsetTop);
	console.log(rect.offsetLeft);



}

// var box = document.getElementById("box");

// var viewWidth = window.innerWidth;
// var viewHeight = window.innerHeight;

// window.addEventListener("resize", function(event){
//     viewWidth = window.innerWidth;
//     viewHeight = window.innerHeight;
// });

// box.addEventListener("mouseover", function(event){
//     var boxAttr = box.getBoundingClientRect();
//     var pos = getNewPosition(boxAttr.width, boxAttr.height);

//     box.style.top = pos.y + "px";
//     box.style.left = pos.x + "py";

// });

// function getNewPosition(boxWidth, boxHeight){
    
//     var newX = Math.floor((Math.random() * viewWidth) + 1 - boxWidth);
//     var newY = Math.floor((Math.random() * viewHeight) + 1 -boxHeight);


//     if(newX <0){
//         newX = 0;
//     }
//     if(newY < 0) {
//         newY = 0;
//     }

//     return {x:newX, y: newY}
// }