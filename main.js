var mouse_event = "empty";
var last_position_of_X,last_position_of_Y;

color = "black";
width_of_line = 1;

canvas = document.getElementById('myCanvas');
ctx = canvas.getContext('2d');

canvas.addEventListener("mousedown",my_mousedown);

function my_mousedown(e)
{
    mouse_event = "mouseDown";
}

canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e)
{
    mouse_event = "mouseleave";
}

canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e)
{
    mouse_event = "mouseUP";
}

canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e)
{
    current_position_of_X = e.clientX - canvas.offsetleft;
    current_position_of_Y = e.clientY - canvas.offsetTop;

    if (mouse_event == "mouseDown") {
       ctx.beginPath();
       ctx.strokeStyle = color; 
       ctx.lineWidth = width_of_line;

    ctx.moveTo(last_position_of_X,last_position_of_Y);

    ctx.lineTo(current_position_of_X,current_position_of_Y);
    ctx.stroke();
    }

    last_position_of_X = current_position_of_X;
    last_position_of_Y = current_position_of_Y
}
