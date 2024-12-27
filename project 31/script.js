function validate() {
    const gender = document.getElementById("gender").value;
    var names = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var picture = document.getElementById("picture").value;
    let msg = document.getElementById("error")
    if (names === "") {
        document.getElementById("error").innerHTML = "Please fill your name."
        msg.style.backgroundColor = "red"
    } else {
        document.getElementById("error").innerHTML = "Login Successful."
        msg.style.backgroundColor = "green"
        document.getElementById("button").innerHTML = "<a href='./home.html' target='_blank'><button type='button'>NEXT</button></a>";
    }
    if (gender === "FEMALE") {
        document.getElementById("propic").innerHTML = "<img src='./female_user.png' class='img'>"
    } else if (gender === "MALE") {
        document.getElementById("propic").innerHTML = ""
    }
}