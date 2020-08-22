var tips = ["Always try your best!", "Make sure you\'re taking breaks", "School is cool!", "Did you get all your math work done today?"]; 

function generateTip() {
	var index = Math.floor(Math.random() * 10) % tips.length;
	var tag = document.createElement("p");
	var text = document.createTextNode(tips[index]);
	tag.appendChild(text);
	var element = document.getElementById("tip_wrapper");
	element.appendChild(tag);
}

function getName() {
	var info = window.localStorage.getItem('info');
	console.log(info) 
	info = JSON.parse(info).name; 
	console.log(info)
	return info; 
}

function getSchool() {
	var info = window.localStorage.getItem('info'); 
	info = JSON.parse(info).school; 
	return info; 
}

function getClasses() {
	var info = window.localStorage.getItem('info');
	info = JSON.parse(info).classes; 
	return info; 
}

function updateClasses(title) {
	var info = window.localStorage.getItem('info');
	info = JSON.parse(info);
	var classes = info.classes
	classes.push({title: title}); 
	info.classes = classes; 
	var json = JSON.stringify(info);
	window.localStorage.setItem('info', json); 
}

function getUser() {
	var user = window.localStorage.getItem('user');
	return user; 
}

function getData() {
	var data = window.localStorage.getItem('info');
	return data;
}

function clearLocalStorage() {
	window.localStorage.clear(); 
}