console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	console.log('form submit');
}


let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);
//Part 1: Edit HTML
/*Change the following things in home.html.

Change the image of the Devmountain logo to an image of either a rubber duck or a cat of your choice.

Add another paragraph somewhere on the page. The content of the paragraph should be a message welcoming the user to the website.

Add a bulleted list (ul) of compliments to the user, with at least 3 bullet points.

Add a form input to the “Contact Us” form that asks the user how they heard about this website. They should be able to check boxes that include “Google”, “A friend”, or “Other”
*/