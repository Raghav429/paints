mouseevent = "empty";
var lastpositionX,lastpositionY;
canvas =document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color = "red";
width_of_line = 2;
radius = 90;
canvas.addEventListener("mousedown",my_mousedown);

function my_mousedown(e)
{
    mouseevent = "mousedown";
    radius =document.getElementById("radius").value;
}
canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e)
{
    mouseevent = "mouseleave";
}
canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e)
{
    mouseevent = "mouseup";
}
canvas.addEventListener("mousemove",my_mousemove)
function my_mousemove(e)
{
current_possition_of_mouse_X = e.clientX-canvas.offsetLeft;
current_possition_of_mouse_Y = e.clientY-canvas.offsetTop;

if (mouseevent =="mousedown"){
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth = width_of_line;
ctx.arc (current_possition_of_mouse_X,current_possition_of_mouse_Y,radius,0,2 * Math.PI);

console.log("Last position of x and y coordsinates= ");
console.log("x  = "+ lastpositionX+ "y = "+ lastpositionY);
ctx.moveTo(lastpositionX,lastpositionY);

console.log("Current position of x and y coordsinates= ");
console.log("x  = "+ current_possition_of_mouse_X+ "y = "+ current_possition_of_mouse_Y);
ctx.lineTo(current_possition_of_mouse_X,current_possition_of_mouse_Y);
ctx.stroke();
}
lastpositionX = current_possition_of_mouse_X;
lastpositionY = current_possition_of_mouse_Y;
}