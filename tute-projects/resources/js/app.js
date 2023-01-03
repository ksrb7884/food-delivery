function clearError() {
    errors = document.getElementsByClassName('formError');
    for (let i of errors) {
        i.innerHTML = "";
    }
}

function setError(id, error) {
    element = document.getElementById(id);
    element.getElementsByClassName('formError')[0].innerHTML = error;
}

function validateForm() {
    var returnval = true;
    clearError();

    //Name validation
    var name = document.forms['myForm']["name"].value;
    if (name.length < 5) {
        setError("name", "*Lenght is too short");
        returnval = false;
    }


    //Email validation
    var email = document.forms['myForm']["email"].value;

    if (email.length > 30) {
        setError("email", "*Lenght is too long");
        returnval = false;
    }

    // Phone Number
    var phone = document.forms['myForm']["phone"].value;

    if (phone.length != 10) {
        setError("phone", "*Phone should be 10 digits");
        returnval = false;
    }

    // // Password
    // var pass = document.forms['myForm']["fpass"].value;

    // if (pass.length < 6) {
    //     setError("pass", "*Password should be more than 6 character");
    //     returnval = false;
    // }

    // // Confirm Password
    // var cpass = document.forms['myForm']["fcpass"].value;

    // if (cpass != pass) {
    //     setError("cpass", "*Password does not match");
    //     returnval = false;
    // }

    return returnval;
}