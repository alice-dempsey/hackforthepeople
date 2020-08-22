function validate(data, username, password) {
	if (data === "Value not found") {
		loginErrorMsg.style.opacity = 1;
        loginErrorMsgHolder.style.background = "salmon";
        return;
	}

	var truePassword = JSON.parse(data).password; 
	if (password === truePassword) {
        alert("You have successfully logged in.");
        window.localStorage.setItem('user', username); 
        window.localStorage.setItem('info', data); 
        window.location.href = "../html/index.html";
    } else {
        loginErrorMsg.style.opacity = 1;
        loginErrorMsgHolder.style.background = "salmon";
    }
}

