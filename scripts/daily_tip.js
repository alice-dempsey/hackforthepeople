var tips = ["Always try your best!", "Make sure you\'re taking breaks", "School is cool!", "Did you get all your math work done today?"]; 

function generateTip() {
	var index = Math.floor(Math.random() * 10) % tips.length;
	var tag = document.createElement("p");
	var text = document.createTextNode(tips[index]);
	tag.appendChild(text);
	var element = document.getElementById("tip_wrapper");
	element.appendChild(tag);
}