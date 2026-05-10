function loginUser() {

    // Get input values
    let username = document.getElementById("usernameEntry").value;
    let password = document.getElementById("passwordEntry").value;
    
    // If/Else checks inputs
    let status;

    if (username === "" || password === "") {
        status = "empty";
    }

    else if (username === "student" && password === "summerbreaksoon") {
        status = "success";
    }

    else if (username !== "student") {
        status = "wrongUser";
    }

    else {
        status = "wrongPass";
    }

    // Switch displays message/result based on the status 

    switch (status) {
        case "empty":
            window.alert("Please fill in all fields.");
            document.getElementById("result").innerHTML = "Fields cannot be empty.";
            break; 
        
        case "success":
            window.location.href="dashboard.html";
            break; 

        case "wrongUser":
            window.alert("Incorrect username. Please try again.");
            document.getElementById("result").innerHTML = "Incorrect username.";
            break; 
        
        case "wrongPass":
            window.alert("Incorrect password. Please try again.");
            document.getElementById("result").innerHTML = "Incorrect password.";
            break;
            
        default:
            window.alert("Error.");
    }
}