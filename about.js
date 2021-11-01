console.log("hello world");

function handleSubmit(evt) {
	evt.preventDefault
	alert("form has been submitted successfully!!")
	console.log('form submitted tho');
}

let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);

document.getElementById("saePics").addEventListener("mouseover", mouseOver);

function mouseOver() {
  alert("The quick mouse jumps over the lazy naked cat...You're awesome!");
}
