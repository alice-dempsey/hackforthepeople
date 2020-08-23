 function populatePanel(data, panelId, title) {
	var currData = JSON.parse(data)
	currData = currData.resources
	console.log(title)
	createTitleCard(title, panelId)
	for (resource in currData) {
		if(currData[resource].type == "website") {
			makeWebsiteCard(currData[resource], panelId); 
		}
		else if (currData[resource].type == "worksheet") {
			makeWorksheetCard(currData[resource], panelId); 
		}
		else if (currData[resource].type == "book") {
			makeBookCard(currData[resource], panelId)
		}
	}

	// create button if teacher
	if (isTeacher()){
		var element = document.getElementById(panelId);
		var divTag = document.createElement("div");
		divTag.style.display = "flex"
		divTag.style.width = "100%"
		divTag.style.justifyContent = "center"
		divTag.style.paddingBottom = "20px"
		var button = document.createElement("button");
		button.style.padding = "5px 10px"
		button.id = "add_new_card";
		button.innerHTML = "+";
		divTag.appendChild(button);
		element.appendChild(divTag);

		var modal_2 = document.getElementById("myModal-2");

		button.onclick = function() {
			modal_2.style.display = "block";
		}
	}

}

function isTeacher() {
	var info = window.localStorage.getItem('info');
	info = JSON.parse(info).role;
	return (info === "teacher");
}

function makeWebsiteCard(data, panelId) {
	createCard(data, "../style/website.png", panelId)
}

function makeWorksheetCard(data, panelId) {
	createCard(data, "../style/worksheet.png", panelId)
}

function makeBookCard(data, panelId) {
	createCard(data, "../style/book.png", panelId)
}

function createCard(data, image, panelId) {
	var divTag = document.createElement("div");
	divTag.style.backgroundColor = "#D3D3D3"
	divTag.style.margin = "10px"
	divTag.style.borderRadius = "20px"

	var element = document.getElementById(panelId)
	divTag.appendChild(makeCardHeader(data,image))
	divTag.appendChild(makeDescription(data))
	divTag.appendChild(makeUrl(data))
	element.appendChild(divTag)
}

function createTitleCard(data, panelId) {
	var divTag = document.createElement("div");
	divTag.style.margin = "10px"; 
	divTag.style.borderRadius = "20px"

	var titleTag = document.createElement("h2")
	var title = document.createTextNode(data);
	titleTag.style.display = "flex"
	titleTag.style.padding = "5px"
	titleTag.style.marginBottom = "0px"
	titleTag.appendChild(title); 

	var element = document.getElementById(panelId)
	console.log(divTag)
	divTag.appendChild(titleTag)
	console.log(divTag)
	element.appendChild(divTag)
}

function makeCardHeader(data, image) {
	var headerTag = document.createElement("div"); 
	headerTag.style.display = "flex"
	headerTag.style.justifyContent = "center"
	headerTag.style.marginBottom = "1em"
	var titleTag = document.createElement("h2")
	var title = document.createTextNode(data.title);
	titleTag.style.display = "flex"
	titleTag.style.padding = "5px"
	titleTag.style.marginBottom = "0px"
	titleTag.appendChild(title); 
	var imageTag = document.createElement("img")
	imageTag.src = image
	imageTag.style.display = "flex"
	imageTag.style.height = "30px"
	imageTag.style.width = "30px"
	imageTag.style.padding = "5px"
	imageTag.style.marginTop = "1em"
	imageTag.style.marginBottom = "0px"
	headerTag.appendChild(titleTag)
	headerTag.appendChild(imageTag)

	return headerTag; 
}

function makeDescription(data) {
	var descriptionTag = document.createElement("p")
	var description = document.createTextNode(data.description)
	descriptionTag.style.paddingLeft = "2vw"
	descriptionTag.style.paddingRight = "2vw"	
	descriptionTag.appendChild(description)

	return descriptionTag; 
}

function makeUrl(data) {
	var urlTag = document.createElement("p")
	var url = document.createTextNode(data.url)
	urlTag.style.paddingLeft = "2vw"
	urlTag.style.paddingBottom = "2vw"
	urlTag.style.width = "15vw"
	urlTag.style.wordWrap = "break-word"	
	urlTag.appendChild(url)

	return urlTag; 
}
