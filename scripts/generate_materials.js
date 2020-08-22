var fakeMData = {
	"resources": [
	{
		"type": "website",
		"title": "Khan Academy",
		"description": "Work through Units 1-3 of Algebra", 
		"url": "https://www.khanacademy.org/"
	}, 
	{
		"type": "website",
		"title": "Purple Math",
		"description": "Review integers for our lesson on Monday", 
		"url": "https://www.purplemath.com/"
	},
	{
		"type": "worksheet",
		"title": "Times Tables Review",
		"description": "Complete the following worksheet", 
		"url": "https://www.math-drills.com/multiplication2/images/multiplication_long_no_tseparator_0202_001_300.jpg?v=1472647486"
	},
	{
		"type": "worksheet",
		"title": "Times Tables Review 2",
		"description": "Complete the following worksheet", 
		"url": "https://globalpublicpolicywatch.org/x/2020/07/free-math-worksheets-third-grade-multiplication-printable-reviewer-sums-for-4th-692x895.jpg"
	}
]
};

var fakeSSData = {
	"resources": [
	{
		"type": "website",
		"title": "2020 Election - Democrats",
		"description": "Use a computer to Google the Democrats' presidential candidate and fill out the worksheet about their platform.", 
		"url": "https://joebiden.com/"
	}, 
	{
		"type": "website",
		"title": "2020 Election - Republicans",
		"description": "Use a computer to Google the Republicans' presidential candidate and fill out the worksheet about their platform.", 
		"url": "https://www.donaldjtrump.com/"
	},
	{
		"type": "worksheet",
		"title": "Compare and Contrast - Political Platforms",
		"description": "", 
		"url": "https://3.bp.blogspot.com/-7WQMCx9yhjI/UE9OoDifNjI/AAAAAAAAIMQ/-eMS6GRWWtM/s1600/compare%2Band%2Bcontrast.JPG"
	},
	{
		"type": "book",
		"title": "US Civics and the Government",
		"description": "Read Chapter 6 on Political Parties.", 
		"url": ""
	}
]
};  

function populatePanel(panelId) {
	// TODO: replace with the getvalue() function from airtable 
	var currData 
	if (panelId == "panel") {
		currData = fakeMData.resources
	} else {
		currData = fakeSSData.resources 
	}
	for (resource in currData) {
		if(currData[resource].type == "website") {
			makeWebsiteCard(currData[resource], panelId); 
		}
		else if (currData[resource].type == "worksheet") {
			makeWorksheetCard(currData[resource], panelId); 
		}
	}
}

function makeWebsiteCard(data, panelId) {
	console.log("make a makeWebsiteCard"); 
	createCard(data, "../website.png", panelId)
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

function makeCardHeader(data, image) {
	var headerTag = document.createElement("div"); 
	headerTag.style.display = "flex"
	headerTag.style.justifyContent = "center"
	var titleTag = document.createElement("h2")
	var title = document.createTextNode(data.title);
	titleTag.style.padding = "5px"
	titleTag.style.marginBottom = "0px"
	titleTag.appendChild(title); 
	console.log(titleTag)
	var imageTag = document.createElement("img")
	imageTag.src = image
	imageTag.style.height = "30px"
	imageTag.style.width = "30px"
	imageTag.style.padding = "5px"
	imageTag.style.paddingLeft = "15px"
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
	descriptionTag.appendChild(description)

	return descriptionTag; 
}

function makeUrl(data) {
	var urlTag = document.createElement("p")
	var url = document.createTextNode(data.url)
	urlTag.style.paddingLeft = "2vw"
	urlTag.style.paddingBottom = "2vw"	
	urlTag.appendChild(url)

	return urlTag; 
}

function makeWorksheetCard(data) {
	console.log("make a makeWorksheetCard"); 
}
