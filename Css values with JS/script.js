const inputs=document.querySelectorAll("#controls input");//does not return a array it returns a nodeList
//console.log(inputs);
function handleInput()
{
    //console.log(this.value)
    const suffix=this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`,this.value + suffix);
}

inputs.forEach(input => input.addEventListener("change",handleInput));
inputs.forEach(input => input.addEventListener("mousemove",handleInput));
