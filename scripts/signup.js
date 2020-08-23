var name; 
var school;
var username;
var password1; 
var role; 

function signupFormComplete() {
	const signupForm = document.getElementById("signupForm");

	name = signupForm.name.value;
	school = signupForm.school.value;
	username = signupForm.email.value;
	password1 = signupForm.pass1.value;
	const password2 = signupForm.pass2.value;
	role = signupForm.role.value; 

	return (password1 === password2 && password1 != "" && username != "");
}

function sendErrorMessage() {
	const signupErrorMsg = document.getElementById("signup-error-msg");
	const signupErrorMsgHolder = document.getElementById("signup-error-msg-holder");
	signupErrorMsg.style.opacity = 1;
	signupErrorMsgHolder.style.background = "salmon";
}

function getInfo() {
	return createJSON(name, school, role, password1);
}

function getUser() {
	return username; 
}

function createJSON(myname, myschool, myrole, mypassword) {
	var json = { name: myname, school: myschool, role: myrole, password: mypassword, classes: [] };
	return JSON.stringify(json); 
}

