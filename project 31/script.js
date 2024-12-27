function validate() {  
    const gender = document.getElementById("gender").value;  
    const names = document.getElementById("name").value;  
    let msg = document.getElementById("error");  

    msg.innerHTML = "";  
    msg.style.backgroundColor = "";  

    if (names === "") {  
        msg.innerHTML = "Please fill your name.";  
        msg.style.backgroundColor = "red";   
    } else {  
        msg.innerHTML = "Login Successful.";  
        msg.style.backgroundColor = "green";   
        document.getElementById("button").innerHTML = "<a href='./home.html' target='_blank'><button type='button'>NEXT</button></a>";  
    }  

    if (gender === "FEMALE") {  
        document.getElementById("propic").innerHTML = "<img src='./female_user.png' class='img'>";  
    } else {  
        document.getElementById("propic").innerHTML = "<img src='./male_user.png' class='img'>";   
    }  
}  


//function saveGender() {  
//    const genderValue = document.getElementById("gender").value;   
//    localStorage.setItem('selectedGender', genderValue);  
//}  

//function loadGender() {  
//    const savedGender = localStorage.getItem('selectedGender');  
//    const genderSelect = document.getElementById("gender");  

//    if (savedGender) {  
//        genderSelect.value = savedGender;   
//        validate();   
//    }  
//}  

//document.getElementById("gender").addEventListener("change", saveGender);  
//window.onload = loadGender;
