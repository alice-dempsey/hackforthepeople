function signupForm() {
	const signupForm = document.getElementById("signupForm");
	const signupButton = document.getElementById("signupForm_Submit");
	const signupErrorMsg = document.getElementById("signup-error-msg");
	const signupErrorMsgHolder = document.getElementById("signup-error-msg-holder");

	signupButton.addEventListener("click", (e) => {
	e.preventDefault();
	const name = signupForm.name.value;
	const school = signupForm.school.value;
	const username = signupForm.email.value;
	const password1 = signupForm.pass1.value;
	const password2 = signupForm.pass2.value;
	const role = signupForm.role.value; 

	if (password1 === password2 && password1 != "" && username != "") {
		var info = createJSON(name, school, role, password1);
		httpPatch("Login", info, username);
	    alert("Thank you for making an accout!");
	    window.location.href = "../html/login.html";
	} else {
	    signupErrorMsg.style.opacity = 1;
	    signupErrorMsgHolder.style.background = "salmon";
	}
	})
}

function createJSON(myname, myschool, myrole, mypassword) {
	var json = { name: myname, school: myschool, role: myrole, password: mypassword, classes: [] };
	return JSON.stringify(json); 
}

