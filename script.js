document.getElementById("submitBtn").addEventListener("click", function() {
    if (validateForm()) {
        showPopup();
    }
});

document.getElementById("resetBtn").addEventListener("click", function() {
    document.getElementById("surveyForm").reset();
});

document.getElementById("closePopup").addEventListener("click", function() {
    hidePopup();
});

function validateForm() {
    return true;
}

function showPopup() {
    var popup = document.getElementById("popup");
    var submittedData = document.getElementById("submittedData");

    submittedData.innerHTML = "First Name: " + document.getElementById("firstName").value + "<br>" +
                              "Last Name: " + document.getElementById("lastName").value + "<br>" +
                              "Date of Birth: " + document.getElementById("dob").value + "<br>" +
                              "Country: " + document.getElementById("country").value + "<br>" +
                              "Gender: " + getSelectedGenders() + "<br>" +
                              "Profession: " + document.getElementById("profession").value + "<br>" +
                              "Email: " + document.getElementById("email").value + "<br>" +
                              "Mobile Number: " + document.getElementById("mobile").value;

    popup.style.display = "block";
}

function hidePopup() {
    var popup = document.getElementById("popup");
    popup.style.display = "none";
}

function getSelectedGenders() {
    var selectedGenders = [];
    if (document.getElementById("male").checked) {
        selectedGenders.push("Male");
    }
    if (document.getElementById("female").checked) {
        selectedGenders.push("Female");
    }
    if (document.getElementById("other").checked) {
        selectedGenders.push("Other");
    }
    return selectedGenders.join(", ");
}