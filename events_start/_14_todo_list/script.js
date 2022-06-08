var enterButton = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var allDeleteButtons = document.querySelectorAll('.delete--button');


function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li, inputText, btn;
	li = document.createElement("li");
	inputText = document.createTextNode(input.value);
	btn = document.createElement("button");

	btn.appendChild(document.createTextNode("Delete"));
	li.appendChild(inputText);
	li.appendChild(btn);
	ul.appendChild(li);
	
	input.value = "";
	btn.onclick = deleteListItem;
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.key === 'Enter') {
		createListElement();
	}
}

function deleteListItem(event) {
	var listElement = event.target.parentNode;
	event.target.parentNode.parentNode.removeChild(listElement);

}


// TODO add click event listener to enterButton that calls addListAfterClick
enterButton.addEventListener('click', addListAfterClick);

// TODO add keypress event listener to input that calls addListAfterKeypress
input.addEventListener('keypress', addListAfterKeypress);

Array.from(allDeleteButtons).forEach(button => {
	// TODO add click event listener to button that calls deleteListItem
		button.addEventListener('click', deleteListItem);
});

