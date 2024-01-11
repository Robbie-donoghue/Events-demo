console.log("hello world")

const button = document.getElementById('button')

//define color variable
//let backgroundColor = 'saddle-brown';

//console.log(button.textContent);
//change color function
function changeColor()
{
    if(document.body.style.background == 'red')
    {
        document.body.style.background = 'blue'
    }
    else
    {
        document.body.style.background = 'red'
    }
}

//add event
button.addEventListener('mouseover', changeColor)