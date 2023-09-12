btn.addEventListener("click", () => {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    if(email.includes("@gmail.com") && password.length >= 8) {
        document.getElementById("para").innerText = "Your email and Paasword is Valid";
        document.getElementById("para").style.color = "green";
    }
    else {
        document.getElementById("para").innerText = "Your email and Paasword is Invalid";
        document.getElementById("para").style.color= "green";
    }
});