function validateForm() {

    let username = document.getElementById("username").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let password = document.getElementById("password").value.trim();
    let confirmPassword = document.getElementById("confirmPassword").value.trim();

    let message = document.getElementById("message");

    // All fields mandatory
    if (username === "" || email === "" || phone === "" || password === "" || confirmPassword === "") {
        message.innerHTML = "All fields are mandatory!";
        message.style.color = "red";
        return false;
    }

    // Phone validation (10 digits numeric)
    let phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(phone)) {
        message.innerHTML = "Phone number must be 10 digits only.";
        message.style.color = "red";
        return false;
    }

    // Email validation
    let emailPattern = /^[a-zA-Z]+@[a-zA-Z]{3}\.[a-zA-Z]{2,3}$/;
    if (!emailPattern.test(email)) {
        message.innerHTML = "Invalid Email format!";
        message.style.color = "red";
        return false;
    }

    // Password validation
    let passwordPattern = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[&$#@]).{7,}$/;
    if (!passwordPattern.test(password)) {
        message.innerHTML = "Password must be 7+ characters with 1 capital, 1 digit, 1 special (&,$,#,@)";
        message.style.color = "red";
        return false;
    }

    // Confirm password
    if (password !== confirmPassword) {
        message.innerHTML = "Passwords do not match!";
        message.style.color = "red";
        return false;
    }

    message.innerHTML = "Registration Successful!";
    message.style.color = "green";

    return true;
}

/* ---------------- DOM OPERATIONS ---------------- */

// Change image source
document.getElementById("changeImageBtn").onclick = function () {
    document.getElementById("myImage").src = "https://via.placeholder.com/150/FF0000";
};

// Add text node
let newPara = document.createElement("p");
let textNode = document.createTextNode("Welcome to Web Technologies Lab!");
newPara.appendChild(textNode);
document.body.appendChild(newPara);

// Delete a node
document.getElementById("deleteBtn").onclick = function () {
    let heading = document.getElementById("heading");
    heading.remove();
};

// Change CSS using DOM
document.getElementById("heading").style.position = "relative";
document.getElementById("heading").style.left = "20px";


/* ---------------- jQuery OPERATIONS ---------------- */

$(document).ready(function () {

    // Change button text using jQuery
    $("#submitBtn").text("Submit Form");

    // Set background image using jQuery
    $("body").css("background-image", "url('https://via.placeholder.com/800x600')");
    $("body").css("background-size", "cover");

    // Access form data using jQuery
    $("#submitBtn").click(function () {
        let name = $("#username").val();
        console.log("Username:", name);
    });

    // Add attribute using jQuery
    $("#myImage").attr("border", "5");

    /* -------- Ajax Example -------- */
    $("#submitBtn").click(function () {

        $.ajax({
            url: "https://jsonplaceholder.typicode.com/posts/1",
            type: "GET",
            success: function (response) {
                console.log("Ajax Response:", response);
            }
        });

    });

});
